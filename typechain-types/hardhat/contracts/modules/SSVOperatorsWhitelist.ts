/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface SSVOperatorsWhitelistInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "removeOperatorsWhitelistingContract"
      | "removeOperatorsWhitelists"
      | "setOperatorsWhitelistingContract"
      | "setOperatorsWhitelists"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "OperatorMultipleWhitelistRemoved"
      | "OperatorMultipleWhitelistUpdated"
      | "OperatorWhitelistingContractUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "removeOperatorsWhitelistingContract",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeOperatorsWhitelists",
    values: [BigNumberish[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setOperatorsWhitelistingContract",
    values: [BigNumberish[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setOperatorsWhitelists",
    values: [BigNumberish[], AddressLike[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "removeOperatorsWhitelistingContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeOperatorsWhitelists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOperatorsWhitelistingContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOperatorsWhitelists",
    data: BytesLike
  ): Result;
}

export namespace OperatorMultipleWhitelistRemovedEvent {
  export type InputTuple = [
    operatorIds: BigNumberish[],
    whitelistAddresses: AddressLike[]
  ];
  export type OutputTuple = [
    operatorIds: bigint[],
    whitelistAddresses: string[]
  ];
  export interface OutputObject {
    operatorIds: bigint[];
    whitelistAddresses: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorMultipleWhitelistUpdatedEvent {
  export type InputTuple = [
    operatorIds: BigNumberish[],
    whitelistAddresses: AddressLike[]
  ];
  export type OutputTuple = [
    operatorIds: bigint[],
    whitelistAddresses: string[]
  ];
  export interface OutputObject {
    operatorIds: bigint[];
    whitelistAddresses: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorWhitelistingContractUpdatedEvent {
  export type InputTuple = [
    operatorIds: BigNumberish[],
    whitelistingContract: AddressLike
  ];
  export type OutputTuple = [
    operatorIds: bigint[],
    whitelistingContract: string
  ];
  export interface OutputObject {
    operatorIds: bigint[];
    whitelistingContract: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SSVOperatorsWhitelist extends BaseContract {
  connect(runner?: ContractRunner | null): SSVOperatorsWhitelist;
  waitForDeployment(): Promise<this>;

  interface: SSVOperatorsWhitelistInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  removeOperatorsWhitelistingContract: TypedContractMethod<
    [operatorIds: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  removeOperatorsWhitelists: TypedContractMethod<
    [operatorIds: BigNumberish[], whitelistAddresses: AddressLike[]],
    [void],
    "nonpayable"
  >;

  setOperatorsWhitelistingContract: TypedContractMethod<
    [operatorIds: BigNumberish[], whitelistingContract: AddressLike],
    [void],
    "nonpayable"
  >;

  setOperatorsWhitelists: TypedContractMethod<
    [operatorIds: BigNumberish[], whitelistAddresses: AddressLike[]],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "removeOperatorsWhitelistingContract"
  ): TypedContractMethod<[operatorIds: BigNumberish[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeOperatorsWhitelists"
  ): TypedContractMethod<
    [operatorIds: BigNumberish[], whitelistAddresses: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setOperatorsWhitelistingContract"
  ): TypedContractMethod<
    [operatorIds: BigNumberish[], whitelistingContract: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setOperatorsWhitelists"
  ): TypedContractMethod<
    [operatorIds: BigNumberish[], whitelistAddresses: AddressLike[]],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "OperatorMultipleWhitelistRemoved"
  ): TypedContractEvent<
    OperatorMultipleWhitelistRemovedEvent.InputTuple,
    OperatorMultipleWhitelistRemovedEvent.OutputTuple,
    OperatorMultipleWhitelistRemovedEvent.OutputObject
  >;
  getEvent(
    key: "OperatorMultipleWhitelistUpdated"
  ): TypedContractEvent<
    OperatorMultipleWhitelistUpdatedEvent.InputTuple,
    OperatorMultipleWhitelistUpdatedEvent.OutputTuple,
    OperatorMultipleWhitelistUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OperatorWhitelistingContractUpdated"
  ): TypedContractEvent<
    OperatorWhitelistingContractUpdatedEvent.InputTuple,
    OperatorWhitelistingContractUpdatedEvent.OutputTuple,
    OperatorWhitelistingContractUpdatedEvent.OutputObject
  >;

  filters: {
    "OperatorMultipleWhitelistRemoved(uint64[],address[])": TypedContractEvent<
      OperatorMultipleWhitelistRemovedEvent.InputTuple,
      OperatorMultipleWhitelistRemovedEvent.OutputTuple,
      OperatorMultipleWhitelistRemovedEvent.OutputObject
    >;
    OperatorMultipleWhitelistRemoved: TypedContractEvent<
      OperatorMultipleWhitelistRemovedEvent.InputTuple,
      OperatorMultipleWhitelistRemovedEvent.OutputTuple,
      OperatorMultipleWhitelistRemovedEvent.OutputObject
    >;

    "OperatorMultipleWhitelistUpdated(uint64[],address[])": TypedContractEvent<
      OperatorMultipleWhitelistUpdatedEvent.InputTuple,
      OperatorMultipleWhitelistUpdatedEvent.OutputTuple,
      OperatorMultipleWhitelistUpdatedEvent.OutputObject
    >;
    OperatorMultipleWhitelistUpdated: TypedContractEvent<
      OperatorMultipleWhitelistUpdatedEvent.InputTuple,
      OperatorMultipleWhitelistUpdatedEvent.OutputTuple,
      OperatorMultipleWhitelistUpdatedEvent.OutputObject
    >;

    "OperatorWhitelistingContractUpdated(uint64[],address)": TypedContractEvent<
      OperatorWhitelistingContractUpdatedEvent.InputTuple,
      OperatorWhitelistingContractUpdatedEvent.OutputTuple,
      OperatorWhitelistingContractUpdatedEvent.OutputObject
    >;
    OperatorWhitelistingContractUpdated: TypedContractEvent<
      OperatorWhitelistingContractUpdatedEvent.InputTuple,
      OperatorWhitelistingContractUpdatedEvent.OutputTuple,
      OperatorWhitelistingContractUpdatedEvent.OutputObject
    >;
  };
}