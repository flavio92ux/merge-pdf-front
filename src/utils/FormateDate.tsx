export function formatDate(isoDate: string): string {
  try {
    if (!isoDate) {
      throw new Error("Invalid date string");
    }

    const date = new Date(isoDate);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date";
  }
}