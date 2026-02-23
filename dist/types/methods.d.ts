type Tail<T extends any[]> = T extends [any, ...infer R] ? R : never;
export type RemoveConfigArg<T extends (...args: any[]) => any> = (...args: Tail<Parameters<T>>) => ReturnType<T>;
export type RemoveClientArg<T extends (...args: any[]) => any> = (...args: Tail<Parameters<T>>) => ReturnType<T>;
export {};
