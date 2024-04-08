// Function to format date and time

export const formatDateTime = (dateTimeIso: string): string => {
    const dateTime = new Date(dateTimeIso);
    const options: any = { month: 'string', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
    return dateTime.toLocaleDateString('en-US', options);
};

// Function to check if start and end dates are the same
export const isSameDate = (startDate: string, endDate: string): boolean => {
    const start = new Date(startDate).toDateString();
    const end = new Date(endDate).toDateString();
    return start === end;
};

export function formatTime(dateString: string) {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}