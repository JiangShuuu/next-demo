import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetcher } from '@/graphql/lib/first-fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  allowancejobstatus: { input: any; output: any; }
  approvalstatus: { input: any; output: any; }
  bigint: { input: any; output: any; }
  billingtransactionstatus: { input: any; output: any; }
  billingtransactiontype: { input: any; output: any; }
  bindingtransactionstatus: { input: any; output: any; }
  bindingtransactiontype: { input: any; output: any; }
  campaignchildtablename: { input: any; output: any; }
  couponstatus: { input: any; output: any; }
  creditcardstatus: { input: any; output: any; }
  customeridentitydoctype: { input: any; output: any; }
  customerserviceactioncode: { input: any; output: any; }
  date: { input: any; output: any; }
  discountmethod: { input: any; output: any; }
  discounttarget: { input: any; output: any; }
  einvoicestatus: { input: any; output: any; }
  float8: { input: any; output: any; }
  generatecontractjobstatus: { input: any; output: any; }
  interval: { input: any; output: any; }
  json: { input: any; output: any; }
  numeric: { input: any; output: any; }
  orderbillingcategory: { input: any; output: any; }
  orderbillingstatus: { input: any; output: any; }
  orderpaymentstatus: { input: any; output: any; }
  orderpaymenttype: { input: any; output: any; }
  orderphotoname: { input: any; output: any; }
  ordertripstatus: { input: any; output: any; }
  pricetype: { input: any; output: any; }
  refundstatus: { input: any; output: any; }
  scheduledjobstatus: { input: any; output: any; }
  smallint: { input: any; output: any; }
  stationtype: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  timetz: { input: any; output: any; }
  timeunit: { input: any; output: any; }
  usertype: { input: any; output: any; }
  vehicleorigin: { input: any; output: any; }
  vehicleparametercategory: { input: any; output: any; }
  vehiclerentalplanunit: { input: any; output: any; }
  vehiclestatus: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  _eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  _gt?: InputMaybe<Array<Scalars['Int']['input']>>;
  _gte?: InputMaybe<Array<Scalars['Int']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['Int']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['Int']['input']>>;
  _lte?: InputMaybe<Array<Scalars['Int']['input']>>;
  _neq?: InputMaybe<Array<Scalars['Int']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['Int']['input']>>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** 發票折讓紀錄，id 為折讓單開立流水號 */
export type Allowance_Job = {
  __typename?: 'allowance_job';
  /** ezPay 產生的電子發票折讓序號 */
  allowance_no?: Maybe<Scalars['String']['output']>;
  /** ezPay 折讓單回傳時間 */
  allowanced_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 未稅價格 */
  amount_without_tax: Scalars['bigint']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  einvoice_transaction: Einvoice_Transaction;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id: Scalars['bigint']['output'];
  /** ezPay的錯誤碼 */
  error_code?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  /** 扣除折讓的剩餘金額 */
  remain_amt: Scalars['bigint']['output'];
  /** ezPay 折讓商品名稱；ItemName。多項商品時，商品名稱以 | 分隔。例：'商品一|商品二' */
  statement: Scalars['String']['output'];
  /** 折讓單開立狀態 */
  status: Scalars['allowancejobstatus']['output'];
  /** 稅金 */
  tax: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "allowance_job" */
export type Allowance_Job_Aggregate = {
  __typename?: 'allowance_job_aggregate';
  aggregate?: Maybe<Allowance_Job_Aggregate_Fields>;
  nodes: Array<Allowance_Job>;
};

export type Allowance_Job_Aggregate_Bool_Exp = {
  count?: InputMaybe<Allowance_Job_Aggregate_Bool_Exp_Count>;
};

export type Allowance_Job_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Allowance_Job_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Allowance_Job_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "allowance_job" */
export type Allowance_Job_Aggregate_Fields = {
  __typename?: 'allowance_job_aggregate_fields';
  avg?: Maybe<Allowance_Job_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Allowance_Job_Max_Fields>;
  min?: Maybe<Allowance_Job_Min_Fields>;
  stddev?: Maybe<Allowance_Job_Stddev_Fields>;
  stddev_pop?: Maybe<Allowance_Job_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Allowance_Job_Stddev_Samp_Fields>;
  sum?: Maybe<Allowance_Job_Sum_Fields>;
  var_pop?: Maybe<Allowance_Job_Var_Pop_Fields>;
  var_samp?: Maybe<Allowance_Job_Var_Samp_Fields>;
  variance?: Maybe<Allowance_Job_Variance_Fields>;
};


/** aggregate fields of "allowance_job" */
export type Allowance_Job_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Allowance_Job_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "allowance_job" */
export type Allowance_Job_Aggregate_Order_By = {
  avg?: InputMaybe<Allowance_Job_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Allowance_Job_Max_Order_By>;
  min?: InputMaybe<Allowance_Job_Min_Order_By>;
  stddev?: InputMaybe<Allowance_Job_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Allowance_Job_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Allowance_Job_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Allowance_Job_Sum_Order_By>;
  var_pop?: InputMaybe<Allowance_Job_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Allowance_Job_Var_Samp_Order_By>;
  variance?: InputMaybe<Allowance_Job_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Allowance_Job_Avg_Fields = {
  __typename?: 'allowance_job_avg_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['Float']['output']>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: Maybe<Scalars['Float']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "allowance_job" */
export type Allowance_Job_Avg_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "allowance_job". All fields are combined with a logical 'AND'. */
export type Allowance_Job_Bool_Exp = {
  _and?: InputMaybe<Array<Allowance_Job_Bool_Exp>>;
  _not?: InputMaybe<Allowance_Job_Bool_Exp>;
  _or?: InputMaybe<Array<Allowance_Job_Bool_Exp>>;
  allowance_no?: InputMaybe<String_Comparison_Exp>;
  allowanced_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  amount_without_tax?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  einvoice_transaction?: InputMaybe<Einvoice_Transaction_Bool_Exp>;
  einvoice_transaction_id?: InputMaybe<Bigint_Comparison_Exp>;
  error_code?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  remain_amt?: InputMaybe<Bigint_Comparison_Exp>;
  statement?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Allowancejobstatus_Comparison_Exp>;
  tax?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Allowance_Job_Max_Fields = {
  __typename?: 'allowance_job_max_fields';
  /** ezPay 產生的電子發票折讓序號 */
  allowance_no?: Maybe<Scalars['String']['output']>;
  /** ezPay 折讓單回傳時間 */
  allowanced_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: Maybe<Scalars['bigint']['output']>;
  /** ezPay的錯誤碼 */
  error_code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: Maybe<Scalars['bigint']['output']>;
  /** ezPay 折讓商品名稱；ItemName。多項商品時，商品名稱以 | 分隔。例：'商品一|商品二' */
  statement?: Maybe<Scalars['String']['output']>;
  /** 折讓單開立狀態 */
  status?: Maybe<Scalars['allowancejobstatus']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "allowance_job" */
export type Allowance_Job_Max_Order_By = {
  /** ezPay 產生的電子發票折讓序號 */
  allowance_no?: InputMaybe<Order_By>;
  /** ezPay 折讓單回傳時間 */
  allowanced_at?: InputMaybe<Order_By>;
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: InputMaybe<Order_By>;
  /** ezPay的錯誤碼 */
  error_code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: InputMaybe<Order_By>;
  /** ezPay 折讓商品名稱；ItemName。多項商品時，商品名稱以 | 分隔。例：'商品一|商品二' */
  statement?: InputMaybe<Order_By>;
  /** 折讓單開立狀態 */
  status?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Allowance_Job_Min_Fields = {
  __typename?: 'allowance_job_min_fields';
  /** ezPay 產生的電子發票折讓序號 */
  allowance_no?: Maybe<Scalars['String']['output']>;
  /** ezPay 折讓單回傳時間 */
  allowanced_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: Maybe<Scalars['bigint']['output']>;
  /** ezPay的錯誤碼 */
  error_code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: Maybe<Scalars['bigint']['output']>;
  /** ezPay 折讓商品名稱；ItemName。多項商品時，商品名稱以 | 分隔。例：'商品一|商品二' */
  statement?: Maybe<Scalars['String']['output']>;
  /** 折讓單開立狀態 */
  status?: Maybe<Scalars['allowancejobstatus']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "allowance_job" */
export type Allowance_Job_Min_Order_By = {
  /** ezPay 產生的電子發票折讓序號 */
  allowance_no?: InputMaybe<Order_By>;
  /** ezPay 折讓單回傳時間 */
  allowanced_at?: InputMaybe<Order_By>;
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: InputMaybe<Order_By>;
  /** ezPay的錯誤碼 */
  error_code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: InputMaybe<Order_By>;
  /** ezPay 折讓商品名稱；ItemName。多項商品時，商品名稱以 | 分隔。例：'商品一|商品二' */
  statement?: InputMaybe<Order_By>;
  /** 折讓單開立狀態 */
  status?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "allowance_job". */
export type Allowance_Job_Order_By = {
  allowance_no?: InputMaybe<Order_By>;
  allowanced_at?: InputMaybe<Order_By>;
  amount_without_tax?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  einvoice_transaction?: InputMaybe<Einvoice_Transaction_Order_By>;
  einvoice_transaction_id?: InputMaybe<Order_By>;
  error_code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  remain_amt?: InputMaybe<Order_By>;
  statement?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tax?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "allowance_job" */
export enum Allowance_Job_Select_Column {
  /** column name */
  AllowanceNo = 'allowance_no',
  /** column name */
  AllowancedAt = 'allowanced_at',
  /** column name */
  AmountWithoutTax = 'amount_without_tax',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  EinvoiceTransactionId = 'einvoice_transaction_id',
  /** column name */
  ErrorCode = 'error_code',
  /** column name */
  Id = 'id',
  /** column name */
  RemainAmt = 'remain_amt',
  /** column name */
  Statement = 'statement',
  /** column name */
  Status = 'status',
  /** column name */
  Tax = 'tax',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Allowance_Job_Stddev_Fields = {
  __typename?: 'allowance_job_stddev_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['Float']['output']>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: Maybe<Scalars['Float']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "allowance_job" */
export type Allowance_Job_Stddev_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Allowance_Job_Stddev_Pop_Fields = {
  __typename?: 'allowance_job_stddev_pop_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['Float']['output']>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: Maybe<Scalars['Float']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "allowance_job" */
export type Allowance_Job_Stddev_Pop_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Allowance_Job_Stddev_Samp_Fields = {
  __typename?: 'allowance_job_stddev_samp_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['Float']['output']>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: Maybe<Scalars['Float']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "allowance_job" */
export type Allowance_Job_Stddev_Samp_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "allowance_job" */
export type Allowance_Job_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Allowance_Job_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Allowance_Job_Stream_Cursor_Value_Input = {
  /** ezPay 產生的電子發票折讓序號 */
  allowance_no?: InputMaybe<Scalars['String']['input']>;
  /** ezPay 折讓單回傳時間 */
  allowanced_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: InputMaybe<Scalars['bigint']['input']>;
  /** ezPay的錯誤碼 */
  error_code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: InputMaybe<Scalars['bigint']['input']>;
  /** ezPay 折讓商品名稱；ItemName。多項商品時，商品名稱以 | 分隔。例：'商品一|商品二' */
  statement?: InputMaybe<Scalars['String']['input']>;
  /** 折讓單開立狀態 */
  status?: InputMaybe<Scalars['allowancejobstatus']['input']>;
  /** 稅金 */
  tax?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Allowance_Job_Sum_Fields = {
  __typename?: 'allowance_job_sum_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['bigint']['output']>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: Maybe<Scalars['bigint']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "allowance_job" */
export type Allowance_Job_Sum_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Allowance_Job_Var_Pop_Fields = {
  __typename?: 'allowance_job_var_pop_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['Float']['output']>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: Maybe<Scalars['Float']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "allowance_job" */
export type Allowance_Job_Var_Pop_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Allowance_Job_Var_Samp_Fields = {
  __typename?: 'allowance_job_var_samp_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['Float']['output']>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: Maybe<Scalars['Float']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "allowance_job" */
export type Allowance_Job_Var_Samp_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Allowance_Job_Variance_Fields = {
  __typename?: 'allowance_job_variance_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['Float']['output']>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: Maybe<Scalars['Float']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "allowance_job" */
export type Allowance_Job_Variance_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  /** 此折讓單對應的電子發票 */
  einvoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額 */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "allowancejobstatus". All fields are combined with logical 'AND'. */
export type Allowancejobstatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['allowancejobstatus']['input']>;
  _gt?: InputMaybe<Scalars['allowancejobstatus']['input']>;
  _gte?: InputMaybe<Scalars['allowancejobstatus']['input']>;
  _in?: InputMaybe<Array<Scalars['allowancejobstatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['allowancejobstatus']['input']>;
  _lte?: InputMaybe<Scalars['allowancejobstatus']['input']>;
  _neq?: InputMaybe<Scalars['allowancejobstatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['allowancejobstatus']['input']>>;
};

/** Boolean expression to compare columns of type "approvalstatus". All fields are combined with logical 'AND'. */
export type Approvalstatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['approvalstatus']['input']>;
  _gt?: InputMaybe<Scalars['approvalstatus']['input']>;
  _gte?: InputMaybe<Scalars['approvalstatus']['input']>;
  _in?: InputMaybe<Array<Scalars['approvalstatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['approvalstatus']['input']>;
  _lte?: InputMaybe<Scalars['approvalstatus']['input']>;
  _neq?: InputMaybe<Scalars['approvalstatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['approvalstatus']['input']>>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** 訂單扣款明細 ETC 資料 */
export type Billing_Etc = {
  __typename?: 'billing_etc';
  /** 生效時間，預設是 10 分後 */
  activated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  billing_etc_files: Array<Billing_Etc_File>;
  /** An aggregate relationship */
  billing_etc_files_aggregate: Billing_Etc_File_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  order_billing: Order_Billing;
  /** ETC 資料對應扣款明細 */
  order_billing_id: Scalars['bigint']['output'];
  /** 預計扣款日，預設是七天後 */
  payment_date: Scalars['date']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 訂單扣款明細 ETC 資料 */
export type Billing_EtcBilling_Etc_FilesArgs = {
  distinct_on?: InputMaybe<Array<Billing_Etc_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Etc_File_Order_By>>;
  where?: InputMaybe<Billing_Etc_File_Bool_Exp>;
};


/** 訂單扣款明細 ETC 資料 */
export type Billing_EtcBilling_Etc_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Etc_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Etc_File_Order_By>>;
  where?: InputMaybe<Billing_Etc_File_Bool_Exp>;
};

/** aggregated selection of "billing_etc" */
export type Billing_Etc_Aggregate = {
  __typename?: 'billing_etc_aggregate';
  aggregate?: Maybe<Billing_Etc_Aggregate_Fields>;
  nodes: Array<Billing_Etc>;
};

export type Billing_Etc_Aggregate_Bool_Exp = {
  count?: InputMaybe<Billing_Etc_Aggregate_Bool_Exp_Count>;
};

export type Billing_Etc_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Billing_Etc_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Billing_Etc_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "billing_etc" */
export type Billing_Etc_Aggregate_Fields = {
  __typename?: 'billing_etc_aggregate_fields';
  avg?: Maybe<Billing_Etc_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Billing_Etc_Max_Fields>;
  min?: Maybe<Billing_Etc_Min_Fields>;
  stddev?: Maybe<Billing_Etc_Stddev_Fields>;
  stddev_pop?: Maybe<Billing_Etc_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Billing_Etc_Stddev_Samp_Fields>;
  sum?: Maybe<Billing_Etc_Sum_Fields>;
  var_pop?: Maybe<Billing_Etc_Var_Pop_Fields>;
  var_samp?: Maybe<Billing_Etc_Var_Samp_Fields>;
  variance?: Maybe<Billing_Etc_Variance_Fields>;
};


/** aggregate fields of "billing_etc" */
export type Billing_Etc_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Etc_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "billing_etc" */
export type Billing_Etc_Aggregate_Order_By = {
  avg?: InputMaybe<Billing_Etc_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Billing_Etc_Max_Order_By>;
  min?: InputMaybe<Billing_Etc_Min_Order_By>;
  stddev?: InputMaybe<Billing_Etc_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Billing_Etc_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Billing_Etc_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Billing_Etc_Sum_Order_By>;
  var_pop?: InputMaybe<Billing_Etc_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Billing_Etc_Var_Samp_Order_By>;
  variance?: InputMaybe<Billing_Etc_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Billing_Etc_Avg_Fields = {
  __typename?: 'billing_etc_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "billing_etc" */
export type Billing_Etc_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "billing_etc". All fields are combined with a logical 'AND'. */
export type Billing_Etc_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Etc_Bool_Exp>>;
  _not?: InputMaybe<Billing_Etc_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Etc_Bool_Exp>>;
  activated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  billing_etc_files?: InputMaybe<Billing_Etc_File_Bool_Exp>;
  billing_etc_files_aggregate?: InputMaybe<Billing_Etc_File_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  order_billing?: InputMaybe<Order_Billing_Bool_Exp>;
  order_billing_id?: InputMaybe<Bigint_Comparison_Exp>;
  payment_date?: InputMaybe<Date_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** 訂單扣款明細 ETC 資料檔案 */
export type Billing_Etc_File = {
  __typename?: 'billing_etc_file';
  /** An object relationship */
  billing_etc?: Maybe<Billing_Etc>;
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: Maybe<Scalars['bigint']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['bigint']['output'];
  /** 檔案名稱 */
  name: Scalars['String']['output'];
  /** Google Cloud Storage 儲存位址 */
  path?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "billing_etc_file" */
export type Billing_Etc_File_Aggregate = {
  __typename?: 'billing_etc_file_aggregate';
  aggregate?: Maybe<Billing_Etc_File_Aggregate_Fields>;
  nodes: Array<Billing_Etc_File>;
};

export type Billing_Etc_File_Aggregate_Bool_Exp = {
  count?: InputMaybe<Billing_Etc_File_Aggregate_Bool_Exp_Count>;
};

export type Billing_Etc_File_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Billing_Etc_File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Billing_Etc_File_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "billing_etc_file" */
export type Billing_Etc_File_Aggregate_Fields = {
  __typename?: 'billing_etc_file_aggregate_fields';
  avg?: Maybe<Billing_Etc_File_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Billing_Etc_File_Max_Fields>;
  min?: Maybe<Billing_Etc_File_Min_Fields>;
  stddev?: Maybe<Billing_Etc_File_Stddev_Fields>;
  stddev_pop?: Maybe<Billing_Etc_File_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Billing_Etc_File_Stddev_Samp_Fields>;
  sum?: Maybe<Billing_Etc_File_Sum_Fields>;
  var_pop?: Maybe<Billing_Etc_File_Var_Pop_Fields>;
  var_samp?: Maybe<Billing_Etc_File_Var_Samp_Fields>;
  variance?: Maybe<Billing_Etc_File_Variance_Fields>;
};


/** aggregate fields of "billing_etc_file" */
export type Billing_Etc_File_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Etc_File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "billing_etc_file" */
export type Billing_Etc_File_Aggregate_Order_By = {
  avg?: InputMaybe<Billing_Etc_File_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Billing_Etc_File_Max_Order_By>;
  min?: InputMaybe<Billing_Etc_File_Min_Order_By>;
  stddev?: InputMaybe<Billing_Etc_File_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Billing_Etc_File_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Billing_Etc_File_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Billing_Etc_File_Sum_Order_By>;
  var_pop?: InputMaybe<Billing_Etc_File_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Billing_Etc_File_Var_Samp_Order_By>;
  variance?: InputMaybe<Billing_Etc_File_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Billing_Etc_File_Avg_Fields = {
  __typename?: 'billing_etc_file_avg_fields';
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "billing_etc_file" */
export type Billing_Etc_File_Avg_Order_By = {
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "billing_etc_file". All fields are combined with a logical 'AND'. */
export type Billing_Etc_File_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Etc_File_Bool_Exp>>;
  _not?: InputMaybe<Billing_Etc_File_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Etc_File_Bool_Exp>>;
  billing_etc?: InputMaybe<Billing_Etc_Bool_Exp>;
  billing_etc_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Billing_Etc_File_Max_Fields = {
  __typename?: 'billing_etc_file_max_fields';
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 檔案名稱 */
  name?: Maybe<Scalars['String']['output']>;
  /** Google Cloud Storage 儲存位址 */
  path?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "billing_etc_file" */
export type Billing_Etc_File_Max_Order_By = {
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 檔案名稱 */
  name?: InputMaybe<Order_By>;
  /** Google Cloud Storage 儲存位址 */
  path?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Billing_Etc_File_Min_Fields = {
  __typename?: 'billing_etc_file_min_fields';
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 檔案名稱 */
  name?: Maybe<Scalars['String']['output']>;
  /** Google Cloud Storage 儲存位址 */
  path?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "billing_etc_file" */
export type Billing_Etc_File_Min_Order_By = {
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 檔案名稱 */
  name?: InputMaybe<Order_By>;
  /** Google Cloud Storage 儲存位址 */
  path?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "billing_etc_file". */
export type Billing_Etc_File_Order_By = {
  billing_etc?: InputMaybe<Billing_Etc_Order_By>;
  billing_etc_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "billing_etc_file" */
export enum Billing_Etc_File_Select_Column {
  /** column name */
  BillingEtcId = 'billing_etc_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Path = 'path',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Billing_Etc_File_Stddev_Fields = {
  __typename?: 'billing_etc_file_stddev_fields';
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "billing_etc_file" */
export type Billing_Etc_File_Stddev_Order_By = {
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Billing_Etc_File_Stddev_Pop_Fields = {
  __typename?: 'billing_etc_file_stddev_pop_fields';
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "billing_etc_file" */
export type Billing_Etc_File_Stddev_Pop_Order_By = {
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Billing_Etc_File_Stddev_Samp_Fields = {
  __typename?: 'billing_etc_file_stddev_samp_fields';
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "billing_etc_file" */
export type Billing_Etc_File_Stddev_Samp_Order_By = {
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "billing_etc_file" */
export type Billing_Etc_File_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Etc_File_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Etc_File_Stream_Cursor_Value_Input = {
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 檔案名稱 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Google Cloud Storage 儲存位址 */
  path?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Billing_Etc_File_Sum_Fields = {
  __typename?: 'billing_etc_file_sum_fields';
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "billing_etc_file" */
export type Billing_Etc_File_Sum_Order_By = {
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Billing_Etc_File_Var_Pop_Fields = {
  __typename?: 'billing_etc_file_var_pop_fields';
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "billing_etc_file" */
export type Billing_Etc_File_Var_Pop_Order_By = {
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Billing_Etc_File_Var_Samp_Fields = {
  __typename?: 'billing_etc_file_var_samp_fields';
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "billing_etc_file" */
export type Billing_Etc_File_Var_Samp_Order_By = {
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Billing_Etc_File_Variance_Fields = {
  __typename?: 'billing_etc_file_variance_fields';
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "billing_etc_file" */
export type Billing_Etc_File_Variance_Order_By = {
  /** ETC 檔案對應資料扣款明細 (已棄用) */
  billing_etc_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Billing_Etc_Max_Fields = {
  __typename?: 'billing_etc_max_fields';
  /** 生效時間，預設是 10 分後 */
  activated_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: Maybe<Scalars['bigint']['output']>;
  /** 預計扣款日，預設是七天後 */
  payment_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "billing_etc" */
export type Billing_Etc_Max_Order_By = {
  /** 生效時間，預設是 10 分後 */
  activated_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
  /** 預計扣款日，預設是七天後 */
  payment_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Billing_Etc_Min_Fields = {
  __typename?: 'billing_etc_min_fields';
  /** 生效時間，預設是 10 分後 */
  activated_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: Maybe<Scalars['bigint']['output']>;
  /** 預計扣款日，預設是七天後 */
  payment_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "billing_etc" */
export type Billing_Etc_Min_Order_By = {
  /** 生效時間，預設是 10 分後 */
  activated_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
  /** 預計扣款日，預設是七天後 */
  payment_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "billing_etc". */
export type Billing_Etc_Order_By = {
  activated_at?: InputMaybe<Order_By>;
  billing_etc_files_aggregate?: InputMaybe<Billing_Etc_File_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_billing?: InputMaybe<Order_Billing_Order_By>;
  order_billing_id?: InputMaybe<Order_By>;
  payment_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "billing_etc" */
export enum Billing_Etc_Select_Column {
  /** column name */
  ActivatedAt = 'activated_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderBillingId = 'order_billing_id',
  /** column name */
  PaymentDate = 'payment_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Billing_Etc_Stddev_Fields = {
  __typename?: 'billing_etc_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "billing_etc" */
export type Billing_Etc_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Billing_Etc_Stddev_Pop_Fields = {
  __typename?: 'billing_etc_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "billing_etc" */
export type Billing_Etc_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Billing_Etc_Stddev_Samp_Fields = {
  __typename?: 'billing_etc_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "billing_etc" */
export type Billing_Etc_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "billing_etc" */
export type Billing_Etc_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Etc_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Etc_Stream_Cursor_Value_Input = {
  /** 生效時間，預設是 10 分後 */
  activated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 預計扣款日，預設是七天後 */
  payment_date?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Billing_Etc_Sum_Fields = {
  __typename?: 'billing_etc_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "billing_etc" */
export type Billing_Etc_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Billing_Etc_Var_Pop_Fields = {
  __typename?: 'billing_etc_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "billing_etc" */
export type Billing_Etc_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Billing_Etc_Var_Samp_Fields = {
  __typename?: 'billing_etc_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "billing_etc" */
export type Billing_Etc_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Billing_Etc_Variance_Fields = {
  __typename?: 'billing_etc_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "billing_etc" */
export type Billing_Etc_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  /** ETC 資料對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** 訂單扣款明細通知工作紀錄 */
export type Billing_Notify_Job = {
  __typename?: 'billing_notify_job';
  created_at: Scalars['timestamptz']['output'];
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 錯誤訊息 */
  error_message?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  /** 通知發送時間 */
  notified_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  order_billing: Order_Billing;
  /** 對應扣款明細 */
  order_billing_id: Scalars['bigint']['output'];
  /** 通知狀態 */
  status: Scalars['scheduledjobstatus']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "billing_notify_job" */
export type Billing_Notify_Job_Aggregate = {
  __typename?: 'billing_notify_job_aggregate';
  aggregate?: Maybe<Billing_Notify_Job_Aggregate_Fields>;
  nodes: Array<Billing_Notify_Job>;
};

export type Billing_Notify_Job_Aggregate_Bool_Exp = {
  count?: InputMaybe<Billing_Notify_Job_Aggregate_Bool_Exp_Count>;
};

export type Billing_Notify_Job_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Billing_Notify_Job_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Billing_Notify_Job_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "billing_notify_job" */
export type Billing_Notify_Job_Aggregate_Fields = {
  __typename?: 'billing_notify_job_aggregate_fields';
  avg?: Maybe<Billing_Notify_Job_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Billing_Notify_Job_Max_Fields>;
  min?: Maybe<Billing_Notify_Job_Min_Fields>;
  stddev?: Maybe<Billing_Notify_Job_Stddev_Fields>;
  stddev_pop?: Maybe<Billing_Notify_Job_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Billing_Notify_Job_Stddev_Samp_Fields>;
  sum?: Maybe<Billing_Notify_Job_Sum_Fields>;
  var_pop?: Maybe<Billing_Notify_Job_Var_Pop_Fields>;
  var_samp?: Maybe<Billing_Notify_Job_Var_Samp_Fields>;
  variance?: Maybe<Billing_Notify_Job_Variance_Fields>;
};


/** aggregate fields of "billing_notify_job" */
export type Billing_Notify_Job_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Notify_Job_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "billing_notify_job" */
export type Billing_Notify_Job_Aggregate_Order_By = {
  avg?: InputMaybe<Billing_Notify_Job_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Billing_Notify_Job_Max_Order_By>;
  min?: InputMaybe<Billing_Notify_Job_Min_Order_By>;
  stddev?: InputMaybe<Billing_Notify_Job_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Billing_Notify_Job_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Billing_Notify_Job_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Billing_Notify_Job_Sum_Order_By>;
  var_pop?: InputMaybe<Billing_Notify_Job_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Billing_Notify_Job_Var_Samp_Order_By>;
  variance?: InputMaybe<Billing_Notify_Job_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Billing_Notify_Job_Avg_Fields = {
  __typename?: 'billing_notify_job_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 對應扣款明細 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "billing_notify_job" */
export type Billing_Notify_Job_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "billing_notify_job". All fields are combined with a logical 'AND'. */
export type Billing_Notify_Job_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Notify_Job_Bool_Exp>>;
  _not?: InputMaybe<Billing_Notify_Job_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Notify_Job_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  error_message?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  notified_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  order_billing?: InputMaybe<Order_Billing_Bool_Exp>;
  order_billing_id?: InputMaybe<Bigint_Comparison_Exp>;
  status?: InputMaybe<Scheduledjobstatus_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Billing_Notify_Job_Max_Fields = {
  __typename?: 'billing_notify_job_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 錯誤訊息 */
  error_message?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 通知發送時間 */
  notified_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 對應扣款明細 */
  order_billing_id?: Maybe<Scalars['bigint']['output']>;
  /** 通知狀態 */
  status?: Maybe<Scalars['scheduledjobstatus']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "billing_notify_job" */
export type Billing_Notify_Job_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 錯誤訊息 */
  error_message?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 通知發送時間 */
  notified_at?: InputMaybe<Order_By>;
  /** 對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
  /** 通知狀態 */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Billing_Notify_Job_Min_Fields = {
  __typename?: 'billing_notify_job_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 錯誤訊息 */
  error_message?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 通知發送時間 */
  notified_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 對應扣款明細 */
  order_billing_id?: Maybe<Scalars['bigint']['output']>;
  /** 通知狀態 */
  status?: Maybe<Scalars['scheduledjobstatus']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "billing_notify_job" */
export type Billing_Notify_Job_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 錯誤訊息 */
  error_message?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 通知發送時間 */
  notified_at?: InputMaybe<Order_By>;
  /** 對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
  /** 通知狀態 */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "billing_notify_job". */
export type Billing_Notify_Job_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  error_message?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notified_at?: InputMaybe<Order_By>;
  order_billing?: InputMaybe<Order_Billing_Order_By>;
  order_billing_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "billing_notify_job" */
export enum Billing_Notify_Job_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  ErrorMessage = 'error_message',
  /** column name */
  Id = 'id',
  /** column name */
  NotifiedAt = 'notified_at',
  /** column name */
  OrderBillingId = 'order_billing_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Billing_Notify_Job_Stddev_Fields = {
  __typename?: 'billing_notify_job_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 對應扣款明細 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "billing_notify_job" */
export type Billing_Notify_Job_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Billing_Notify_Job_Stddev_Pop_Fields = {
  __typename?: 'billing_notify_job_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 對應扣款明細 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "billing_notify_job" */
export type Billing_Notify_Job_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Billing_Notify_Job_Stddev_Samp_Fields = {
  __typename?: 'billing_notify_job_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 對應扣款明細 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "billing_notify_job" */
export type Billing_Notify_Job_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "billing_notify_job" */
export type Billing_Notify_Job_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Notify_Job_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Notify_Job_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 錯誤訊息 */
  error_message?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 通知發送時間 */
  notified_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 對應扣款明細 */
  order_billing_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 通知狀態 */
  status?: InputMaybe<Scalars['scheduledjobstatus']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Billing_Notify_Job_Sum_Fields = {
  __typename?: 'billing_notify_job_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  /** 對應扣款明細 */
  order_billing_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "billing_notify_job" */
export type Billing_Notify_Job_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Billing_Notify_Job_Var_Pop_Fields = {
  __typename?: 'billing_notify_job_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 對應扣款明細 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "billing_notify_job" */
export type Billing_Notify_Job_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Billing_Notify_Job_Var_Samp_Fields = {
  __typename?: 'billing_notify_job_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 對應扣款明細 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "billing_notify_job" */
export type Billing_Notify_Job_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Billing_Notify_Job_Variance_Fields = {
  __typename?: 'billing_notify_job_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 對應扣款明細 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "billing_notify_job" */
export type Billing_Notify_Job_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應扣款明細 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** 訂單明細交易紀錄，id 為交易編號，也用於 MerchantOrderNo；現況皆為信用卡交易。 */
export type Billing_Transaction = {
  __typename?: 'billing_transaction';
  /** 交易金額，新台幣整數 */
  amount: Scalars['bigint']['output'];
  /** 交易取消的時間 */
  cancelled_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  credit_card: Credit_Card;
  /** 交易所使用的信用卡 id */
  credit_card_id: Scalars['bigint']['output'];
  /** 當下發票開立狀態 */
  current_invoice_status?: Maybe<Scalars['einvoicestatus']['output']>;
  /** An object relationship */
  current_invoice_transaction?: Maybe<Einvoice_Transaction>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: Maybe<Scalars['bigint']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  einvoice_transactions: Array<Einvoice_Transaction>;
  /** An aggregate relationship */
  einvoice_transactions_aggregate: Einvoice_Transaction_Aggregate;
  /** 藍新的錯誤碼 */
  error_code?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  /** 是否需要開立電子發票 */
  is_need_invoice: Scalars['Boolean']['output'];
  /** 提供給藍新的金流訂單編號（與系統內部使用的訂單編號不同） */
  merchant_order_no?: Maybe<Scalars['String']['output']>;
  /** 藍新產生的金流交易序號 */
  neweb_trade_no?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  order_billing: Order_Billing;
  /** 交易對應的訂單 */
  order_billing_id: Scalars['bigint']['output'];
  /** An array relationship */
  refunds: Array<Refund>;
  /** An aggregate relationship */
  refunds_aggregate: Refund_Aggregate;
  /** 商品描述；ProdDesc */
  statement: Scalars['String']['output'];
  /** 狀態，如：INIT, PAID_REQ_OK */
  status: Scalars['billingtransactionstatus']['output'];
  /** 紀錄交易種類：P3D_AGREED_PAYMENT, P3D_BEHIND_PAYMENT, NON_P3D_AGREED_PAYMENT, NON_P3D_BEHIND_PAYMENT */
  type: Scalars['billingtransactiontype']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 訂單明細交易紀錄，id 為交易編號，也用於 MerchantOrderNo；現況皆為信用卡交易。 */
export type Billing_TransactionEinvoice_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Einvoice_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Einvoice_Transaction_Order_By>>;
  where?: InputMaybe<Einvoice_Transaction_Bool_Exp>;
};


/** 訂單明細交易紀錄，id 為交易編號，也用於 MerchantOrderNo；現況皆為信用卡交易。 */
export type Billing_TransactionEinvoice_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Einvoice_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Einvoice_Transaction_Order_By>>;
  where?: InputMaybe<Einvoice_Transaction_Bool_Exp>;
};


/** 訂單明細交易紀錄，id 為交易編號，也用於 MerchantOrderNo；現況皆為信用卡交易。 */
export type Billing_TransactionRefundsArgs = {
  distinct_on?: InputMaybe<Array<Refund_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Refund_Order_By>>;
  where?: InputMaybe<Refund_Bool_Exp>;
};


/** 訂單明細交易紀錄，id 為交易編號，也用於 MerchantOrderNo；現況皆為信用卡交易。 */
export type Billing_TransactionRefunds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Refund_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Refund_Order_By>>;
  where?: InputMaybe<Refund_Bool_Exp>;
};

/** aggregated selection of "billing_transaction" */
export type Billing_Transaction_Aggregate = {
  __typename?: 'billing_transaction_aggregate';
  aggregate?: Maybe<Billing_Transaction_Aggregate_Fields>;
  nodes: Array<Billing_Transaction>;
};

export type Billing_Transaction_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Billing_Transaction_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Billing_Transaction_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Billing_Transaction_Aggregate_Bool_Exp_Count>;
};

export type Billing_Transaction_Aggregate_Bool_Exp_Bool_And = {
  arguments: Billing_Transaction_Select_Column_Billing_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Billing_Transaction_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Billing_Transaction_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Billing_Transaction_Select_Column_Billing_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Billing_Transaction_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Billing_Transaction_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Billing_Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Billing_Transaction_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "billing_transaction" */
export type Billing_Transaction_Aggregate_Fields = {
  __typename?: 'billing_transaction_aggregate_fields';
  avg?: Maybe<Billing_Transaction_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Billing_Transaction_Max_Fields>;
  min?: Maybe<Billing_Transaction_Min_Fields>;
  stddev?: Maybe<Billing_Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Billing_Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Billing_Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Billing_Transaction_Sum_Fields>;
  var_pop?: Maybe<Billing_Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Billing_Transaction_Var_Samp_Fields>;
  variance?: Maybe<Billing_Transaction_Variance_Fields>;
};


/** aggregate fields of "billing_transaction" */
export type Billing_Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "billing_transaction" */
export type Billing_Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Billing_Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Billing_Transaction_Max_Order_By>;
  min?: InputMaybe<Billing_Transaction_Min_Order_By>;
  stddev?: InputMaybe<Billing_Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Billing_Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Billing_Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Billing_Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Billing_Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Billing_Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Billing_Transaction_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Billing_Transaction_Avg_Fields = {
  __typename?: 'billing_transaction_avg_fields';
  /** 交易金額，新台幣整數 */
  amount?: Maybe<Scalars['Float']['output']>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: Maybe<Scalars['Float']['output']>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 交易對應的訂單 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "billing_transaction" */
export type Billing_Transaction_Avg_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: InputMaybe<Order_By>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 交易對應的訂單 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "billing_transaction". All fields are combined with a logical 'AND'. */
export type Billing_Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Transaction_Bool_Exp>>;
  _not?: InputMaybe<Billing_Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Transaction_Bool_Exp>>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  cancelled_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  credit_card?: InputMaybe<Credit_Card_Bool_Exp>;
  credit_card_id?: InputMaybe<Bigint_Comparison_Exp>;
  current_invoice_status?: InputMaybe<Einvoicestatus_Comparison_Exp>;
  current_invoice_transaction?: InputMaybe<Einvoice_Transaction_Bool_Exp>;
  current_invoice_transaction_id?: InputMaybe<Bigint_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  einvoice_transactions?: InputMaybe<Einvoice_Transaction_Bool_Exp>;
  einvoice_transactions_aggregate?: InputMaybe<Einvoice_Transaction_Aggregate_Bool_Exp>;
  error_code?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_need_invoice?: InputMaybe<Boolean_Comparison_Exp>;
  merchant_order_no?: InputMaybe<String_Comparison_Exp>;
  neweb_trade_no?: InputMaybe<String_Comparison_Exp>;
  order_billing?: InputMaybe<Order_Billing_Bool_Exp>;
  order_billing_id?: InputMaybe<Bigint_Comparison_Exp>;
  refunds?: InputMaybe<Refund_Bool_Exp>;
  refunds_aggregate?: InputMaybe<Refund_Aggregate_Bool_Exp>;
  statement?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Billingtransactionstatus_Comparison_Exp>;
  type?: InputMaybe<Billingtransactiontype_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Billing_Transaction_Max_Fields = {
  __typename?: 'billing_transaction_max_fields';
  /** 交易金額，新台幣整數 */
  amount?: Maybe<Scalars['bigint']['output']>;
  /** 交易取消的時間 */
  cancelled_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: Maybe<Scalars['bigint']['output']>;
  /** 當下發票開立狀態 */
  current_invoice_status?: Maybe<Scalars['einvoicestatus']['output']>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: Maybe<Scalars['bigint']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 藍新的錯誤碼 */
  error_code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 提供給藍新的金流訂單編號（與系統內部使用的訂單編號不同） */
  merchant_order_no?: Maybe<Scalars['String']['output']>;
  /** 藍新產生的金流交易序號 */
  neweb_trade_no?: Maybe<Scalars['String']['output']>;
  /** 交易對應的訂單 */
  order_billing_id?: Maybe<Scalars['bigint']['output']>;
  /** 商品描述；ProdDesc */
  statement?: Maybe<Scalars['String']['output']>;
  /** 狀態，如：INIT, PAID_REQ_OK */
  status?: Maybe<Scalars['billingtransactionstatus']['output']>;
  /** 紀錄交易種類：P3D_AGREED_PAYMENT, P3D_BEHIND_PAYMENT, NON_P3D_AGREED_PAYMENT, NON_P3D_BEHIND_PAYMENT */
  type?: Maybe<Scalars['billingtransactiontype']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "billing_transaction" */
export type Billing_Transaction_Max_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 交易取消的時間 */
  cancelled_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: InputMaybe<Order_By>;
  /** 當下發票開立狀態 */
  current_invoice_status?: InputMaybe<Order_By>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 藍新的錯誤碼 */
  error_code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 提供給藍新的金流訂單編號（與系統內部使用的訂單編號不同） */
  merchant_order_no?: InputMaybe<Order_By>;
  /** 藍新產生的金流交易序號 */
  neweb_trade_no?: InputMaybe<Order_By>;
  /** 交易對應的訂單 */
  order_billing_id?: InputMaybe<Order_By>;
  /** 商品描述；ProdDesc */
  statement?: InputMaybe<Order_By>;
  /** 狀態，如：INIT, PAID_REQ_OK */
  status?: InputMaybe<Order_By>;
  /** 紀錄交易種類：P3D_AGREED_PAYMENT, P3D_BEHIND_PAYMENT, NON_P3D_AGREED_PAYMENT, NON_P3D_BEHIND_PAYMENT */
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Billing_Transaction_Min_Fields = {
  __typename?: 'billing_transaction_min_fields';
  /** 交易金額，新台幣整數 */
  amount?: Maybe<Scalars['bigint']['output']>;
  /** 交易取消的時間 */
  cancelled_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: Maybe<Scalars['bigint']['output']>;
  /** 當下發票開立狀態 */
  current_invoice_status?: Maybe<Scalars['einvoicestatus']['output']>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: Maybe<Scalars['bigint']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 藍新的錯誤碼 */
  error_code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 提供給藍新的金流訂單編號（與系統內部使用的訂單編號不同） */
  merchant_order_no?: Maybe<Scalars['String']['output']>;
  /** 藍新產生的金流交易序號 */
  neweb_trade_no?: Maybe<Scalars['String']['output']>;
  /** 交易對應的訂單 */
  order_billing_id?: Maybe<Scalars['bigint']['output']>;
  /** 商品描述；ProdDesc */
  statement?: Maybe<Scalars['String']['output']>;
  /** 狀態，如：INIT, PAID_REQ_OK */
  status?: Maybe<Scalars['billingtransactionstatus']['output']>;
  /** 紀錄交易種類：P3D_AGREED_PAYMENT, P3D_BEHIND_PAYMENT, NON_P3D_AGREED_PAYMENT, NON_P3D_BEHIND_PAYMENT */
  type?: Maybe<Scalars['billingtransactiontype']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "billing_transaction" */
export type Billing_Transaction_Min_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 交易取消的時間 */
  cancelled_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: InputMaybe<Order_By>;
  /** 當下發票開立狀態 */
  current_invoice_status?: InputMaybe<Order_By>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 藍新的錯誤碼 */
  error_code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 提供給藍新的金流訂單編號（與系統內部使用的訂單編號不同） */
  merchant_order_no?: InputMaybe<Order_By>;
  /** 藍新產生的金流交易序號 */
  neweb_trade_no?: InputMaybe<Order_By>;
  /** 交易對應的訂單 */
  order_billing_id?: InputMaybe<Order_By>;
  /** 商品描述；ProdDesc */
  statement?: InputMaybe<Order_By>;
  /** 狀態，如：INIT, PAID_REQ_OK */
  status?: InputMaybe<Order_By>;
  /** 紀錄交易種類：P3D_AGREED_PAYMENT, P3D_BEHIND_PAYMENT, NON_P3D_AGREED_PAYMENT, NON_P3D_BEHIND_PAYMENT */
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "billing_transaction". */
export type Billing_Transaction_Order_By = {
  amount?: InputMaybe<Order_By>;
  cancelled_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  credit_card?: InputMaybe<Credit_Card_Order_By>;
  credit_card_id?: InputMaybe<Order_By>;
  current_invoice_status?: InputMaybe<Order_By>;
  current_invoice_transaction?: InputMaybe<Einvoice_Transaction_Order_By>;
  current_invoice_transaction_id?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  einvoice_transactions_aggregate?: InputMaybe<Einvoice_Transaction_Aggregate_Order_By>;
  error_code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_need_invoice?: InputMaybe<Order_By>;
  merchant_order_no?: InputMaybe<Order_By>;
  neweb_trade_no?: InputMaybe<Order_By>;
  order_billing?: InputMaybe<Order_Billing_Order_By>;
  order_billing_id?: InputMaybe<Order_By>;
  refunds_aggregate?: InputMaybe<Refund_Aggregate_Order_By>;
  statement?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "billing_transaction" */
export enum Billing_Transaction_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CancelledAt = 'cancelled_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditCardId = 'credit_card_id',
  /** column name */
  CurrentInvoiceStatus = 'current_invoice_status',
  /** column name */
  CurrentInvoiceTransactionId = 'current_invoice_transaction_id',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  ErrorCode = 'error_code',
  /** column name */
  Id = 'id',
  /** column name */
  IsNeedInvoice = 'is_need_invoice',
  /** column name */
  MerchantOrderNo = 'merchant_order_no',
  /** column name */
  NewebTradeNo = 'neweb_trade_no',
  /** column name */
  OrderBillingId = 'order_billing_id',
  /** column name */
  Statement = 'statement',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "billing_transaction_aggregate_bool_exp_bool_and_arguments_columns" columns of table "billing_transaction" */
export enum Billing_Transaction_Select_Column_Billing_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsNeedInvoice = 'is_need_invoice'
}

/** select "billing_transaction_aggregate_bool_exp_bool_or_arguments_columns" columns of table "billing_transaction" */
export enum Billing_Transaction_Select_Column_Billing_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsNeedInvoice = 'is_need_invoice'
}

/** aggregate stddev on columns */
export type Billing_Transaction_Stddev_Fields = {
  __typename?: 'billing_transaction_stddev_fields';
  /** 交易金額，新台幣整數 */
  amount?: Maybe<Scalars['Float']['output']>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: Maybe<Scalars['Float']['output']>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 交易對應的訂單 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "billing_transaction" */
export type Billing_Transaction_Stddev_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: InputMaybe<Order_By>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 交易對應的訂單 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Billing_Transaction_Stddev_Pop_Fields = {
  __typename?: 'billing_transaction_stddev_pop_fields';
  /** 交易金額，新台幣整數 */
  amount?: Maybe<Scalars['Float']['output']>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: Maybe<Scalars['Float']['output']>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 交易對應的訂單 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "billing_transaction" */
export type Billing_Transaction_Stddev_Pop_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: InputMaybe<Order_By>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 交易對應的訂單 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Billing_Transaction_Stddev_Samp_Fields = {
  __typename?: 'billing_transaction_stddev_samp_fields';
  /** 交易金額，新台幣整數 */
  amount?: Maybe<Scalars['Float']['output']>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: Maybe<Scalars['Float']['output']>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 交易對應的訂單 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "billing_transaction" */
export type Billing_Transaction_Stddev_Samp_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: InputMaybe<Order_By>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 交易對應的訂單 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "billing_transaction" */
export type Billing_Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Transaction_Stream_Cursor_Value_Input = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Scalars['bigint']['input']>;
  /** 交易取消的時間 */
  cancelled_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 當下發票開立狀態 */
  current_invoice_status?: InputMaybe<Scalars['einvoicestatus']['input']>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 藍新的錯誤碼 */
  error_code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否需要開立電子發票 */
  is_need_invoice?: InputMaybe<Scalars['Boolean']['input']>;
  /** 提供給藍新的金流訂單編號（與系統內部使用的訂單編號不同） */
  merchant_order_no?: InputMaybe<Scalars['String']['input']>;
  /** 藍新產生的金流交易序號 */
  neweb_trade_no?: InputMaybe<Scalars['String']['input']>;
  /** 交易對應的訂單 */
  order_billing_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 商品描述；ProdDesc */
  statement?: InputMaybe<Scalars['String']['input']>;
  /** 狀態，如：INIT, PAID_REQ_OK */
  status?: InputMaybe<Scalars['billingtransactionstatus']['input']>;
  /** 紀錄交易種類：P3D_AGREED_PAYMENT, P3D_BEHIND_PAYMENT, NON_P3D_AGREED_PAYMENT, NON_P3D_BEHIND_PAYMENT */
  type?: InputMaybe<Scalars['billingtransactiontype']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Billing_Transaction_Sum_Fields = {
  __typename?: 'billing_transaction_sum_fields';
  /** 交易金額，新台幣整數 */
  amount?: Maybe<Scalars['bigint']['output']>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: Maybe<Scalars['bigint']['output']>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 交易對應的訂單 */
  order_billing_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "billing_transaction" */
export type Billing_Transaction_Sum_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: InputMaybe<Order_By>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 交易對應的訂單 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Billing_Transaction_Var_Pop_Fields = {
  __typename?: 'billing_transaction_var_pop_fields';
  /** 交易金額，新台幣整數 */
  amount?: Maybe<Scalars['Float']['output']>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: Maybe<Scalars['Float']['output']>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 交易對應的訂單 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "billing_transaction" */
export type Billing_Transaction_Var_Pop_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: InputMaybe<Order_By>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 交易對應的訂單 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Billing_Transaction_Var_Samp_Fields = {
  __typename?: 'billing_transaction_var_samp_fields';
  /** 交易金額，新台幣整數 */
  amount?: Maybe<Scalars['Float']['output']>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: Maybe<Scalars['Float']['output']>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 交易對應的訂單 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "billing_transaction" */
export type Billing_Transaction_Var_Samp_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: InputMaybe<Order_By>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 交易對應的訂單 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Billing_Transaction_Variance_Fields = {
  __typename?: 'billing_transaction_variance_fields';
  /** 交易金額，新台幣整數 */
  amount?: Maybe<Scalars['Float']['output']>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: Maybe<Scalars['Float']['output']>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 交易對應的訂單 */
  order_billing_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "billing_transaction" */
export type Billing_Transaction_Variance_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 交易所使用的信用卡 id */
  credit_card_id?: InputMaybe<Order_By>;
  /** 目前有效對應的電子發票 einvoice_transaction_id */
  current_invoice_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 交易對應的訂單 */
  order_billing_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "billingtransactionstatus". All fields are combined with logical 'AND'. */
export type Billingtransactionstatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['billingtransactionstatus']['input']>;
  _gt?: InputMaybe<Scalars['billingtransactionstatus']['input']>;
  _gte?: InputMaybe<Scalars['billingtransactionstatus']['input']>;
  _in?: InputMaybe<Array<Scalars['billingtransactionstatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['billingtransactionstatus']['input']>;
  _lte?: InputMaybe<Scalars['billingtransactionstatus']['input']>;
  _neq?: InputMaybe<Scalars['billingtransactionstatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['billingtransactionstatus']['input']>>;
};

/** Boolean expression to compare columns of type "billingtransactiontype". All fields are combined with logical 'AND'. */
export type Billingtransactiontype_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['billingtransactiontype']['input']>;
  _gt?: InputMaybe<Scalars['billingtransactiontype']['input']>;
  _gte?: InputMaybe<Scalars['billingtransactiontype']['input']>;
  _in?: InputMaybe<Array<Scalars['billingtransactiontype']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['billingtransactiontype']['input']>;
  _lte?: InputMaybe<Scalars['billingtransactiontype']['input']>;
  _neq?: InputMaybe<Scalars['billingtransactiontype']['input']>;
  _nin?: InputMaybe<Array<Scalars['billingtransactiontype']['input']>>;
};

/** 綁定（約定）信用卡紀錄 */
export type Binding_Transaction = {
  __typename?: 'binding_transaction';
  /** 交易金額，新台幣整數 */
  amount: Scalars['bigint']['output'];
  /** 取消授權時間 */
  cancelled_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  credit_card?: Maybe<Credit_Card>;
  /** An array relationship */
  credit_cards: Array<Credit_Card>;
  /** An object relationship */
  customer: Customer;
  /** 觸發此綁定交易的使用者 */
  customer_id: Scalars['bigint']['output'];
  /** 藍新的錯誤碼 */
  error_code?: Maybe<Scalars['String']['output']>;
  /** Hash 過的信用卡安全碼 */
  hashed_cvc: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  /** 提供給藍新金流的交易編號 */
  merchant_order_no?: Maybe<Scalars['String']['output']>;
  /** TokenTerm generated by us, hash({customer.id:08d}.{card_number}.{exp}) */
  neweb_token_term: Scalars['String']['output'];
  /** 藍星產生的交易編號；TradeNo from neweb pay */
  neweb_trade_no?: Maybe<Scalars['String']['output']>;
  /** 狀態，如：INIT, AUTH_CANCEL_OK */
  status: Scalars['bindingtransactionstatus']['output'];
  /** 紀錄交易種類：P3D_CARD_BINDING, NON_P3D_CARD_BINDING */
  type: Scalars['bindingtransactiontype']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 綁定（約定）信用卡紀錄 */
export type Binding_TransactionCredit_CardsArgs = {
  distinct_on?: InputMaybe<Array<Credit_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Card_Order_By>>;
  where?: InputMaybe<Credit_Card_Bool_Exp>;
};

/** order by aggregate values of table "binding_transaction" */
export type Binding_Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Binding_Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Binding_Transaction_Max_Order_By>;
  min?: InputMaybe<Binding_Transaction_Min_Order_By>;
  stddev?: InputMaybe<Binding_Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Binding_Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Binding_Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Binding_Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Binding_Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Binding_Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Binding_Transaction_Variance_Order_By>;
};

/** order by avg() on columns of table "binding_transaction" */
export type Binding_Transaction_Avg_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 觸發此綁定交易的使用者 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "binding_transaction". All fields are combined with a logical 'AND'. */
export type Binding_Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Binding_Transaction_Bool_Exp>>;
  _not?: InputMaybe<Binding_Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Binding_Transaction_Bool_Exp>>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  cancelled_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  credit_card?: InputMaybe<Credit_Card_Bool_Exp>;
  credit_cards?: InputMaybe<Credit_Card_Bool_Exp>;
  customer?: InputMaybe<Customer_Bool_Exp>;
  customer_id?: InputMaybe<Bigint_Comparison_Exp>;
  error_code?: InputMaybe<String_Comparison_Exp>;
  hashed_cvc?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  merchant_order_no?: InputMaybe<String_Comparison_Exp>;
  neweb_token_term?: InputMaybe<String_Comparison_Exp>;
  neweb_trade_no?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Bindingtransactionstatus_Comparison_Exp>;
  type?: InputMaybe<Bindingtransactiontype_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "binding_transaction" */
export type Binding_Transaction_Max_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 取消授權時間 */
  cancelled_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 觸發此綁定交易的使用者 */
  customer_id?: InputMaybe<Order_By>;
  /** 藍新的錯誤碼 */
  error_code?: InputMaybe<Order_By>;
  /** Hash 過的信用卡安全碼 */
  hashed_cvc?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 提供給藍新金流的交易編號 */
  merchant_order_no?: InputMaybe<Order_By>;
  /** TokenTerm generated by us, hash({customer.id:08d}.{card_number}.{exp}) */
  neweb_token_term?: InputMaybe<Order_By>;
  /** 藍星產生的交易編號；TradeNo from neweb pay */
  neweb_trade_no?: InputMaybe<Order_By>;
  /** 狀態，如：INIT, AUTH_CANCEL_OK */
  status?: InputMaybe<Order_By>;
  /** 紀錄交易種類：P3D_CARD_BINDING, NON_P3D_CARD_BINDING */
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "binding_transaction" */
export type Binding_Transaction_Min_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 取消授權時間 */
  cancelled_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 觸發此綁定交易的使用者 */
  customer_id?: InputMaybe<Order_By>;
  /** 藍新的錯誤碼 */
  error_code?: InputMaybe<Order_By>;
  /** Hash 過的信用卡安全碼 */
  hashed_cvc?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 提供給藍新金流的交易編號 */
  merchant_order_no?: InputMaybe<Order_By>;
  /** TokenTerm generated by us, hash({customer.id:08d}.{card_number}.{exp}) */
  neweb_token_term?: InputMaybe<Order_By>;
  /** 藍星產生的交易編號；TradeNo from neweb pay */
  neweb_trade_no?: InputMaybe<Order_By>;
  /** 狀態，如：INIT, AUTH_CANCEL_OK */
  status?: InputMaybe<Order_By>;
  /** 紀錄交易種類：P3D_CARD_BINDING, NON_P3D_CARD_BINDING */
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "binding_transaction". */
export type Binding_Transaction_Order_By = {
  amount?: InputMaybe<Order_By>;
  cancelled_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  credit_card?: InputMaybe<Credit_Card_Order_By>;
  credit_cards_aggregate?: InputMaybe<Credit_Card_Aggregate_Order_By>;
  customer?: InputMaybe<Customer_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  error_code?: InputMaybe<Order_By>;
  hashed_cvc?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  merchant_order_no?: InputMaybe<Order_By>;
  neweb_token_term?: InputMaybe<Order_By>;
  neweb_trade_no?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "binding_transaction" */
export enum Binding_Transaction_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CancelledAt = 'cancelled_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  ErrorCode = 'error_code',
  /** column name */
  HashedCvc = 'hashed_cvc',
  /** column name */
  Id = 'id',
  /** column name */
  MerchantOrderNo = 'merchant_order_no',
  /** column name */
  NewebTokenTerm = 'neweb_token_term',
  /** column name */
  NewebTradeNo = 'neweb_trade_no',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** order by stddev() on columns of table "binding_transaction" */
export type Binding_Transaction_Stddev_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 觸發此綁定交易的使用者 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "binding_transaction" */
export type Binding_Transaction_Stddev_Pop_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 觸發此綁定交易的使用者 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "binding_transaction" */
export type Binding_Transaction_Stddev_Samp_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 觸發此綁定交易的使用者 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "binding_transaction" */
export type Binding_Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Binding_Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Binding_Transaction_Stream_Cursor_Value_Input = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Scalars['bigint']['input']>;
  /** 取消授權時間 */
  cancelled_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 觸發此綁定交易的使用者 */
  customer_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 藍新的錯誤碼 */
  error_code?: InputMaybe<Scalars['String']['input']>;
  /** Hash 過的信用卡安全碼 */
  hashed_cvc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 提供給藍新金流的交易編號 */
  merchant_order_no?: InputMaybe<Scalars['String']['input']>;
  /** TokenTerm generated by us, hash({customer.id:08d}.{card_number}.{exp}) */
  neweb_token_term?: InputMaybe<Scalars['String']['input']>;
  /** 藍星產生的交易編號；TradeNo from neweb pay */
  neweb_trade_no?: InputMaybe<Scalars['String']['input']>;
  /** 狀態，如：INIT, AUTH_CANCEL_OK */
  status?: InputMaybe<Scalars['bindingtransactionstatus']['input']>;
  /** 紀錄交易種類：P3D_CARD_BINDING, NON_P3D_CARD_BINDING */
  type?: InputMaybe<Scalars['bindingtransactiontype']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** order by sum() on columns of table "binding_transaction" */
export type Binding_Transaction_Sum_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 觸發此綁定交易的使用者 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "binding_transaction" */
export type Binding_Transaction_Var_Pop_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 觸發此綁定交易的使用者 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "binding_transaction" */
export type Binding_Transaction_Var_Samp_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 觸發此綁定交易的使用者 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "binding_transaction" */
export type Binding_Transaction_Variance_Order_By = {
  /** 交易金額，新台幣整數 */
  amount?: InputMaybe<Order_By>;
  /** 觸發此綁定交易的使用者 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bindingtransactionstatus". All fields are combined with logical 'AND'. */
export type Bindingtransactionstatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bindingtransactionstatus']['input']>;
  _gt?: InputMaybe<Scalars['bindingtransactionstatus']['input']>;
  _gte?: InputMaybe<Scalars['bindingtransactionstatus']['input']>;
  _in?: InputMaybe<Array<Scalars['bindingtransactionstatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bindingtransactionstatus']['input']>;
  _lte?: InputMaybe<Scalars['bindingtransactionstatus']['input']>;
  _neq?: InputMaybe<Scalars['bindingtransactionstatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['bindingtransactionstatus']['input']>>;
};

/** Boolean expression to compare columns of type "bindingtransactiontype". All fields are combined with logical 'AND'. */
export type Bindingtransactiontype_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bindingtransactiontype']['input']>;
  _gt?: InputMaybe<Scalars['bindingtransactiontype']['input']>;
  _gte?: InputMaybe<Scalars['bindingtransactiontype']['input']>;
  _in?: InputMaybe<Array<Scalars['bindingtransactiontype']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bindingtransactiontype']['input']>;
  _lte?: InputMaybe<Scalars['bindingtransactiontype']['input']>;
  _neq?: InputMaybe<Scalars['bindingtransactiontype']['input']>;
  _nin?: InputMaybe<Array<Scalars['bindingtransactiontype']['input']>>;
};

/** 車行行事曆 */
export type Calendar = {
  __typename?: 'calendar';
  created_at: Scalars['timestamptz']['output'];
  /** 從什麼日期開始 */
  from_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  period: Period;
  period_id: Scalars['bigint']['output'];
  /** 到什麼日期結束 */
  to_at: Scalars['timestamptz']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "calendar" */
export type Calendar_Aggregate = {
  __typename?: 'calendar_aggregate';
  aggregate?: Maybe<Calendar_Aggregate_Fields>;
  nodes: Array<Calendar>;
};

export type Calendar_Aggregate_Bool_Exp = {
  count?: InputMaybe<Calendar_Aggregate_Bool_Exp_Count>;
};

export type Calendar_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Calendar_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Calendar_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "calendar" */
export type Calendar_Aggregate_Fields = {
  __typename?: 'calendar_aggregate_fields';
  avg?: Maybe<Calendar_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Calendar_Max_Fields>;
  min?: Maybe<Calendar_Min_Fields>;
  stddev?: Maybe<Calendar_Stddev_Fields>;
  stddev_pop?: Maybe<Calendar_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Calendar_Stddev_Samp_Fields>;
  sum?: Maybe<Calendar_Sum_Fields>;
  var_pop?: Maybe<Calendar_Var_Pop_Fields>;
  var_samp?: Maybe<Calendar_Var_Samp_Fields>;
  variance?: Maybe<Calendar_Variance_Fields>;
};


/** aggregate fields of "calendar" */
export type Calendar_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Calendar_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "calendar" */
export type Calendar_Aggregate_Order_By = {
  avg?: InputMaybe<Calendar_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Calendar_Max_Order_By>;
  min?: InputMaybe<Calendar_Min_Order_By>;
  stddev?: InputMaybe<Calendar_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Calendar_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Calendar_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Calendar_Sum_Order_By>;
  var_pop?: InputMaybe<Calendar_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Calendar_Var_Samp_Order_By>;
  variance?: InputMaybe<Calendar_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Calendar_Avg_Fields = {
  __typename?: 'calendar_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  period_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "calendar" */
export type Calendar_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "calendar". All fields are combined with a logical 'AND'. */
export type Calendar_Bool_Exp = {
  _and?: InputMaybe<Array<Calendar_Bool_Exp>>;
  _not?: InputMaybe<Calendar_Bool_Exp>;
  _or?: InputMaybe<Array<Calendar_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  from_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  period?: InputMaybe<Period_Bool_Exp>;
  period_id?: InputMaybe<Bigint_Comparison_Exp>;
  to_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Calendar_Max_Fields = {
  __typename?: 'calendar_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 從什麼日期開始 */
  from_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  period_id?: Maybe<Scalars['bigint']['output']>;
  /** 到什麼日期結束 */
  to_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "calendar" */
export type Calendar_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 從什麼日期開始 */
  from_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
  /** 到什麼日期結束 */
  to_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Calendar_Min_Fields = {
  __typename?: 'calendar_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 從什麼日期開始 */
  from_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  period_id?: Maybe<Scalars['bigint']['output']>;
  /** 到什麼日期結束 */
  to_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "calendar" */
export type Calendar_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 從什麼日期開始 */
  from_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
  /** 到什麼日期結束 */
  to_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "calendar". */
export type Calendar_Order_By = {
  created_at?: InputMaybe<Order_By>;
  from_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  period?: InputMaybe<Period_Order_By>;
  period_id?: InputMaybe<Order_By>;
  to_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "calendar" */
export enum Calendar_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FromAt = 'from_at',
  /** column name */
  Id = 'id',
  /** column name */
  PeriodId = 'period_id',
  /** column name */
  ToAt = 'to_at',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Calendar_Stddev_Fields = {
  __typename?: 'calendar_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  period_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "calendar" */
export type Calendar_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Calendar_Stddev_Pop_Fields = {
  __typename?: 'calendar_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  period_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "calendar" */
export type Calendar_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Calendar_Stddev_Samp_Fields = {
  __typename?: 'calendar_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  period_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "calendar" */
export type Calendar_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "calendar" */
export type Calendar_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Calendar_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Calendar_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 從什麼日期開始 */
  from_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  period_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 到什麼日期結束 */
  to_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Calendar_Sum_Fields = {
  __typename?: 'calendar_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  period_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "calendar" */
export type Calendar_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Calendar_Var_Pop_Fields = {
  __typename?: 'calendar_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  period_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "calendar" */
export type Calendar_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Calendar_Var_Samp_Fields = {
  __typename?: 'calendar_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  period_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "calendar" */
export type Calendar_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Calendar_Variance_Fields = {
  __typename?: 'calendar_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  period_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "calendar" */
export type Calendar_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
};

/** 行銷活動主表 */
export type Campaign = {
  __typename?: 'campaign';
  /** An array relationship */
  coupons: Array<Coupon>;
  created_at: Scalars['timestamptz']['output'];
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 活動文案 */
  description: Scalars['String']['output'];
  /** An array relationship */
  discounts: Array<Discount>;
  /** An aggregate relationship */
  discounts_aggregate: Discount_Aggregate;
  /** 活動結束時間 */
  end_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 活動是否上架 */
  is_active: Scalars['Boolean']['output'];
  /** 活動名稱 */
  name: Scalars['String']['output'];
  /** An array relationship */
  order_discount_snapshots: Array<Order_Discount_Snapshot>;
  /** 活動開始時間 */
  start_at: Scalars['timestamptz']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<User>;
};


/** 行銷活動主表 */
export type CampaignCouponsArgs = {
  distinct_on?: InputMaybe<Array<Coupon_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coupon_Order_By>>;
  where?: InputMaybe<Coupon_Bool_Exp>;
};


/** 行銷活動主表 */
export type CampaignDiscountsArgs = {
  distinct_on?: InputMaybe<Array<Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Discount_Order_By>>;
  where?: InputMaybe<Discount_Bool_Exp>;
};


/** 行銷活動主表 */
export type CampaignDiscounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Discount_Order_By>>;
  where?: InputMaybe<Discount_Bool_Exp>;
};


/** 行銷活動主表 */
export type CampaignOrder_Discount_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Order_Discount_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Discount_Snapshot_Order_By>>;
  where?: InputMaybe<Order_Discount_Snapshot_Bool_Exp>;
};

/** aggregated selection of "campaign" */
export type Campaign_Aggregate = {
  __typename?: 'campaign_aggregate';
  aggregate?: Maybe<Campaign_Aggregate_Fields>;
  nodes: Array<Campaign>;
};

export type Campaign_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Campaign_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Campaign_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Campaign_Aggregate_Bool_Exp_Count>;
};

export type Campaign_Aggregate_Bool_Exp_Bool_And = {
  arguments: Campaign_Select_Column_Campaign_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Campaign_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Campaign_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Campaign_Select_Column_Campaign_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Campaign_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Campaign_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Campaign_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Campaign_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "campaign" */
export type Campaign_Aggregate_Fields = {
  __typename?: 'campaign_aggregate_fields';
  avg?: Maybe<Campaign_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Campaign_Max_Fields>;
  min?: Maybe<Campaign_Min_Fields>;
  stddev?: Maybe<Campaign_Stddev_Fields>;
  stddev_pop?: Maybe<Campaign_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaign_Stddev_Samp_Fields>;
  sum?: Maybe<Campaign_Sum_Fields>;
  var_pop?: Maybe<Campaign_Var_Pop_Fields>;
  var_samp?: Maybe<Campaign_Var_Samp_Fields>;
  variance?: Maybe<Campaign_Variance_Fields>;
};


/** aggregate fields of "campaign" */
export type Campaign_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Campaign_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "campaign" */
export type Campaign_Aggregate_Order_By = {
  avg?: InputMaybe<Campaign_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Campaign_Max_Order_By>;
  min?: InputMaybe<Campaign_Min_Order_By>;
  stddev?: InputMaybe<Campaign_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Campaign_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Campaign_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Campaign_Sum_Order_By>;
  var_pop?: InputMaybe<Campaign_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Campaign_Var_Samp_Order_By>;
  variance?: InputMaybe<Campaign_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Campaign_Avg_Fields = {
  __typename?: 'campaign_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "campaign" */
export type Campaign_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "campaign". All fields are combined with a logical 'AND'. */
export type Campaign_Bool_Exp = {
  _and?: InputMaybe<Array<Campaign_Bool_Exp>>;
  _not?: InputMaybe<Campaign_Bool_Exp>;
  _or?: InputMaybe<Array<Campaign_Bool_Exp>>;
  coupons?: InputMaybe<Coupon_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  discounts?: InputMaybe<Discount_Bool_Exp>;
  discounts_aggregate?: InputMaybe<Discount_Aggregate_Bool_Exp>;
  end_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order_discount_snapshots?: InputMaybe<Order_Discount_Snapshot_Bool_Exp>;
  start_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
};

/** aggregate max on columns */
export type Campaign_Max_Fields = {
  __typename?: 'campaign_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 活動文案 */
  description?: Maybe<Scalars['String']['output']>;
  /** 活動結束時間 */
  end_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 活動名稱 */
  name?: Maybe<Scalars['String']['output']>;
  /** 活動開始時間 */
  start_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "campaign" */
export type Campaign_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 活動文案 */
  description?: InputMaybe<Order_By>;
  /** 活動結束時間 */
  end_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 活動名稱 */
  name?: InputMaybe<Order_By>;
  /** 活動開始時間 */
  start_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Campaign_Min_Fields = {
  __typename?: 'campaign_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 活動文案 */
  description?: Maybe<Scalars['String']['output']>;
  /** 活動結束時間 */
  end_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 活動名稱 */
  name?: Maybe<Scalars['String']['output']>;
  /** 活動開始時間 */
  start_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "campaign" */
export type Campaign_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 活動文案 */
  description?: InputMaybe<Order_By>;
  /** 活動結束時間 */
  end_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 活動名稱 */
  name?: InputMaybe<Order_By>;
  /** 活動開始時間 */
  start_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "campaign". */
export type Campaign_Order_By = {
  coupons_aggregate?: InputMaybe<Coupon_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  discounts_aggregate?: InputMaybe<Discount_Aggregate_Order_By>;
  end_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_discount_snapshots_aggregate?: InputMaybe<Order_Discount_Snapshot_Aggregate_Order_By>;
  start_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
};

/** select columns of table "campaign" */
export enum Campaign_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndAt = 'end_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Name = 'name',
  /** column name */
  StartAt = 'start_at',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "campaign_aggregate_bool_exp_bool_and_arguments_columns" columns of table "campaign" */
export enum Campaign_Select_Column_Campaign_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsActive = 'is_active'
}

/** select "campaign_aggregate_bool_exp_bool_or_arguments_columns" columns of table "campaign" */
export enum Campaign_Select_Column_Campaign_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsActive = 'is_active'
}

/** aggregate stddev on columns */
export type Campaign_Stddev_Fields = {
  __typename?: 'campaign_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "campaign" */
export type Campaign_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Campaign_Stddev_Pop_Fields = {
  __typename?: 'campaign_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "campaign" */
export type Campaign_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Campaign_Stddev_Samp_Fields = {
  __typename?: 'campaign_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "campaign" */
export type Campaign_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "campaign" */
export type Campaign_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Campaign_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Campaign_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 活動文案 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 活動結束時間 */
  end_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 活動是否上架 */
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  /** 活動名稱 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 活動開始時間 */
  start_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Campaign_Sum_Fields = {
  __typename?: 'campaign_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "campaign" */
export type Campaign_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Campaign_Var_Pop_Fields = {
  __typename?: 'campaign_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "campaign" */
export type Campaign_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Campaign_Var_Samp_Fields = {
  __typename?: 'campaign_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "campaign" */
export type Campaign_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Campaign_Variance_Fields = {
  __typename?: 'campaign_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "campaign" */
export type Campaign_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "campaignchildtablename". All fields are combined with logical 'AND'. */
export type Campaignchildtablename_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['campaignchildtablename']['input']>;
  _gt?: InputMaybe<Scalars['campaignchildtablename']['input']>;
  _gte?: InputMaybe<Scalars['campaignchildtablename']['input']>;
  _in?: InputMaybe<Array<Scalars['campaignchildtablename']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['campaignchildtablename']['input']>;
  _lte?: InputMaybe<Scalars['campaignchildtablename']['input']>;
  _neq?: InputMaybe<Scalars['campaignchildtablename']['input']>;
  _nin?: InputMaybe<Array<Scalars['campaignchildtablename']['input']>>;
};

/** 認證單位，負責認證車行 */
export type Certificate_Authority = {
  __typename?: 'certificate_authority';
  /** An array relationship */
  customers: Array<Customer>;
  id: Scalars['bigint']['output'];
  /** An object relationship */
  organization: Organization;
  /** An object relationship */
  organizationByRootOrganizationId: Organization;
  /** An array relationship */
  rental_companies: Array<Rental_Company>;
  /** An aggregate relationship */
  rental_companies_aggregate: Rental_Company_Aggregate;
};


/** 認證單位，負責認證車行 */
export type Certificate_AuthorityCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


/** 認證單位，負責認證車行 */
export type Certificate_AuthorityRental_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Rental_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Company_Order_By>>;
  where?: InputMaybe<Rental_Company_Bool_Exp>;
};


/** 認證單位，負責認證車行 */
export type Certificate_AuthorityRental_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rental_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Company_Order_By>>;
  where?: InputMaybe<Rental_Company_Bool_Exp>;
};

/** aggregated selection of "certificate_authority" */
export type Certificate_Authority_Aggregate = {
  __typename?: 'certificate_authority_aggregate';
  aggregate?: Maybe<Certificate_Authority_Aggregate_Fields>;
  nodes: Array<Certificate_Authority>;
};

export type Certificate_Authority_Aggregate_Bool_Exp = {
  count?: InputMaybe<Certificate_Authority_Aggregate_Bool_Exp_Count>;
};

export type Certificate_Authority_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Certificate_Authority_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Certificate_Authority_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "certificate_authority" */
export type Certificate_Authority_Aggregate_Fields = {
  __typename?: 'certificate_authority_aggregate_fields';
  avg?: Maybe<Certificate_Authority_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Certificate_Authority_Max_Fields>;
  min?: Maybe<Certificate_Authority_Min_Fields>;
  stddev?: Maybe<Certificate_Authority_Stddev_Fields>;
  stddev_pop?: Maybe<Certificate_Authority_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Certificate_Authority_Stddev_Samp_Fields>;
  sum?: Maybe<Certificate_Authority_Sum_Fields>;
  var_pop?: Maybe<Certificate_Authority_Var_Pop_Fields>;
  var_samp?: Maybe<Certificate_Authority_Var_Samp_Fields>;
  variance?: Maybe<Certificate_Authority_Variance_Fields>;
};


/** aggregate fields of "certificate_authority" */
export type Certificate_Authority_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Certificate_Authority_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "certificate_authority" */
export type Certificate_Authority_Aggregate_Order_By = {
  avg?: InputMaybe<Certificate_Authority_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Certificate_Authority_Max_Order_By>;
  min?: InputMaybe<Certificate_Authority_Min_Order_By>;
  stddev?: InputMaybe<Certificate_Authority_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Certificate_Authority_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Certificate_Authority_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Certificate_Authority_Sum_Order_By>;
  var_pop?: InputMaybe<Certificate_Authority_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Certificate_Authority_Var_Samp_Order_By>;
  variance?: InputMaybe<Certificate_Authority_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Certificate_Authority_Avg_Fields = {
  __typename?: 'certificate_authority_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "certificate_authority" */
export type Certificate_Authority_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "certificate_authority". All fields are combined with a logical 'AND'. */
export type Certificate_Authority_Bool_Exp = {
  _and?: InputMaybe<Array<Certificate_Authority_Bool_Exp>>;
  _not?: InputMaybe<Certificate_Authority_Bool_Exp>;
  _or?: InputMaybe<Array<Certificate_Authority_Bool_Exp>>;
  customers?: InputMaybe<Customer_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organizationByRootOrganizationId?: InputMaybe<Organization_Bool_Exp>;
  rental_companies?: InputMaybe<Rental_Company_Bool_Exp>;
  rental_companies_aggregate?: InputMaybe<Rental_Company_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Certificate_Authority_Max_Fields = {
  __typename?: 'certificate_authority_max_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "certificate_authority" */
export type Certificate_Authority_Max_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Certificate_Authority_Min_Fields = {
  __typename?: 'certificate_authority_min_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "certificate_authority" */
export type Certificate_Authority_Min_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "certificate_authority". */
export type Certificate_Authority_Order_By = {
  customers_aggregate?: InputMaybe<Customer_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organizationByRootOrganizationId?: InputMaybe<Organization_Order_By>;
  rental_companies_aggregate?: InputMaybe<Rental_Company_Aggregate_Order_By>;
};

/** select columns of table "certificate_authority" */
export enum Certificate_Authority_Select_Column {
  /** column name */
  Id = 'id'
}

/** aggregate stddev on columns */
export type Certificate_Authority_Stddev_Fields = {
  __typename?: 'certificate_authority_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "certificate_authority" */
export type Certificate_Authority_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Certificate_Authority_Stddev_Pop_Fields = {
  __typename?: 'certificate_authority_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "certificate_authority" */
export type Certificate_Authority_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Certificate_Authority_Stddev_Samp_Fields = {
  __typename?: 'certificate_authority_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "certificate_authority" */
export type Certificate_Authority_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "certificate_authority" */
export type Certificate_Authority_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Certificate_Authority_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Certificate_Authority_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Certificate_Authority_Sum_Fields = {
  __typename?: 'certificate_authority_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "certificate_authority" */
export type Certificate_Authority_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Certificate_Authority_Var_Pop_Fields = {
  __typename?: 'certificate_authority_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "certificate_authority" */
export type Certificate_Authority_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Certificate_Authority_Var_Samp_Fields = {
  __typename?: 'certificate_authority_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "certificate_authority" */
export type Certificate_Authority_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Certificate_Authority_Variance_Fields = {
  __typename?: 'certificate_authority_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "certificate_authority" */
export type Certificate_Authority_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** 行銷活動子表 - 優惠券主表 */
export type Coupon = {
  __typename?: 'coupon';
  /** An object relationship */
  campaign: Campaign;
  /** 所屬的行銷活動 id */
  campaign_id: Scalars['bigint']['output'];
  /** An array relationship */
  coupon_inventories: Array<Coupon_Inventory>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 優惠券詳細規則文案 */
  detailed_description: Scalars['String']['output'];
  /** 有效期間設定，若 expiry_type 為 FROM_REDEMPTION，則需要設定此欄位。可用於表示天、小時等時間間隔。 */
  expiry_duration?: Maybe<Scalars['interval']['output']>;
  id: Scalars['bigint']['output'];
  /** 計算後的折扣金額的上限值 */
  max_value: Scalars['numeric']['output'];
  /** 折扣的計算方法，根據方法不同 value 欄位的意義也不同 */
  method: Scalars['discountmethod']['output'];
  /** 要套用折扣的目標費用，值為訂單費用類別 */
  target: Scalars['discounttarget']['output'];
  /** 折扣方法的相關數值，詳細定義請參考程式碼或文件 */
  value: Scalars['numeric']['output'];
};


/** 行銷活動子表 - 優惠券主表 */
export type CouponCoupon_InventoriesArgs = {
  distinct_on?: InputMaybe<Array<Coupon_Inventory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coupon_Inventory_Order_By>>;
  where?: InputMaybe<Coupon_Inventory_Bool_Exp>;
};

/** order by aggregate values of table "coupon" */
export type Coupon_Aggregate_Order_By = {
  avg?: InputMaybe<Coupon_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Coupon_Max_Order_By>;
  min?: InputMaybe<Coupon_Min_Order_By>;
  stddev?: InputMaybe<Coupon_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Coupon_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Coupon_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Coupon_Sum_Order_By>;
  var_pop?: InputMaybe<Coupon_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Coupon_Var_Samp_Order_By>;
  variance?: InputMaybe<Coupon_Variance_Order_By>;
};

/** order by avg() on columns of table "coupon" */
export type Coupon_Avg_Order_By = {
  /** 所屬的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 計算後的折扣金額的上限值 */
  max_value?: InputMaybe<Order_By>;
  /** 折扣方法的相關數值，詳細定義請參考程式碼或文件 */
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "coupon". All fields are combined with a logical 'AND'. */
export type Coupon_Bool_Exp = {
  _and?: InputMaybe<Array<Coupon_Bool_Exp>>;
  _not?: InputMaybe<Coupon_Bool_Exp>;
  _or?: InputMaybe<Array<Coupon_Bool_Exp>>;
  campaign?: InputMaybe<Campaign_Bool_Exp>;
  campaign_id?: InputMaybe<Bigint_Comparison_Exp>;
  coupon_inventories?: InputMaybe<Coupon_Inventory_Bool_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  detailed_description?: InputMaybe<String_Comparison_Exp>;
  expiry_duration?: InputMaybe<Interval_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  max_value?: InputMaybe<Numeric_Comparison_Exp>;
  method?: InputMaybe<Discountmethod_Comparison_Exp>;
  target?: InputMaybe<Discounttarget_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** 優惠券活動子表 - 管理優惠券的庫存，追踪總數量、已發行數量和剩餘數量等信息 */
export type Coupon_Inventory = {
  __typename?: 'coupon_inventory';
  /** 優惠券領取時間。雖然也可以用 coupon_customer_association 的 created_at 表示，但是為了方便查詢，還是加上此欄位並由程式押時間。 */
  claimed_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 優惠券領取代碼，此代碼可讓用戶領取優惠券，也可以直接領取+使用 */
  code: Scalars['String']['output'];
  /** An object relationship */
  coupon: Coupon;
  /** 關聯的 Coupon 主表 id */
  coupon_id: Scalars['bigint']['output'];
  /** An object relationship */
  customer?: Maybe<Customer>;
  /** 領取的 Customer 主表 id */
  customer_id?: Maybe<Scalars['bigint']['output']>;
  /** 優惠券有效結束時間, 若為空則表示與行銷活動期間一致 */
  end_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['bigint']['output'];
  /** An object relationship */
  order?: Maybe<Order>;
  /** 使用的 Order 主表 id */
  order_id?: Maybe<Scalars['bigint']['output']>;
  /** 使用時間 */
  redeemed_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 優惠券有效開始時間, 若為空則表示與行銷活動期間一致 */
  start_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 優惠券狀態 */
  status: Scalars['couponstatus']['output'];
  /** 作廢時間 */
  voided_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by aggregate values of table "coupon_inventory" */
export type Coupon_Inventory_Aggregate_Order_By = {
  avg?: InputMaybe<Coupon_Inventory_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Coupon_Inventory_Max_Order_By>;
  min?: InputMaybe<Coupon_Inventory_Min_Order_By>;
  stddev?: InputMaybe<Coupon_Inventory_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Coupon_Inventory_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Coupon_Inventory_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Coupon_Inventory_Sum_Order_By>;
  var_pop?: InputMaybe<Coupon_Inventory_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Coupon_Inventory_Var_Samp_Order_By>;
  variance?: InputMaybe<Coupon_Inventory_Variance_Order_By>;
};

/** order by avg() on columns of table "coupon_inventory" */
export type Coupon_Inventory_Avg_Order_By = {
  /** 關聯的 Coupon 主表 id */
  coupon_id?: InputMaybe<Order_By>;
  /** 領取的 Customer 主表 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 使用的 Order 主表 id */
  order_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "coupon_inventory". All fields are combined with a logical 'AND'. */
export type Coupon_Inventory_Bool_Exp = {
  _and?: InputMaybe<Array<Coupon_Inventory_Bool_Exp>>;
  _not?: InputMaybe<Coupon_Inventory_Bool_Exp>;
  _or?: InputMaybe<Array<Coupon_Inventory_Bool_Exp>>;
  claimed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  coupon?: InputMaybe<Coupon_Bool_Exp>;
  coupon_id?: InputMaybe<Bigint_Comparison_Exp>;
  customer?: InputMaybe<Customer_Bool_Exp>;
  customer_id?: InputMaybe<Bigint_Comparison_Exp>;
  end_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  order?: InputMaybe<Order_Bool_Exp>;
  order_id?: InputMaybe<Bigint_Comparison_Exp>;
  redeemed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  start_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  status?: InputMaybe<Couponstatus_Comparison_Exp>;
  voided_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "coupon_inventory" */
export type Coupon_Inventory_Max_Order_By = {
  /** 優惠券領取時間。雖然也可以用 coupon_customer_association 的 created_at 表示，但是為了方便查詢，還是加上此欄位並由程式押時間。 */
  claimed_at?: InputMaybe<Order_By>;
  /** 優惠券領取代碼，此代碼可讓用戶領取優惠券，也可以直接領取+使用 */
  code?: InputMaybe<Order_By>;
  /** 關聯的 Coupon 主表 id */
  coupon_id?: InputMaybe<Order_By>;
  /** 領取的 Customer 主表 id */
  customer_id?: InputMaybe<Order_By>;
  /** 優惠券有效結束時間, 若為空則表示與行銷活動期間一致 */
  end_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 使用的 Order 主表 id */
  order_id?: InputMaybe<Order_By>;
  /** 使用時間 */
  redeemed_at?: InputMaybe<Order_By>;
  /** 優惠券有效開始時間, 若為空則表示與行銷活動期間一致 */
  start_at?: InputMaybe<Order_By>;
  /** 優惠券狀態 */
  status?: InputMaybe<Order_By>;
  /** 作廢時間 */
  voided_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "coupon_inventory" */
export type Coupon_Inventory_Min_Order_By = {
  /** 優惠券領取時間。雖然也可以用 coupon_customer_association 的 created_at 表示，但是為了方便查詢，還是加上此欄位並由程式押時間。 */
  claimed_at?: InputMaybe<Order_By>;
  /** 優惠券領取代碼，此代碼可讓用戶領取優惠券，也可以直接領取+使用 */
  code?: InputMaybe<Order_By>;
  /** 關聯的 Coupon 主表 id */
  coupon_id?: InputMaybe<Order_By>;
  /** 領取的 Customer 主表 id */
  customer_id?: InputMaybe<Order_By>;
  /** 優惠券有效結束時間, 若為空則表示與行銷活動期間一致 */
  end_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 使用的 Order 主表 id */
  order_id?: InputMaybe<Order_By>;
  /** 使用時間 */
  redeemed_at?: InputMaybe<Order_By>;
  /** 優惠券有效開始時間, 若為空則表示與行銷活動期間一致 */
  start_at?: InputMaybe<Order_By>;
  /** 優惠券狀態 */
  status?: InputMaybe<Order_By>;
  /** 作廢時間 */
  voided_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "coupon_inventory". */
export type Coupon_Inventory_Order_By = {
  claimed_at?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  coupon?: InputMaybe<Coupon_Order_By>;
  coupon_id?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customer_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  end_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_Order_By>;
  order_id?: InputMaybe<Order_By>;
  redeemed_at?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voided_at?: InputMaybe<Order_By>;
};

/** select columns of table "coupon_inventory" */
export enum Coupon_Inventory_Select_Column {
  /** column name */
  ClaimedAt = 'claimed_at',
  /** column name */
  Code = 'code',
  /** column name */
  CouponId = 'coupon_id',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  EndAt = 'end_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  RedeemedAt = 'redeemed_at',
  /** column name */
  StartAt = 'start_at',
  /** column name */
  Status = 'status',
  /** column name */
  VoidedAt = 'voided_at'
}

/** order by stddev() on columns of table "coupon_inventory" */
export type Coupon_Inventory_Stddev_Order_By = {
  /** 關聯的 Coupon 主表 id */
  coupon_id?: InputMaybe<Order_By>;
  /** 領取的 Customer 主表 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 使用的 Order 主表 id */
  order_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "coupon_inventory" */
export type Coupon_Inventory_Stddev_Pop_Order_By = {
  /** 關聯的 Coupon 主表 id */
  coupon_id?: InputMaybe<Order_By>;
  /** 領取的 Customer 主表 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 使用的 Order 主表 id */
  order_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "coupon_inventory" */
export type Coupon_Inventory_Stddev_Samp_Order_By = {
  /** 關聯的 Coupon 主表 id */
  coupon_id?: InputMaybe<Order_By>;
  /** 領取的 Customer 主表 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 使用的 Order 主表 id */
  order_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "coupon_inventory" */
export type Coupon_Inventory_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Coupon_Inventory_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Coupon_Inventory_Stream_Cursor_Value_Input = {
  /** 優惠券領取時間。雖然也可以用 coupon_customer_association 的 created_at 表示，但是為了方便查詢，還是加上此欄位並由程式押時間。 */
  claimed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 優惠券領取代碼，此代碼可讓用戶領取優惠券，也可以直接領取+使用 */
  code?: InputMaybe<Scalars['String']['input']>;
  /** 關聯的 Coupon 主表 id */
  coupon_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 領取的 Customer 主表 id */
  customer_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 優惠券有效結束時間, 若為空則表示與行銷活動期間一致 */
  end_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 使用的 Order 主表 id */
  order_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 使用時間 */
  redeemed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 優惠券有效開始時間, 若為空則表示與行銷活動期間一致 */
  start_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 優惠券狀態 */
  status?: InputMaybe<Scalars['couponstatus']['input']>;
  /** 作廢時間 */
  voided_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** order by sum() on columns of table "coupon_inventory" */
export type Coupon_Inventory_Sum_Order_By = {
  /** 關聯的 Coupon 主表 id */
  coupon_id?: InputMaybe<Order_By>;
  /** 領取的 Customer 主表 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 使用的 Order 主表 id */
  order_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "coupon_inventory" */
export type Coupon_Inventory_Var_Pop_Order_By = {
  /** 關聯的 Coupon 主表 id */
  coupon_id?: InputMaybe<Order_By>;
  /** 領取的 Customer 主表 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 使用的 Order 主表 id */
  order_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "coupon_inventory" */
export type Coupon_Inventory_Var_Samp_Order_By = {
  /** 關聯的 Coupon 主表 id */
  coupon_id?: InputMaybe<Order_By>;
  /** 領取的 Customer 主表 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 使用的 Order 主表 id */
  order_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "coupon_inventory" */
export type Coupon_Inventory_Variance_Order_By = {
  /** 關聯的 Coupon 主表 id */
  coupon_id?: InputMaybe<Order_By>;
  /** 領取的 Customer 主表 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 使用的 Order 主表 id */
  order_id?: InputMaybe<Order_By>;
};

/** order by max() on columns of table "coupon" */
export type Coupon_Max_Order_By = {
  /** 所屬的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 優惠券詳細規則文案 */
  detailed_description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 計算後的折扣金額的上限值 */
  max_value?: InputMaybe<Order_By>;
  /** 折扣的計算方法，根據方法不同 value 欄位的意義也不同 */
  method?: InputMaybe<Order_By>;
  /** 要套用折扣的目標費用，值為訂單費用類別 */
  target?: InputMaybe<Order_By>;
  /** 折扣方法的相關數值，詳細定義請參考程式碼或文件 */
  value?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "coupon" */
export type Coupon_Min_Order_By = {
  /** 所屬的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 優惠券詳細規則文案 */
  detailed_description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 計算後的折扣金額的上限值 */
  max_value?: InputMaybe<Order_By>;
  /** 折扣的計算方法，根據方法不同 value 欄位的意義也不同 */
  method?: InputMaybe<Order_By>;
  /** 要套用折扣的目標費用，值為訂單費用類別 */
  target?: InputMaybe<Order_By>;
  /** 折扣方法的相關數值，詳細定義請參考程式碼或文件 */
  value?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "coupon". */
export type Coupon_Order_By = {
  campaign?: InputMaybe<Campaign_Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  coupon_inventories_aggregate?: InputMaybe<Coupon_Inventory_Aggregate_Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  detailed_description?: InputMaybe<Order_By>;
  expiry_duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  method?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "coupon" */
export enum Coupon_Select_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DetailedDescription = 'detailed_description',
  /** column name */
  ExpiryDuration = 'expiry_duration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxValue = 'max_value',
  /** column name */
  Method = 'method',
  /** column name */
  Target = 'target',
  /** column name */
  Value = 'value'
}

/** order by stddev() on columns of table "coupon" */
export type Coupon_Stddev_Order_By = {
  /** 所屬的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 計算後的折扣金額的上限值 */
  max_value?: InputMaybe<Order_By>;
  /** 折扣方法的相關數值，詳細定義請參考程式碼或文件 */
  value?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "coupon" */
export type Coupon_Stddev_Pop_Order_By = {
  /** 所屬的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 計算後的折扣金額的上限值 */
  max_value?: InputMaybe<Order_By>;
  /** 折扣方法的相關數值，詳細定義請參考程式碼或文件 */
  value?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "coupon" */
export type Coupon_Stddev_Samp_Order_By = {
  /** 所屬的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 計算後的折扣金額的上限值 */
  max_value?: InputMaybe<Order_By>;
  /** 折扣方法的相關數值，詳細定義請參考程式碼或文件 */
  value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "coupon" */
export type Coupon_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Coupon_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Coupon_Stream_Cursor_Value_Input = {
  /** 所屬的行銷活動 id */
  campaign_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 優惠券詳細規則文案 */
  detailed_description?: InputMaybe<Scalars['String']['input']>;
  /** 有效期間設定，若 expiry_type 為 FROM_REDEMPTION，則需要設定此欄位。可用於表示天、小時等時間間隔。 */
  expiry_duration?: InputMaybe<Scalars['interval']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 計算後的折扣金額的上限值 */
  max_value?: InputMaybe<Scalars['numeric']['input']>;
  /** 折扣的計算方法，根據方法不同 value 欄位的意義也不同 */
  method?: InputMaybe<Scalars['discountmethod']['input']>;
  /** 要套用折扣的目標費用，值為訂單費用類別 */
  target?: InputMaybe<Scalars['discounttarget']['input']>;
  /** 折扣方法的相關數值，詳細定義請參考程式碼或文件 */
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** order by sum() on columns of table "coupon" */
export type Coupon_Sum_Order_By = {
  /** 所屬的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 計算後的折扣金額的上限值 */
  max_value?: InputMaybe<Order_By>;
  /** 折扣方法的相關數值，詳細定義請參考程式碼或文件 */
  value?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "coupon" */
export type Coupon_Var_Pop_Order_By = {
  /** 所屬的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 計算後的折扣金額的上限值 */
  max_value?: InputMaybe<Order_By>;
  /** 折扣方法的相關數值，詳細定義請參考程式碼或文件 */
  value?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "coupon" */
export type Coupon_Var_Samp_Order_By = {
  /** 所屬的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 計算後的折扣金額的上限值 */
  max_value?: InputMaybe<Order_By>;
  /** 折扣方法的相關數值，詳細定義請參考程式碼或文件 */
  value?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "coupon" */
export type Coupon_Variance_Order_By = {
  /** 所屬的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 計算後的折扣金額的上限值 */
  max_value?: InputMaybe<Order_By>;
  /** 折扣方法的相關數值，詳細定義請參考程式碼或文件 */
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "couponstatus". All fields are combined with logical 'AND'. */
export type Couponstatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['couponstatus']['input']>;
  _gt?: InputMaybe<Scalars['couponstatus']['input']>;
  _gte?: InputMaybe<Scalars['couponstatus']['input']>;
  _in?: InputMaybe<Array<Scalars['couponstatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['couponstatus']['input']>;
  _lte?: InputMaybe<Scalars['couponstatus']['input']>;
  _neq?: InputMaybe<Scalars['couponstatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['couponstatus']['input']>>;
};

/** 信用卡 */
export type Credit_Card = {
  __typename?: 'credit_card';
  /** An array relationship */
  billing_transactions: Array<Billing_Transaction>;
  /** An aggregate relationship */
  billing_transactions_aggregate: Billing_Transaction_Aggregate;
  /** An object relationship */
  binding_transaction: Binding_Transaction;
  /** 綁定此卡的綁定交易 */
  binding_transaction_id: Scalars['bigint']['output'];
  /** 加密過的卡號前六碼 */
  card_no_bin: Scalars['String']['output'];
  /** 卡號後四碼 */
  card_no_tail4: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  customer?: Maybe<Customer>;
  customer_id?: Maybe<Scalars['bigint']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 信用卡過期日期 yymm */
  exp: Scalars['String']['output'];
  /** 信用卡有效日期（TokenLife from 藍新） */
  expiration_on?: Maybe<Scalars['date']['output']>;
  id: Scalars['bigint']['output'];
  /** TokenTerm generated by us, hash({customer.id:08d}.{card_number}.{exp}) */
  neweb_token_term: Scalars['String']['output'];
  /** TokenValue from neweb pay, encrypted */
  neweb_token_value: Scalars['String']['output'];
  /** 該張信用卡狀態 */
  status: Scalars['creditcardstatus']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 信用卡 */
export type Credit_CardBilling_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Transaction_Order_By>>;
  where?: InputMaybe<Billing_Transaction_Bool_Exp>;
};


/** 信用卡 */
export type Credit_CardBilling_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Transaction_Order_By>>;
  where?: InputMaybe<Billing_Transaction_Bool_Exp>;
};

/** order by aggregate values of table "credit_card" */
export type Credit_Card_Aggregate_Order_By = {
  avg?: InputMaybe<Credit_Card_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Credit_Card_Max_Order_By>;
  min?: InputMaybe<Credit_Card_Min_Order_By>;
  stddev?: InputMaybe<Credit_Card_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Credit_Card_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Credit_Card_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Credit_Card_Sum_Order_By>;
  var_pop?: InputMaybe<Credit_Card_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Credit_Card_Var_Samp_Order_By>;
  variance?: InputMaybe<Credit_Card_Variance_Order_By>;
};

/** order by avg() on columns of table "credit_card" */
export type Credit_Card_Avg_Order_By = {
  /** 綁定此卡的綁定交易 */
  binding_transaction_id?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "credit_card". All fields are combined with a logical 'AND'. */
export type Credit_Card_Bool_Exp = {
  _and?: InputMaybe<Array<Credit_Card_Bool_Exp>>;
  _not?: InputMaybe<Credit_Card_Bool_Exp>;
  _or?: InputMaybe<Array<Credit_Card_Bool_Exp>>;
  billing_transactions?: InputMaybe<Billing_Transaction_Bool_Exp>;
  billing_transactions_aggregate?: InputMaybe<Billing_Transaction_Aggregate_Bool_Exp>;
  binding_transaction?: InputMaybe<Binding_Transaction_Bool_Exp>;
  binding_transaction_id?: InputMaybe<Bigint_Comparison_Exp>;
  card_no_bin?: InputMaybe<String_Comparison_Exp>;
  card_no_tail4?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer?: InputMaybe<Customer_Bool_Exp>;
  customer_id?: InputMaybe<Bigint_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  exp?: InputMaybe<String_Comparison_Exp>;
  expiration_on?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  neweb_token_term?: InputMaybe<String_Comparison_Exp>;
  neweb_token_value?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Creditcardstatus_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "credit_card" */
export type Credit_Card_Max_Order_By = {
  /** 綁定此卡的綁定交易 */
  binding_transaction_id?: InputMaybe<Order_By>;
  /** 加密過的卡號前六碼 */
  card_no_bin?: InputMaybe<Order_By>;
  /** 卡號後四碼 */
  card_no_tail4?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 信用卡過期日期 yymm */
  exp?: InputMaybe<Order_By>;
  /** 信用卡有效日期（TokenLife from 藍新） */
  expiration_on?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** TokenTerm generated by us, hash({customer.id:08d}.{card_number}.{exp}) */
  neweb_token_term?: InputMaybe<Order_By>;
  /** TokenValue from neweb pay, encrypted */
  neweb_token_value?: InputMaybe<Order_By>;
  /** 該張信用卡狀態 */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "credit_card" */
export type Credit_Card_Min_Order_By = {
  /** 綁定此卡的綁定交易 */
  binding_transaction_id?: InputMaybe<Order_By>;
  /** 加密過的卡號前六碼 */
  card_no_bin?: InputMaybe<Order_By>;
  /** 卡號後四碼 */
  card_no_tail4?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 信用卡過期日期 yymm */
  exp?: InputMaybe<Order_By>;
  /** 信用卡有效日期（TokenLife from 藍新） */
  expiration_on?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** TokenTerm generated by us, hash({customer.id:08d}.{card_number}.{exp}) */
  neweb_token_term?: InputMaybe<Order_By>;
  /** TokenValue from neweb pay, encrypted */
  neweb_token_value?: InputMaybe<Order_By>;
  /** 該張信用卡狀態 */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "credit_card". */
export type Credit_Card_Order_By = {
  billing_transactions_aggregate?: InputMaybe<Billing_Transaction_Aggregate_Order_By>;
  binding_transaction?: InputMaybe<Binding_Transaction_Order_By>;
  binding_transaction_id?: InputMaybe<Order_By>;
  card_no_bin?: InputMaybe<Order_By>;
  card_no_tail4?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customer_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  exp?: InputMaybe<Order_By>;
  expiration_on?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  neweb_token_term?: InputMaybe<Order_By>;
  neweb_token_value?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "credit_card" */
export enum Credit_Card_Select_Column {
  /** column name */
  BindingTransactionId = 'binding_transaction_id',
  /** column name */
  CardNoBin = 'card_no_bin',
  /** column name */
  CardNoTail4 = 'card_no_tail4',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Exp = 'exp',
  /** column name */
  ExpirationOn = 'expiration_on',
  /** column name */
  Id = 'id',
  /** column name */
  NewebTokenTerm = 'neweb_token_term',
  /** column name */
  NewebTokenValue = 'neweb_token_value',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** order by stddev() on columns of table "credit_card" */
export type Credit_Card_Stddev_Order_By = {
  /** 綁定此卡的綁定交易 */
  binding_transaction_id?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "credit_card" */
export type Credit_Card_Stddev_Pop_Order_By = {
  /** 綁定此卡的綁定交易 */
  binding_transaction_id?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "credit_card" */
export type Credit_Card_Stddev_Samp_Order_By = {
  /** 綁定此卡的綁定交易 */
  binding_transaction_id?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "credit_card" */
export type Credit_Card_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Credit_Card_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Credit_Card_Stream_Cursor_Value_Input = {
  /** 綁定此卡的綁定交易 */
  binding_transaction_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 加密過的卡號前六碼 */
  card_no_bin?: InputMaybe<Scalars['String']['input']>;
  /** 卡號後四碼 */
  card_no_tail4?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  customer_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 信用卡過期日期 yymm */
  exp?: InputMaybe<Scalars['String']['input']>;
  /** 信用卡有效日期（TokenLife from 藍新） */
  expiration_on?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** TokenTerm generated by us, hash({customer.id:08d}.{card_number}.{exp}) */
  neweb_token_term?: InputMaybe<Scalars['String']['input']>;
  /** TokenValue from neweb pay, encrypted */
  neweb_token_value?: InputMaybe<Scalars['String']['input']>;
  /** 該張信用卡狀態 */
  status?: InputMaybe<Scalars['creditcardstatus']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** order by sum() on columns of table "credit_card" */
export type Credit_Card_Sum_Order_By = {
  /** 綁定此卡的綁定交易 */
  binding_transaction_id?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "credit_card" */
export type Credit_Card_Var_Pop_Order_By = {
  /** 綁定此卡的綁定交易 */
  binding_transaction_id?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "credit_card" */
export type Credit_Card_Var_Samp_Order_By = {
  /** 綁定此卡的綁定交易 */
  binding_transaction_id?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "credit_card" */
export type Credit_Card_Variance_Order_By = {
  /** 綁定此卡的綁定交易 */
  binding_transaction_id?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "creditcardstatus". All fields are combined with logical 'AND'. */
export type Creditcardstatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['creditcardstatus']['input']>;
  _gt?: InputMaybe<Scalars['creditcardstatus']['input']>;
  _gte?: InputMaybe<Scalars['creditcardstatus']['input']>;
  _in?: InputMaybe<Array<Scalars['creditcardstatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['creditcardstatus']['input']>;
  _lte?: InputMaybe<Scalars['creditcardstatus']['input']>;
  _neq?: InputMaybe<Scalars['creditcardstatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['creditcardstatus']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** 顧客。id=1 的顧客為測試顧客，提供給 apple 測試用。 */
export type Customer = {
  __typename?: 'customer';
  /** 客服審核時間 */
  admin_reviewed_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  binding_transactions: Array<Binding_Transaction>;
  /** 出生日期 */
  birthday?: Maybe<Scalars['date']['output']>;
  /** An object relationship */
  certificate_authority: Certificate_Authority;
  certificate_authority_id: Scalars['bigint']['output'];
  /** An array relationship */
  coupon_inventories: Array<Coupon_Inventory>;
  /** An array relationship */
  credit_cards: Array<Credit_Card>;
  /** An array relationship */
  customer_foreign_data: Array<Customer_Foreign_Data>;
  /** An object relationship */
  customer_in_blocked_list?: Maybe<Customer_In_Blocked_List>;
  /** An array relationship */
  customer_levels: Array<Customer_Level>;
  /** An aggregate relationship */
  customer_levels_aggregate: Customer_Level_Aggregate;
  /** An array relationship */
  customer_service_logs: Array<Customer_Service_Log>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 駕照反面 Google Cloud Storage 儲存位址 */
  driving_license_back_photo_path?: Maybe<Scalars['String']['output']>;
  /** 駕照正面 Google Cloud Storage 儲存位址 */
  driving_license_front_photo_path?: Maybe<Scalars['String']['output']>;
  /** 駕照審核狀態 */
  driving_license_verified_status: Scalars['approvalstatus']['output'];
  /** 信箱 */
  email?: Maybe<Scalars['String']['output']>;
  /** 信箱是否通過驗證 */
  email_is_verified: Scalars['Boolean']['output'];
  id: Scalars['bigint']['output'];
  /** 身分證照片反面 Google Cloud Storage 儲存位址 */
  identity_card_back_photo_path?: Maybe<Scalars['String']['output']>;
  /** 身分證照片正面 Google Cloud Storage 儲存位址 */
  identity_card_front_photo_path?: Maybe<Scalars['String']['output']>;
  /** 身分證審核狀態 */
  identity_card_verified_status: Scalars['approvalstatus']['output'];
  /** 身分證字號 */
  identity_number?: Maybe<Scalars['String']['output']>;
  /** 會員註冊推薦碼 MGM(Member Get Member) */
  mgm?: Maybe<Scalars['String']['output']>;
  /** 手機號碼，format: 09XXXXXXXX */
  mobile_phone_number: Scalars['String']['output'];
  /** 手機號碼是否通過驗證 */
  mobile_phone_number_is_verified: Scalars['Boolean']['output'];
  /** 顧客暱稱 (舊版預設值同顧客姓名) */
  nickname?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate;
  /** 顧客更新個人資料時間 */
  profile_updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 居住地址 */
  residential_address?: Maybe<Scalars['String']['output']>;
  /** 居住行政區 */
  residential_area?: Maybe<Scalars['String']['output']>;
  /** 居住縣市 */
  residential_city?: Maybe<Scalars['String']['output']>;
  role_id: Scalars['bigint']['output'];
  /** 自拍照 Google Cloud Storage 儲存位址 */
  selfie_path?: Maybe<Scalars['String']['output']>;
  /** 自拍照審核狀態 */
  selfie_verified_status: Scalars['approvalstatus']['output'];
  /** 註冊完成時間；null 代表未完成註冊步驟 */
  sign_up_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 簽名檔 Google Cloud Storage 儲存位址 */
  signature_photo_path?: Maybe<Scalars['String']['output']>;
  /** 簽名檔審核狀態 */
  signature_verified_status: Scalars['approvalstatus']['output'];
  /** An object relationship */
  user: User;
};


/** 顧客。id=1 的顧客為測試顧客，提供給 apple 測試用。 */
export type CustomerBinding_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Binding_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Binding_Transaction_Order_By>>;
  where?: InputMaybe<Binding_Transaction_Bool_Exp>;
};


/** 顧客。id=1 的顧客為測試顧客，提供給 apple 測試用。 */
export type CustomerCoupon_InventoriesArgs = {
  distinct_on?: InputMaybe<Array<Coupon_Inventory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coupon_Inventory_Order_By>>;
  where?: InputMaybe<Coupon_Inventory_Bool_Exp>;
};


/** 顧客。id=1 的顧客為測試顧客，提供給 apple 測試用。 */
export type CustomerCredit_CardsArgs = {
  distinct_on?: InputMaybe<Array<Credit_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Card_Order_By>>;
  where?: InputMaybe<Credit_Card_Bool_Exp>;
};


/** 顧客。id=1 的顧客為測試顧客，提供給 apple 測試用。 */
export type CustomerCustomer_Foreign_DataArgs = {
  distinct_on?: InputMaybe<Array<Customer_Foreign_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Foreign_Data_Order_By>>;
  where?: InputMaybe<Customer_Foreign_Data_Bool_Exp>;
};


/** 顧客。id=1 的顧客為測試顧客，提供給 apple 測試用。 */
export type CustomerCustomer_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Customer_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Level_Order_By>>;
  where?: InputMaybe<Customer_Level_Bool_Exp>;
};


/** 顧客。id=1 的顧客為測試顧客，提供給 apple 測試用。 */
export type CustomerCustomer_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Level_Order_By>>;
  where?: InputMaybe<Customer_Level_Bool_Exp>;
};


/** 顧客。id=1 的顧客為測試顧客，提供給 apple 測試用。 */
export type CustomerCustomer_Service_LogsArgs = {
  distinct_on?: InputMaybe<Array<Customer_Service_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Service_Log_Order_By>>;
  where?: InputMaybe<Customer_Service_Log_Bool_Exp>;
};


/** 顧客。id=1 的顧客為測試顧客，提供給 apple 測試用。 */
export type CustomerOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** 顧客。id=1 的顧客為測試顧客，提供給 apple 測試用。 */
export type CustomerOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};

/** order by aggregate values of table "customer" */
export type Customer_Aggregate_Order_By = {
  avg?: InputMaybe<Customer_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Customer_Max_Order_By>;
  min?: InputMaybe<Customer_Min_Order_By>;
  stddev?: InputMaybe<Customer_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Customer_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Customer_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Customer_Sum_Order_By>;
  var_pop?: InputMaybe<Customer_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Customer_Var_Samp_Order_By>;
  variance?: InputMaybe<Customer_Variance_Order_By>;
};

/** order by avg() on columns of table "customer" */
export type Customer_Avg_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "customer". All fields are combined with a logical 'AND'. */
export type Customer_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Bool_Exp>>;
  _not?: InputMaybe<Customer_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_Bool_Exp>>;
  admin_reviewed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  binding_transactions?: InputMaybe<Binding_Transaction_Bool_Exp>;
  birthday?: InputMaybe<Date_Comparison_Exp>;
  certificate_authority?: InputMaybe<Certificate_Authority_Bool_Exp>;
  certificate_authority_id?: InputMaybe<Bigint_Comparison_Exp>;
  coupon_inventories?: InputMaybe<Coupon_Inventory_Bool_Exp>;
  credit_cards?: InputMaybe<Credit_Card_Bool_Exp>;
  customer_foreign_data?: InputMaybe<Customer_Foreign_Data_Bool_Exp>;
  customer_in_blocked_list?: InputMaybe<Customer_In_Blocked_List_Bool_Exp>;
  customer_levels?: InputMaybe<Customer_Level_Bool_Exp>;
  customer_levels_aggregate?: InputMaybe<Customer_Level_Aggregate_Bool_Exp>;
  customer_service_logs?: InputMaybe<Customer_Service_Log_Bool_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  driving_license_back_photo_path?: InputMaybe<String_Comparison_Exp>;
  driving_license_front_photo_path?: InputMaybe<String_Comparison_Exp>;
  driving_license_verified_status?: InputMaybe<Approvalstatus_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_is_verified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  identity_card_back_photo_path?: InputMaybe<String_Comparison_Exp>;
  identity_card_front_photo_path?: InputMaybe<String_Comparison_Exp>;
  identity_card_verified_status?: InputMaybe<Approvalstatus_Comparison_Exp>;
  identity_number?: InputMaybe<String_Comparison_Exp>;
  mgm?: InputMaybe<String_Comparison_Exp>;
  mobile_phone_number?: InputMaybe<String_Comparison_Exp>;
  mobile_phone_number_is_verified?: InputMaybe<Boolean_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Order_Bool_Exp>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Bool_Exp>;
  profile_updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  residential_address?: InputMaybe<String_Comparison_Exp>;
  residential_area?: InputMaybe<String_Comparison_Exp>;
  residential_city?: InputMaybe<String_Comparison_Exp>;
  role_id?: InputMaybe<Bigint_Comparison_Exp>;
  selfie_path?: InputMaybe<String_Comparison_Exp>;
  selfie_verified_status?: InputMaybe<Approvalstatus_Comparison_Exp>;
  sign_up_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  signature_photo_path?: InputMaybe<String_Comparison_Exp>;
  signature_verified_status?: InputMaybe<Approvalstatus_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
};

/** 顧客的外籍資料 */
export type Customer_Foreign_Data = {
  __typename?: 'customer_foreign_data';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  customer: Customer;
  /** 外籍資料所屬顧客 */
  customer_id: Scalars['bigint']['output'];
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['bigint']['output'];
  /** 護照號碼 */
  passport_number?: Maybe<Scalars['String']['output']>;
  /** 居留證號碼 */
  resident_certificate_number?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** order by aggregate values of table "customer_foreign_data" */
export type Customer_Foreign_Data_Aggregate_Order_By = {
  avg?: InputMaybe<Customer_Foreign_Data_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Customer_Foreign_Data_Max_Order_By>;
  min?: InputMaybe<Customer_Foreign_Data_Min_Order_By>;
  stddev?: InputMaybe<Customer_Foreign_Data_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Customer_Foreign_Data_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Customer_Foreign_Data_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Customer_Foreign_Data_Sum_Order_By>;
  var_pop?: InputMaybe<Customer_Foreign_Data_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Customer_Foreign_Data_Var_Samp_Order_By>;
  variance?: InputMaybe<Customer_Foreign_Data_Variance_Order_By>;
};

/** order by avg() on columns of table "customer_foreign_data" */
export type Customer_Foreign_Data_Avg_Order_By = {
  /** 外籍資料所屬顧客 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "customer_foreign_data". All fields are combined with a logical 'AND'. */
export type Customer_Foreign_Data_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Foreign_Data_Bool_Exp>>;
  _not?: InputMaybe<Customer_Foreign_Data_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_Foreign_Data_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer?: InputMaybe<Customer_Bool_Exp>;
  customer_id?: InputMaybe<Bigint_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  passport_number?: InputMaybe<String_Comparison_Exp>;
  resident_certificate_number?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "customer_foreign_data" */
export type Customer_Foreign_Data_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 外籍資料所屬顧客 */
  customer_id?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 護照號碼 */
  passport_number?: InputMaybe<Order_By>;
  /** 居留證號碼 */
  resident_certificate_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "customer_foreign_data" */
export type Customer_Foreign_Data_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 外籍資料所屬顧客 */
  customer_id?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 護照號碼 */
  passport_number?: InputMaybe<Order_By>;
  /** 居留證號碼 */
  resident_certificate_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "customer_foreign_data". */
export type Customer_Foreign_Data_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customer_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  passport_number?: InputMaybe<Order_By>;
  resident_certificate_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "customer_foreign_data" */
export enum Customer_Foreign_Data_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  PassportNumber = 'passport_number',
  /** column name */
  ResidentCertificateNumber = 'resident_certificate_number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** order by stddev() on columns of table "customer_foreign_data" */
export type Customer_Foreign_Data_Stddev_Order_By = {
  /** 外籍資料所屬顧客 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "customer_foreign_data" */
export type Customer_Foreign_Data_Stddev_Pop_Order_By = {
  /** 外籍資料所屬顧客 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "customer_foreign_data" */
export type Customer_Foreign_Data_Stddev_Samp_Order_By = {
  /** 外籍資料所屬顧客 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "customer_foreign_data" */
export type Customer_Foreign_Data_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_Foreign_Data_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customer_Foreign_Data_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 外籍資料所屬顧客 */
  customer_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 護照號碼 */
  passport_number?: InputMaybe<Scalars['String']['input']>;
  /** 居留證號碼 */
  resident_certificate_number?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** order by sum() on columns of table "customer_foreign_data" */
export type Customer_Foreign_Data_Sum_Order_By = {
  /** 外籍資料所屬顧客 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "customer_foreign_data" */
export type Customer_Foreign_Data_Var_Pop_Order_By = {
  /** 外籍資料所屬顧客 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "customer_foreign_data" */
export type Customer_Foreign_Data_Var_Samp_Order_By = {
  /** 外籍資料所屬顧客 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "customer_foreign_data" */
export type Customer_Foreign_Data_Variance_Order_By = {
  /** 外籍資料所屬顧客 */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "customer_blocked_sql_view" */
export type Customer_In_Blocked_List = {
  __typename?: 'customer_in_blocked_list';
  admin_reviewed_at?: Maybe<Scalars['timestamptz']['output']>;
  birthday?: Maybe<Scalars['date']['output']>;
  certificate_authority_id?: Maybe<Scalars['bigint']['output']>;
  driving_license_back_photo_path?: Maybe<Scalars['String']['output']>;
  driving_license_front_photo_path?: Maybe<Scalars['String']['output']>;
  driving_license_verified_status?: Maybe<Scalars['approvalstatus']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_is_verified?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  identity_card_back_photo_path?: Maybe<Scalars['String']['output']>;
  identity_card_front_photo_path?: Maybe<Scalars['String']['output']>;
  identity_card_verified_status?: Maybe<Scalars['approvalstatus']['output']>;
  identity_number?: Maybe<Scalars['String']['output']>;
  mgm?: Maybe<Scalars['String']['output']>;
  mobile_phone_number?: Maybe<Scalars['String']['output']>;
  mobile_phone_number_is_verified?: Maybe<Scalars['Boolean']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  order?: Maybe<Order>;
  profile_updated_at?: Maybe<Scalars['timestamptz']['output']>;
  residential_address?: Maybe<Scalars['String']['output']>;
  residential_area?: Maybe<Scalars['String']['output']>;
  residential_city?: Maybe<Scalars['String']['output']>;
  role_id?: Maybe<Scalars['bigint']['output']>;
  selfie_path?: Maybe<Scalars['String']['output']>;
  selfie_verified_status?: Maybe<Scalars['approvalstatus']['output']>;
  sign_up_at?: Maybe<Scalars['timestamptz']['output']>;
  signature_photo_path?: Maybe<Scalars['String']['output']>;
  signature_verified_status?: Maybe<Scalars['approvalstatus']['output']>;
};

/** aggregated selection of "customer_blocked_sql_view" */
export type Customer_In_Blocked_List_Aggregate = {
  __typename?: 'customer_in_blocked_list_aggregate';
  aggregate?: Maybe<Customer_In_Blocked_List_Aggregate_Fields>;
  nodes: Array<Customer_In_Blocked_List>;
};

/** aggregate fields of "customer_blocked_sql_view" */
export type Customer_In_Blocked_List_Aggregate_Fields = {
  __typename?: 'customer_in_blocked_list_aggregate_fields';
  avg?: Maybe<Customer_In_Blocked_List_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Customer_In_Blocked_List_Max_Fields>;
  min?: Maybe<Customer_In_Blocked_List_Min_Fields>;
  stddev?: Maybe<Customer_In_Blocked_List_Stddev_Fields>;
  stddev_pop?: Maybe<Customer_In_Blocked_List_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customer_In_Blocked_List_Stddev_Samp_Fields>;
  sum?: Maybe<Customer_In_Blocked_List_Sum_Fields>;
  var_pop?: Maybe<Customer_In_Blocked_List_Var_Pop_Fields>;
  var_samp?: Maybe<Customer_In_Blocked_List_Var_Samp_Fields>;
  variance?: Maybe<Customer_In_Blocked_List_Variance_Fields>;
};


/** aggregate fields of "customer_blocked_sql_view" */
export type Customer_In_Blocked_List_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customer_In_Blocked_List_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Customer_In_Blocked_List_Avg_Fields = {
  __typename?: 'customer_in_blocked_list_avg_fields';
  certificate_authority_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "customer_blocked_sql_view". All fields are combined with a logical 'AND'. */
export type Customer_In_Blocked_List_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_In_Blocked_List_Bool_Exp>>;
  _not?: InputMaybe<Customer_In_Blocked_List_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_In_Blocked_List_Bool_Exp>>;
  admin_reviewed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  birthday?: InputMaybe<Date_Comparison_Exp>;
  certificate_authority_id?: InputMaybe<Bigint_Comparison_Exp>;
  driving_license_back_photo_path?: InputMaybe<String_Comparison_Exp>;
  driving_license_front_photo_path?: InputMaybe<String_Comparison_Exp>;
  driving_license_verified_status?: InputMaybe<Approvalstatus_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_is_verified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  identity_card_back_photo_path?: InputMaybe<String_Comparison_Exp>;
  identity_card_front_photo_path?: InputMaybe<String_Comparison_Exp>;
  identity_card_verified_status?: InputMaybe<Approvalstatus_Comparison_Exp>;
  identity_number?: InputMaybe<String_Comparison_Exp>;
  mgm?: InputMaybe<String_Comparison_Exp>;
  mobile_phone_number?: InputMaybe<String_Comparison_Exp>;
  mobile_phone_number_is_verified?: InputMaybe<Boolean_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Order_Bool_Exp>;
  profile_updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  residential_address?: InputMaybe<String_Comparison_Exp>;
  residential_area?: InputMaybe<String_Comparison_Exp>;
  residential_city?: InputMaybe<String_Comparison_Exp>;
  role_id?: InputMaybe<Bigint_Comparison_Exp>;
  selfie_path?: InputMaybe<String_Comparison_Exp>;
  selfie_verified_status?: InputMaybe<Approvalstatus_Comparison_Exp>;
  sign_up_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  signature_photo_path?: InputMaybe<String_Comparison_Exp>;
  signature_verified_status?: InputMaybe<Approvalstatus_Comparison_Exp>;
};

/** aggregate max on columns */
export type Customer_In_Blocked_List_Max_Fields = {
  __typename?: 'customer_in_blocked_list_max_fields';
  admin_reviewed_at?: Maybe<Scalars['timestamptz']['output']>;
  birthday?: Maybe<Scalars['date']['output']>;
  certificate_authority_id?: Maybe<Scalars['bigint']['output']>;
  driving_license_back_photo_path?: Maybe<Scalars['String']['output']>;
  driving_license_front_photo_path?: Maybe<Scalars['String']['output']>;
  driving_license_verified_status?: Maybe<Scalars['approvalstatus']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  identity_card_back_photo_path?: Maybe<Scalars['String']['output']>;
  identity_card_front_photo_path?: Maybe<Scalars['String']['output']>;
  identity_card_verified_status?: Maybe<Scalars['approvalstatus']['output']>;
  identity_number?: Maybe<Scalars['String']['output']>;
  mgm?: Maybe<Scalars['String']['output']>;
  mobile_phone_number?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  profile_updated_at?: Maybe<Scalars['timestamptz']['output']>;
  residential_address?: Maybe<Scalars['String']['output']>;
  residential_area?: Maybe<Scalars['String']['output']>;
  residential_city?: Maybe<Scalars['String']['output']>;
  role_id?: Maybe<Scalars['bigint']['output']>;
  selfie_path?: Maybe<Scalars['String']['output']>;
  selfie_verified_status?: Maybe<Scalars['approvalstatus']['output']>;
  sign_up_at?: Maybe<Scalars['timestamptz']['output']>;
  signature_photo_path?: Maybe<Scalars['String']['output']>;
  signature_verified_status?: Maybe<Scalars['approvalstatus']['output']>;
};

/** aggregate min on columns */
export type Customer_In_Blocked_List_Min_Fields = {
  __typename?: 'customer_in_blocked_list_min_fields';
  admin_reviewed_at?: Maybe<Scalars['timestamptz']['output']>;
  birthday?: Maybe<Scalars['date']['output']>;
  certificate_authority_id?: Maybe<Scalars['bigint']['output']>;
  driving_license_back_photo_path?: Maybe<Scalars['String']['output']>;
  driving_license_front_photo_path?: Maybe<Scalars['String']['output']>;
  driving_license_verified_status?: Maybe<Scalars['approvalstatus']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  identity_card_back_photo_path?: Maybe<Scalars['String']['output']>;
  identity_card_front_photo_path?: Maybe<Scalars['String']['output']>;
  identity_card_verified_status?: Maybe<Scalars['approvalstatus']['output']>;
  identity_number?: Maybe<Scalars['String']['output']>;
  mgm?: Maybe<Scalars['String']['output']>;
  mobile_phone_number?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  profile_updated_at?: Maybe<Scalars['timestamptz']['output']>;
  residential_address?: Maybe<Scalars['String']['output']>;
  residential_area?: Maybe<Scalars['String']['output']>;
  residential_city?: Maybe<Scalars['String']['output']>;
  role_id?: Maybe<Scalars['bigint']['output']>;
  selfie_path?: Maybe<Scalars['String']['output']>;
  selfie_verified_status?: Maybe<Scalars['approvalstatus']['output']>;
  sign_up_at?: Maybe<Scalars['timestamptz']['output']>;
  signature_photo_path?: Maybe<Scalars['String']['output']>;
  signature_verified_status?: Maybe<Scalars['approvalstatus']['output']>;
};

/** Ordering options when selecting data from "customer_blocked_sql_view". */
export type Customer_In_Blocked_List_Order_By = {
  admin_reviewed_at?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  certificate_authority_id?: InputMaybe<Order_By>;
  driving_license_back_photo_path?: InputMaybe<Order_By>;
  driving_license_front_photo_path?: InputMaybe<Order_By>;
  driving_license_verified_status?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_is_verified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identity_card_back_photo_path?: InputMaybe<Order_By>;
  identity_card_front_photo_path?: InputMaybe<Order_By>;
  identity_card_verified_status?: InputMaybe<Order_By>;
  identity_number?: InputMaybe<Order_By>;
  mgm?: InputMaybe<Order_By>;
  mobile_phone_number?: InputMaybe<Order_By>;
  mobile_phone_number_is_verified?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_Order_By>;
  profile_updated_at?: InputMaybe<Order_By>;
  residential_address?: InputMaybe<Order_By>;
  residential_area?: InputMaybe<Order_By>;
  residential_city?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  selfie_path?: InputMaybe<Order_By>;
  selfie_verified_status?: InputMaybe<Order_By>;
  sign_up_at?: InputMaybe<Order_By>;
  signature_photo_path?: InputMaybe<Order_By>;
  signature_verified_status?: InputMaybe<Order_By>;
};

/** select columns of table "customer_blocked_sql_view" */
export enum Customer_In_Blocked_List_Select_Column {
  /** column name */
  AdminReviewedAt = 'admin_reviewed_at',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CertificateAuthorityId = 'certificate_authority_id',
  /** column name */
  DrivingLicenseBackPhotoPath = 'driving_license_back_photo_path',
  /** column name */
  DrivingLicenseFrontPhotoPath = 'driving_license_front_photo_path',
  /** column name */
  DrivingLicenseVerifiedStatus = 'driving_license_verified_status',
  /** column name */
  Email = 'email',
  /** column name */
  EmailIsVerified = 'email_is_verified',
  /** column name */
  Id = 'id',
  /** column name */
  IdentityCardBackPhotoPath = 'identity_card_back_photo_path',
  /** column name */
  IdentityCardFrontPhotoPath = 'identity_card_front_photo_path',
  /** column name */
  IdentityCardVerifiedStatus = 'identity_card_verified_status',
  /** column name */
  IdentityNumber = 'identity_number',
  /** column name */
  Mgm = 'mgm',
  /** column name */
  MobilePhoneNumber = 'mobile_phone_number',
  /** column name */
  MobilePhoneNumberIsVerified = 'mobile_phone_number_is_verified',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  ProfileUpdatedAt = 'profile_updated_at',
  /** column name */
  ResidentialAddress = 'residential_address',
  /** column name */
  ResidentialArea = 'residential_area',
  /** column name */
  ResidentialCity = 'residential_city',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  SelfiePath = 'selfie_path',
  /** column name */
  SelfieVerifiedStatus = 'selfie_verified_status',
  /** column name */
  SignUpAt = 'sign_up_at',
  /** column name */
  SignaturePhotoPath = 'signature_photo_path',
  /** column name */
  SignatureVerifiedStatus = 'signature_verified_status'
}

/** aggregate stddev on columns */
export type Customer_In_Blocked_List_Stddev_Fields = {
  __typename?: 'customer_in_blocked_list_stddev_fields';
  certificate_authority_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Customer_In_Blocked_List_Stddev_Pop_Fields = {
  __typename?: 'customer_in_blocked_list_stddev_pop_fields';
  certificate_authority_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Customer_In_Blocked_List_Stddev_Samp_Fields = {
  __typename?: 'customer_in_blocked_list_stddev_samp_fields';
  certificate_authority_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "customer_in_blocked_list" */
export type Customer_In_Blocked_List_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_In_Blocked_List_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customer_In_Blocked_List_Stream_Cursor_Value_Input = {
  admin_reviewed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  birthday?: InputMaybe<Scalars['date']['input']>;
  certificate_authority_id?: InputMaybe<Scalars['bigint']['input']>;
  driving_license_back_photo_path?: InputMaybe<Scalars['String']['input']>;
  driving_license_front_photo_path?: InputMaybe<Scalars['String']['input']>;
  driving_license_verified_status?: InputMaybe<Scalars['approvalstatus']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_is_verified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  identity_card_back_photo_path?: InputMaybe<Scalars['String']['input']>;
  identity_card_front_photo_path?: InputMaybe<Scalars['String']['input']>;
  identity_card_verified_status?: InputMaybe<Scalars['approvalstatus']['input']>;
  identity_number?: InputMaybe<Scalars['String']['input']>;
  mgm?: InputMaybe<Scalars['String']['input']>;
  mobile_phone_number?: InputMaybe<Scalars['String']['input']>;
  mobile_phone_number_is_verified?: InputMaybe<Scalars['Boolean']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  profile_updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  residential_address?: InputMaybe<Scalars['String']['input']>;
  residential_area?: InputMaybe<Scalars['String']['input']>;
  residential_city?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['bigint']['input']>;
  selfie_path?: InputMaybe<Scalars['String']['input']>;
  selfie_verified_status?: InputMaybe<Scalars['approvalstatus']['input']>;
  sign_up_at?: InputMaybe<Scalars['timestamptz']['input']>;
  signature_photo_path?: InputMaybe<Scalars['String']['input']>;
  signature_verified_status?: InputMaybe<Scalars['approvalstatus']['input']>;
};

/** aggregate sum on columns */
export type Customer_In_Blocked_List_Sum_Fields = {
  __typename?: 'customer_in_blocked_list_sum_fields';
  certificate_authority_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  role_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Customer_In_Blocked_List_Var_Pop_Fields = {
  __typename?: 'customer_in_blocked_list_var_pop_fields';
  certificate_authority_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Customer_In_Blocked_List_Var_Samp_Fields = {
  __typename?: 'customer_in_blocked_list_var_samp_fields';
  certificate_authority_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Customer_In_Blocked_List_Variance_Fields = {
  __typename?: 'customer_in_blocked_list_variance_fields';
  certificate_authority_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** 顧客等級 */
export type Customer_Level = {
  __typename?: 'customer_level';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  customer: Customer;
  customer_id: Scalars['bigint']['output'];
  id: Scalars['bigint']['output'];
  /** 用戶等級，目前只有黑名單 BLOCKLIST */
  level: Scalars['String']['output'];
  /** An object relationship */
  rental_company: Rental_Company;
  rental_company_id: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "customer_level" */
export type Customer_Level_Aggregate = {
  __typename?: 'customer_level_aggregate';
  aggregate?: Maybe<Customer_Level_Aggregate_Fields>;
  nodes: Array<Customer_Level>;
};

export type Customer_Level_Aggregate_Bool_Exp = {
  count?: InputMaybe<Customer_Level_Aggregate_Bool_Exp_Count>;
};

export type Customer_Level_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Customer_Level_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Customer_Level_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "customer_level" */
export type Customer_Level_Aggregate_Fields = {
  __typename?: 'customer_level_aggregate_fields';
  avg?: Maybe<Customer_Level_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Customer_Level_Max_Fields>;
  min?: Maybe<Customer_Level_Min_Fields>;
  stddev?: Maybe<Customer_Level_Stddev_Fields>;
  stddev_pop?: Maybe<Customer_Level_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customer_Level_Stddev_Samp_Fields>;
  sum?: Maybe<Customer_Level_Sum_Fields>;
  var_pop?: Maybe<Customer_Level_Var_Pop_Fields>;
  var_samp?: Maybe<Customer_Level_Var_Samp_Fields>;
  variance?: Maybe<Customer_Level_Variance_Fields>;
};


/** aggregate fields of "customer_level" */
export type Customer_Level_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customer_Level_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "customer_level" */
export type Customer_Level_Aggregate_Order_By = {
  avg?: InputMaybe<Customer_Level_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Customer_Level_Max_Order_By>;
  min?: InputMaybe<Customer_Level_Min_Order_By>;
  stddev?: InputMaybe<Customer_Level_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Customer_Level_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Customer_Level_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Customer_Level_Sum_Order_By>;
  var_pop?: InputMaybe<Customer_Level_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Customer_Level_Var_Samp_Order_By>;
  variance?: InputMaybe<Customer_Level_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Customer_Level_Avg_Fields = {
  __typename?: 'customer_level_avg_fields';
  customer_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "customer_level" */
export type Customer_Level_Avg_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "customer_level". All fields are combined with a logical 'AND'. */
export type Customer_Level_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Level_Bool_Exp>>;
  _not?: InputMaybe<Customer_Level_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_Level_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer?: InputMaybe<Customer_Bool_Exp>;
  customer_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  level?: InputMaybe<String_Comparison_Exp>;
  rental_company?: InputMaybe<Rental_Company_Bool_Exp>;
  rental_company_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Customer_Level_Max_Fields = {
  __typename?: 'customer_level_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  customer_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 用戶等級，目前只有黑名單 BLOCKLIST */
  level?: Maybe<Scalars['String']['output']>;
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "customer_level" */
export type Customer_Level_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用戶等級，目前只有黑名單 BLOCKLIST */
  level?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Customer_Level_Min_Fields = {
  __typename?: 'customer_level_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  customer_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 用戶等級，目前只有黑名單 BLOCKLIST */
  level?: Maybe<Scalars['String']['output']>;
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "customer_level" */
export type Customer_Level_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用戶等級，目前只有黑名單 BLOCKLIST */
  level?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "customer_level". */
export type Customer_Level_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customer_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  rental_company?: InputMaybe<Rental_Company_Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "customer_level" */
export enum Customer_Level_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  RentalCompanyId = 'rental_company_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Customer_Level_Stddev_Fields = {
  __typename?: 'customer_level_stddev_fields';
  customer_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "customer_level" */
export type Customer_Level_Stddev_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Customer_Level_Stddev_Pop_Fields = {
  __typename?: 'customer_level_stddev_pop_fields';
  customer_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "customer_level" */
export type Customer_Level_Stddev_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Customer_Level_Stddev_Samp_Fields = {
  __typename?: 'customer_level_stddev_samp_fields';
  customer_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "customer_level" */
export type Customer_Level_Stddev_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "customer_level" */
export type Customer_Level_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_Level_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customer_Level_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  customer_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 用戶等級，目前只有黑名單 BLOCKLIST */
  level?: InputMaybe<Scalars['String']['input']>;
  rental_company_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Customer_Level_Sum_Fields = {
  __typename?: 'customer_level_sum_fields';
  customer_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "customer_level" */
export type Customer_Level_Sum_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Customer_Level_Var_Pop_Fields = {
  __typename?: 'customer_level_var_pop_fields';
  customer_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "customer_level" */
export type Customer_Level_Var_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Customer_Level_Var_Samp_Fields = {
  __typename?: 'customer_level_var_samp_fields';
  customer_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "customer_level" */
export type Customer_Level_Var_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Customer_Level_Variance_Fields = {
  __typename?: 'customer_level_variance_fields';
  customer_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "customer_level" */
export type Customer_Level_Variance_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** order by max() on columns of table "customer" */
export type Customer_Max_Order_By = {
  /** 客服審核時間 */
  admin_reviewed_at?: InputMaybe<Order_By>;
  /** 出生日期 */
  birthday?: InputMaybe<Order_By>;
  certificate_authority_id?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 駕照反面 Google Cloud Storage 儲存位址 */
  driving_license_back_photo_path?: InputMaybe<Order_By>;
  /** 駕照正面 Google Cloud Storage 儲存位址 */
  driving_license_front_photo_path?: InputMaybe<Order_By>;
  /** 駕照審核狀態 */
  driving_license_verified_status?: InputMaybe<Order_By>;
  /** 信箱 */
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 身分證照片反面 Google Cloud Storage 儲存位址 */
  identity_card_back_photo_path?: InputMaybe<Order_By>;
  /** 身分證照片正面 Google Cloud Storage 儲存位址 */
  identity_card_front_photo_path?: InputMaybe<Order_By>;
  /** 身分證審核狀態 */
  identity_card_verified_status?: InputMaybe<Order_By>;
  /** 身分證字號 */
  identity_number?: InputMaybe<Order_By>;
  /** 會員註冊推薦碼 MGM(Member Get Member) */
  mgm?: InputMaybe<Order_By>;
  /** 手機號碼，format: 09XXXXXXXX */
  mobile_phone_number?: InputMaybe<Order_By>;
  /** 顧客暱稱 (舊版預設值同顧客姓名) */
  nickname?: InputMaybe<Order_By>;
  /** 顧客更新個人資料時間 */
  profile_updated_at?: InputMaybe<Order_By>;
  /** 居住地址 */
  residential_address?: InputMaybe<Order_By>;
  /** 居住行政區 */
  residential_area?: InputMaybe<Order_By>;
  /** 居住縣市 */
  residential_city?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  /** 自拍照 Google Cloud Storage 儲存位址 */
  selfie_path?: InputMaybe<Order_By>;
  /** 自拍照審核狀態 */
  selfie_verified_status?: InputMaybe<Order_By>;
  /** 註冊完成時間；null 代表未完成註冊步驟 */
  sign_up_at?: InputMaybe<Order_By>;
  /** 簽名檔 Google Cloud Storage 儲存位址 */
  signature_photo_path?: InputMaybe<Order_By>;
  /** 簽名檔審核狀態 */
  signature_verified_status?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "customer" */
export type Customer_Min_Order_By = {
  /** 客服審核時間 */
  admin_reviewed_at?: InputMaybe<Order_By>;
  /** 出生日期 */
  birthday?: InputMaybe<Order_By>;
  certificate_authority_id?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 駕照反面 Google Cloud Storage 儲存位址 */
  driving_license_back_photo_path?: InputMaybe<Order_By>;
  /** 駕照正面 Google Cloud Storage 儲存位址 */
  driving_license_front_photo_path?: InputMaybe<Order_By>;
  /** 駕照審核狀態 */
  driving_license_verified_status?: InputMaybe<Order_By>;
  /** 信箱 */
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 身分證照片反面 Google Cloud Storage 儲存位址 */
  identity_card_back_photo_path?: InputMaybe<Order_By>;
  /** 身分證照片正面 Google Cloud Storage 儲存位址 */
  identity_card_front_photo_path?: InputMaybe<Order_By>;
  /** 身分證審核狀態 */
  identity_card_verified_status?: InputMaybe<Order_By>;
  /** 身分證字號 */
  identity_number?: InputMaybe<Order_By>;
  /** 會員註冊推薦碼 MGM(Member Get Member) */
  mgm?: InputMaybe<Order_By>;
  /** 手機號碼，format: 09XXXXXXXX */
  mobile_phone_number?: InputMaybe<Order_By>;
  /** 顧客暱稱 (舊版預設值同顧客姓名) */
  nickname?: InputMaybe<Order_By>;
  /** 顧客更新個人資料時間 */
  profile_updated_at?: InputMaybe<Order_By>;
  /** 居住地址 */
  residential_address?: InputMaybe<Order_By>;
  /** 居住行政區 */
  residential_area?: InputMaybe<Order_By>;
  /** 居住縣市 */
  residential_city?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  /** 自拍照 Google Cloud Storage 儲存位址 */
  selfie_path?: InputMaybe<Order_By>;
  /** 自拍照審核狀態 */
  selfie_verified_status?: InputMaybe<Order_By>;
  /** 註冊完成時間；null 代表未完成註冊步驟 */
  sign_up_at?: InputMaybe<Order_By>;
  /** 簽名檔 Google Cloud Storage 儲存位址 */
  signature_photo_path?: InputMaybe<Order_By>;
  /** 簽名檔審核狀態 */
  signature_verified_status?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "customer". */
export type Customer_Order_By = {
  admin_reviewed_at?: InputMaybe<Order_By>;
  binding_transactions_aggregate?: InputMaybe<Binding_Transaction_Aggregate_Order_By>;
  birthday?: InputMaybe<Order_By>;
  certificate_authority?: InputMaybe<Certificate_Authority_Order_By>;
  certificate_authority_id?: InputMaybe<Order_By>;
  coupon_inventories_aggregate?: InputMaybe<Coupon_Inventory_Aggregate_Order_By>;
  credit_cards_aggregate?: InputMaybe<Credit_Card_Aggregate_Order_By>;
  customer_foreign_data_aggregate?: InputMaybe<Customer_Foreign_Data_Aggregate_Order_By>;
  customer_in_blocked_list?: InputMaybe<Customer_In_Blocked_List_Order_By>;
  customer_levels_aggregate?: InputMaybe<Customer_Level_Aggregate_Order_By>;
  customer_service_logs_aggregate?: InputMaybe<Customer_Service_Log_Aggregate_Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  driving_license_back_photo_path?: InputMaybe<Order_By>;
  driving_license_front_photo_path?: InputMaybe<Order_By>;
  driving_license_verified_status?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_is_verified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identity_card_back_photo_path?: InputMaybe<Order_By>;
  identity_card_front_photo_path?: InputMaybe<Order_By>;
  identity_card_verified_status?: InputMaybe<Order_By>;
  identity_number?: InputMaybe<Order_By>;
  mgm?: InputMaybe<Order_By>;
  mobile_phone_number?: InputMaybe<Order_By>;
  mobile_phone_number_is_verified?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>;
  profile_updated_at?: InputMaybe<Order_By>;
  residential_address?: InputMaybe<Order_By>;
  residential_area?: InputMaybe<Order_By>;
  residential_city?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  selfie_path?: InputMaybe<Order_By>;
  selfie_verified_status?: InputMaybe<Order_By>;
  sign_up_at?: InputMaybe<Order_By>;
  signature_photo_path?: InputMaybe<Order_By>;
  signature_verified_status?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
};

/** select columns of table "customer" */
export enum Customer_Select_Column {
  /** column name */
  AdminReviewedAt = 'admin_reviewed_at',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CertificateAuthorityId = 'certificate_authority_id',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DrivingLicenseBackPhotoPath = 'driving_license_back_photo_path',
  /** column name */
  DrivingLicenseFrontPhotoPath = 'driving_license_front_photo_path',
  /** column name */
  DrivingLicenseVerifiedStatus = 'driving_license_verified_status',
  /** column name */
  Email = 'email',
  /** column name */
  EmailIsVerified = 'email_is_verified',
  /** column name */
  Id = 'id',
  /** column name */
  IdentityCardBackPhotoPath = 'identity_card_back_photo_path',
  /** column name */
  IdentityCardFrontPhotoPath = 'identity_card_front_photo_path',
  /** column name */
  IdentityCardVerifiedStatus = 'identity_card_verified_status',
  /** column name */
  IdentityNumber = 'identity_number',
  /** column name */
  Mgm = 'mgm',
  /** column name */
  MobilePhoneNumber = 'mobile_phone_number',
  /** column name */
  MobilePhoneNumberIsVerified = 'mobile_phone_number_is_verified',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  ProfileUpdatedAt = 'profile_updated_at',
  /** column name */
  ResidentialAddress = 'residential_address',
  /** column name */
  ResidentialArea = 'residential_area',
  /** column name */
  ResidentialCity = 'residential_city',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  SelfiePath = 'selfie_path',
  /** column name */
  SelfieVerifiedStatus = 'selfie_verified_status',
  /** column name */
  SignUpAt = 'sign_up_at',
  /** column name */
  SignaturePhotoPath = 'signature_photo_path',
  /** column name */
  SignatureVerifiedStatus = 'signature_verified_status'
}

/** 顧客服務紀錄 */
export type Customer_Service_Log = {
  __typename?: 'customer_service_log';
  /** 客服的動作 */
  action: Scalars['customerserviceactioncode']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  customer: Customer;
  /** 顧客 id */
  customer_id: Scalars['bigint']['output'];
  id: Scalars['bigint']['output'];
  /** 是否為已認證顧客：手機、email 已驗證，且四張照片審核通過 */
  is_customer_certified: Scalars['Boolean']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: User;
};

/** order by aggregate values of table "customer_service_log" */
export type Customer_Service_Log_Aggregate_Order_By = {
  avg?: InputMaybe<Customer_Service_Log_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Customer_Service_Log_Max_Order_By>;
  min?: InputMaybe<Customer_Service_Log_Min_Order_By>;
  stddev?: InputMaybe<Customer_Service_Log_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Customer_Service_Log_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Customer_Service_Log_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Customer_Service_Log_Sum_Order_By>;
  var_pop?: InputMaybe<Customer_Service_Log_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Customer_Service_Log_Var_Samp_Order_By>;
  variance?: InputMaybe<Customer_Service_Log_Variance_Order_By>;
};

/** order by avg() on columns of table "customer_service_log" */
export type Customer_Service_Log_Avg_Order_By = {
  /** 顧客 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "customer_service_log". All fields are combined with a logical 'AND'. */
export type Customer_Service_Log_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Service_Log_Bool_Exp>>;
  _not?: InputMaybe<Customer_Service_Log_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_Service_Log_Bool_Exp>>;
  action?: InputMaybe<Customerserviceactioncode_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer?: InputMaybe<Customer_Bool_Exp>;
  customer_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_customer_certified?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
};

/** order by max() on columns of table "customer_service_log" */
export type Customer_Service_Log_Max_Order_By = {
  /** 客服的動作 */
  action?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 顧客 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "customer_service_log" */
export type Customer_Service_Log_Min_Order_By = {
  /** 客服的動作 */
  action?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 顧客 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "customer_service_log". */
export type Customer_Service_Log_Order_By = {
  action?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customer_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_customer_certified?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
};

/** select columns of table "customer_service_log" */
export enum Customer_Service_Log_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsCustomerCertified = 'is_customer_certified',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** order by stddev() on columns of table "customer_service_log" */
export type Customer_Service_Log_Stddev_Order_By = {
  /** 顧客 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "customer_service_log" */
export type Customer_Service_Log_Stddev_Pop_Order_By = {
  /** 顧客 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "customer_service_log" */
export type Customer_Service_Log_Stddev_Samp_Order_By = {
  /** 顧客 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "customer_service_log" */
export type Customer_Service_Log_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_Service_Log_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customer_Service_Log_Stream_Cursor_Value_Input = {
  /** 客服的動作 */
  action?: InputMaybe<Scalars['customerserviceactioncode']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 顧客 id */
  customer_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否為已認證顧客：手機、email 已驗證，且四張照片審核通過 */
  is_customer_certified?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** order by sum() on columns of table "customer_service_log" */
export type Customer_Service_Log_Sum_Order_By = {
  /** 顧客 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "customer_service_log" */
export type Customer_Service_Log_Var_Pop_Order_By = {
  /** 顧客 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "customer_service_log" */
export type Customer_Service_Log_Var_Samp_Order_By = {
  /** 顧客 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "customer_service_log" */
export type Customer_Service_Log_Variance_Order_By = {
  /** 顧客 id */
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev() on columns of table "customer" */
export type Customer_Stddev_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "customer" */
export type Customer_Stddev_Pop_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "customer" */
export type Customer_Stddev_Samp_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "customer" */
export type Customer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customer_Stream_Cursor_Value_Input = {
  /** 客服審核時間 */
  admin_reviewed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 出生日期 */
  birthday?: InputMaybe<Scalars['date']['input']>;
  certificate_authority_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 駕照反面 Google Cloud Storage 儲存位址 */
  driving_license_back_photo_path?: InputMaybe<Scalars['String']['input']>;
  /** 駕照正面 Google Cloud Storage 儲存位址 */
  driving_license_front_photo_path?: InputMaybe<Scalars['String']['input']>;
  /** 駕照審核狀態 */
  driving_license_verified_status?: InputMaybe<Scalars['approvalstatus']['input']>;
  /** 信箱 */
  email?: InputMaybe<Scalars['String']['input']>;
  /** 信箱是否通過驗證 */
  email_is_verified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 身分證照片反面 Google Cloud Storage 儲存位址 */
  identity_card_back_photo_path?: InputMaybe<Scalars['String']['input']>;
  /** 身分證照片正面 Google Cloud Storage 儲存位址 */
  identity_card_front_photo_path?: InputMaybe<Scalars['String']['input']>;
  /** 身分證審核狀態 */
  identity_card_verified_status?: InputMaybe<Scalars['approvalstatus']['input']>;
  /** 身分證字號 */
  identity_number?: InputMaybe<Scalars['String']['input']>;
  /** 會員註冊推薦碼 MGM(Member Get Member) */
  mgm?: InputMaybe<Scalars['String']['input']>;
  /** 手機號碼，format: 09XXXXXXXX */
  mobile_phone_number?: InputMaybe<Scalars['String']['input']>;
  /** 手機號碼是否通過驗證 */
  mobile_phone_number_is_verified?: InputMaybe<Scalars['Boolean']['input']>;
  /** 顧客暱稱 (舊版預設值同顧客姓名) */
  nickname?: InputMaybe<Scalars['String']['input']>;
  /** 顧客更新個人資料時間 */
  profile_updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 居住地址 */
  residential_address?: InputMaybe<Scalars['String']['input']>;
  /** 居住行政區 */
  residential_area?: InputMaybe<Scalars['String']['input']>;
  /** 居住縣市 */
  residential_city?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 自拍照 Google Cloud Storage 儲存位址 */
  selfie_path?: InputMaybe<Scalars['String']['input']>;
  /** 自拍照審核狀態 */
  selfie_verified_status?: InputMaybe<Scalars['approvalstatus']['input']>;
  /** 註冊完成時間；null 代表未完成註冊步驟 */
  sign_up_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 簽名檔 Google Cloud Storage 儲存位址 */
  signature_photo_path?: InputMaybe<Scalars['String']['input']>;
  /** 簽名檔審核狀態 */
  signature_verified_status?: InputMaybe<Scalars['approvalstatus']['input']>;
};

/** order by sum() on columns of table "customer" */
export type Customer_Sum_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "customer" */
export type Customer_Var_Pop_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "customer" */
export type Customer_Var_Samp_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "customer" */
export type Customer_Variance_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "customeridentitydoctype". All fields are combined with logical 'AND'. */
export type Customeridentitydoctype_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['customeridentitydoctype']['input']>;
  _gt?: InputMaybe<Scalars['customeridentitydoctype']['input']>;
  _gte?: InputMaybe<Scalars['customeridentitydoctype']['input']>;
  _in?: InputMaybe<Array<Scalars['customeridentitydoctype']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['customeridentitydoctype']['input']>;
  _lte?: InputMaybe<Scalars['customeridentitydoctype']['input']>;
  _neq?: InputMaybe<Scalars['customeridentitydoctype']['input']>;
  _nin?: InputMaybe<Array<Scalars['customeridentitydoctype']['input']>>;
};

/** Boolean expression to compare columns of type "customerserviceactioncode". All fields are combined with logical 'AND'. */
export type Customerserviceactioncode_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['customerserviceactioncode']['input']>;
  _gt?: InputMaybe<Scalars['customerserviceactioncode']['input']>;
  _gte?: InputMaybe<Scalars['customerserviceactioncode']['input']>;
  _in?: InputMaybe<Array<Scalars['customerserviceactioncode']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['customerserviceactioncode']['input']>;
  _lte?: InputMaybe<Scalars['customerserviceactioncode']['input']>;
  _neq?: InputMaybe<Scalars['customerserviceactioncode']['input']>;
  _nin?: InputMaybe<Array<Scalars['customerserviceactioncode']['input']>>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** 車機 */
export type Device = {
  __typename?: 'device';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** IMEI */
  imei: Scalars['String']['output'];
  /** An object relationship */
  rental_company: Rental_Company;
  rental_company_id: Scalars['bigint']['output'];
  /** SIM 卡電話號碼 */
  sim_phone_number: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  vehicle?: Maybe<Vehicle>;
  /** 綁定車輛 */
  vehicle_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "device" */
export type Device_Aggregate = {
  __typename?: 'device_aggregate';
  aggregate?: Maybe<Device_Aggregate_Fields>;
  nodes: Array<Device>;
};

export type Device_Aggregate_Bool_Exp = {
  count?: InputMaybe<Device_Aggregate_Bool_Exp_Count>;
};

export type Device_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Device_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Device_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "device" */
export type Device_Aggregate_Fields = {
  __typename?: 'device_aggregate_fields';
  avg?: Maybe<Device_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Device_Max_Fields>;
  min?: Maybe<Device_Min_Fields>;
  stddev?: Maybe<Device_Stddev_Fields>;
  stddev_pop?: Maybe<Device_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Device_Stddev_Samp_Fields>;
  sum?: Maybe<Device_Sum_Fields>;
  var_pop?: Maybe<Device_Var_Pop_Fields>;
  var_samp?: Maybe<Device_Var_Samp_Fields>;
  variance?: Maybe<Device_Variance_Fields>;
};


/** aggregate fields of "device" */
export type Device_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "device" */
export type Device_Aggregate_Order_By = {
  avg?: InputMaybe<Device_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Device_Max_Order_By>;
  min?: InputMaybe<Device_Min_Order_By>;
  stddev?: InputMaybe<Device_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Device_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Device_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Device_Sum_Order_By>;
  var_pop?: InputMaybe<Device_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Device_Var_Samp_Order_By>;
  variance?: InputMaybe<Device_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Device_Avg_Fields = {
  __typename?: 'device_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 綁定車輛 */
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "device" */
export type Device_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  /** 綁定車輛 */
  vehicle_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "device". All fields are combined with a logical 'AND'. */
export type Device_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Bool_Exp>>;
  _not?: InputMaybe<Device_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  imei?: InputMaybe<String_Comparison_Exp>;
  rental_company?: InputMaybe<Rental_Company_Bool_Exp>;
  rental_company_id?: InputMaybe<Bigint_Comparison_Exp>;
  sim_phone_number?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle?: InputMaybe<Vehicle_Bool_Exp>;
  vehicle_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Device_Max_Fields = {
  __typename?: 'device_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** IMEI */
  imei?: Maybe<Scalars['String']['output']>;
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  /** SIM 卡電話號碼 */
  sim_phone_number?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 綁定車輛 */
  vehicle_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "device" */
export type Device_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** IMEI */
  imei?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  /** SIM 卡電話號碼 */
  sim_phone_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 綁定車輛 */
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Device_Min_Fields = {
  __typename?: 'device_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** IMEI */
  imei?: Maybe<Scalars['String']['output']>;
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  /** SIM 卡電話號碼 */
  sim_phone_number?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 綁定車輛 */
  vehicle_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "device" */
export type Device_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** IMEI */
  imei?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  /** SIM 卡電話號碼 */
  sim_phone_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 綁定車輛 */
  vehicle_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "device". */
export type Device_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imei?: InputMaybe<Order_By>;
  rental_company?: InputMaybe<Rental_Company_Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  sim_phone_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle?: InputMaybe<Vehicle_Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** select columns of table "device" */
export enum Device_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Imei = 'imei',
  /** column name */
  RentalCompanyId = 'rental_company_id',
  /** column name */
  SimPhoneNumber = 'sim_phone_number',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleId = 'vehicle_id'
}

/** aggregate stddev on columns */
export type Device_Stddev_Fields = {
  __typename?: 'device_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 綁定車輛 */
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "device" */
export type Device_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  /** 綁定車輛 */
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Device_Stddev_Pop_Fields = {
  __typename?: 'device_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 綁定車輛 */
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "device" */
export type Device_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  /** 綁定車輛 */
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Device_Stddev_Samp_Fields = {
  __typename?: 'device_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 綁定車輛 */
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "device" */
export type Device_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  /** 綁定車輛 */
  vehicle_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "device" */
export type Device_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Device_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** IMEI */
  imei?: InputMaybe<Scalars['String']['input']>;
  rental_company_id?: InputMaybe<Scalars['bigint']['input']>;
  /** SIM 卡電話號碼 */
  sim_phone_number?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 綁定車輛 */
  vehicle_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Device_Sum_Fields = {
  __typename?: 'device_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  /** 綁定車輛 */
  vehicle_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "device" */
export type Device_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  /** 綁定車輛 */
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Device_Var_Pop_Fields = {
  __typename?: 'device_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 綁定車輛 */
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "device" */
export type Device_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  /** 綁定車輛 */
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Device_Var_Samp_Fields = {
  __typename?: 'device_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 綁定車輛 */
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "device" */
export type Device_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  /** 綁定車輛 */
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Device_Variance_Fields = {
  __typename?: 'device_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 綁定車輛 */
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "device" */
export type Device_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  /** 綁定車輛 */
  vehicle_id?: InputMaybe<Order_By>;
};

/** 折扣優惠 (即將棄用) */
export type Discount = {
  __typename?: 'discount';
  /** An object relationship */
  campaign?: Maybe<Campaign>;
  /** 使用的行銷活動 id */
  campaign_id?: Maybe<Scalars['bigint']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount: Scalars['Int']['output'];
  id: Scalars['bigint']['output'];
  /** An array relationship */
  order_discount_snapshots: Array<Order_Discount_Snapshot>;
  /** 適用的訂單開始時間區間（最早） */
  order_start_at_interval_from?: Maybe<Scalars['timestamptz']['output']>;
  /** 適用的訂單開始時間區間（最晚） */
  order_start_at_interval_to?: Maybe<Scalars['timestamptz']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** 折扣優惠 (即將棄用) */
export type DiscountOrder_Discount_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Order_Discount_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Discount_Snapshot_Order_By>>;
  where?: InputMaybe<Order_Discount_Snapshot_Bool_Exp>;
};

/** aggregated selection of "discount" */
export type Discount_Aggregate = {
  __typename?: 'discount_aggregate';
  aggregate?: Maybe<Discount_Aggregate_Fields>;
  nodes: Array<Discount>;
};

export type Discount_Aggregate_Bool_Exp = {
  count?: InputMaybe<Discount_Aggregate_Bool_Exp_Count>;
};

export type Discount_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Discount_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Discount_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "discount" */
export type Discount_Aggregate_Fields = {
  __typename?: 'discount_aggregate_fields';
  avg?: Maybe<Discount_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Discount_Max_Fields>;
  min?: Maybe<Discount_Min_Fields>;
  stddev?: Maybe<Discount_Stddev_Fields>;
  stddev_pop?: Maybe<Discount_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Discount_Stddev_Samp_Fields>;
  sum?: Maybe<Discount_Sum_Fields>;
  var_pop?: Maybe<Discount_Var_Pop_Fields>;
  var_samp?: Maybe<Discount_Var_Samp_Fields>;
  variance?: Maybe<Discount_Variance_Fields>;
};


/** aggregate fields of "discount" */
export type Discount_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Discount_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "discount" */
export type Discount_Aggregate_Order_By = {
  avg?: InputMaybe<Discount_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Discount_Max_Order_By>;
  min?: InputMaybe<Discount_Min_Order_By>;
  stddev?: InputMaybe<Discount_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Discount_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Discount_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Discount_Sum_Order_By>;
  var_pop?: InputMaybe<Discount_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Discount_Var_Samp_Order_By>;
  variance?: InputMaybe<Discount_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Discount_Avg_Fields = {
  __typename?: 'discount_avg_fields';
  /** 使用的行銷活動 id */
  campaign_id?: Maybe<Scalars['Float']['output']>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "discount" */
export type Discount_Avg_Order_By = {
  /** 使用的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "discount". All fields are combined with a logical 'AND'. */
export type Discount_Bool_Exp = {
  _and?: InputMaybe<Array<Discount_Bool_Exp>>;
  _not?: InputMaybe<Discount_Bool_Exp>;
  _or?: InputMaybe<Array<Discount_Bool_Exp>>;
  campaign?: InputMaybe<Campaign_Bool_Exp>;
  campaign_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  discount_amount?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  order_discount_snapshots?: InputMaybe<Order_Discount_Snapshot_Bool_Exp>;
  order_start_at_interval_from?: InputMaybe<Timestamptz_Comparison_Exp>;
  order_start_at_interval_to?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Discount_Max_Fields = {
  __typename?: 'discount_max_fields';
  /** 使用的行銷活動 id */
  campaign_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 適用的訂單開始時間區間（最早） */
  order_start_at_interval_from?: Maybe<Scalars['timestamptz']['output']>;
  /** 適用的訂單開始時間區間（最晚） */
  order_start_at_interval_to?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "discount" */
export type Discount_Max_Order_By = {
  /** 使用的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 適用的訂單開始時間區間（最早） */
  order_start_at_interval_from?: InputMaybe<Order_By>;
  /** 適用的訂單開始時間區間（最晚） */
  order_start_at_interval_to?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Discount_Min_Fields = {
  __typename?: 'discount_min_fields';
  /** 使用的行銷活動 id */
  campaign_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 適用的訂單開始時間區間（最早） */
  order_start_at_interval_from?: Maybe<Scalars['timestamptz']['output']>;
  /** 適用的訂單開始時間區間（最晚） */
  order_start_at_interval_to?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "discount" */
export type Discount_Min_Order_By = {
  /** 使用的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 適用的訂單開始時間區間（最早） */
  order_start_at_interval_from?: InputMaybe<Order_By>;
  /** 適用的訂單開始時間區間（最晚） */
  order_start_at_interval_to?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "discount". */
export type Discount_Order_By = {
  campaign?: InputMaybe<Campaign_Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_discount_snapshots_aggregate?: InputMaybe<Order_Discount_Snapshot_Aggregate_Order_By>;
  order_start_at_interval_from?: InputMaybe<Order_By>;
  order_start_at_interval_to?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "discount" */
export enum Discount_Select_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DiscountAmount = 'discount_amount',
  /** column name */
  Id = 'id',
  /** column name */
  OrderStartAtIntervalFrom = 'order_start_at_interval_from',
  /** column name */
  OrderStartAtIntervalTo = 'order_start_at_interval_to',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Discount_Stddev_Fields = {
  __typename?: 'discount_stddev_fields';
  /** 使用的行銷活動 id */
  campaign_id?: Maybe<Scalars['Float']['output']>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "discount" */
export type Discount_Stddev_Order_By = {
  /** 使用的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Discount_Stddev_Pop_Fields = {
  __typename?: 'discount_stddev_pop_fields';
  /** 使用的行銷活動 id */
  campaign_id?: Maybe<Scalars['Float']['output']>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "discount" */
export type Discount_Stddev_Pop_Order_By = {
  /** 使用的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Discount_Stddev_Samp_Fields = {
  __typename?: 'discount_stddev_samp_fields';
  /** 使用的行銷活動 id */
  campaign_id?: Maybe<Scalars['Float']['output']>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "discount" */
export type Discount_Stddev_Samp_Order_By = {
  /** 使用的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "discount" */
export type Discount_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Discount_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Discount_Stream_Cursor_Value_Input = {
  /** 使用的行銷活動 id */
  campaign_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 適用的訂單開始時間區間（最早） */
  order_start_at_interval_from?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 適用的訂單開始時間區間（最晚） */
  order_start_at_interval_to?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Discount_Sum_Fields = {
  __typename?: 'discount_sum_fields';
  /** 使用的行銷活動 id */
  campaign_id?: Maybe<Scalars['bigint']['output']>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "discount" */
export type Discount_Sum_Order_By = {
  /** 使用的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Discount_Var_Pop_Fields = {
  __typename?: 'discount_var_pop_fields';
  /** 使用的行銷活動 id */
  campaign_id?: Maybe<Scalars['Float']['output']>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "discount" */
export type Discount_Var_Pop_Order_By = {
  /** 使用的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Discount_Var_Samp_Fields = {
  __typename?: 'discount_var_samp_fields';
  /** 使用的行銷活動 id */
  campaign_id?: Maybe<Scalars['Float']['output']>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "discount" */
export type Discount_Var_Samp_Order_By = {
  /** 使用的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Discount_Variance_Fields = {
  __typename?: 'discount_variance_fields';
  /** 使用的行銷活動 id */
  campaign_id?: Maybe<Scalars['Float']['output']>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "discount" */
export type Discount_Variance_Order_By = {
  /** 使用的行銷活動 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣金額，單位是新台幣元，例如 500 代表折 500 元 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "discountmethod". All fields are combined with logical 'AND'. */
export type Discountmethod_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['discountmethod']['input']>;
  _gt?: InputMaybe<Scalars['discountmethod']['input']>;
  _gte?: InputMaybe<Scalars['discountmethod']['input']>;
  _in?: InputMaybe<Array<Scalars['discountmethod']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['discountmethod']['input']>;
  _lte?: InputMaybe<Scalars['discountmethod']['input']>;
  _neq?: InputMaybe<Scalars['discountmethod']['input']>;
  _nin?: InputMaybe<Array<Scalars['discountmethod']['input']>>;
};

/** Boolean expression to compare columns of type "discounttarget". All fields are combined with logical 'AND'. */
export type Discounttarget_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['discounttarget']['input']>;
  _gt?: InputMaybe<Scalars['discounttarget']['input']>;
  _gte?: InputMaybe<Scalars['discounttarget']['input']>;
  _in?: InputMaybe<Array<Scalars['discounttarget']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['discounttarget']['input']>;
  _lte?: InputMaybe<Scalars['discounttarget']['input']>;
  _neq?: InputMaybe<Scalars['discounttarget']['input']>;
  _nin?: InputMaybe<Array<Scalars['discounttarget']['input']>>;
};

/** 發票開立紀錄，id 為發票開立流水號 */
export type Einvoice_Transaction = {
  __typename?: 'einvoice_transaction';
  /** An array relationship */
  allowance_jobs: Array<Allowance_Job>;
  /** An aggregate relationship */
  allowance_jobs_aggregate: Allowance_Job_Aggregate;
  /** 未稅價格 */
  amount_without_tax: Scalars['bigint']['output'];
  /** An object relationship */
  billing_transaction: Billing_Transaction;
  /** 備註 */
  comment?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 藍新的錯誤碼 */
  error_code?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  /** 發票編號 */
  invoice_number?: Maybe<Scalars['String']['output']>;
  /** ezPay 產生的電子發票開立序號 */
  invoice_trans_no?: Maybe<Scalars['String']['output']>;
  /** 發票開立編號：EzPay 開立發票所需的「商店自訂編號」 */
  merchant_order_no?: Maybe<Scalars['String']['output']>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: Maybe<Scalars['bigint']['output']>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt: Scalars['bigint']['output'];
  /** 商品描述；ProdDesc */
  statement: Scalars['String']['output'];
  /** 發票開立狀態 */
  status: Scalars['einvoicestatus']['output'];
  /** 稅金 */
  tax: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 發票開立紀錄，id 為發票開立流水號 */
export type Einvoice_TransactionAllowance_JobsArgs = {
  distinct_on?: InputMaybe<Array<Allowance_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Allowance_Job_Order_By>>;
  where?: InputMaybe<Allowance_Job_Bool_Exp>;
};


/** 發票開立紀錄，id 為發票開立流水號 */
export type Einvoice_TransactionAllowance_Jobs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Allowance_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Allowance_Job_Order_By>>;
  where?: InputMaybe<Allowance_Job_Bool_Exp>;
};

/** aggregated selection of "einvoice_transaction" */
export type Einvoice_Transaction_Aggregate = {
  __typename?: 'einvoice_transaction_aggregate';
  aggregate?: Maybe<Einvoice_Transaction_Aggregate_Fields>;
  nodes: Array<Einvoice_Transaction>;
};

export type Einvoice_Transaction_Aggregate_Bool_Exp = {
  count?: InputMaybe<Einvoice_Transaction_Aggregate_Bool_Exp_Count>;
};

export type Einvoice_Transaction_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Einvoice_Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Einvoice_Transaction_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "einvoice_transaction" */
export type Einvoice_Transaction_Aggregate_Fields = {
  __typename?: 'einvoice_transaction_aggregate_fields';
  avg?: Maybe<Einvoice_Transaction_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Einvoice_Transaction_Max_Fields>;
  min?: Maybe<Einvoice_Transaction_Min_Fields>;
  stddev?: Maybe<Einvoice_Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Einvoice_Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Einvoice_Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Einvoice_Transaction_Sum_Fields>;
  var_pop?: Maybe<Einvoice_Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Einvoice_Transaction_Var_Samp_Fields>;
  variance?: Maybe<Einvoice_Transaction_Variance_Fields>;
};


/** aggregate fields of "einvoice_transaction" */
export type Einvoice_Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Einvoice_Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "einvoice_transaction" */
export type Einvoice_Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Einvoice_Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Einvoice_Transaction_Max_Order_By>;
  min?: InputMaybe<Einvoice_Transaction_Min_Order_By>;
  stddev?: InputMaybe<Einvoice_Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Einvoice_Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Einvoice_Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Einvoice_Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Einvoice_Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Einvoice_Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Einvoice_Transaction_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Einvoice_Transaction_Avg_Fields = {
  __typename?: 'einvoice_transaction_avg_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: Maybe<Scalars['Float']['output']>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: Maybe<Scalars['Float']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "einvoice_transaction" */
export type Einvoice_Transaction_Avg_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "einvoice_transaction". All fields are combined with a logical 'AND'. */
export type Einvoice_Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Einvoice_Transaction_Bool_Exp>>;
  _not?: InputMaybe<Einvoice_Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Einvoice_Transaction_Bool_Exp>>;
  allowance_jobs?: InputMaybe<Allowance_Job_Bool_Exp>;
  allowance_jobs_aggregate?: InputMaybe<Allowance_Job_Aggregate_Bool_Exp>;
  amount_without_tax?: InputMaybe<Bigint_Comparison_Exp>;
  billing_transaction?: InputMaybe<Billing_Transaction_Bool_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  error_code?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  invoice_number?: InputMaybe<String_Comparison_Exp>;
  invoice_trans_no?: InputMaybe<String_Comparison_Exp>;
  merchant_order_no?: InputMaybe<String_Comparison_Exp>;
  order_transaction_id?: InputMaybe<Bigint_Comparison_Exp>;
  remain_amt?: InputMaybe<Bigint_Comparison_Exp>;
  statement?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Einvoicestatus_Comparison_Exp>;
  tax?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Einvoice_Transaction_Max_Fields = {
  __typename?: 'einvoice_transaction_max_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['bigint']['output']>;
  /** 備註 */
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 藍新的錯誤碼 */
  error_code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 發票編號 */
  invoice_number?: Maybe<Scalars['String']['output']>;
  /** ezPay 產生的電子發票開立序號 */
  invoice_trans_no?: Maybe<Scalars['String']['output']>;
  /** 發票開立編號：EzPay 開立發票所需的「商店自訂編號」 */
  merchant_order_no?: Maybe<Scalars['String']['output']>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: Maybe<Scalars['bigint']['output']>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: Maybe<Scalars['bigint']['output']>;
  /** 商品描述；ProdDesc */
  statement?: Maybe<Scalars['String']['output']>;
  /** 發票開立狀態 */
  status?: Maybe<Scalars['einvoicestatus']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "einvoice_transaction" */
export type Einvoice_Transaction_Max_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  /** 備註 */
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 藍新的錯誤碼 */
  error_code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 發票編號 */
  invoice_number?: InputMaybe<Order_By>;
  /** ezPay 產生的電子發票開立序號 */
  invoice_trans_no?: InputMaybe<Order_By>;
  /** 發票開立編號：EzPay 開立發票所需的「商店自訂編號」 */
  merchant_order_no?: InputMaybe<Order_By>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: InputMaybe<Order_By>;
  /** 商品描述；ProdDesc */
  statement?: InputMaybe<Order_By>;
  /** 發票開立狀態 */
  status?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Einvoice_Transaction_Min_Fields = {
  __typename?: 'einvoice_transaction_min_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['bigint']['output']>;
  /** 備註 */
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 藍新的錯誤碼 */
  error_code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 發票編號 */
  invoice_number?: Maybe<Scalars['String']['output']>;
  /** ezPay 產生的電子發票開立序號 */
  invoice_trans_no?: Maybe<Scalars['String']['output']>;
  /** 發票開立編號：EzPay 開立發票所需的「商店自訂編號」 */
  merchant_order_no?: Maybe<Scalars['String']['output']>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: Maybe<Scalars['bigint']['output']>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: Maybe<Scalars['bigint']['output']>;
  /** 商品描述；ProdDesc */
  statement?: Maybe<Scalars['String']['output']>;
  /** 發票開立狀態 */
  status?: Maybe<Scalars['einvoicestatus']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "einvoice_transaction" */
export type Einvoice_Transaction_Min_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  /** 備註 */
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 藍新的錯誤碼 */
  error_code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 發票編號 */
  invoice_number?: InputMaybe<Order_By>;
  /** ezPay 產生的電子發票開立序號 */
  invoice_trans_no?: InputMaybe<Order_By>;
  /** 發票開立編號：EzPay 開立發票所需的「商店自訂編號」 */
  merchant_order_no?: InputMaybe<Order_By>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: InputMaybe<Order_By>;
  /** 商品描述；ProdDesc */
  statement?: InputMaybe<Order_By>;
  /** 發票開立狀態 */
  status?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "einvoice_transaction". */
export type Einvoice_Transaction_Order_By = {
  allowance_jobs_aggregate?: InputMaybe<Allowance_Job_Aggregate_Order_By>;
  amount_without_tax?: InputMaybe<Order_By>;
  billing_transaction?: InputMaybe<Billing_Transaction_Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  error_code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invoice_number?: InputMaybe<Order_By>;
  invoice_trans_no?: InputMaybe<Order_By>;
  merchant_order_no?: InputMaybe<Order_By>;
  order_transaction_id?: InputMaybe<Order_By>;
  remain_amt?: InputMaybe<Order_By>;
  statement?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tax?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "einvoice_transaction" */
export enum Einvoice_Transaction_Select_Column {
  /** column name */
  AmountWithoutTax = 'amount_without_tax',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  ErrorCode = 'error_code',
  /** column name */
  Id = 'id',
  /** column name */
  InvoiceNumber = 'invoice_number',
  /** column name */
  InvoiceTransNo = 'invoice_trans_no',
  /** column name */
  MerchantOrderNo = 'merchant_order_no',
  /** column name */
  OrderTransactionId = 'order_transaction_id',
  /** column name */
  RemainAmt = 'remain_amt',
  /** column name */
  Statement = 'statement',
  /** column name */
  Status = 'status',
  /** column name */
  Tax = 'tax',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Einvoice_Transaction_Stddev_Fields = {
  __typename?: 'einvoice_transaction_stddev_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: Maybe<Scalars['Float']['output']>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: Maybe<Scalars['Float']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "einvoice_transaction" */
export type Einvoice_Transaction_Stddev_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Einvoice_Transaction_Stddev_Pop_Fields = {
  __typename?: 'einvoice_transaction_stddev_pop_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: Maybe<Scalars['Float']['output']>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: Maybe<Scalars['Float']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "einvoice_transaction" */
export type Einvoice_Transaction_Stddev_Pop_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Einvoice_Transaction_Stddev_Samp_Fields = {
  __typename?: 'einvoice_transaction_stddev_samp_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: Maybe<Scalars['Float']['output']>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: Maybe<Scalars['Float']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "einvoice_transaction" */
export type Einvoice_Transaction_Stddev_Samp_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "einvoice_transaction" */
export type Einvoice_Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Einvoice_Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Einvoice_Transaction_Stream_Cursor_Value_Input = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Scalars['bigint']['input']>;
  /** 備註 */
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 藍新的錯誤碼 */
  error_code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 發票編號 */
  invoice_number?: InputMaybe<Scalars['String']['input']>;
  /** ezPay 產生的電子發票開立序號 */
  invoice_trans_no?: InputMaybe<Scalars['String']['input']>;
  /** 發票開立編號：EzPay 開立發票所需的「商店自訂編號」 */
  merchant_order_no?: InputMaybe<Scalars['String']['input']>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: InputMaybe<Scalars['bigint']['input']>;
  /** 商品描述；ProdDesc */
  statement?: InputMaybe<Scalars['String']['input']>;
  /** 發票開立狀態 */
  status?: InputMaybe<Scalars['einvoicestatus']['input']>;
  /** 稅金 */
  tax?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Einvoice_Transaction_Sum_Fields = {
  __typename?: 'einvoice_transaction_sum_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: Maybe<Scalars['bigint']['output']>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: Maybe<Scalars['bigint']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "einvoice_transaction" */
export type Einvoice_Transaction_Sum_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Einvoice_Transaction_Var_Pop_Fields = {
  __typename?: 'einvoice_transaction_var_pop_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: Maybe<Scalars['Float']['output']>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: Maybe<Scalars['Float']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "einvoice_transaction" */
export type Einvoice_Transaction_Var_Pop_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Einvoice_Transaction_Var_Samp_Fields = {
  __typename?: 'einvoice_transaction_var_samp_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: Maybe<Scalars['Float']['output']>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: Maybe<Scalars['Float']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "einvoice_transaction" */
export type Einvoice_Transaction_Var_Samp_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Einvoice_Transaction_Variance_Fields = {
  __typename?: 'einvoice_transaction_variance_fields';
  /** 未稅價格 */
  amount_without_tax?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: Maybe<Scalars['Float']['output']>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: Maybe<Scalars['Float']['output']>;
  /** 稅金 */
  tax?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "einvoice_transaction" */
export type Einvoice_Transaction_Variance_Order_By = {
  /** 未稅價格 */
  amount_without_tax?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 即將被捨棄！請改存取 billing_transaction_id */
  order_transaction_id?: InputMaybe<Order_By>;
  /** 扣除折讓的剩餘金額（剩餘可折讓金額） */
  remain_amt?: InputMaybe<Order_By>;
  /** 稅金 */
  tax?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "einvoicestatus". All fields are combined with logical 'AND'. */
export type Einvoicestatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['einvoicestatus']['input']>;
  _gt?: InputMaybe<Scalars['einvoicestatus']['input']>;
  _gte?: InputMaybe<Scalars['einvoicestatus']['input']>;
  _in?: InputMaybe<Array<Scalars['einvoicestatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['einvoicestatus']['input']>;
  _lte?: InputMaybe<Scalars['einvoicestatus']['input']>;
  _neq?: InputMaybe<Scalars['einvoicestatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['einvoicestatus']['input']>>;
};

/** 超里程/超時費用 */
export type Exceed_Rate = {
  __typename?: 'exceed_rate';
  /** 可接受超時（時間內不加收費用） */
  acceptable_overtime?: Maybe<Scalars['interval']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: Maybe<Scalars['float8']['output']>;
  /** An object relationship */
  fleet: Fleet;
  fleet_id: Scalars['bigint']['output'];
  id: Scalars['bigint']['output'];
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: Maybe<Scalars['float8']['output']>;
  /** 每日行駛里程上限 */
  maximum_mileage?: Maybe<Scalars['float8']['output']>;
  /** 最高可接受超時，超過視為一日費用 */
  maximum_overtime?: Maybe<Scalars['interval']['output']>;
  /** 超時費率 */
  overtime_rate: Scalars['float8']['output'];
  /** 超時計時單位 */
  overtime_unit: Scalars['timeunit']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  vehicle_model: Vehicle_Model;
  vehicle_model_id: Scalars['bigint']['output'];
};

/** aggregated selection of "exceed_rate" */
export type Exceed_Rate_Aggregate = {
  __typename?: 'exceed_rate_aggregate';
  aggregate?: Maybe<Exceed_Rate_Aggregate_Fields>;
  nodes: Array<Exceed_Rate>;
};

export type Exceed_Rate_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Exceed_Rate_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Exceed_Rate_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Exceed_Rate_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Exceed_Rate_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Exceed_Rate_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Exceed_Rate_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Exceed_Rate_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Exceed_Rate_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Exceed_Rate_Aggregate_Bool_Exp_Var_Samp>;
};

export type Exceed_Rate_Aggregate_Bool_Exp_Avg = {
  arguments: Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Exceed_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Exceed_Rate_Aggregate_Bool_Exp_Corr = {
  arguments: Exceed_Rate_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Exceed_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Exceed_Rate_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Exceed_Rate_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Exceed_Rate_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Exceed_Rate_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Exceed_Rate_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Exceed_Rate_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Exceed_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Exceed_Rate_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Exceed_Rate_Aggregate_Bool_Exp_Max = {
  arguments: Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Exceed_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Exceed_Rate_Aggregate_Bool_Exp_Min = {
  arguments: Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Exceed_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Exceed_Rate_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Exceed_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Exceed_Rate_Aggregate_Bool_Exp_Sum = {
  arguments: Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Exceed_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Exceed_Rate_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Exceed_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "exceed_rate" */
export type Exceed_Rate_Aggregate_Fields = {
  __typename?: 'exceed_rate_aggregate_fields';
  avg?: Maybe<Exceed_Rate_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Exceed_Rate_Max_Fields>;
  min?: Maybe<Exceed_Rate_Min_Fields>;
  stddev?: Maybe<Exceed_Rate_Stddev_Fields>;
  stddev_pop?: Maybe<Exceed_Rate_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Exceed_Rate_Stddev_Samp_Fields>;
  sum?: Maybe<Exceed_Rate_Sum_Fields>;
  var_pop?: Maybe<Exceed_Rate_Var_Pop_Fields>;
  var_samp?: Maybe<Exceed_Rate_Var_Samp_Fields>;
  variance?: Maybe<Exceed_Rate_Variance_Fields>;
};


/** aggregate fields of "exceed_rate" */
export type Exceed_Rate_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exceed_Rate_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "exceed_rate" */
export type Exceed_Rate_Aggregate_Order_By = {
  avg?: InputMaybe<Exceed_Rate_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exceed_Rate_Max_Order_By>;
  min?: InputMaybe<Exceed_Rate_Min_Order_By>;
  stddev?: InputMaybe<Exceed_Rate_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Exceed_Rate_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Exceed_Rate_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Exceed_Rate_Sum_Order_By>;
  var_pop?: InputMaybe<Exceed_Rate_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Exceed_Rate_Var_Samp_Order_By>;
  variance?: InputMaybe<Exceed_Rate_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Exceed_Rate_Avg_Fields = {
  __typename?: 'exceed_rate_avg_fields';
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: Maybe<Scalars['Float']['output']>;
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: Maybe<Scalars['Float']['output']>;
  /** 每日行駛里程上限 */
  maximum_mileage?: Maybe<Scalars['Float']['output']>;
  /** 超時費率 */
  overtime_rate?: Maybe<Scalars['Float']['output']>;
  vehicle_model_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "exceed_rate" */
export type Exceed_Rate_Avg_Order_By = {
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: InputMaybe<Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: InputMaybe<Order_By>;
  /** 每日行駛里程上限 */
  maximum_mileage?: InputMaybe<Order_By>;
  /** 超時費率 */
  overtime_rate?: InputMaybe<Order_By>;
  vehicle_model_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "exceed_rate". All fields are combined with a logical 'AND'. */
export type Exceed_Rate_Bool_Exp = {
  _and?: InputMaybe<Array<Exceed_Rate_Bool_Exp>>;
  _not?: InputMaybe<Exceed_Rate_Bool_Exp>;
  _or?: InputMaybe<Array<Exceed_Rate_Bool_Exp>>;
  acceptable_overtime?: InputMaybe<Interval_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  exceed_mileage_rate?: InputMaybe<Float8_Comparison_Exp>;
  fleet?: InputMaybe<Fleet_Bool_Exp>;
  fleet_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  maximum_charge_percentage?: InputMaybe<Float8_Comparison_Exp>;
  maximum_mileage?: InputMaybe<Float8_Comparison_Exp>;
  maximum_overtime?: InputMaybe<Interval_Comparison_Exp>;
  overtime_rate?: InputMaybe<Float8_Comparison_Exp>;
  overtime_unit?: InputMaybe<Timeunit_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle_model?: InputMaybe<Vehicle_Model_Bool_Exp>;
  vehicle_model_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Exceed_Rate_Max_Fields = {
  __typename?: 'exceed_rate_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: Maybe<Scalars['float8']['output']>;
  fleet_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: Maybe<Scalars['float8']['output']>;
  /** 每日行駛里程上限 */
  maximum_mileage?: Maybe<Scalars['float8']['output']>;
  /** 超時費率 */
  overtime_rate?: Maybe<Scalars['float8']['output']>;
  /** 超時計時單位 */
  overtime_unit?: Maybe<Scalars['timeunit']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vehicle_model_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "exceed_rate" */
export type Exceed_Rate_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: InputMaybe<Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: InputMaybe<Order_By>;
  /** 每日行駛里程上限 */
  maximum_mileage?: InputMaybe<Order_By>;
  /** 超時費率 */
  overtime_rate?: InputMaybe<Order_By>;
  /** 超時計時單位 */
  overtime_unit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_model_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Exceed_Rate_Min_Fields = {
  __typename?: 'exceed_rate_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: Maybe<Scalars['float8']['output']>;
  fleet_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: Maybe<Scalars['float8']['output']>;
  /** 每日行駛里程上限 */
  maximum_mileage?: Maybe<Scalars['float8']['output']>;
  /** 超時費率 */
  overtime_rate?: Maybe<Scalars['float8']['output']>;
  /** 超時計時單位 */
  overtime_unit?: Maybe<Scalars['timeunit']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vehicle_model_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "exceed_rate" */
export type Exceed_Rate_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: InputMaybe<Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: InputMaybe<Order_By>;
  /** 每日行駛里程上限 */
  maximum_mileage?: InputMaybe<Order_By>;
  /** 超時費率 */
  overtime_rate?: InputMaybe<Order_By>;
  /** 超時計時單位 */
  overtime_unit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_model_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "exceed_rate". */
export type Exceed_Rate_Order_By = {
  acceptable_overtime?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  exceed_mileage_rate?: InputMaybe<Order_By>;
  fleet?: InputMaybe<Fleet_Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  maximum_charge_percentage?: InputMaybe<Order_By>;
  maximum_mileage?: InputMaybe<Order_By>;
  maximum_overtime?: InputMaybe<Order_By>;
  overtime_rate?: InputMaybe<Order_By>;
  overtime_unit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_model?: InputMaybe<Vehicle_Model_Order_By>;
  vehicle_model_id?: InputMaybe<Order_By>;
};

/** select columns of table "exceed_rate" */
export enum Exceed_Rate_Select_Column {
  /** column name */
  AcceptableOvertime = 'acceptable_overtime',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExceedMileageRate = 'exceed_mileage_rate',
  /** column name */
  FleetId = 'fleet_id',
  /** column name */
  Id = 'id',
  /** column name */
  MaximumChargePercentage = 'maximum_charge_percentage',
  /** column name */
  MaximumMileage = 'maximum_mileage',
  /** column name */
  MaximumOvertime = 'maximum_overtime',
  /** column name */
  OvertimeRate = 'overtime_rate',
  /** column name */
  OvertimeUnit = 'overtime_unit',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleModelId = 'vehicle_model_id'
}

/** select "exceed_rate_aggregate_bool_exp_avg_arguments_columns" columns of table "exceed_rate" */
export enum Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  ExceedMileageRate = 'exceed_mileage_rate',
  /** column name */
  MaximumChargePercentage = 'maximum_charge_percentage',
  /** column name */
  MaximumMileage = 'maximum_mileage',
  /** column name */
  OvertimeRate = 'overtime_rate'
}

/** select "exceed_rate_aggregate_bool_exp_corr_arguments_columns" columns of table "exceed_rate" */
export enum Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  ExceedMileageRate = 'exceed_mileage_rate',
  /** column name */
  MaximumChargePercentage = 'maximum_charge_percentage',
  /** column name */
  MaximumMileage = 'maximum_mileage',
  /** column name */
  OvertimeRate = 'overtime_rate'
}

/** select "exceed_rate_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "exceed_rate" */
export enum Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  ExceedMileageRate = 'exceed_mileage_rate',
  /** column name */
  MaximumChargePercentage = 'maximum_charge_percentage',
  /** column name */
  MaximumMileage = 'maximum_mileage',
  /** column name */
  OvertimeRate = 'overtime_rate'
}

/** select "exceed_rate_aggregate_bool_exp_max_arguments_columns" columns of table "exceed_rate" */
export enum Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  ExceedMileageRate = 'exceed_mileage_rate',
  /** column name */
  MaximumChargePercentage = 'maximum_charge_percentage',
  /** column name */
  MaximumMileage = 'maximum_mileage',
  /** column name */
  OvertimeRate = 'overtime_rate'
}

/** select "exceed_rate_aggregate_bool_exp_min_arguments_columns" columns of table "exceed_rate" */
export enum Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  ExceedMileageRate = 'exceed_mileage_rate',
  /** column name */
  MaximumChargePercentage = 'maximum_charge_percentage',
  /** column name */
  MaximumMileage = 'maximum_mileage',
  /** column name */
  OvertimeRate = 'overtime_rate'
}

/** select "exceed_rate_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "exceed_rate" */
export enum Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  ExceedMileageRate = 'exceed_mileage_rate',
  /** column name */
  MaximumChargePercentage = 'maximum_charge_percentage',
  /** column name */
  MaximumMileage = 'maximum_mileage',
  /** column name */
  OvertimeRate = 'overtime_rate'
}

/** select "exceed_rate_aggregate_bool_exp_sum_arguments_columns" columns of table "exceed_rate" */
export enum Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  ExceedMileageRate = 'exceed_mileage_rate',
  /** column name */
  MaximumChargePercentage = 'maximum_charge_percentage',
  /** column name */
  MaximumMileage = 'maximum_mileage',
  /** column name */
  OvertimeRate = 'overtime_rate'
}

/** select "exceed_rate_aggregate_bool_exp_var_samp_arguments_columns" columns of table "exceed_rate" */
export enum Exceed_Rate_Select_Column_Exceed_Rate_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  ExceedMileageRate = 'exceed_mileage_rate',
  /** column name */
  MaximumChargePercentage = 'maximum_charge_percentage',
  /** column name */
  MaximumMileage = 'maximum_mileage',
  /** column name */
  OvertimeRate = 'overtime_rate'
}

/** aggregate stddev on columns */
export type Exceed_Rate_Stddev_Fields = {
  __typename?: 'exceed_rate_stddev_fields';
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: Maybe<Scalars['Float']['output']>;
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: Maybe<Scalars['Float']['output']>;
  /** 每日行駛里程上限 */
  maximum_mileage?: Maybe<Scalars['Float']['output']>;
  /** 超時費率 */
  overtime_rate?: Maybe<Scalars['Float']['output']>;
  vehicle_model_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "exceed_rate" */
export type Exceed_Rate_Stddev_Order_By = {
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: InputMaybe<Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: InputMaybe<Order_By>;
  /** 每日行駛里程上限 */
  maximum_mileage?: InputMaybe<Order_By>;
  /** 超時費率 */
  overtime_rate?: InputMaybe<Order_By>;
  vehicle_model_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Exceed_Rate_Stddev_Pop_Fields = {
  __typename?: 'exceed_rate_stddev_pop_fields';
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: Maybe<Scalars['Float']['output']>;
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: Maybe<Scalars['Float']['output']>;
  /** 每日行駛里程上限 */
  maximum_mileage?: Maybe<Scalars['Float']['output']>;
  /** 超時費率 */
  overtime_rate?: Maybe<Scalars['Float']['output']>;
  vehicle_model_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "exceed_rate" */
export type Exceed_Rate_Stddev_Pop_Order_By = {
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: InputMaybe<Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: InputMaybe<Order_By>;
  /** 每日行駛里程上限 */
  maximum_mileage?: InputMaybe<Order_By>;
  /** 超時費率 */
  overtime_rate?: InputMaybe<Order_By>;
  vehicle_model_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Exceed_Rate_Stddev_Samp_Fields = {
  __typename?: 'exceed_rate_stddev_samp_fields';
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: Maybe<Scalars['Float']['output']>;
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: Maybe<Scalars['Float']['output']>;
  /** 每日行駛里程上限 */
  maximum_mileage?: Maybe<Scalars['Float']['output']>;
  /** 超時費率 */
  overtime_rate?: Maybe<Scalars['Float']['output']>;
  vehicle_model_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "exceed_rate" */
export type Exceed_Rate_Stddev_Samp_Order_By = {
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: InputMaybe<Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: InputMaybe<Order_By>;
  /** 每日行駛里程上限 */
  maximum_mileage?: InputMaybe<Order_By>;
  /** 超時費率 */
  overtime_rate?: InputMaybe<Order_By>;
  vehicle_model_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "exceed_rate" */
export type Exceed_Rate_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Exceed_Rate_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Exceed_Rate_Stream_Cursor_Value_Input = {
  /** 可接受超時（時間內不加收費用） */
  acceptable_overtime?: InputMaybe<Scalars['interval']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: InputMaybe<Scalars['float8']['input']>;
  fleet_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: InputMaybe<Scalars['float8']['input']>;
  /** 每日行駛里程上限 */
  maximum_mileage?: InputMaybe<Scalars['float8']['input']>;
  /** 最高可接受超時，超過視為一日費用 */
  maximum_overtime?: InputMaybe<Scalars['interval']['input']>;
  /** 超時費率 */
  overtime_rate?: InputMaybe<Scalars['float8']['input']>;
  /** 超時計時單位 */
  overtime_unit?: InputMaybe<Scalars['timeunit']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vehicle_model_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Exceed_Rate_Sum_Fields = {
  __typename?: 'exceed_rate_sum_fields';
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: Maybe<Scalars['float8']['output']>;
  fleet_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: Maybe<Scalars['float8']['output']>;
  /** 每日行駛里程上限 */
  maximum_mileage?: Maybe<Scalars['float8']['output']>;
  /** 超時費率 */
  overtime_rate?: Maybe<Scalars['float8']['output']>;
  vehicle_model_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "exceed_rate" */
export type Exceed_Rate_Sum_Order_By = {
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: InputMaybe<Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: InputMaybe<Order_By>;
  /** 每日行駛里程上限 */
  maximum_mileage?: InputMaybe<Order_By>;
  /** 超時費率 */
  overtime_rate?: InputMaybe<Order_By>;
  vehicle_model_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Exceed_Rate_Var_Pop_Fields = {
  __typename?: 'exceed_rate_var_pop_fields';
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: Maybe<Scalars['Float']['output']>;
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: Maybe<Scalars['Float']['output']>;
  /** 每日行駛里程上限 */
  maximum_mileage?: Maybe<Scalars['Float']['output']>;
  /** 超時費率 */
  overtime_rate?: Maybe<Scalars['Float']['output']>;
  vehicle_model_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "exceed_rate" */
export type Exceed_Rate_Var_Pop_Order_By = {
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: InputMaybe<Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: InputMaybe<Order_By>;
  /** 每日行駛里程上限 */
  maximum_mileage?: InputMaybe<Order_By>;
  /** 超時費率 */
  overtime_rate?: InputMaybe<Order_By>;
  vehicle_model_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Exceed_Rate_Var_Samp_Fields = {
  __typename?: 'exceed_rate_var_samp_fields';
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: Maybe<Scalars['Float']['output']>;
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: Maybe<Scalars['Float']['output']>;
  /** 每日行駛里程上限 */
  maximum_mileage?: Maybe<Scalars['Float']['output']>;
  /** 超時費率 */
  overtime_rate?: Maybe<Scalars['Float']['output']>;
  vehicle_model_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "exceed_rate" */
export type Exceed_Rate_Var_Samp_Order_By = {
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: InputMaybe<Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: InputMaybe<Order_By>;
  /** 每日行駛里程上限 */
  maximum_mileage?: InputMaybe<Order_By>;
  /** 超時費率 */
  overtime_rate?: InputMaybe<Order_By>;
  vehicle_model_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Exceed_Rate_Variance_Fields = {
  __typename?: 'exceed_rate_variance_fields';
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: Maybe<Scalars['Float']['output']>;
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: Maybe<Scalars['Float']['output']>;
  /** 每日行駛里程上限 */
  maximum_mileage?: Maybe<Scalars['Float']['output']>;
  /** 超時費率 */
  overtime_rate?: Maybe<Scalars['Float']['output']>;
  vehicle_model_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "exceed_rate" */
export type Exceed_Rate_Variance_Order_By = {
  /** 超里程每公里費率，費用/每公里 */
  exceed_mileage_rate?: InputMaybe<Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 超里程費最高收費百分比/當日 */
  maximum_charge_percentage?: InputMaybe<Order_By>;
  /** 每日行駛里程上限 */
  maximum_mileage?: InputMaybe<Order_By>;
  /** 超時費率 */
  overtime_rate?: InputMaybe<Order_By>;
  vehicle_model_id?: InputMaybe<Order_By>;
};

/** 紀錄使用者每個設備上有效的 Firebase Cloud Messaging registration token */
export type Firebase_Cm_Registration_Token = {
  __typename?: 'firebase_cm_registration_token';
  created_at: Scalars['timestamptz']['output'];
  /** 設備 UUID, 但允許兩個不同使用者可以擁有相同 fingerprint */
  fingerprint: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  /** Device Platform Info */
  platform?: Maybe<Scalars['String']['output']>;
  /** FCM client 產生的識別碼 */
  registration_token: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: User;
  /** 對應的使用者 */
  user_id: Scalars['bigint']['output'];
};

/** order by aggregate values of table "firebase_cm_registration_token" */
export type Firebase_Cm_Registration_Token_Aggregate_Order_By = {
  avg?: InputMaybe<Firebase_Cm_Registration_Token_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Firebase_Cm_Registration_Token_Max_Order_By>;
  min?: InputMaybe<Firebase_Cm_Registration_Token_Min_Order_By>;
  stddev?: InputMaybe<Firebase_Cm_Registration_Token_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Firebase_Cm_Registration_Token_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Firebase_Cm_Registration_Token_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Firebase_Cm_Registration_Token_Sum_Order_By>;
  var_pop?: InputMaybe<Firebase_Cm_Registration_Token_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Firebase_Cm_Registration_Token_Var_Samp_Order_By>;
  variance?: InputMaybe<Firebase_Cm_Registration_Token_Variance_Order_By>;
};

/** order by avg() on columns of table "firebase_cm_registration_token" */
export type Firebase_Cm_Registration_Token_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應的使用者 */
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "firebase_cm_registration_token". All fields are combined with a logical 'AND'. */
export type Firebase_Cm_Registration_Token_Bool_Exp = {
  _and?: InputMaybe<Array<Firebase_Cm_Registration_Token_Bool_Exp>>;
  _not?: InputMaybe<Firebase_Cm_Registration_Token_Bool_Exp>;
  _or?: InputMaybe<Array<Firebase_Cm_Registration_Token_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  fingerprint?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  platform?: InputMaybe<String_Comparison_Exp>;
  registration_token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** order by max() on columns of table "firebase_cm_registration_token" */
export type Firebase_Cm_Registration_Token_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 設備 UUID, 但允許兩個不同使用者可以擁有相同 fingerprint */
  fingerprint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Device Platform Info */
  platform?: InputMaybe<Order_By>;
  /** FCM client 產生的識別碼 */
  registration_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 對應的使用者 */
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "firebase_cm_registration_token" */
export type Firebase_Cm_Registration_Token_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 設備 UUID, 但允許兩個不同使用者可以擁有相同 fingerprint */
  fingerprint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Device Platform Info */
  platform?: InputMaybe<Order_By>;
  /** FCM client 產生的識別碼 */
  registration_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 對應的使用者 */
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "firebase_cm_registration_token". */
export type Firebase_Cm_Registration_Token_Order_By = {
  created_at?: InputMaybe<Order_By>;
  fingerprint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform?: InputMaybe<Order_By>;
  registration_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "firebase_cm_registration_token" */
export enum Firebase_Cm_Registration_Token_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Fingerprint = 'fingerprint',
  /** column name */
  Id = 'id',
  /** column name */
  Platform = 'platform',
  /** column name */
  RegistrationToken = 'registration_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** order by stddev() on columns of table "firebase_cm_registration_token" */
export type Firebase_Cm_Registration_Token_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應的使用者 */
  user_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "firebase_cm_registration_token" */
export type Firebase_Cm_Registration_Token_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應的使用者 */
  user_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "firebase_cm_registration_token" */
export type Firebase_Cm_Registration_Token_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應的使用者 */
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "firebase_cm_registration_token" */
export type Firebase_Cm_Registration_Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Firebase_Cm_Registration_Token_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Firebase_Cm_Registration_Token_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 設備 UUID, 但允許兩個不同使用者可以擁有相同 fingerprint */
  fingerprint?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** Device Platform Info */
  platform?: InputMaybe<Scalars['String']['input']>;
  /** FCM client 產生的識別碼 */
  registration_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 對應的使用者 */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** order by sum() on columns of table "firebase_cm_registration_token" */
export type Firebase_Cm_Registration_Token_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應的使用者 */
  user_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "firebase_cm_registration_token" */
export type Firebase_Cm_Registration_Token_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應的使用者 */
  user_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "firebase_cm_registration_token" */
export type Firebase_Cm_Registration_Token_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應的使用者 */
  user_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "firebase_cm_registration_token" */
export type Firebase_Cm_Registration_Token_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 對應的使用者 */
  user_id?: InputMaybe<Order_By>;
};

/** 車隊 */
export type Fleet = {
  __typename?: 'fleet';
  /** 可延後取車時間 */
  delayed_pickup_interval: Scalars['interval']['output'];
  /** 可提前取車時間 */
  early_pickup_interval: Scalars['interval']['output'];
  /** An array relationship */
  exceed_rates: Array<Exceed_Rate>;
  /** An aggregate relationship */
  exceed_rates_aggregate: Exceed_Rate_Aggregate;
  id: Scalars['bigint']['output'];
  /** 距離現在時刻起算，訂單最晚可預約的用車起始時間 */
  max_order_start_at_interval: Scalars['interval']['output'];
  /** 訂單鎖定時間, 距離用車起始時間 x 小時內不可再修改訂單用車時間 */
  order_lock_interval: Scalars['interval']['output'];
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate;
  /** An object relationship */
  organization: Organization;
  /** An object relationship */
  rental_company: Rental_Company;
  rental_company_id: Scalars['bigint']['output'];
  /** 遲還保留時間(訂單間隔時間參數2) */
  return_reserved_interval: Scalars['interval']['output'];
  /** 距離現在時刻起算，自助取車訂單最早可預約的用車起始時間 */
  self_pickup_earliest_order_start_at_interval: Scalars['interval']['output'];
  /** An array relationship */
  stations: Array<Station>;
  /** An aggregate relationship */
  stations_aggregate: Station_Aggregate;
  /** 距離現在時刻起算，門市取車訂單最早可預約的用車起始時間 */
  store_pickup_earliest_order_start_at_interval: Scalars['interval']['output'];
  /** 車隊/分行電話 */
  telephone: Scalars['String']['output'];
  /** 車輛整備時間(訂單間隔時間參數1) */
  vehicle_preparing_interval: Scalars['interval']['output'];
  /** An array relationship */
  vehicles: Array<Vehicle>;
  /** An aggregate relationship */
  vehicles_aggregate: Vehicle_Aggregate;
};


/** 車隊 */
export type FleetExceed_RatesArgs = {
  distinct_on?: InputMaybe<Array<Exceed_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exceed_Rate_Order_By>>;
  where?: InputMaybe<Exceed_Rate_Bool_Exp>;
};


/** 車隊 */
export type FleetExceed_Rates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exceed_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exceed_Rate_Order_By>>;
  where?: InputMaybe<Exceed_Rate_Bool_Exp>;
};


/** 車隊 */
export type FleetOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** 車隊 */
export type FleetOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** 車隊 */
export type FleetStationsArgs = {
  distinct_on?: InputMaybe<Array<Station_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Station_Order_By>>;
  where?: InputMaybe<Station_Bool_Exp>;
};


/** 車隊 */
export type FleetStations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Station_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Station_Order_By>>;
  where?: InputMaybe<Station_Bool_Exp>;
};


/** 車隊 */
export type FleetVehiclesArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};


/** 車隊 */
export type FleetVehicles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};

/** aggregated selection of "fleet" */
export type Fleet_Aggregate = {
  __typename?: 'fleet_aggregate';
  aggregate?: Maybe<Fleet_Aggregate_Fields>;
  nodes: Array<Fleet>;
};

export type Fleet_Aggregate_Bool_Exp = {
  count?: InputMaybe<Fleet_Aggregate_Bool_Exp_Count>;
};

export type Fleet_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Fleet_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Fleet_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "fleet" */
export type Fleet_Aggregate_Fields = {
  __typename?: 'fleet_aggregate_fields';
  avg?: Maybe<Fleet_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Fleet_Max_Fields>;
  min?: Maybe<Fleet_Min_Fields>;
  stddev?: Maybe<Fleet_Stddev_Fields>;
  stddev_pop?: Maybe<Fleet_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fleet_Stddev_Samp_Fields>;
  sum?: Maybe<Fleet_Sum_Fields>;
  var_pop?: Maybe<Fleet_Var_Pop_Fields>;
  var_samp?: Maybe<Fleet_Var_Samp_Fields>;
  variance?: Maybe<Fleet_Variance_Fields>;
};


/** aggregate fields of "fleet" */
export type Fleet_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fleet_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "fleet" */
export type Fleet_Aggregate_Order_By = {
  avg?: InputMaybe<Fleet_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Fleet_Max_Order_By>;
  min?: InputMaybe<Fleet_Min_Order_By>;
  stddev?: InputMaybe<Fleet_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Fleet_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Fleet_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Fleet_Sum_Order_By>;
  var_pop?: InputMaybe<Fleet_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Fleet_Var_Samp_Order_By>;
  variance?: InputMaybe<Fleet_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Fleet_Avg_Fields = {
  __typename?: 'fleet_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "fleet" */
export type Fleet_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "fleet". All fields are combined with a logical 'AND'. */
export type Fleet_Bool_Exp = {
  _and?: InputMaybe<Array<Fleet_Bool_Exp>>;
  _not?: InputMaybe<Fleet_Bool_Exp>;
  _or?: InputMaybe<Array<Fleet_Bool_Exp>>;
  delayed_pickup_interval?: InputMaybe<Interval_Comparison_Exp>;
  early_pickup_interval?: InputMaybe<Interval_Comparison_Exp>;
  exceed_rates?: InputMaybe<Exceed_Rate_Bool_Exp>;
  exceed_rates_aggregate?: InputMaybe<Exceed_Rate_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  max_order_start_at_interval?: InputMaybe<Interval_Comparison_Exp>;
  order_lock_interval?: InputMaybe<Interval_Comparison_Exp>;
  orders?: InputMaybe<Order_Bool_Exp>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Bool_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  rental_company?: InputMaybe<Rental_Company_Bool_Exp>;
  rental_company_id?: InputMaybe<Bigint_Comparison_Exp>;
  return_reserved_interval?: InputMaybe<Interval_Comparison_Exp>;
  self_pickup_earliest_order_start_at_interval?: InputMaybe<Interval_Comparison_Exp>;
  stations?: InputMaybe<Station_Bool_Exp>;
  stations_aggregate?: InputMaybe<Station_Aggregate_Bool_Exp>;
  store_pickup_earliest_order_start_at_interval?: InputMaybe<Interval_Comparison_Exp>;
  telephone?: InputMaybe<String_Comparison_Exp>;
  vehicle_preparing_interval?: InputMaybe<Interval_Comparison_Exp>;
  vehicles?: InputMaybe<Vehicle_Bool_Exp>;
  vehicles_aggregate?: InputMaybe<Vehicle_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Fleet_Max_Fields = {
  __typename?: 'fleet_max_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  /** 車隊/分行電話 */
  telephone?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "fleet" */
export type Fleet_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  /** 車隊/分行電話 */
  telephone?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Fleet_Min_Fields = {
  __typename?: 'fleet_min_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  /** 車隊/分行電話 */
  telephone?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "fleet" */
export type Fleet_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  /** 車隊/分行電話 */
  telephone?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "fleet". */
export type Fleet_Order_By = {
  delayed_pickup_interval?: InputMaybe<Order_By>;
  early_pickup_interval?: InputMaybe<Order_By>;
  exceed_rates_aggregate?: InputMaybe<Exceed_Rate_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  max_order_start_at_interval?: InputMaybe<Order_By>;
  order_lock_interval?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  rental_company?: InputMaybe<Rental_Company_Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  return_reserved_interval?: InputMaybe<Order_By>;
  self_pickup_earliest_order_start_at_interval?: InputMaybe<Order_By>;
  stations_aggregate?: InputMaybe<Station_Aggregate_Order_By>;
  store_pickup_earliest_order_start_at_interval?: InputMaybe<Order_By>;
  telephone?: InputMaybe<Order_By>;
  vehicle_preparing_interval?: InputMaybe<Order_By>;
  vehicles_aggregate?: InputMaybe<Vehicle_Aggregate_Order_By>;
};

/** select columns of table "fleet" */
export enum Fleet_Select_Column {
  /** column name */
  DelayedPickupInterval = 'delayed_pickup_interval',
  /** column name */
  EarlyPickupInterval = 'early_pickup_interval',
  /** column name */
  Id = 'id',
  /** column name */
  MaxOrderStartAtInterval = 'max_order_start_at_interval',
  /** column name */
  OrderLockInterval = 'order_lock_interval',
  /** column name */
  RentalCompanyId = 'rental_company_id',
  /** column name */
  ReturnReservedInterval = 'return_reserved_interval',
  /** column name */
  SelfPickupEarliestOrderStartAtInterval = 'self_pickup_earliest_order_start_at_interval',
  /** column name */
  StorePickupEarliestOrderStartAtInterval = 'store_pickup_earliest_order_start_at_interval',
  /** column name */
  Telephone = 'telephone',
  /** column name */
  VehiclePreparingInterval = 'vehicle_preparing_interval'
}

/** aggregate stddev on columns */
export type Fleet_Stddev_Fields = {
  __typename?: 'fleet_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "fleet" */
export type Fleet_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Fleet_Stddev_Pop_Fields = {
  __typename?: 'fleet_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "fleet" */
export type Fleet_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Fleet_Stddev_Samp_Fields = {
  __typename?: 'fleet_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "fleet" */
export type Fleet_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "fleet" */
export type Fleet_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fleet_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fleet_Stream_Cursor_Value_Input = {
  /** 可延後取車時間 */
  delayed_pickup_interval?: InputMaybe<Scalars['interval']['input']>;
  /** 可提前取車時間 */
  early_pickup_interval?: InputMaybe<Scalars['interval']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 距離現在時刻起算，訂單最晚可預約的用車起始時間 */
  max_order_start_at_interval?: InputMaybe<Scalars['interval']['input']>;
  /** 訂單鎖定時間, 距離用車起始時間 x 小時內不可再修改訂單用車時間 */
  order_lock_interval?: InputMaybe<Scalars['interval']['input']>;
  rental_company_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 遲還保留時間(訂單間隔時間參數2) */
  return_reserved_interval?: InputMaybe<Scalars['interval']['input']>;
  /** 距離現在時刻起算，自助取車訂單最早可預約的用車起始時間 */
  self_pickup_earliest_order_start_at_interval?: InputMaybe<Scalars['interval']['input']>;
  /** 距離現在時刻起算，門市取車訂單最早可預約的用車起始時間 */
  store_pickup_earliest_order_start_at_interval?: InputMaybe<Scalars['interval']['input']>;
  /** 車隊/分行電話 */
  telephone?: InputMaybe<Scalars['String']['input']>;
  /** 車輛整備時間(訂單間隔時間參數1) */
  vehicle_preparing_interval?: InputMaybe<Scalars['interval']['input']>;
};

/** aggregate sum on columns */
export type Fleet_Sum_Fields = {
  __typename?: 'fleet_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "fleet" */
export type Fleet_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Fleet_Var_Pop_Fields = {
  __typename?: 'fleet_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "fleet" */
export type Fleet_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Fleet_Var_Samp_Fields = {
  __typename?: 'fleet_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "fleet" */
export type Fleet_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Fleet_Variance_Fields = {
  __typename?: 'fleet_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "fleet" */
export type Fleet_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** 產生合約工作紀錄 */
export type Generate_Contract_Job = {
  __typename?: 'generate_contract_job';
  /** 備註 */
  comment?: Maybe<Scalars['String']['output']>;
  /** 租賃合約 Google Cloud Storage 儲存位址 */
  contract_path?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 錯誤訊息 */
  error_message?: Maybe<Scalars['String']['output']>;
  /** 執行時長 */
  execution_interval?: Maybe<Scalars['interval']['output']>;
  id: Scalars['bigint']['output'];
  /** An object relationship */
  order: Order;
  /** 產生合約工作對應的訂單 id */
  order_id: Scalars['bigint']['output'];
  /** 執行狀態 */
  status: Scalars['generatecontractjobstatus']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "generate_contract_job" */
export type Generate_Contract_Job_Aggregate = {
  __typename?: 'generate_contract_job_aggregate';
  aggregate?: Maybe<Generate_Contract_Job_Aggregate_Fields>;
  nodes: Array<Generate_Contract_Job>;
};

export type Generate_Contract_Job_Aggregate_Bool_Exp = {
  count?: InputMaybe<Generate_Contract_Job_Aggregate_Bool_Exp_Count>;
};

export type Generate_Contract_Job_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Generate_Contract_Job_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Generate_Contract_Job_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "generate_contract_job" */
export type Generate_Contract_Job_Aggregate_Fields = {
  __typename?: 'generate_contract_job_aggregate_fields';
  avg?: Maybe<Generate_Contract_Job_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Generate_Contract_Job_Max_Fields>;
  min?: Maybe<Generate_Contract_Job_Min_Fields>;
  stddev?: Maybe<Generate_Contract_Job_Stddev_Fields>;
  stddev_pop?: Maybe<Generate_Contract_Job_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Generate_Contract_Job_Stddev_Samp_Fields>;
  sum?: Maybe<Generate_Contract_Job_Sum_Fields>;
  var_pop?: Maybe<Generate_Contract_Job_Var_Pop_Fields>;
  var_samp?: Maybe<Generate_Contract_Job_Var_Samp_Fields>;
  variance?: Maybe<Generate_Contract_Job_Variance_Fields>;
};


/** aggregate fields of "generate_contract_job" */
export type Generate_Contract_Job_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Generate_Contract_Job_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "generate_contract_job" */
export type Generate_Contract_Job_Aggregate_Order_By = {
  avg?: InputMaybe<Generate_Contract_Job_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Generate_Contract_Job_Max_Order_By>;
  min?: InputMaybe<Generate_Contract_Job_Min_Order_By>;
  stddev?: InputMaybe<Generate_Contract_Job_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Generate_Contract_Job_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Generate_Contract_Job_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Generate_Contract_Job_Sum_Order_By>;
  var_pop?: InputMaybe<Generate_Contract_Job_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Generate_Contract_Job_Var_Samp_Order_By>;
  variance?: InputMaybe<Generate_Contract_Job_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Generate_Contract_Job_Avg_Fields = {
  __typename?: 'generate_contract_job_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 產生合約工作對應的訂單 id */
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "generate_contract_job" */
export type Generate_Contract_Job_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 產生合約工作對應的訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "generate_contract_job". All fields are combined with a logical 'AND'. */
export type Generate_Contract_Job_Bool_Exp = {
  _and?: InputMaybe<Array<Generate_Contract_Job_Bool_Exp>>;
  _not?: InputMaybe<Generate_Contract_Job_Bool_Exp>;
  _or?: InputMaybe<Array<Generate_Contract_Job_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  contract_path?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  error_message?: InputMaybe<String_Comparison_Exp>;
  execution_interval?: InputMaybe<Interval_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  order?: InputMaybe<Order_Bool_Exp>;
  order_id?: InputMaybe<Bigint_Comparison_Exp>;
  status?: InputMaybe<Generatecontractjobstatus_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Generate_Contract_Job_Max_Fields = {
  __typename?: 'generate_contract_job_max_fields';
  /** 備註 */
  comment?: Maybe<Scalars['String']['output']>;
  /** 租賃合約 Google Cloud Storage 儲存位址 */
  contract_path?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 錯誤訊息 */
  error_message?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 產生合約工作對應的訂單 id */
  order_id?: Maybe<Scalars['bigint']['output']>;
  /** 執行狀態 */
  status?: Maybe<Scalars['generatecontractjobstatus']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "generate_contract_job" */
export type Generate_Contract_Job_Max_Order_By = {
  /** 備註 */
  comment?: InputMaybe<Order_By>;
  /** 租賃合約 Google Cloud Storage 儲存位址 */
  contract_path?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 錯誤訊息 */
  error_message?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 產生合約工作對應的訂單 id */
  order_id?: InputMaybe<Order_By>;
  /** 執行狀態 */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Generate_Contract_Job_Min_Fields = {
  __typename?: 'generate_contract_job_min_fields';
  /** 備註 */
  comment?: Maybe<Scalars['String']['output']>;
  /** 租賃合約 Google Cloud Storage 儲存位址 */
  contract_path?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 錯誤訊息 */
  error_message?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 產生合約工作對應的訂單 id */
  order_id?: Maybe<Scalars['bigint']['output']>;
  /** 執行狀態 */
  status?: Maybe<Scalars['generatecontractjobstatus']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "generate_contract_job" */
export type Generate_Contract_Job_Min_Order_By = {
  /** 備註 */
  comment?: InputMaybe<Order_By>;
  /** 租賃合約 Google Cloud Storage 儲存位址 */
  contract_path?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 錯誤訊息 */
  error_message?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 產生合約工作對應的訂單 id */
  order_id?: InputMaybe<Order_By>;
  /** 執行狀態 */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "generate_contract_job". */
export type Generate_Contract_Job_Order_By = {
  comment?: InputMaybe<Order_By>;
  contract_path?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  error_message?: InputMaybe<Order_By>;
  execution_interval?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_Order_By>;
  order_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "generate_contract_job" */
export enum Generate_Contract_Job_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  ContractPath = 'contract_path',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  ErrorMessage = 'error_message',
  /** column name */
  ExecutionInterval = 'execution_interval',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Generate_Contract_Job_Stddev_Fields = {
  __typename?: 'generate_contract_job_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 產生合約工作對應的訂單 id */
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "generate_contract_job" */
export type Generate_Contract_Job_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 產生合約工作對應的訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Generate_Contract_Job_Stddev_Pop_Fields = {
  __typename?: 'generate_contract_job_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 產生合約工作對應的訂單 id */
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "generate_contract_job" */
export type Generate_Contract_Job_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 產生合約工作對應的訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Generate_Contract_Job_Stddev_Samp_Fields = {
  __typename?: 'generate_contract_job_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 產生合約工作對應的訂單 id */
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "generate_contract_job" */
export type Generate_Contract_Job_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 產生合約工作對應的訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "generate_contract_job" */
export type Generate_Contract_Job_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Generate_Contract_Job_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Generate_Contract_Job_Stream_Cursor_Value_Input = {
  /** 備註 */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** 租賃合約 Google Cloud Storage 儲存位址 */
  contract_path?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 錯誤訊息 */
  error_message?: InputMaybe<Scalars['String']['input']>;
  /** 執行時長 */
  execution_interval?: InputMaybe<Scalars['interval']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 產生合約工作對應的訂單 id */
  order_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 執行狀態 */
  status?: InputMaybe<Scalars['generatecontractjobstatus']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Generate_Contract_Job_Sum_Fields = {
  __typename?: 'generate_contract_job_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  /** 產生合約工作對應的訂單 id */
  order_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "generate_contract_job" */
export type Generate_Contract_Job_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 產生合約工作對應的訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Generate_Contract_Job_Var_Pop_Fields = {
  __typename?: 'generate_contract_job_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 產生合約工作對應的訂單 id */
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "generate_contract_job" */
export type Generate_Contract_Job_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 產生合約工作對應的訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Generate_Contract_Job_Var_Samp_Fields = {
  __typename?: 'generate_contract_job_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 產生合約工作對應的訂單 id */
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "generate_contract_job" */
export type Generate_Contract_Job_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 產生合約工作對應的訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Generate_Contract_Job_Variance_Fields = {
  __typename?: 'generate_contract_job_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 產生合約工作對應的訂單 id */
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "generate_contract_job" */
export type Generate_Contract_Job_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 產生合約工作對應的訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "generatecontractjobstatus". All fields are combined with logical 'AND'. */
export type Generatecontractjobstatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['generatecontractjobstatus']['input']>;
  _gt?: InputMaybe<Scalars['generatecontractjobstatus']['input']>;
  _gte?: InputMaybe<Scalars['generatecontractjobstatus']['input']>;
  _in?: InputMaybe<Array<Scalars['generatecontractjobstatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['generatecontractjobstatus']['input']>;
  _lte?: InputMaybe<Scalars['generatecontractjobstatus']['input']>;
  _neq?: InputMaybe<Scalars['generatecontractjobstatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['generatecontractjobstatus']['input']>>;
};

/** 台灣公家機關國定假日表 */
export type Holiday = {
  __typename?: 'holiday';
  /** 結束時間 */
  end_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 最少需租用的租賃單位限制，例：一日 */
  minimum_rental_period: Scalars['interval']['output'];
  /** 假日名稱 */
  name: Scalars['String']['output'];
  /** 期間適用的費率類型 */
  price_type: Scalars['pricetype']['output'];
  /** 開始時間 */
  start_at: Scalars['timestamptz']['output'];
};

/** Boolean expression to filter rows from the table "holiday". All fields are combined with a logical 'AND'. */
export type Holiday_Bool_Exp = {
  _and?: InputMaybe<Array<Holiday_Bool_Exp>>;
  _not?: InputMaybe<Holiday_Bool_Exp>;
  _or?: InputMaybe<Array<Holiday_Bool_Exp>>;
  end_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  minimum_rental_period?: InputMaybe<Interval_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price_type?: InputMaybe<Pricetype_Comparison_Exp>;
  start_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "holiday". */
export type Holiday_Order_By = {
  end_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  minimum_rental_period?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price_type?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
};

/** select columns of table "holiday" */
export enum Holiday_Select_Column {
  /** column name */
  EndAt = 'end_at',
  /** column name */
  Id = 'id',
  /** column name */
  MinimumRentalPeriod = 'minimum_rental_period',
  /** column name */
  Name = 'name',
  /** column name */
  PriceType = 'price_type',
  /** column name */
  StartAt = 'start_at'
}

/** Streaming cursor of the table "holiday" */
export type Holiday_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Holiday_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Holiday_Stream_Cursor_Value_Input = {
  /** 結束時間 */
  end_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 最少需租用的租賃單位限制，例：一日 */
  minimum_rental_period?: InputMaybe<Scalars['interval']['input']>;
  /** 假日名稱 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 期間適用的費率類型 */
  price_type?: InputMaybe<Scalars['pricetype']['input']>;
  /** 開始時間 */
  start_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Boolean expression to compare columns of type "interval". All fields are combined with logical 'AND'. */
export type Interval_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['interval']['input']>;
  _gt?: InputMaybe<Scalars['interval']['input']>;
  _gte?: InputMaybe<Scalars['interval']['input']>;
  _in?: InputMaybe<Array<Scalars['interval']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['interval']['input']>;
  _lte?: InputMaybe<Scalars['interval']['input']>;
  _neq?: InputMaybe<Scalars['interval']['input']>;
  _nin?: InputMaybe<Array<Scalars['interval']['input']>>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** 訂單 */
export type Order = {
  __typename?: 'order';
  /** 取消時間 */
  canceled_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 備註 */
  comment?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  coupon_inventories: Array<Coupon_Inventory>;
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  customer: Customer;
  /** 顧客生日快照 */
  customer_birthday_snapshot?: Maybe<Scalars['date']['output']>;
  /** 租用顧客 id */
  customer_id: Scalars['bigint']['output'];
  /** 顧客身分證字號快照 */
  customer_identity_number_snapshot?: Maybe<Scalars['String']['output']>;
  /** 顧客證件類型快照 (身分證、護照或居留證) */
  customer_identity_type_snapshot: Scalars['customeridentitydoctype']['output'];
  /** 顧客手機快照，格式為 09xxoooxxx */
  customer_mobile_phone_number_snapshot: Scalars['String']['output'];
  /** 顧客名稱快照 */
  customer_name_snapshot: Scalars['String']['output'];
  /** 顧客居住地址快照 */
  customer_residential_address_snapshot?: Maybe<Scalars['String']['output']>;
  /** 顧客居住行政區快照 */
  customer_residential_area_snapshot?: Maybe<Scalars['String']['output']>;
  /** 顧客居住縣市快照 */
  customer_residential_city_snapshot?: Maybe<Scalars['String']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount: Scalars['Int']['output'];
  /** 預定結束時間 */
  end_at: Scalars['timestamptz']['output'];
  /** 紀錄原先訂單建立時的預定結束時間 */
  end_at_snapshot: Scalars['timestamptz']['output'];
  /** 此筆訂單預估總金額（原價） */
  estimated_amount: Scalars['Int']['output'];
  /** 延長用車的次數 */
  extension_count: Scalars['Int']['output'];
  /** An object relationship */
  fleet: Fleet;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id: Scalars['bigint']['output'];
  /** An array relationship */
  generate_contract_jobs: Array<Generate_Contract_Job>;
  /** An aggregate relationship */
  generate_contract_jobs_aggregate: Generate_Contract_Job_Aggregate;
  id: Scalars['bigint']['output'];
  /** An array relationship */
  order_billings: Array<Order_Billing>;
  /** An aggregate relationship */
  order_billings_aggregate: Order_Billing_Aggregate;
  /** An array relationship */
  order_discount_snapshots: Array<Order_Discount_Snapshot>;
  /** 訂單編號 */
  order_number: Scalars['String']['output'];
  /** An array relationship */
  order_photos: Array<Order_Photo>;
  /** An aggregate relationship */
  order_photos_aggregate: Order_Photo_Aggregate;
  /** 訂單付款狀態 OrderPaymentStatus */
  payment_status: Scalars['orderpaymentstatus']['output'];
  /** 訂單付款方式 OrderPaymentType */
  payment_type: Scalars['orderpaymenttype']['output'];
  /** 取車時間 */
  picked_up_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  rental_company: Rental_Company;
  /** 訂單所屬車隊的車行 id */
  rental_company_id: Scalars['bigint']['output'];
  /** 車行名稱快照 */
  rental_company_name_snapshot: Scalars['String']['output'];
  /** 車行店家政策 ids 快照 */
  rental_company_policy_ids_snapshot: Array<Scalars['Int']['output']>;
  /** 還車時間 */
  returned_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 預定開始時間 */
  start_at: Scalars['timestamptz']['output'];
  /** 紀錄原先訂單建立時的預定開始時間 */
  start_at_snapshot: Scalars['timestamptz']['output'];
  /** An object relationship */
  station: Station;
  /** 站點地址快照 */
  station_address_snapshot: Scalars['String']['output'];
  /** 取還車站點 id */
  station_id: Scalars['bigint']['output'];
  /** 站點名稱快照 */
  station_name_snapshot: Scalars['String']['output'];
  /** 站點類型快照 */
  station_type_snapshot: Scalars['stationtype']['output'];
  /** 此筆訂單的總折扣金額 */
  total_discount_amount: Scalars['Int']['output'];
  /** 訂單旅程狀態 OrderTripStatus */
  trip_status: Scalars['ordertripstatus']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  vehicle: Vehicle;
  /** 車廠快照 */
  vehicle_brand_name_snapshot: Scalars['String']['output'];
  /** 使用車輛 id */
  vehicle_id: Scalars['bigint']['output'];
  /** 車牌號碼前段快照 */
  vehicle_license_plate_front_snapshot: Scalars['String']['output'];
  /** 車牌號碼後段快照 */
  vehicle_license_plate_rear_snapshot: Scalars['String']['output'];
  /** 車款快照 */
  vehicle_model_name_snapshot: Scalars['String']['output'];
  /** 訂單建立當下，該車輛適用的計費單位（例如：時租或日租） */
  vehicle_rental_plan_type_snapshot: Scalars['vehiclerentalplanunit']['output'];
  /** 座位數快照 */
  vehicle_seats_snapshot: Scalars['Int']['output'];
  /** 車型快照 */
  vehicle_type_name_snapshot: Scalars['String']['output'];
};


/** 訂單 */
export type OrderCoupon_InventoriesArgs = {
  distinct_on?: InputMaybe<Array<Coupon_Inventory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coupon_Inventory_Order_By>>;
  where?: InputMaybe<Coupon_Inventory_Bool_Exp>;
};


/** 訂單 */
export type OrderGenerate_Contract_JobsArgs = {
  distinct_on?: InputMaybe<Array<Generate_Contract_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generate_Contract_Job_Order_By>>;
  where?: InputMaybe<Generate_Contract_Job_Bool_Exp>;
};


/** 訂單 */
export type OrderGenerate_Contract_Jobs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Generate_Contract_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generate_Contract_Job_Order_By>>;
  where?: InputMaybe<Generate_Contract_Job_Bool_Exp>;
};


/** 訂單 */
export type OrderOrder_BillingsArgs = {
  distinct_on?: InputMaybe<Array<Order_Billing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Billing_Order_By>>;
  where?: InputMaybe<Order_Billing_Bool_Exp>;
};


/** 訂單 */
export type OrderOrder_Billings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Billing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Billing_Order_By>>;
  where?: InputMaybe<Order_Billing_Bool_Exp>;
};


/** 訂單 */
export type OrderOrder_Discount_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Order_Discount_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Discount_Snapshot_Order_By>>;
  where?: InputMaybe<Order_Discount_Snapshot_Bool_Exp>;
};


/** 訂單 */
export type OrderOrder_PhotosArgs = {
  distinct_on?: InputMaybe<Array<Order_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Photo_Order_By>>;
  where?: InputMaybe<Order_Photo_Bool_Exp>;
};


/** 訂單 */
export type OrderOrder_Photos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Photo_Order_By>>;
  where?: InputMaybe<Order_Photo_Bool_Exp>;
};

/** aggregated selection of "order" */
export type Order_Aggregate = {
  __typename?: 'order_aggregate';
  aggregate?: Maybe<Order_Aggregate_Fields>;
  nodes: Array<Order>;
};

export type Order_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Aggregate_Bool_Exp_Count>;
};

export type Order_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Order_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "order" */
export type Order_Aggregate_Fields = {
  __typename?: 'order_aggregate_fields';
  avg?: Maybe<Order_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Order_Max_Fields>;
  min?: Maybe<Order_Min_Fields>;
  stddev?: Maybe<Order_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Sum_Fields>;
  var_pop?: Maybe<Order_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Var_Samp_Fields>;
  variance?: Maybe<Order_Variance_Fields>;
};


/** aggregate fields of "order" */
export type Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "order" */
export type Order_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Max_Order_By>;
  min?: InputMaybe<Order_Min_Order_By>;
  stddev?: InputMaybe<Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Order_Avg_Fields = {
  __typename?: 'order_avg_fields';
  /** 租用顧客 id */
  customer_id?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: Maybe<Scalars['Float']['output']>;
  /** 延長用車的次數 */
  extension_count?: Maybe<Scalars['Float']['output']>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 取還車站點 id */
  station_id?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: Maybe<Scalars['Float']['output']>;
  /** 使用車輛 id */
  vehicle_id?: Maybe<Scalars['Float']['output']>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "order" */
export type Order_Avg_Order_By = {
  /** 租用顧客 id */
  customer_id?: InputMaybe<Order_By>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: InputMaybe<Order_By>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: InputMaybe<Order_By>;
  /** 延長用車的次數 */
  extension_count?: InputMaybe<Order_By>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 取還車站點 id */
  station_id?: InputMaybe<Order_By>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: InputMaybe<Order_By>;
  /** 使用車輛 id */
  vehicle_id?: InputMaybe<Order_By>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: InputMaybe<Order_By>;
};

/** 訂單扣款明細 */
export type Order_Billing = {
  __typename?: 'order_billing';
  /** An object relationship */
  billing_etc?: Maybe<Billing_Etc>;
  /** An array relationship */
  billing_etcs: Array<Billing_Etc>;
  /** An aggregate relationship */
  billing_etcs_aggregate: Billing_Etc_Aggregate;
  /** An array relationship */
  billing_notify_jobs: Array<Billing_Notify_Job>;
  /** An aggregate relationship */
  billing_notify_jobs_aggregate: Billing_Notify_Job_Aggregate;
  /** An array relationship */
  billing_transactions: Array<Billing_Transaction>;
  /** An aggregate relationship */
  billing_transactions_aggregate: Billing_Transaction_Aggregate;
  /** 取消時間 */
  canceled_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 費用類別 */
  category: Scalars['orderbillingcategory']['output'];
  /** 備註 */
  comment?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['bigint']['output'];
  /** An object relationship */
  order: Order;
  /** 扣款明細對應的訂單 */
  order_id: Scalars['bigint']['output'];
  /** 數量 */
  quantity: Scalars['Int']['output'];
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate: Scalars['Int']['output'];
  /** 付款重試次數 */
  retry_times: Scalars['smallint']['output'];
  /** 款項狀態 */
  status: Scalars['orderbillingstatus']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 訂單扣款明細 */
export type Order_BillingBilling_EtcsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Etc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Etc_Order_By>>;
  where?: InputMaybe<Billing_Etc_Bool_Exp>;
};


/** 訂單扣款明細 */
export type Order_BillingBilling_Etcs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Etc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Etc_Order_By>>;
  where?: InputMaybe<Billing_Etc_Bool_Exp>;
};


/** 訂單扣款明細 */
export type Order_BillingBilling_Notify_JobsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Notify_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Notify_Job_Order_By>>;
  where?: InputMaybe<Billing_Notify_Job_Bool_Exp>;
};


/** 訂單扣款明細 */
export type Order_BillingBilling_Notify_Jobs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Notify_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Notify_Job_Order_By>>;
  where?: InputMaybe<Billing_Notify_Job_Bool_Exp>;
};


/** 訂單扣款明細 */
export type Order_BillingBilling_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Transaction_Order_By>>;
  where?: InputMaybe<Billing_Transaction_Bool_Exp>;
};


/** 訂單扣款明細 */
export type Order_BillingBilling_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Transaction_Order_By>>;
  where?: InputMaybe<Billing_Transaction_Bool_Exp>;
};

/** aggregated selection of "order_billing" */
export type Order_Billing_Aggregate = {
  __typename?: 'order_billing_aggregate';
  aggregate?: Maybe<Order_Billing_Aggregate_Fields>;
  nodes: Array<Order_Billing>;
};

export type Order_Billing_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Billing_Aggregate_Bool_Exp_Count>;
};

export type Order_Billing_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Billing_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Order_Billing_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "order_billing" */
export type Order_Billing_Aggregate_Fields = {
  __typename?: 'order_billing_aggregate_fields';
  avg?: Maybe<Order_Billing_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Order_Billing_Max_Fields>;
  min?: Maybe<Order_Billing_Min_Fields>;
  stddev?: Maybe<Order_Billing_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Billing_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Billing_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Billing_Sum_Fields>;
  var_pop?: Maybe<Order_Billing_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Billing_Var_Samp_Fields>;
  variance?: Maybe<Order_Billing_Variance_Fields>;
};


/** aggregate fields of "order_billing" */
export type Order_Billing_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Billing_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "order_billing" */
export type Order_Billing_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Billing_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Billing_Max_Order_By>;
  min?: InputMaybe<Order_Billing_Min_Order_By>;
  stddev?: InputMaybe<Order_Billing_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Billing_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Billing_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Billing_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Billing_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Billing_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Billing_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Order_Billing_Avg_Fields = {
  __typename?: 'order_billing_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 扣款明細對應的訂單 */
  order_id?: Maybe<Scalars['Float']['output']>;
  /** 數量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: Maybe<Scalars['Float']['output']>;
  /** 付款重試次數 */
  retry_times?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "order_billing" */
export type Order_Billing_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 扣款明細對應的訂單 */
  order_id?: InputMaybe<Order_By>;
  /** 數量 */
  quantity?: InputMaybe<Order_By>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: InputMaybe<Order_By>;
  /** 付款重試次數 */
  retry_times?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_billing". All fields are combined with a logical 'AND'. */
export type Order_Billing_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Billing_Bool_Exp>>;
  _not?: InputMaybe<Order_Billing_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Billing_Bool_Exp>>;
  billing_etc?: InputMaybe<Billing_Etc_Bool_Exp>;
  billing_etcs?: InputMaybe<Billing_Etc_Bool_Exp>;
  billing_etcs_aggregate?: InputMaybe<Billing_Etc_Aggregate_Bool_Exp>;
  billing_notify_jobs?: InputMaybe<Billing_Notify_Job_Bool_Exp>;
  billing_notify_jobs_aggregate?: InputMaybe<Billing_Notify_Job_Aggregate_Bool_Exp>;
  billing_transactions?: InputMaybe<Billing_Transaction_Bool_Exp>;
  billing_transactions_aggregate?: InputMaybe<Billing_Transaction_Aggregate_Bool_Exp>;
  canceled_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  category?: InputMaybe<Orderbillingcategory_Comparison_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  order?: InputMaybe<Order_Bool_Exp>;
  order_id?: InputMaybe<Bigint_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  rate?: InputMaybe<Int_Comparison_Exp>;
  retry_times?: InputMaybe<Smallint_Comparison_Exp>;
  status?: InputMaybe<Orderbillingstatus_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Order_Billing_Max_Fields = {
  __typename?: 'order_billing_max_fields';
  /** 取消時間 */
  canceled_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 費用類別 */
  category?: Maybe<Scalars['orderbillingcategory']['output']>;
  /** 備註 */
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 扣款明細對應的訂單 */
  order_id?: Maybe<Scalars['bigint']['output']>;
  /** 數量 */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: Maybe<Scalars['Int']['output']>;
  /** 付款重試次數 */
  retry_times?: Maybe<Scalars['smallint']['output']>;
  /** 款項狀態 */
  status?: Maybe<Scalars['orderbillingstatus']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "order_billing" */
export type Order_Billing_Max_Order_By = {
  /** 取消時間 */
  canceled_at?: InputMaybe<Order_By>;
  /** 費用類別 */
  category?: InputMaybe<Order_By>;
  /** 備註 */
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 扣款明細對應的訂單 */
  order_id?: InputMaybe<Order_By>;
  /** 數量 */
  quantity?: InputMaybe<Order_By>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: InputMaybe<Order_By>;
  /** 付款重試次數 */
  retry_times?: InputMaybe<Order_By>;
  /** 款項狀態 */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Billing_Min_Fields = {
  __typename?: 'order_billing_min_fields';
  /** 取消時間 */
  canceled_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 費用類別 */
  category?: Maybe<Scalars['orderbillingcategory']['output']>;
  /** 備註 */
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 扣款明細對應的訂單 */
  order_id?: Maybe<Scalars['bigint']['output']>;
  /** 數量 */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: Maybe<Scalars['Int']['output']>;
  /** 付款重試次數 */
  retry_times?: Maybe<Scalars['smallint']['output']>;
  /** 款項狀態 */
  status?: Maybe<Scalars['orderbillingstatus']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "order_billing" */
export type Order_Billing_Min_Order_By = {
  /** 取消時間 */
  canceled_at?: InputMaybe<Order_By>;
  /** 費用類別 */
  category?: InputMaybe<Order_By>;
  /** 備註 */
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 扣款明細對應的訂單 */
  order_id?: InputMaybe<Order_By>;
  /** 數量 */
  quantity?: InputMaybe<Order_By>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: InputMaybe<Order_By>;
  /** 付款重試次數 */
  retry_times?: InputMaybe<Order_By>;
  /** 款項狀態 */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "order_billing". */
export type Order_Billing_Order_By = {
  billing_etc?: InputMaybe<Billing_Etc_Order_By>;
  billing_etcs_aggregate?: InputMaybe<Billing_Etc_Aggregate_Order_By>;
  billing_notify_jobs_aggregate?: InputMaybe<Billing_Notify_Job_Aggregate_Order_By>;
  billing_transactions_aggregate?: InputMaybe<Billing_Transaction_Aggregate_Order_By>;
  canceled_at?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_Order_By>;
  order_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  retry_times?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "order_billing" */
export enum Order_Billing_Select_Column {
  /** column name */
  CanceledAt = 'canceled_at',
  /** column name */
  Category = 'category',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Rate = 'rate',
  /** column name */
  RetryTimes = 'retry_times',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Order_Billing_Stddev_Fields = {
  __typename?: 'order_billing_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 扣款明細對應的訂單 */
  order_id?: Maybe<Scalars['Float']['output']>;
  /** 數量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: Maybe<Scalars['Float']['output']>;
  /** 付款重試次數 */
  retry_times?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "order_billing" */
export type Order_Billing_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 扣款明細對應的訂單 */
  order_id?: InputMaybe<Order_By>;
  /** 數量 */
  quantity?: InputMaybe<Order_By>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: InputMaybe<Order_By>;
  /** 付款重試次數 */
  retry_times?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Billing_Stddev_Pop_Fields = {
  __typename?: 'order_billing_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 扣款明細對應的訂單 */
  order_id?: Maybe<Scalars['Float']['output']>;
  /** 數量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: Maybe<Scalars['Float']['output']>;
  /** 付款重試次數 */
  retry_times?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "order_billing" */
export type Order_Billing_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 扣款明細對應的訂單 */
  order_id?: InputMaybe<Order_By>;
  /** 數量 */
  quantity?: InputMaybe<Order_By>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: InputMaybe<Order_By>;
  /** 付款重試次數 */
  retry_times?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Billing_Stddev_Samp_Fields = {
  __typename?: 'order_billing_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 扣款明細對應的訂單 */
  order_id?: Maybe<Scalars['Float']['output']>;
  /** 數量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: Maybe<Scalars['Float']['output']>;
  /** 付款重試次數 */
  retry_times?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "order_billing" */
export type Order_Billing_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 扣款明細對應的訂單 */
  order_id?: InputMaybe<Order_By>;
  /** 數量 */
  quantity?: InputMaybe<Order_By>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: InputMaybe<Order_By>;
  /** 付款重試次數 */
  retry_times?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "order_billing" */
export type Order_Billing_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Billing_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Billing_Stream_Cursor_Value_Input = {
  /** 取消時間 */
  canceled_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 費用類別 */
  category?: InputMaybe<Scalars['orderbillingcategory']['input']>;
  /** 備註 */
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 扣款明細對應的訂單 */
  order_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 數量 */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: InputMaybe<Scalars['Int']['input']>;
  /** 付款重試次數 */
  retry_times?: InputMaybe<Scalars['smallint']['input']>;
  /** 款項狀態 */
  status?: InputMaybe<Scalars['orderbillingstatus']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Order_Billing_Sum_Fields = {
  __typename?: 'order_billing_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  /** 扣款明細對應的訂單 */
  order_id?: Maybe<Scalars['bigint']['output']>;
  /** 數量 */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: Maybe<Scalars['Int']['output']>;
  /** 付款重試次數 */
  retry_times?: Maybe<Scalars['smallint']['output']>;
};

/** order by sum() on columns of table "order_billing" */
export type Order_Billing_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 扣款明細對應的訂單 */
  order_id?: InputMaybe<Order_By>;
  /** 數量 */
  quantity?: InputMaybe<Order_By>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: InputMaybe<Order_By>;
  /** 付款重試次數 */
  retry_times?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Order_Billing_Var_Pop_Fields = {
  __typename?: 'order_billing_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 扣款明細對應的訂單 */
  order_id?: Maybe<Scalars['Float']['output']>;
  /** 數量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: Maybe<Scalars['Float']['output']>;
  /** 付款重試次數 */
  retry_times?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "order_billing" */
export type Order_Billing_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 扣款明細對應的訂單 */
  order_id?: InputMaybe<Order_By>;
  /** 數量 */
  quantity?: InputMaybe<Order_By>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: InputMaybe<Order_By>;
  /** 付款重試次數 */
  retry_times?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Billing_Var_Samp_Fields = {
  __typename?: 'order_billing_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 扣款明細對應的訂單 */
  order_id?: Maybe<Scalars['Float']['output']>;
  /** 數量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: Maybe<Scalars['Float']['output']>;
  /** 付款重試次數 */
  retry_times?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "order_billing" */
export type Order_Billing_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 扣款明細對應的訂單 */
  order_id?: InputMaybe<Order_By>;
  /** 數量 */
  quantity?: InputMaybe<Order_By>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: InputMaybe<Order_By>;
  /** 付款重試次數 */
  retry_times?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Billing_Variance_Fields = {
  __typename?: 'order_billing_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 扣款明細對應的訂單 */
  order_id?: Maybe<Scalars['Float']['output']>;
  /** 數量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: Maybe<Scalars['Float']['output']>;
  /** 付款重試次數 */
  retry_times?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "order_billing" */
export type Order_Billing_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 扣款明細對應的訂單 */
  order_id?: InputMaybe<Order_By>;
  /** 數量 */
  quantity?: InputMaybe<Order_By>;
  /** 單價，NTD/次、NTD/km 或 NTD/hr */
  rate?: InputMaybe<Order_By>;
  /** 付款重試次數 */
  retry_times?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Bool_Exp>>;
  _not?: InputMaybe<Order_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Bool_Exp>>;
  canceled_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  coupon_inventories?: InputMaybe<Coupon_Inventory_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer?: InputMaybe<Customer_Bool_Exp>;
  customer_birthday_snapshot?: InputMaybe<Date_Comparison_Exp>;
  customer_id?: InputMaybe<Bigint_Comparison_Exp>;
  customer_identity_number_snapshot?: InputMaybe<String_Comparison_Exp>;
  customer_identity_type_snapshot?: InputMaybe<Customeridentitydoctype_Comparison_Exp>;
  customer_mobile_phone_number_snapshot?: InputMaybe<String_Comparison_Exp>;
  customer_name_snapshot?: InputMaybe<String_Comparison_Exp>;
  customer_residential_address_snapshot?: InputMaybe<String_Comparison_Exp>;
  customer_residential_area_snapshot?: InputMaybe<String_Comparison_Exp>;
  customer_residential_city_snapshot?: InputMaybe<String_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deposit_amount?: InputMaybe<Int_Comparison_Exp>;
  end_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_at_snapshot?: InputMaybe<Timestamptz_Comparison_Exp>;
  estimated_amount?: InputMaybe<Int_Comparison_Exp>;
  extension_count?: InputMaybe<Int_Comparison_Exp>;
  fleet?: InputMaybe<Fleet_Bool_Exp>;
  fleet_id?: InputMaybe<Bigint_Comparison_Exp>;
  generate_contract_jobs?: InputMaybe<Generate_Contract_Job_Bool_Exp>;
  generate_contract_jobs_aggregate?: InputMaybe<Generate_Contract_Job_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  order_billings?: InputMaybe<Order_Billing_Bool_Exp>;
  order_billings_aggregate?: InputMaybe<Order_Billing_Aggregate_Bool_Exp>;
  order_discount_snapshots?: InputMaybe<Order_Discount_Snapshot_Bool_Exp>;
  order_number?: InputMaybe<String_Comparison_Exp>;
  order_photos?: InputMaybe<Order_Photo_Bool_Exp>;
  order_photos_aggregate?: InputMaybe<Order_Photo_Aggregate_Bool_Exp>;
  payment_status?: InputMaybe<Orderpaymentstatus_Comparison_Exp>;
  payment_type?: InputMaybe<Orderpaymenttype_Comparison_Exp>;
  picked_up_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  rental_company?: InputMaybe<Rental_Company_Bool_Exp>;
  rental_company_id?: InputMaybe<Bigint_Comparison_Exp>;
  rental_company_name_snapshot?: InputMaybe<String_Comparison_Exp>;
  rental_company_policy_ids_snapshot?: InputMaybe<Int_Array_Comparison_Exp>;
  returned_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  start_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  start_at_snapshot?: InputMaybe<Timestamptz_Comparison_Exp>;
  station?: InputMaybe<Station_Bool_Exp>;
  station_address_snapshot?: InputMaybe<String_Comparison_Exp>;
  station_id?: InputMaybe<Bigint_Comparison_Exp>;
  station_name_snapshot?: InputMaybe<String_Comparison_Exp>;
  station_type_snapshot?: InputMaybe<Stationtype_Comparison_Exp>;
  total_discount_amount?: InputMaybe<Int_Comparison_Exp>;
  trip_status?: InputMaybe<Ordertripstatus_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle?: InputMaybe<Vehicle_Bool_Exp>;
  vehicle_brand_name_snapshot?: InputMaybe<String_Comparison_Exp>;
  vehicle_id?: InputMaybe<Bigint_Comparison_Exp>;
  vehicle_license_plate_front_snapshot?: InputMaybe<String_Comparison_Exp>;
  vehicle_license_plate_rear_snapshot?: InputMaybe<String_Comparison_Exp>;
  vehicle_model_name_snapshot?: InputMaybe<String_Comparison_Exp>;
  vehicle_rental_plan_type_snapshot?: InputMaybe<Vehiclerentalplanunit_Comparison_Exp>;
  vehicle_seats_snapshot?: InputMaybe<Int_Comparison_Exp>;
  vehicle_type_name_snapshot?: InputMaybe<String_Comparison_Exp>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** 訂單折扣快照 */
export type Order_Discount_Snapshot = {
  __typename?: 'order_discount_snapshot';
  /** 實際折扣金額，單位是新台幣元 */
  actual_discount_amount: Scalars['Int']['output'];
  /** An object relationship */
  campaign?: Maybe<Campaign>;
  /** 行銷活動子表 id */
  campaign_child_id?: Maybe<Scalars['bigint']['output']>;
  /** 行銷活動主表 id */
  campaign_id?: Maybe<Scalars['bigint']['output']>;
  /** 行銷活動子表名稱 */
  child_table_name?: Maybe<Scalars['campaignchildtablename']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  discount?: Maybe<Discount>;
  /** 折扣數值設定，單位是新台幣元、百分比折扣、0 為免費 */
  discount_amount: Scalars['numeric']['output'];
  id: Scalars['bigint']['output'];
  /** 折扣的計算方法 */
  method: Scalars['discountmethod']['output'];
  /** An object relationship */
  order: Order;
  /** 訂單 id */
  order_id: Scalars['bigint']['output'];
  /** 其餘折扣快照資料 */
  payload?: Maybe<Scalars['json']['output']>;
  /** 要套用折扣的目標費用，值為訂單費用類別 */
  target: Scalars['discounttarget']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 訂單折扣快照 */
export type Order_Discount_SnapshotPayloadArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** order by aggregate values of table "order_discount_snapshot" */
export type Order_Discount_Snapshot_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Discount_Snapshot_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Discount_Snapshot_Max_Order_By>;
  min?: InputMaybe<Order_Discount_Snapshot_Min_Order_By>;
  stddev?: InputMaybe<Order_Discount_Snapshot_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Discount_Snapshot_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Discount_Snapshot_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Discount_Snapshot_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Discount_Snapshot_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Discount_Snapshot_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Discount_Snapshot_Variance_Order_By>;
};

/** order by avg() on columns of table "order_discount_snapshot" */
export type Order_Discount_Snapshot_Avg_Order_By = {
  /** 實際折扣金額，單位是新台幣元 */
  actual_discount_amount?: InputMaybe<Order_By>;
  /** 行銷活動子表 id */
  campaign_child_id?: InputMaybe<Order_By>;
  /** 行銷活動主表 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣數值設定，單位是新台幣元、百分比折扣、0 為免費 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_discount_snapshot". All fields are combined with a logical 'AND'. */
export type Order_Discount_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Discount_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Order_Discount_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Discount_Snapshot_Bool_Exp>>;
  actual_discount_amount?: InputMaybe<Int_Comparison_Exp>;
  campaign?: InputMaybe<Campaign_Bool_Exp>;
  campaign_child_id?: InputMaybe<Bigint_Comparison_Exp>;
  campaign_id?: InputMaybe<Bigint_Comparison_Exp>;
  child_table_name?: InputMaybe<Campaignchildtablename_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  discount?: InputMaybe<Discount_Bool_Exp>;
  discount_amount?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  method?: InputMaybe<Discountmethod_Comparison_Exp>;
  order?: InputMaybe<Order_Bool_Exp>;
  order_id?: InputMaybe<Bigint_Comparison_Exp>;
  payload?: InputMaybe<Json_Comparison_Exp>;
  target?: InputMaybe<Discounttarget_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "order_discount_snapshot" */
export type Order_Discount_Snapshot_Max_Order_By = {
  /** 實際折扣金額，單位是新台幣元 */
  actual_discount_amount?: InputMaybe<Order_By>;
  /** 行銷活動子表 id */
  campaign_child_id?: InputMaybe<Order_By>;
  /** 行銷活動主表 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 行銷活動子表名稱 */
  child_table_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 折扣數值設定，單位是新台幣元、百分比折扣、0 為免費 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 折扣的計算方法 */
  method?: InputMaybe<Order_By>;
  /** 訂單 id */
  order_id?: InputMaybe<Order_By>;
  /** 要套用折扣的目標費用，值為訂單費用類別 */
  target?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "order_discount_snapshot" */
export type Order_Discount_Snapshot_Min_Order_By = {
  /** 實際折扣金額，單位是新台幣元 */
  actual_discount_amount?: InputMaybe<Order_By>;
  /** 行銷活動子表 id */
  campaign_child_id?: InputMaybe<Order_By>;
  /** 行銷活動主表 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 行銷活動子表名稱 */
  child_table_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 折扣數值設定，單位是新台幣元、百分比折扣、0 為免費 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 折扣的計算方法 */
  method?: InputMaybe<Order_By>;
  /** 訂單 id */
  order_id?: InputMaybe<Order_By>;
  /** 要套用折扣的目標費用，值為訂單費用類別 */
  target?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "order_discount_snapshot". */
export type Order_Discount_Snapshot_Order_By = {
  actual_discount_amount?: InputMaybe<Order_By>;
  campaign?: InputMaybe<Campaign_Order_By>;
  campaign_child_id?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  child_table_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  discount?: InputMaybe<Discount_Order_By>;
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  method?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_Order_By>;
  order_id?: InputMaybe<Order_By>;
  payload?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "order_discount_snapshot" */
export enum Order_Discount_Snapshot_Select_Column {
  /** column name */
  ActualDiscountAmount = 'actual_discount_amount',
  /** column name */
  CampaignChildId = 'campaign_child_id',
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  ChildTableName = 'child_table_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscountAmount = 'discount_amount',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Payload = 'payload',
  /** column name */
  Target = 'target',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** order by stddev() on columns of table "order_discount_snapshot" */
export type Order_Discount_Snapshot_Stddev_Order_By = {
  /** 實際折扣金額，單位是新台幣元 */
  actual_discount_amount?: InputMaybe<Order_By>;
  /** 行銷活動子表 id */
  campaign_child_id?: InputMaybe<Order_By>;
  /** 行銷活動主表 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣數值設定，單位是新台幣元、百分比折扣、0 為免費 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "order_discount_snapshot" */
export type Order_Discount_Snapshot_Stddev_Pop_Order_By = {
  /** 實際折扣金額，單位是新台幣元 */
  actual_discount_amount?: InputMaybe<Order_By>;
  /** 行銷活動子表 id */
  campaign_child_id?: InputMaybe<Order_By>;
  /** 行銷活動主表 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣數值設定，單位是新台幣元、百分比折扣、0 為免費 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "order_discount_snapshot" */
export type Order_Discount_Snapshot_Stddev_Samp_Order_By = {
  /** 實際折扣金額，單位是新台幣元 */
  actual_discount_amount?: InputMaybe<Order_By>;
  /** 行銷活動子表 id */
  campaign_child_id?: InputMaybe<Order_By>;
  /** 行銷活動主表 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣數值設定，單位是新台幣元、百分比折扣、0 為免費 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "order_discount_snapshot" */
export type Order_Discount_Snapshot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Discount_Snapshot_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Discount_Snapshot_Stream_Cursor_Value_Input = {
  /** 實際折扣金額，單位是新台幣元 */
  actual_discount_amount?: InputMaybe<Scalars['Int']['input']>;
  /** 行銷活動子表 id */
  campaign_child_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 行銷活動主表 id */
  campaign_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 行銷活動子表名稱 */
  child_table_name?: InputMaybe<Scalars['campaignchildtablename']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 折扣數值設定，單位是新台幣元、百分比折扣、0 為免費 */
  discount_amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 折扣的計算方法 */
  method?: InputMaybe<Scalars['discountmethod']['input']>;
  /** 訂單 id */
  order_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 其餘折扣快照資料 */
  payload?: InputMaybe<Scalars['json']['input']>;
  /** 要套用折扣的目標費用，值為訂單費用類別 */
  target?: InputMaybe<Scalars['discounttarget']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** order by sum() on columns of table "order_discount_snapshot" */
export type Order_Discount_Snapshot_Sum_Order_By = {
  /** 實際折扣金額，單位是新台幣元 */
  actual_discount_amount?: InputMaybe<Order_By>;
  /** 行銷活動子表 id */
  campaign_child_id?: InputMaybe<Order_By>;
  /** 行銷活動主表 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣數值設定，單位是新台幣元、百分比折扣、0 為免費 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "order_discount_snapshot" */
export type Order_Discount_Snapshot_Var_Pop_Order_By = {
  /** 實際折扣金額，單位是新台幣元 */
  actual_discount_amount?: InputMaybe<Order_By>;
  /** 行銷活動子表 id */
  campaign_child_id?: InputMaybe<Order_By>;
  /** 行銷活動主表 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣數值設定，單位是新台幣元、百分比折扣、0 為免費 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "order_discount_snapshot" */
export type Order_Discount_Snapshot_Var_Samp_Order_By = {
  /** 實際折扣金額，單位是新台幣元 */
  actual_discount_amount?: InputMaybe<Order_By>;
  /** 行銷活動子表 id */
  campaign_child_id?: InputMaybe<Order_By>;
  /** 行銷活動主表 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣數值設定，單位是新台幣元、百分比折扣、0 為免費 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "order_discount_snapshot" */
export type Order_Discount_Snapshot_Variance_Order_By = {
  /** 實際折扣金額，單位是新台幣元 */
  actual_discount_amount?: InputMaybe<Order_By>;
  /** 行銷活動子表 id */
  campaign_child_id?: InputMaybe<Order_By>;
  /** 行銷活動主表 id */
  campaign_id?: InputMaybe<Order_By>;
  /** 折扣數值設定，單位是新台幣元、百分比折扣、0 為免費 */
  discount_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單 id */
  order_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Order_Max_Fields = {
  __typename?: 'order_max_fields';
  /** 取消時間 */
  canceled_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 備註 */
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 顧客生日快照 */
  customer_birthday_snapshot?: Maybe<Scalars['date']['output']>;
  /** 租用顧客 id */
  customer_id?: Maybe<Scalars['bigint']['output']>;
  /** 顧客身分證字號快照 */
  customer_identity_number_snapshot?: Maybe<Scalars['String']['output']>;
  /** 顧客證件類型快照 (身分證、護照或居留證) */
  customer_identity_type_snapshot?: Maybe<Scalars['customeridentitydoctype']['output']>;
  /** 顧客手機快照，格式為 09xxoooxxx */
  customer_mobile_phone_number_snapshot?: Maybe<Scalars['String']['output']>;
  /** 顧客名稱快照 */
  customer_name_snapshot?: Maybe<Scalars['String']['output']>;
  /** 顧客居住地址快照 */
  customer_residential_address_snapshot?: Maybe<Scalars['String']['output']>;
  /** 顧客居住行政區快照 */
  customer_residential_area_snapshot?: Maybe<Scalars['String']['output']>;
  /** 顧客居住縣市快照 */
  customer_residential_city_snapshot?: Maybe<Scalars['String']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: Maybe<Scalars['Int']['output']>;
  /** 預定結束時間 */
  end_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 紀錄原先訂單建立時的預定結束時間 */
  end_at_snapshot?: Maybe<Scalars['timestamptz']['output']>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: Maybe<Scalars['Int']['output']>;
  /** 延長用車的次數 */
  extension_count?: Maybe<Scalars['Int']['output']>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 訂單編號 */
  order_number?: Maybe<Scalars['String']['output']>;
  /** 訂單付款狀態 OrderPaymentStatus */
  payment_status?: Maybe<Scalars['orderpaymentstatus']['output']>;
  /** 訂單付款方式 OrderPaymentType */
  payment_type?: Maybe<Scalars['orderpaymenttype']['output']>;
  /** 取車時間 */
  picked_up_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  /** 車行名稱快照 */
  rental_company_name_snapshot?: Maybe<Scalars['String']['output']>;
  /** 車行店家政策 ids 快照 */
  rental_company_policy_ids_snapshot?: Maybe<Array<Scalars['Int']['output']>>;
  /** 還車時間 */
  returned_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 預定開始時間 */
  start_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 紀錄原先訂單建立時的預定開始時間 */
  start_at_snapshot?: Maybe<Scalars['timestamptz']['output']>;
  /** 站點地址快照 */
  station_address_snapshot?: Maybe<Scalars['String']['output']>;
  /** 取還車站點 id */
  station_id?: Maybe<Scalars['bigint']['output']>;
  /** 站點名稱快照 */
  station_name_snapshot?: Maybe<Scalars['String']['output']>;
  /** 站點類型快照 */
  station_type_snapshot?: Maybe<Scalars['stationtype']['output']>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: Maybe<Scalars['Int']['output']>;
  /** 訂單旅程狀態 OrderTripStatus */
  trip_status?: Maybe<Scalars['ordertripstatus']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 車廠快照 */
  vehicle_brand_name_snapshot?: Maybe<Scalars['String']['output']>;
  /** 使用車輛 id */
  vehicle_id?: Maybe<Scalars['bigint']['output']>;
  /** 車牌號碼前段快照 */
  vehicle_license_plate_front_snapshot?: Maybe<Scalars['String']['output']>;
  /** 車牌號碼後段快照 */
  vehicle_license_plate_rear_snapshot?: Maybe<Scalars['String']['output']>;
  /** 車款快照 */
  vehicle_model_name_snapshot?: Maybe<Scalars['String']['output']>;
  /** 訂單建立當下，該車輛適用的計費單位（例如：時租或日租） */
  vehicle_rental_plan_type_snapshot?: Maybe<Scalars['vehiclerentalplanunit']['output']>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: Maybe<Scalars['Int']['output']>;
  /** 車型快照 */
  vehicle_type_name_snapshot?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "order" */
export type Order_Max_Order_By = {
  /** 取消時間 */
  canceled_at?: InputMaybe<Order_By>;
  /** 備註 */
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 顧客生日快照 */
  customer_birthday_snapshot?: InputMaybe<Order_By>;
  /** 租用顧客 id */
  customer_id?: InputMaybe<Order_By>;
  /** 顧客身分證字號快照 */
  customer_identity_number_snapshot?: InputMaybe<Order_By>;
  /** 顧客證件類型快照 (身分證、護照或居留證) */
  customer_identity_type_snapshot?: InputMaybe<Order_By>;
  /** 顧客手機快照，格式為 09xxoooxxx */
  customer_mobile_phone_number_snapshot?: InputMaybe<Order_By>;
  /** 顧客名稱快照 */
  customer_name_snapshot?: InputMaybe<Order_By>;
  /** 顧客居住地址快照 */
  customer_residential_address_snapshot?: InputMaybe<Order_By>;
  /** 顧客居住行政區快照 */
  customer_residential_area_snapshot?: InputMaybe<Order_By>;
  /** 顧客居住縣市快照 */
  customer_residential_city_snapshot?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: InputMaybe<Order_By>;
  /** 預定結束時間 */
  end_at?: InputMaybe<Order_By>;
  /** 紀錄原先訂單建立時的預定結束時間 */
  end_at_snapshot?: InputMaybe<Order_By>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: InputMaybe<Order_By>;
  /** 延長用車的次數 */
  extension_count?: InputMaybe<Order_By>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單編號 */
  order_number?: InputMaybe<Order_By>;
  /** 訂單付款狀態 OrderPaymentStatus */
  payment_status?: InputMaybe<Order_By>;
  /** 訂單付款方式 OrderPaymentType */
  payment_type?: InputMaybe<Order_By>;
  /** 取車時間 */
  picked_up_at?: InputMaybe<Order_By>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 車行名稱快照 */
  rental_company_name_snapshot?: InputMaybe<Order_By>;
  /** 車行店家政策 ids 快照 */
  rental_company_policy_ids_snapshot?: InputMaybe<Order_By>;
  /** 還車時間 */
  returned_at?: InputMaybe<Order_By>;
  /** 預定開始時間 */
  start_at?: InputMaybe<Order_By>;
  /** 紀錄原先訂單建立時的預定開始時間 */
  start_at_snapshot?: InputMaybe<Order_By>;
  /** 站點地址快照 */
  station_address_snapshot?: InputMaybe<Order_By>;
  /** 取還車站點 id */
  station_id?: InputMaybe<Order_By>;
  /** 站點名稱快照 */
  station_name_snapshot?: InputMaybe<Order_By>;
  /** 站點類型快照 */
  station_type_snapshot?: InputMaybe<Order_By>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: InputMaybe<Order_By>;
  /** 訂單旅程狀態 OrderTripStatus */
  trip_status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 車廠快照 */
  vehicle_brand_name_snapshot?: InputMaybe<Order_By>;
  /** 使用車輛 id */
  vehicle_id?: InputMaybe<Order_By>;
  /** 車牌號碼前段快照 */
  vehicle_license_plate_front_snapshot?: InputMaybe<Order_By>;
  /** 車牌號碼後段快照 */
  vehicle_license_plate_rear_snapshot?: InputMaybe<Order_By>;
  /** 車款快照 */
  vehicle_model_name_snapshot?: InputMaybe<Order_By>;
  /** 訂單建立當下，該車輛適用的計費單位（例如：時租或日租） */
  vehicle_rental_plan_type_snapshot?: InputMaybe<Order_By>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: InputMaybe<Order_By>;
  /** 車型快照 */
  vehicle_type_name_snapshot?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
  __typename?: 'order_min_fields';
  /** 取消時間 */
  canceled_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 備註 */
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 顧客生日快照 */
  customer_birthday_snapshot?: Maybe<Scalars['date']['output']>;
  /** 租用顧客 id */
  customer_id?: Maybe<Scalars['bigint']['output']>;
  /** 顧客身分證字號快照 */
  customer_identity_number_snapshot?: Maybe<Scalars['String']['output']>;
  /** 顧客證件類型快照 (身分證、護照或居留證) */
  customer_identity_type_snapshot?: Maybe<Scalars['customeridentitydoctype']['output']>;
  /** 顧客手機快照，格式為 09xxoooxxx */
  customer_mobile_phone_number_snapshot?: Maybe<Scalars['String']['output']>;
  /** 顧客名稱快照 */
  customer_name_snapshot?: Maybe<Scalars['String']['output']>;
  /** 顧客居住地址快照 */
  customer_residential_address_snapshot?: Maybe<Scalars['String']['output']>;
  /** 顧客居住行政區快照 */
  customer_residential_area_snapshot?: Maybe<Scalars['String']['output']>;
  /** 顧客居住縣市快照 */
  customer_residential_city_snapshot?: Maybe<Scalars['String']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: Maybe<Scalars['Int']['output']>;
  /** 預定結束時間 */
  end_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 紀錄原先訂單建立時的預定結束時間 */
  end_at_snapshot?: Maybe<Scalars['timestamptz']['output']>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: Maybe<Scalars['Int']['output']>;
  /** 延長用車的次數 */
  extension_count?: Maybe<Scalars['Int']['output']>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 訂單編號 */
  order_number?: Maybe<Scalars['String']['output']>;
  /** 訂單付款狀態 OrderPaymentStatus */
  payment_status?: Maybe<Scalars['orderpaymentstatus']['output']>;
  /** 訂單付款方式 OrderPaymentType */
  payment_type?: Maybe<Scalars['orderpaymenttype']['output']>;
  /** 取車時間 */
  picked_up_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  /** 車行名稱快照 */
  rental_company_name_snapshot?: Maybe<Scalars['String']['output']>;
  /** 車行店家政策 ids 快照 */
  rental_company_policy_ids_snapshot?: Maybe<Array<Scalars['Int']['output']>>;
  /** 還車時間 */
  returned_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 預定開始時間 */
  start_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 紀錄原先訂單建立時的預定開始時間 */
  start_at_snapshot?: Maybe<Scalars['timestamptz']['output']>;
  /** 站點地址快照 */
  station_address_snapshot?: Maybe<Scalars['String']['output']>;
  /** 取還車站點 id */
  station_id?: Maybe<Scalars['bigint']['output']>;
  /** 站點名稱快照 */
  station_name_snapshot?: Maybe<Scalars['String']['output']>;
  /** 站點類型快照 */
  station_type_snapshot?: Maybe<Scalars['stationtype']['output']>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: Maybe<Scalars['Int']['output']>;
  /** 訂單旅程狀態 OrderTripStatus */
  trip_status?: Maybe<Scalars['ordertripstatus']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 車廠快照 */
  vehicle_brand_name_snapshot?: Maybe<Scalars['String']['output']>;
  /** 使用車輛 id */
  vehicle_id?: Maybe<Scalars['bigint']['output']>;
  /** 車牌號碼前段快照 */
  vehicle_license_plate_front_snapshot?: Maybe<Scalars['String']['output']>;
  /** 車牌號碼後段快照 */
  vehicle_license_plate_rear_snapshot?: Maybe<Scalars['String']['output']>;
  /** 車款快照 */
  vehicle_model_name_snapshot?: Maybe<Scalars['String']['output']>;
  /** 訂單建立當下，該車輛適用的計費單位（例如：時租或日租） */
  vehicle_rental_plan_type_snapshot?: Maybe<Scalars['vehiclerentalplanunit']['output']>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: Maybe<Scalars['Int']['output']>;
  /** 車型快照 */
  vehicle_type_name_snapshot?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "order" */
export type Order_Min_Order_By = {
  /** 取消時間 */
  canceled_at?: InputMaybe<Order_By>;
  /** 備註 */
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 顧客生日快照 */
  customer_birthday_snapshot?: InputMaybe<Order_By>;
  /** 租用顧客 id */
  customer_id?: InputMaybe<Order_By>;
  /** 顧客身分證字號快照 */
  customer_identity_number_snapshot?: InputMaybe<Order_By>;
  /** 顧客證件類型快照 (身分證、護照或居留證) */
  customer_identity_type_snapshot?: InputMaybe<Order_By>;
  /** 顧客手機快照，格式為 09xxoooxxx */
  customer_mobile_phone_number_snapshot?: InputMaybe<Order_By>;
  /** 顧客名稱快照 */
  customer_name_snapshot?: InputMaybe<Order_By>;
  /** 顧客居住地址快照 */
  customer_residential_address_snapshot?: InputMaybe<Order_By>;
  /** 顧客居住行政區快照 */
  customer_residential_area_snapshot?: InputMaybe<Order_By>;
  /** 顧客居住縣市快照 */
  customer_residential_city_snapshot?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: InputMaybe<Order_By>;
  /** 預定結束時間 */
  end_at?: InputMaybe<Order_By>;
  /** 紀錄原先訂單建立時的預定結束時間 */
  end_at_snapshot?: InputMaybe<Order_By>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: InputMaybe<Order_By>;
  /** 延長用車的次數 */
  extension_count?: InputMaybe<Order_By>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單編號 */
  order_number?: InputMaybe<Order_By>;
  /** 訂單付款狀態 OrderPaymentStatus */
  payment_status?: InputMaybe<Order_By>;
  /** 訂單付款方式 OrderPaymentType */
  payment_type?: InputMaybe<Order_By>;
  /** 取車時間 */
  picked_up_at?: InputMaybe<Order_By>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 車行名稱快照 */
  rental_company_name_snapshot?: InputMaybe<Order_By>;
  /** 車行店家政策 ids 快照 */
  rental_company_policy_ids_snapshot?: InputMaybe<Order_By>;
  /** 還車時間 */
  returned_at?: InputMaybe<Order_By>;
  /** 預定開始時間 */
  start_at?: InputMaybe<Order_By>;
  /** 紀錄原先訂單建立時的預定開始時間 */
  start_at_snapshot?: InputMaybe<Order_By>;
  /** 站點地址快照 */
  station_address_snapshot?: InputMaybe<Order_By>;
  /** 取還車站點 id */
  station_id?: InputMaybe<Order_By>;
  /** 站點名稱快照 */
  station_name_snapshot?: InputMaybe<Order_By>;
  /** 站點類型快照 */
  station_type_snapshot?: InputMaybe<Order_By>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: InputMaybe<Order_By>;
  /** 訂單旅程狀態 OrderTripStatus */
  trip_status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 車廠快照 */
  vehicle_brand_name_snapshot?: InputMaybe<Order_By>;
  /** 使用車輛 id */
  vehicle_id?: InputMaybe<Order_By>;
  /** 車牌號碼前段快照 */
  vehicle_license_plate_front_snapshot?: InputMaybe<Order_By>;
  /** 車牌號碼後段快照 */
  vehicle_license_plate_rear_snapshot?: InputMaybe<Order_By>;
  /** 車款快照 */
  vehicle_model_name_snapshot?: InputMaybe<Order_By>;
  /** 訂單建立當下，該車輛適用的計費單位（例如：時租或日租） */
  vehicle_rental_plan_type_snapshot?: InputMaybe<Order_By>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: InputMaybe<Order_By>;
  /** 車型快照 */
  vehicle_type_name_snapshot?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "order". */
export type Order_Order_By = {
  canceled_at?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  coupon_inventories_aggregate?: InputMaybe<Coupon_Inventory_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customer_Order_By>;
  customer_birthday_snapshot?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  customer_identity_number_snapshot?: InputMaybe<Order_By>;
  customer_identity_type_snapshot?: InputMaybe<Order_By>;
  customer_mobile_phone_number_snapshot?: InputMaybe<Order_By>;
  customer_name_snapshot?: InputMaybe<Order_By>;
  customer_residential_address_snapshot?: InputMaybe<Order_By>;
  customer_residential_area_snapshot?: InputMaybe<Order_By>;
  customer_residential_city_snapshot?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deposit_amount?: InputMaybe<Order_By>;
  end_at?: InputMaybe<Order_By>;
  end_at_snapshot?: InputMaybe<Order_By>;
  estimated_amount?: InputMaybe<Order_By>;
  extension_count?: InputMaybe<Order_By>;
  fleet?: InputMaybe<Fleet_Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  generate_contract_jobs_aggregate?: InputMaybe<Generate_Contract_Job_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  order_billings_aggregate?: InputMaybe<Order_Billing_Aggregate_Order_By>;
  order_discount_snapshots_aggregate?: InputMaybe<Order_Discount_Snapshot_Aggregate_Order_By>;
  order_number?: InputMaybe<Order_By>;
  order_photos_aggregate?: InputMaybe<Order_Photo_Aggregate_Order_By>;
  payment_status?: InputMaybe<Order_By>;
  payment_type?: InputMaybe<Order_By>;
  picked_up_at?: InputMaybe<Order_By>;
  rental_company?: InputMaybe<Rental_Company_Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  rental_company_name_snapshot?: InputMaybe<Order_By>;
  rental_company_policy_ids_snapshot?: InputMaybe<Order_By>;
  returned_at?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
  start_at_snapshot?: InputMaybe<Order_By>;
  station?: InputMaybe<Station_Order_By>;
  station_address_snapshot?: InputMaybe<Order_By>;
  station_id?: InputMaybe<Order_By>;
  station_name_snapshot?: InputMaybe<Order_By>;
  station_type_snapshot?: InputMaybe<Order_By>;
  total_discount_amount?: InputMaybe<Order_By>;
  trip_status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle?: InputMaybe<Vehicle_Order_By>;
  vehicle_brand_name_snapshot?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
  vehicle_license_plate_front_snapshot?: InputMaybe<Order_By>;
  vehicle_license_plate_rear_snapshot?: InputMaybe<Order_By>;
  vehicle_model_name_snapshot?: InputMaybe<Order_By>;
  vehicle_rental_plan_type_snapshot?: InputMaybe<Order_By>;
  vehicle_seats_snapshot?: InputMaybe<Order_By>;
  vehicle_type_name_snapshot?: InputMaybe<Order_By>;
};

/** 訂單照片，e.g. 顧客取還車時車況照片/事故車損照片 */
export type Order_Photo = {
  __typename?: 'order_photo';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 通常是{取車 PICKUP/還車 RETURN}_{左 LEFT/右 RIGHT}_{前 FRONT/後 REAR}方照片，或是碰撞照片 */
  name: Scalars['orderphotoname']['output'];
  /** An object relationship */
  order: Order;
  order_id: Scalars['bigint']['output'];
  /** Google Cloud Storage 儲存位址 */
  path?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "order_photo" */
export type Order_Photo_Aggregate = {
  __typename?: 'order_photo_aggregate';
  aggregate?: Maybe<Order_Photo_Aggregate_Fields>;
  nodes: Array<Order_Photo>;
};

export type Order_Photo_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Photo_Aggregate_Bool_Exp_Count>;
};

export type Order_Photo_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Photo_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Order_Photo_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "order_photo" */
export type Order_Photo_Aggregate_Fields = {
  __typename?: 'order_photo_aggregate_fields';
  avg?: Maybe<Order_Photo_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Order_Photo_Max_Fields>;
  min?: Maybe<Order_Photo_Min_Fields>;
  stddev?: Maybe<Order_Photo_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Photo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Photo_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Photo_Sum_Fields>;
  var_pop?: Maybe<Order_Photo_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Photo_Var_Samp_Fields>;
  variance?: Maybe<Order_Photo_Variance_Fields>;
};


/** aggregate fields of "order_photo" */
export type Order_Photo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Photo_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "order_photo" */
export type Order_Photo_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Photo_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Photo_Max_Order_By>;
  min?: InputMaybe<Order_Photo_Min_Order_By>;
  stddev?: InputMaybe<Order_Photo_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Photo_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Photo_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Photo_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Photo_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Photo_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Photo_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Order_Photo_Avg_Fields = {
  __typename?: 'order_photo_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "order_photo" */
export type Order_Photo_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_photo". All fields are combined with a logical 'AND'. */
export type Order_Photo_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Photo_Bool_Exp>>;
  _not?: InputMaybe<Order_Photo_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Photo_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<Orderphotoname_Comparison_Exp>;
  order?: InputMaybe<Order_Bool_Exp>;
  order_id?: InputMaybe<Bigint_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Order_Photo_Max_Fields = {
  __typename?: 'order_photo_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 通常是{取車 PICKUP/還車 RETURN}_{左 LEFT/右 RIGHT}_{前 FRONT/後 REAR}方照片，或是碰撞照片 */
  name?: Maybe<Scalars['orderphotoname']['output']>;
  order_id?: Maybe<Scalars['bigint']['output']>;
  /** Google Cloud Storage 儲存位址 */
  path?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "order_photo" */
export type Order_Photo_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 通常是{取車 PICKUP/還車 RETURN}_{左 LEFT/右 RIGHT}_{前 FRONT/後 REAR}方照片，或是碰撞照片 */
  name?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  /** Google Cloud Storage 儲存位址 */
  path?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Photo_Min_Fields = {
  __typename?: 'order_photo_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 通常是{取車 PICKUP/還車 RETURN}_{左 LEFT/右 RIGHT}_{前 FRONT/後 REAR}方照片，或是碰撞照片 */
  name?: Maybe<Scalars['orderphotoname']['output']>;
  order_id?: Maybe<Scalars['bigint']['output']>;
  /** Google Cloud Storage 儲存位址 */
  path?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "order_photo" */
export type Order_Photo_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 通常是{取車 PICKUP/還車 RETURN}_{左 LEFT/右 RIGHT}_{前 FRONT/後 REAR}方照片，或是碰撞照片 */
  name?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  /** Google Cloud Storage 儲存位址 */
  path?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "order_photo". */
export type Order_Photo_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_Order_By>;
  order_id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "order_photo" */
export enum Order_Photo_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Path = 'path',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Order_Photo_Stddev_Fields = {
  __typename?: 'order_photo_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "order_photo" */
export type Order_Photo_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Photo_Stddev_Pop_Fields = {
  __typename?: 'order_photo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "order_photo" */
export type Order_Photo_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Photo_Stddev_Samp_Fields = {
  __typename?: 'order_photo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "order_photo" */
export type Order_Photo_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "order_photo" */
export type Order_Photo_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Photo_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Photo_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 通常是{取車 PICKUP/還車 RETURN}_{左 LEFT/右 RIGHT}_{前 FRONT/後 REAR}方照片，或是碰撞照片 */
  name?: InputMaybe<Scalars['orderphotoname']['input']>;
  order_id?: InputMaybe<Scalars['bigint']['input']>;
  /** Google Cloud Storage 儲存位址 */
  path?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Order_Photo_Sum_Fields = {
  __typename?: 'order_photo_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  order_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "order_photo" */
export type Order_Photo_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Order_Photo_Var_Pop_Fields = {
  __typename?: 'order_photo_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "order_photo" */
export type Order_Photo_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Photo_Var_Samp_Fields = {
  __typename?: 'order_photo_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "order_photo" */
export type Order_Photo_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Photo_Variance_Fields = {
  __typename?: 'order_photo_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "order_photo" */
export type Order_Photo_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** select columns of table "order" */
export enum Order_Select_Column {
  /** column name */
  CanceledAt = 'canceled_at',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerBirthdaySnapshot = 'customer_birthday_snapshot',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  CustomerIdentityNumberSnapshot = 'customer_identity_number_snapshot',
  /** column name */
  CustomerIdentityTypeSnapshot = 'customer_identity_type_snapshot',
  /** column name */
  CustomerMobilePhoneNumberSnapshot = 'customer_mobile_phone_number_snapshot',
  /** column name */
  CustomerNameSnapshot = 'customer_name_snapshot',
  /** column name */
  CustomerResidentialAddressSnapshot = 'customer_residential_address_snapshot',
  /** column name */
  CustomerResidentialAreaSnapshot = 'customer_residential_area_snapshot',
  /** column name */
  CustomerResidentialCitySnapshot = 'customer_residential_city_snapshot',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DepositAmount = 'deposit_amount',
  /** column name */
  EndAt = 'end_at',
  /** column name */
  EndAtSnapshot = 'end_at_snapshot',
  /** column name */
  EstimatedAmount = 'estimated_amount',
  /** column name */
  ExtensionCount = 'extension_count',
  /** column name */
  FleetId = 'fleet_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderNumber = 'order_number',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  PickedUpAt = 'picked_up_at',
  /** column name */
  RentalCompanyId = 'rental_company_id',
  /** column name */
  RentalCompanyNameSnapshot = 'rental_company_name_snapshot',
  /** column name */
  RentalCompanyPolicyIdsSnapshot = 'rental_company_policy_ids_snapshot',
  /** column name */
  ReturnedAt = 'returned_at',
  /** column name */
  StartAt = 'start_at',
  /** column name */
  StartAtSnapshot = 'start_at_snapshot',
  /** column name */
  StationAddressSnapshot = 'station_address_snapshot',
  /** column name */
  StationId = 'station_id',
  /** column name */
  StationNameSnapshot = 'station_name_snapshot',
  /** column name */
  StationTypeSnapshot = 'station_type_snapshot',
  /** column name */
  TotalDiscountAmount = 'total_discount_amount',
  /** column name */
  TripStatus = 'trip_status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleBrandNameSnapshot = 'vehicle_brand_name_snapshot',
  /** column name */
  VehicleId = 'vehicle_id',
  /** column name */
  VehicleLicensePlateFrontSnapshot = 'vehicle_license_plate_front_snapshot',
  /** column name */
  VehicleLicensePlateRearSnapshot = 'vehicle_license_plate_rear_snapshot',
  /** column name */
  VehicleModelNameSnapshot = 'vehicle_model_name_snapshot',
  /** column name */
  VehicleRentalPlanTypeSnapshot = 'vehicle_rental_plan_type_snapshot',
  /** column name */
  VehicleSeatsSnapshot = 'vehicle_seats_snapshot',
  /** column name */
  VehicleTypeNameSnapshot = 'vehicle_type_name_snapshot'
}

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
  __typename?: 'order_stddev_fields';
  /** 租用顧客 id */
  customer_id?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: Maybe<Scalars['Float']['output']>;
  /** 延長用車的次數 */
  extension_count?: Maybe<Scalars['Float']['output']>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 取還車站點 id */
  station_id?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: Maybe<Scalars['Float']['output']>;
  /** 使用車輛 id */
  vehicle_id?: Maybe<Scalars['Float']['output']>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "order" */
export type Order_Stddev_Order_By = {
  /** 租用顧客 id */
  customer_id?: InputMaybe<Order_By>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: InputMaybe<Order_By>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: InputMaybe<Order_By>;
  /** 延長用車的次數 */
  extension_count?: InputMaybe<Order_By>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 取還車站點 id */
  station_id?: InputMaybe<Order_By>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: InputMaybe<Order_By>;
  /** 使用車輛 id */
  vehicle_id?: InputMaybe<Order_By>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
  __typename?: 'order_stddev_pop_fields';
  /** 租用顧客 id */
  customer_id?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: Maybe<Scalars['Float']['output']>;
  /** 延長用車的次數 */
  extension_count?: Maybe<Scalars['Float']['output']>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 取還車站點 id */
  station_id?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: Maybe<Scalars['Float']['output']>;
  /** 使用車輛 id */
  vehicle_id?: Maybe<Scalars['Float']['output']>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "order" */
export type Order_Stddev_Pop_Order_By = {
  /** 租用顧客 id */
  customer_id?: InputMaybe<Order_By>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: InputMaybe<Order_By>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: InputMaybe<Order_By>;
  /** 延長用車的次數 */
  extension_count?: InputMaybe<Order_By>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 取還車站點 id */
  station_id?: InputMaybe<Order_By>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: InputMaybe<Order_By>;
  /** 使用車輛 id */
  vehicle_id?: InputMaybe<Order_By>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
  __typename?: 'order_stddev_samp_fields';
  /** 租用顧客 id */
  customer_id?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: Maybe<Scalars['Float']['output']>;
  /** 延長用車的次數 */
  extension_count?: Maybe<Scalars['Float']['output']>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 取還車站點 id */
  station_id?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: Maybe<Scalars['Float']['output']>;
  /** 使用車輛 id */
  vehicle_id?: Maybe<Scalars['Float']['output']>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "order" */
export type Order_Stddev_Samp_Order_By = {
  /** 租用顧客 id */
  customer_id?: InputMaybe<Order_By>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: InputMaybe<Order_By>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: InputMaybe<Order_By>;
  /** 延長用車的次數 */
  extension_count?: InputMaybe<Order_By>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 取還車站點 id */
  station_id?: InputMaybe<Order_By>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: InputMaybe<Order_By>;
  /** 使用車輛 id */
  vehicle_id?: InputMaybe<Order_By>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "order" */
export type Order_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Stream_Cursor_Value_Input = {
  /** 取消時間 */
  canceled_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 備註 */
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 顧客生日快照 */
  customer_birthday_snapshot?: InputMaybe<Scalars['date']['input']>;
  /** 租用顧客 id */
  customer_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 顧客身分證字號快照 */
  customer_identity_number_snapshot?: InputMaybe<Scalars['String']['input']>;
  /** 顧客證件類型快照 (身分證、護照或居留證) */
  customer_identity_type_snapshot?: InputMaybe<Scalars['customeridentitydoctype']['input']>;
  /** 顧客手機快照，格式為 09xxoooxxx */
  customer_mobile_phone_number_snapshot?: InputMaybe<Scalars['String']['input']>;
  /** 顧客名稱快照 */
  customer_name_snapshot?: InputMaybe<Scalars['String']['input']>;
  /** 顧客居住地址快照 */
  customer_residential_address_snapshot?: InputMaybe<Scalars['String']['input']>;
  /** 顧客居住行政區快照 */
  customer_residential_area_snapshot?: InputMaybe<Scalars['String']['input']>;
  /** 顧客居住縣市快照 */
  customer_residential_city_snapshot?: InputMaybe<Scalars['String']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: InputMaybe<Scalars['Int']['input']>;
  /** 預定結束時間 */
  end_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 紀錄原先訂單建立時的預定結束時間 */
  end_at_snapshot?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: InputMaybe<Scalars['Int']['input']>;
  /** 延長用車的次數 */
  extension_count?: InputMaybe<Scalars['Int']['input']>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 訂單編號 */
  order_number?: InputMaybe<Scalars['String']['input']>;
  /** 訂單付款狀態 OrderPaymentStatus */
  payment_status?: InputMaybe<Scalars['orderpaymentstatus']['input']>;
  /** 訂單付款方式 OrderPaymentType */
  payment_type?: InputMaybe<Scalars['orderpaymenttype']['input']>;
  /** 取車時間 */
  picked_up_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 車行名稱快照 */
  rental_company_name_snapshot?: InputMaybe<Scalars['String']['input']>;
  /** 車行店家政策 ids 快照 */
  rental_company_policy_ids_snapshot?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** 還車時間 */
  returned_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 預定開始時間 */
  start_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 紀錄原先訂單建立時的預定開始時間 */
  start_at_snapshot?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 站點地址快照 */
  station_address_snapshot?: InputMaybe<Scalars['String']['input']>;
  /** 取還車站點 id */
  station_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 站點名稱快照 */
  station_name_snapshot?: InputMaybe<Scalars['String']['input']>;
  /** 站點類型快照 */
  station_type_snapshot?: InputMaybe<Scalars['stationtype']['input']>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: InputMaybe<Scalars['Int']['input']>;
  /** 訂單旅程狀態 OrderTripStatus */
  trip_status?: InputMaybe<Scalars['ordertripstatus']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 車廠快照 */
  vehicle_brand_name_snapshot?: InputMaybe<Scalars['String']['input']>;
  /** 使用車輛 id */
  vehicle_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 車牌號碼前段快照 */
  vehicle_license_plate_front_snapshot?: InputMaybe<Scalars['String']['input']>;
  /** 車牌號碼後段快照 */
  vehicle_license_plate_rear_snapshot?: InputMaybe<Scalars['String']['input']>;
  /** 車款快照 */
  vehicle_model_name_snapshot?: InputMaybe<Scalars['String']['input']>;
  /** 訂單建立當下，該車輛適用的計費單位（例如：時租或日租） */
  vehicle_rental_plan_type_snapshot?: InputMaybe<Scalars['vehiclerentalplanunit']['input']>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: InputMaybe<Scalars['Int']['input']>;
  /** 車型快照 */
  vehicle_type_name_snapshot?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Order_Sum_Fields = {
  __typename?: 'order_sum_fields';
  /** 租用顧客 id */
  customer_id?: Maybe<Scalars['bigint']['output']>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: Maybe<Scalars['Int']['output']>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: Maybe<Scalars['Int']['output']>;
  /** 延長用車的次數 */
  extension_count?: Maybe<Scalars['Int']['output']>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  /** 取還車站點 id */
  station_id?: Maybe<Scalars['bigint']['output']>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: Maybe<Scalars['Int']['output']>;
  /** 使用車輛 id */
  vehicle_id?: Maybe<Scalars['bigint']['output']>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "order" */
export type Order_Sum_Order_By = {
  /** 租用顧客 id */
  customer_id?: InputMaybe<Order_By>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: InputMaybe<Order_By>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: InputMaybe<Order_By>;
  /** 延長用車的次數 */
  extension_count?: InputMaybe<Order_By>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 取還車站點 id */
  station_id?: InputMaybe<Order_By>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: InputMaybe<Order_By>;
  /** 使用車輛 id */
  vehicle_id?: InputMaybe<Order_By>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Order_Var_Pop_Fields = {
  __typename?: 'order_var_pop_fields';
  /** 租用顧客 id */
  customer_id?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: Maybe<Scalars['Float']['output']>;
  /** 延長用車的次數 */
  extension_count?: Maybe<Scalars['Float']['output']>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 取還車站點 id */
  station_id?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: Maybe<Scalars['Float']['output']>;
  /** 使用車輛 id */
  vehicle_id?: Maybe<Scalars['Float']['output']>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "order" */
export type Order_Var_Pop_Order_By = {
  /** 租用顧客 id */
  customer_id?: InputMaybe<Order_By>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: InputMaybe<Order_By>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: InputMaybe<Order_By>;
  /** 延長用車的次數 */
  extension_count?: InputMaybe<Order_By>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 取還車站點 id */
  station_id?: InputMaybe<Order_By>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: InputMaybe<Order_By>;
  /** 使用車輛 id */
  vehicle_id?: InputMaybe<Order_By>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
  __typename?: 'order_var_samp_fields';
  /** 租用顧客 id */
  customer_id?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: Maybe<Scalars['Float']['output']>;
  /** 延長用車的次數 */
  extension_count?: Maybe<Scalars['Float']['output']>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 取還車站點 id */
  station_id?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: Maybe<Scalars['Float']['output']>;
  /** 使用車輛 id */
  vehicle_id?: Maybe<Scalars['Float']['output']>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "order" */
export type Order_Var_Samp_Order_By = {
  /** 租用顧客 id */
  customer_id?: InputMaybe<Order_By>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: InputMaybe<Order_By>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: InputMaybe<Order_By>;
  /** 延長用車的次數 */
  extension_count?: InputMaybe<Order_By>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 取還車站點 id */
  station_id?: InputMaybe<Order_By>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: InputMaybe<Order_By>;
  /** 使用車輛 id */
  vehicle_id?: InputMaybe<Order_By>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Variance_Fields = {
  __typename?: 'order_variance_fields';
  /** 租用顧客 id */
  customer_id?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: Maybe<Scalars['Float']['output']>;
  /** 延長用車的次數 */
  extension_count?: Maybe<Scalars['Float']['output']>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 取還車站點 id */
  station_id?: Maybe<Scalars['Float']['output']>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: Maybe<Scalars['Float']['output']>;
  /** 使用車輛 id */
  vehicle_id?: Maybe<Scalars['Float']['output']>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "order" */
export type Order_Variance_Order_By = {
  /** 租用顧客 id */
  customer_id?: InputMaybe<Order_By>;
  /** 此筆訂單預付的定金 (原價) */
  deposit_amount?: InputMaybe<Order_By>;
  /** 此筆訂單預估總金額（原價） */
  estimated_amount?: InputMaybe<Order_By>;
  /** 延長用車的次數 */
  extension_count?: InputMaybe<Order_By>;
  /** 訂單所屬的車隊 id（為訂單建立當下，車輛所屬的車隊） */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 訂單所屬車隊的車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 取還車站點 id */
  station_id?: InputMaybe<Order_By>;
  /** 此筆訂單的總折扣金額 */
  total_discount_amount?: InputMaybe<Order_By>;
  /** 使用車輛 id */
  vehicle_id?: InputMaybe<Order_By>;
  /** 座位數快照 */
  vehicle_seats_snapshot?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "orderbillingcategory". All fields are combined with logical 'AND'. */
export type Orderbillingcategory_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['orderbillingcategory']['input']>;
  _gt?: InputMaybe<Scalars['orderbillingcategory']['input']>;
  _gte?: InputMaybe<Scalars['orderbillingcategory']['input']>;
  _in?: InputMaybe<Array<Scalars['orderbillingcategory']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['orderbillingcategory']['input']>;
  _lte?: InputMaybe<Scalars['orderbillingcategory']['input']>;
  _neq?: InputMaybe<Scalars['orderbillingcategory']['input']>;
  _nin?: InputMaybe<Array<Scalars['orderbillingcategory']['input']>>;
};

/** Boolean expression to compare columns of type "orderbillingstatus". All fields are combined with logical 'AND'. */
export type Orderbillingstatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['orderbillingstatus']['input']>;
  _gt?: InputMaybe<Scalars['orderbillingstatus']['input']>;
  _gte?: InputMaybe<Scalars['orderbillingstatus']['input']>;
  _in?: InputMaybe<Array<Scalars['orderbillingstatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['orderbillingstatus']['input']>;
  _lte?: InputMaybe<Scalars['orderbillingstatus']['input']>;
  _neq?: InputMaybe<Scalars['orderbillingstatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['orderbillingstatus']['input']>>;
};

/** Boolean expression to compare columns of type "orderpaymentstatus". All fields are combined with logical 'AND'. */
export type Orderpaymentstatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['orderpaymentstatus']['input']>;
  _gt?: InputMaybe<Scalars['orderpaymentstatus']['input']>;
  _gte?: InputMaybe<Scalars['orderpaymentstatus']['input']>;
  _in?: InputMaybe<Array<Scalars['orderpaymentstatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['orderpaymentstatus']['input']>;
  _lte?: InputMaybe<Scalars['orderpaymentstatus']['input']>;
  _neq?: InputMaybe<Scalars['orderpaymentstatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['orderpaymentstatus']['input']>>;
};

/** Boolean expression to compare columns of type "orderpaymenttype". All fields are combined with logical 'AND'. */
export type Orderpaymenttype_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['orderpaymenttype']['input']>;
  _gt?: InputMaybe<Scalars['orderpaymenttype']['input']>;
  _gte?: InputMaybe<Scalars['orderpaymenttype']['input']>;
  _in?: InputMaybe<Array<Scalars['orderpaymenttype']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['orderpaymenttype']['input']>;
  _lte?: InputMaybe<Scalars['orderpaymenttype']['input']>;
  _neq?: InputMaybe<Scalars['orderpaymenttype']['input']>;
  _nin?: InputMaybe<Array<Scalars['orderpaymenttype']['input']>>;
};

/** Boolean expression to compare columns of type "orderphotoname". All fields are combined with logical 'AND'. */
export type Orderphotoname_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['orderphotoname']['input']>;
  _gt?: InputMaybe<Scalars['orderphotoname']['input']>;
  _gte?: InputMaybe<Scalars['orderphotoname']['input']>;
  _in?: InputMaybe<Array<Scalars['orderphotoname']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['orderphotoname']['input']>;
  _lte?: InputMaybe<Scalars['orderphotoname']['input']>;
  _neq?: InputMaybe<Scalars['orderphotoname']['input']>;
  _nin?: InputMaybe<Array<Scalars['orderphotoname']['input']>>;
};

/** Boolean expression to compare columns of type "ordertripstatus". All fields are combined with logical 'AND'. */
export type Ordertripstatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['ordertripstatus']['input']>;
  _gt?: InputMaybe<Scalars['ordertripstatus']['input']>;
  _gte?: InputMaybe<Scalars['ordertripstatus']['input']>;
  _in?: InputMaybe<Array<Scalars['ordertripstatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['ordertripstatus']['input']>;
  _lte?: InputMaybe<Scalars['ordertripstatus']['input']>;
  _neq?: InputMaybe<Scalars['ordertripstatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['ordertripstatus']['input']>>;
};

/** 組織，是根組織、認證機構、車行、車隊的父類別 */
export type Organization = {
  __typename?: 'organization';
  /** An array relationship */
  certificateAuthoritiesById: Array<Certificate_Authority>;
  /** An aggregate relationship */
  certificateAuthoritiesById_aggregate: Certificate_Authority_Aggregate;
  /** An array relationship */
  certificate_authorities: Array<Certificate_Authority>;
  /** An aggregate relationship */
  certificate_authorities_aggregate: Certificate_Authority_Aggregate;
  /** An object relationship */
  certificate_authority?: Maybe<Certificate_Authority>;
  created_at: Scalars['timestamptz']['output'];
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  fleet?: Maybe<Fleet>;
  /** An array relationship */
  fleets: Array<Fleet>;
  /** An aggregate relationship */
  fleets_aggregate: Fleet_Aggregate;
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  rental_companies: Array<Rental_Company>;
  /** An aggregate relationship */
  rental_companies_aggregate: Rental_Company_Aggregate;
  /** An object relationship */
  rental_company?: Maybe<Rental_Company>;
  /** For orm mapping class inheritance; possible values: root_organization, certificate_authority, rental_company, fleet. should not be organization. */
  type: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 組織，是根組織、認證機構、車行、車隊的父類別 */
export type OrganizationCertificateAuthoritiesByIdArgs = {
  distinct_on?: InputMaybe<Array<Certificate_Authority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Certificate_Authority_Order_By>>;
  where?: InputMaybe<Certificate_Authority_Bool_Exp>;
};


/** 組織，是根組織、認證機構、車行、車隊的父類別 */
export type OrganizationCertificateAuthoritiesById_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Certificate_Authority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Certificate_Authority_Order_By>>;
  where?: InputMaybe<Certificate_Authority_Bool_Exp>;
};


/** 組織，是根組織、認證機構、車行、車隊的父類別 */
export type OrganizationCertificate_AuthoritiesArgs = {
  distinct_on?: InputMaybe<Array<Certificate_Authority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Certificate_Authority_Order_By>>;
  where?: InputMaybe<Certificate_Authority_Bool_Exp>;
};


/** 組織，是根組織、認證機構、車行、車隊的父類別 */
export type OrganizationCertificate_Authorities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Certificate_Authority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Certificate_Authority_Order_By>>;
  where?: InputMaybe<Certificate_Authority_Bool_Exp>;
};


/** 組織，是根組織、認證機構、車行、車隊的父類別 */
export type OrganizationFleetsArgs = {
  distinct_on?: InputMaybe<Array<Fleet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fleet_Order_By>>;
  where?: InputMaybe<Fleet_Bool_Exp>;
};


/** 組織，是根組織、認證機構、車行、車隊的父類別 */
export type OrganizationFleets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fleet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fleet_Order_By>>;
  where?: InputMaybe<Fleet_Bool_Exp>;
};


/** 組織，是根組織、認證機構、車行、車隊的父類別 */
export type OrganizationRental_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Rental_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Company_Order_By>>;
  where?: InputMaybe<Rental_Company_Bool_Exp>;
};


/** 組織，是根組織、認證機構、車行、車隊的父類別 */
export type OrganizationRental_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rental_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Company_Order_By>>;
  where?: InputMaybe<Rental_Company_Bool_Exp>;
};

/** aggregated selection of "organization" */
export type Organization_Aggregate = {
  __typename?: 'organization_aggregate';
  aggregate?: Maybe<Organization_Aggregate_Fields>;
  nodes: Array<Organization>;
};

/** aggregate fields of "organization" */
export type Organization_Aggregate_Fields = {
  __typename?: 'organization_aggregate_fields';
  avg?: Maybe<Organization_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Max_Fields>;
  min?: Maybe<Organization_Min_Fields>;
  stddev?: Maybe<Organization_Stddev_Fields>;
  stddev_pop?: Maybe<Organization_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organization_Stddev_Samp_Fields>;
  sum?: Maybe<Organization_Sum_Fields>;
  var_pop?: Maybe<Organization_Var_Pop_Fields>;
  var_samp?: Maybe<Organization_Var_Samp_Fields>;
  variance?: Maybe<Organization_Variance_Fields>;
};


/** aggregate fields of "organization" */
export type Organization_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Organization_Avg_Fields = {
  __typename?: 'organization_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Bool_Exp>>;
  _not?: InputMaybe<Organization_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Bool_Exp>>;
  certificateAuthoritiesById?: InputMaybe<Certificate_Authority_Bool_Exp>;
  certificateAuthoritiesById_aggregate?: InputMaybe<Certificate_Authority_Aggregate_Bool_Exp>;
  certificate_authorities?: InputMaybe<Certificate_Authority_Bool_Exp>;
  certificate_authorities_aggregate?: InputMaybe<Certificate_Authority_Aggregate_Bool_Exp>;
  certificate_authority?: InputMaybe<Certificate_Authority_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  fleet?: InputMaybe<Fleet_Bool_Exp>;
  fleets?: InputMaybe<Fleet_Bool_Exp>;
  fleets_aggregate?: InputMaybe<Fleet_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  rental_companies?: InputMaybe<Rental_Company_Bool_Exp>;
  rental_companies_aggregate?: InputMaybe<Rental_Company_Aggregate_Bool_Exp>;
  rental_company?: InputMaybe<Rental_Company_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Organization_Max_Fields = {
  __typename?: 'organization_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** For orm mapping class inheritance; possible values: root_organization, certificate_authority, rental_company, fleet. should not be organization. */
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Organization_Min_Fields = {
  __typename?: 'organization_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** For orm mapping class inheritance; possible values: root_organization, certificate_authority, rental_company, fleet. should not be organization. */
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "organization". */
export type Organization_Order_By = {
  certificateAuthoritiesById_aggregate?: InputMaybe<Certificate_Authority_Aggregate_Order_By>;
  certificate_authorities_aggregate?: InputMaybe<Certificate_Authority_Aggregate_Order_By>;
  certificate_authority?: InputMaybe<Certificate_Authority_Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  fleet?: InputMaybe<Fleet_Order_By>;
  fleets_aggregate?: InputMaybe<Fleet_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  rental_companies_aggregate?: InputMaybe<Rental_Company_Aggregate_Order_By>;
  rental_company?: InputMaybe<Rental_Company_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "organization" */
export enum Organization_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Organization_Stddev_Fields = {
  __typename?: 'organization_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Organization_Stddev_Pop_Fields = {
  __typename?: 'organization_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Organization_Stddev_Samp_Fields = {
  __typename?: 'organization_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "organization" */
export type Organization_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** For orm mapping class inheritance; possible values: root_organization, certificate_authority, rental_company, fleet. should not be organization. */
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Organization_Sum_Fields = {
  __typename?: 'organization_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Organization_Var_Pop_Fields = {
  __typename?: 'organization_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Organization_Var_Samp_Fields = {
  __typename?: 'organization_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Organization_Variance_Fields = {
  __typename?: 'organization_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** 時段，e.g. 平日/假日/連假 */
export type Period = {
  __typename?: 'period';
  /** An array relationship */
  calendars: Array<Calendar>;
  /** An aggregate relationship */
  calendars_aggregate: Calendar_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 是否為預設時段 */
  is_default: Scalars['Boolean']['output'];
  /** 時段名稱 */
  name: Scalars['String']['output'];
  /** An object relationship */
  rental_company: Rental_Company;
  rental_company_id: Scalars['bigint']['output'];
  /** An array relationship */
  rental_plans: Array<Rental_Plan>;
  updated_at: Scalars['timestamptz']['output'];
};


/** 時段，e.g. 平日/假日/連假 */
export type PeriodCalendarsArgs = {
  distinct_on?: InputMaybe<Array<Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Calendar_Order_By>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


/** 時段，e.g. 平日/假日/連假 */
export type PeriodCalendars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Calendar_Order_By>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


/** 時段，e.g. 平日/假日/連假 */
export type PeriodRental_PlansArgs = {
  distinct_on?: InputMaybe<Array<Rental_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Plan_Order_By>>;
  where?: InputMaybe<Rental_Plan_Bool_Exp>;
};

/** aggregated selection of "period" */
export type Period_Aggregate = {
  __typename?: 'period_aggregate';
  aggregate?: Maybe<Period_Aggregate_Fields>;
  nodes: Array<Period>;
};

export type Period_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Period_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Period_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Period_Aggregate_Bool_Exp_Count>;
};

export type Period_Aggregate_Bool_Exp_Bool_And = {
  arguments: Period_Select_Column_Period_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Period_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Period_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Period_Select_Column_Period_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Period_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Period_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Period_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Period_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "period" */
export type Period_Aggregate_Fields = {
  __typename?: 'period_aggregate_fields';
  avg?: Maybe<Period_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Period_Max_Fields>;
  min?: Maybe<Period_Min_Fields>;
  stddev?: Maybe<Period_Stddev_Fields>;
  stddev_pop?: Maybe<Period_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Period_Stddev_Samp_Fields>;
  sum?: Maybe<Period_Sum_Fields>;
  var_pop?: Maybe<Period_Var_Pop_Fields>;
  var_samp?: Maybe<Period_Var_Samp_Fields>;
  variance?: Maybe<Period_Variance_Fields>;
};


/** aggregate fields of "period" */
export type Period_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Period_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "period" */
export type Period_Aggregate_Order_By = {
  avg?: InputMaybe<Period_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Period_Max_Order_By>;
  min?: InputMaybe<Period_Min_Order_By>;
  stddev?: InputMaybe<Period_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Period_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Period_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Period_Sum_Order_By>;
  var_pop?: InputMaybe<Period_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Period_Var_Samp_Order_By>;
  variance?: InputMaybe<Period_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Period_Avg_Fields = {
  __typename?: 'period_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "period" */
export type Period_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "period". All fields are combined with a logical 'AND'. */
export type Period_Bool_Exp = {
  _and?: InputMaybe<Array<Period_Bool_Exp>>;
  _not?: InputMaybe<Period_Bool_Exp>;
  _or?: InputMaybe<Array<Period_Bool_Exp>>;
  calendars?: InputMaybe<Calendar_Bool_Exp>;
  calendars_aggregate?: InputMaybe<Calendar_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_default?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  rental_company?: InputMaybe<Rental_Company_Bool_Exp>;
  rental_company_id?: InputMaybe<Bigint_Comparison_Exp>;
  rental_plans?: InputMaybe<Rental_Plan_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Period_Max_Fields = {
  __typename?: 'period_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 時段名稱 */
  name?: Maybe<Scalars['String']['output']>;
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "period" */
export type Period_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 時段名稱 */
  name?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Period_Min_Fields = {
  __typename?: 'period_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 時段名稱 */
  name?: Maybe<Scalars['String']['output']>;
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "period" */
export type Period_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 時段名稱 */
  name?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "period". */
export type Period_Order_By = {
  calendars_aggregate?: InputMaybe<Calendar_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_default?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  rental_company?: InputMaybe<Rental_Company_Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  rental_plans_aggregate?: InputMaybe<Rental_Plan_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "period" */
export enum Period_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'is_default',
  /** column name */
  Name = 'name',
  /** column name */
  RentalCompanyId = 'rental_company_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "period_aggregate_bool_exp_bool_and_arguments_columns" columns of table "period" */
export enum Period_Select_Column_Period_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDefault = 'is_default'
}

/** select "period_aggregate_bool_exp_bool_or_arguments_columns" columns of table "period" */
export enum Period_Select_Column_Period_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDefault = 'is_default'
}

/** aggregate stddev on columns */
export type Period_Stddev_Fields = {
  __typename?: 'period_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "period" */
export type Period_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Period_Stddev_Pop_Fields = {
  __typename?: 'period_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "period" */
export type Period_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Period_Stddev_Samp_Fields = {
  __typename?: 'period_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "period" */
export type Period_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "period" */
export type Period_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Period_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Period_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否為預設時段 */
  is_default?: InputMaybe<Scalars['Boolean']['input']>;
  /** 時段名稱 */
  name?: InputMaybe<Scalars['String']['input']>;
  rental_company_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Period_Sum_Fields = {
  __typename?: 'period_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "period" */
export type Period_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Period_Var_Pop_Fields = {
  __typename?: 'period_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "period" */
export type Period_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Period_Var_Samp_Fields = {
  __typename?: 'period_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "period" */
export type Period_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Period_Variance_Fields = {
  __typename?: 'period_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rental_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "period" */
export type Period_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "pricetype". All fields are combined with logical 'AND'. */
export type Pricetype_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['pricetype']['input']>;
  _gt?: InputMaybe<Scalars['pricetype']['input']>;
  _gte?: InputMaybe<Scalars['pricetype']['input']>;
  _in?: InputMaybe<Array<Scalars['pricetype']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['pricetype']['input']>;
  _lte?: InputMaybe<Scalars['pricetype']['input']>;
  _neq?: InputMaybe<Scalars['pricetype']['input']>;
  _nin?: InputMaybe<Array<Scalars['pricetype']['input']>>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "allowance_job" */
  allowance_job: Array<Allowance_Job>;
  /** fetch aggregated fields from the table: "allowance_job" */
  allowance_job_aggregate: Allowance_Job_Aggregate;
  /** fetch data from the table: "allowance_job" using primary key columns */
  allowance_job_by_pk?: Maybe<Allowance_Job>;
  /** fetch data from the table: "billing_etc" */
  billing_etc: Array<Billing_Etc>;
  /** fetch aggregated fields from the table: "billing_etc" */
  billing_etc_aggregate: Billing_Etc_Aggregate;
  /** fetch data from the table: "billing_etc" using primary key columns */
  billing_etc_by_pk?: Maybe<Billing_Etc>;
  /** fetch data from the table: "billing_etc_file" */
  billing_etc_file: Array<Billing_Etc_File>;
  /** fetch aggregated fields from the table: "billing_etc_file" */
  billing_etc_file_aggregate: Billing_Etc_File_Aggregate;
  /** fetch data from the table: "billing_etc_file" using primary key columns */
  billing_etc_file_by_pk?: Maybe<Billing_Etc_File>;
  /** fetch data from the table: "billing_notify_job" */
  billing_notify_job: Array<Billing_Notify_Job>;
  /** fetch aggregated fields from the table: "billing_notify_job" */
  billing_notify_job_aggregate: Billing_Notify_Job_Aggregate;
  /** fetch data from the table: "billing_notify_job" using primary key columns */
  billing_notify_job_by_pk?: Maybe<Billing_Notify_Job>;
  /** fetch data from the table: "billing_transaction" */
  billing_transaction: Array<Billing_Transaction>;
  /** fetch aggregated fields from the table: "billing_transaction" */
  billing_transaction_aggregate: Billing_Transaction_Aggregate;
  /** fetch data from the table: "billing_transaction" using primary key columns */
  billing_transaction_by_pk?: Maybe<Billing_Transaction>;
  /** fetch data from the table: "binding_transaction" */
  binding_transaction: Array<Binding_Transaction>;
  /** fetch data from the table: "binding_transaction" using primary key columns */
  binding_transaction_by_pk?: Maybe<Binding_Transaction>;
  /** fetch data from the table: "calendar" */
  calendar: Array<Calendar>;
  /** fetch aggregated fields from the table: "calendar" */
  calendar_aggregate: Calendar_Aggregate;
  /** fetch data from the table: "calendar" using primary key columns */
  calendar_by_pk?: Maybe<Calendar>;
  /** fetch data from the table: "campaign" */
  campaign: Array<Campaign>;
  /** fetch aggregated fields from the table: "campaign" */
  campaign_aggregate: Campaign_Aggregate;
  /** fetch data from the table: "campaign" using primary key columns */
  campaign_by_pk?: Maybe<Campaign>;
  /** fetch data from the table: "certificate_authority" */
  certificate_authority: Array<Certificate_Authority>;
  /** fetch aggregated fields from the table: "certificate_authority" */
  certificate_authority_aggregate: Certificate_Authority_Aggregate;
  /** fetch data from the table: "certificate_authority" using primary key columns */
  certificate_authority_by_pk?: Maybe<Certificate_Authority>;
  /** fetch data from the table: "coupon" */
  coupon: Array<Coupon>;
  /** fetch data from the table: "coupon" using primary key columns */
  coupon_by_pk?: Maybe<Coupon>;
  /** fetch data from the table: "coupon_inventory" */
  coupon_inventory: Array<Coupon_Inventory>;
  /** fetch data from the table: "coupon_inventory" using primary key columns */
  coupon_inventory_by_pk?: Maybe<Coupon_Inventory>;
  /** fetch data from the table: "credit_card" */
  credit_card: Array<Credit_Card>;
  /** fetch data from the table: "credit_card" using primary key columns */
  credit_card_by_pk?: Maybe<Credit_Card>;
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>;
  /** An array relationship */
  customer_foreign_data: Array<Customer_Foreign_Data>;
  /** fetch data from the table: "customer_foreign_data" using primary key columns */
  customer_foreign_data_by_pk?: Maybe<Customer_Foreign_Data>;
  /** fetch data from the table: "customer_blocked_sql_view" */
  customer_in_blocked_list: Array<Customer_In_Blocked_List>;
  /** fetch aggregated fields from the table: "customer_blocked_sql_view" */
  customer_in_blocked_list_aggregate: Customer_In_Blocked_List_Aggregate;
  /** fetch data from the table: "customer_level" */
  customer_level: Array<Customer_Level>;
  /** fetch aggregated fields from the table: "customer_level" */
  customer_level_aggregate: Customer_Level_Aggregate;
  /** fetch data from the table: "customer_level" using primary key columns */
  customer_level_by_pk?: Maybe<Customer_Level>;
  /** fetch data from the table: "customer_service_log" */
  customer_service_log: Array<Customer_Service_Log>;
  /** fetch data from the table: "customer_service_log" using primary key columns */
  customer_service_log_by_pk?: Maybe<Customer_Service_Log>;
  /** fetch data from the table: "device" */
  device: Array<Device>;
  /** fetch aggregated fields from the table: "device" */
  device_aggregate: Device_Aggregate;
  /** fetch data from the table: "device" using primary key columns */
  device_by_pk?: Maybe<Device>;
  /** fetch data from the table: "discount" */
  discount: Array<Discount>;
  /** fetch aggregated fields from the table: "discount" */
  discount_aggregate: Discount_Aggregate;
  /** fetch data from the table: "discount" using primary key columns */
  discount_by_pk?: Maybe<Discount>;
  /** fetch data from the table: "einvoice_transaction" */
  einvoice_transaction: Array<Einvoice_Transaction>;
  /** fetch aggregated fields from the table: "einvoice_transaction" */
  einvoice_transaction_aggregate: Einvoice_Transaction_Aggregate;
  /** fetch data from the table: "einvoice_transaction" using primary key columns */
  einvoice_transaction_by_pk?: Maybe<Einvoice_Transaction>;
  /** fetch data from the table: "exceed_rate" */
  exceed_rate: Array<Exceed_Rate>;
  /** fetch aggregated fields from the table: "exceed_rate" */
  exceed_rate_aggregate: Exceed_Rate_Aggregate;
  /** fetch data from the table: "exceed_rate" using primary key columns */
  exceed_rate_by_pk?: Maybe<Exceed_Rate>;
  /** fetch data from the table: "firebase_cm_registration_token" */
  firebase_cm_registration_token: Array<Firebase_Cm_Registration_Token>;
  /** fetch data from the table: "firebase_cm_registration_token" using primary key columns */
  firebase_cm_registration_token_by_pk?: Maybe<Firebase_Cm_Registration_Token>;
  /** fetch data from the table: "fleet" */
  fleet: Array<Fleet>;
  /** fetch aggregated fields from the table: "fleet" */
  fleet_aggregate: Fleet_Aggregate;
  /** fetch data from the table: "fleet" using primary key columns */
  fleet_by_pk?: Maybe<Fleet>;
  /** fetch data from the table: "generate_contract_job" */
  generate_contract_job: Array<Generate_Contract_Job>;
  /** fetch aggregated fields from the table: "generate_contract_job" */
  generate_contract_job_aggregate: Generate_Contract_Job_Aggregate;
  /** fetch data from the table: "generate_contract_job" using primary key columns */
  generate_contract_job_by_pk?: Maybe<Generate_Contract_Job>;
  /** fetch data from the table: "holiday" */
  holiday: Array<Holiday>;
  /** fetch data from the table: "holiday" using primary key columns */
  holiday_by_pk?: Maybe<Holiday>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order_billing" */
  order_billing: Array<Order_Billing>;
  /** fetch aggregated fields from the table: "order_billing" */
  order_billing_aggregate: Order_Billing_Aggregate;
  /** fetch data from the table: "order_billing" using primary key columns */
  order_billing_by_pk?: Maybe<Order_Billing>;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "order_discount_snapshot" */
  order_discount_snapshot: Array<Order_Discount_Snapshot>;
  /** fetch data from the table: "order_discount_snapshot" using primary key columns */
  order_discount_snapshot_by_pk?: Maybe<Order_Discount_Snapshot>;
  /** fetch data from the table: "order_photo" */
  order_photo: Array<Order_Photo>;
  /** fetch aggregated fields from the table: "order_photo" */
  order_photo_aggregate: Order_Photo_Aggregate;
  /** fetch data from the table: "order_photo" using primary key columns */
  order_photo_by_pk?: Maybe<Order_Photo>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "period" */
  period: Array<Period>;
  /** fetch aggregated fields from the table: "period" */
  period_aggregate: Period_Aggregate;
  /** fetch data from the table: "period" using primary key columns */
  period_by_pk?: Maybe<Period>;
  /** fetch data from the table: "refund" */
  refund: Array<Refund>;
  /** fetch aggregated fields from the table: "refund" */
  refund_aggregate: Refund_Aggregate;
  /** fetch data from the table: "refund" using primary key columns */
  refund_by_pk?: Maybe<Refund>;
  /** fetch data from the table: "rental_company" */
  rental_company: Array<Rental_Company>;
  /** fetch aggregated fields from the table: "rental_company" */
  rental_company_aggregate: Rental_Company_Aggregate;
  /** fetch data from the table: "rental_company" using primary key columns */
  rental_company_by_pk?: Maybe<Rental_Company>;
  /** fetch data from the table: "rental_company_policy" */
  rental_company_policy: Array<Rental_Company_Policy>;
  /** fetch data from the table: "rental_company_policy" using primary key columns */
  rental_company_policy_by_pk?: Maybe<Rental_Company_Policy>;
  /** fetch data from the table: "rental_plan" */
  rental_plan: Array<Rental_Plan>;
  /** fetch data from the table: "rental_plan" using primary key columns */
  rental_plan_by_pk?: Maybe<Rental_Plan>;
  /** fetch data from the table: "rental_policy" */
  rental_policy: Array<Rental_Policy>;
  /** fetch data from the table: "rental_policy" using primary key columns */
  rental_policy_by_pk?: Maybe<Rental_Policy>;
  /** fetch data from the table: "station" */
  station: Array<Station>;
  /** fetch aggregated fields from the table: "station" */
  station_aggregate: Station_Aggregate;
  /** fetch data from the table: "station" using primary key columns */
  station_by_pk?: Maybe<Station>;
  /** fetch data from the table: "taiwan_area" */
  taiwan_area: Array<Taiwan_Area>;
  /** fetch data from the table: "taiwan_area" using primary key columns */
  taiwan_area_by_pk?: Maybe<Taiwan_Area>;
  /** fetch data from the table: "taiwan_city" */
  taiwan_city: Array<Taiwan_City>;
  /** fetch data from the table: "taiwan_city" using primary key columns */
  taiwan_city_by_pk?: Maybe<Taiwan_City>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "vehicle" */
  vehicle: Array<Vehicle>;
  /** fetch aggregated fields from the table: "vehicle" */
  vehicle_aggregate: Vehicle_Aggregate;
  /** fetch data from the table: "vehicle_brand" */
  vehicle_brand: Array<Vehicle_Brand>;
  /** fetch aggregated fields from the table: "vehicle_brand" */
  vehicle_brand_aggregate: Vehicle_Brand_Aggregate;
  /** fetch data from the table: "vehicle_brand" using primary key columns */
  vehicle_brand_by_pk?: Maybe<Vehicle_Brand>;
  /** fetch data from the table: "vehicle_brand_v2" */
  vehicle_brand_v2: Array<Vehicle_Brand_V2>;
  /** fetch aggregated fields from the table: "vehicle_brand_v2" */
  vehicle_brand_v2_aggregate: Vehicle_Brand_V2_Aggregate;
  /** fetch data from the table: "vehicle_brand_v2" using primary key columns */
  vehicle_brand_v2_by_pk?: Maybe<Vehicle_Brand_V2>;
  /** fetch data from the table: "vehicle" using primary key columns */
  vehicle_by_pk?: Maybe<Vehicle>;
  /** fetch data from the table: "vehicle_holding_company" */
  vehicle_holding_company: Array<Vehicle_Holding_Company>;
  /** fetch data from the table: "vehicle_holding_company" using primary key columns */
  vehicle_holding_company_by_pk?: Maybe<Vehicle_Holding_Company>;
  /** fetch data from the table: "vehicle_kind" */
  vehicle_kind: Array<Vehicle_Kind>;
  /** fetch aggregated fields from the table: "vehicle_kind" */
  vehicle_kind_aggregate: Vehicle_Kind_Aggregate;
  /** fetch data from the table: "vehicle_kind" using primary key columns */
  vehicle_kind_by_pk?: Maybe<Vehicle_Kind>;
  /** fetch data from the table: "vehicle_model" */
  vehicle_model: Array<Vehicle_Model>;
  /** fetch data from the table: "vehicle_model" using primary key columns */
  vehicle_model_by_pk?: Maybe<Vehicle_Model>;
  /** fetch data from the table: "vehicle_model_v2" */
  vehicle_model_v2: Array<Vehicle_Model_V2>;
  /** fetch aggregated fields from the table: "vehicle_model_v2" */
  vehicle_model_v2_aggregate: Vehicle_Model_V2_Aggregate;
  /** fetch data from the table: "vehicle_model_v2" using primary key columns */
  vehicle_model_v2_by_pk?: Maybe<Vehicle_Model_V2>;
  /** fetch data from the table: "vehicle_parameter" */
  vehicle_parameter: Array<Vehicle_Parameter>;
  /** fetch aggregated fields from the table: "vehicle_parameter" */
  vehicle_parameter_aggregate: Vehicle_Parameter_Aggregate;
  /** fetch data from the table: "vehicle_parameter" using primary key columns */
  vehicle_parameter_by_pk?: Maybe<Vehicle_Parameter>;
  /** fetch data from the table: "vehicle_parameter_definition" */
  vehicle_parameter_definition: Array<Vehicle_Parameter_Definition>;
  /** fetch aggregated fields from the table: "vehicle_parameter_definition" */
  vehicle_parameter_definition_aggregate: Vehicle_Parameter_Definition_Aggregate;
  /** fetch data from the table: "vehicle_parameter_definition" using primary key columns */
  vehicle_parameter_definition_by_pk?: Maybe<Vehicle_Parameter_Definition>;
  /** fetch data from the table: "vehicle_rental_rate" */
  vehicle_rental_rate: Array<Vehicle_Rental_Rate>;
  /** fetch aggregated fields from the table: "vehicle_rental_rate" */
  vehicle_rental_rate_aggregate: Vehicle_Rental_Rate_Aggregate;
  /** fetch data from the table: "vehicle_rental_rate" using primary key columns */
  vehicle_rental_rate_by_pk?: Maybe<Vehicle_Rental_Rate>;
  /** fetch data from the table: "vehicle_type" */
  vehicle_type: Array<Vehicle_Type>;
  /** fetch aggregated fields from the table: "vehicle_type" */
  vehicle_type_aggregate: Vehicle_Type_Aggregate;
  /** fetch data from the table: "vehicle_type" using primary key columns */
  vehicle_type_by_pk?: Maybe<Vehicle_Type>;
  /** fetch data from the table: "vehicle_unavailable_calendar" */
  vehicle_unavailable_calendar: Array<Vehicle_Unavailable_Calendar>;
  /** fetch aggregated fields from the table: "vehicle_unavailable_calendar" */
  vehicle_unavailable_calendar_aggregate: Vehicle_Unavailable_Calendar_Aggregate;
  /** fetch data from the table: "vehicle_unavailable_calendar" using primary key columns */
  vehicle_unavailable_calendar_by_pk?: Maybe<Vehicle_Unavailable_Calendar>;
};


export type Query_RootAllowance_JobArgs = {
  distinct_on?: InputMaybe<Array<Allowance_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Allowance_Job_Order_By>>;
  where?: InputMaybe<Allowance_Job_Bool_Exp>;
};


export type Query_RootAllowance_Job_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Allowance_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Allowance_Job_Order_By>>;
  where?: InputMaybe<Allowance_Job_Bool_Exp>;
};


export type Query_RootAllowance_Job_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootBilling_EtcArgs = {
  distinct_on?: InputMaybe<Array<Billing_Etc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Etc_Order_By>>;
  where?: InputMaybe<Billing_Etc_Bool_Exp>;
};


export type Query_RootBilling_Etc_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Etc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Etc_Order_By>>;
  where?: InputMaybe<Billing_Etc_Bool_Exp>;
};


export type Query_RootBilling_Etc_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootBilling_Etc_FileArgs = {
  distinct_on?: InputMaybe<Array<Billing_Etc_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Etc_File_Order_By>>;
  where?: InputMaybe<Billing_Etc_File_Bool_Exp>;
};


export type Query_RootBilling_Etc_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Etc_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Etc_File_Order_By>>;
  where?: InputMaybe<Billing_Etc_File_Bool_Exp>;
};


export type Query_RootBilling_Etc_File_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootBilling_Notify_JobArgs = {
  distinct_on?: InputMaybe<Array<Billing_Notify_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Notify_Job_Order_By>>;
  where?: InputMaybe<Billing_Notify_Job_Bool_Exp>;
};


export type Query_RootBilling_Notify_Job_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Notify_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Notify_Job_Order_By>>;
  where?: InputMaybe<Billing_Notify_Job_Bool_Exp>;
};


export type Query_RootBilling_Notify_Job_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootBilling_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Billing_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Transaction_Order_By>>;
  where?: InputMaybe<Billing_Transaction_Bool_Exp>;
};


export type Query_RootBilling_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Transaction_Order_By>>;
  where?: InputMaybe<Billing_Transaction_Bool_Exp>;
};


export type Query_RootBilling_Transaction_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootBinding_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Binding_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Binding_Transaction_Order_By>>;
  where?: InputMaybe<Binding_Transaction_Bool_Exp>;
};


export type Query_RootBinding_Transaction_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCalendarArgs = {
  distinct_on?: InputMaybe<Array<Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Calendar_Order_By>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


export type Query_RootCalendar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Calendar_Order_By>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


export type Query_RootCalendar_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCampaignArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Query_RootCampaign_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Query_RootCampaign_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCertificate_AuthorityArgs = {
  distinct_on?: InputMaybe<Array<Certificate_Authority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Certificate_Authority_Order_By>>;
  where?: InputMaybe<Certificate_Authority_Bool_Exp>;
};


export type Query_RootCertificate_Authority_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Certificate_Authority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Certificate_Authority_Order_By>>;
  where?: InputMaybe<Certificate_Authority_Bool_Exp>;
};


export type Query_RootCertificate_Authority_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCouponArgs = {
  distinct_on?: InputMaybe<Array<Coupon_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coupon_Order_By>>;
  where?: InputMaybe<Coupon_Bool_Exp>;
};


export type Query_RootCoupon_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCoupon_InventoryArgs = {
  distinct_on?: InputMaybe<Array<Coupon_Inventory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coupon_Inventory_Order_By>>;
  where?: InputMaybe<Coupon_Inventory_Bool_Exp>;
};


export type Query_RootCoupon_Inventory_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCredit_CardArgs = {
  distinct_on?: InputMaybe<Array<Credit_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Card_Order_By>>;
  where?: InputMaybe<Credit_Card_Bool_Exp>;
};


export type Query_RootCredit_Card_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Query_RootCustomer_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCustomer_Foreign_DataArgs = {
  distinct_on?: InputMaybe<Array<Customer_Foreign_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Foreign_Data_Order_By>>;
  where?: InputMaybe<Customer_Foreign_Data_Bool_Exp>;
};


export type Query_RootCustomer_Foreign_Data_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCustomer_In_Blocked_ListArgs = {
  distinct_on?: InputMaybe<Array<Customer_In_Blocked_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_In_Blocked_List_Order_By>>;
  where?: InputMaybe<Customer_In_Blocked_List_Bool_Exp>;
};


export type Query_RootCustomer_In_Blocked_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_In_Blocked_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_In_Blocked_List_Order_By>>;
  where?: InputMaybe<Customer_In_Blocked_List_Bool_Exp>;
};


export type Query_RootCustomer_LevelArgs = {
  distinct_on?: InputMaybe<Array<Customer_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Level_Order_By>>;
  where?: InputMaybe<Customer_Level_Bool_Exp>;
};


export type Query_RootCustomer_Level_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Level_Order_By>>;
  where?: InputMaybe<Customer_Level_Bool_Exp>;
};


export type Query_RootCustomer_Level_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCustomer_Service_LogArgs = {
  distinct_on?: InputMaybe<Array<Customer_Service_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Service_Log_Order_By>>;
  where?: InputMaybe<Customer_Service_Log_Bool_Exp>;
};


export type Query_RootCustomer_Service_Log_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootDeviceArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


export type Query_RootDevice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


export type Query_RootDevice_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootDiscountArgs = {
  distinct_on?: InputMaybe<Array<Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Discount_Order_By>>;
  where?: InputMaybe<Discount_Bool_Exp>;
};


export type Query_RootDiscount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Discount_Order_By>>;
  where?: InputMaybe<Discount_Bool_Exp>;
};


export type Query_RootDiscount_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootEinvoice_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Einvoice_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Einvoice_Transaction_Order_By>>;
  where?: InputMaybe<Einvoice_Transaction_Bool_Exp>;
};


export type Query_RootEinvoice_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Einvoice_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Einvoice_Transaction_Order_By>>;
  where?: InputMaybe<Einvoice_Transaction_Bool_Exp>;
};


export type Query_RootEinvoice_Transaction_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootExceed_RateArgs = {
  distinct_on?: InputMaybe<Array<Exceed_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exceed_Rate_Order_By>>;
  where?: InputMaybe<Exceed_Rate_Bool_Exp>;
};


export type Query_RootExceed_Rate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exceed_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exceed_Rate_Order_By>>;
  where?: InputMaybe<Exceed_Rate_Bool_Exp>;
};


export type Query_RootExceed_Rate_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootFirebase_Cm_Registration_TokenArgs = {
  distinct_on?: InputMaybe<Array<Firebase_Cm_Registration_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Firebase_Cm_Registration_Token_Order_By>>;
  where?: InputMaybe<Firebase_Cm_Registration_Token_Bool_Exp>;
};


export type Query_RootFirebase_Cm_Registration_Token_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootFleetArgs = {
  distinct_on?: InputMaybe<Array<Fleet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fleet_Order_By>>;
  where?: InputMaybe<Fleet_Bool_Exp>;
};


export type Query_RootFleet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fleet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fleet_Order_By>>;
  where?: InputMaybe<Fleet_Bool_Exp>;
};


export type Query_RootFleet_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootGenerate_Contract_JobArgs = {
  distinct_on?: InputMaybe<Array<Generate_Contract_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generate_Contract_Job_Order_By>>;
  where?: InputMaybe<Generate_Contract_Job_Bool_Exp>;
};


export type Query_RootGenerate_Contract_Job_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Generate_Contract_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generate_Contract_Job_Order_By>>;
  where?: InputMaybe<Generate_Contract_Job_Bool_Exp>;
};


export type Query_RootGenerate_Contract_Job_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootHolidayArgs = {
  distinct_on?: InputMaybe<Array<Holiday_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Holiday_Order_By>>;
  where?: InputMaybe<Holiday_Bool_Exp>;
};


export type Query_RootHoliday_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_BillingArgs = {
  distinct_on?: InputMaybe<Array<Order_Billing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Billing_Order_By>>;
  where?: InputMaybe<Order_Billing_Bool_Exp>;
};


export type Query_RootOrder_Billing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Billing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Billing_Order_By>>;
  where?: InputMaybe<Order_Billing_Bool_Exp>;
};


export type Query_RootOrder_Billing_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootOrder_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootOrder_Discount_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Order_Discount_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Discount_Snapshot_Order_By>>;
  where?: InputMaybe<Order_Discount_Snapshot_Bool_Exp>;
};


export type Query_RootOrder_Discount_Snapshot_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootOrder_PhotoArgs = {
  distinct_on?: InputMaybe<Array<Order_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Photo_Order_By>>;
  where?: InputMaybe<Order_Photo_Bool_Exp>;
};


export type Query_RootOrder_Photo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Photo_Order_By>>;
  where?: InputMaybe<Order_Photo_Bool_Exp>;
};


export type Query_RootOrder_Photo_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootPeriodArgs = {
  distinct_on?: InputMaybe<Array<Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Period_Order_By>>;
  where?: InputMaybe<Period_Bool_Exp>;
};


export type Query_RootPeriod_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Period_Order_By>>;
  where?: InputMaybe<Period_Bool_Exp>;
};


export type Query_RootPeriod_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootRefundArgs = {
  distinct_on?: InputMaybe<Array<Refund_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Refund_Order_By>>;
  where?: InputMaybe<Refund_Bool_Exp>;
};


export type Query_RootRefund_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Refund_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Refund_Order_By>>;
  where?: InputMaybe<Refund_Bool_Exp>;
};


export type Query_RootRefund_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootRental_CompanyArgs = {
  distinct_on?: InputMaybe<Array<Rental_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Company_Order_By>>;
  where?: InputMaybe<Rental_Company_Bool_Exp>;
};


export type Query_RootRental_Company_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rental_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Company_Order_By>>;
  where?: InputMaybe<Rental_Company_Bool_Exp>;
};


export type Query_RootRental_Company_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootRental_Company_PolicyArgs = {
  distinct_on?: InputMaybe<Array<Rental_Company_Policy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Company_Policy_Order_By>>;
  where?: InputMaybe<Rental_Company_Policy_Bool_Exp>;
};


export type Query_RootRental_Company_Policy_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootRental_PlanArgs = {
  distinct_on?: InputMaybe<Array<Rental_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Plan_Order_By>>;
  where?: InputMaybe<Rental_Plan_Bool_Exp>;
};


export type Query_RootRental_Plan_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootRental_PolicyArgs = {
  distinct_on?: InputMaybe<Array<Rental_Policy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Policy_Order_By>>;
  where?: InputMaybe<Rental_Policy_Bool_Exp>;
};


export type Query_RootRental_Policy_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootStationArgs = {
  distinct_on?: InputMaybe<Array<Station_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Station_Order_By>>;
  where?: InputMaybe<Station_Bool_Exp>;
};


export type Query_RootStation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Station_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Station_Order_By>>;
  where?: InputMaybe<Station_Bool_Exp>;
};


export type Query_RootStation_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootTaiwan_AreaArgs = {
  distinct_on?: InputMaybe<Array<Taiwan_Area_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taiwan_Area_Order_By>>;
  where?: InputMaybe<Taiwan_Area_Bool_Exp>;
};


export type Query_RootTaiwan_Area_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootTaiwan_CityArgs = {
  distinct_on?: InputMaybe<Array<Taiwan_City_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taiwan_City_Order_By>>;
  where?: InputMaybe<Taiwan_City_Bool_Exp>;
};


export type Query_RootTaiwan_City_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootVehicleArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};


export type Query_RootVehicle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};


export type Query_RootVehicle_BrandArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Brand_Order_By>>;
  where?: InputMaybe<Vehicle_Brand_Bool_Exp>;
};


export type Query_RootVehicle_Brand_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Brand_Order_By>>;
  where?: InputMaybe<Vehicle_Brand_Bool_Exp>;
};


export type Query_RootVehicle_Brand_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootVehicle_Brand_V2Args = {
  distinct_on?: InputMaybe<Array<Vehicle_Brand_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Brand_V2_Order_By>>;
  where?: InputMaybe<Vehicle_Brand_V2_Bool_Exp>;
};


export type Query_RootVehicle_Brand_V2_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Brand_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Brand_V2_Order_By>>;
  where?: InputMaybe<Vehicle_Brand_V2_Bool_Exp>;
};


export type Query_RootVehicle_Brand_V2_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootVehicle_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootVehicle_Holding_CompanyArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Holding_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Holding_Company_Order_By>>;
  where?: InputMaybe<Vehicle_Holding_Company_Bool_Exp>;
};


export type Query_RootVehicle_Holding_Company_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootVehicle_KindArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Kind_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Kind_Order_By>>;
  where?: InputMaybe<Vehicle_Kind_Bool_Exp>;
};


export type Query_RootVehicle_Kind_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Kind_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Kind_Order_By>>;
  where?: InputMaybe<Vehicle_Kind_Bool_Exp>;
};


export type Query_RootVehicle_Kind_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootVehicle_ModelArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Model_Order_By>>;
  where?: InputMaybe<Vehicle_Model_Bool_Exp>;
};


export type Query_RootVehicle_Model_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootVehicle_Model_V2Args = {
  distinct_on?: InputMaybe<Array<Vehicle_Model_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Model_V2_Order_By>>;
  where?: InputMaybe<Vehicle_Model_V2_Bool_Exp>;
};


export type Query_RootVehicle_Model_V2_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Model_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Model_V2_Order_By>>;
  where?: InputMaybe<Vehicle_Model_V2_Bool_Exp>;
};


export type Query_RootVehicle_Model_V2_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootVehicle_ParameterArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Parameter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Parameter_Order_By>>;
  where?: InputMaybe<Vehicle_Parameter_Bool_Exp>;
};


export type Query_RootVehicle_Parameter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Parameter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Parameter_Order_By>>;
  where?: InputMaybe<Vehicle_Parameter_Bool_Exp>;
};


export type Query_RootVehicle_Parameter_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootVehicle_Parameter_DefinitionArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Parameter_Definition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Parameter_Definition_Order_By>>;
  where?: InputMaybe<Vehicle_Parameter_Definition_Bool_Exp>;
};


export type Query_RootVehicle_Parameter_Definition_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Parameter_Definition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Parameter_Definition_Order_By>>;
  where?: InputMaybe<Vehicle_Parameter_Definition_Bool_Exp>;
};


export type Query_RootVehicle_Parameter_Definition_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootVehicle_Rental_RateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Rental_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Rental_Rate_Order_By>>;
  where?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
};


export type Query_RootVehicle_Rental_Rate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Rental_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Rental_Rate_Order_By>>;
  where?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
};


export type Query_RootVehicle_Rental_Rate_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootVehicle_TypeArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Type_Order_By>>;
  where?: InputMaybe<Vehicle_Type_Bool_Exp>;
};


export type Query_RootVehicle_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Type_Order_By>>;
  where?: InputMaybe<Vehicle_Type_Bool_Exp>;
};


export type Query_RootVehicle_Type_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootVehicle_Unavailable_CalendarArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Order_By>>;
  where?: InputMaybe<Vehicle_Unavailable_Calendar_Bool_Exp>;
};


export type Query_RootVehicle_Unavailable_Calendar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Order_By>>;
  where?: InputMaybe<Vehicle_Unavailable_Calendar_Bool_Exp>;
};


export type Query_RootVehicle_Unavailable_Calendar_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** 退款 */
export type Refund = {
  __typename?: 'refund';
  /** An object relationship */
  billing_transaction: Billing_Transaction;
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id: Scalars['bigint']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['bigint']['output'];
  /** 需退款金額 */
  refund_amount: Scalars['bigint']['output'];
  /** 藍新回傳退款申請成功時間 */
  refund_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 退款發起人類型 */
  requester_type: Scalars['usertype']['output'];
  /** 退款明細敘述 */
  statement: Scalars['String']['output'];
  /** 執行狀態 */
  status: Scalars['refundstatus']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "refund" */
export type Refund_Aggregate = {
  __typename?: 'refund_aggregate';
  aggregate?: Maybe<Refund_Aggregate_Fields>;
  nodes: Array<Refund>;
};

export type Refund_Aggregate_Bool_Exp = {
  count?: InputMaybe<Refund_Aggregate_Bool_Exp_Count>;
};

export type Refund_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Refund_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Refund_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "refund" */
export type Refund_Aggregate_Fields = {
  __typename?: 'refund_aggregate_fields';
  avg?: Maybe<Refund_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Refund_Max_Fields>;
  min?: Maybe<Refund_Min_Fields>;
  stddev?: Maybe<Refund_Stddev_Fields>;
  stddev_pop?: Maybe<Refund_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Refund_Stddev_Samp_Fields>;
  sum?: Maybe<Refund_Sum_Fields>;
  var_pop?: Maybe<Refund_Var_Pop_Fields>;
  var_samp?: Maybe<Refund_Var_Samp_Fields>;
  variance?: Maybe<Refund_Variance_Fields>;
};


/** aggregate fields of "refund" */
export type Refund_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Refund_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "refund" */
export type Refund_Aggregate_Order_By = {
  avg?: InputMaybe<Refund_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Refund_Max_Order_By>;
  min?: InputMaybe<Refund_Min_Order_By>;
  stddev?: InputMaybe<Refund_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Refund_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Refund_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Refund_Sum_Order_By>;
  var_pop?: InputMaybe<Refund_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Refund_Var_Samp_Order_By>;
  variance?: InputMaybe<Refund_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Refund_Avg_Fields = {
  __typename?: 'refund_avg_fields';
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 需退款金額 */
  refund_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "refund" */
export type Refund_Avg_Order_By = {
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 需退款金額 */
  refund_amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "refund". All fields are combined with a logical 'AND'. */
export type Refund_Bool_Exp = {
  _and?: InputMaybe<Array<Refund_Bool_Exp>>;
  _not?: InputMaybe<Refund_Bool_Exp>;
  _or?: InputMaybe<Array<Refund_Bool_Exp>>;
  billing_transaction?: InputMaybe<Billing_Transaction_Bool_Exp>;
  billing_transaction_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  refund_amount?: InputMaybe<Bigint_Comparison_Exp>;
  refund_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  requester_type?: InputMaybe<Usertype_Comparison_Exp>;
  statement?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Refundstatus_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Refund_Max_Fields = {
  __typename?: 'refund_max_fields';
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 需退款金額 */
  refund_amount?: Maybe<Scalars['bigint']['output']>;
  /** 藍新回傳退款申請成功時間 */
  refund_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 退款發起人類型 */
  requester_type?: Maybe<Scalars['usertype']['output']>;
  /** 退款明細敘述 */
  statement?: Maybe<Scalars['String']['output']>;
  /** 執行狀態 */
  status?: Maybe<Scalars['refundstatus']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "refund" */
export type Refund_Max_Order_By = {
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 需退款金額 */
  refund_amount?: InputMaybe<Order_By>;
  /** 藍新回傳退款申請成功時間 */
  refund_at?: InputMaybe<Order_By>;
  /** 退款發起人類型 */
  requester_type?: InputMaybe<Order_By>;
  /** 退款明細敘述 */
  statement?: InputMaybe<Order_By>;
  /** 執行狀態 */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Refund_Min_Fields = {
  __typename?: 'refund_min_fields';
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 需退款金額 */
  refund_amount?: Maybe<Scalars['bigint']['output']>;
  /** 藍新回傳退款申請成功時間 */
  refund_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 退款發起人類型 */
  requester_type?: Maybe<Scalars['usertype']['output']>;
  /** 退款明細敘述 */
  statement?: Maybe<Scalars['String']['output']>;
  /** 執行狀態 */
  status?: Maybe<Scalars['refundstatus']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "refund" */
export type Refund_Min_Order_By = {
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 需退款金額 */
  refund_amount?: InputMaybe<Order_By>;
  /** 藍新回傳退款申請成功時間 */
  refund_at?: InputMaybe<Order_By>;
  /** 退款發起人類型 */
  requester_type?: InputMaybe<Order_By>;
  /** 退款明細敘述 */
  statement?: InputMaybe<Order_By>;
  /** 執行狀態 */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "refund". */
export type Refund_Order_By = {
  billing_transaction?: InputMaybe<Billing_Transaction_Order_By>;
  billing_transaction_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refund_amount?: InputMaybe<Order_By>;
  refund_at?: InputMaybe<Order_By>;
  requester_type?: InputMaybe<Order_By>;
  statement?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "refund" */
export enum Refund_Select_Column {
  /** column name */
  BillingTransactionId = 'billing_transaction_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  RefundAmount = 'refund_amount',
  /** column name */
  RefundAt = 'refund_at',
  /** column name */
  RequesterType = 'requester_type',
  /** column name */
  Statement = 'statement',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Refund_Stddev_Fields = {
  __typename?: 'refund_stddev_fields';
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 需退款金額 */
  refund_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "refund" */
export type Refund_Stddev_Order_By = {
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 需退款金額 */
  refund_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Refund_Stddev_Pop_Fields = {
  __typename?: 'refund_stddev_pop_fields';
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 需退款金額 */
  refund_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "refund" */
export type Refund_Stddev_Pop_Order_By = {
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 需退款金額 */
  refund_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Refund_Stddev_Samp_Fields = {
  __typename?: 'refund_stddev_samp_fields';
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 需退款金額 */
  refund_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "refund" */
export type Refund_Stddev_Samp_Order_By = {
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 需退款金額 */
  refund_amount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "refund" */
export type Refund_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Refund_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Refund_Stream_Cursor_Value_Input = {
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 需退款金額 */
  refund_amount?: InputMaybe<Scalars['bigint']['input']>;
  /** 藍新回傳退款申請成功時間 */
  refund_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 退款發起人類型 */
  requester_type?: InputMaybe<Scalars['usertype']['input']>;
  /** 退款明細敘述 */
  statement?: InputMaybe<Scalars['String']['input']>;
  /** 執行狀態 */
  status?: InputMaybe<Scalars['refundstatus']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Refund_Sum_Fields = {
  __typename?: 'refund_sum_fields';
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 需退款金額 */
  refund_amount?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "refund" */
export type Refund_Sum_Order_By = {
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 需退款金額 */
  refund_amount?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Refund_Var_Pop_Fields = {
  __typename?: 'refund_var_pop_fields';
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 需退款金額 */
  refund_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "refund" */
export type Refund_Var_Pop_Order_By = {
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 需退款金額 */
  refund_amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Refund_Var_Samp_Fields = {
  __typename?: 'refund_var_samp_fields';
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 需退款金額 */
  refund_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "refund" */
export type Refund_Var_Samp_Order_By = {
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 需退款金額 */
  refund_amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Refund_Variance_Fields = {
  __typename?: 'refund_variance_fields';
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 需退款金額 */
  refund_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "refund" */
export type Refund_Variance_Order_By = {
  /** 需執行退款的 billing_transaction id */
  billing_transaction_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 需退款金額 */
  refund_amount?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "refundstatus". All fields are combined with logical 'AND'. */
export type Refundstatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['refundstatus']['input']>;
  _gt?: InputMaybe<Scalars['refundstatus']['input']>;
  _gte?: InputMaybe<Scalars['refundstatus']['input']>;
  _in?: InputMaybe<Array<Scalars['refundstatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['refundstatus']['input']>;
  _lte?: InputMaybe<Scalars['refundstatus']['input']>;
  _neq?: InputMaybe<Scalars['refundstatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['refundstatus']['input']>>;
};

/** 租賃車行 */
export type Rental_Company = {
  __typename?: 'rental_company';
  /** 所在地址 */
  address: Scalars['String']['output'];
  /** 所在行政區 */
  area: Scalars['String']['output'];
  /** An object relationship */
  certificate_authority: Certificate_Authority;
  certificate_authority_id: Scalars['bigint']['output'];
  /** 通過審核時間 */
  certified_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 審核狀態 */
  certified_status: Scalars['approvalstatus']['output'];
  /** 所在縣市 */
  city: Scalars['String']['output'];
  /** An array relationship */
  customer_levels: Array<Customer_Level>;
  /** An aggregate relationship */
  customer_levels_aggregate: Customer_Level_Aggregate;
  /** An array relationship */
  devices: Array<Device>;
  /** An aggregate relationship */
  devices_aggregate: Device_Aggregate;
  /** An array relationship */
  fleets: Array<Fleet>;
  /** An aggregate relationship */
  fleets_aggregate: Fleet_Aggregate;
  id: Scalars['bigint']['output'];
  /** 維修費用制度化文件 Google Cloud Storage 儲存位址 */
  maintenance_charge_document_path?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate;
  /** An object relationship */
  organization: Organization;
  /** An array relationship */
  periods: Array<Period>;
  /** An aggregate relationship */
  periods_aggregate: Period_Aggregate;
  /** An array relationship */
  rental_company_policies: Array<Rental_Company_Policy>;
  /** An array relationship */
  rental_plans: Array<Rental_Plan>;
  /** 定型化契約文件 Google Cloud Storage 儲存位址 */
  standard_form_contract_path?: Maybe<Scalars['String']['output']>;
  /** 公司統編 */
  tax_id_number: Scalars['String']['output'];
  /** 公司電話 */
  telephone: Scalars['String']['output'];
  /** 第三方機構認證文件 Google Cloud Storage 儲存位址 */
  third_party_certification_path?: Maybe<Scalars['String']['output']>;
  /** 車齡限制文件 Google Cloud Storage 儲存位址 */
  vehicle_age_limit_document_path?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  vehicle_holding_companies: Array<Vehicle_Holding_Company>;
  /** An array relationship */
  vehicles: Array<Vehicle>;
  /** An aggregate relationship */
  vehicles_aggregate: Vehicle_Aggregate;
};


/** 租賃車行 */
export type Rental_CompanyCustomer_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Customer_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Level_Order_By>>;
  where?: InputMaybe<Customer_Level_Bool_Exp>;
};


/** 租賃車行 */
export type Rental_CompanyCustomer_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Level_Order_By>>;
  where?: InputMaybe<Customer_Level_Bool_Exp>;
};


/** 租賃車行 */
export type Rental_CompanyDevicesArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


/** 租賃車行 */
export type Rental_CompanyDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


/** 租賃車行 */
export type Rental_CompanyFleetsArgs = {
  distinct_on?: InputMaybe<Array<Fleet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fleet_Order_By>>;
  where?: InputMaybe<Fleet_Bool_Exp>;
};


/** 租賃車行 */
export type Rental_CompanyFleets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fleet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fleet_Order_By>>;
  where?: InputMaybe<Fleet_Bool_Exp>;
};


/** 租賃車行 */
export type Rental_CompanyOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** 租賃車行 */
export type Rental_CompanyOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** 租賃車行 */
export type Rental_CompanyPeriodsArgs = {
  distinct_on?: InputMaybe<Array<Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Period_Order_By>>;
  where?: InputMaybe<Period_Bool_Exp>;
};


/** 租賃車行 */
export type Rental_CompanyPeriods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Period_Order_By>>;
  where?: InputMaybe<Period_Bool_Exp>;
};


/** 租賃車行 */
export type Rental_CompanyRental_Company_PoliciesArgs = {
  distinct_on?: InputMaybe<Array<Rental_Company_Policy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Company_Policy_Order_By>>;
  where?: InputMaybe<Rental_Company_Policy_Bool_Exp>;
};


/** 租賃車行 */
export type Rental_CompanyRental_PlansArgs = {
  distinct_on?: InputMaybe<Array<Rental_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Plan_Order_By>>;
  where?: InputMaybe<Rental_Plan_Bool_Exp>;
};


/** 租賃車行 */
export type Rental_CompanyVehicle_Holding_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Holding_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Holding_Company_Order_By>>;
  where?: InputMaybe<Vehicle_Holding_Company_Bool_Exp>;
};


/** 租賃車行 */
export type Rental_CompanyVehiclesArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};


/** 租賃車行 */
export type Rental_CompanyVehicles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};

/** aggregated selection of "rental_company" */
export type Rental_Company_Aggregate = {
  __typename?: 'rental_company_aggregate';
  aggregate?: Maybe<Rental_Company_Aggregate_Fields>;
  nodes: Array<Rental_Company>;
};

export type Rental_Company_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rental_Company_Aggregate_Bool_Exp_Count>;
};

export type Rental_Company_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rental_Company_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rental_Company_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rental_company" */
export type Rental_Company_Aggregate_Fields = {
  __typename?: 'rental_company_aggregate_fields';
  avg?: Maybe<Rental_Company_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Rental_Company_Max_Fields>;
  min?: Maybe<Rental_Company_Min_Fields>;
  stddev?: Maybe<Rental_Company_Stddev_Fields>;
  stddev_pop?: Maybe<Rental_Company_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rental_Company_Stddev_Samp_Fields>;
  sum?: Maybe<Rental_Company_Sum_Fields>;
  var_pop?: Maybe<Rental_Company_Var_Pop_Fields>;
  var_samp?: Maybe<Rental_Company_Var_Samp_Fields>;
  variance?: Maybe<Rental_Company_Variance_Fields>;
};


/** aggregate fields of "rental_company" */
export type Rental_Company_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rental_Company_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rental_company" */
export type Rental_Company_Aggregate_Order_By = {
  avg?: InputMaybe<Rental_Company_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rental_Company_Max_Order_By>;
  min?: InputMaybe<Rental_Company_Min_Order_By>;
  stddev?: InputMaybe<Rental_Company_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rental_Company_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rental_Company_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rental_Company_Sum_Order_By>;
  var_pop?: InputMaybe<Rental_Company_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rental_Company_Var_Samp_Order_By>;
  variance?: InputMaybe<Rental_Company_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Rental_Company_Avg_Fields = {
  __typename?: 'rental_company_avg_fields';
  certificate_authority_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "rental_company" */
export type Rental_Company_Avg_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rental_company". All fields are combined with a logical 'AND'. */
export type Rental_Company_Bool_Exp = {
  _and?: InputMaybe<Array<Rental_Company_Bool_Exp>>;
  _not?: InputMaybe<Rental_Company_Bool_Exp>;
  _or?: InputMaybe<Array<Rental_Company_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  area?: InputMaybe<String_Comparison_Exp>;
  certificate_authority?: InputMaybe<Certificate_Authority_Bool_Exp>;
  certificate_authority_id?: InputMaybe<Bigint_Comparison_Exp>;
  certified_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  certified_status?: InputMaybe<Approvalstatus_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  customer_levels?: InputMaybe<Customer_Level_Bool_Exp>;
  customer_levels_aggregate?: InputMaybe<Customer_Level_Aggregate_Bool_Exp>;
  devices?: InputMaybe<Device_Bool_Exp>;
  devices_aggregate?: InputMaybe<Device_Aggregate_Bool_Exp>;
  fleets?: InputMaybe<Fleet_Bool_Exp>;
  fleets_aggregate?: InputMaybe<Fleet_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  maintenance_charge_document_path?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Order_Bool_Exp>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Bool_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  periods?: InputMaybe<Period_Bool_Exp>;
  periods_aggregate?: InputMaybe<Period_Aggregate_Bool_Exp>;
  rental_company_policies?: InputMaybe<Rental_Company_Policy_Bool_Exp>;
  rental_plans?: InputMaybe<Rental_Plan_Bool_Exp>;
  standard_form_contract_path?: InputMaybe<String_Comparison_Exp>;
  tax_id_number?: InputMaybe<String_Comparison_Exp>;
  telephone?: InputMaybe<String_Comparison_Exp>;
  third_party_certification_path?: InputMaybe<String_Comparison_Exp>;
  vehicle_age_limit_document_path?: InputMaybe<String_Comparison_Exp>;
  vehicle_holding_companies?: InputMaybe<Vehicle_Holding_Company_Bool_Exp>;
  vehicles?: InputMaybe<Vehicle_Bool_Exp>;
  vehicles_aggregate?: InputMaybe<Vehicle_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Rental_Company_Max_Fields = {
  __typename?: 'rental_company_max_fields';
  /** 所在地址 */
  address?: Maybe<Scalars['String']['output']>;
  /** 所在行政區 */
  area?: Maybe<Scalars['String']['output']>;
  certificate_authority_id?: Maybe<Scalars['bigint']['output']>;
  /** 通過審核時間 */
  certified_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 審核狀態 */
  certified_status?: Maybe<Scalars['approvalstatus']['output']>;
  /** 所在縣市 */
  city?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 維修費用制度化文件 Google Cloud Storage 儲存位址 */
  maintenance_charge_document_path?: Maybe<Scalars['String']['output']>;
  /** 定型化契約文件 Google Cloud Storage 儲存位址 */
  standard_form_contract_path?: Maybe<Scalars['String']['output']>;
  /** 公司統編 */
  tax_id_number?: Maybe<Scalars['String']['output']>;
  /** 公司電話 */
  telephone?: Maybe<Scalars['String']['output']>;
  /** 第三方機構認證文件 Google Cloud Storage 儲存位址 */
  third_party_certification_path?: Maybe<Scalars['String']['output']>;
  /** 車齡限制文件 Google Cloud Storage 儲存位址 */
  vehicle_age_limit_document_path?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "rental_company" */
export type Rental_Company_Max_Order_By = {
  /** 所在地址 */
  address?: InputMaybe<Order_By>;
  /** 所在行政區 */
  area?: InputMaybe<Order_By>;
  certificate_authority_id?: InputMaybe<Order_By>;
  /** 通過審核時間 */
  certified_at?: InputMaybe<Order_By>;
  /** 審核狀態 */
  certified_status?: InputMaybe<Order_By>;
  /** 所在縣市 */
  city?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 維修費用制度化文件 Google Cloud Storage 儲存位址 */
  maintenance_charge_document_path?: InputMaybe<Order_By>;
  /** 定型化契約文件 Google Cloud Storage 儲存位址 */
  standard_form_contract_path?: InputMaybe<Order_By>;
  /** 公司統編 */
  tax_id_number?: InputMaybe<Order_By>;
  /** 公司電話 */
  telephone?: InputMaybe<Order_By>;
  /** 第三方機構認證文件 Google Cloud Storage 儲存位址 */
  third_party_certification_path?: InputMaybe<Order_By>;
  /** 車齡限制文件 Google Cloud Storage 儲存位址 */
  vehicle_age_limit_document_path?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rental_Company_Min_Fields = {
  __typename?: 'rental_company_min_fields';
  /** 所在地址 */
  address?: Maybe<Scalars['String']['output']>;
  /** 所在行政區 */
  area?: Maybe<Scalars['String']['output']>;
  certificate_authority_id?: Maybe<Scalars['bigint']['output']>;
  /** 通過審核時間 */
  certified_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 審核狀態 */
  certified_status?: Maybe<Scalars['approvalstatus']['output']>;
  /** 所在縣市 */
  city?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 維修費用制度化文件 Google Cloud Storage 儲存位址 */
  maintenance_charge_document_path?: Maybe<Scalars['String']['output']>;
  /** 定型化契約文件 Google Cloud Storage 儲存位址 */
  standard_form_contract_path?: Maybe<Scalars['String']['output']>;
  /** 公司統編 */
  tax_id_number?: Maybe<Scalars['String']['output']>;
  /** 公司電話 */
  telephone?: Maybe<Scalars['String']['output']>;
  /** 第三方機構認證文件 Google Cloud Storage 儲存位址 */
  third_party_certification_path?: Maybe<Scalars['String']['output']>;
  /** 車齡限制文件 Google Cloud Storage 儲存位址 */
  vehicle_age_limit_document_path?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "rental_company" */
export type Rental_Company_Min_Order_By = {
  /** 所在地址 */
  address?: InputMaybe<Order_By>;
  /** 所在行政區 */
  area?: InputMaybe<Order_By>;
  certificate_authority_id?: InputMaybe<Order_By>;
  /** 通過審核時間 */
  certified_at?: InputMaybe<Order_By>;
  /** 審核狀態 */
  certified_status?: InputMaybe<Order_By>;
  /** 所在縣市 */
  city?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 維修費用制度化文件 Google Cloud Storage 儲存位址 */
  maintenance_charge_document_path?: InputMaybe<Order_By>;
  /** 定型化契約文件 Google Cloud Storage 儲存位址 */
  standard_form_contract_path?: InputMaybe<Order_By>;
  /** 公司統編 */
  tax_id_number?: InputMaybe<Order_By>;
  /** 公司電話 */
  telephone?: InputMaybe<Order_By>;
  /** 第三方機構認證文件 Google Cloud Storage 儲存位址 */
  third_party_certification_path?: InputMaybe<Order_By>;
  /** 車齡限制文件 Google Cloud Storage 儲存位址 */
  vehicle_age_limit_document_path?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "rental_company". */
export type Rental_Company_Order_By = {
  address?: InputMaybe<Order_By>;
  area?: InputMaybe<Order_By>;
  certificate_authority?: InputMaybe<Certificate_Authority_Order_By>;
  certificate_authority_id?: InputMaybe<Order_By>;
  certified_at?: InputMaybe<Order_By>;
  certified_status?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  customer_levels_aggregate?: InputMaybe<Customer_Level_Aggregate_Order_By>;
  devices_aggregate?: InputMaybe<Device_Aggregate_Order_By>;
  fleets_aggregate?: InputMaybe<Fleet_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maintenance_charge_document_path?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  periods_aggregate?: InputMaybe<Period_Aggregate_Order_By>;
  rental_company_policies_aggregate?: InputMaybe<Rental_Company_Policy_Aggregate_Order_By>;
  rental_plans_aggregate?: InputMaybe<Rental_Plan_Aggregate_Order_By>;
  standard_form_contract_path?: InputMaybe<Order_By>;
  tax_id_number?: InputMaybe<Order_By>;
  telephone?: InputMaybe<Order_By>;
  third_party_certification_path?: InputMaybe<Order_By>;
  vehicle_age_limit_document_path?: InputMaybe<Order_By>;
  vehicle_holding_companies_aggregate?: InputMaybe<Vehicle_Holding_Company_Aggregate_Order_By>;
  vehicles_aggregate?: InputMaybe<Vehicle_Aggregate_Order_By>;
};

/** 紀錄車行與租賃政策之間的關聯 */
export type Rental_Company_Policy = {
  __typename?: 'rental_company_policy';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  rental_company: Rental_Company;
  /** 車行 id */
  rental_company_id: Scalars['bigint']['output'];
  /** An object relationship */
  rental_policy: Rental_Policy;
  /** 租賃政策 id */
  rental_policy_id: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** order by aggregate values of table "rental_company_policy" */
export type Rental_Company_Policy_Aggregate_Order_By = {
  avg?: InputMaybe<Rental_Company_Policy_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rental_Company_Policy_Max_Order_By>;
  min?: InputMaybe<Rental_Company_Policy_Min_Order_By>;
  stddev?: InputMaybe<Rental_Company_Policy_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rental_Company_Policy_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rental_Company_Policy_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rental_Company_Policy_Sum_Order_By>;
  var_pop?: InputMaybe<Rental_Company_Policy_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rental_Company_Policy_Var_Samp_Order_By>;
  variance?: InputMaybe<Rental_Company_Policy_Variance_Order_By>;
};

/** order by avg() on columns of table "rental_company_policy" */
export type Rental_Company_Policy_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 租賃政策 id */
  rental_policy_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rental_company_policy". All fields are combined with a logical 'AND'. */
export type Rental_Company_Policy_Bool_Exp = {
  _and?: InputMaybe<Array<Rental_Company_Policy_Bool_Exp>>;
  _not?: InputMaybe<Rental_Company_Policy_Bool_Exp>;
  _or?: InputMaybe<Array<Rental_Company_Policy_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  rental_company?: InputMaybe<Rental_Company_Bool_Exp>;
  rental_company_id?: InputMaybe<Bigint_Comparison_Exp>;
  rental_policy?: InputMaybe<Rental_Policy_Bool_Exp>;
  rental_policy_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "rental_company_policy" */
export type Rental_Company_Policy_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 租賃政策 id */
  rental_policy_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "rental_company_policy" */
export type Rental_Company_Policy_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 租賃政策 id */
  rental_policy_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "rental_company_policy". */
export type Rental_Company_Policy_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rental_company?: InputMaybe<Rental_Company_Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  rental_policy?: InputMaybe<Rental_Policy_Order_By>;
  rental_policy_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "rental_company_policy" */
export enum Rental_Company_Policy_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RentalCompanyId = 'rental_company_id',
  /** column name */
  RentalPolicyId = 'rental_policy_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** order by stddev() on columns of table "rental_company_policy" */
export type Rental_Company_Policy_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 租賃政策 id */
  rental_policy_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "rental_company_policy" */
export type Rental_Company_Policy_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 租賃政策 id */
  rental_policy_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "rental_company_policy" */
export type Rental_Company_Policy_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 租賃政策 id */
  rental_policy_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "rental_company_policy" */
export type Rental_Company_Policy_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rental_Company_Policy_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rental_Company_Policy_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 車行 id */
  rental_company_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 租賃政策 id */
  rental_policy_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** order by sum() on columns of table "rental_company_policy" */
export type Rental_Company_Policy_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 租賃政策 id */
  rental_policy_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "rental_company_policy" */
export type Rental_Company_Policy_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 租賃政策 id */
  rental_policy_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "rental_company_policy" */
export type Rental_Company_Policy_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 租賃政策 id */
  rental_policy_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "rental_company_policy" */
export type Rental_Company_Policy_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行 id */
  rental_company_id?: InputMaybe<Order_By>;
  /** 租賃政策 id */
  rental_policy_id?: InputMaybe<Order_By>;
};

/** select columns of table "rental_company" */
export enum Rental_Company_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Area = 'area',
  /** column name */
  CertificateAuthorityId = 'certificate_authority_id',
  /** column name */
  CertifiedAt = 'certified_at',
  /** column name */
  CertifiedStatus = 'certified_status',
  /** column name */
  City = 'city',
  /** column name */
  Id = 'id',
  /** column name */
  MaintenanceChargeDocumentPath = 'maintenance_charge_document_path',
  /** column name */
  StandardFormContractPath = 'standard_form_contract_path',
  /** column name */
  TaxIdNumber = 'tax_id_number',
  /** column name */
  Telephone = 'telephone',
  /** column name */
  ThirdPartyCertificationPath = 'third_party_certification_path',
  /** column name */
  VehicleAgeLimitDocumentPath = 'vehicle_age_limit_document_path'
}

/** aggregate stddev on columns */
export type Rental_Company_Stddev_Fields = {
  __typename?: 'rental_company_stddev_fields';
  certificate_authority_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "rental_company" */
export type Rental_Company_Stddev_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rental_Company_Stddev_Pop_Fields = {
  __typename?: 'rental_company_stddev_pop_fields';
  certificate_authority_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "rental_company" */
export type Rental_Company_Stddev_Pop_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rental_Company_Stddev_Samp_Fields = {
  __typename?: 'rental_company_stddev_samp_fields';
  certificate_authority_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "rental_company" */
export type Rental_Company_Stddev_Samp_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "rental_company" */
export type Rental_Company_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rental_Company_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rental_Company_Stream_Cursor_Value_Input = {
  /** 所在地址 */
  address?: InputMaybe<Scalars['String']['input']>;
  /** 所在行政區 */
  area?: InputMaybe<Scalars['String']['input']>;
  certificate_authority_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 通過審核時間 */
  certified_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 審核狀態 */
  certified_status?: InputMaybe<Scalars['approvalstatus']['input']>;
  /** 所在縣市 */
  city?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 維修費用制度化文件 Google Cloud Storage 儲存位址 */
  maintenance_charge_document_path?: InputMaybe<Scalars['String']['input']>;
  /** 定型化契約文件 Google Cloud Storage 儲存位址 */
  standard_form_contract_path?: InputMaybe<Scalars['String']['input']>;
  /** 公司統編 */
  tax_id_number?: InputMaybe<Scalars['String']['input']>;
  /** 公司電話 */
  telephone?: InputMaybe<Scalars['String']['input']>;
  /** 第三方機構認證文件 Google Cloud Storage 儲存位址 */
  third_party_certification_path?: InputMaybe<Scalars['String']['input']>;
  /** 車齡限制文件 Google Cloud Storage 儲存位址 */
  vehicle_age_limit_document_path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Rental_Company_Sum_Fields = {
  __typename?: 'rental_company_sum_fields';
  certificate_authority_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "rental_company" */
export type Rental_Company_Sum_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Rental_Company_Var_Pop_Fields = {
  __typename?: 'rental_company_var_pop_fields';
  certificate_authority_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "rental_company" */
export type Rental_Company_Var_Pop_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rental_Company_Var_Samp_Fields = {
  __typename?: 'rental_company_var_samp_fields';
  certificate_authority_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "rental_company" */
export type Rental_Company_Var_Samp_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rental_Company_Variance_Fields = {
  __typename?: 'rental_company_variance_fields';
  certificate_authority_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "rental_company" */
export type Rental_Company_Variance_Order_By = {
  certificate_authority_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** 租賃方案 */
export type Rental_Plan = {
  __typename?: 'rental_plan';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 最短租賃時間，例：當日，一日，一日以上 */
  minimum_rental_period: Scalars['interval']['output'];
  /** 租賃方案名稱，如果有 period_id，就是 period.name，其他例如週租、月租 */
  name: Scalars['String']['output'];
  /** An object relationship */
  period?: Maybe<Period>;
  period_id?: Maybe<Scalars['bigint']['output']>;
  /** 適用優先權 */
  priority: Scalars['Int']['output'];
  /** An object relationship */
  rental_company?: Maybe<Rental_Company>;
  /** 此方案所屬車行 id，空值代表為跨車行共用方案。 */
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  /** 計時單位 */
  unit: Scalars['timeunit']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  vehicle_rental_rates: Array<Vehicle_Rental_Rate>;
  /** An aggregate relationship */
  vehicle_rental_rates_aggregate: Vehicle_Rental_Rate_Aggregate;
};


/** 租賃方案 */
export type Rental_PlanVehicle_Rental_RatesArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Rental_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Rental_Rate_Order_By>>;
  where?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
};


/** 租賃方案 */
export type Rental_PlanVehicle_Rental_Rates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Rental_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Rental_Rate_Order_By>>;
  where?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
};

/** order by aggregate values of table "rental_plan" */
export type Rental_Plan_Aggregate_Order_By = {
  avg?: InputMaybe<Rental_Plan_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rental_Plan_Max_Order_By>;
  min?: InputMaybe<Rental_Plan_Min_Order_By>;
  stddev?: InputMaybe<Rental_Plan_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rental_Plan_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rental_Plan_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rental_Plan_Sum_Order_By>;
  var_pop?: InputMaybe<Rental_Plan_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rental_Plan_Var_Samp_Order_By>;
  variance?: InputMaybe<Rental_Plan_Variance_Order_By>;
};

/** order by avg() on columns of table "rental_plan" */
export type Rental_Plan_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
  /** 適用優先權 */
  priority?: InputMaybe<Order_By>;
  /** 此方案所屬車行 id，空值代表為跨車行共用方案。 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rental_plan". All fields are combined with a logical 'AND'. */
export type Rental_Plan_Bool_Exp = {
  _and?: InputMaybe<Array<Rental_Plan_Bool_Exp>>;
  _not?: InputMaybe<Rental_Plan_Bool_Exp>;
  _or?: InputMaybe<Array<Rental_Plan_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  minimum_rental_period?: InputMaybe<Interval_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  period?: InputMaybe<Period_Bool_Exp>;
  period_id?: InputMaybe<Bigint_Comparison_Exp>;
  priority?: InputMaybe<Int_Comparison_Exp>;
  rental_company?: InputMaybe<Rental_Company_Bool_Exp>;
  rental_company_id?: InputMaybe<Bigint_Comparison_Exp>;
  unit?: InputMaybe<Timeunit_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle_rental_rates?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
  vehicle_rental_rates_aggregate?: InputMaybe<Vehicle_Rental_Rate_Aggregate_Bool_Exp>;
};

/** order by max() on columns of table "rental_plan" */
export type Rental_Plan_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 租賃方案名稱，如果有 period_id，就是 period.name，其他例如週租、月租 */
  name?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
  /** 適用優先權 */
  priority?: InputMaybe<Order_By>;
  /** 此方案所屬車行 id，空值代表為跨車行共用方案。 */
  rental_company_id?: InputMaybe<Order_By>;
  /** 計時單位 */
  unit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "rental_plan" */
export type Rental_Plan_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 租賃方案名稱，如果有 period_id，就是 period.name，其他例如週租、月租 */
  name?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
  /** 適用優先權 */
  priority?: InputMaybe<Order_By>;
  /** 此方案所屬車行 id，空值代表為跨車行共用方案。 */
  rental_company_id?: InputMaybe<Order_By>;
  /** 計時單位 */
  unit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "rental_plan". */
export type Rental_Plan_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  minimum_rental_period?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  period?: InputMaybe<Period_Order_By>;
  period_id?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  rental_company?: InputMaybe<Rental_Company_Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_rental_rates_aggregate?: InputMaybe<Vehicle_Rental_Rate_Aggregate_Order_By>;
};

/** select columns of table "rental_plan" */
export enum Rental_Plan_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MinimumRentalPeriod = 'minimum_rental_period',
  /** column name */
  Name = 'name',
  /** column name */
  PeriodId = 'period_id',
  /** column name */
  Priority = 'priority',
  /** column name */
  RentalCompanyId = 'rental_company_id',
  /** column name */
  Unit = 'unit',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** order by stddev() on columns of table "rental_plan" */
export type Rental_Plan_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
  /** 適用優先權 */
  priority?: InputMaybe<Order_By>;
  /** 此方案所屬車行 id，空值代表為跨車行共用方案。 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "rental_plan" */
export type Rental_Plan_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
  /** 適用優先權 */
  priority?: InputMaybe<Order_By>;
  /** 此方案所屬車行 id，空值代表為跨車行共用方案。 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "rental_plan" */
export type Rental_Plan_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
  /** 適用優先權 */
  priority?: InputMaybe<Order_By>;
  /** 此方案所屬車行 id，空值代表為跨車行共用方案。 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "rental_plan" */
export type Rental_Plan_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rental_Plan_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rental_Plan_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 最短租賃時間，例：當日，一日，一日以上 */
  minimum_rental_period?: InputMaybe<Scalars['interval']['input']>;
  /** 租賃方案名稱，如果有 period_id，就是 period.name，其他例如週租、月租 */
  name?: InputMaybe<Scalars['String']['input']>;
  period_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 適用優先權 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** 此方案所屬車行 id，空值代表為跨車行共用方案。 */
  rental_company_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 計時單位 */
  unit?: InputMaybe<Scalars['timeunit']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** order by sum() on columns of table "rental_plan" */
export type Rental_Plan_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
  /** 適用優先權 */
  priority?: InputMaybe<Order_By>;
  /** 此方案所屬車行 id，空值代表為跨車行共用方案。 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "rental_plan" */
export type Rental_Plan_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
  /** 適用優先權 */
  priority?: InputMaybe<Order_By>;
  /** 此方案所屬車行 id，空值代表為跨車行共用方案。 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "rental_plan" */
export type Rental_Plan_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
  /** 適用優先權 */
  priority?: InputMaybe<Order_By>;
  /** 此方案所屬車行 id，空值代表為跨車行共用方案。 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "rental_plan" */
export type Rental_Plan_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  period_id?: InputMaybe<Order_By>;
  /** 適用優先權 */
  priority?: InputMaybe<Order_By>;
  /** 此方案所屬車行 id，空值代表為跨車行共用方案。 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** 租賃政策表。考量到未來 i18n 擴充彈性，本表不含最終用戶介面的具體文案，僅用於內部管理與理解。 */
export type Rental_Policy = {
  __typename?: 'rental_policy';
  created_at: Scalars['timestamptz']['output'];
  /** 租賃政策的詳細描述。 */
  description: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  /** An array relationship */
  rental_company_policies: Array<Rental_Company_Policy>;
  updated_at: Scalars['timestamptz']['output'];
};


/** 租賃政策表。考量到未來 i18n 擴充彈性，本表不含最終用戶介面的具體文案，僅用於內部管理與理解。 */
export type Rental_PolicyRental_Company_PoliciesArgs = {
  distinct_on?: InputMaybe<Array<Rental_Company_Policy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Company_Policy_Order_By>>;
  where?: InputMaybe<Rental_Company_Policy_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "rental_policy". All fields are combined with a logical 'AND'. */
export type Rental_Policy_Bool_Exp = {
  _and?: InputMaybe<Array<Rental_Policy_Bool_Exp>>;
  _not?: InputMaybe<Rental_Policy_Bool_Exp>;
  _or?: InputMaybe<Array<Rental_Policy_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  rental_company_policies?: InputMaybe<Rental_Company_Policy_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "rental_policy". */
export type Rental_Policy_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rental_company_policies_aggregate?: InputMaybe<Rental_Company_Policy_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "rental_policy" */
export enum Rental_Policy_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Streaming cursor of the table "rental_policy" */
export type Rental_Policy_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rental_Policy_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rental_Policy_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 租賃政策的詳細描述。 */
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Boolean expression to compare columns of type "scheduledjobstatus". All fields are combined with logical 'AND'. */
export type Scheduledjobstatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['scheduledjobstatus']['input']>;
  _gt?: InputMaybe<Scalars['scheduledjobstatus']['input']>;
  _gte?: InputMaybe<Scalars['scheduledjobstatus']['input']>;
  _in?: InputMaybe<Array<Scalars['scheduledjobstatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['scheduledjobstatus']['input']>;
  _lte?: InputMaybe<Scalars['scheduledjobstatus']['input']>;
  _neq?: InputMaybe<Scalars['scheduledjobstatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['scheduledjobstatus']['input']>>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

/** 租賃站點 */
export type Station = {
  __typename?: 'station';
  /** 所在地址 */
  address: Scalars['String']['output'];
  /** 所在行政區 */
  area: Scalars['String']['output'];
  /** 所在縣市 */
  city: Scalars['String']['output'];
  /** 結束營業時間 */
  close: Scalars['timetz']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  fleet: Fleet;
  fleet_id: Scalars['bigint']['output'];
  id: Scalars['bigint']['output'];
  /** 是否公開，預設為隱藏 */
  is_public: Scalars['Boolean']['output'];
  /** 站點緯度 */
  latitude?: Maybe<Scalars['numeric']['output']>;
  /** 站點經度 */
  longitude?: Maybe<Scalars['numeric']['output']>;
  /** 站點名稱 */
  name: Scalars['String']['output'];
  /** 開始營業時間 */
  open: Scalars['timetz']['output'];
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate;
  /** 站點類型，自助租還或門市租還 */
  type: Scalars['stationtype']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  vehicles: Array<Vehicle>;
  /** An aggregate relationship */
  vehicles_aggregate: Vehicle_Aggregate;
};


/** 租賃站點 */
export type StationOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** 租賃站點 */
export type StationOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** 租賃站點 */
export type StationVehiclesArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};


/** 租賃站點 */
export type StationVehicles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};

/** aggregated selection of "station" */
export type Station_Aggregate = {
  __typename?: 'station_aggregate';
  aggregate?: Maybe<Station_Aggregate_Fields>;
  nodes: Array<Station>;
};

export type Station_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Station_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Station_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Station_Aggregate_Bool_Exp_Count>;
};

export type Station_Aggregate_Bool_Exp_Bool_And = {
  arguments: Station_Select_Column_Station_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Station_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Station_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Station_Select_Column_Station_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Station_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Station_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Station_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Station_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "station" */
export type Station_Aggregate_Fields = {
  __typename?: 'station_aggregate_fields';
  avg?: Maybe<Station_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Station_Max_Fields>;
  min?: Maybe<Station_Min_Fields>;
  stddev?: Maybe<Station_Stddev_Fields>;
  stddev_pop?: Maybe<Station_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Station_Stddev_Samp_Fields>;
  sum?: Maybe<Station_Sum_Fields>;
  var_pop?: Maybe<Station_Var_Pop_Fields>;
  var_samp?: Maybe<Station_Var_Samp_Fields>;
  variance?: Maybe<Station_Variance_Fields>;
};


/** aggregate fields of "station" */
export type Station_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Station_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "station" */
export type Station_Aggregate_Order_By = {
  avg?: InputMaybe<Station_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Station_Max_Order_By>;
  min?: InputMaybe<Station_Min_Order_By>;
  stddev?: InputMaybe<Station_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Station_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Station_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Station_Sum_Order_By>;
  var_pop?: InputMaybe<Station_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Station_Var_Samp_Order_By>;
  variance?: InputMaybe<Station_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Station_Avg_Fields = {
  __typename?: 'station_avg_fields';
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 站點緯度 */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** 站點經度 */
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "station" */
export type Station_Avg_Order_By = {
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 站點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 站點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "station". All fields are combined with a logical 'AND'. */
export type Station_Bool_Exp = {
  _and?: InputMaybe<Array<Station_Bool_Exp>>;
  _not?: InputMaybe<Station_Bool_Exp>;
  _or?: InputMaybe<Array<Station_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  area?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  close?: InputMaybe<Timetz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  fleet?: InputMaybe<Fleet_Bool_Exp>;
  fleet_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_public?: InputMaybe<Boolean_Comparison_Exp>;
  latitude?: InputMaybe<Numeric_Comparison_Exp>;
  longitude?: InputMaybe<Numeric_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  open?: InputMaybe<Timetz_Comparison_Exp>;
  orders?: InputMaybe<Order_Bool_Exp>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Bool_Exp>;
  type?: InputMaybe<Stationtype_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicles?: InputMaybe<Vehicle_Bool_Exp>;
  vehicles_aggregate?: InputMaybe<Vehicle_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Station_Max_Fields = {
  __typename?: 'station_max_fields';
  /** 所在地址 */
  address?: Maybe<Scalars['String']['output']>;
  /** 所在行政區 */
  area?: Maybe<Scalars['String']['output']>;
  /** 所在縣市 */
  city?: Maybe<Scalars['String']['output']>;
  /** 結束營業時間 */
  close?: Maybe<Scalars['timetz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  fleet_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 站點緯度 */
  latitude?: Maybe<Scalars['numeric']['output']>;
  /** 站點經度 */
  longitude?: Maybe<Scalars['numeric']['output']>;
  /** 站點名稱 */
  name?: Maybe<Scalars['String']['output']>;
  /** 開始營業時間 */
  open?: Maybe<Scalars['timetz']['output']>;
  /** 站點類型，自助租還或門市租還 */
  type?: Maybe<Scalars['stationtype']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "station" */
export type Station_Max_Order_By = {
  /** 所在地址 */
  address?: InputMaybe<Order_By>;
  /** 所在行政區 */
  area?: InputMaybe<Order_By>;
  /** 所在縣市 */
  city?: InputMaybe<Order_By>;
  /** 結束營業時間 */
  close?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 站點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 站點經度 */
  longitude?: InputMaybe<Order_By>;
  /** 站點名稱 */
  name?: InputMaybe<Order_By>;
  /** 開始營業時間 */
  open?: InputMaybe<Order_By>;
  /** 站點類型，自助租還或門市租還 */
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Station_Min_Fields = {
  __typename?: 'station_min_fields';
  /** 所在地址 */
  address?: Maybe<Scalars['String']['output']>;
  /** 所在行政區 */
  area?: Maybe<Scalars['String']['output']>;
  /** 所在縣市 */
  city?: Maybe<Scalars['String']['output']>;
  /** 結束營業時間 */
  close?: Maybe<Scalars['timetz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  fleet_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 站點緯度 */
  latitude?: Maybe<Scalars['numeric']['output']>;
  /** 站點經度 */
  longitude?: Maybe<Scalars['numeric']['output']>;
  /** 站點名稱 */
  name?: Maybe<Scalars['String']['output']>;
  /** 開始營業時間 */
  open?: Maybe<Scalars['timetz']['output']>;
  /** 站點類型，自助租還或門市租還 */
  type?: Maybe<Scalars['stationtype']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "station" */
export type Station_Min_Order_By = {
  /** 所在地址 */
  address?: InputMaybe<Order_By>;
  /** 所在行政區 */
  area?: InputMaybe<Order_By>;
  /** 所在縣市 */
  city?: InputMaybe<Order_By>;
  /** 結束營業時間 */
  close?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 站點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 站點經度 */
  longitude?: InputMaybe<Order_By>;
  /** 站點名稱 */
  name?: InputMaybe<Order_By>;
  /** 開始營業時間 */
  open?: InputMaybe<Order_By>;
  /** 站點類型，自助租還或門市租還 */
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "station". */
export type Station_Order_By = {
  address?: InputMaybe<Order_By>;
  area?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  close?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  fleet?: InputMaybe<Fleet_Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_public?: InputMaybe<Order_By>;
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  open?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicles_aggregate?: InputMaybe<Vehicle_Aggregate_Order_By>;
};

/** select columns of table "station" */
export enum Station_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Area = 'area',
  /** column name */
  City = 'city',
  /** column name */
  Close = 'close',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  FleetId = 'fleet_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  Open = 'open',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "station_aggregate_bool_exp_bool_and_arguments_columns" columns of table "station" */
export enum Station_Select_Column_Station_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsPublic = 'is_public'
}

/** select "station_aggregate_bool_exp_bool_or_arguments_columns" columns of table "station" */
export enum Station_Select_Column_Station_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsPublic = 'is_public'
}

/** aggregate stddev on columns */
export type Station_Stddev_Fields = {
  __typename?: 'station_stddev_fields';
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 站點緯度 */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** 站點經度 */
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "station" */
export type Station_Stddev_Order_By = {
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 站點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 站點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Station_Stddev_Pop_Fields = {
  __typename?: 'station_stddev_pop_fields';
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 站點緯度 */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** 站點經度 */
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "station" */
export type Station_Stddev_Pop_Order_By = {
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 站點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 站點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Station_Stddev_Samp_Fields = {
  __typename?: 'station_stddev_samp_fields';
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 站點緯度 */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** 站點經度 */
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "station" */
export type Station_Stddev_Samp_Order_By = {
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 站點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 站點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "station" */
export type Station_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Station_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Station_Stream_Cursor_Value_Input = {
  /** 所在地址 */
  address?: InputMaybe<Scalars['String']['input']>;
  /** 所在行政區 */
  area?: InputMaybe<Scalars['String']['input']>;
  /** 所在縣市 */
  city?: InputMaybe<Scalars['String']['input']>;
  /** 結束營業時間 */
  close?: InputMaybe<Scalars['timetz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fleet_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否公開，預設為隱藏 */
  is_public?: InputMaybe<Scalars['Boolean']['input']>;
  /** 站點緯度 */
  latitude?: InputMaybe<Scalars['numeric']['input']>;
  /** 站點經度 */
  longitude?: InputMaybe<Scalars['numeric']['input']>;
  /** 站點名稱 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 開始營業時間 */
  open?: InputMaybe<Scalars['timetz']['input']>;
  /** 站點類型，自助租還或門市租還 */
  type?: InputMaybe<Scalars['stationtype']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Station_Sum_Fields = {
  __typename?: 'station_sum_fields';
  fleet_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 站點緯度 */
  latitude?: Maybe<Scalars['numeric']['output']>;
  /** 站點經度 */
  longitude?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "station" */
export type Station_Sum_Order_By = {
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 站點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 站點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Station_Var_Pop_Fields = {
  __typename?: 'station_var_pop_fields';
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 站點緯度 */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** 站點經度 */
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "station" */
export type Station_Var_Pop_Order_By = {
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 站點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 站點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Station_Var_Samp_Fields = {
  __typename?: 'station_var_samp_fields';
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 站點緯度 */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** 站點經度 */
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "station" */
export type Station_Var_Samp_Order_By = {
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 站點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 站點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Station_Variance_Fields = {
  __typename?: 'station_variance_fields';
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 站點緯度 */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** 站點經度 */
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "station" */
export type Station_Variance_Order_By = {
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 站點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 站點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "stationtype". All fields are combined with logical 'AND'. */
export type Stationtype_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['stationtype']['input']>;
  _gt?: InputMaybe<Scalars['stationtype']['input']>;
  _gte?: InputMaybe<Scalars['stationtype']['input']>;
  _in?: InputMaybe<Array<Scalars['stationtype']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['stationtype']['input']>;
  _lte?: InputMaybe<Scalars['stationtype']['input']>;
  _neq?: InputMaybe<Scalars['stationtype']['input']>;
  _nin?: InputMaybe<Array<Scalars['stationtype']['input']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "allowance_job" */
  allowance_job: Array<Allowance_Job>;
  /** fetch aggregated fields from the table: "allowance_job" */
  allowance_job_aggregate: Allowance_Job_Aggregate;
  /** fetch data from the table: "allowance_job" using primary key columns */
  allowance_job_by_pk?: Maybe<Allowance_Job>;
  /** fetch data from the table in a streaming manner: "allowance_job" */
  allowance_job_stream: Array<Allowance_Job>;
  /** fetch data from the table: "billing_etc" */
  billing_etc: Array<Billing_Etc>;
  /** fetch aggregated fields from the table: "billing_etc" */
  billing_etc_aggregate: Billing_Etc_Aggregate;
  /** fetch data from the table: "billing_etc" using primary key columns */
  billing_etc_by_pk?: Maybe<Billing_Etc>;
  /** fetch data from the table: "billing_etc_file" */
  billing_etc_file: Array<Billing_Etc_File>;
  /** fetch aggregated fields from the table: "billing_etc_file" */
  billing_etc_file_aggregate: Billing_Etc_File_Aggregate;
  /** fetch data from the table: "billing_etc_file" using primary key columns */
  billing_etc_file_by_pk?: Maybe<Billing_Etc_File>;
  /** fetch data from the table in a streaming manner: "billing_etc_file" */
  billing_etc_file_stream: Array<Billing_Etc_File>;
  /** fetch data from the table in a streaming manner: "billing_etc" */
  billing_etc_stream: Array<Billing_Etc>;
  /** fetch data from the table: "billing_notify_job" */
  billing_notify_job: Array<Billing_Notify_Job>;
  /** fetch aggregated fields from the table: "billing_notify_job" */
  billing_notify_job_aggregate: Billing_Notify_Job_Aggregate;
  /** fetch data from the table: "billing_notify_job" using primary key columns */
  billing_notify_job_by_pk?: Maybe<Billing_Notify_Job>;
  /** fetch data from the table in a streaming manner: "billing_notify_job" */
  billing_notify_job_stream: Array<Billing_Notify_Job>;
  /** fetch data from the table: "billing_transaction" */
  billing_transaction: Array<Billing_Transaction>;
  /** fetch aggregated fields from the table: "billing_transaction" */
  billing_transaction_aggregate: Billing_Transaction_Aggregate;
  /** fetch data from the table: "billing_transaction" using primary key columns */
  billing_transaction_by_pk?: Maybe<Billing_Transaction>;
  /** fetch data from the table in a streaming manner: "billing_transaction" */
  billing_transaction_stream: Array<Billing_Transaction>;
  /** fetch data from the table: "binding_transaction" */
  binding_transaction: Array<Binding_Transaction>;
  /** fetch data from the table: "binding_transaction" using primary key columns */
  binding_transaction_by_pk?: Maybe<Binding_Transaction>;
  /** fetch data from the table in a streaming manner: "binding_transaction" */
  binding_transaction_stream: Array<Binding_Transaction>;
  /** fetch data from the table: "calendar" */
  calendar: Array<Calendar>;
  /** fetch aggregated fields from the table: "calendar" */
  calendar_aggregate: Calendar_Aggregate;
  /** fetch data from the table: "calendar" using primary key columns */
  calendar_by_pk?: Maybe<Calendar>;
  /** fetch data from the table in a streaming manner: "calendar" */
  calendar_stream: Array<Calendar>;
  /** fetch data from the table: "campaign" */
  campaign: Array<Campaign>;
  /** fetch aggregated fields from the table: "campaign" */
  campaign_aggregate: Campaign_Aggregate;
  /** fetch data from the table: "campaign" using primary key columns */
  campaign_by_pk?: Maybe<Campaign>;
  /** fetch data from the table in a streaming manner: "campaign" */
  campaign_stream: Array<Campaign>;
  /** fetch data from the table: "certificate_authority" */
  certificate_authority: Array<Certificate_Authority>;
  /** fetch aggregated fields from the table: "certificate_authority" */
  certificate_authority_aggregate: Certificate_Authority_Aggregate;
  /** fetch data from the table: "certificate_authority" using primary key columns */
  certificate_authority_by_pk?: Maybe<Certificate_Authority>;
  /** fetch data from the table in a streaming manner: "certificate_authority" */
  certificate_authority_stream: Array<Certificate_Authority>;
  /** fetch data from the table: "coupon" */
  coupon: Array<Coupon>;
  /** fetch data from the table: "coupon" using primary key columns */
  coupon_by_pk?: Maybe<Coupon>;
  /** fetch data from the table: "coupon_inventory" */
  coupon_inventory: Array<Coupon_Inventory>;
  /** fetch data from the table: "coupon_inventory" using primary key columns */
  coupon_inventory_by_pk?: Maybe<Coupon_Inventory>;
  /** fetch data from the table in a streaming manner: "coupon_inventory" */
  coupon_inventory_stream: Array<Coupon_Inventory>;
  /** fetch data from the table in a streaming manner: "coupon" */
  coupon_stream: Array<Coupon>;
  /** fetch data from the table: "credit_card" */
  credit_card: Array<Credit_Card>;
  /** fetch data from the table: "credit_card" using primary key columns */
  credit_card_by_pk?: Maybe<Credit_Card>;
  /** fetch data from the table in a streaming manner: "credit_card" */
  credit_card_stream: Array<Credit_Card>;
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>;
  /** An array relationship */
  customer_foreign_data: Array<Customer_Foreign_Data>;
  /** fetch data from the table: "customer_foreign_data" using primary key columns */
  customer_foreign_data_by_pk?: Maybe<Customer_Foreign_Data>;
  /** fetch data from the table in a streaming manner: "customer_foreign_data" */
  customer_foreign_data_stream: Array<Customer_Foreign_Data>;
  /** fetch data from the table: "customer_blocked_sql_view" */
  customer_in_blocked_list: Array<Customer_In_Blocked_List>;
  /** fetch aggregated fields from the table: "customer_blocked_sql_view" */
  customer_in_blocked_list_aggregate: Customer_In_Blocked_List_Aggregate;
  /** fetch data from the table in a streaming manner: "customer_blocked_sql_view" */
  customer_in_blocked_list_stream: Array<Customer_In_Blocked_List>;
  /** fetch data from the table: "customer_level" */
  customer_level: Array<Customer_Level>;
  /** fetch aggregated fields from the table: "customer_level" */
  customer_level_aggregate: Customer_Level_Aggregate;
  /** fetch data from the table: "customer_level" using primary key columns */
  customer_level_by_pk?: Maybe<Customer_Level>;
  /** fetch data from the table in a streaming manner: "customer_level" */
  customer_level_stream: Array<Customer_Level>;
  /** fetch data from the table: "customer_service_log" */
  customer_service_log: Array<Customer_Service_Log>;
  /** fetch data from the table: "customer_service_log" using primary key columns */
  customer_service_log_by_pk?: Maybe<Customer_Service_Log>;
  /** fetch data from the table in a streaming manner: "customer_service_log" */
  customer_service_log_stream: Array<Customer_Service_Log>;
  /** fetch data from the table in a streaming manner: "customer" */
  customer_stream: Array<Customer>;
  /** fetch data from the table: "device" */
  device: Array<Device>;
  /** fetch aggregated fields from the table: "device" */
  device_aggregate: Device_Aggregate;
  /** fetch data from the table: "device" using primary key columns */
  device_by_pk?: Maybe<Device>;
  /** fetch data from the table in a streaming manner: "device" */
  device_stream: Array<Device>;
  /** fetch data from the table: "discount" */
  discount: Array<Discount>;
  /** fetch aggregated fields from the table: "discount" */
  discount_aggregate: Discount_Aggregate;
  /** fetch data from the table: "discount" using primary key columns */
  discount_by_pk?: Maybe<Discount>;
  /** fetch data from the table in a streaming manner: "discount" */
  discount_stream: Array<Discount>;
  /** fetch data from the table: "einvoice_transaction" */
  einvoice_transaction: Array<Einvoice_Transaction>;
  /** fetch aggregated fields from the table: "einvoice_transaction" */
  einvoice_transaction_aggregate: Einvoice_Transaction_Aggregate;
  /** fetch data from the table: "einvoice_transaction" using primary key columns */
  einvoice_transaction_by_pk?: Maybe<Einvoice_Transaction>;
  /** fetch data from the table in a streaming manner: "einvoice_transaction" */
  einvoice_transaction_stream: Array<Einvoice_Transaction>;
  /** fetch data from the table: "exceed_rate" */
  exceed_rate: Array<Exceed_Rate>;
  /** fetch aggregated fields from the table: "exceed_rate" */
  exceed_rate_aggregate: Exceed_Rate_Aggregate;
  /** fetch data from the table: "exceed_rate" using primary key columns */
  exceed_rate_by_pk?: Maybe<Exceed_Rate>;
  /** fetch data from the table in a streaming manner: "exceed_rate" */
  exceed_rate_stream: Array<Exceed_Rate>;
  /** fetch data from the table: "firebase_cm_registration_token" */
  firebase_cm_registration_token: Array<Firebase_Cm_Registration_Token>;
  /** fetch data from the table: "firebase_cm_registration_token" using primary key columns */
  firebase_cm_registration_token_by_pk?: Maybe<Firebase_Cm_Registration_Token>;
  /** fetch data from the table in a streaming manner: "firebase_cm_registration_token" */
  firebase_cm_registration_token_stream: Array<Firebase_Cm_Registration_Token>;
  /** fetch data from the table: "fleet" */
  fleet: Array<Fleet>;
  /** fetch aggregated fields from the table: "fleet" */
  fleet_aggregate: Fleet_Aggregate;
  /** fetch data from the table: "fleet" using primary key columns */
  fleet_by_pk?: Maybe<Fleet>;
  /** fetch data from the table in a streaming manner: "fleet" */
  fleet_stream: Array<Fleet>;
  /** fetch data from the table: "generate_contract_job" */
  generate_contract_job: Array<Generate_Contract_Job>;
  /** fetch aggregated fields from the table: "generate_contract_job" */
  generate_contract_job_aggregate: Generate_Contract_Job_Aggregate;
  /** fetch data from the table: "generate_contract_job" using primary key columns */
  generate_contract_job_by_pk?: Maybe<Generate_Contract_Job>;
  /** fetch data from the table in a streaming manner: "generate_contract_job" */
  generate_contract_job_stream: Array<Generate_Contract_Job>;
  /** fetch data from the table: "holiday" */
  holiday: Array<Holiday>;
  /** fetch data from the table: "holiday" using primary key columns */
  holiday_by_pk?: Maybe<Holiday>;
  /** fetch data from the table in a streaming manner: "holiday" */
  holiday_stream: Array<Holiday>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order_billing" */
  order_billing: Array<Order_Billing>;
  /** fetch aggregated fields from the table: "order_billing" */
  order_billing_aggregate: Order_Billing_Aggregate;
  /** fetch data from the table: "order_billing" using primary key columns */
  order_billing_by_pk?: Maybe<Order_Billing>;
  /** fetch data from the table in a streaming manner: "order_billing" */
  order_billing_stream: Array<Order_Billing>;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "order_discount_snapshot" */
  order_discount_snapshot: Array<Order_Discount_Snapshot>;
  /** fetch data from the table: "order_discount_snapshot" using primary key columns */
  order_discount_snapshot_by_pk?: Maybe<Order_Discount_Snapshot>;
  /** fetch data from the table in a streaming manner: "order_discount_snapshot" */
  order_discount_snapshot_stream: Array<Order_Discount_Snapshot>;
  /** fetch data from the table: "order_photo" */
  order_photo: Array<Order_Photo>;
  /** fetch aggregated fields from the table: "order_photo" */
  order_photo_aggregate: Order_Photo_Aggregate;
  /** fetch data from the table: "order_photo" using primary key columns */
  order_photo_by_pk?: Maybe<Order_Photo>;
  /** fetch data from the table in a streaming manner: "order_photo" */
  order_photo_stream: Array<Order_Photo>;
  /** fetch data from the table in a streaming manner: "order" */
  order_stream: Array<Order>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table in a streaming manner: "organization" */
  organization_stream: Array<Organization>;
  /** fetch data from the table: "period" */
  period: Array<Period>;
  /** fetch aggregated fields from the table: "period" */
  period_aggregate: Period_Aggregate;
  /** fetch data from the table: "period" using primary key columns */
  period_by_pk?: Maybe<Period>;
  /** fetch data from the table in a streaming manner: "period" */
  period_stream: Array<Period>;
  /** fetch data from the table: "refund" */
  refund: Array<Refund>;
  /** fetch aggregated fields from the table: "refund" */
  refund_aggregate: Refund_Aggregate;
  /** fetch data from the table: "refund" using primary key columns */
  refund_by_pk?: Maybe<Refund>;
  /** fetch data from the table in a streaming manner: "refund" */
  refund_stream: Array<Refund>;
  /** fetch data from the table: "rental_company" */
  rental_company: Array<Rental_Company>;
  /** fetch aggregated fields from the table: "rental_company" */
  rental_company_aggregate: Rental_Company_Aggregate;
  /** fetch data from the table: "rental_company" using primary key columns */
  rental_company_by_pk?: Maybe<Rental_Company>;
  /** fetch data from the table: "rental_company_policy" */
  rental_company_policy: Array<Rental_Company_Policy>;
  /** fetch data from the table: "rental_company_policy" using primary key columns */
  rental_company_policy_by_pk?: Maybe<Rental_Company_Policy>;
  /** fetch data from the table in a streaming manner: "rental_company_policy" */
  rental_company_policy_stream: Array<Rental_Company_Policy>;
  /** fetch data from the table in a streaming manner: "rental_company" */
  rental_company_stream: Array<Rental_Company>;
  /** fetch data from the table: "rental_plan" */
  rental_plan: Array<Rental_Plan>;
  /** fetch data from the table: "rental_plan" using primary key columns */
  rental_plan_by_pk?: Maybe<Rental_Plan>;
  /** fetch data from the table in a streaming manner: "rental_plan" */
  rental_plan_stream: Array<Rental_Plan>;
  /** fetch data from the table: "rental_policy" */
  rental_policy: Array<Rental_Policy>;
  /** fetch data from the table: "rental_policy" using primary key columns */
  rental_policy_by_pk?: Maybe<Rental_Policy>;
  /** fetch data from the table in a streaming manner: "rental_policy" */
  rental_policy_stream: Array<Rental_Policy>;
  /** fetch data from the table: "station" */
  station: Array<Station>;
  /** fetch aggregated fields from the table: "station" */
  station_aggregate: Station_Aggregate;
  /** fetch data from the table: "station" using primary key columns */
  station_by_pk?: Maybe<Station>;
  /** fetch data from the table in a streaming manner: "station" */
  station_stream: Array<Station>;
  /** fetch data from the table: "taiwan_area" */
  taiwan_area: Array<Taiwan_Area>;
  /** fetch data from the table: "taiwan_area" using primary key columns */
  taiwan_area_by_pk?: Maybe<Taiwan_Area>;
  /** fetch data from the table in a streaming manner: "taiwan_area" */
  taiwan_area_stream: Array<Taiwan_Area>;
  /** fetch data from the table: "taiwan_city" */
  taiwan_city: Array<Taiwan_City>;
  /** fetch data from the table: "taiwan_city" using primary key columns */
  taiwan_city_by_pk?: Maybe<Taiwan_City>;
  /** fetch data from the table in a streaming manner: "taiwan_city" */
  taiwan_city_stream: Array<Taiwan_City>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
  /** fetch data from the table: "vehicle" */
  vehicle: Array<Vehicle>;
  /** fetch aggregated fields from the table: "vehicle" */
  vehicle_aggregate: Vehicle_Aggregate;
  /** fetch data from the table: "vehicle_brand" */
  vehicle_brand: Array<Vehicle_Brand>;
  /** fetch aggregated fields from the table: "vehicle_brand" */
  vehicle_brand_aggregate: Vehicle_Brand_Aggregate;
  /** fetch data from the table: "vehicle_brand" using primary key columns */
  vehicle_brand_by_pk?: Maybe<Vehicle_Brand>;
  /** fetch data from the table in a streaming manner: "vehicle_brand" */
  vehicle_brand_stream: Array<Vehicle_Brand>;
  /** fetch data from the table: "vehicle_brand_v2" */
  vehicle_brand_v2: Array<Vehicle_Brand_V2>;
  /** fetch aggregated fields from the table: "vehicle_brand_v2" */
  vehicle_brand_v2_aggregate: Vehicle_Brand_V2_Aggregate;
  /** fetch data from the table: "vehicle_brand_v2" using primary key columns */
  vehicle_brand_v2_by_pk?: Maybe<Vehicle_Brand_V2>;
  /** fetch data from the table in a streaming manner: "vehicle_brand_v2" */
  vehicle_brand_v2_stream: Array<Vehicle_Brand_V2>;
  /** fetch data from the table: "vehicle" using primary key columns */
  vehicle_by_pk?: Maybe<Vehicle>;
  /** fetch data from the table: "vehicle_holding_company" */
  vehicle_holding_company: Array<Vehicle_Holding_Company>;
  /** fetch data from the table: "vehicle_holding_company" using primary key columns */
  vehicle_holding_company_by_pk?: Maybe<Vehicle_Holding_Company>;
  /** fetch data from the table in a streaming manner: "vehicle_holding_company" */
  vehicle_holding_company_stream: Array<Vehicle_Holding_Company>;
  /** fetch data from the table: "vehicle_kind" */
  vehicle_kind: Array<Vehicle_Kind>;
  /** fetch aggregated fields from the table: "vehicle_kind" */
  vehicle_kind_aggregate: Vehicle_Kind_Aggregate;
  /** fetch data from the table: "vehicle_kind" using primary key columns */
  vehicle_kind_by_pk?: Maybe<Vehicle_Kind>;
  /** fetch data from the table in a streaming manner: "vehicle_kind" */
  vehicle_kind_stream: Array<Vehicle_Kind>;
  /** fetch data from the table: "vehicle_model" */
  vehicle_model: Array<Vehicle_Model>;
  /** fetch data from the table: "vehicle_model" using primary key columns */
  vehicle_model_by_pk?: Maybe<Vehicle_Model>;
  /** fetch data from the table in a streaming manner: "vehicle_model" */
  vehicle_model_stream: Array<Vehicle_Model>;
  /** fetch data from the table: "vehicle_model_v2" */
  vehicle_model_v2: Array<Vehicle_Model_V2>;
  /** fetch aggregated fields from the table: "vehicle_model_v2" */
  vehicle_model_v2_aggregate: Vehicle_Model_V2_Aggregate;
  /** fetch data from the table: "vehicle_model_v2" using primary key columns */
  vehicle_model_v2_by_pk?: Maybe<Vehicle_Model_V2>;
  /** fetch data from the table in a streaming manner: "vehicle_model_v2" */
  vehicle_model_v2_stream: Array<Vehicle_Model_V2>;
  /** fetch data from the table: "vehicle_parameter" */
  vehicle_parameter: Array<Vehicle_Parameter>;
  /** fetch aggregated fields from the table: "vehicle_parameter" */
  vehicle_parameter_aggregate: Vehicle_Parameter_Aggregate;
  /** fetch data from the table: "vehicle_parameter" using primary key columns */
  vehicle_parameter_by_pk?: Maybe<Vehicle_Parameter>;
  /** fetch data from the table: "vehicle_parameter_definition" */
  vehicle_parameter_definition: Array<Vehicle_Parameter_Definition>;
  /** fetch aggregated fields from the table: "vehicle_parameter_definition" */
  vehicle_parameter_definition_aggregate: Vehicle_Parameter_Definition_Aggregate;
  /** fetch data from the table: "vehicle_parameter_definition" using primary key columns */
  vehicle_parameter_definition_by_pk?: Maybe<Vehicle_Parameter_Definition>;
  /** fetch data from the table in a streaming manner: "vehicle_parameter_definition" */
  vehicle_parameter_definition_stream: Array<Vehicle_Parameter_Definition>;
  /** fetch data from the table in a streaming manner: "vehicle_parameter" */
  vehicle_parameter_stream: Array<Vehicle_Parameter>;
  /** fetch data from the table: "vehicle_rental_rate" */
  vehicle_rental_rate: Array<Vehicle_Rental_Rate>;
  /** fetch aggregated fields from the table: "vehicle_rental_rate" */
  vehicle_rental_rate_aggregate: Vehicle_Rental_Rate_Aggregate;
  /** fetch data from the table: "vehicle_rental_rate" using primary key columns */
  vehicle_rental_rate_by_pk?: Maybe<Vehicle_Rental_Rate>;
  /** fetch data from the table in a streaming manner: "vehicle_rental_rate" */
  vehicle_rental_rate_stream: Array<Vehicle_Rental_Rate>;
  /** fetch data from the table in a streaming manner: "vehicle" */
  vehicle_stream: Array<Vehicle>;
  /** fetch data from the table: "vehicle_type" */
  vehicle_type: Array<Vehicle_Type>;
  /** fetch aggregated fields from the table: "vehicle_type" */
  vehicle_type_aggregate: Vehicle_Type_Aggregate;
  /** fetch data from the table: "vehicle_type" using primary key columns */
  vehicle_type_by_pk?: Maybe<Vehicle_Type>;
  /** fetch data from the table in a streaming manner: "vehicle_type" */
  vehicle_type_stream: Array<Vehicle_Type>;
  /** fetch data from the table: "vehicle_unavailable_calendar" */
  vehicle_unavailable_calendar: Array<Vehicle_Unavailable_Calendar>;
  /** fetch aggregated fields from the table: "vehicle_unavailable_calendar" */
  vehicle_unavailable_calendar_aggregate: Vehicle_Unavailable_Calendar_Aggregate;
  /** fetch data from the table: "vehicle_unavailable_calendar" using primary key columns */
  vehicle_unavailable_calendar_by_pk?: Maybe<Vehicle_Unavailable_Calendar>;
  /** fetch data from the table in a streaming manner: "vehicle_unavailable_calendar" */
  vehicle_unavailable_calendar_stream: Array<Vehicle_Unavailable_Calendar>;
};


export type Subscription_RootAllowance_JobArgs = {
  distinct_on?: InputMaybe<Array<Allowance_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Allowance_Job_Order_By>>;
  where?: InputMaybe<Allowance_Job_Bool_Exp>;
};


export type Subscription_RootAllowance_Job_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Allowance_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Allowance_Job_Order_By>>;
  where?: InputMaybe<Allowance_Job_Bool_Exp>;
};


export type Subscription_RootAllowance_Job_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootAllowance_Job_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Allowance_Job_Stream_Cursor_Input>>;
  where?: InputMaybe<Allowance_Job_Bool_Exp>;
};


export type Subscription_RootBilling_EtcArgs = {
  distinct_on?: InputMaybe<Array<Billing_Etc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Etc_Order_By>>;
  where?: InputMaybe<Billing_Etc_Bool_Exp>;
};


export type Subscription_RootBilling_Etc_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Etc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Etc_Order_By>>;
  where?: InputMaybe<Billing_Etc_Bool_Exp>;
};


export type Subscription_RootBilling_Etc_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootBilling_Etc_FileArgs = {
  distinct_on?: InputMaybe<Array<Billing_Etc_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Etc_File_Order_By>>;
  where?: InputMaybe<Billing_Etc_File_Bool_Exp>;
};


export type Subscription_RootBilling_Etc_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Etc_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Etc_File_Order_By>>;
  where?: InputMaybe<Billing_Etc_File_Bool_Exp>;
};


export type Subscription_RootBilling_Etc_File_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootBilling_Etc_File_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Billing_Etc_File_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Etc_File_Bool_Exp>;
};


export type Subscription_RootBilling_Etc_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Billing_Etc_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Etc_Bool_Exp>;
};


export type Subscription_RootBilling_Notify_JobArgs = {
  distinct_on?: InputMaybe<Array<Billing_Notify_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Notify_Job_Order_By>>;
  where?: InputMaybe<Billing_Notify_Job_Bool_Exp>;
};


export type Subscription_RootBilling_Notify_Job_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Notify_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Notify_Job_Order_By>>;
  where?: InputMaybe<Billing_Notify_Job_Bool_Exp>;
};


export type Subscription_RootBilling_Notify_Job_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootBilling_Notify_Job_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Billing_Notify_Job_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Notify_Job_Bool_Exp>;
};


export type Subscription_RootBilling_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Billing_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Transaction_Order_By>>;
  where?: InputMaybe<Billing_Transaction_Bool_Exp>;
};


export type Subscription_RootBilling_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Billing_Transaction_Order_By>>;
  where?: InputMaybe<Billing_Transaction_Bool_Exp>;
};


export type Subscription_RootBilling_Transaction_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootBilling_Transaction_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Billing_Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Transaction_Bool_Exp>;
};


export type Subscription_RootBinding_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Binding_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Binding_Transaction_Order_By>>;
  where?: InputMaybe<Binding_Transaction_Bool_Exp>;
};


export type Subscription_RootBinding_Transaction_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootBinding_Transaction_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Binding_Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Binding_Transaction_Bool_Exp>;
};


export type Subscription_RootCalendarArgs = {
  distinct_on?: InputMaybe<Array<Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Calendar_Order_By>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


export type Subscription_RootCalendar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Calendar_Order_By>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


export type Subscription_RootCalendar_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCalendar_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Calendar_Stream_Cursor_Input>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


export type Subscription_RootCampaignArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Subscription_RootCampaign_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Subscription_RootCampaign_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCampaign_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Campaign_Stream_Cursor_Input>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Subscription_RootCertificate_AuthorityArgs = {
  distinct_on?: InputMaybe<Array<Certificate_Authority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Certificate_Authority_Order_By>>;
  where?: InputMaybe<Certificate_Authority_Bool_Exp>;
};


export type Subscription_RootCertificate_Authority_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Certificate_Authority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Certificate_Authority_Order_By>>;
  where?: InputMaybe<Certificate_Authority_Bool_Exp>;
};


export type Subscription_RootCertificate_Authority_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCertificate_Authority_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Certificate_Authority_Stream_Cursor_Input>>;
  where?: InputMaybe<Certificate_Authority_Bool_Exp>;
};


export type Subscription_RootCouponArgs = {
  distinct_on?: InputMaybe<Array<Coupon_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coupon_Order_By>>;
  where?: InputMaybe<Coupon_Bool_Exp>;
};


export type Subscription_RootCoupon_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCoupon_InventoryArgs = {
  distinct_on?: InputMaybe<Array<Coupon_Inventory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coupon_Inventory_Order_By>>;
  where?: InputMaybe<Coupon_Inventory_Bool_Exp>;
};


export type Subscription_RootCoupon_Inventory_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCoupon_Inventory_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Coupon_Inventory_Stream_Cursor_Input>>;
  where?: InputMaybe<Coupon_Inventory_Bool_Exp>;
};


export type Subscription_RootCoupon_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Coupon_Stream_Cursor_Input>>;
  where?: InputMaybe<Coupon_Bool_Exp>;
};


export type Subscription_RootCredit_CardArgs = {
  distinct_on?: InputMaybe<Array<Credit_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Card_Order_By>>;
  where?: InputMaybe<Credit_Card_Bool_Exp>;
};


export type Subscription_RootCredit_Card_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCredit_Card_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Credit_Card_Stream_Cursor_Input>>;
  where?: InputMaybe<Credit_Card_Bool_Exp>;
};


export type Subscription_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootCustomer_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCustomer_Foreign_DataArgs = {
  distinct_on?: InputMaybe<Array<Customer_Foreign_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Foreign_Data_Order_By>>;
  where?: InputMaybe<Customer_Foreign_Data_Bool_Exp>;
};


export type Subscription_RootCustomer_Foreign_Data_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCustomer_Foreign_Data_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Customer_Foreign_Data_Stream_Cursor_Input>>;
  where?: InputMaybe<Customer_Foreign_Data_Bool_Exp>;
};


export type Subscription_RootCustomer_In_Blocked_ListArgs = {
  distinct_on?: InputMaybe<Array<Customer_In_Blocked_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_In_Blocked_List_Order_By>>;
  where?: InputMaybe<Customer_In_Blocked_List_Bool_Exp>;
};


export type Subscription_RootCustomer_In_Blocked_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_In_Blocked_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_In_Blocked_List_Order_By>>;
  where?: InputMaybe<Customer_In_Blocked_List_Bool_Exp>;
};


export type Subscription_RootCustomer_In_Blocked_List_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Customer_In_Blocked_List_Stream_Cursor_Input>>;
  where?: InputMaybe<Customer_In_Blocked_List_Bool_Exp>;
};


export type Subscription_RootCustomer_LevelArgs = {
  distinct_on?: InputMaybe<Array<Customer_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Level_Order_By>>;
  where?: InputMaybe<Customer_Level_Bool_Exp>;
};


export type Subscription_RootCustomer_Level_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Level_Order_By>>;
  where?: InputMaybe<Customer_Level_Bool_Exp>;
};


export type Subscription_RootCustomer_Level_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCustomer_Level_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Customer_Level_Stream_Cursor_Input>>;
  where?: InputMaybe<Customer_Level_Bool_Exp>;
};


export type Subscription_RootCustomer_Service_LogArgs = {
  distinct_on?: InputMaybe<Array<Customer_Service_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Service_Log_Order_By>>;
  where?: InputMaybe<Customer_Service_Log_Bool_Exp>;
};


export type Subscription_RootCustomer_Service_Log_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCustomer_Service_Log_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Customer_Service_Log_Stream_Cursor_Input>>;
  where?: InputMaybe<Customer_Service_Log_Bool_Exp>;
};


export type Subscription_RootCustomer_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Customer_Stream_Cursor_Input>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootDeviceArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


export type Subscription_RootDevice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


export type Subscription_RootDevice_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootDevice_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Device_Stream_Cursor_Input>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


export type Subscription_RootDiscountArgs = {
  distinct_on?: InputMaybe<Array<Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Discount_Order_By>>;
  where?: InputMaybe<Discount_Bool_Exp>;
};


export type Subscription_RootDiscount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Discount_Order_By>>;
  where?: InputMaybe<Discount_Bool_Exp>;
};


export type Subscription_RootDiscount_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootDiscount_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Discount_Stream_Cursor_Input>>;
  where?: InputMaybe<Discount_Bool_Exp>;
};


export type Subscription_RootEinvoice_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Einvoice_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Einvoice_Transaction_Order_By>>;
  where?: InputMaybe<Einvoice_Transaction_Bool_Exp>;
};


export type Subscription_RootEinvoice_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Einvoice_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Einvoice_Transaction_Order_By>>;
  where?: InputMaybe<Einvoice_Transaction_Bool_Exp>;
};


export type Subscription_RootEinvoice_Transaction_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootEinvoice_Transaction_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Einvoice_Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Einvoice_Transaction_Bool_Exp>;
};


export type Subscription_RootExceed_RateArgs = {
  distinct_on?: InputMaybe<Array<Exceed_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exceed_Rate_Order_By>>;
  where?: InputMaybe<Exceed_Rate_Bool_Exp>;
};


export type Subscription_RootExceed_Rate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exceed_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exceed_Rate_Order_By>>;
  where?: InputMaybe<Exceed_Rate_Bool_Exp>;
};


export type Subscription_RootExceed_Rate_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootExceed_Rate_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Exceed_Rate_Stream_Cursor_Input>>;
  where?: InputMaybe<Exceed_Rate_Bool_Exp>;
};


export type Subscription_RootFirebase_Cm_Registration_TokenArgs = {
  distinct_on?: InputMaybe<Array<Firebase_Cm_Registration_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Firebase_Cm_Registration_Token_Order_By>>;
  where?: InputMaybe<Firebase_Cm_Registration_Token_Bool_Exp>;
};


export type Subscription_RootFirebase_Cm_Registration_Token_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootFirebase_Cm_Registration_Token_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Firebase_Cm_Registration_Token_Stream_Cursor_Input>>;
  where?: InputMaybe<Firebase_Cm_Registration_Token_Bool_Exp>;
};


export type Subscription_RootFleetArgs = {
  distinct_on?: InputMaybe<Array<Fleet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fleet_Order_By>>;
  where?: InputMaybe<Fleet_Bool_Exp>;
};


export type Subscription_RootFleet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fleet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fleet_Order_By>>;
  where?: InputMaybe<Fleet_Bool_Exp>;
};


export type Subscription_RootFleet_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootFleet_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Fleet_Stream_Cursor_Input>>;
  where?: InputMaybe<Fleet_Bool_Exp>;
};


export type Subscription_RootGenerate_Contract_JobArgs = {
  distinct_on?: InputMaybe<Array<Generate_Contract_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generate_Contract_Job_Order_By>>;
  where?: InputMaybe<Generate_Contract_Job_Bool_Exp>;
};


export type Subscription_RootGenerate_Contract_Job_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Generate_Contract_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generate_Contract_Job_Order_By>>;
  where?: InputMaybe<Generate_Contract_Job_Bool_Exp>;
};


export type Subscription_RootGenerate_Contract_Job_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootGenerate_Contract_Job_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Generate_Contract_Job_Stream_Cursor_Input>>;
  where?: InputMaybe<Generate_Contract_Job_Bool_Exp>;
};


export type Subscription_RootHolidayArgs = {
  distinct_on?: InputMaybe<Array<Holiday_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Holiday_Order_By>>;
  where?: InputMaybe<Holiday_Bool_Exp>;
};


export type Subscription_RootHoliday_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootHoliday_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Holiday_Stream_Cursor_Input>>;
  where?: InputMaybe<Holiday_Bool_Exp>;
};


export type Subscription_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_BillingArgs = {
  distinct_on?: InputMaybe<Array<Order_Billing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Billing_Order_By>>;
  where?: InputMaybe<Order_Billing_Bool_Exp>;
};


export type Subscription_RootOrder_Billing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Billing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Billing_Order_By>>;
  where?: InputMaybe<Order_Billing_Bool_Exp>;
};


export type Subscription_RootOrder_Billing_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootOrder_Billing_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Order_Billing_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Billing_Bool_Exp>;
};


export type Subscription_RootOrder_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootOrder_Discount_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Order_Discount_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Discount_Snapshot_Order_By>>;
  where?: InputMaybe<Order_Discount_Snapshot_Bool_Exp>;
};


export type Subscription_RootOrder_Discount_Snapshot_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootOrder_Discount_Snapshot_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Order_Discount_Snapshot_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Discount_Snapshot_Bool_Exp>;
};


export type Subscription_RootOrder_PhotoArgs = {
  distinct_on?: InputMaybe<Array<Order_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Photo_Order_By>>;
  where?: InputMaybe<Order_Photo_Bool_Exp>;
};


export type Subscription_RootOrder_Photo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Photo_Order_By>>;
  where?: InputMaybe<Order_Photo_Bool_Exp>;
};


export type Subscription_RootOrder_Photo_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootOrder_Photo_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Order_Photo_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Photo_Bool_Exp>;
};


export type Subscription_RootOrder_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Order_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootOrganization_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootPeriodArgs = {
  distinct_on?: InputMaybe<Array<Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Period_Order_By>>;
  where?: InputMaybe<Period_Bool_Exp>;
};


export type Subscription_RootPeriod_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Period_Order_By>>;
  where?: InputMaybe<Period_Bool_Exp>;
};


export type Subscription_RootPeriod_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootPeriod_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Period_Stream_Cursor_Input>>;
  where?: InputMaybe<Period_Bool_Exp>;
};


export type Subscription_RootRefundArgs = {
  distinct_on?: InputMaybe<Array<Refund_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Refund_Order_By>>;
  where?: InputMaybe<Refund_Bool_Exp>;
};


export type Subscription_RootRefund_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Refund_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Refund_Order_By>>;
  where?: InputMaybe<Refund_Bool_Exp>;
};


export type Subscription_RootRefund_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootRefund_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Refund_Stream_Cursor_Input>>;
  where?: InputMaybe<Refund_Bool_Exp>;
};


export type Subscription_RootRental_CompanyArgs = {
  distinct_on?: InputMaybe<Array<Rental_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Company_Order_By>>;
  where?: InputMaybe<Rental_Company_Bool_Exp>;
};


export type Subscription_RootRental_Company_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rental_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Company_Order_By>>;
  where?: InputMaybe<Rental_Company_Bool_Exp>;
};


export type Subscription_RootRental_Company_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootRental_Company_PolicyArgs = {
  distinct_on?: InputMaybe<Array<Rental_Company_Policy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Company_Policy_Order_By>>;
  where?: InputMaybe<Rental_Company_Policy_Bool_Exp>;
};


export type Subscription_RootRental_Company_Policy_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootRental_Company_Policy_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rental_Company_Policy_Stream_Cursor_Input>>;
  where?: InputMaybe<Rental_Company_Policy_Bool_Exp>;
};


export type Subscription_RootRental_Company_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rental_Company_Stream_Cursor_Input>>;
  where?: InputMaybe<Rental_Company_Bool_Exp>;
};


export type Subscription_RootRental_PlanArgs = {
  distinct_on?: InputMaybe<Array<Rental_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Plan_Order_By>>;
  where?: InputMaybe<Rental_Plan_Bool_Exp>;
};


export type Subscription_RootRental_Plan_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootRental_Plan_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rental_Plan_Stream_Cursor_Input>>;
  where?: InputMaybe<Rental_Plan_Bool_Exp>;
};


export type Subscription_RootRental_PolicyArgs = {
  distinct_on?: InputMaybe<Array<Rental_Policy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rental_Policy_Order_By>>;
  where?: InputMaybe<Rental_Policy_Bool_Exp>;
};


export type Subscription_RootRental_Policy_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootRental_Policy_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rental_Policy_Stream_Cursor_Input>>;
  where?: InputMaybe<Rental_Policy_Bool_Exp>;
};


export type Subscription_RootStationArgs = {
  distinct_on?: InputMaybe<Array<Station_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Station_Order_By>>;
  where?: InputMaybe<Station_Bool_Exp>;
};


export type Subscription_RootStation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Station_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Station_Order_By>>;
  where?: InputMaybe<Station_Bool_Exp>;
};


export type Subscription_RootStation_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootStation_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Station_Stream_Cursor_Input>>;
  where?: InputMaybe<Station_Bool_Exp>;
};


export type Subscription_RootTaiwan_AreaArgs = {
  distinct_on?: InputMaybe<Array<Taiwan_Area_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taiwan_Area_Order_By>>;
  where?: InputMaybe<Taiwan_Area_Bool_Exp>;
};


export type Subscription_RootTaiwan_Area_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootTaiwan_Area_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Taiwan_Area_Stream_Cursor_Input>>;
  where?: InputMaybe<Taiwan_Area_Bool_Exp>;
};


export type Subscription_RootTaiwan_CityArgs = {
  distinct_on?: InputMaybe<Array<Taiwan_City_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taiwan_City_Order_By>>;
  where?: InputMaybe<Taiwan_City_Bool_Exp>;
};


export type Subscription_RootTaiwan_City_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootTaiwan_City_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Taiwan_City_Stream_Cursor_Input>>;
  where?: InputMaybe<Taiwan_City_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootVehicleArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};


export type Subscription_RootVehicle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};


export type Subscription_RootVehicle_BrandArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Brand_Order_By>>;
  where?: InputMaybe<Vehicle_Brand_Bool_Exp>;
};


export type Subscription_RootVehicle_Brand_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Brand_Order_By>>;
  where?: InputMaybe<Vehicle_Brand_Bool_Exp>;
};


export type Subscription_RootVehicle_Brand_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootVehicle_Brand_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vehicle_Brand_Stream_Cursor_Input>>;
  where?: InputMaybe<Vehicle_Brand_Bool_Exp>;
};


export type Subscription_RootVehicle_Brand_V2Args = {
  distinct_on?: InputMaybe<Array<Vehicle_Brand_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Brand_V2_Order_By>>;
  where?: InputMaybe<Vehicle_Brand_V2_Bool_Exp>;
};


export type Subscription_RootVehicle_Brand_V2_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Brand_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Brand_V2_Order_By>>;
  where?: InputMaybe<Vehicle_Brand_V2_Bool_Exp>;
};


export type Subscription_RootVehicle_Brand_V2_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootVehicle_Brand_V2_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vehicle_Brand_V2_Stream_Cursor_Input>>;
  where?: InputMaybe<Vehicle_Brand_V2_Bool_Exp>;
};


export type Subscription_RootVehicle_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootVehicle_Holding_CompanyArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Holding_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Holding_Company_Order_By>>;
  where?: InputMaybe<Vehicle_Holding_Company_Bool_Exp>;
};


export type Subscription_RootVehicle_Holding_Company_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootVehicle_Holding_Company_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vehicle_Holding_Company_Stream_Cursor_Input>>;
  where?: InputMaybe<Vehicle_Holding_Company_Bool_Exp>;
};


export type Subscription_RootVehicle_KindArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Kind_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Kind_Order_By>>;
  where?: InputMaybe<Vehicle_Kind_Bool_Exp>;
};


export type Subscription_RootVehicle_Kind_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Kind_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Kind_Order_By>>;
  where?: InputMaybe<Vehicle_Kind_Bool_Exp>;
};


export type Subscription_RootVehicle_Kind_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootVehicle_Kind_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vehicle_Kind_Stream_Cursor_Input>>;
  where?: InputMaybe<Vehicle_Kind_Bool_Exp>;
};


export type Subscription_RootVehicle_ModelArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Model_Order_By>>;
  where?: InputMaybe<Vehicle_Model_Bool_Exp>;
};


export type Subscription_RootVehicle_Model_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootVehicle_Model_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vehicle_Model_Stream_Cursor_Input>>;
  where?: InputMaybe<Vehicle_Model_Bool_Exp>;
};


export type Subscription_RootVehicle_Model_V2Args = {
  distinct_on?: InputMaybe<Array<Vehicle_Model_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Model_V2_Order_By>>;
  where?: InputMaybe<Vehicle_Model_V2_Bool_Exp>;
};


export type Subscription_RootVehicle_Model_V2_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Model_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Model_V2_Order_By>>;
  where?: InputMaybe<Vehicle_Model_V2_Bool_Exp>;
};


export type Subscription_RootVehicle_Model_V2_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootVehicle_Model_V2_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vehicle_Model_V2_Stream_Cursor_Input>>;
  where?: InputMaybe<Vehicle_Model_V2_Bool_Exp>;
};


export type Subscription_RootVehicle_ParameterArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Parameter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Parameter_Order_By>>;
  where?: InputMaybe<Vehicle_Parameter_Bool_Exp>;
};


export type Subscription_RootVehicle_Parameter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Parameter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Parameter_Order_By>>;
  where?: InputMaybe<Vehicle_Parameter_Bool_Exp>;
};


export type Subscription_RootVehicle_Parameter_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootVehicle_Parameter_DefinitionArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Parameter_Definition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Parameter_Definition_Order_By>>;
  where?: InputMaybe<Vehicle_Parameter_Definition_Bool_Exp>;
};


export type Subscription_RootVehicle_Parameter_Definition_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Parameter_Definition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Parameter_Definition_Order_By>>;
  where?: InputMaybe<Vehicle_Parameter_Definition_Bool_Exp>;
};


export type Subscription_RootVehicle_Parameter_Definition_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootVehicle_Parameter_Definition_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vehicle_Parameter_Definition_Stream_Cursor_Input>>;
  where?: InputMaybe<Vehicle_Parameter_Definition_Bool_Exp>;
};


export type Subscription_RootVehicle_Parameter_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vehicle_Parameter_Stream_Cursor_Input>>;
  where?: InputMaybe<Vehicle_Parameter_Bool_Exp>;
};


export type Subscription_RootVehicle_Rental_RateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Rental_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Rental_Rate_Order_By>>;
  where?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
};


export type Subscription_RootVehicle_Rental_Rate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Rental_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Rental_Rate_Order_By>>;
  where?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
};


export type Subscription_RootVehicle_Rental_Rate_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootVehicle_Rental_Rate_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vehicle_Rental_Rate_Stream_Cursor_Input>>;
  where?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
};


export type Subscription_RootVehicle_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vehicle_Stream_Cursor_Input>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};


export type Subscription_RootVehicle_TypeArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Type_Order_By>>;
  where?: InputMaybe<Vehicle_Type_Bool_Exp>;
};


export type Subscription_RootVehicle_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Type_Order_By>>;
  where?: InputMaybe<Vehicle_Type_Bool_Exp>;
};


export type Subscription_RootVehicle_Type_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootVehicle_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vehicle_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Vehicle_Type_Bool_Exp>;
};


export type Subscription_RootVehicle_Unavailable_CalendarArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Order_By>>;
  where?: InputMaybe<Vehicle_Unavailable_Calendar_Bool_Exp>;
};


export type Subscription_RootVehicle_Unavailable_Calendar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Order_By>>;
  where?: InputMaybe<Vehicle_Unavailable_Calendar_Bool_Exp>;
};


export type Subscription_RootVehicle_Unavailable_Calendar_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootVehicle_Unavailable_Calendar_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vehicle_Unavailable_Calendar_Stream_Cursor_Input>>;
  where?: InputMaybe<Vehicle_Unavailable_Calendar_Bool_Exp>;
};

/** 台灣行政區域、郵遞區號與經緯度 */
export type Taiwan_Area = {
  __typename?: 'taiwan_area';
  /** 台灣縣市表 id */
  city_id: Scalars['bigint']['output'];
  id: Scalars['bigint']['output'];
  /** 中心點緯度 */
  latitude?: Maybe<Scalars['numeric']['output']>;
  /** 中心點經度 */
  longitude?: Maybe<Scalars['numeric']['output']>;
  /** 行政區 */
  name: Scalars['String']['output'];
  /** An object relationship */
  taiwan_city: Taiwan_City;
  /** 郵遞區號 */
  zipcode: Scalars['String']['output'];
};

/** order by aggregate values of table "taiwan_area" */
export type Taiwan_Area_Aggregate_Order_By = {
  avg?: InputMaybe<Taiwan_Area_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Taiwan_Area_Max_Order_By>;
  min?: InputMaybe<Taiwan_Area_Min_Order_By>;
  stddev?: InputMaybe<Taiwan_Area_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Taiwan_Area_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Taiwan_Area_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Taiwan_Area_Sum_Order_By>;
  var_pop?: InputMaybe<Taiwan_Area_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Taiwan_Area_Var_Samp_Order_By>;
  variance?: InputMaybe<Taiwan_Area_Variance_Order_By>;
};

/** order by avg() on columns of table "taiwan_area" */
export type Taiwan_Area_Avg_Order_By = {
  /** 台灣縣市表 id */
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 中心點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 中心點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "taiwan_area". All fields are combined with a logical 'AND'. */
export type Taiwan_Area_Bool_Exp = {
  _and?: InputMaybe<Array<Taiwan_Area_Bool_Exp>>;
  _not?: InputMaybe<Taiwan_Area_Bool_Exp>;
  _or?: InputMaybe<Array<Taiwan_Area_Bool_Exp>>;
  city_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  latitude?: InputMaybe<Numeric_Comparison_Exp>;
  longitude?: InputMaybe<Numeric_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  taiwan_city?: InputMaybe<Taiwan_City_Bool_Exp>;
  zipcode?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "taiwan_area" */
export type Taiwan_Area_Max_Order_By = {
  /** 台灣縣市表 id */
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 中心點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 中心點經度 */
  longitude?: InputMaybe<Order_By>;
  /** 行政區 */
  name?: InputMaybe<Order_By>;
  /** 郵遞區號 */
  zipcode?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "taiwan_area" */
export type Taiwan_Area_Min_Order_By = {
  /** 台灣縣市表 id */
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 中心點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 中心點經度 */
  longitude?: InputMaybe<Order_By>;
  /** 行政區 */
  name?: InputMaybe<Order_By>;
  /** 郵遞區號 */
  zipcode?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "taiwan_area". */
export type Taiwan_Area_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  taiwan_city?: InputMaybe<Taiwan_City_Order_By>;
  zipcode?: InputMaybe<Order_By>;
};

/** select columns of table "taiwan_area" */
export enum Taiwan_Area_Select_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  Zipcode = 'zipcode'
}

/** order by stddev() on columns of table "taiwan_area" */
export type Taiwan_Area_Stddev_Order_By = {
  /** 台灣縣市表 id */
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 中心點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 中心點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "taiwan_area" */
export type Taiwan_Area_Stddev_Pop_Order_By = {
  /** 台灣縣市表 id */
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 中心點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 中心點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "taiwan_area" */
export type Taiwan_Area_Stddev_Samp_Order_By = {
  /** 台灣縣市表 id */
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 中心點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 中心點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "taiwan_area" */
export type Taiwan_Area_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Taiwan_Area_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Taiwan_Area_Stream_Cursor_Value_Input = {
  /** 台灣縣市表 id */
  city_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 中心點緯度 */
  latitude?: InputMaybe<Scalars['numeric']['input']>;
  /** 中心點經度 */
  longitude?: InputMaybe<Scalars['numeric']['input']>;
  /** 行政區 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 郵遞區號 */
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "taiwan_area" */
export type Taiwan_Area_Sum_Order_By = {
  /** 台灣縣市表 id */
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 中心點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 中心點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "taiwan_area" */
export type Taiwan_Area_Var_Pop_Order_By = {
  /** 台灣縣市表 id */
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 中心點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 中心點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "taiwan_area" */
export type Taiwan_Area_Var_Samp_Order_By = {
  /** 台灣縣市表 id */
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 中心點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 中心點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "taiwan_area" */
export type Taiwan_Area_Variance_Order_By = {
  /** 台灣縣市表 id */
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 中心點緯度 */
  latitude?: InputMaybe<Order_By>;
  /** 中心點經度 */
  longitude?: InputMaybe<Order_By>;
};

/** 台灣縣市表 */
export type Taiwan_City = {
  __typename?: 'taiwan_city';
  id: Scalars['bigint']['output'];
  /** 縣市 */
  name: Scalars['String']['output'];
  /** An array relationship */
  taiwan_areas: Array<Taiwan_Area>;
};


/** 台灣縣市表 */
export type Taiwan_CityTaiwan_AreasArgs = {
  distinct_on?: InputMaybe<Array<Taiwan_Area_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taiwan_Area_Order_By>>;
  where?: InputMaybe<Taiwan_Area_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "taiwan_city". All fields are combined with a logical 'AND'. */
export type Taiwan_City_Bool_Exp = {
  _and?: InputMaybe<Array<Taiwan_City_Bool_Exp>>;
  _not?: InputMaybe<Taiwan_City_Bool_Exp>;
  _or?: InputMaybe<Array<Taiwan_City_Bool_Exp>>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  taiwan_areas?: InputMaybe<Taiwan_Area_Bool_Exp>;
};

/** Ordering options when selecting data from "taiwan_city". */
export type Taiwan_City_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  taiwan_areas_aggregate?: InputMaybe<Taiwan_Area_Aggregate_Order_By>;
};

/** select columns of table "taiwan_city" */
export enum Taiwan_City_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "taiwan_city" */
export type Taiwan_City_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Taiwan_City_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Taiwan_City_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 縣市 */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "timetz". All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timetz']['input']>;
  _gt?: InputMaybe<Scalars['timetz']['input']>;
  _gte?: InputMaybe<Scalars['timetz']['input']>;
  _in?: InputMaybe<Array<Scalars['timetz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timetz']['input']>;
  _lte?: InputMaybe<Scalars['timetz']['input']>;
  _neq?: InputMaybe<Scalars['timetz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timetz']['input']>>;
};

/** Boolean expression to compare columns of type "timeunit". All fields are combined with logical 'AND'. */
export type Timeunit_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timeunit']['input']>;
  _gt?: InputMaybe<Scalars['timeunit']['input']>;
  _gte?: InputMaybe<Scalars['timeunit']['input']>;
  _in?: InputMaybe<Array<Scalars['timeunit']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timeunit']['input']>;
  _lte?: InputMaybe<Scalars['timeunit']['input']>;
  _neq?: InputMaybe<Scalars['timeunit']['input']>;
  _nin?: InputMaybe<Array<Scalars['timeunit']['input']>>;
};

/** 用戶，是 Customer, Manger 的父類別 */
export type User = {
  __typename?: 'user';
  /** An array relationship */
  campaigns: Array<Campaign>;
  /** An aggregate relationship */
  campaigns_aggregate: Campaign_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  customer?: Maybe<Customer>;
  /** An array relationship */
  customer_service_logs: Array<Customer_Service_Log>;
  /** An array relationship */
  customers: Array<Customer>;
  /** An array relationship */
  firebase_cm_registration_tokens: Array<Firebase_Cm_Registration_Token>;
  id: Scalars['bigint']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** for orm mapping class inheritance; possible values: customer, manager. should not be user. */
  type: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 用戶，是 Customer, Manger 的父類別 */
export type UserCampaignsArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


/** 用戶，是 Customer, Manger 的父類別 */
export type UserCampaigns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


/** 用戶，是 Customer, Manger 的父類別 */
export type UserCustomer_Service_LogsArgs = {
  distinct_on?: InputMaybe<Array<Customer_Service_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Service_Log_Order_By>>;
  where?: InputMaybe<Customer_Service_Log_Bool_Exp>;
};


/** 用戶，是 Customer, Manger 的父類別 */
export type UserCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


/** 用戶，是 Customer, Manger 的父類別 */
export type UserFirebase_Cm_Registration_TokensArgs = {
  distinct_on?: InputMaybe<Array<Firebase_Cm_Registration_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Firebase_Cm_Registration_Token_Order_By>>;
  where?: InputMaybe<Firebase_Cm_Registration_Token_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  campaigns?: InputMaybe<Campaign_Bool_Exp>;
  campaigns_aggregate?: InputMaybe<Campaign_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer?: InputMaybe<Customer_Bool_Exp>;
  customer_service_logs?: InputMaybe<Customer_Service_Log_Bool_Exp>;
  customers?: InputMaybe<Customer_Bool_Exp>;
  firebase_cm_registration_tokens?: InputMaybe<Firebase_Cm_Registration_Token_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  campaigns_aggregate?: InputMaybe<Campaign_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customer_Order_By>;
  customer_service_logs_aggregate?: InputMaybe<Customer_Service_Log_Aggregate_Order_By>;
  customers_aggregate?: InputMaybe<Customer_Aggregate_Order_By>;
  firebase_cm_registration_tokens_aggregate?: InputMaybe<Firebase_Cm_Registration_Token_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** for orm mapping class inheritance; possible values: customer, manager. should not be user. */
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Boolean expression to compare columns of type "usertype". All fields are combined with logical 'AND'. */
export type Usertype_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['usertype']['input']>;
  _gt?: InputMaybe<Scalars['usertype']['input']>;
  _gte?: InputMaybe<Scalars['usertype']['input']>;
  _in?: InputMaybe<Array<Scalars['usertype']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['usertype']['input']>;
  _lte?: InputMaybe<Scalars['usertype']['input']>;
  _neq?: InputMaybe<Scalars['usertype']['input']>;
  _nin?: InputMaybe<Array<Scalars['usertype']['input']>>;
};

/** 車輛 */
export type Vehicle = {
  __typename?: 'vehicle';
  created_at: Scalars['timestamptz']['output'];
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  devices: Array<Device>;
  /** An aggregate relationship */
  devices_aggregate: Device_Aggregate;
  /** An object relationship */
  fleet?: Maybe<Fleet>;
  /** 所屬車隊 */
  fleet_id?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  /** 強制險 */
  insurance_id?: Maybe<Scalars['bigint']['output']>;
  /** 車牌號碼前段 */
  license_plate_front: Scalars['String']['output'];
  /** 車牌號碼後段 */
  license_plate_rear: Scalars['String']['output'];
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate;
  /** 每台車輛各自的建檔照片 */
  photo_path?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  rental_company: Rental_Company;
  /** 所屬車行公司 */
  rental_company_id: Scalars['bigint']['output'];
  /** 車輛適用的計費單位（例如：時租或日租） */
  rental_plan_type: Scalars['vehiclerentalplanunit']['output'];
  /** An object relationship */
  station?: Maybe<Station>;
  /** 投放站點 */
  station_id?: Maybe<Scalars['bigint']['output']>;
  /** 投放中（READY），未上架（PREPARING） */
  status: Scalars['vehiclestatus']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  vehicle_holding_company: Vehicle_Holding_Company;
  /** 所屬公司法人 */
  vehicle_holding_company_id: Scalars['bigint']['output'];
  /** An object relationship */
  vehicle_model?: Maybe<Vehicle_Model>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  vehicle_model_v2?: Maybe<Vehicle_Model_V2>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: Maybe<Scalars['bigint']['output']>;
  /** An array relationship */
  vehicle_rental_rates: Array<Vehicle_Rental_Rate>;
  /** An aggregate relationship */
  vehicle_rental_rates_aggregate: Vehicle_Rental_Rate_Aggregate;
  /** An array relationship */
  vehicle_unavailable_calendars: Array<Vehicle_Unavailable_Calendar>;
  /** An aggregate relationship */
  vehicle_unavailable_calendars_aggregate: Vehicle_Unavailable_Calendar_Aggregate;
  /** 出廠年份，yyyy */
  year_of_manufacture?: Maybe<Scalars['Int']['output']>;
};


/** 車輛 */
export type VehicleDevicesArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


/** 車輛 */
export type VehicleDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


/** 車輛 */
export type VehicleOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** 車輛 */
export type VehicleOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** 車輛 */
export type VehicleVehicle_Rental_RatesArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Rental_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Rental_Rate_Order_By>>;
  where?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
};


/** 車輛 */
export type VehicleVehicle_Rental_Rates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Rental_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Rental_Rate_Order_By>>;
  where?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
};


/** 車輛 */
export type VehicleVehicle_Unavailable_CalendarsArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Order_By>>;
  where?: InputMaybe<Vehicle_Unavailable_Calendar_Bool_Exp>;
};


/** 車輛 */
export type VehicleVehicle_Unavailable_Calendars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Order_By>>;
  where?: InputMaybe<Vehicle_Unavailable_Calendar_Bool_Exp>;
};

/** aggregated selection of "vehicle" */
export type Vehicle_Aggregate = {
  __typename?: 'vehicle_aggregate';
  aggregate?: Maybe<Vehicle_Aggregate_Fields>;
  nodes: Array<Vehicle>;
};

export type Vehicle_Aggregate_Bool_Exp = {
  count?: InputMaybe<Vehicle_Aggregate_Bool_Exp_Count>;
};

export type Vehicle_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vehicle_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vehicle_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vehicle" */
export type Vehicle_Aggregate_Fields = {
  __typename?: 'vehicle_aggregate_fields';
  avg?: Maybe<Vehicle_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vehicle_Max_Fields>;
  min?: Maybe<Vehicle_Min_Fields>;
  stddev?: Maybe<Vehicle_Stddev_Fields>;
  stddev_pop?: Maybe<Vehicle_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vehicle_Stddev_Samp_Fields>;
  sum?: Maybe<Vehicle_Sum_Fields>;
  var_pop?: Maybe<Vehicle_Var_Pop_Fields>;
  var_samp?: Maybe<Vehicle_Var_Samp_Fields>;
  variance?: Maybe<Vehicle_Variance_Fields>;
};


/** aggregate fields of "vehicle" */
export type Vehicle_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vehicle_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "vehicle" */
export type Vehicle_Aggregate_Order_By = {
  avg?: InputMaybe<Vehicle_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vehicle_Max_Order_By>;
  min?: InputMaybe<Vehicle_Min_Order_By>;
  stddev?: InputMaybe<Vehicle_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vehicle_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vehicle_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vehicle_Sum_Order_By>;
  var_pop?: InputMaybe<Vehicle_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vehicle_Var_Samp_Order_By>;
  variance?: InputMaybe<Vehicle_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vehicle_Avg_Fields = {
  __typename?: 'vehicle_avg_fields';
  /** 所屬車隊 */
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 強制險 */
  insurance_id?: Maybe<Scalars['Float']['output']>;
  /** 所屬車行公司 */
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 投放站點 */
  station_id?: Maybe<Scalars['Float']['output']>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: Maybe<Scalars['Float']['output']>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: Maybe<Scalars['Float']['output']>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "vehicle" */
export type Vehicle_Avg_Order_By = {
  /** 所屬車隊 */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 強制險 */
  insurance_id?: InputMaybe<Order_By>;
  /** 所屬車行公司 */
  rental_company_id?: InputMaybe<Order_By>;
  /** 投放站點 */
  station_id?: InputMaybe<Order_By>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: InputMaybe<Order_By>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vehicle". All fields are combined with a logical 'AND'. */
export type Vehicle_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicle_Bool_Exp>>;
  _not?: InputMaybe<Vehicle_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicle_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  devices?: InputMaybe<Device_Bool_Exp>;
  devices_aggregate?: InputMaybe<Device_Aggregate_Bool_Exp>;
  fleet?: InputMaybe<Fleet_Bool_Exp>;
  fleet_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  insurance_id?: InputMaybe<Bigint_Comparison_Exp>;
  license_plate_front?: InputMaybe<String_Comparison_Exp>;
  license_plate_rear?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Order_Bool_Exp>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Bool_Exp>;
  photo_path?: InputMaybe<String_Comparison_Exp>;
  rental_company?: InputMaybe<Rental_Company_Bool_Exp>;
  rental_company_id?: InputMaybe<Bigint_Comparison_Exp>;
  rental_plan_type?: InputMaybe<Vehiclerentalplanunit_Comparison_Exp>;
  station?: InputMaybe<Station_Bool_Exp>;
  station_id?: InputMaybe<Bigint_Comparison_Exp>;
  status?: InputMaybe<Vehiclestatus_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle_holding_company?: InputMaybe<Vehicle_Holding_Company_Bool_Exp>;
  vehicle_holding_company_id?: InputMaybe<Bigint_Comparison_Exp>;
  vehicle_model?: InputMaybe<Vehicle_Model_Bool_Exp>;
  vehicle_model_id?: InputMaybe<Bigint_Comparison_Exp>;
  vehicle_model_v2?: InputMaybe<Vehicle_Model_V2_Bool_Exp>;
  vehicle_model_v2_id?: InputMaybe<Bigint_Comparison_Exp>;
  vehicle_rental_rates?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
  vehicle_rental_rates_aggregate?: InputMaybe<Vehicle_Rental_Rate_Aggregate_Bool_Exp>;
  vehicle_unavailable_calendars?: InputMaybe<Vehicle_Unavailable_Calendar_Bool_Exp>;
  vehicle_unavailable_calendars_aggregate?: InputMaybe<Vehicle_Unavailable_Calendar_Aggregate_Bool_Exp>;
  year_of_manufacture?: InputMaybe<Int_Comparison_Exp>;
};

/** 車輛品牌，e.g. TOYOTA, LEXUS, MAZDA */
export type Vehicle_Brand = {
  __typename?: 'vehicle_brand';
  created_at: Scalars['timestamptz']['output'];
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority: Scalars['Int']['output'];
  id: Scalars['bigint']['output'];
  /** 車輛品牌 */
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  vehicle_models: Array<Vehicle_Model>;
};


/** 車輛品牌，e.g. TOYOTA, LEXUS, MAZDA */
export type Vehicle_BrandVehicle_ModelsArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Model_Order_By>>;
  where?: InputMaybe<Vehicle_Model_Bool_Exp>;
};

/** aggregated selection of "vehicle_brand" */
export type Vehicle_Brand_Aggregate = {
  __typename?: 'vehicle_brand_aggregate';
  aggregate?: Maybe<Vehicle_Brand_Aggregate_Fields>;
  nodes: Array<Vehicle_Brand>;
};

/** aggregate fields of "vehicle_brand" */
export type Vehicle_Brand_Aggregate_Fields = {
  __typename?: 'vehicle_brand_aggregate_fields';
  avg?: Maybe<Vehicle_Brand_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vehicle_Brand_Max_Fields>;
  min?: Maybe<Vehicle_Brand_Min_Fields>;
  stddev?: Maybe<Vehicle_Brand_Stddev_Fields>;
  stddev_pop?: Maybe<Vehicle_Brand_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vehicle_Brand_Stddev_Samp_Fields>;
  sum?: Maybe<Vehicle_Brand_Sum_Fields>;
  var_pop?: Maybe<Vehicle_Brand_Var_Pop_Fields>;
  var_samp?: Maybe<Vehicle_Brand_Var_Samp_Fields>;
  variance?: Maybe<Vehicle_Brand_Variance_Fields>;
};


/** aggregate fields of "vehicle_brand" */
export type Vehicle_Brand_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vehicle_Brand_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Vehicle_Brand_Avg_Fields = {
  __typename?: 'vehicle_brand_avg_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "vehicle_brand". All fields are combined with a logical 'AND'. */
export type Vehicle_Brand_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicle_Brand_Bool_Exp>>;
  _not?: InputMaybe<Vehicle_Brand_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicle_Brand_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  display_priority?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle_models?: InputMaybe<Vehicle_Model_Bool_Exp>;
};

/** aggregate max on columns */
export type Vehicle_Brand_Max_Fields = {
  __typename?: 'vehicle_brand_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 車輛品牌 */
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Vehicle_Brand_Min_Fields = {
  __typename?: 'vehicle_brand_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 車輛品牌 */
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "vehicle_brand". */
export type Vehicle_Brand_Order_By = {
  created_at?: InputMaybe<Order_By>;
  display_priority?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_models_aggregate?: InputMaybe<Vehicle_Model_Aggregate_Order_By>;
};

/** select columns of table "vehicle_brand" */
export enum Vehicle_Brand_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayPriority = 'display_priority',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Vehicle_Brand_Stddev_Fields = {
  __typename?: 'vehicle_brand_stddev_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Vehicle_Brand_Stddev_Pop_Fields = {
  __typename?: 'vehicle_brand_stddev_pop_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Vehicle_Brand_Stddev_Samp_Fields = {
  __typename?: 'vehicle_brand_stddev_samp_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "vehicle_brand" */
export type Vehicle_Brand_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vehicle_Brand_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicle_Brand_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 車輛品牌 */
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Vehicle_Brand_Sum_Fields = {
  __typename?: 'vehicle_brand_sum_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** 車輛品牌 V2 (e.g. TOYOTA, LEXUS, MAZDA) 資料源 8891 */
export type Vehicle_Brand_V2 = {
  __typename?: 'vehicle_brand_v2';
  created_at: Scalars['timestamptz']['output'];
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority: Scalars['Int']['output'];
  /** The English name of the vehicle brand. */
  en_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  /** Initial letter of the brand name, used for alphabetical indexing. */
  label?: Maybe<Scalars['String']['output']>;
  /** The default name of the brand, used internationally. */
  name: Scalars['String']['output'];
  /** URL to the image of the brand. */
  source_image_url?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** A URL-friendly version of the brand name. */
  url_name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  vehicle_kinds: Array<Vehicle_Kind>;
  /** An aggregate relationship */
  vehicle_kinds_aggregate: Vehicle_Kind_Aggregate;
  /** The Chinese name of the vehicle brand. */
  zh_name?: Maybe<Scalars['String']['output']>;
};


/** 車輛品牌 V2 (e.g. TOYOTA, LEXUS, MAZDA) 資料源 8891 */
export type Vehicle_Brand_V2Vehicle_KindsArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Kind_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Kind_Order_By>>;
  where?: InputMaybe<Vehicle_Kind_Bool_Exp>;
};


/** 車輛品牌 V2 (e.g. TOYOTA, LEXUS, MAZDA) 資料源 8891 */
export type Vehicle_Brand_V2Vehicle_Kinds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Kind_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Kind_Order_By>>;
  where?: InputMaybe<Vehicle_Kind_Bool_Exp>;
};

/** aggregated selection of "vehicle_brand_v2" */
export type Vehicle_Brand_V2_Aggregate = {
  __typename?: 'vehicle_brand_v2_aggregate';
  aggregate?: Maybe<Vehicle_Brand_V2_Aggregate_Fields>;
  nodes: Array<Vehicle_Brand_V2>;
};

/** aggregate fields of "vehicle_brand_v2" */
export type Vehicle_Brand_V2_Aggregate_Fields = {
  __typename?: 'vehicle_brand_v2_aggregate_fields';
  avg?: Maybe<Vehicle_Brand_V2_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vehicle_Brand_V2_Max_Fields>;
  min?: Maybe<Vehicle_Brand_V2_Min_Fields>;
  stddev?: Maybe<Vehicle_Brand_V2_Stddev_Fields>;
  stddev_pop?: Maybe<Vehicle_Brand_V2_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vehicle_Brand_V2_Stddev_Samp_Fields>;
  sum?: Maybe<Vehicle_Brand_V2_Sum_Fields>;
  var_pop?: Maybe<Vehicle_Brand_V2_Var_Pop_Fields>;
  var_samp?: Maybe<Vehicle_Brand_V2_Var_Samp_Fields>;
  variance?: Maybe<Vehicle_Brand_V2_Variance_Fields>;
};


/** aggregate fields of "vehicle_brand_v2" */
export type Vehicle_Brand_V2_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vehicle_Brand_V2_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Vehicle_Brand_V2_Avg_Fields = {
  __typename?: 'vehicle_brand_v2_avg_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "vehicle_brand_v2". All fields are combined with a logical 'AND'. */
export type Vehicle_Brand_V2_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicle_Brand_V2_Bool_Exp>>;
  _not?: InputMaybe<Vehicle_Brand_V2_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicle_Brand_V2_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  display_priority?: InputMaybe<Int_Comparison_Exp>;
  en_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  source_image_url?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url_name?: InputMaybe<String_Comparison_Exp>;
  vehicle_kinds?: InputMaybe<Vehicle_Kind_Bool_Exp>;
  vehicle_kinds_aggregate?: InputMaybe<Vehicle_Kind_Aggregate_Bool_Exp>;
  zh_name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vehicle_Brand_V2_Max_Fields = {
  __typename?: 'vehicle_brand_v2_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Int']['output']>;
  /** The English name of the vehicle brand. */
  en_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** Initial letter of the brand name, used for alphabetical indexing. */
  label?: Maybe<Scalars['String']['output']>;
  /** The default name of the brand, used internationally. */
  name?: Maybe<Scalars['String']['output']>;
  /** URL to the image of the brand. */
  source_image_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** A URL-friendly version of the brand name. */
  url_name?: Maybe<Scalars['String']['output']>;
  /** The Chinese name of the vehicle brand. */
  zh_name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Vehicle_Brand_V2_Min_Fields = {
  __typename?: 'vehicle_brand_v2_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Int']['output']>;
  /** The English name of the vehicle brand. */
  en_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** Initial letter of the brand name, used for alphabetical indexing. */
  label?: Maybe<Scalars['String']['output']>;
  /** The default name of the brand, used internationally. */
  name?: Maybe<Scalars['String']['output']>;
  /** URL to the image of the brand. */
  source_image_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** A URL-friendly version of the brand name. */
  url_name?: Maybe<Scalars['String']['output']>;
  /** The Chinese name of the vehicle brand. */
  zh_name?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "vehicle_brand_v2". */
export type Vehicle_Brand_V2_Order_By = {
  created_at?: InputMaybe<Order_By>;
  display_priority?: InputMaybe<Order_By>;
  en_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  source_image_url?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url_name?: InputMaybe<Order_By>;
  vehicle_kinds_aggregate?: InputMaybe<Vehicle_Kind_Aggregate_Order_By>;
  zh_name?: InputMaybe<Order_By>;
};

/** select columns of table "vehicle_brand_v2" */
export enum Vehicle_Brand_V2_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayPriority = 'display_priority',
  /** column name */
  EnName = 'en_name',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Name = 'name',
  /** column name */
  SourceImageUrl = 'source_image_url',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UrlName = 'url_name',
  /** column name */
  ZhName = 'zh_name'
}

/** aggregate stddev on columns */
export type Vehicle_Brand_V2_Stddev_Fields = {
  __typename?: 'vehicle_brand_v2_stddev_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Vehicle_Brand_V2_Stddev_Pop_Fields = {
  __typename?: 'vehicle_brand_v2_stddev_pop_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Vehicle_Brand_V2_Stddev_Samp_Fields = {
  __typename?: 'vehicle_brand_v2_stddev_samp_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "vehicle_brand_v2" */
export type Vehicle_Brand_V2_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vehicle_Brand_V2_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicle_Brand_V2_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: InputMaybe<Scalars['Int']['input']>;
  /** The English name of the vehicle brand. */
  en_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** Initial letter of the brand name, used for alphabetical indexing. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** The default name of the brand, used internationally. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** URL to the image of the brand. */
  source_image_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** A URL-friendly version of the brand name. */
  url_name?: InputMaybe<Scalars['String']['input']>;
  /** The Chinese name of the vehicle brand. */
  zh_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Vehicle_Brand_V2_Sum_Fields = {
  __typename?: 'vehicle_brand_v2_sum_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Vehicle_Brand_V2_Var_Pop_Fields = {
  __typename?: 'vehicle_brand_v2_var_pop_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Vehicle_Brand_V2_Var_Samp_Fields = {
  __typename?: 'vehicle_brand_v2_var_samp_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Vehicle_Brand_V2_Variance_Fields = {
  __typename?: 'vehicle_brand_v2_variance_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_pop on columns */
export type Vehicle_Brand_Var_Pop_Fields = {
  __typename?: 'vehicle_brand_var_pop_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Vehicle_Brand_Var_Samp_Fields = {
  __typename?: 'vehicle_brand_var_samp_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Vehicle_Brand_Variance_Fields = {
  __typename?: 'vehicle_brand_variance_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** 車輛所屬公司 */
export type Vehicle_Holding_Company = {
  __typename?: 'vehicle_holding_company';
  /** 所在地址 */
  address: Scalars['String']['output'];
  /** 所在行政區 */
  area: Scalars['String']['output'];
  /** 所在縣市 */
  city: Scalars['String']['output'];
  /** 公司負責人姓名 */
  company_chief_name: Scalars['String']['output'];
  /** 公司負責人印章（小章） Google Cloud Storage 儲存位址 */
  company_chief_seal_image_path?: Maybe<Scalars['String']['output']>;
  /** 公司印章（大章） Google Cloud Storage 儲存位址 */
  company_seal_image_path?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['bigint']['output'];
  /** 公司名稱 */
  name: Scalars['String']['output'];
  /** An object relationship */
  rental_company: Rental_Company;
  /** 車行外鍵 */
  rental_company_id: Scalars['bigint']['output'];
  /** 公司統編 */
  tax_id_number: Scalars['String']['output'];
  /** 公司電話 */
  telephone: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  vehicles: Array<Vehicle>;
  /** An aggregate relationship */
  vehicles_aggregate: Vehicle_Aggregate;
};


/** 車輛所屬公司 */
export type Vehicle_Holding_CompanyVehiclesArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};


/** 車輛所屬公司 */
export type Vehicle_Holding_CompanyVehicles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};

/** order by aggregate values of table "vehicle_holding_company" */
export type Vehicle_Holding_Company_Aggregate_Order_By = {
  avg?: InputMaybe<Vehicle_Holding_Company_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vehicle_Holding_Company_Max_Order_By>;
  min?: InputMaybe<Vehicle_Holding_Company_Min_Order_By>;
  stddev?: InputMaybe<Vehicle_Holding_Company_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vehicle_Holding_Company_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vehicle_Holding_Company_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vehicle_Holding_Company_Sum_Order_By>;
  var_pop?: InputMaybe<Vehicle_Holding_Company_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vehicle_Holding_Company_Var_Samp_Order_By>;
  variance?: InputMaybe<Vehicle_Holding_Company_Variance_Order_By>;
};

/** order by avg() on columns of table "vehicle_holding_company" */
export type Vehicle_Holding_Company_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行外鍵 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vehicle_holding_company". All fields are combined with a logical 'AND'. */
export type Vehicle_Holding_Company_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicle_Holding_Company_Bool_Exp>>;
  _not?: InputMaybe<Vehicle_Holding_Company_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicle_Holding_Company_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  area?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  company_chief_name?: InputMaybe<String_Comparison_Exp>;
  company_chief_seal_image_path?: InputMaybe<String_Comparison_Exp>;
  company_seal_image_path?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  rental_company?: InputMaybe<Rental_Company_Bool_Exp>;
  rental_company_id?: InputMaybe<Bigint_Comparison_Exp>;
  tax_id_number?: InputMaybe<String_Comparison_Exp>;
  telephone?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicles?: InputMaybe<Vehicle_Bool_Exp>;
  vehicles_aggregate?: InputMaybe<Vehicle_Aggregate_Bool_Exp>;
};

/** order by max() on columns of table "vehicle_holding_company" */
export type Vehicle_Holding_Company_Max_Order_By = {
  /** 所在地址 */
  address?: InputMaybe<Order_By>;
  /** 所在行政區 */
  area?: InputMaybe<Order_By>;
  /** 所在縣市 */
  city?: InputMaybe<Order_By>;
  /** 公司負責人姓名 */
  company_chief_name?: InputMaybe<Order_By>;
  /** 公司負責人印章（小章） Google Cloud Storage 儲存位址 */
  company_chief_seal_image_path?: InputMaybe<Order_By>;
  /** 公司印章（大章） Google Cloud Storage 儲存位址 */
  company_seal_image_path?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 公司名稱 */
  name?: InputMaybe<Order_By>;
  /** 車行外鍵 */
  rental_company_id?: InputMaybe<Order_By>;
  /** 公司統編 */
  tax_id_number?: InputMaybe<Order_By>;
  /** 公司電話 */
  telephone?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "vehicle_holding_company" */
export type Vehicle_Holding_Company_Min_Order_By = {
  /** 所在地址 */
  address?: InputMaybe<Order_By>;
  /** 所在行政區 */
  area?: InputMaybe<Order_By>;
  /** 所在縣市 */
  city?: InputMaybe<Order_By>;
  /** 公司負責人姓名 */
  company_chief_name?: InputMaybe<Order_By>;
  /** 公司負責人印章（小章） Google Cloud Storage 儲存位址 */
  company_chief_seal_image_path?: InputMaybe<Order_By>;
  /** 公司印章（大章） Google Cloud Storage 儲存位址 */
  company_seal_image_path?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 公司名稱 */
  name?: InputMaybe<Order_By>;
  /** 車行外鍵 */
  rental_company_id?: InputMaybe<Order_By>;
  /** 公司統編 */
  tax_id_number?: InputMaybe<Order_By>;
  /** 公司電話 */
  telephone?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vehicle_holding_company". */
export type Vehicle_Holding_Company_Order_By = {
  address?: InputMaybe<Order_By>;
  area?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  company_chief_name?: InputMaybe<Order_By>;
  company_chief_seal_image_path?: InputMaybe<Order_By>;
  company_seal_image_path?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  rental_company?: InputMaybe<Rental_Company_Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  tax_id_number?: InputMaybe<Order_By>;
  telephone?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicles_aggregate?: InputMaybe<Vehicle_Aggregate_Order_By>;
};

/** select columns of table "vehicle_holding_company" */
export enum Vehicle_Holding_Company_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Area = 'area',
  /** column name */
  City = 'city',
  /** column name */
  CompanyChiefName = 'company_chief_name',
  /** column name */
  CompanyChiefSealImagePath = 'company_chief_seal_image_path',
  /** column name */
  CompanySealImagePath = 'company_seal_image_path',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RentalCompanyId = 'rental_company_id',
  /** column name */
  TaxIdNumber = 'tax_id_number',
  /** column name */
  Telephone = 'telephone',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** order by stddev() on columns of table "vehicle_holding_company" */
export type Vehicle_Holding_Company_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行外鍵 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "vehicle_holding_company" */
export type Vehicle_Holding_Company_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行外鍵 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "vehicle_holding_company" */
export type Vehicle_Holding_Company_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行外鍵 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vehicle_holding_company" */
export type Vehicle_Holding_Company_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vehicle_Holding_Company_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicle_Holding_Company_Stream_Cursor_Value_Input = {
  /** 所在地址 */
  address?: InputMaybe<Scalars['String']['input']>;
  /** 所在行政區 */
  area?: InputMaybe<Scalars['String']['input']>;
  /** 所在縣市 */
  city?: InputMaybe<Scalars['String']['input']>;
  /** 公司負責人姓名 */
  company_chief_name?: InputMaybe<Scalars['String']['input']>;
  /** 公司負責人印章（小章） Google Cloud Storage 儲存位址 */
  company_chief_seal_image_path?: InputMaybe<Scalars['String']['input']>;
  /** 公司印章（大章） Google Cloud Storage 儲存位址 */
  company_seal_image_path?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 公司名稱 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 車行外鍵 */
  rental_company_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 公司統編 */
  tax_id_number?: InputMaybe<Scalars['String']['input']>;
  /** 公司電話 */
  telephone?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** order by sum() on columns of table "vehicle_holding_company" */
export type Vehicle_Holding_Company_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行外鍵 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "vehicle_holding_company" */
export type Vehicle_Holding_Company_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行外鍵 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "vehicle_holding_company" */
export type Vehicle_Holding_Company_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行外鍵 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "vehicle_holding_company" */
export type Vehicle_Holding_Company_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 車行外鍵 */
  rental_company_id?: InputMaybe<Order_By>;
};

/** 車款 (e.g. Model Y, RAV4, V60) 資料源 8891 */
export type Vehicle_Kind = {
  __typename?: 'vehicle_kind';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** The name of the vehicle kind, used internationally. */
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  vehicle_brand_v2: Vehicle_Brand_V2;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id: Scalars['bigint']['output'];
  /** An array relationship */
  vehicle_model_v2s: Array<Vehicle_Model_V2>;
  /** An aggregate relationship */
  vehicle_model_v2s_aggregate: Vehicle_Model_V2_Aggregate;
};


/** 車款 (e.g. Model Y, RAV4, V60) 資料源 8891 */
export type Vehicle_KindVehicle_Model_V2sArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Model_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Model_V2_Order_By>>;
  where?: InputMaybe<Vehicle_Model_V2_Bool_Exp>;
};


/** 車款 (e.g. Model Y, RAV4, V60) 資料源 8891 */
export type Vehicle_KindVehicle_Model_V2s_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Model_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Model_V2_Order_By>>;
  where?: InputMaybe<Vehicle_Model_V2_Bool_Exp>;
};

/** aggregated selection of "vehicle_kind" */
export type Vehicle_Kind_Aggregate = {
  __typename?: 'vehicle_kind_aggregate';
  aggregate?: Maybe<Vehicle_Kind_Aggregate_Fields>;
  nodes: Array<Vehicle_Kind>;
};

export type Vehicle_Kind_Aggregate_Bool_Exp = {
  count?: InputMaybe<Vehicle_Kind_Aggregate_Bool_Exp_Count>;
};

export type Vehicle_Kind_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vehicle_Kind_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vehicle_Kind_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vehicle_kind" */
export type Vehicle_Kind_Aggregate_Fields = {
  __typename?: 'vehicle_kind_aggregate_fields';
  avg?: Maybe<Vehicle_Kind_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vehicle_Kind_Max_Fields>;
  min?: Maybe<Vehicle_Kind_Min_Fields>;
  stddev?: Maybe<Vehicle_Kind_Stddev_Fields>;
  stddev_pop?: Maybe<Vehicle_Kind_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vehicle_Kind_Stddev_Samp_Fields>;
  sum?: Maybe<Vehicle_Kind_Sum_Fields>;
  var_pop?: Maybe<Vehicle_Kind_Var_Pop_Fields>;
  var_samp?: Maybe<Vehicle_Kind_Var_Samp_Fields>;
  variance?: Maybe<Vehicle_Kind_Variance_Fields>;
};


/** aggregate fields of "vehicle_kind" */
export type Vehicle_Kind_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vehicle_Kind_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "vehicle_kind" */
export type Vehicle_Kind_Aggregate_Order_By = {
  avg?: InputMaybe<Vehicle_Kind_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vehicle_Kind_Max_Order_By>;
  min?: InputMaybe<Vehicle_Kind_Min_Order_By>;
  stddev?: InputMaybe<Vehicle_Kind_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vehicle_Kind_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vehicle_Kind_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vehicle_Kind_Sum_Order_By>;
  var_pop?: InputMaybe<Vehicle_Kind_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vehicle_Kind_Var_Samp_Order_By>;
  variance?: InputMaybe<Vehicle_Kind_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vehicle_Kind_Avg_Fields = {
  __typename?: 'vehicle_kind_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "vehicle_kind" */
export type Vehicle_Kind_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vehicle_kind". All fields are combined with a logical 'AND'. */
export type Vehicle_Kind_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicle_Kind_Bool_Exp>>;
  _not?: InputMaybe<Vehicle_Kind_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicle_Kind_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle_brand_v2?: InputMaybe<Vehicle_Brand_V2_Bool_Exp>;
  vehicle_brand_v2_id?: InputMaybe<Bigint_Comparison_Exp>;
  vehicle_model_v2s?: InputMaybe<Vehicle_Model_V2_Bool_Exp>;
  vehicle_model_v2s_aggregate?: InputMaybe<Vehicle_Model_V2_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Vehicle_Kind_Max_Fields = {
  __typename?: 'vehicle_kind_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** The name of the vehicle kind, used internationally. */
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "vehicle_kind" */
export type Vehicle_Kind_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** The name of the vehicle kind, used internationally. */
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vehicle_Kind_Min_Fields = {
  __typename?: 'vehicle_kind_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** The name of the vehicle kind, used internationally. */
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "vehicle_kind" */
export type Vehicle_Kind_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** The name of the vehicle kind, used internationally. */
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vehicle_kind". */
export type Vehicle_Kind_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_brand_v2?: InputMaybe<Vehicle_Brand_V2_Order_By>;
  vehicle_brand_v2_id?: InputMaybe<Order_By>;
  vehicle_model_v2s_aggregate?: InputMaybe<Vehicle_Model_V2_Aggregate_Order_By>;
};

/** select columns of table "vehicle_kind" */
export enum Vehicle_Kind_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleBrandV2Id = 'vehicle_brand_v2_id'
}

/** aggregate stddev on columns */
export type Vehicle_Kind_Stddev_Fields = {
  __typename?: 'vehicle_kind_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "vehicle_kind" */
export type Vehicle_Kind_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vehicle_Kind_Stddev_Pop_Fields = {
  __typename?: 'vehicle_kind_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "vehicle_kind" */
export type Vehicle_Kind_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vehicle_Kind_Stddev_Samp_Fields = {
  __typename?: 'vehicle_kind_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "vehicle_kind" */
export type Vehicle_Kind_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vehicle_kind" */
export type Vehicle_Kind_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vehicle_Kind_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicle_Kind_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** The name of the vehicle kind, used internationally. */
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Vehicle_Kind_Sum_Fields = {
  __typename?: 'vehicle_kind_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "vehicle_kind" */
export type Vehicle_Kind_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vehicle_Kind_Var_Pop_Fields = {
  __typename?: 'vehicle_kind_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "vehicle_kind" */
export type Vehicle_Kind_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vehicle_Kind_Var_Samp_Fields = {
  __typename?: 'vehicle_kind_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "vehicle_kind" */
export type Vehicle_Kind_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vehicle_Kind_Variance_Fields = {
  __typename?: 'vehicle_kind_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "vehicle_kind" */
export type Vehicle_Kind_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_brand_v2 associated with this kind. */
  vehicle_brand_v2_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Vehicle_Max_Fields = {
  __typename?: 'vehicle_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 所屬車隊 */
  fleet_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 強制險 */
  insurance_id?: Maybe<Scalars['bigint']['output']>;
  /** 車牌號碼前段 */
  license_plate_front?: Maybe<Scalars['String']['output']>;
  /** 車牌號碼後段 */
  license_plate_rear?: Maybe<Scalars['String']['output']>;
  /** 每台車輛各自的建檔照片 */
  photo_path?: Maybe<Scalars['String']['output']>;
  /** 所屬車行公司 */
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  /** 車輛適用的計費單位（例如：時租或日租） */
  rental_plan_type?: Maybe<Scalars['vehiclerentalplanunit']['output']>;
  /** 投放站點 */
  station_id?: Maybe<Scalars['bigint']['output']>;
  /** 投放中（READY），未上架（PREPARING） */
  status?: Maybe<Scalars['vehiclestatus']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: Maybe<Scalars['bigint']['output']>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: Maybe<Scalars['bigint']['output']>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: Maybe<Scalars['bigint']['output']>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "vehicle" */
export type Vehicle_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 所屬車隊 */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 強制險 */
  insurance_id?: InputMaybe<Order_By>;
  /** 車牌號碼前段 */
  license_plate_front?: InputMaybe<Order_By>;
  /** 車牌號碼後段 */
  license_plate_rear?: InputMaybe<Order_By>;
  /** 每台車輛各自的建檔照片 */
  photo_path?: InputMaybe<Order_By>;
  /** 所屬車行公司 */
  rental_company_id?: InputMaybe<Order_By>;
  /** 車輛適用的計費單位（例如：時租或日租） */
  rental_plan_type?: InputMaybe<Order_By>;
  /** 投放站點 */
  station_id?: InputMaybe<Order_By>;
  /** 投放中（READY），未上架（PREPARING） */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: InputMaybe<Order_By>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vehicle_Min_Fields = {
  __typename?: 'vehicle_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 被刪除的時間 */
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 所屬車隊 */
  fleet_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 強制險 */
  insurance_id?: Maybe<Scalars['bigint']['output']>;
  /** 車牌號碼前段 */
  license_plate_front?: Maybe<Scalars['String']['output']>;
  /** 車牌號碼後段 */
  license_plate_rear?: Maybe<Scalars['String']['output']>;
  /** 每台車輛各自的建檔照片 */
  photo_path?: Maybe<Scalars['String']['output']>;
  /** 所屬車行公司 */
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  /** 車輛適用的計費單位（例如：時租或日租） */
  rental_plan_type?: Maybe<Scalars['vehiclerentalplanunit']['output']>;
  /** 投放站點 */
  station_id?: Maybe<Scalars['bigint']['output']>;
  /** 投放中（READY），未上架（PREPARING） */
  status?: Maybe<Scalars['vehiclestatus']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: Maybe<Scalars['bigint']['output']>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: Maybe<Scalars['bigint']['output']>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: Maybe<Scalars['bigint']['output']>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "vehicle" */
export type Vehicle_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Order_By>;
  /** 所屬車隊 */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 強制險 */
  insurance_id?: InputMaybe<Order_By>;
  /** 車牌號碼前段 */
  license_plate_front?: InputMaybe<Order_By>;
  /** 車牌號碼後段 */
  license_plate_rear?: InputMaybe<Order_By>;
  /** 每台車輛各自的建檔照片 */
  photo_path?: InputMaybe<Order_By>;
  /** 所屬車行公司 */
  rental_company_id?: InputMaybe<Order_By>;
  /** 車輛適用的計費單位（例如：時租或日租） */
  rental_plan_type?: InputMaybe<Order_By>;
  /** 投放站點 */
  station_id?: InputMaybe<Order_By>;
  /** 投放中（READY），未上架（PREPARING） */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: InputMaybe<Order_By>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: InputMaybe<Order_By>;
};

/** 車輛款式，如 2022 Corolla Altis */
export type Vehicle_Model = {
  __typename?: 'vehicle_model';
  created_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  exceed_rates: Array<Exceed_Rate>;
  /** An aggregate relationship */
  exceed_rates_aggregate: Exceed_Rate_Aggregate;
  id: Scalars['bigint']['output'];
  /** 型號、款式的名稱 */
  name: Scalars['String']['output'];
  /** 車源：國產車（LOCAL）或進口車（FOREIGN） */
  origin: Scalars['vehicleorigin']['output'];
  /** 座位數 */
  seats: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  vehicle_brand: Vehicle_Brand;
  /** 車廠 */
  vehicle_brand_id: Scalars['bigint']['output'];
  /** An object relationship */
  vehicle_type: Vehicle_Type;
  /** 車型 */
  vehicle_type_id: Scalars['bigint']['output'];
  /** An array relationship */
  vehicles: Array<Vehicle>;
  /** An aggregate relationship */
  vehicles_aggregate: Vehicle_Aggregate;
};


/** 車輛款式，如 2022 Corolla Altis */
export type Vehicle_ModelExceed_RatesArgs = {
  distinct_on?: InputMaybe<Array<Exceed_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exceed_Rate_Order_By>>;
  where?: InputMaybe<Exceed_Rate_Bool_Exp>;
};


/** 車輛款式，如 2022 Corolla Altis */
export type Vehicle_ModelExceed_Rates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exceed_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exceed_Rate_Order_By>>;
  where?: InputMaybe<Exceed_Rate_Bool_Exp>;
};


/** 車輛款式，如 2022 Corolla Altis */
export type Vehicle_ModelVehiclesArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};


/** 車輛款式，如 2022 Corolla Altis */
export type Vehicle_ModelVehicles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};

/** order by aggregate values of table "vehicle_model" */
export type Vehicle_Model_Aggregate_Order_By = {
  avg?: InputMaybe<Vehicle_Model_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vehicle_Model_Max_Order_By>;
  min?: InputMaybe<Vehicle_Model_Min_Order_By>;
  stddev?: InputMaybe<Vehicle_Model_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vehicle_Model_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vehicle_Model_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vehicle_Model_Sum_Order_By>;
  var_pop?: InputMaybe<Vehicle_Model_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vehicle_Model_Var_Samp_Order_By>;
  variance?: InputMaybe<Vehicle_Model_Variance_Order_By>;
};

/** order by avg() on columns of table "vehicle_model" */
export type Vehicle_Model_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 座位數 */
  seats?: InputMaybe<Order_By>;
  /** 車廠 */
  vehicle_brand_id?: InputMaybe<Order_By>;
  /** 車型 */
  vehicle_type_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vehicle_model". All fields are combined with a logical 'AND'. */
export type Vehicle_Model_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicle_Model_Bool_Exp>>;
  _not?: InputMaybe<Vehicle_Model_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicle_Model_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  exceed_rates?: InputMaybe<Exceed_Rate_Bool_Exp>;
  exceed_rates_aggregate?: InputMaybe<Exceed_Rate_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  origin?: InputMaybe<Vehicleorigin_Comparison_Exp>;
  seats?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle_brand?: InputMaybe<Vehicle_Brand_Bool_Exp>;
  vehicle_brand_id?: InputMaybe<Bigint_Comparison_Exp>;
  vehicle_type?: InputMaybe<Vehicle_Type_Bool_Exp>;
  vehicle_type_id?: InputMaybe<Bigint_Comparison_Exp>;
  vehicles?: InputMaybe<Vehicle_Bool_Exp>;
  vehicles_aggregate?: InputMaybe<Vehicle_Aggregate_Bool_Exp>;
};

/** order by max() on columns of table "vehicle_model" */
export type Vehicle_Model_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 型號、款式的名稱 */
  name?: InputMaybe<Order_By>;
  /** 車源：國產車（LOCAL）或進口車（FOREIGN） */
  origin?: InputMaybe<Order_By>;
  /** 座位數 */
  seats?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 車廠 */
  vehicle_brand_id?: InputMaybe<Order_By>;
  /** 車型 */
  vehicle_type_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "vehicle_model" */
export type Vehicle_Model_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 型號、款式的名稱 */
  name?: InputMaybe<Order_By>;
  /** 車源：國產車（LOCAL）或進口車（FOREIGN） */
  origin?: InputMaybe<Order_By>;
  /** 座位數 */
  seats?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 車廠 */
  vehicle_brand_id?: InputMaybe<Order_By>;
  /** 車型 */
  vehicle_type_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vehicle_model". */
export type Vehicle_Model_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exceed_rates_aggregate?: InputMaybe<Exceed_Rate_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  origin?: InputMaybe<Order_By>;
  seats?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_brand?: InputMaybe<Vehicle_Brand_Order_By>;
  vehicle_brand_id?: InputMaybe<Order_By>;
  vehicle_type?: InputMaybe<Vehicle_Type_Order_By>;
  vehicle_type_id?: InputMaybe<Order_By>;
  vehicles_aggregate?: InputMaybe<Vehicle_Aggregate_Order_By>;
};

/** select columns of table "vehicle_model" */
export enum Vehicle_Model_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Origin = 'origin',
  /** column name */
  Seats = 'seats',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleBrandId = 'vehicle_brand_id',
  /** column name */
  VehicleTypeId = 'vehicle_type_id'
}

/** order by stddev() on columns of table "vehicle_model" */
export type Vehicle_Model_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 座位數 */
  seats?: InputMaybe<Order_By>;
  /** 車廠 */
  vehicle_brand_id?: InputMaybe<Order_By>;
  /** 車型 */
  vehicle_type_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "vehicle_model" */
export type Vehicle_Model_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 座位數 */
  seats?: InputMaybe<Order_By>;
  /** 車廠 */
  vehicle_brand_id?: InputMaybe<Order_By>;
  /** 車型 */
  vehicle_type_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "vehicle_model" */
export type Vehicle_Model_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 座位數 */
  seats?: InputMaybe<Order_By>;
  /** 車廠 */
  vehicle_brand_id?: InputMaybe<Order_By>;
  /** 車型 */
  vehicle_type_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vehicle_model" */
export type Vehicle_Model_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vehicle_Model_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicle_Model_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 型號、款式的名稱 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 車源：國產車（LOCAL）或進口車（FOREIGN） */
  origin?: InputMaybe<Scalars['vehicleorigin']['input']>;
  /** 座位數 */
  seats?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 車廠 */
  vehicle_brand_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 車型 */
  vehicle_type_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** order by sum() on columns of table "vehicle_model" */
export type Vehicle_Model_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 座位數 */
  seats?: InputMaybe<Order_By>;
  /** 車廠 */
  vehicle_brand_id?: InputMaybe<Order_By>;
  /** 車型 */
  vehicle_type_id?: InputMaybe<Order_By>;
};

/** 車款詳細型號 (e.g. 2024-後驅版) 資料源 8891 */
export type Vehicle_Model_V2 = {
  __typename?: 'vehicle_model_v2';
  created_at: Scalars['timestamptz']['output'];
  filter_year?: Maybe<Scalars['Int']['output']>;
  id: Scalars['bigint']['output'];
  /** The model_name without year of the vehicle model. */
  model_name: Scalars['String']['output'];
  /** The name of the vehicle model. */
  name: Scalars['String']['output'];
  /** URL to the image of the vehicle model thumb. */
  thumb?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  vehicle_kind: Vehicle_Kind;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id: Scalars['bigint']['output'];
  /** An array relationship */
  vehicle_parameters: Array<Vehicle_Parameter>;
  /** An aggregate relationship */
  vehicle_parameters_aggregate: Vehicle_Parameter_Aggregate;
  /** An array relationship */
  vehicles: Array<Vehicle>;
  /** An aggregate relationship */
  vehicles_aggregate: Vehicle_Aggregate;
};


/** 車款詳細型號 (e.g. 2024-後驅版) 資料源 8891 */
export type Vehicle_Model_V2Vehicle_ParametersArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Parameter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Parameter_Order_By>>;
  where?: InputMaybe<Vehicle_Parameter_Bool_Exp>;
};


/** 車款詳細型號 (e.g. 2024-後驅版) 資料源 8891 */
export type Vehicle_Model_V2Vehicle_Parameters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Parameter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Parameter_Order_By>>;
  where?: InputMaybe<Vehicle_Parameter_Bool_Exp>;
};


/** 車款詳細型號 (e.g. 2024-後驅版) 資料源 8891 */
export type Vehicle_Model_V2VehiclesArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};


/** 車款詳細型號 (e.g. 2024-後驅版) 資料源 8891 */
export type Vehicle_Model_V2Vehicles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Order_By>>;
  where?: InputMaybe<Vehicle_Bool_Exp>;
};

/** aggregated selection of "vehicle_model_v2" */
export type Vehicle_Model_V2_Aggregate = {
  __typename?: 'vehicle_model_v2_aggregate';
  aggregate?: Maybe<Vehicle_Model_V2_Aggregate_Fields>;
  nodes: Array<Vehicle_Model_V2>;
};

export type Vehicle_Model_V2_Aggregate_Bool_Exp = {
  count?: InputMaybe<Vehicle_Model_V2_Aggregate_Bool_Exp_Count>;
};

export type Vehicle_Model_V2_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vehicle_Model_V2_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vehicle_Model_V2_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vehicle_model_v2" */
export type Vehicle_Model_V2_Aggregate_Fields = {
  __typename?: 'vehicle_model_v2_aggregate_fields';
  avg?: Maybe<Vehicle_Model_V2_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vehicle_Model_V2_Max_Fields>;
  min?: Maybe<Vehicle_Model_V2_Min_Fields>;
  stddev?: Maybe<Vehicle_Model_V2_Stddev_Fields>;
  stddev_pop?: Maybe<Vehicle_Model_V2_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vehicle_Model_V2_Stddev_Samp_Fields>;
  sum?: Maybe<Vehicle_Model_V2_Sum_Fields>;
  var_pop?: Maybe<Vehicle_Model_V2_Var_Pop_Fields>;
  var_samp?: Maybe<Vehicle_Model_V2_Var_Samp_Fields>;
  variance?: Maybe<Vehicle_Model_V2_Variance_Fields>;
};


/** aggregate fields of "vehicle_model_v2" */
export type Vehicle_Model_V2_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vehicle_Model_V2_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "vehicle_model_v2" */
export type Vehicle_Model_V2_Aggregate_Order_By = {
  avg?: InputMaybe<Vehicle_Model_V2_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vehicle_Model_V2_Max_Order_By>;
  min?: InputMaybe<Vehicle_Model_V2_Min_Order_By>;
  stddev?: InputMaybe<Vehicle_Model_V2_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vehicle_Model_V2_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vehicle_Model_V2_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vehicle_Model_V2_Sum_Order_By>;
  var_pop?: InputMaybe<Vehicle_Model_V2_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vehicle_Model_V2_Var_Samp_Order_By>;
  variance?: InputMaybe<Vehicle_Model_V2_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vehicle_Model_V2_Avg_Fields = {
  __typename?: 'vehicle_model_v2_avg_fields';
  filter_year?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "vehicle_model_v2" */
export type Vehicle_Model_V2_Avg_Order_By = {
  filter_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vehicle_model_v2". All fields are combined with a logical 'AND'. */
export type Vehicle_Model_V2_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicle_Model_V2_Bool_Exp>>;
  _not?: InputMaybe<Vehicle_Model_V2_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicle_Model_V2_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  filter_year?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  model_name?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  thumb?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle_kind?: InputMaybe<Vehicle_Kind_Bool_Exp>;
  vehicle_kind_id?: InputMaybe<Bigint_Comparison_Exp>;
  vehicle_parameters?: InputMaybe<Vehicle_Parameter_Bool_Exp>;
  vehicle_parameters_aggregate?: InputMaybe<Vehicle_Parameter_Aggregate_Bool_Exp>;
  vehicles?: InputMaybe<Vehicle_Bool_Exp>;
  vehicles_aggregate?: InputMaybe<Vehicle_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Vehicle_Model_V2_Max_Fields = {
  __typename?: 'vehicle_model_v2_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  filter_year?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** The model_name without year of the vehicle model. */
  model_name?: Maybe<Scalars['String']['output']>;
  /** The name of the vehicle model. */
  name?: Maybe<Scalars['String']['output']>;
  /** URL to the image of the vehicle model thumb. */
  thumb?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "vehicle_model_v2" */
export type Vehicle_Model_V2_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  filter_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** The model_name without year of the vehicle model. */
  model_name?: InputMaybe<Order_By>;
  /** The name of the vehicle model. */
  name?: InputMaybe<Order_By>;
  /** URL to the image of the vehicle model thumb. */
  thumb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vehicle_Model_V2_Min_Fields = {
  __typename?: 'vehicle_model_v2_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  filter_year?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** The model_name without year of the vehicle model. */
  model_name?: Maybe<Scalars['String']['output']>;
  /** The name of the vehicle model. */
  name?: Maybe<Scalars['String']['output']>;
  /** URL to the image of the vehicle model thumb. */
  thumb?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "vehicle_model_v2" */
export type Vehicle_Model_V2_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  filter_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** The model_name without year of the vehicle model. */
  model_name?: InputMaybe<Order_By>;
  /** The name of the vehicle model. */
  name?: InputMaybe<Order_By>;
  /** URL to the image of the vehicle model thumb. */
  thumb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vehicle_model_v2". */
export type Vehicle_Model_V2_Order_By = {
  created_at?: InputMaybe<Order_By>;
  filter_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model_name?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  thumb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_kind?: InputMaybe<Vehicle_Kind_Order_By>;
  vehicle_kind_id?: InputMaybe<Order_By>;
  vehicle_parameters_aggregate?: InputMaybe<Vehicle_Parameter_Aggregate_Order_By>;
  vehicles_aggregate?: InputMaybe<Vehicle_Aggregate_Order_By>;
};

/** select columns of table "vehicle_model_v2" */
export enum Vehicle_Model_V2_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FilterYear = 'filter_year',
  /** column name */
  Id = 'id',
  /** column name */
  ModelName = 'model_name',
  /** column name */
  Name = 'name',
  /** column name */
  Thumb = 'thumb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleKindId = 'vehicle_kind_id'
}

/** aggregate stddev on columns */
export type Vehicle_Model_V2_Stddev_Fields = {
  __typename?: 'vehicle_model_v2_stddev_fields';
  filter_year?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "vehicle_model_v2" */
export type Vehicle_Model_V2_Stddev_Order_By = {
  filter_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vehicle_Model_V2_Stddev_Pop_Fields = {
  __typename?: 'vehicle_model_v2_stddev_pop_fields';
  filter_year?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "vehicle_model_v2" */
export type Vehicle_Model_V2_Stddev_Pop_Order_By = {
  filter_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vehicle_Model_V2_Stddev_Samp_Fields = {
  __typename?: 'vehicle_model_v2_stddev_samp_fields';
  filter_year?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "vehicle_model_v2" */
export type Vehicle_Model_V2_Stddev_Samp_Order_By = {
  filter_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vehicle_model_v2" */
export type Vehicle_Model_V2_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vehicle_Model_V2_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicle_Model_V2_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  filter_year?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** The model_name without year of the vehicle model. */
  model_name?: InputMaybe<Scalars['String']['input']>;
  /** The name of the vehicle model. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** URL to the image of the vehicle model thumb. */
  thumb?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Vehicle_Model_V2_Sum_Fields = {
  __typename?: 'vehicle_model_v2_sum_fields';
  filter_year?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "vehicle_model_v2" */
export type Vehicle_Model_V2_Sum_Order_By = {
  filter_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vehicle_Model_V2_Var_Pop_Fields = {
  __typename?: 'vehicle_model_v2_var_pop_fields';
  filter_year?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "vehicle_model_v2" */
export type Vehicle_Model_V2_Var_Pop_Order_By = {
  filter_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vehicle_Model_V2_Var_Samp_Fields = {
  __typename?: 'vehicle_model_v2_var_samp_fields';
  filter_year?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "vehicle_model_v2" */
export type Vehicle_Model_V2_Var_Samp_Order_By = {
  filter_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vehicle_Model_V2_Variance_Fields = {
  __typename?: 'vehicle_model_v2_variance_fields';
  filter_year?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "vehicle_model_v2" */
export type Vehicle_Model_V2_Variance_Order_By = {
  filter_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_kind associated with this model. */
  vehicle_kind_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "vehicle_model" */
export type Vehicle_Model_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 座位數 */
  seats?: InputMaybe<Order_By>;
  /** 車廠 */
  vehicle_brand_id?: InputMaybe<Order_By>;
  /** 車型 */
  vehicle_type_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "vehicle_model" */
export type Vehicle_Model_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 座位數 */
  seats?: InputMaybe<Order_By>;
  /** 車廠 */
  vehicle_brand_id?: InputMaybe<Order_By>;
  /** 車型 */
  vehicle_type_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "vehicle_model" */
export type Vehicle_Model_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 座位數 */
  seats?: InputMaybe<Order_By>;
  /** 車廠 */
  vehicle_brand_id?: InputMaybe<Order_By>;
  /** 車型 */
  vehicle_type_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vehicle". */
export type Vehicle_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  devices_aggregate?: InputMaybe<Device_Aggregate_Order_By>;
  fleet?: InputMaybe<Fleet_Order_By>;
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  insurance_id?: InputMaybe<Order_By>;
  license_plate_front?: InputMaybe<Order_By>;
  license_plate_rear?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>;
  photo_path?: InputMaybe<Order_By>;
  rental_company?: InputMaybe<Rental_Company_Order_By>;
  rental_company_id?: InputMaybe<Order_By>;
  rental_plan_type?: InputMaybe<Order_By>;
  station?: InputMaybe<Station_Order_By>;
  station_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_holding_company?: InputMaybe<Vehicle_Holding_Company_Order_By>;
  vehicle_holding_company_id?: InputMaybe<Order_By>;
  vehicle_model?: InputMaybe<Vehicle_Model_Order_By>;
  vehicle_model_id?: InputMaybe<Order_By>;
  vehicle_model_v2?: InputMaybe<Vehicle_Model_V2_Order_By>;
  vehicle_model_v2_id?: InputMaybe<Order_By>;
  vehicle_rental_rates_aggregate?: InputMaybe<Vehicle_Rental_Rate_Aggregate_Order_By>;
  vehicle_unavailable_calendars_aggregate?: InputMaybe<Vehicle_Unavailable_Calendar_Aggregate_Order_By>;
  year_of_manufacture?: InputMaybe<Order_By>;
};

/** 車款詳細型號參數表 資料源 8891 */
export type Vehicle_Parameter = {
  __typename?: 'vehicle_parameter';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** The value of the parameter. */
  item_value: Scalars['String']['output'];
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  vehicle_model_v2: Vehicle_Model_V2;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id: Scalars['bigint']['output'];
  /** An object relationship */
  vehicle_parameter_definition: Vehicle_Parameter_Definition;
};

/** aggregated selection of "vehicle_parameter" */
export type Vehicle_Parameter_Aggregate = {
  __typename?: 'vehicle_parameter_aggregate';
  aggregate?: Maybe<Vehicle_Parameter_Aggregate_Fields>;
  nodes: Array<Vehicle_Parameter>;
};

export type Vehicle_Parameter_Aggregate_Bool_Exp = {
  count?: InputMaybe<Vehicle_Parameter_Aggregate_Bool_Exp_Count>;
};

export type Vehicle_Parameter_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vehicle_Parameter_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vehicle_Parameter_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vehicle_parameter" */
export type Vehicle_Parameter_Aggregate_Fields = {
  __typename?: 'vehicle_parameter_aggregate_fields';
  avg?: Maybe<Vehicle_Parameter_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vehicle_Parameter_Max_Fields>;
  min?: Maybe<Vehicle_Parameter_Min_Fields>;
  stddev?: Maybe<Vehicle_Parameter_Stddev_Fields>;
  stddev_pop?: Maybe<Vehicle_Parameter_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vehicle_Parameter_Stddev_Samp_Fields>;
  sum?: Maybe<Vehicle_Parameter_Sum_Fields>;
  var_pop?: Maybe<Vehicle_Parameter_Var_Pop_Fields>;
  var_samp?: Maybe<Vehicle_Parameter_Var_Samp_Fields>;
  variance?: Maybe<Vehicle_Parameter_Variance_Fields>;
};


/** aggregate fields of "vehicle_parameter" */
export type Vehicle_Parameter_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vehicle_Parameter_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "vehicle_parameter" */
export type Vehicle_Parameter_Aggregate_Order_By = {
  avg?: InputMaybe<Vehicle_Parameter_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vehicle_Parameter_Max_Order_By>;
  min?: InputMaybe<Vehicle_Parameter_Min_Order_By>;
  stddev?: InputMaybe<Vehicle_Parameter_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vehicle_Parameter_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vehicle_Parameter_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vehicle_Parameter_Sum_Order_By>;
  var_pop?: InputMaybe<Vehicle_Parameter_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vehicle_Parameter_Var_Samp_Order_By>;
  variance?: InputMaybe<Vehicle_Parameter_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vehicle_Parameter_Avg_Fields = {
  __typename?: 'vehicle_parameter_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "vehicle_parameter" */
export type Vehicle_Parameter_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vehicle_parameter". All fields are combined with a logical 'AND'. */
export type Vehicle_Parameter_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicle_Parameter_Bool_Exp>>;
  _not?: InputMaybe<Vehicle_Parameter_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicle_Parameter_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  item_value?: InputMaybe<String_Comparison_Exp>;
  parameter_definition_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle_model_v2?: InputMaybe<Vehicle_Model_V2_Bool_Exp>;
  vehicle_model_v2_id?: InputMaybe<Bigint_Comparison_Exp>;
  vehicle_parameter_definition?: InputMaybe<Vehicle_Parameter_Definition_Bool_Exp>;
};

/** 車款詳細型號參數定義表 資料源 8891 */
export type Vehicle_Parameter_Definition = {
  __typename?: 'vehicle_parameter_definition';
  /** 車款詳細型號參數類別 */
  category: Scalars['vehicleparametercategory']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** The key of the parameter from 8891. */
  item_key: Scalars['String']['output'];
  /** The name of the parameter from 8891. */
  item_name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  vehicle_parameters: Array<Vehicle_Parameter>;
  /** An aggregate relationship */
  vehicle_parameters_aggregate: Vehicle_Parameter_Aggregate;
};


/** 車款詳細型號參數定義表 資料源 8891 */
export type Vehicle_Parameter_DefinitionVehicle_ParametersArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Parameter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Parameter_Order_By>>;
  where?: InputMaybe<Vehicle_Parameter_Bool_Exp>;
};


/** 車款詳細型號參數定義表 資料源 8891 */
export type Vehicle_Parameter_DefinitionVehicle_Parameters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Parameter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Parameter_Order_By>>;
  where?: InputMaybe<Vehicle_Parameter_Bool_Exp>;
};

/** aggregated selection of "vehicle_parameter_definition" */
export type Vehicle_Parameter_Definition_Aggregate = {
  __typename?: 'vehicle_parameter_definition_aggregate';
  aggregate?: Maybe<Vehicle_Parameter_Definition_Aggregate_Fields>;
  nodes: Array<Vehicle_Parameter_Definition>;
};

/** aggregate fields of "vehicle_parameter_definition" */
export type Vehicle_Parameter_Definition_Aggregate_Fields = {
  __typename?: 'vehicle_parameter_definition_aggregate_fields';
  avg?: Maybe<Vehicle_Parameter_Definition_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vehicle_Parameter_Definition_Max_Fields>;
  min?: Maybe<Vehicle_Parameter_Definition_Min_Fields>;
  stddev?: Maybe<Vehicle_Parameter_Definition_Stddev_Fields>;
  stddev_pop?: Maybe<Vehicle_Parameter_Definition_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vehicle_Parameter_Definition_Stddev_Samp_Fields>;
  sum?: Maybe<Vehicle_Parameter_Definition_Sum_Fields>;
  var_pop?: Maybe<Vehicle_Parameter_Definition_Var_Pop_Fields>;
  var_samp?: Maybe<Vehicle_Parameter_Definition_Var_Samp_Fields>;
  variance?: Maybe<Vehicle_Parameter_Definition_Variance_Fields>;
};


/** aggregate fields of "vehicle_parameter_definition" */
export type Vehicle_Parameter_Definition_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vehicle_Parameter_Definition_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Vehicle_Parameter_Definition_Avg_Fields = {
  __typename?: 'vehicle_parameter_definition_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "vehicle_parameter_definition". All fields are combined with a logical 'AND'. */
export type Vehicle_Parameter_Definition_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicle_Parameter_Definition_Bool_Exp>>;
  _not?: InputMaybe<Vehicle_Parameter_Definition_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicle_Parameter_Definition_Bool_Exp>>;
  category?: InputMaybe<Vehicleparametercategory_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  item_key?: InputMaybe<String_Comparison_Exp>;
  item_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle_parameters?: InputMaybe<Vehicle_Parameter_Bool_Exp>;
  vehicle_parameters_aggregate?: InputMaybe<Vehicle_Parameter_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Vehicle_Parameter_Definition_Max_Fields = {
  __typename?: 'vehicle_parameter_definition_max_fields';
  /** 車款詳細型號參數類別 */
  category?: Maybe<Scalars['vehicleparametercategory']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** The key of the parameter from 8891. */
  item_key?: Maybe<Scalars['String']['output']>;
  /** The name of the parameter from 8891. */
  item_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Vehicle_Parameter_Definition_Min_Fields = {
  __typename?: 'vehicle_parameter_definition_min_fields';
  /** 車款詳細型號參數類別 */
  category?: Maybe<Scalars['vehicleparametercategory']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** The key of the parameter from 8891. */
  item_key?: Maybe<Scalars['String']['output']>;
  /** The name of the parameter from 8891. */
  item_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "vehicle_parameter_definition". */
export type Vehicle_Parameter_Definition_Order_By = {
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_key?: InputMaybe<Order_By>;
  item_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_parameters_aggregate?: InputMaybe<Vehicle_Parameter_Aggregate_Order_By>;
};

/** select columns of table "vehicle_parameter_definition" */
export enum Vehicle_Parameter_Definition_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ItemKey = 'item_key',
  /** column name */
  ItemName = 'item_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Vehicle_Parameter_Definition_Stddev_Fields = {
  __typename?: 'vehicle_parameter_definition_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Vehicle_Parameter_Definition_Stddev_Pop_Fields = {
  __typename?: 'vehicle_parameter_definition_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Vehicle_Parameter_Definition_Stddev_Samp_Fields = {
  __typename?: 'vehicle_parameter_definition_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "vehicle_parameter_definition" */
export type Vehicle_Parameter_Definition_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vehicle_Parameter_Definition_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicle_Parameter_Definition_Stream_Cursor_Value_Input = {
  /** 車款詳細型號參數類別 */
  category?: InputMaybe<Scalars['vehicleparametercategory']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** The key of the parameter from 8891. */
  item_key?: InputMaybe<Scalars['String']['input']>;
  /** The name of the parameter from 8891. */
  item_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Vehicle_Parameter_Definition_Sum_Fields = {
  __typename?: 'vehicle_parameter_definition_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Vehicle_Parameter_Definition_Var_Pop_Fields = {
  __typename?: 'vehicle_parameter_definition_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Vehicle_Parameter_Definition_Var_Samp_Fields = {
  __typename?: 'vehicle_parameter_definition_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Vehicle_Parameter_Definition_Variance_Fields = {
  __typename?: 'vehicle_parameter_definition_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Vehicle_Parameter_Max_Fields = {
  __typename?: 'vehicle_parameter_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** The value of the parameter. */
  item_value?: Maybe<Scalars['String']['output']>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "vehicle_parameter" */
export type Vehicle_Parameter_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** The value of the parameter. */
  item_value?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vehicle_Parameter_Min_Fields = {
  __typename?: 'vehicle_parameter_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** The value of the parameter. */
  item_value?: Maybe<Scalars['String']['output']>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "vehicle_parameter" */
export type Vehicle_Parameter_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** The value of the parameter. */
  item_value?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vehicle_parameter". */
export type Vehicle_Parameter_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_value?: InputMaybe<Order_By>;
  parameter_definition_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_model_v2?: InputMaybe<Vehicle_Model_V2_Order_By>;
  vehicle_model_v2_id?: InputMaybe<Order_By>;
  vehicle_parameter_definition?: InputMaybe<Vehicle_Parameter_Definition_Order_By>;
};

/** select columns of table "vehicle_parameter" */
export enum Vehicle_Parameter_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ItemValue = 'item_value',
  /** column name */
  ParameterDefinitionId = 'parameter_definition_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleModelV2Id = 'vehicle_model_v2_id'
}

/** aggregate stddev on columns */
export type Vehicle_Parameter_Stddev_Fields = {
  __typename?: 'vehicle_parameter_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "vehicle_parameter" */
export type Vehicle_Parameter_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vehicle_Parameter_Stddev_Pop_Fields = {
  __typename?: 'vehicle_parameter_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "vehicle_parameter" */
export type Vehicle_Parameter_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vehicle_Parameter_Stddev_Samp_Fields = {
  __typename?: 'vehicle_parameter_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "vehicle_parameter" */
export type Vehicle_Parameter_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vehicle_parameter" */
export type Vehicle_Parameter_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vehicle_Parameter_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicle_Parameter_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** The value of the parameter. */
  item_value?: InputMaybe<Scalars['String']['input']>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Vehicle_Parameter_Sum_Fields = {
  __typename?: 'vehicle_parameter_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: Maybe<Scalars['bigint']['output']>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "vehicle_parameter" */
export type Vehicle_Parameter_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vehicle_Parameter_Var_Pop_Fields = {
  __typename?: 'vehicle_parameter_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "vehicle_parameter" */
export type Vehicle_Parameter_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vehicle_Parameter_Var_Samp_Fields = {
  __typename?: 'vehicle_parameter_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "vehicle_parameter" */
export type Vehicle_Parameter_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vehicle_Parameter_Variance_Fields = {
  __typename?: 'vehicle_parameter_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "vehicle_parameter" */
export type Vehicle_Parameter_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle parameter definition. */
  parameter_definition_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
};

/** 車輛租賃費率 */
export type Vehicle_Rental_Rate = {
  __typename?: 'vehicle_rental_rate';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 費率 */
  rate: Scalars['float8']['output'];
  /** An object relationship */
  rental_plan: Rental_Plan;
  rental_plan_id: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  vehicle: Vehicle;
  vehicle_id: Scalars['bigint']['output'];
};

/** aggregated selection of "vehicle_rental_rate" */
export type Vehicle_Rental_Rate_Aggregate = {
  __typename?: 'vehicle_rental_rate_aggregate';
  aggregate?: Maybe<Vehicle_Rental_Rate_Aggregate_Fields>;
  nodes: Array<Vehicle_Rental_Rate>;
};

export type Vehicle_Rental_Rate_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Vehicle_Rental_Rate_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Vehicle_Rental_Rate_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Vehicle_Rental_Rate_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Vehicle_Rental_Rate_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Vehicle_Rental_Rate_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Vehicle_Rental_Rate_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Vehicle_Rental_Rate_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Vehicle_Rental_Rate_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Vehicle_Rental_Rate_Aggregate_Bool_Exp_Var_Samp>;
};

export type Vehicle_Rental_Rate_Aggregate_Bool_Exp_Avg = {
  arguments: Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Vehicle_Rental_Rate_Aggregate_Bool_Exp_Corr = {
  arguments: Vehicle_Rental_Rate_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Vehicle_Rental_Rate_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Vehicle_Rental_Rate_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vehicle_Rental_Rate_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Vehicle_Rental_Rate_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Vehicle_Rental_Rate_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Vehicle_Rental_Rate_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Vehicle_Rental_Rate_Aggregate_Bool_Exp_Max = {
  arguments: Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Vehicle_Rental_Rate_Aggregate_Bool_Exp_Min = {
  arguments: Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Vehicle_Rental_Rate_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Vehicle_Rental_Rate_Aggregate_Bool_Exp_Sum = {
  arguments: Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Vehicle_Rental_Rate_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "vehicle_rental_rate" */
export type Vehicle_Rental_Rate_Aggregate_Fields = {
  __typename?: 'vehicle_rental_rate_aggregate_fields';
  avg?: Maybe<Vehicle_Rental_Rate_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vehicle_Rental_Rate_Max_Fields>;
  min?: Maybe<Vehicle_Rental_Rate_Min_Fields>;
  stddev?: Maybe<Vehicle_Rental_Rate_Stddev_Fields>;
  stddev_pop?: Maybe<Vehicle_Rental_Rate_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vehicle_Rental_Rate_Stddev_Samp_Fields>;
  sum?: Maybe<Vehicle_Rental_Rate_Sum_Fields>;
  var_pop?: Maybe<Vehicle_Rental_Rate_Var_Pop_Fields>;
  var_samp?: Maybe<Vehicle_Rental_Rate_Var_Samp_Fields>;
  variance?: Maybe<Vehicle_Rental_Rate_Variance_Fields>;
};


/** aggregate fields of "vehicle_rental_rate" */
export type Vehicle_Rental_Rate_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vehicle_Rental_Rate_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "vehicle_rental_rate" */
export type Vehicle_Rental_Rate_Aggregate_Order_By = {
  avg?: InputMaybe<Vehicle_Rental_Rate_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vehicle_Rental_Rate_Max_Order_By>;
  min?: InputMaybe<Vehicle_Rental_Rate_Min_Order_By>;
  stddev?: InputMaybe<Vehicle_Rental_Rate_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vehicle_Rental_Rate_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vehicle_Rental_Rate_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vehicle_Rental_Rate_Sum_Order_By>;
  var_pop?: InputMaybe<Vehicle_Rental_Rate_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vehicle_Rental_Rate_Var_Samp_Order_By>;
  variance?: InputMaybe<Vehicle_Rental_Rate_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vehicle_Rental_Rate_Avg_Fields = {
  __typename?: 'vehicle_rental_rate_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 費率 */
  rate?: Maybe<Scalars['Float']['output']>;
  rental_plan_id?: Maybe<Scalars['Float']['output']>;
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "vehicle_rental_rate" */
export type Vehicle_Rental_Rate_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 費率 */
  rate?: InputMaybe<Order_By>;
  rental_plan_id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vehicle_rental_rate". All fields are combined with a logical 'AND'. */
export type Vehicle_Rental_Rate_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicle_Rental_Rate_Bool_Exp>>;
  _not?: InputMaybe<Vehicle_Rental_Rate_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicle_Rental_Rate_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  rate?: InputMaybe<Float8_Comparison_Exp>;
  rental_plan?: InputMaybe<Rental_Plan_Bool_Exp>;
  rental_plan_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle?: InputMaybe<Vehicle_Bool_Exp>;
  vehicle_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vehicle_Rental_Rate_Max_Fields = {
  __typename?: 'vehicle_rental_rate_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 費率 */
  rate?: Maybe<Scalars['float8']['output']>;
  rental_plan_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vehicle_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "vehicle_rental_rate" */
export type Vehicle_Rental_Rate_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 費率 */
  rate?: InputMaybe<Order_By>;
  rental_plan_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vehicle_Rental_Rate_Min_Fields = {
  __typename?: 'vehicle_rental_rate_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 費率 */
  rate?: Maybe<Scalars['float8']['output']>;
  rental_plan_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vehicle_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "vehicle_rental_rate" */
export type Vehicle_Rental_Rate_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 費率 */
  rate?: InputMaybe<Order_By>;
  rental_plan_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vehicle_rental_rate". */
export type Vehicle_Rental_Rate_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  rental_plan?: InputMaybe<Rental_Plan_Order_By>;
  rental_plan_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle?: InputMaybe<Vehicle_Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** select columns of table "vehicle_rental_rate" */
export enum Vehicle_Rental_Rate_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Rate = 'rate',
  /** column name */
  RentalPlanId = 'rental_plan_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleId = 'vehicle_id'
}

/** select "vehicle_rental_rate_aggregate_bool_exp_avg_arguments_columns" columns of table "vehicle_rental_rate" */
export enum Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Rate = 'rate'
}

/** select "vehicle_rental_rate_aggregate_bool_exp_corr_arguments_columns" columns of table "vehicle_rental_rate" */
export enum Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Rate = 'rate'
}

/** select "vehicle_rental_rate_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "vehicle_rental_rate" */
export enum Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Rate = 'rate'
}

/** select "vehicle_rental_rate_aggregate_bool_exp_max_arguments_columns" columns of table "vehicle_rental_rate" */
export enum Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Rate = 'rate'
}

/** select "vehicle_rental_rate_aggregate_bool_exp_min_arguments_columns" columns of table "vehicle_rental_rate" */
export enum Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Rate = 'rate'
}

/** select "vehicle_rental_rate_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "vehicle_rental_rate" */
export enum Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Rate = 'rate'
}

/** select "vehicle_rental_rate_aggregate_bool_exp_sum_arguments_columns" columns of table "vehicle_rental_rate" */
export enum Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Rate = 'rate'
}

/** select "vehicle_rental_rate_aggregate_bool_exp_var_samp_arguments_columns" columns of table "vehicle_rental_rate" */
export enum Vehicle_Rental_Rate_Select_Column_Vehicle_Rental_Rate_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Rate = 'rate'
}

/** aggregate stddev on columns */
export type Vehicle_Rental_Rate_Stddev_Fields = {
  __typename?: 'vehicle_rental_rate_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 費率 */
  rate?: Maybe<Scalars['Float']['output']>;
  rental_plan_id?: Maybe<Scalars['Float']['output']>;
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "vehicle_rental_rate" */
export type Vehicle_Rental_Rate_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 費率 */
  rate?: InputMaybe<Order_By>;
  rental_plan_id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vehicle_Rental_Rate_Stddev_Pop_Fields = {
  __typename?: 'vehicle_rental_rate_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 費率 */
  rate?: Maybe<Scalars['Float']['output']>;
  rental_plan_id?: Maybe<Scalars['Float']['output']>;
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "vehicle_rental_rate" */
export type Vehicle_Rental_Rate_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 費率 */
  rate?: InputMaybe<Order_By>;
  rental_plan_id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vehicle_Rental_Rate_Stddev_Samp_Fields = {
  __typename?: 'vehicle_rental_rate_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 費率 */
  rate?: Maybe<Scalars['Float']['output']>;
  rental_plan_id?: Maybe<Scalars['Float']['output']>;
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "vehicle_rental_rate" */
export type Vehicle_Rental_Rate_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 費率 */
  rate?: InputMaybe<Order_By>;
  rental_plan_id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vehicle_rental_rate" */
export type Vehicle_Rental_Rate_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vehicle_Rental_Rate_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicle_Rental_Rate_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 費率 */
  rate?: InputMaybe<Scalars['float8']['input']>;
  rental_plan_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vehicle_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Vehicle_Rental_Rate_Sum_Fields = {
  __typename?: 'vehicle_rental_rate_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  /** 費率 */
  rate?: Maybe<Scalars['float8']['output']>;
  rental_plan_id?: Maybe<Scalars['bigint']['output']>;
  vehicle_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "vehicle_rental_rate" */
export type Vehicle_Rental_Rate_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 費率 */
  rate?: InputMaybe<Order_By>;
  rental_plan_id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vehicle_Rental_Rate_Var_Pop_Fields = {
  __typename?: 'vehicle_rental_rate_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 費率 */
  rate?: Maybe<Scalars['Float']['output']>;
  rental_plan_id?: Maybe<Scalars['Float']['output']>;
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "vehicle_rental_rate" */
export type Vehicle_Rental_Rate_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 費率 */
  rate?: InputMaybe<Order_By>;
  rental_plan_id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vehicle_Rental_Rate_Var_Samp_Fields = {
  __typename?: 'vehicle_rental_rate_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 費率 */
  rate?: Maybe<Scalars['Float']['output']>;
  rental_plan_id?: Maybe<Scalars['Float']['output']>;
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "vehicle_rental_rate" */
export type Vehicle_Rental_Rate_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 費率 */
  rate?: InputMaybe<Order_By>;
  rental_plan_id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vehicle_Rental_Rate_Variance_Fields = {
  __typename?: 'vehicle_rental_rate_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 費率 */
  rate?: Maybe<Scalars['Float']['output']>;
  rental_plan_id?: Maybe<Scalars['Float']['output']>;
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "vehicle_rental_rate" */
export type Vehicle_Rental_Rate_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  /** 費率 */
  rate?: InputMaybe<Order_By>;
  rental_plan_id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** select columns of table "vehicle" */
export enum Vehicle_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  FleetId = 'fleet_id',
  /** column name */
  Id = 'id',
  /** column name */
  InsuranceId = 'insurance_id',
  /** column name */
  LicensePlateFront = 'license_plate_front',
  /** column name */
  LicensePlateRear = 'license_plate_rear',
  /** column name */
  PhotoPath = 'photo_path',
  /** column name */
  RentalCompanyId = 'rental_company_id',
  /** column name */
  RentalPlanType = 'rental_plan_type',
  /** column name */
  StationId = 'station_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleHoldingCompanyId = 'vehicle_holding_company_id',
  /** column name */
  VehicleModelId = 'vehicle_model_id',
  /** column name */
  VehicleModelV2Id = 'vehicle_model_v2_id',
  /** column name */
  YearOfManufacture = 'year_of_manufacture'
}

/** aggregate stddev on columns */
export type Vehicle_Stddev_Fields = {
  __typename?: 'vehicle_stddev_fields';
  /** 所屬車隊 */
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 強制險 */
  insurance_id?: Maybe<Scalars['Float']['output']>;
  /** 所屬車行公司 */
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 投放站點 */
  station_id?: Maybe<Scalars['Float']['output']>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: Maybe<Scalars['Float']['output']>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: Maybe<Scalars['Float']['output']>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "vehicle" */
export type Vehicle_Stddev_Order_By = {
  /** 所屬車隊 */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 強制險 */
  insurance_id?: InputMaybe<Order_By>;
  /** 所屬車行公司 */
  rental_company_id?: InputMaybe<Order_By>;
  /** 投放站點 */
  station_id?: InputMaybe<Order_By>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: InputMaybe<Order_By>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vehicle_Stddev_Pop_Fields = {
  __typename?: 'vehicle_stddev_pop_fields';
  /** 所屬車隊 */
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 強制險 */
  insurance_id?: Maybe<Scalars['Float']['output']>;
  /** 所屬車行公司 */
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 投放站點 */
  station_id?: Maybe<Scalars['Float']['output']>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: Maybe<Scalars['Float']['output']>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: Maybe<Scalars['Float']['output']>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "vehicle" */
export type Vehicle_Stddev_Pop_Order_By = {
  /** 所屬車隊 */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 強制險 */
  insurance_id?: InputMaybe<Order_By>;
  /** 所屬車行公司 */
  rental_company_id?: InputMaybe<Order_By>;
  /** 投放站點 */
  station_id?: InputMaybe<Order_By>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: InputMaybe<Order_By>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vehicle_Stddev_Samp_Fields = {
  __typename?: 'vehicle_stddev_samp_fields';
  /** 所屬車隊 */
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 強制險 */
  insurance_id?: Maybe<Scalars['Float']['output']>;
  /** 所屬車行公司 */
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 投放站點 */
  station_id?: Maybe<Scalars['Float']['output']>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: Maybe<Scalars['Float']['output']>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: Maybe<Scalars['Float']['output']>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "vehicle" */
export type Vehicle_Stddev_Samp_Order_By = {
  /** 所屬車隊 */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 強制險 */
  insurance_id?: InputMaybe<Order_By>;
  /** 所屬車行公司 */
  rental_company_id?: InputMaybe<Order_By>;
  /** 投放站點 */
  station_id?: InputMaybe<Order_By>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: InputMaybe<Order_By>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vehicle" */
export type Vehicle_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vehicle_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicle_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 被刪除的時間 */
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 所屬車隊 */
  fleet_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 強制險 */
  insurance_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 車牌號碼前段 */
  license_plate_front?: InputMaybe<Scalars['String']['input']>;
  /** 車牌號碼後段 */
  license_plate_rear?: InputMaybe<Scalars['String']['input']>;
  /** 每台車輛各自的建檔照片 */
  photo_path?: InputMaybe<Scalars['String']['input']>;
  /** 所屬車行公司 */
  rental_company_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 車輛適用的計費單位（例如：時租或日租） */
  rental_plan_type?: InputMaybe<Scalars['vehiclerentalplanunit']['input']>;
  /** 投放站點 */
  station_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 投放中（READY），未上架（PREPARING） */
  status?: InputMaybe<Scalars['vehiclestatus']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: InputMaybe<Scalars['bigint']['input']>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Vehicle_Sum_Fields = {
  __typename?: 'vehicle_sum_fields';
  /** 所屬車隊 */
  fleet_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 強制險 */
  insurance_id?: Maybe<Scalars['bigint']['output']>;
  /** 所屬車行公司 */
  rental_company_id?: Maybe<Scalars['bigint']['output']>;
  /** 投放站點 */
  station_id?: Maybe<Scalars['bigint']['output']>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: Maybe<Scalars['bigint']['output']>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: Maybe<Scalars['bigint']['output']>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: Maybe<Scalars['bigint']['output']>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "vehicle" */
export type Vehicle_Sum_Order_By = {
  /** 所屬車隊 */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 強制險 */
  insurance_id?: InputMaybe<Order_By>;
  /** 所屬車行公司 */
  rental_company_id?: InputMaybe<Order_By>;
  /** 投放站點 */
  station_id?: InputMaybe<Order_By>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: InputMaybe<Order_By>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: InputMaybe<Order_By>;
};

/** 車型如轎車、休旅車（SUV）、7 人座（MPV） */
export type Vehicle_Type = {
  __typename?: 'vehicle_type';
  created_at: Scalars['timestamptz']['output'];
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority: Scalars['Int']['output'];
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  vehicle_models: Array<Vehicle_Model>;
};


/** 車型如轎車、休旅車（SUV）、7 人座（MPV） */
export type Vehicle_TypeVehicle_ModelsArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Model_Order_By>>;
  where?: InputMaybe<Vehicle_Model_Bool_Exp>;
};

/** aggregated selection of "vehicle_type" */
export type Vehicle_Type_Aggregate = {
  __typename?: 'vehicle_type_aggregate';
  aggregate?: Maybe<Vehicle_Type_Aggregate_Fields>;
  nodes: Array<Vehicle_Type>;
};

/** aggregate fields of "vehicle_type" */
export type Vehicle_Type_Aggregate_Fields = {
  __typename?: 'vehicle_type_aggregate_fields';
  avg?: Maybe<Vehicle_Type_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vehicle_Type_Max_Fields>;
  min?: Maybe<Vehicle_Type_Min_Fields>;
  stddev?: Maybe<Vehicle_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Vehicle_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vehicle_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Vehicle_Type_Sum_Fields>;
  var_pop?: Maybe<Vehicle_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Vehicle_Type_Var_Samp_Fields>;
  variance?: Maybe<Vehicle_Type_Variance_Fields>;
};


/** aggregate fields of "vehicle_type" */
export type Vehicle_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vehicle_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Vehicle_Type_Avg_Fields = {
  __typename?: 'vehicle_type_avg_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "vehicle_type". All fields are combined with a logical 'AND'. */
export type Vehicle_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicle_Type_Bool_Exp>>;
  _not?: InputMaybe<Vehicle_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicle_Type_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  display_priority?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle_models?: InputMaybe<Vehicle_Model_Bool_Exp>;
};

/** aggregate max on columns */
export type Vehicle_Type_Max_Fields = {
  __typename?: 'vehicle_type_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Vehicle_Type_Min_Fields = {
  __typename?: 'vehicle_type_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "vehicle_type". */
export type Vehicle_Type_Order_By = {
  created_at?: InputMaybe<Order_By>;
  display_priority?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_models_aggregate?: InputMaybe<Vehicle_Model_Aggregate_Order_By>;
};

/** select columns of table "vehicle_type" */
export enum Vehicle_Type_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayPriority = 'display_priority',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Vehicle_Type_Stddev_Fields = {
  __typename?: 'vehicle_type_stddev_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Vehicle_Type_Stddev_Pop_Fields = {
  __typename?: 'vehicle_type_stddev_pop_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Vehicle_Type_Stddev_Samp_Fields = {
  __typename?: 'vehicle_type_stddev_samp_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "vehicle_type" */
export type Vehicle_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vehicle_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicle_Type_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Vehicle_Type_Sum_Fields = {
  __typename?: 'vehicle_type_sum_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Vehicle_Type_Var_Pop_Fields = {
  __typename?: 'vehicle_type_var_pop_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Vehicle_Type_Var_Samp_Fields = {
  __typename?: 'vehicle_type_var_samp_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Vehicle_Type_Variance_Fields = {
  __typename?: 'vehicle_type_variance_fields';
  /** 顯示優先序，數字越大越優先顯示，0 為不顯示 */
  display_priority?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** 車輛不可用行事曆 */
export type Vehicle_Unavailable_Calendar = {
  __typename?: 'vehicle_unavailable_calendar';
  created_at: Scalars['timestamptz']['output'];
  /** 從什麼日期開始 */
  from_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 到什麼日期結束 */
  to_at: Scalars['timestamptz']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  vehicle: Vehicle;
  vehicle_id: Scalars['bigint']['output'];
};

/** aggregated selection of "vehicle_unavailable_calendar" */
export type Vehicle_Unavailable_Calendar_Aggregate = {
  __typename?: 'vehicle_unavailable_calendar_aggregate';
  aggregate?: Maybe<Vehicle_Unavailable_Calendar_Aggregate_Fields>;
  nodes: Array<Vehicle_Unavailable_Calendar>;
};

export type Vehicle_Unavailable_Calendar_Aggregate_Bool_Exp = {
  count?: InputMaybe<Vehicle_Unavailable_Calendar_Aggregate_Bool_Exp_Count>;
};

export type Vehicle_Unavailable_Calendar_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vehicle_Unavailable_Calendar_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vehicle_unavailable_calendar" */
export type Vehicle_Unavailable_Calendar_Aggregate_Fields = {
  __typename?: 'vehicle_unavailable_calendar_aggregate_fields';
  avg?: Maybe<Vehicle_Unavailable_Calendar_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vehicle_Unavailable_Calendar_Max_Fields>;
  min?: Maybe<Vehicle_Unavailable_Calendar_Min_Fields>;
  stddev?: Maybe<Vehicle_Unavailable_Calendar_Stddev_Fields>;
  stddev_pop?: Maybe<Vehicle_Unavailable_Calendar_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vehicle_Unavailable_Calendar_Stddev_Samp_Fields>;
  sum?: Maybe<Vehicle_Unavailable_Calendar_Sum_Fields>;
  var_pop?: Maybe<Vehicle_Unavailable_Calendar_Var_Pop_Fields>;
  var_samp?: Maybe<Vehicle_Unavailable_Calendar_Var_Samp_Fields>;
  variance?: Maybe<Vehicle_Unavailable_Calendar_Variance_Fields>;
};


/** aggregate fields of "vehicle_unavailable_calendar" */
export type Vehicle_Unavailable_Calendar_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "vehicle_unavailable_calendar" */
export type Vehicle_Unavailable_Calendar_Aggregate_Order_By = {
  avg?: InputMaybe<Vehicle_Unavailable_Calendar_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vehicle_Unavailable_Calendar_Max_Order_By>;
  min?: InputMaybe<Vehicle_Unavailable_Calendar_Min_Order_By>;
  stddev?: InputMaybe<Vehicle_Unavailable_Calendar_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vehicle_Unavailable_Calendar_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vehicle_Unavailable_Calendar_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vehicle_Unavailable_Calendar_Sum_Order_By>;
  var_pop?: InputMaybe<Vehicle_Unavailable_Calendar_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vehicle_Unavailable_Calendar_Var_Samp_Order_By>;
  variance?: InputMaybe<Vehicle_Unavailable_Calendar_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vehicle_Unavailable_Calendar_Avg_Fields = {
  __typename?: 'vehicle_unavailable_calendar_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "vehicle_unavailable_calendar" */
export type Vehicle_Unavailable_Calendar_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vehicle_unavailable_calendar". All fields are combined with a logical 'AND'. */
export type Vehicle_Unavailable_Calendar_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Bool_Exp>>;
  _not?: InputMaybe<Vehicle_Unavailable_Calendar_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicle_Unavailable_Calendar_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  from_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  to_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle?: InputMaybe<Vehicle_Bool_Exp>;
  vehicle_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vehicle_Unavailable_Calendar_Max_Fields = {
  __typename?: 'vehicle_unavailable_calendar_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 從什麼日期開始 */
  from_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 到什麼日期結束 */
  to_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vehicle_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "vehicle_unavailable_calendar" */
export type Vehicle_Unavailable_Calendar_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 從什麼日期開始 */
  from_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 到什麼日期結束 */
  to_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vehicle_Unavailable_Calendar_Min_Fields = {
  __typename?: 'vehicle_unavailable_calendar_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 從什麼日期開始 */
  from_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 到什麼日期結束 */
  to_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vehicle_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "vehicle_unavailable_calendar" */
export type Vehicle_Unavailable_Calendar_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 從什麼日期開始 */
  from_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 到什麼日期結束 */
  to_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vehicle_unavailable_calendar". */
export type Vehicle_Unavailable_Calendar_Order_By = {
  created_at?: InputMaybe<Order_By>;
  from_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  to_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle?: InputMaybe<Vehicle_Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** select columns of table "vehicle_unavailable_calendar" */
export enum Vehicle_Unavailable_Calendar_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FromAt = 'from_at',
  /** column name */
  Id = 'id',
  /** column name */
  ToAt = 'to_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleId = 'vehicle_id'
}

/** aggregate stddev on columns */
export type Vehicle_Unavailable_Calendar_Stddev_Fields = {
  __typename?: 'vehicle_unavailable_calendar_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "vehicle_unavailable_calendar" */
export type Vehicle_Unavailable_Calendar_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vehicle_Unavailable_Calendar_Stddev_Pop_Fields = {
  __typename?: 'vehicle_unavailable_calendar_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "vehicle_unavailable_calendar" */
export type Vehicle_Unavailable_Calendar_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vehicle_Unavailable_Calendar_Stddev_Samp_Fields = {
  __typename?: 'vehicle_unavailable_calendar_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "vehicle_unavailable_calendar" */
export type Vehicle_Unavailable_Calendar_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vehicle_unavailable_calendar" */
export type Vehicle_Unavailable_Calendar_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vehicle_Unavailable_Calendar_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicle_Unavailable_Calendar_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 從什麼日期開始 */
  from_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 到什麼日期結束 */
  to_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vehicle_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Vehicle_Unavailable_Calendar_Sum_Fields = {
  __typename?: 'vehicle_unavailable_calendar_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  vehicle_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "vehicle_unavailable_calendar" */
export type Vehicle_Unavailable_Calendar_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vehicle_Unavailable_Calendar_Var_Pop_Fields = {
  __typename?: 'vehicle_unavailable_calendar_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "vehicle_unavailable_calendar" */
export type Vehicle_Unavailable_Calendar_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vehicle_Unavailable_Calendar_Var_Samp_Fields = {
  __typename?: 'vehicle_unavailable_calendar_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "vehicle_unavailable_calendar" */
export type Vehicle_Unavailable_Calendar_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vehicle_Unavailable_Calendar_Variance_Fields = {
  __typename?: 'vehicle_unavailable_calendar_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  vehicle_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "vehicle_unavailable_calendar" */
export type Vehicle_Unavailable_Calendar_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vehicle_Var_Pop_Fields = {
  __typename?: 'vehicle_var_pop_fields';
  /** 所屬車隊 */
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 強制險 */
  insurance_id?: Maybe<Scalars['Float']['output']>;
  /** 所屬車行公司 */
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 投放站點 */
  station_id?: Maybe<Scalars['Float']['output']>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: Maybe<Scalars['Float']['output']>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: Maybe<Scalars['Float']['output']>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "vehicle" */
export type Vehicle_Var_Pop_Order_By = {
  /** 所屬車隊 */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 強制險 */
  insurance_id?: InputMaybe<Order_By>;
  /** 所屬車行公司 */
  rental_company_id?: InputMaybe<Order_By>;
  /** 投放站點 */
  station_id?: InputMaybe<Order_By>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: InputMaybe<Order_By>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vehicle_Var_Samp_Fields = {
  __typename?: 'vehicle_var_samp_fields';
  /** 所屬車隊 */
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 強制險 */
  insurance_id?: Maybe<Scalars['Float']['output']>;
  /** 所屬車行公司 */
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 投放站點 */
  station_id?: Maybe<Scalars['Float']['output']>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: Maybe<Scalars['Float']['output']>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: Maybe<Scalars['Float']['output']>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "vehicle" */
export type Vehicle_Var_Samp_Order_By = {
  /** 所屬車隊 */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 強制險 */
  insurance_id?: InputMaybe<Order_By>;
  /** 所屬車行公司 */
  rental_company_id?: InputMaybe<Order_By>;
  /** 投放站點 */
  station_id?: InputMaybe<Order_By>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: InputMaybe<Order_By>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vehicle_Variance_Fields = {
  __typename?: 'vehicle_variance_fields';
  /** 所屬車隊 */
  fleet_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 強制險 */
  insurance_id?: Maybe<Scalars['Float']['output']>;
  /** 所屬車行公司 */
  rental_company_id?: Maybe<Scalars['Float']['output']>;
  /** 投放站點 */
  station_id?: Maybe<Scalars['Float']['output']>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: Maybe<Scalars['Float']['output']>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: Maybe<Scalars['Float']['output']>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: Maybe<Scalars['Float']['output']>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "vehicle" */
export type Vehicle_Variance_Order_By = {
  /** 所屬車隊 */
  fleet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 強制險 */
  insurance_id?: InputMaybe<Order_By>;
  /** 所屬車行公司 */
  rental_company_id?: InputMaybe<Order_By>;
  /** 投放站點 */
  station_id?: InputMaybe<Order_By>;
  /** 所屬公司法人 */
  vehicle_holding_company_id?: InputMaybe<Order_By>;
  /** 車型，車輛型號、款式，UI 要在 placeholder 提示填寫範例，如「2022 Corolla Altis」 */
  vehicle_model_id?: InputMaybe<Order_By>;
  /** Foreign key to the vehicle_model_v2 associated with this vehicle. */
  vehicle_model_v2_id?: InputMaybe<Order_By>;
  /** 出廠年份，yyyy */
  year_of_manufacture?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "vehicleorigin". All fields are combined with logical 'AND'. */
export type Vehicleorigin_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['vehicleorigin']['input']>;
  _gt?: InputMaybe<Scalars['vehicleorigin']['input']>;
  _gte?: InputMaybe<Scalars['vehicleorigin']['input']>;
  _in?: InputMaybe<Array<Scalars['vehicleorigin']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['vehicleorigin']['input']>;
  _lte?: InputMaybe<Scalars['vehicleorigin']['input']>;
  _neq?: InputMaybe<Scalars['vehicleorigin']['input']>;
  _nin?: InputMaybe<Array<Scalars['vehicleorigin']['input']>>;
};

/** Boolean expression to compare columns of type "vehicleparametercategory". All fields are combined with logical 'AND'. */
export type Vehicleparametercategory_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['vehicleparametercategory']['input']>;
  _gt?: InputMaybe<Scalars['vehicleparametercategory']['input']>;
  _gte?: InputMaybe<Scalars['vehicleparametercategory']['input']>;
  _in?: InputMaybe<Array<Scalars['vehicleparametercategory']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['vehicleparametercategory']['input']>;
  _lte?: InputMaybe<Scalars['vehicleparametercategory']['input']>;
  _neq?: InputMaybe<Scalars['vehicleparametercategory']['input']>;
  _nin?: InputMaybe<Array<Scalars['vehicleparametercategory']['input']>>;
};

/** Boolean expression to compare columns of type "vehiclerentalplanunit". All fields are combined with logical 'AND'. */
export type Vehiclerentalplanunit_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['vehiclerentalplanunit']['input']>;
  _gt?: InputMaybe<Scalars['vehiclerentalplanunit']['input']>;
  _gte?: InputMaybe<Scalars['vehiclerentalplanunit']['input']>;
  _in?: InputMaybe<Array<Scalars['vehiclerentalplanunit']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['vehiclerentalplanunit']['input']>;
  _lte?: InputMaybe<Scalars['vehiclerentalplanunit']['input']>;
  _neq?: InputMaybe<Scalars['vehiclerentalplanunit']['input']>;
  _nin?: InputMaybe<Array<Scalars['vehiclerentalplanunit']['input']>>;
};

/** Boolean expression to compare columns of type "vehiclestatus". All fields are combined with logical 'AND'. */
export type Vehiclestatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['vehiclestatus']['input']>;
  _gt?: InputMaybe<Scalars['vehiclestatus']['input']>;
  _gte?: InputMaybe<Scalars['vehiclestatus']['input']>;
  _in?: InputMaybe<Array<Scalars['vehiclestatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['vehiclestatus']['input']>;
  _lte?: InputMaybe<Scalars['vehiclestatus']['input']>;
  _neq?: InputMaybe<Scalars['vehiclestatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['vehiclestatus']['input']>>;
};

export type FirstExampleQueryVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;


export type FirstExampleQuery = { __typename?: 'query_root', station_by_pk?: { __typename?: 'station', name: string, address: string, open: any, close: any, latitude?: any | null, longitude?: any | null, fleet: { __typename?: 'fleet', id: any, telephone: string, organization: { __typename?: 'organization', name: string }, rental_company: { __typename?: 'rental_company', organization: { __typename?: 'organization', id: any, name: string }, rental_company_policies: Array<{ __typename?: 'rental_company_policy', rental_policy: { __typename?: 'rental_policy', id: any, description: string } }> } } } | null };



export const FirstExampleDocument = `
    query FirstExample($id: bigint!) {
  station_by_pk(id: $id) {
    name
    address
    open
    close
    latitude
    longitude
    fleet {
      id
      telephone
      organization {
        name
      }
      rental_company {
        organization {
          id
          name
        }
        rental_company_policies {
          rental_policy {
            id
            description
          }
        }
      }
    }
  }
}
    `;

export const useFirstExampleQuery = <
      TData = FirstExampleQuery,
      TError = unknown
    >(
      variables: FirstExampleQueryVariables,
      options?: Omit<UseQueryOptions<FirstExampleQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<FirstExampleQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<FirstExampleQuery, TError, TData>(
      {
    queryKey: ['FirstExample', variables],
    queryFn: fetcher<FirstExampleQuery, FirstExampleQueryVariables>(FirstExampleDocument, variables),
    ...options
  }
    )};

useFirstExampleQuery.getKey = (variables: FirstExampleQueryVariables) => ['FirstExample', variables];


useFirstExampleQuery.fetcher = (variables: FirstExampleQueryVariables, options?: RequestInit['headers']) => fetcher<FirstExampleQuery, FirstExampleQueryVariables>(FirstExampleDocument, variables, options);
