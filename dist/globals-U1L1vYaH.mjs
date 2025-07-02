import { isUndefined, cloneDeepWith, merge } from "lodash-es";
import { formatUnits, decodeAbiParameters, defineChain as defineChain$1, parseUnits, isAddress } from "viem";
import "graphql-request";
import { z } from "zod";
const numberFormatter = new Intl.NumberFormat("en-US", {
  useGrouping: true,
  maximumFractionDigits: 2
});
const _percentageFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2
});
const percentageFormatter = {
  format: (value) => {
    if (!value)
      return "0%";
    return _percentageFormatter.format(value / 100);
  }
};
const bigintFormatter = new Intl.NumberFormat("en-US", {
  useGrouping: false,
  maximumFractionDigits: 7
});
const ethFormatter = new Intl.NumberFormat("en-US", {
  useGrouping: true,
  maximumFractionDigits: 4
});
const formatSSV = (num, decimals = 18) => ethFormatter.format(+formatUnits(num, decimals));
const formatBigintInput = (num, decimals = 18) => bigintFormatter.format(+formatUnits(num, decimals));
const units = {
  seconds: 1e3,
  minutes: 6e4,
  hours: 36e5,
  days: 864e5,
  weeks: 6048e5,
  months: 2629746e3,
  years: 31556952e3
};
const ms = (value, unit) => {
  return value * units[unit];
};
const sortNumbers = (numbers) => {
  return [...numbers].sort((a, b) => Number(a) - Number(b));
};
const getOperatorIds = (operators) => {
  return sortNumbers(operators.map((operator) => operator.id));
};
const decodeOperatorPublicKey = (publicKey) => {
  return decodeAbiParameters([{ type: "string" }], publicKey)[0];
};
var Account_OrderBy;
(function(Account_OrderBy2) {
  Account_OrderBy2["Clusters"] = "clusters";
  Account_OrderBy2["FeeRecipient"] = "feeRecipient";
  Account_OrderBy2["Id"] = "id";
  Account_OrderBy2["Nonce"] = "nonce";
  Account_OrderBy2["Operators"] = "operators";
  Account_OrderBy2["ValidatorCount"] = "validatorCount";
  Account_OrderBy2["Validators"] = "validators";
})(Account_OrderBy || (Account_OrderBy = {}));
var Aggregation_Interval;
(function(Aggregation_Interval2) {
  Aggregation_Interval2["Day"] = "day";
  Aggregation_Interval2["Hour"] = "hour";
})(Aggregation_Interval || (Aggregation_Interval = {}));
var ClusterDeposited_OrderBy;
(function(ClusterDeposited_OrderBy2) {
  ClusterDeposited_OrderBy2["BlockNumber"] = "blockNumber";
  ClusterDeposited_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  ClusterDeposited_OrderBy2["ClusterActive"] = "cluster_active";
  ClusterDeposited_OrderBy2["ClusterBalance"] = "cluster_balance";
  ClusterDeposited_OrderBy2["ClusterIndex"] = "cluster_index";
  ClusterDeposited_OrderBy2["ClusterNetworkFeeIndex"] = "cluster_networkFeeIndex";
  ClusterDeposited_OrderBy2["ClusterValidatorCount"] = "cluster_validatorCount";
  ClusterDeposited_OrderBy2["Id"] = "id";
  ClusterDeposited_OrderBy2["OperatorIds"] = "operatorIds";
  ClusterDeposited_OrderBy2["Owner"] = "owner";
  ClusterDeposited_OrderBy2["TransactionHash"] = "transactionHash";
  ClusterDeposited_OrderBy2["Value"] = "value";
})(ClusterDeposited_OrderBy || (ClusterDeposited_OrderBy = {}));
var ClusterLiquidated_OrderBy;
(function(ClusterLiquidated_OrderBy2) {
  ClusterLiquidated_OrderBy2["BlockNumber"] = "blockNumber";
  ClusterLiquidated_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  ClusterLiquidated_OrderBy2["ClusterActive"] = "cluster_active";
  ClusterLiquidated_OrderBy2["ClusterBalance"] = "cluster_balance";
  ClusterLiquidated_OrderBy2["ClusterIndex"] = "cluster_index";
  ClusterLiquidated_OrderBy2["ClusterNetworkFeeIndex"] = "cluster_networkFeeIndex";
  ClusterLiquidated_OrderBy2["ClusterValidatorCount"] = "cluster_validatorCount";
  ClusterLiquidated_OrderBy2["Id"] = "id";
  ClusterLiquidated_OrderBy2["OperatorIds"] = "operatorIds";
  ClusterLiquidated_OrderBy2["Owner"] = "owner";
  ClusterLiquidated_OrderBy2["TransactionHash"] = "transactionHash";
})(ClusterLiquidated_OrderBy || (ClusterLiquidated_OrderBy = {}));
var ClusterReactivated_OrderBy;
(function(ClusterReactivated_OrderBy2) {
  ClusterReactivated_OrderBy2["BlockNumber"] = "blockNumber";
  ClusterReactivated_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  ClusterReactivated_OrderBy2["ClusterActive"] = "cluster_active";
  ClusterReactivated_OrderBy2["ClusterBalance"] = "cluster_balance";
  ClusterReactivated_OrderBy2["ClusterIndex"] = "cluster_index";
  ClusterReactivated_OrderBy2["ClusterNetworkFeeIndex"] = "cluster_networkFeeIndex";
  ClusterReactivated_OrderBy2["ClusterValidatorCount"] = "cluster_validatorCount";
  ClusterReactivated_OrderBy2["Id"] = "id";
  ClusterReactivated_OrderBy2["OperatorIds"] = "operatorIds";
  ClusterReactivated_OrderBy2["Owner"] = "owner";
  ClusterReactivated_OrderBy2["TransactionHash"] = "transactionHash";
})(ClusterReactivated_OrderBy || (ClusterReactivated_OrderBy = {}));
var ClusterWithdrawn_OrderBy;
(function(ClusterWithdrawn_OrderBy2) {
  ClusterWithdrawn_OrderBy2["BlockNumber"] = "blockNumber";
  ClusterWithdrawn_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  ClusterWithdrawn_OrderBy2["ClusterActive"] = "cluster_active";
  ClusterWithdrawn_OrderBy2["ClusterBalance"] = "cluster_balance";
  ClusterWithdrawn_OrderBy2["ClusterIndex"] = "cluster_index";
  ClusterWithdrawn_OrderBy2["ClusterNetworkFeeIndex"] = "cluster_networkFeeIndex";
  ClusterWithdrawn_OrderBy2["ClusterValidatorCount"] = "cluster_validatorCount";
  ClusterWithdrawn_OrderBy2["Id"] = "id";
  ClusterWithdrawn_OrderBy2["OperatorIds"] = "operatorIds";
  ClusterWithdrawn_OrderBy2["Owner"] = "owner";
  ClusterWithdrawn_OrderBy2["TransactionHash"] = "transactionHash";
  ClusterWithdrawn_OrderBy2["Value"] = "value";
})(ClusterWithdrawn_OrderBy || (ClusterWithdrawn_OrderBy = {}));
var Cluster_OrderBy;
(function(Cluster_OrderBy2) {
  Cluster_OrderBy2["Active"] = "active";
  Cluster_OrderBy2["Balance"] = "balance";
  Cluster_OrderBy2["Id"] = "id";
  Cluster_OrderBy2["Index"] = "index";
  Cluster_OrderBy2["LastUpdateBlockNumber"] = "lastUpdateBlockNumber";
  Cluster_OrderBy2["LastUpdateBlockTimestamp"] = "lastUpdateBlockTimestamp";
  Cluster_OrderBy2["LastUpdateTransactionHash"] = "lastUpdateTransactionHash";
  Cluster_OrderBy2["NetworkFeeIndex"] = "networkFeeIndex";
  Cluster_OrderBy2["OperatorIds"] = "operatorIds";
  Cluster_OrderBy2["Owner"] = "owner";
  Cluster_OrderBy2["OwnerFeeRecipient"] = "owner__feeRecipient";
  Cluster_OrderBy2["OwnerId"] = "owner__id";
  Cluster_OrderBy2["OwnerNonce"] = "owner__nonce";
  Cluster_OrderBy2["OwnerValidatorCount"] = "owner__validatorCount";
  Cluster_OrderBy2["ValidatorCount"] = "validatorCount";
  Cluster_OrderBy2["Validators"] = "validators";
})(Cluster_OrderBy || (Cluster_OrderBy = {}));
var DaoUpdateTypes;
(function(DaoUpdateTypes2) {
  DaoUpdateTypes2["DeclareOperatorFeePeriod"] = "DECLARE_OPERATOR_FEE_PERIOD";
  DaoUpdateTypes2["ExecuteOperatorFeePeriod"] = "EXECUTE_OPERATOR_FEE_PERIOD";
  DaoUpdateTypes2["Initialization"] = "INITIALIZATION";
  DaoUpdateTypes2["LiquidationThreshold"] = "LIQUIDATION_THRESHOLD";
  DaoUpdateTypes2["MinLiquidationCollateral"] = "MIN_LIQUIDATION_COLLATERAL";
  DaoUpdateTypes2["NetworkFee"] = "NETWORK_FEE";
  DaoUpdateTypes2["OperatorAdded"] = "OPERATOR_ADDED";
  DaoUpdateTypes2["OperatorFeeIncreaseLimit"] = "OPERATOR_FEE_INCREASE_LIMIT";
  DaoUpdateTypes2["OperatorMaxFee"] = "OPERATOR_MAX_FEE";
  DaoUpdateTypes2["OperatorRemoved"] = "OPERATOR_REMOVED";
  DaoUpdateTypes2["ValidatorAdded"] = "VALIDATOR_ADDED";
  DaoUpdateTypes2["ValidatorRemoved"] = "VALIDATOR_REMOVED";
})(DaoUpdateTypes || (DaoUpdateTypes = {}));
var DaoValues_OrderBy;
(function(DaoValues_OrderBy2) {
  DaoValues_OrderBy2["DeclareOperatorFeePeriod"] = "declareOperatorFeePeriod";
  DaoValues_OrderBy2["ExecuteOperatorFeePeriod"] = "executeOperatorFeePeriod";
  DaoValues_OrderBy2["Id"] = "id";
  DaoValues_OrderBy2["LastUpdateBlockNumber"] = "lastUpdateBlockNumber";
  DaoValues_OrderBy2["LastUpdateBlockTimestamp"] = "lastUpdateBlockTimestamp";
  DaoValues_OrderBy2["LastUpdateTransactionHash"] = "lastUpdateTransactionHash";
  DaoValues_OrderBy2["LiquidationThreshold"] = "liquidationThreshold";
  DaoValues_OrderBy2["MinimumLiquidationCollateral"] = "minimumLiquidationCollateral";
  DaoValues_OrderBy2["NetworkFee"] = "networkFee";
  DaoValues_OrderBy2["NetworkFeeIndex"] = "networkFeeIndex";
  DaoValues_OrderBy2["NetworkFeeIndexBlockNumber"] = "networkFeeIndexBlockNumber";
  DaoValues_OrderBy2["OperatorFeeIncreaseLimit"] = "operatorFeeIncreaseLimit";
  DaoValues_OrderBy2["OperatorMaximumFee"] = "operatorMaximumFee";
  DaoValues_OrderBy2["OperatorsAdded"] = "operatorsAdded";
  DaoValues_OrderBy2["OperatorsRemoved"] = "operatorsRemoved";
  DaoValues_OrderBy2["TotalAccounts"] = "totalAccounts";
  DaoValues_OrderBy2["TotalOperators"] = "totalOperators";
  DaoValues_OrderBy2["TotalValidators"] = "totalValidators";
  DaoValues_OrderBy2["UpdateType"] = "updateType";
  DaoValues_OrderBy2["ValidatorsAdded"] = "validatorsAdded";
  DaoValues_OrderBy2["ValidatorsPerOperatorLimit"] = "validatorsPerOperatorLimit";
  DaoValues_OrderBy2["ValidatorsRemoved"] = "validatorsRemoved";
})(DaoValues_OrderBy || (DaoValues_OrderBy = {}));
var DeclareOperatorFeePeriodUpdated_OrderBy;
(function(DeclareOperatorFeePeriodUpdated_OrderBy2) {
  DeclareOperatorFeePeriodUpdated_OrderBy2["BlockNumber"] = "blockNumber";
  DeclareOperatorFeePeriodUpdated_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  DeclareOperatorFeePeriodUpdated_OrderBy2["Id"] = "id";
  DeclareOperatorFeePeriodUpdated_OrderBy2["TransactionHash"] = "transactionHash";
  DeclareOperatorFeePeriodUpdated_OrderBy2["Value"] = "value";
})(DeclareOperatorFeePeriodUpdated_OrderBy || (DeclareOperatorFeePeriodUpdated_OrderBy = {}));
var ExecuteOperatorFeePeriodUpdated_OrderBy;
(function(ExecuteOperatorFeePeriodUpdated_OrderBy2) {
  ExecuteOperatorFeePeriodUpdated_OrderBy2["BlockNumber"] = "blockNumber";
  ExecuteOperatorFeePeriodUpdated_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  ExecuteOperatorFeePeriodUpdated_OrderBy2["Id"] = "id";
  ExecuteOperatorFeePeriodUpdated_OrderBy2["TransactionHash"] = "transactionHash";
  ExecuteOperatorFeePeriodUpdated_OrderBy2["Value"] = "value";
})(ExecuteOperatorFeePeriodUpdated_OrderBy || (ExecuteOperatorFeePeriodUpdated_OrderBy = {}));
var FeeRecipientAddressUpdated_OrderBy;
(function(FeeRecipientAddressUpdated_OrderBy2) {
  FeeRecipientAddressUpdated_OrderBy2["BlockNumber"] = "blockNumber";
  FeeRecipientAddressUpdated_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  FeeRecipientAddressUpdated_OrderBy2["Id"] = "id";
  FeeRecipientAddressUpdated_OrderBy2["Owner"] = "owner";
  FeeRecipientAddressUpdated_OrderBy2["RecipientAddress"] = "recipientAddress";
  FeeRecipientAddressUpdated_OrderBy2["TransactionHash"] = "transactionHash";
})(FeeRecipientAddressUpdated_OrderBy || (FeeRecipientAddressUpdated_OrderBy = {}));
var LiquidationThresholdPeriodUpdated_OrderBy;
(function(LiquidationThresholdPeriodUpdated_OrderBy2) {
  LiquidationThresholdPeriodUpdated_OrderBy2["BlockNumber"] = "blockNumber";
  LiquidationThresholdPeriodUpdated_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  LiquidationThresholdPeriodUpdated_OrderBy2["Id"] = "id";
  LiquidationThresholdPeriodUpdated_OrderBy2["TransactionHash"] = "transactionHash";
  LiquidationThresholdPeriodUpdated_OrderBy2["Value"] = "value";
})(LiquidationThresholdPeriodUpdated_OrderBy || (LiquidationThresholdPeriodUpdated_OrderBy = {}));
var MinimumLiquidationCollateralUpdated_OrderBy;
(function(MinimumLiquidationCollateralUpdated_OrderBy2) {
  MinimumLiquidationCollateralUpdated_OrderBy2["BlockNumber"] = "blockNumber";
  MinimumLiquidationCollateralUpdated_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  MinimumLiquidationCollateralUpdated_OrderBy2["Id"] = "id";
  MinimumLiquidationCollateralUpdated_OrderBy2["TransactionHash"] = "transactionHash";
  MinimumLiquidationCollateralUpdated_OrderBy2["Value"] = "value";
})(MinimumLiquidationCollateralUpdated_OrderBy || (MinimumLiquidationCollateralUpdated_OrderBy = {}));
var NetworkEarningsWithdrawn_OrderBy;
(function(NetworkEarningsWithdrawn_OrderBy2) {
  NetworkEarningsWithdrawn_OrderBy2["BlockNumber"] = "blockNumber";
  NetworkEarningsWithdrawn_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  NetworkEarningsWithdrawn_OrderBy2["Id"] = "id";
  NetworkEarningsWithdrawn_OrderBy2["Recipient"] = "recipient";
  NetworkEarningsWithdrawn_OrderBy2["TransactionHash"] = "transactionHash";
  NetworkEarningsWithdrawn_OrderBy2["Value"] = "value";
})(NetworkEarningsWithdrawn_OrderBy || (NetworkEarningsWithdrawn_OrderBy = {}));
var NetworkFeeUpdated_OrderBy;
(function(NetworkFeeUpdated_OrderBy2) {
  NetworkFeeUpdated_OrderBy2["BlockNumber"] = "blockNumber";
  NetworkFeeUpdated_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  NetworkFeeUpdated_OrderBy2["Id"] = "id";
  NetworkFeeUpdated_OrderBy2["NewFee"] = "newFee";
  NetworkFeeUpdated_OrderBy2["OldFee"] = "oldFee";
  NetworkFeeUpdated_OrderBy2["TransactionHash"] = "transactionHash";
})(NetworkFeeUpdated_OrderBy || (NetworkFeeUpdated_OrderBy = {}));
var OperatorAdded_OrderBy;
(function(OperatorAdded_OrderBy2) {
  OperatorAdded_OrderBy2["BlockNumber"] = "blockNumber";
  OperatorAdded_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  OperatorAdded_OrderBy2["Fee"] = "fee";
  OperatorAdded_OrderBy2["Id"] = "id";
  OperatorAdded_OrderBy2["OperatorId"] = "operatorId";
  OperatorAdded_OrderBy2["Owner"] = "owner";
  OperatorAdded_OrderBy2["PublicKey"] = "publicKey";
  OperatorAdded_OrderBy2["TransactionHash"] = "transactionHash";
})(OperatorAdded_OrderBy || (OperatorAdded_OrderBy = {}));
var OperatorFeeDeclarationCancelled_OrderBy;
(function(OperatorFeeDeclarationCancelled_OrderBy2) {
  OperatorFeeDeclarationCancelled_OrderBy2["BlockNumber"] = "blockNumber";
  OperatorFeeDeclarationCancelled_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  OperatorFeeDeclarationCancelled_OrderBy2["Id"] = "id";
  OperatorFeeDeclarationCancelled_OrderBy2["OperatorId"] = "operatorId";
  OperatorFeeDeclarationCancelled_OrderBy2["Owner"] = "owner";
  OperatorFeeDeclarationCancelled_OrderBy2["TransactionHash"] = "transactionHash";
})(OperatorFeeDeclarationCancelled_OrderBy || (OperatorFeeDeclarationCancelled_OrderBy = {}));
var OperatorFeeDeclared_OrderBy;
(function(OperatorFeeDeclared_OrderBy2) {
  OperatorFeeDeclared_OrderBy2["BlockNumber"] = "blockNumber";
  OperatorFeeDeclared_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  OperatorFeeDeclared_OrderBy2["Fee"] = "fee";
  OperatorFeeDeclared_OrderBy2["Id"] = "id";
  OperatorFeeDeclared_OrderBy2["OperatorId"] = "operatorId";
  OperatorFeeDeclared_OrderBy2["Owner"] = "owner";
  OperatorFeeDeclared_OrderBy2["TransactionHash"] = "transactionHash";
})(OperatorFeeDeclared_OrderBy || (OperatorFeeDeclared_OrderBy = {}));
var OperatorFeeExecuted_OrderBy;
(function(OperatorFeeExecuted_OrderBy2) {
  OperatorFeeExecuted_OrderBy2["BlockNumber"] = "blockNumber";
  OperatorFeeExecuted_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  OperatorFeeExecuted_OrderBy2["Fee"] = "fee";
  OperatorFeeExecuted_OrderBy2["Id"] = "id";
  OperatorFeeExecuted_OrderBy2["OperatorId"] = "operatorId";
  OperatorFeeExecuted_OrderBy2["Owner"] = "owner";
  OperatorFeeExecuted_OrderBy2["TransactionHash"] = "transactionHash";
})(OperatorFeeExecuted_OrderBy || (OperatorFeeExecuted_OrderBy = {}));
var OperatorFeeIncreaseLimitUpdated_OrderBy;
(function(OperatorFeeIncreaseLimitUpdated_OrderBy2) {
  OperatorFeeIncreaseLimitUpdated_OrderBy2["BlockNumber"] = "blockNumber";
  OperatorFeeIncreaseLimitUpdated_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  OperatorFeeIncreaseLimitUpdated_OrderBy2["Id"] = "id";
  OperatorFeeIncreaseLimitUpdated_OrderBy2["TransactionHash"] = "transactionHash";
  OperatorFeeIncreaseLimitUpdated_OrderBy2["Value"] = "value";
})(OperatorFeeIncreaseLimitUpdated_OrderBy || (OperatorFeeIncreaseLimitUpdated_OrderBy = {}));
var OperatorMaximumFeeUpdated_OrderBy;
(function(OperatorMaximumFeeUpdated_OrderBy2) {
  OperatorMaximumFeeUpdated_OrderBy2["BlockNumber"] = "blockNumber";
  OperatorMaximumFeeUpdated_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  OperatorMaximumFeeUpdated_OrderBy2["Id"] = "id";
  OperatorMaximumFeeUpdated_OrderBy2["MaxFee"] = "maxFee";
  OperatorMaximumFeeUpdated_OrderBy2["TransactionHash"] = "transactionHash";
})(OperatorMaximumFeeUpdated_OrderBy || (OperatorMaximumFeeUpdated_OrderBy = {}));
var OperatorMultipleWhitelistRemoved_OrderBy;
(function(OperatorMultipleWhitelistRemoved_OrderBy2) {
  OperatorMultipleWhitelistRemoved_OrderBy2["BlockNumber"] = "blockNumber";
  OperatorMultipleWhitelistRemoved_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  OperatorMultipleWhitelistRemoved_OrderBy2["Id"] = "id";
  OperatorMultipleWhitelistRemoved_OrderBy2["OperatorIds"] = "operatorIds";
  OperatorMultipleWhitelistRemoved_OrderBy2["TransactionHash"] = "transactionHash";
  OperatorMultipleWhitelistRemoved_OrderBy2["WhitelistAddresses"] = "whitelistAddresses";
})(OperatorMultipleWhitelistRemoved_OrderBy || (OperatorMultipleWhitelistRemoved_OrderBy = {}));
var OperatorMultipleWhitelistUpdated_OrderBy;
(function(OperatorMultipleWhitelistUpdated_OrderBy2) {
  OperatorMultipleWhitelistUpdated_OrderBy2["BlockNumber"] = "blockNumber";
  OperatorMultipleWhitelistUpdated_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  OperatorMultipleWhitelistUpdated_OrderBy2["Id"] = "id";
  OperatorMultipleWhitelistUpdated_OrderBy2["OperatorIds"] = "operatorIds";
  OperatorMultipleWhitelistUpdated_OrderBy2["TransactionHash"] = "transactionHash";
  OperatorMultipleWhitelistUpdated_OrderBy2["WhitelistAddresses"] = "whitelistAddresses";
})(OperatorMultipleWhitelistUpdated_OrderBy || (OperatorMultipleWhitelistUpdated_OrderBy = {}));
var OperatorPrivacyStatusUpdated_OrderBy;
(function(OperatorPrivacyStatusUpdated_OrderBy2) {
  OperatorPrivacyStatusUpdated_OrderBy2["BlockNumber"] = "blockNumber";
  OperatorPrivacyStatusUpdated_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  OperatorPrivacyStatusUpdated_OrderBy2["Id"] = "id";
  OperatorPrivacyStatusUpdated_OrderBy2["OperatorIds"] = "operatorIds";
  OperatorPrivacyStatusUpdated_OrderBy2["ToPrivate"] = "toPrivate";
  OperatorPrivacyStatusUpdated_OrderBy2["TransactionHash"] = "transactionHash";
})(OperatorPrivacyStatusUpdated_OrderBy || (OperatorPrivacyStatusUpdated_OrderBy = {}));
var OperatorRemoved_OrderBy;
(function(OperatorRemoved_OrderBy2) {
  OperatorRemoved_OrderBy2["BlockNumber"] = "blockNumber";
  OperatorRemoved_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  OperatorRemoved_OrderBy2["Id"] = "id";
  OperatorRemoved_OrderBy2["OperatorId"] = "operatorId";
  OperatorRemoved_OrderBy2["TransactionHash"] = "transactionHash";
})(OperatorRemoved_OrderBy || (OperatorRemoved_OrderBy = {}));
var OperatorWhitelistUpdated_OrderBy;
(function(OperatorWhitelistUpdated_OrderBy2) {
  OperatorWhitelistUpdated_OrderBy2["BlockNumber"] = "blockNumber";
  OperatorWhitelistUpdated_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  OperatorWhitelistUpdated_OrderBy2["Id"] = "id";
  OperatorWhitelistUpdated_OrderBy2["OperatorId"] = "operatorId";
  OperatorWhitelistUpdated_OrderBy2["TransactionHash"] = "transactionHash";
  OperatorWhitelistUpdated_OrderBy2["Whitelisted"] = "whitelisted";
})(OperatorWhitelistUpdated_OrderBy || (OperatorWhitelistUpdated_OrderBy = {}));
var OperatorWhitelistingContractUpdated_OrderBy;
(function(OperatorWhitelistingContractUpdated_OrderBy2) {
  OperatorWhitelistingContractUpdated_OrderBy2["BlockNumber"] = "blockNumber";
  OperatorWhitelistingContractUpdated_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  OperatorWhitelistingContractUpdated_OrderBy2["Id"] = "id";
  OperatorWhitelistingContractUpdated_OrderBy2["OperatorIds"] = "operatorIds";
  OperatorWhitelistingContractUpdated_OrderBy2["TransactionHash"] = "transactionHash";
  OperatorWhitelistingContractUpdated_OrderBy2["WhitelistingContract"] = "whitelistingContract";
})(OperatorWhitelistingContractUpdated_OrderBy || (OperatorWhitelistingContractUpdated_OrderBy = {}));
var OperatorWithdrawn_OrderBy;
(function(OperatorWithdrawn_OrderBy2) {
  OperatorWithdrawn_OrderBy2["BlockNumber"] = "blockNumber";
  OperatorWithdrawn_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  OperatorWithdrawn_OrderBy2["Id"] = "id";
  OperatorWithdrawn_OrderBy2["OperatorId"] = "operatorId";
  OperatorWithdrawn_OrderBy2["Owner"] = "owner";
  OperatorWithdrawn_OrderBy2["TransactionHash"] = "transactionHash";
  OperatorWithdrawn_OrderBy2["Value"] = "value";
})(OperatorWithdrawn_OrderBy || (OperatorWithdrawn_OrderBy = {}));
var Operator_OrderBy;
(function(Operator_OrderBy2) {
  Operator_OrderBy2["DeclaredFee"] = "declaredFee";
  Operator_OrderBy2["Fee"] = "fee";
  Operator_OrderBy2["FeeIndex"] = "feeIndex";
  Operator_OrderBy2["FeeIndexBlockNumber"] = "feeIndexBlockNumber";
  Operator_OrderBy2["Id"] = "id";
  Operator_OrderBy2["IsPrivate"] = "isPrivate";
  Operator_OrderBy2["LastUpdateBlockNumber"] = "lastUpdateBlockNumber";
  Operator_OrderBy2["LastUpdateBlockTimestamp"] = "lastUpdateBlockTimestamp";
  Operator_OrderBy2["LastUpdateTransactionHash"] = "lastUpdateTransactionHash";
  Operator_OrderBy2["OperatorId"] = "operatorId";
  Operator_OrderBy2["Owner"] = "owner";
  Operator_OrderBy2["OwnerFeeRecipient"] = "owner__feeRecipient";
  Operator_OrderBy2["OwnerId"] = "owner__id";
  Operator_OrderBy2["OwnerNonce"] = "owner__nonce";
  Operator_OrderBy2["OwnerValidatorCount"] = "owner__validatorCount";
  Operator_OrderBy2["PublicKey"] = "publicKey";
  Operator_OrderBy2["Removed"] = "removed";
  Operator_OrderBy2["TotalWithdrawn"] = "totalWithdrawn";
  Operator_OrderBy2["ValidatorCount"] = "validatorCount";
  Operator_OrderBy2["Validators"] = "validators";
  Operator_OrderBy2["Whitelisted"] = "whitelisted";
  Operator_OrderBy2["WhitelistedContract"] = "whitelistedContract";
})(Operator_OrderBy || (Operator_OrderBy = {}));
var OrderDirection;
(function(OrderDirection2) {
  OrderDirection2["Asc"] = "asc";
  OrderDirection2["Desc"] = "desc";
})(OrderDirection || (OrderDirection = {}));
var ValidatorAdded_OrderBy;
(function(ValidatorAdded_OrderBy2) {
  ValidatorAdded_OrderBy2["BlockNumber"] = "blockNumber";
  ValidatorAdded_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  ValidatorAdded_OrderBy2["ClusterActive"] = "cluster_active";
  ValidatorAdded_OrderBy2["ClusterBalance"] = "cluster_balance";
  ValidatorAdded_OrderBy2["ClusterIndex"] = "cluster_index";
  ValidatorAdded_OrderBy2["ClusterNetworkFeeIndex"] = "cluster_networkFeeIndex";
  ValidatorAdded_OrderBy2["ClusterValidatorCount"] = "cluster_validatorCount";
  ValidatorAdded_OrderBy2["Id"] = "id";
  ValidatorAdded_OrderBy2["OperatorIds"] = "operatorIds";
  ValidatorAdded_OrderBy2["Owner"] = "owner";
  ValidatorAdded_OrderBy2["PublicKey"] = "publicKey";
  ValidatorAdded_OrderBy2["Shares"] = "shares";
  ValidatorAdded_OrderBy2["TransactionHash"] = "transactionHash";
})(ValidatorAdded_OrderBy || (ValidatorAdded_OrderBy = {}));
var ValidatorRemoved_OrderBy;
(function(ValidatorRemoved_OrderBy2) {
  ValidatorRemoved_OrderBy2["BlockNumber"] = "blockNumber";
  ValidatorRemoved_OrderBy2["BlockTimestamp"] = "blockTimestamp";
  ValidatorRemoved_OrderBy2["ClusterActive"] = "cluster_active";
  ValidatorRemoved_OrderBy2["ClusterBalance"] = "cluster_balance";
  ValidatorRemoved_OrderBy2["ClusterIndex"] = "cluster_index";
  ValidatorRemoved_OrderBy2["ClusterNetworkFeeIndex"] = "cluster_networkFeeIndex";
  ValidatorRemoved_OrderBy2["ClusterValidatorCount"] = "cluster_validatorCount";
  ValidatorRemoved_OrderBy2["Id"] = "id";
  ValidatorRemoved_OrderBy2["OperatorIds"] = "operatorIds";
  ValidatorRemoved_OrderBy2["Owner"] = "owner";
  ValidatorRemoved_OrderBy2["PublicKey"] = "publicKey";
  ValidatorRemoved_OrderBy2["TransactionHash"] = "transactionHash";
})(ValidatorRemoved_OrderBy || (ValidatorRemoved_OrderBy = {}));
var Validator_OrderBy;
(function(Validator_OrderBy2) {
  Validator_OrderBy2["Cluster"] = "cluster";
  Validator_OrderBy2["ClusterActive"] = "cluster__active";
  Validator_OrderBy2["ClusterBalance"] = "cluster__balance";
  Validator_OrderBy2["ClusterId"] = "cluster__id";
  Validator_OrderBy2["ClusterIndex"] = "cluster__index";
  Validator_OrderBy2["ClusterLastUpdateBlockNumber"] = "cluster__lastUpdateBlockNumber";
  Validator_OrderBy2["ClusterLastUpdateBlockTimestamp"] = "cluster__lastUpdateBlockTimestamp";
  Validator_OrderBy2["ClusterLastUpdateTransactionHash"] = "cluster__lastUpdateTransactionHash";
  Validator_OrderBy2["ClusterNetworkFeeIndex"] = "cluster__networkFeeIndex";
  Validator_OrderBy2["ClusterValidatorCount"] = "cluster__validatorCount";
  Validator_OrderBy2["Id"] = "id";
  Validator_OrderBy2["LastUpdateBlockNumber"] = "lastUpdateBlockNumber";
  Validator_OrderBy2["LastUpdateBlockTimestamp"] = "lastUpdateBlockTimestamp";
  Validator_OrderBy2["LastUpdateTransactionHash"] = "lastUpdateTransactionHash";
  Validator_OrderBy2["Operators"] = "operators";
  Validator_OrderBy2["Owner"] = "owner";
  Validator_OrderBy2["OwnerFeeRecipient"] = "owner__feeRecipient";
  Validator_OrderBy2["OwnerId"] = "owner__id";
  Validator_OrderBy2["OwnerNonce"] = "owner__nonce";
  Validator_OrderBy2["OwnerValidatorCount"] = "owner__validatorCount";
  Validator_OrderBy2["Removed"] = "removed";
  Validator_OrderBy2["Shares"] = "shares";
})(Validator_OrderBy || (Validator_OrderBy = {}));
var _SubgraphErrorPolicy_;
(function(_SubgraphErrorPolicy_2) {
  _SubgraphErrorPolicy_2["Allow"] = "allow";
  _SubgraphErrorPolicy_2["Deny"] = "deny";
})(_SubgraphErrorPolicy_ || (_SubgraphErrorPolicy_ = {}));
const GetClusterSnapshotDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetClusterSnapshot" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "cluster" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "balance" } }, { "kind": "Field", "name": { "kind": "Name", "value": "index" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }] } }] } }] };
const GetClusterDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetCluster" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "cluster" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "balance" } }, { "kind": "Field", "name": { "kind": "Name", "value": "index" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "operatorIds" } }] } }] } }] };
const GetClustersDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetClusters" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "clusters" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "owner" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "balance" } }, { "kind": "Field", "name": { "kind": "Name", "value": "index" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "operatorIds" } }] } }] } }] };
const GetOwnerNonceDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetOwnerNonce" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "account" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nonce" } }] } }] } }] };
const GetOwnerNonceByBlockDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetOwnerNonceByBlock" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "block" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "account" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "block" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "number" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "block" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nonce" } }] } }] } }] };
const GetOperatorDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetOperator" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "operator" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "publicKey" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "isPrivate" } }, { "kind": "Field", "name": { "kind": "Name", "value": "whitelistedContract" } }, { "kind": "Field", "name": { "kind": "Name", "value": "whitelisted" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] } }] };
const GetOperatorsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetOperators" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "operatorIds" } }, "type": { "kind": "NonNullType", "type": { "kind": "ListType", "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "operators" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "id_in" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "operatorIds" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "publicKey" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "isPrivate" } }, { "kind": "Field", "name": { "kind": "Name", "value": "whitelistedContract" } }, { "kind": "Field", "name": { "kind": "Name", "value": "whitelisted" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] } }] };
const GetValidatorsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetValidators" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "ids" } }, "type": { "kind": "NonNullType", "type": { "kind": "ListType", "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Bytes" } } } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "validators" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "id_in" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "ids" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] };
const GetValidatorDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetValidator" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "validator" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] };
const GetClusterBalanceDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetClusterBalance" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "clusterId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "daoAddress" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "operatorIds" } }, "type": { "kind": "NonNullType", "type": { "kind": "ListType", "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "_meta" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "block" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "number" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "daovalues" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "daoAddress" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "networkFee" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndexBlockNumber" } }, { "kind": "Field", "name": { "kind": "Name", "value": "liquidationThreshold" } }, { "kind": "Field", "name": { "kind": "Name", "value": "minimumLiquidationCollateral" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "operators" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "id_in" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "operatorIds" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "fee" } }, { "kind": "Field", "name": { "kind": "Name", "value": "feeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "feeIndexBlockNumber" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "cluster" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "clusterId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "index" } }, { "kind": "Field", "name": { "kind": "Name", "value": "balance" } }] } }] } }] };
function defineChain(chain) {
  return {
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...chain
  };
}
const holesky = /* @__PURE__ */ defineChain({
  id: 17e3,
  name: "Holesky",
  nativeCurrency: { name: "Holesky Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://ethereum-holesky-rpc.publicnode.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://holesky.etherscan.io",
      apiUrl: "https://api-holesky.etherscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 77
    },
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
      blockCreated: 801613
    },
    ensUniversalResolver: {
      address: "0xa6AC935D4971E3CD133b950aE053bECD16fE7f3b",
      blockCreated: 973484
    }
  },
  testnet: true
});
const mainnet = /* @__PURE__ */ defineChain({
  id: 1,
  name: "Ethereum",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://eth.merkle.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://etherscan.io",
      apiUrl: "https://api.etherscan.io/api"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    ensUniversalResolver: {
      address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
      blockCreated: 19258213
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
});
const hoodi = defineChain$1({
  id: 560048,
  name: "Hoodi",
  rpcUrls: {
    default: {
      http: ["https://rpc.hoodi.ethpandaops.io"]
    }
  },
  nativeCurrency: {
    name: "Hoodi Ether",
    symbol: "ETH",
    decimals: 18
  },
  testnet: true
});
const chains = {
  mainnet,
  holesky,
  hoodi
};
const chainIds = Object.values(chains).map((chain) => chain.id);
const networks = Object.values(chains).map((chain) => chain.name);
const graph_endpoints = {
  [mainnet.id]: "https://api.studio.thegraph.com/query/71118/ssv-network-ethereum/version/latest",
  [holesky.id]: "https://api.studio.thegraph.com/query/71118/ssv-network-holesky/version/latest",
  [hoodi.id]: "https://graph-node-hoodi.stage.ops.ssvlabsinternal.com/subgraphs/name/ssv-bapps-hoodi"
};
const rest_endpoints = {
  [mainnet.id]: "https://api.ssv.network/api/v4/mainnet",
  [holesky.id]: "https://api.ssv.network/api/v4/holesky",
  [hoodi.id]: "https://api.ssv.network/api/v4/hoodi"
};
const contracts = {
  [mainnet.id]: {
    setter: "0xDD9BC35aE942eF0cFa76930954a156B3fF30a4E1",
    getter: "0xafE830B6Ee262ba11cce5F32fDCd760FFE6a66e4",
    token: "0x9D65fF81a3c488d585bBfb0Bfe3c7707c7917f54"
  },
  [holesky.id]: {
    setter: "0x38A4794cCEd47d3baf7370CcC43B560D3a1beEFA",
    getter: "0x352A18AEe90cdcd825d1E37d9939dCA86C00e281",
    token: "0xad45A78180961079BFaeEe349704F411dfF947C6"
  },
  [hoodi.id]: {
    setter: "0x58410Bef803ECd7E63B23664C586A6DB72DAf59c",
    getter: "0x5AdDb3f1529C5ec70D77400499eE4bbF328368fe",
    token: "0x9F5d4Ec84fC4785788aB44F9de973cF34F7A038e"
  }
};
const bigintMax = (...args) => {
  return args.filter((x) => !isUndefined(x)).reduce((max, cur) => cur > max ? cur : max);
};
const bigintMin = (...args) => {
  return args.filter((x) => !isUndefined(x)).reduce((min, cur) => cur < min ? cur : min);
};
const bigintRound = (value, precision) => {
  const remainder = value % precision;
  return remainder >= precision / 2n ? value + (precision - remainder) : value - remainder;
};
const bigintFloor = (value, precision = 10000000n) => {
  return value - value % precision;
};
const bigintAbs = (n) => n < 0n ? -n : n;
const isBigIntChanged = (a, b, tolerance = parseUnits("0.0001", 18)) => {
  return bigintAbs(a - b) > tolerance;
};
const roundOperatorFee = (fee, precision = 10000000n) => {
  return bigintRound(fee, precision);
};
const stringifyBigints = (anything) => {
  return cloneDeepWith(anything, (value) => {
    if (typeof value === "bigint")
      return value.toString();
  });
};
const bigintifyNumbers = (numbers) => {
  return cloneDeepWith(numbers, (value) => {
    if (typeof value === "number")
      return BigInt(value);
  });
};
const createClusterId = (ownerAddress, operatorIds) => {
  if (!isAddress(ownerAddress)) {
    throw new Error("Invalid owner address");
  }
  return `${ownerAddress.toLowerCase()}-${operatorIds.join("-")}`;
};
const isClusterId = (clusterId) => {
  const [ownerAddress, ...operatorIds] = clusterId.split("-");
  return isAddress(ownerAddress) && operatorIds.length >= 4 && operatorIds.every((id) => !isNaN(Number(id)));
};
const getClusterSnapshot = (cluster) => {
  return {
    active: cluster.active,
    balance: BigInt(cluster.balance),
    index: BigInt(cluster.index),
    networkFeeIndex: BigInt(cluster.networkFeeIndex),
    validatorCount: +cluster.validatorCount
  };
};
const createEmptyCluster = (cluster = {}) => merge({
  validatorCount: 0,
  networkFeeIndex: 0n,
  index: 0n,
  balance: 0n,
  active: true
}, cluster);
const add0x = (value) => !value.startsWith("0x") ? `0x${value}` : value;
const isKeySharesItem = (item) => {
  return !!item && typeof item === "object" && "data" in item && "payload" in item && "error" in item;
};
var KeysharesValidationErrors;
(function(KeysharesValidationErrors2) {
  KeysharesValidationErrors2[KeysharesValidationErrors2["OperatorDoesNotExist"] = 0] = "OperatorDoesNotExist";
  KeysharesValidationErrors2[KeysharesValidationErrors2["OperatorMismatch"] = 1] = "OperatorMismatch";
  KeysharesValidationErrors2[KeysharesValidationErrors2["ValidatorAlreadyExists"] = 2] = "ValidatorAlreadyExists";
  KeysharesValidationErrors2[KeysharesValidationErrors2["ClusterMismatch"] = 3] = "ClusterMismatch";
  KeysharesValidationErrors2[KeysharesValidationErrors2["DuplicateValidatorKeys"] = 4] = "DuplicateValidatorKeys";
  KeysharesValidationErrors2[KeysharesValidationErrors2["InconsistentOperatorPublicKeys"] = 5] = "InconsistentOperatorPublicKeys";
  KeysharesValidationErrors2[KeysharesValidationErrors2["InconsistentOperators"] = 6] = "InconsistentOperators";
})(KeysharesValidationErrors || (KeysharesValidationErrors = {}));
const KeysharesValidationErrorsMessages = {
  [KeysharesValidationErrors.OperatorDoesNotExist]: "Operator not found. Please verify the operator ID.",
  [KeysharesValidationErrors.OperatorMismatch]: "Operator details mismatch. Check provided information.",
  [KeysharesValidationErrors.ValidatorAlreadyExists]: "Validator public key already in use. Must be unique.",
  [KeysharesValidationErrors.ClusterMismatch]: "The operators in the provided keyshares do not match the provided operators. Please ensure the keyshares correspond to the cluster you are trying to register.",
  [KeysharesValidationErrors.DuplicateValidatorKeys]: "Duplicate validator keys detected. Each must be unique.",
  [KeysharesValidationErrors.InconsistentOperatorPublicKeys]: "Operator public keys mismatch. Verify operator data.",
  [KeysharesValidationErrors.InconsistentOperators]: "Inconsistent operator IDs across keyshares. Check all entries."
};
class KeysharesValidationError extends Error {
  constructor(code) {
    super(KeysharesValidationErrorsMessages[code]);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: code
    });
  }
}
const validateConsistentOperatorIds = (keyshares) => {
  const operatorIds = sortNumbers(keyshares[0].payload.operatorIds);
  keyshares.every(({ payload, data }) => {
    const payloadOperatorIds = sortNumbers(payload.operatorIds).toString();
    const dataOperatorIds = getOperatorIds(data.operators ?? []).toString();
    const valid = payloadOperatorIds === dataOperatorIds && dataOperatorIds === operatorIds.toString();
    if (!valid) {
      throw new KeysharesValidationError(KeysharesValidationErrors.InconsistentOperators);
    }
    return true;
  });
  return operatorIds;
};
const ensureValidatorsUniqueness = (keyshares) => {
  const set = new Set(keyshares.map(({ data }) => data.publicKey));
  if (set.size !== keyshares.length) {
    throw new KeysharesValidationError(KeysharesValidationErrors.DuplicateValidatorKeys);
  }
  return true;
};
const validateConsistentOperatorPublicKeys = (keyshares, operators) => {
  const operatorsMap = new Map(operators.map((o) => [o.id, o.publicKey]));
  const valid = keyshares.every(({ data }) => {
    return data.operators?.every(({ id, operatorKey }) => {
      return operatorsMap.get(id.toString()) === operatorKey;
    });
  });
  if (!valid) {
    throw new KeysharesValidationError(KeysharesValidationErrors.InconsistentOperatorPublicKeys);
  }
  return valid;
};
const ensureNoKeysharesErrors = (keyshares) => {
  keyshares.forEach((share) => {
    if (share.error) {
      throw share.error;
    }
  });
  return true;
};
const tryCatch = (fn) => {
  try {
    return [fn(), null];
  } catch (e) {
    return [null, e];
  }
};
const configArgsSchema = z.object({
  publicClient: z.custom().superRefine((val, ctx) => {
    const client = val;
    if (!client) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Public client must be provided"
      });
      return false;
    }
    if (client.chain === void 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Public client must have a chain property"
      });
      return false;
    }
    if (!chainIds.includes(client.chain?.id)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Public client chain must be one of [${networks.join(", ")}]`
      });
      return false;
    }
    return true;
  }),
  walletClient: z.custom().superRefine((val, ctx) => {
    const client = val;
    if (!client) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Wallet client must be provided"
      });
      return false;
    }
    if (client.chain === void 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Wallet client must have a chain property"
      });
      return false;
    }
    if (!chainIds.includes(client.chain?.id)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Wallet client chain must be one of [${networks.join(", ")}]`
      });
      return false;
    }
    return true;
  }),
  _: z.object({
    graphUrl: z.string().url().optional(),
    restUrl: z.string().url().optional(),
    contractAddresses: z.object({
      setter: z.string().optional(),
      getter: z.string().optional(),
      token: z.string().optional()
    }).optional()
  }).optional()
});
const globals = {
  MAX_WEI_AMOUNT: 115792089237316195423570985008687907853269984665640564039457584007913129639935n,
  CLUSTER_SIZES: {
    QUAD_CLUSTER: 4,
    SEPT_CLUSTER: 7,
    DECA_CLUSTER: 10,
    TRISKAIDEKA_CLUSTER: 13
  },
  FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE: {
    QUAD_CLUSTER: 80,
    SEPT_CLUSTER: 40,
    DECA_CLUSTER: 30,
    TRISKAIDEKA_CLUSTER: 20
  },
  BLOCKS_PER_DAY: 7160n,
  OPERATORS_PER_PAGE: 50,
  BLOCKS_PER_YEAR: 2613400n,
  DEFAULT_CLUSTER_PERIOD: 730,
  NUMBERS_OF_WEEKS_IN_YEAR: 52.1429,
  MAX_VALIDATORS_COUNT_MULTI_FLOW: 50,
  CLUSTER_VALIDITY_PERIOD_MINIMUM: 30,
  OPERATOR_VALIDATORS_LIMIT_PRESERVE: 5,
  MINIMUM_OPERATOR_FEE_PER_BLOCK: 1000000000n,
  MIN_VALIDATORS_COUNT_PER_BULK_REGISTRATION: 1,
  DEFAULT_ADDRESS_WHITELIST: "0x0000000000000000000000000000000000000000"
};
const registerValidatorsByClusterSizeLimits = {
  [globals.CLUSTER_SIZES.QUAD_CLUSTER]: globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.QUAD_CLUSTER,
  [globals.CLUSTER_SIZES.SEPT_CLUSTER]: globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.SEPT_CLUSTER,
  [globals.CLUSTER_SIZES.DECA_CLUSTER]: globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.DECA_CLUSTER,
  [globals.CLUSTER_SIZES.TRISKAIDEKA_CLUSTER]: globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.TRISKAIDEKA_CLUSTER
};
export {
  getOperatorIds as $,
  ensureValidatorsUniqueness as A,
  validateConsistentOperatorPublicKeys as B,
  validateConsistentOperatorIds as C,
  sortNumbers as D,
  KeysharesValidationErrors as E,
  hoodi as F,
  GetOwnerNonceByBlockDocument as G,
  chains as H,
  networks as I,
  bigintMin as J,
  KeysharesValidationError as K,
  bigintRound as L,
  bigintFloor as M,
  bigintAbs as N,
  isBigIntChanged as O,
  bigintifyNumbers as P,
  isClusterId as Q,
  add0x as R,
  KeysharesValidationErrorsMessages as S,
  numberFormatter as T,
  percentageFormatter as U,
  bigintFormatter as V,
  ethFormatter as W,
  formatSSV as X,
  formatBigintInput as Y,
  ms as Z,
  _percentageFormatter as _,
  GetOwnerNonceDocument as a,
  GetClusterSnapshotDocument as b,
  GetClusterDocument as c,
  GetClustersDocument as d,
  GetOperatorDocument as e,
  decodeOperatorPublicKey as f,
  GetOperatorsDocument as g,
  GetValidatorsDocument as h,
  GetValidatorDocument as i,
  GetClusterBalanceDocument as j,
  configArgsSchema as k,
  chainIds as l,
  contracts as m,
  graph_endpoints as n,
  getClusterSnapshot as o,
  isKeySharesItem as p,
  registerValidatorsByClusterSizeLimits as q,
  rest_endpoints as r,
  stringifyBigints as s,
  tryCatch as t,
  createClusterId as u,
  createEmptyCluster as v,
  roundOperatorFee as w,
  globals as x,
  bigintMax as y,
  ensureNoKeysharesErrors as z
};
