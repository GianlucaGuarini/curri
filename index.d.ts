declare const curri: <T extends (...args:unknown[]) => unknown, U>(...args:T[]) => U

export default curri
