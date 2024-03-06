export const timestampToReadableTime = (timestamp: number): string => {
  return new Intl.DateTimeFormat("default", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date(timestamp));
};
