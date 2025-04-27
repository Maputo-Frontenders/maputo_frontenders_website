import { EventProps } from "@/types";

export function generateCalendarUrl(event: EventProps) {
  if (navigator.userAgent.includes("Android")) {
    return generateGoogleCalendarUrl(event);
  }
  if (navigator.userAgent.includes("iPhone")) {
    return generateICalUrl(event);
  }
  return generateGoogleCalendarUrl(event);
}

function generateGoogleCalendarUrl(event: EventProps) {
  const startTime = new Date(event.date.start)
    .toISOString()
    .replace(/-|:|\.\d+/g, "");
  const endTime = event.date.end
    ? new Date(event.date.end).toISOString().replace(/-|:|\.\d+/g, "")
    : "";

  let url = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  url += `&text=${encodeURIComponent(event.title)}`;
  url += `&dates=${startTime}/${endTime || startTime}`;
  url += `&details=${encodeURIComponent(event.description)}`;
  url += `&location=${encodeURIComponent(event.location)}`;

  return url;
}

function generateICalUrl(event: EventProps) {
  const startTime = new Date(event.date.start).toISOString();
  const endTime = event.date.end
    ? new Date(event.date.end).toISOString()
    : startTime;

  let icsContent = "BEGIN:VCALENDAR\n";
  icsContent += "VERSION:2.0\n";
  icsContent += "BEGIN:VEVENT\n";
  icsContent += `DTSTART:${startTime.replace(/[-:]/g, "").split(".")[0]}Z\n`;
  icsContent += `DTEND:${endTime.replace(/[-:]/g, "").split(".")[0]}Z\n`;
  icsContent += `SUMMARY:${event.title}\n`;
  icsContent += `DESCRIPTION:${event.description}\n`;
  icsContent += `LOCATION:${event.location}\n`;
  icsContent += "END:VEVENT\n";
  icsContent += "END:VCALENDAR";

  return `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
}
