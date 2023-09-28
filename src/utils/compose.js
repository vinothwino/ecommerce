export const compose =
  (...fns) =>
  (initialVal) =>
    fns.reduceRight((val, fn) => fn(val), initialVal);
