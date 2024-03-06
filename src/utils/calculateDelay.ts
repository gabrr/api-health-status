export const calculateDelay: (number: number) => string = (index) => {
  // Cycle index every 20 items (0-20, then back to 0)
  const cycleIndex = index % 20;
  // Calculate delay based on cycled index
  const delay = cycleIndex * 0.08; // Adjust the multiplier as needed
  return `${delay}s`;
};
