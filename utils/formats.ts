export function formatDateToDDMMYYYY(date: string) {
  const parsedDate = new Date(date);
  const day = String(parsedDate.getDate()).padStart(2, "0");
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  const year = parsedDate.getFullYear();
  return `${day}/${month}/${year}`;
}

// Nov 22, 2023
export function formatDateToMonthDayYear(date: string) {
  const parsedDate = new Date(date);
  const month = parsedDate.toLocaleString("pt-PT", {
    month: "short",
  });
  const day = parsedDate.getDate();
  const year = parsedDate.getFullYear();

  const formattedMonth =
    month.charAt(0).toUpperCase() + month.slice(1).replace(".", "");

  return `${formattedMonth} ${day}, ${year}`;
}

//  11:00 AM
export function formatDateToHour(date: string) {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    return "";
  }
  return `${parsedDate.getHours().toString().padStart(2, "0")}:${parsedDate
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${parsedDate.getHours() < 12 ? "AM" : "PM"}`;
}
