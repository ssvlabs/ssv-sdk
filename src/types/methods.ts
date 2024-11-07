/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Prettify } from 'viem'

export type RemoveConfigArg<T extends (...args: any[]) => any> = (
  props: Prettify<Omit<Parameters<T>[1], 'config'>>,
) => ReturnType<T>

export type RemoveClientArg<T extends (...args: any[]) => any> = (
  props: Prettify<Omit<Parameters<T>[1], 'client'>>,
) => ReturnType<T>
