export const sortArray = <T, K extends keyof T>(array: T[], sortBy: K) =>
  [...array].sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1));
