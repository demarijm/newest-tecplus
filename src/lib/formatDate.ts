export function formatDate(dateString: string): string {
  const isoDate = new Date(dateString);

  if (isNaN(isoDate.getTime())) {
    throw new Error("Invalid date string");
  }

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  };

  return isoDate.toLocaleDateString('en-US', options);
}