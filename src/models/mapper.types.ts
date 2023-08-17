export type Mapper<T extends string | number | symbol, U> = {
  [key in T]: U;
};
