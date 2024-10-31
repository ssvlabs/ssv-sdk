import { Prettify } from 'viem'

export type RemoveConfigArg<T extends (...args: any[]) => any> = (
  props: Prettify<Omit<Parameters<T>[1], 'config'>>,
) => ReturnType<T>
