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

export interface SSVOperatorsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "cancelDeclaredOperatorFee"
      | "declareOperatorFee"
      | "executeOperatorFee"
      | "reduceOperatorFee"
      | "registerOperator"
      | "removeOperator"
      | "setOperatorsPrivateUnchecked"
      | "setOperatorsPublicUnchecked"
      | "withdrawAllOperatorEarnings"
      | "withdrawOperatorEarnings"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "FeeRecipientAddressUpdated"
      | "OperatorAdded"
      | "OperatorFeeDeclarationCancelled"
      | "OperatorFeeDeclared"
      | "OperatorFeeExecuted"
      | "OperatorPrivacyStatusUpdated"
      | "OperatorRemoved"
      | "OperatorWithdrawn"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "cancelDeclaredOperatorFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "declareOperatorFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeOperatorFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reduceOperatorFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerOperator",
    values: [BytesLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "removeOperator",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOperatorsPrivateUnchecked",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setOperatorsPublicUnchecked",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAllOperatorEarnings",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawOperatorEarnings",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelDeclaredOperatorFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "declareOperatorFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeOperatorFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reduceOperatorFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOperatorsPrivateUnchecked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOperatorsPublicUnchecked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAllOperatorEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawOperatorEarnings",
    data: BytesLike
  ): Result;
}

export namespace FeeRecipientAddressUpdatedEvent {
  export type InputTuple = [owner: AddressLike, recipientAddress: AddressLike];
  export type OutputTuple = [owner: string, recipientAddress: string];
  export interface OutputObject {
    owner: string;
    recipientAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorAddedEvent {
  export type InputTuple = [
    operatorId: BigNumberish,
    owner: AddressLike,
    publicKey: BytesLike,
    fee: BigNumberish
  ];
  export type OutputTuple = [
    operatorId: bigint,
    owner: string,
    publicKey: string,
    fee: bigint
  ];
  export interface OutputObject {
    operatorId: bigint;
    owner: string;
    publicKey: string;
    fee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorFeeDeclarationCancelledEvent {
  export type InputTuple = [owner: AddressLike, operatorId: BigNumberish];
  export type OutputTuple = [owner: string, operatorId: bigint];
  export interface OutputObject {
    owner: string;
    operatorId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorFeeDeclaredEvent {
  export type InputTuple = [
    owner: AddressLike,
    operatorId: BigNumberish,
    blockNumber: BigNumberish,
    fee: BigNumberish
  ];
  export type OutputTuple = [
    owner: string,
    operatorId: bigint,
    blockNumber: bigint,
    fee: bigint
  ];
  export interface OutputObject {
    owner: string;
    operatorId: bigint;
    blockNumber: bigint;
    fee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorFeeExecutedEvent {
  export type InputTuple = [
    owner: AddressLike,
    operatorId: BigNumberish,
    blockNumber: BigNumberish,
    fee: BigNumberish
  ];
  export type OutputTuple = [
    owner: string,
    operatorId: bigint,
    blockNumber: bigint,
    fee: bigint
  ];
  export interface OutputObject {
    owner: string;
    operatorId: bigint;
    blockNumber: bigint;
    fee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorPrivacyStatusUpdatedEvent {
  export type InputTuple = [operatorIds: BigNumberish[], toPrivate: boolean];
  export type OutputTuple = [operatorIds: bigint[], toPrivate: boolean];
  export interface OutputObject {
    operatorIds: bigint[];
    toPrivate: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorRemovedEvent {
  export type InputTuple = [operatorId: BigNumberish];
  export type OutputTuple = [operatorId: bigint];
  export interface OutputObject {
    operatorId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorWithdrawnEvent {
  export type InputTuple = [
    owner: AddressLike,
    operatorId: BigNumberish,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, operatorId: bigint, value: bigint];
  export interface OutputObject {
    owner: string;
    operatorId: bigint;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SSVOperators extends BaseContract {
  connect(runner?: ContractRunner | null): SSVOperators;
  waitForDeployment(): Promise<this>;

  interface: SSVOperatorsInterface;

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

  cancelDeclaredOperatorFee: TypedContractMethod<
    [operatorId: BigNumberish],
    [void],
    "nonpayable"
  >;

  declareOperatorFee: TypedContractMethod<
    [operatorId: BigNumberish, fee: BigNumberish],
    [void],
    "nonpayable"
  >;

  executeOperatorFee: TypedContractMethod<
    [operatorId: BigNumberish],
    [void],
    "nonpayable"
  >;

  reduceOperatorFee: TypedContractMethod<
    [operatorId: BigNumberish, fee: BigNumberish],
    [void],
    "nonpayable"
  >;

  registerOperator: TypedContractMethod<
    [publicKey: BytesLike, fee: BigNumberish, setPrivate: boolean],
    [bigint],
    "nonpayable"
  >;

  removeOperator: TypedContractMethod<
    [operatorId: BigNumberish],
    [void],
    "nonpayable"
  >;

  setOperatorsPrivateUnchecked: TypedContractMethod<
    [operatorIds: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  setOperatorsPublicUnchecked: TypedContractMethod<
    [operatorIds: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  withdrawAllOperatorEarnings: TypedContractMethod<
    [operatorId: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawOperatorEarnings: TypedContractMethod<
    [operatorId: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "cancelDeclaredOperatorFee"
  ): TypedContractMethod<[operatorId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "declareOperatorFee"
  ): TypedContractMethod<
    [operatorId: BigNumberish, fee: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "executeOperatorFee"
  ): TypedContractMethod<[operatorId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "reduceOperatorFee"
  ): TypedContractMethod<
    [operatorId: BigNumberish, fee: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "registerOperator"
  ): TypedContractMethod<
    [publicKey: BytesLike, fee: BigNumberish, setPrivate: boolean],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeOperator"
  ): TypedContractMethod<[operatorId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOperatorsPrivateUnchecked"
  ): TypedContractMethod<[operatorIds: BigNumberish[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOperatorsPublicUnchecked"
  ): TypedContractMethod<[operatorIds: BigNumberish[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawAllOperatorEarnings"
  ): TypedContractMethod<[operatorId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawOperatorEarnings"
  ): TypedContractMethod<
    [operatorId: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "FeeRecipientAddressUpdated"
  ): TypedContractEvent<
    FeeRecipientAddressUpdatedEvent.InputTuple,
    FeeRecipientAddressUpdatedEvent.OutputTuple,
    FeeRecipientAddressUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OperatorAdded"
  ): TypedContractEvent<
    OperatorAddedEvent.InputTuple,
    OperatorAddedEvent.OutputTuple,
    OperatorAddedEvent.OutputObject
  >;
  getEvent(
    key: "OperatorFeeDeclarationCancelled"
  ): TypedContractEvent<
    OperatorFeeDeclarationCancelledEvent.InputTuple,
    OperatorFeeDeclarationCancelledEvent.OutputTuple,
    OperatorFeeDeclarationCancelledEvent.OutputObject
  >;
  getEvent(
    key: "OperatorFeeDeclared"
  ): TypedContractEvent<
    OperatorFeeDeclaredEvent.InputTuple,
    OperatorFeeDeclaredEvent.OutputTuple,
    OperatorFeeDeclaredEvent.OutputObject
  >;
  getEvent(
    key: "OperatorFeeExecuted"
  ): TypedContractEvent<
    OperatorFeeExecutedEvent.InputTuple,
    OperatorFeeExecutedEvent.OutputTuple,
    OperatorFeeExecutedEvent.OutputObject
  >;
  getEvent(
    key: "OperatorPrivacyStatusUpdated"
  ): TypedContractEvent<
    OperatorPrivacyStatusUpdatedEvent.InputTuple,
    OperatorPrivacyStatusUpdatedEvent.OutputTuple,
    OperatorPrivacyStatusUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OperatorRemoved"
  ): TypedContractEvent<
    OperatorRemovedEvent.InputTuple,
    OperatorRemovedEvent.OutputTuple,
    OperatorRemovedEvent.OutputObject
  >;
  getEvent(
    key: "OperatorWithdrawn"
  ): TypedContractEvent<
    OperatorWithdrawnEvent.InputTuple,
    OperatorWithdrawnEvent.OutputTuple,
    OperatorWithdrawnEvent.OutputObject
  >;

  filters: {
    "FeeRecipientAddressUpdated(address,address)": TypedContractEvent<
      FeeRecipientAddressUpdatedEvent.InputTuple,
      FeeRecipientAddressUpdatedEvent.OutputTuple,
      FeeRecipientAddressUpdatedEvent.OutputObject
    >;
    FeeRecipientAddressUpdated: TypedContractEvent<
      FeeRecipientAddressUpdatedEvent.InputTuple,
      FeeRecipientAddressUpdatedEvent.OutputTuple,
      FeeRecipientAddressUpdatedEvent.OutputObject
    >;

    "OperatorAdded(uint64,address,bytes,uint256)": TypedContractEvent<
      OperatorAddedEvent.InputTuple,
      OperatorAddedEvent.OutputTuple,
      OperatorAddedEvent.OutputObject
    >;
    OperatorAdded: TypedContractEvent<
      OperatorAddedEvent.InputTuple,
      OperatorAddedEvent.OutputTuple,
      OperatorAddedEvent.OutputObject
    >;

    "OperatorFeeDeclarationCancelled(address,uint64)": TypedContractEvent<
      OperatorFeeDeclarationCancelledEvent.InputTuple,
      OperatorFeeDeclarationCancelledEvent.OutputTuple,
      OperatorFeeDeclarationCancelledEvent.OutputObject
    >;
    OperatorFeeDeclarationCancelled: TypedContractEvent<
      OperatorFeeDeclarationCancelledEvent.InputTuple,
      OperatorFeeDeclarationCancelledEvent.OutputTuple,
      OperatorFeeDeclarationCancelledEvent.OutputObject
    >;

    "OperatorFeeDeclared(address,uint64,uint256,uint256)": TypedContractEvent<
      OperatorFeeDeclaredEvent.InputTuple,
      OperatorFeeDeclaredEvent.OutputTuple,
      OperatorFeeDeclaredEvent.OutputObject
    >;
    OperatorFeeDeclared: TypedContractEvent<
      OperatorFeeDeclaredEvent.InputTuple,
      OperatorFeeDeclaredEvent.OutputTuple,
      OperatorFeeDeclaredEvent.OutputObject
    >;

    "OperatorFeeExecuted(address,uint64,uint256,uint256)": TypedContractEvent<
      OperatorFeeExecutedEvent.InputTuple,
      OperatorFeeExecutedEvent.OutputTuple,
      OperatorFeeExecutedEvent.OutputObject
    >;
    OperatorFeeExecuted: TypedContractEvent<
      OperatorFeeExecutedEvent.InputTuple,
      OperatorFeeExecutedEvent.OutputTuple,
      OperatorFeeExecutedEvent.OutputObject
    >;

    "OperatorPrivacyStatusUpdated(uint64[],bool)": TypedContractEvent<
      OperatorPrivacyStatusUpdatedEvent.InputTuple,
      OperatorPrivacyStatusUpdatedEvent.OutputTuple,
      OperatorPrivacyStatusUpdatedEvent.OutputObject
    >;
    OperatorPrivacyStatusUpdated: TypedContractEvent<
      OperatorPrivacyStatusUpdatedEvent.InputTuple,
      OperatorPrivacyStatusUpdatedEvent.OutputTuple,
      OperatorPrivacyStatusUpdatedEvent.OutputObject
    >;

    "OperatorRemoved(uint64)": TypedContractEvent<
      OperatorRemovedEvent.InputTuple,
      OperatorRemovedEvent.OutputTuple,
      OperatorRemovedEvent.OutputObject
    >;
    OperatorRemoved: TypedContractEvent<
      OperatorRemovedEvent.InputTuple,
      OperatorRemovedEvent.OutputTuple,
      OperatorRemovedEvent.OutputObject
    >;

    "OperatorWithdrawn(address,uint64,uint256)": TypedContractEvent<
      OperatorWithdrawnEvent.InputTuple,
      OperatorWithdrawnEvent.OutputTuple,
      OperatorWithdrawnEvent.OutputObject
    >;
    OperatorWithdrawn: TypedContractEvent<
      OperatorWithdrawnEvent.InputTuple,
      OperatorWithdrawnEvent.OutputTuple,
      OperatorWithdrawnEvent.OutputObject
    >;
  };
}