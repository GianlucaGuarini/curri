// types borrowed from https://stackoverflow.com/a/63905763
type Curried<A extends unknown[], R> =
  <P extends Partial<A>>(...args: P) => P extends A ? R :
    A extends [...SameLength<P>, ...infer S] ? S extends unknown[] ? Curried<S, R>
    : never : never;
type SameLength<T extends unknown[]> = Extract<{ [K in keyof T]: unknown }, unknown[]>

declare const curri: <A extends unknown[], R>(fn: (...args: A) => R) => Curried<A, R>

export default curri
