import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { fetcher } from '@/graphql/lib/second-fetcher';
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
  ContactNumber: { input: any; output: any; }
  CustomerName: { input: any; output: any; }
  CustomerNickname: { input: any; output: any; }
  CustomerPassword: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  Duration: { input: any; output: any; }
  Email: { input: any; output: any; }
  IdentityNumber: { input: any; output: any; }
  ManagerName: { input: any; output: any; }
  ManagerPassword: { input: any; output: any; }
  NonEmptyLongString: { input: any; output: any; }
  NonEmptyShortString: { input: any; output: any; }
  PassportNumber: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
  PositiveInteger: { input: any; output: any; }
  ResidentCertificateNumber: { input: any; output: any; }
  Time: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AdminBillingTransactionDataType = {
  __typename?: 'AdminBillingTransactionDataType';
  cancelledAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** 預計撥款日期 */
  fundDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  /** 最後一次與第三方金流同步資訊的時間 */
  lastSyncAt?: Maybe<Scalars['DateTime']['output']>;
  /** 金流的商店訂單編號（非租到訂單編號） */
  merchantOrderNo?: Maybe<Scalars['String']['output']>;
  /** 金流交易序號 */
  newebTradeNo?: Maybe<Scalars['String']['output']>;
  /** 金流支付時間 */
  payTime?: Maybe<Scalars['DateTime']['output']>;
  /** 金流的交易建立時間 */
  paymentCreatedTime?: Maybe<Scalars['DateTime']['output']>;
  status: BillingTransactionStatus;
  updatedAt: Scalars['DateTime']['output'];
};

/** 所有欄位皆必填，部分欄位可為 null。身分證字號、護照號碼、居留證號碼三者擇一必填。 */
export type AdminCreateCustomerInput = {
  /** 出生年月日 YYYY-MM-DD */
  birthday?: InputMaybe<Scalars['Date']['input']>;
  /** The Certificate authority ID */
  certificateAuthorityId: Scalars['Int']['input'];
  /** 身分證字號 */
  identityNumber?: InputMaybe<Scalars['IdentityNumber']['input']>;
  /** 姓名 */
  name: Scalars['CustomerName']['input'];
  /** 護照號碼 */
  passportNumber?: InputMaybe<Scalars['PassportNumber']['input']>;
  /** Customer Phone Number */
  phoneNumber: Scalars['PhoneNumber']['input'];
  /** 居留證號碼 */
  residentCertificateNumber?: InputMaybe<Scalars['ResidentCertificateNumber']['input']>;
  /** 居住地址 */
  residentialAddress?: InputMaybe<Scalars['String']['input']>;
  /** 居住行政區 */
  residentialArea?: InputMaybe<Scalars['String']['input']>;
  /** 居住縣市 */
  residentialCity?: InputMaybe<Scalars['String']['input']>;
};

export type AdminCreateOrderInput = {
  amount: OrderAmountInput;
  /** 訂單備註 */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** 顧客資料 (若顧客 id 非空則不需帶入此欄位) */
  customerInfo: AdminCreateCustomerInput;
  /** 預約用車結束時間 */
  endAt: Scalars['DateTime']['input'];
  /** 預約用車起始時間 */
  startAt: Scalars['DateTime']['input'];
  /** 取還車站點 id */
  stationId: Scalars['Int']['input'];
  /** 車輛 id */
  vehicleId: Scalars['Int']['input'];
};

/** 線上訂單：門市站點取車 */
export type AdminOnlineOrderPickUpInput = {
  orderId: Scalars['Int']['input'];
  /** 取車時間（需設定時區） */
  pickedUpAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** 線上訂單：門市站點還車 */
export type AdminOnlineOrderReturnVehicleInput = {
  orderId: Scalars['Int']['input'];
  /** 還車時間（需設定時區） */
  returnedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminRefundInput = {
  /** 欲退款的 billing_transaction_id */
  billingTransactionId: Scalars['Int']['input'];
  /** 退款明細備註 */
  comment: Scalars['String']['input'];
  /** 欲退款金額 */
  refundAmount: Scalars['PositiveInteger']['input'];
};

export type AdminUpdateCustomerInput = {
  /** 出生年月日 YYYY-MM-DD */
  birthday?: InputMaybe<Scalars['Date']['input']>;
  /** 信箱 */
  email?: InputMaybe<Scalars['Email']['input']>;
  /** 身分證字號 */
  identityNumber?: InputMaybe<Scalars['IdentityNumber']['input']>;
  /** 姓名 */
  name?: InputMaybe<Scalars['CustomerName']['input']>;
  /** 護照號碼 */
  passportNumber?: InputMaybe<Scalars['PassportNumber']['input']>;
  /** 居留證號碼 */
  residentCertificateNumber?: InputMaybe<Scalars['ResidentCertificateNumber']['input']>;
  /** 居住地址 */
  residentialAddress?: InputMaybe<Scalars['String']['input']>;
  /** 居住行政區 */
  residentialArea?: InputMaybe<Scalars['String']['input']>;
  /** 居住縣市 */
  residentialCity?: InputMaybe<Scalars['String']['input']>;
};

/** 目前僅 comment 適用 null 代表取消/刪除；後台管理者更新訂單資料 */
export type AdminUpdateOrderInput = {
  amount?: InputMaybe<OrderAmountInput>;
  /** 訂單備註（有帶值為更新整個備註 (PUT)，null 代表清空整個備註） */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** 欲更改的顧客資料 (若顧客 id 非空則不需帶入此欄位) */
  customerInfo?: InputMaybe<AdminCreateCustomerInput>;
  interval?: InputMaybe<OrderIntervalInput>;
  orderId: Scalars['Int']['input'];
  /** 取還車站點 id */
  stationId?: InputMaybe<Scalars['Int']['input']>;
  tripStatus?: InputMaybe<AdminUpdateOrderTripStatus>;
  /** 車輛 id */
  vehicleId?: InputMaybe<Scalars['Int']['input']>;
};

export enum AdminUpdateOrderTripStatus {
  Booked = 'BOOKED',
  InUse = 'IN_USE',
  Returned = 'RETURNED'
}

/** 訂單更換車輛 */
export type AdminUpdateOrderVehicleInput = {
  orderId: Scalars['Int']['input'];
  vehicleId: Scalars['Int']['input'];
};

/** 可上傳的照片類型 */
export enum AvailableOrderPhotoName {
  Defect = 'DEFECT',
  PickupBackSeat = 'PICKUP_BACK_SEAT',
  PickupDashboard = 'PICKUP_DASHBOARD',
  PickupFrontSeat = 'PICKUP_FRONT_SEAT',
  ReturnBackSeat = 'RETURN_BACK_SEAT',
  ReturnDashboard = 'RETURN_DASHBOARD',
  ReturnFrontSeat = 'RETURN_FRONT_SEAT',
  ReturnKey = 'RETURN_KEY'
}

export type BatchUpdateInsuranceProductRentalCompaniesInput = {
  insuranceProductId: Scalars['Int']['input'];
  updates: InsuranceProductRentalCompaniesUpdates;
};

export type BillingExtraDataType = {
  __typename?: 'BillingExtraDataType';
  activatedAt: Scalars['DateTime']['output'];
  etcFiles?: Maybe<Array<BillingFilesType>>;
  id: Scalars['Int']['output'];
  paymentDueDate: Scalars['Date']['output'];
};

export type BillingFilesType = {
  __typename?: 'BillingFilesType';
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type BillingTransactionDataType = {
  __typename?: 'BillingTransactionDataType';
  id: Scalars['Int']['output'];
  newebTradeNo?: Maybe<Scalars['String']['output']>;
  status: BillingTransactionStatus;
};

export enum BillingTransactionStatus {
  AuthCancelFail = 'AUTH_CANCEL_FAIL',
  AuthCancelOk = 'AUTH_CANCEL_OK',
  AuthFail = 'AUTH_FAIL',
  AuthOk = 'AUTH_OK',
  Init = 'INIT',
  PaidCancelFail = 'PAID_CANCEL_FAIL',
  PaidCancelOk = 'PAID_CANCEL_OK',
  PaidReqFail = 'PAID_REQ_FAIL',
  PaidReqOk = 'PAID_REQ_OK',
  RefundReqFail = 'REFUND_REQ_FAIL',
  RefundReqOk = 'REFUND_REQ_OK',
  WaitingP3DVerify = 'WAITING_P3D_VERIFY'
}

export type BindCreditCardInput = {
  /** 後三碼 */
  cardCvc: Scalars['String']['input'];
  /** 有效期限月 (MM) */
  cardExpiryMonth: Scalars['String']['input'];
  /** 有效期限年 (YYYY) */
  cardExpiryYear: Scalars['String']['input'];
  /** 卡號 */
  cardNumber: Scalars['String']['input'];
};

/** 取消訂單定金退款情境類型 */
export enum CancellationType {
  FullRefund = 'FULL_REFUND',
  NoRefund = 'NO_REFUND',
  PartialRefund = 'PARTIAL_REFUND'
}

export enum CertifiedStatus {
  Approve = 'APPROVE',
  InReview = 'IN_REVIEW',
  Reject = 'REJECT',
  Uncommitted = 'UNCOMMITTED'
}

export type CheckGeneratePdfSuccess = {
  __typename?: 'CheckGeneratePdfSuccess';
  contractPath?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  generateContractJobId: Scalars['Int']['output'];
  resourcePath: Scalars['String']['output'];
  resourceToken: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum CouponCodeType {
  FixedCode = 'FIXED_CODE',
  RandomCode = 'RANDOM_CODE'
}

export enum CouponExpiryType {
  AsCampaign = 'AS_CAMPAIGN',
  FromRedemption = 'FROM_REDEMPTION'
}

export type CreateBlockedInfoInput = {
  /** 信箱（非必填，預設為 null） */
  email?: InputMaybe<Scalars['Email']['input']>;
  /** 身分證字號（非必填，預設為 null） */
  identityNumber?: InputMaybe<Scalars['IdentityNumber']['input']>;
  /** 手機號碼 */
  mobilePhoneNumber: Scalars['PhoneNumber']['input'];
  /** 姓名（非必填，預設為 null） */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 備註 */
  note: Scalars['String']['input'];
};

export type CreateCampaignInput = {
  /** 行銷活動文案 */
  description: Scalars['NonEmptyLongString']['input'];
  /** 行銷活動結束時間 */
  endAt: Scalars['DateTime']['input'];
  /** 行銷活動是否上架 */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** 行銷活動名稱 */
  name: Scalars['NonEmptyShortString']['input'];
  /** 行銷活動開始時間 */
  startAt: Scalars['DateTime']['input'];
};

export type CreateCouponInput = {
  campaign: CreateCampaignInput;
  /** 行銷活動適用條件主表 ids */
  campaignConditionIds: Array<Scalars['Int']['input']>;
  /** 每個使用者在每個優惠券活動可領取優惠券的數量上限。隨機代碼: 最多可領取 x 組代碼；固定代碼: 此欄位目前限制為 1。 */
  claimMaxLimit?: InputMaybe<Scalars['Int']['input']>;
  /** 若 code_type 固定代碼則此欄位為兌換代碼；若 code_type 亂數代碼則此欄位為代碼前綴或 seed */
  codeBase: Scalars['String']['input'];
  /** 兌換代碼形式 */
  codeType: CouponCodeType;
  /** 優惠券詳細規則文案 */
  detailedDescription: Scalars['NonEmptyLongString']['input'];
  /** 有效期間設定天數 */
  expiryDurationDays?: InputMaybe<Scalars['Int']['input']>;
  /** 優惠券兌換後的有效期間類型 */
  expiryType: CouponExpiryType;
  /** 每個優惠券活動可發行優惠券的最大數量上限 */
  maxIssueLimit: Scalars['Int']['input'];
  /** 折扣金額的上限值 */
  maxValue: Scalars['Decimal']['input'];
  /** 折扣的計算方法 */
  method: DiscountMethod;
  /** 要套用折扣的目標費用 */
  target: DiscountTarget;
  /** 折扣方法的相關數值，如果方法為全額免費，則此欄位請傳 0.0 */
  value: Scalars['Decimal']['input'];
};

export type CreateCouponResponse = {
  __typename?: 'CreateCouponResponse';
  couponId: Scalars['Int']['output'];
};

export type CreateDeviceInput = {
  imei: Scalars['String']['input'];
  rentalCompanyId: Scalars['Int']['input'];
  simPhoneNumber: Scalars['PhoneNumber']['input'];
};

export type CreateDeviceResponse = {
  __typename?: 'CreateDeviceResponse';
  id: Scalars['Int']['output'];
};

export type CreateInsuranceProductInput = {
  /** 最低 X 元起 */
  basePrice?: InputMaybe<Scalars['Int']['input']>;
  /** 險種介紹 */
  description: Scalars['NonEmptyLongString']['input'];
  /** 險種圖片 */
  imageFile?: InputMaybe<InsuranceProductImage>;
  /** 是否啟用 */
  isActive: Scalars['Boolean']['input'];
  /** 險種名稱 */
  name: Scalars['NonEmptyShortString']['input'];
  /** 轉導連結前綴 */
  redirectPrefix?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderInput = {
  /** 欲使用的優惠券代碼 */
  couponCode?: InputMaybe<Scalars['String']['input']>;
  /** 預約用車結束時間 */
  endAt: Scalars['DateTime']['input'];
  /** 預約用車起始時間 */
  startAt: Scalars['DateTime']['input'];
  /** 車輛 id */
  vehicleId: Scalars['Int']['input'];
};

export type CreatePromotionInput = {
  campaign: CreateCampaignInput;
  /** 行銷活動適用條件主表 ids */
  campaignConditionIds: Array<Scalars['Int']['input']>;
  /** 折扣金額的上限值 */
  maxValue: Scalars['Decimal']['input'];
  /** 折扣的計算方法 */
  method: DiscountMethod;
  /** 要套用折扣的目標費用 */
  target: DiscountTarget;
  /** 折扣方法的相關數值，如果方法為全額免費，則此欄位請傳 0.0 */
  value: Scalars['Decimal']['input'];
};

export type CreatePromotionResponse = {
  __typename?: 'CreatePromotionResponse';
  promotionId: Scalars['Int']['output'];
};

export type CreateRentalCompanyInput = {
  /** 車行公司所在地址 */
  address: Scalars['String']['input'];
  /** 車行公司所在行政區 */
  area: Scalars['String']['input'];
  /** 認證機構 id */
  certificateAuthorityId?: InputMaybe<Scalars['Int']['input']>;
  /** 認證狀態 */
  certifiedStatus: CertifiedStatus;
  /** 車行公司所在縣市 */
  city: Scalars['String']['input'];
  /** 平台分潤百分比 */
  commissionPercentage?: InputMaybe<Scalars['Int']['input']>;
  /** 車行代表人信箱(帳號) */
  managerEmail: Scalars['String']['input'];
  /** 車行代表人姓名 */
  managerName: Scalars['String']['input'];
  /** 車行公司名稱 */
  name: Scalars['String']['input'];
  /** 車行公司統一編號 */
  taxIdNumber: Scalars['String']['input'];
  /** 車行公司電話 */
  telephone: Scalars['ContactNumber']['input'];
};

export type CreateStationInput = {
  /** 站點所在地址 */
  address: Scalars['String']['input'];
  /** 站點所在行政區 */
  area: Scalars['String']['input'];
  /** 站點所在縣市 */
  city: Scalars['String']['input'];
  /** 結束營業時間 */
  close: Scalars['Time']['input'];
  /** 車隊 id */
  fleetId: Scalars['Int']['input'];
  /** 是否公開，預設為隱藏 */
  isPublic: Scalars['Boolean']['input'];
  /** 站點名稱 */
  name: Scalars['String']['input'];
  /** 開始營業時間 */
  open: Scalars['Time']['input'];
  /** 站點類型 (自助租還/門市租還) */
  type?: InputMaybe<StationType>;
};

export type CreateVehicleHoldingCompanyInput = {
  /** 車輛所屬公司所在地址 */
  address: Scalars['String']['input'];
  /** 車輛所屬公司所在行政區 */
  area: Scalars['String']['input'];
  /** 車輛所屬公司所在縣市 */
  city: Scalars['String']['input'];
  /** 車輛所屬公司代表人姓名 */
  companyChiefName: Scalars['String']['input'];
  /** 公司負責人印章照片檔案格式 */
  companyChiefSealImageExtension: ImageFileExtension;
  /** 公司負責人印章照片 */
  companyChiefSealImageFile: Scalars['Upload']['input'];
  /** 公司印章照片檔案格式 */
  companySealImageExtension: ImageFileExtension;
  /** 公司印章照片 */
  companySealImageFile: Scalars['Upload']['input'];
  /** 車輛所屬公司名稱 */
  name: Scalars['String']['input'];
  /** 車輛所屬公司統一編號 */
  taxIdNumber: Scalars['String']['input'];
  /** 車輛所屬公司電話 */
  telephone: Scalars['ContactNumber']['input'];
};

export type CreateVehicleInput = {
  /** [即將棄用] 綁定車機的 sim_phone_number */
  deviceSimPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** 所屬車隊 id */
  fleetId: Scalars['Int']['input'];
  /** 車牌號碼前段 */
  licensePlateFront: Scalars['String']['input'];
  /** 車牌號碼後段 */
  licensePlateRear: Scalars['String']['input'];
  /** 車型 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 車源 */
  origin?: InputMaybe<VehicleOrigin>;
  /** 車輛照片檔案格式 */
  photoExtension?: InputMaybe<ImageFileExtension>;
  /** 車輛照片 */
  photoFile?: InputMaybe<Scalars['Upload']['input']>;
  /** 所屬車行 id */
  rentalCompanyId: Scalars['Int']['input'];
  /** 車輛適用的計費單位（例如：時租或日租） */
  rentalPlanType?: InputMaybe<VehicleRentalPlanType>;
  /** 當日費率/日 (同天營業時間前還車) */
  rentalRate1?: InputMaybe<Scalars['Int']['input']>;
  /** 平日費率/日 */
  rentalRate2?: InputMaybe<Scalars['Int']['input']>;
  /** 假日費率/日 */
  rentalRate3?: InputMaybe<Scalars['Int']['input']>;
  /** 定價費率/日 */
  rentalRate4?: InputMaybe<Scalars['Int']['input']>;
  /** 週租費率/七日 */
  rentalRate5?: InputMaybe<Scalars['Int']['input']>;
  /** 月租費率/三十日 */
  rentalRate6?: InputMaybe<Scalars['Int']['input']>;
  /** 平日費率/時 */
  rentalRate7?: InputMaybe<Scalars['Int']['input']>;
  /** 假日費率/時 */
  rentalRate8?: InputMaybe<Scalars['Int']['input']>;
  /** 定價費率/時 */
  rentalRate9?: InputMaybe<Scalars['Int']['input']>;
  /** 座位數 */
  seats?: InputMaybe<Scalars['Int']['input']>;
  /** 所屬站點 id */
  stationId: Scalars['Int']['input'];
  /** 車輛狀態 */
  status: VehicleStatus;
  /** 車廠/車輛品牌 id */
  vehicleBrandId?: InputMaybe<Scalars['Int']['input']>;
  /** 所屬公司法人 id */
  vehicleHoldingCompanyId: Scalars['Int']['input'];
  /** 車種/車型 id */
  vehicleTypeId?: InputMaybe<Scalars['Int']['input']>;
  /** 出廠年份，yyyy */
  yearOfManufacture?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateVehicleV2Input = {
  /** 車輛備註 (不會開放給顧客看到) */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** 車牌號碼前段 */
  licensePlateFront: Scalars['String']['input'];
  /** 車牌號碼後段 */
  licensePlateRear: Scalars['String']['input'];
  /** 車輛照片 */
  photo?: InputMaybe<VehiclePhotoInput>;
  /** 所屬站點 ID */
  stationId: Scalars['Int']['input'];
  /** 車輛投放狀態 */
  status: VehicleStatus;
  /** 所屬公司法人 ID */
  vehicleHoldingCompanyId: Scalars['Int']['input'];
  /** 車型 ID (V2) */
  vehicleModelV2Id?: InputMaybe<Scalars['Int']['input']>;
  /** 車輛租金費率 */
  vehicleRentalRates?: InputMaybe<Array<VehicleRentalRateBaseInput>>;
  /** 出廠年份 (yyyy) */
  yearOfManufacture?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerBilling = {
  __typename?: 'CustomerBilling';
  amount: Scalars['Int']['output'];
  billingTransactions?: Maybe<Array<BillingTransactionDataType>>;
  category: OrderBillingCategory;
  comment?: Maybe<Scalars['String']['output']>;
  extraData?: Maybe<BillingExtraDataType>;
  id: Scalars['Int']['output'];
  order: OrderDataType;
  status: OrderBillingStatus;
};

export type CustomerClaimResponse = {
  __typename?: 'CustomerClaimResponse';
  claimedAt: Scalars['DateTime']['output'];
  couponCode: Scalars['String']['output'];
  couponId: Scalars['Int']['output'];
  couponInventoryId: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  detailedDescription: Scalars['String']['output'];
  endAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  startAt: Scalars['DateTime']['output'];
};

export type CustomerFindMatchedStationsInput = {
  station?: InputMaybe<QueryStationInput>;
  useVehicleTime?: InputMaybe<UseVehicleTimeInput>;
  /** 車輛品牌 id. 請參考 vehicle_brand 表，若不需要篩選此項則無需攜帶該參數；空陣列視為不篩選 */
  vehicleBrandIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** 車輛座位數篩選 (多選)，若不需要篩選此項則無需攜帶該參數；空陣列視為不篩選 p.s. SIX_OR_MORE 選項即將棄用，請勿使用 */
  vehicleNumberOfSeats?: InputMaybe<Array<VehicleNumberOfSeatsOption>>;
  /** 車型 id. 請參考 vehicle_type 表，若不需要篩選此項則無需攜帶該參數；空陣列視為不篩選 */
  vehicleTypeIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** 車齡範圍篩選 (多選)，若不需要篩選此項則無需攜帶該參數；空陣列視為不篩選 */
  vehicleYearOfManufacture?: InputMaybe<Array<VehicleYearOfManufactureOption>>;
  /** 車輛費率平日單日價格下限，如不需要篩選此項則無需攜帶該參數 */
  weekdayPriceLower?: InputMaybe<Scalars['Int']['input']>;
  /** 車輛費率平日單日價格上限，如不需要篩選此項則無需攜帶該參數 */
  weekdayPriceUpper?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerFindMatchedStationsWithMinimumPriceResponse = {
  __typename?: 'CustomerFindMatchedStationsWithMinimumPriceResponse';
  stations: Array<MatchedWithMinimumPriceStation>;
};

export type CustomerFindMatchedVehiclesInput = {
  stationId: Scalars['Int']['input'];
  useVehicleTime?: InputMaybe<UseVehicleTimeInput>;
  /** 車輛品牌 id. 請參考 vehicle_brand 表，若不需要篩選此項則無需攜帶該參數；空陣列視為不篩選 */
  vehicleBrandIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** 車輛座位數篩選 (多選)，若不需要篩選此項則無需攜帶該參數；空陣列視為不篩選 p.s. SIX_OR_MORE 選項即將棄用，請勿使用 */
  vehicleNumberOfSeats?: InputMaybe<Array<VehicleNumberOfSeatsOption>>;
  /** 車型 id. 請參考 vehicle_type 表，若不需要篩選此項則無需攜帶該參數；空陣列視為不篩選 */
  vehicleTypeIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** 車齡範圍篩選 (多選)，若不需要篩選此項則無需攜帶該參數；空陣列視為不篩選 */
  vehicleYearOfManufacture?: InputMaybe<Array<VehicleYearOfManufactureOption>>;
  /** 車輛費率平日單日價格下限，如不需要篩選此項則無需攜帶該參數 */
  weekdayPriceLower?: InputMaybe<Scalars['Int']['input']>;
  /** 車輛費率平日單日價格上限，如不需要篩選此項則無需攜帶該參數 */
  weekdayPriceUpper?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerFindMatchedVehiclesResponse = {
  __typename?: 'CustomerFindMatchedVehiclesResponse';
  vehicles: Array<MatchedVehicles>;
};

export type CustomerGetBillingsResponse = {
  __typename?: 'CustomerGetBillingsResponse';
  /** 付款異常的明細 */
  abnormalBillings: Array<CustomerBilling>;
  /** 付款失敗的明細 */
  authFailBillings: Array<CustomerBilling>;
  /** 人工處理結束的明細 */
  manualDoneBillings: Array<CustomerBilling>;
  /** 付款成功的明細 */
  paidSuccessBillings: Array<CustomerBilling>;
  /** 未付款的明細 */
  unpaidBillings: Array<CustomerBilling>;
};

export type CustomerLoginResult = LoginFail | LoginSuccess | UnverifiedPhone;

export enum CustomerPhotoIntention {
  DrivingLicense = 'DRIVING_LICENSE',
  IdentityCard = 'IDENTITY_CARD',
  Selfie = 'SELFIE',
  Signature = 'SIGNATURE'
}

export type DeleteBlockedInfoInput = {
  /** 封鎖名單 ID */
  customerBlockedId: Scalars['Int']['input'];
  /** 備註 */
  note: Scalars['String']['input'];
};

export type DeleteDeviceInput = {
  imei: Scalars['String']['input'];
};

export type DeleteDeviceResponse = {
  __typename?: 'DeleteDeviceResponse';
  affectedRows: Scalars['Int']['output'];
};

export type DeviceType = {
  __typename?: 'DeviceType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  imei: Scalars['String']['output'];
  rentalCompanyId: Scalars['Int']['output'];
  simPhoneNumber: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  vehicleId: Scalars['Int']['output'];
};

export enum DiscountMethod {
  Fixed = 'FIXED',
  Free = 'FREE',
  Percentage = 'PERCENTAGE'
}

export enum DiscountTarget {
  Final = 'FINAL',
  Full = 'FULL'
}

export type FcmTokenInput = {
  /** Device UUID */
  fingerprint: Scalars['String']['input'];
  /** 設備平台資訊，非必填 */
  platform?: InputMaybe<Scalars['String']['input']>;
  /** FirebaseCMRegistrationToken */
  registrationToken: Scalars['String']['input'];
};

export type FleetDataInput = {
  /** 可延後取車時間/分鐘 (minute), 預設 120 分鐘 */
  delayedPickupInterval?: Scalars['Int']['input'];
  /** 可提前取車時間/分鐘 (minute), 預設 15 分鐘 */
  earlyPickupInterval?: Scalars['Int']['input'];
  /** 距離現在時刻起算，訂單最晚可預約的用車起始時間（week）, 預設 8 週 */
  maxOrderStartAtInterval?: Scalars['Int']['input'];
  /** 車隊名稱 */
  name: Scalars['String']['input'];
  /** 訂單鎖定時間/小時 (HOUR), 預設 24 小時 */
  orderLockInterval?: Scalars['Int']['input'];
  /** 遲還保留時間/小時 (HOUR), 預設 24 小時 */
  returnReservedInterval?: Scalars['Int']['input'];
  /** 距離現在時刻起算，自助取車訂單最早可預約的用車起始時間（HOUR）, 預設 2 小時 */
  selfPickupEarliestOrderStartAtInterval?: Scalars['Int']['input'];
  /** 距離現在時刻起算，門市取車訂單最早可預約的用車起始時間（HOUR）, 預設 12 小時 */
  storePickupEarliestOrderStartAtInterval?: Scalars['Int']['input'];
  /** 車隊/分行聯絡電話 */
  telephone: Scalars['ContactNumber']['input'];
  /** 車輛整備時間/小時 (HOUR), 預設 1 小時 */
  vehiclePreparingInterval?: Scalars['Int']['input'];
};

export enum ImageFileExtension {
  Jpg = 'JPG',
  Png = 'PNG'
}

export type InsuranceProduct = {
  __typename?: 'InsuranceProduct';
  /** 最低 X 元起 */
  basePrice?: Maybe<Scalars['Int']['output']>;
  /** 險種介紹 */
  description: Scalars['String']['output'];
  /** 險種 id */
  insuranceProductId: Scalars['Int']['output'];
  /** 險種名稱 */
  name: Scalars['String']['output'];
  /** 險種圖片網址 */
  publicImageUrl?: Maybe<Scalars['String']['output']>;
  /** 轉導連結 */
  redirectLink: Scalars['String']['output'];
};

export type InsuranceProductImage = {
  /** 險種圖片格式 */
  extension: ImageFileExtension;
  /** 險種圖片檔案 */
  file: Scalars['Upload']['input'];
};

export type InsuranceProductRentalCompaniesEnable = {
  /** 轉導連結後綴 */
  redirectSuffix: Scalars['String']['input'];
  /** 合作車行 id */
  rentalCompanyId: Scalars['Int']['input'];
};

export type InsuranceProductRentalCompaniesUpdates = {
  /** 停用的合作車行 id 清單 */
  disabled: Array<Scalars['Int']['input']>;
  /** 更新或啟用的合作車行清單 */
  enabled: Array<InsuranceProductRentalCompaniesEnable>;
};

export type LoginFail = {
  __typename?: 'LoginFail';
  message: Scalars['String']['output'];
};

export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  token: Token;
};

export type LoginTokenResult = LoginSuccess | ResponseError;

export type ManagerActivateResult = LoginSuccess | ResponseError;

export type ManagerLoginResult = LoginFail | LoginSuccess | UnverifiedEmail;

/** 車行可新增的明細類型 */
export enum ManagerOrderBillingCategory {
  Cleaning = 'CLEANING',
  Etc = 'ETC',
  ExtraMileage = 'EXTRA_MILEAGE',
  Fuel = 'FUEL',
  Overtime = 'OVERTIME'
}

export type ManagerOrderBillingInput = {
  /** 明細金額 */
  amount: Scalars['PositiveInteger']['input'];
  /** 明細類別 */
  category: ManagerOrderBillingCategory;
  /** 明細備註 */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** ETC 檔案列表。只有 category 為 ETC 時才可上傳 */
  files?: InputMaybe<Array<UploadBillingEtcFile>>;
  /** 訂單 id */
  orderId: Scalars['Int']['input'];
};

export type ManagerVerifyResult = ResponseError | UnverifiedEmail | VerifyToken;

export type MatchedStationV2 = {
  __typename?: 'MatchedStationV2';
  hasAvailableVehicle: Scalars['Boolean']['output'];
  minimumPrice: Scalars['Int']['output'];
  station: PublicStationViewDataType;
};

export type MatchedStationV2Response = {
  __typename?: 'MatchedStationV2Response';
  stations: Array<MatchedStationV2>;
};

export type MatchedVehicles = {
  __typename?: 'MatchedVehicles';
  campaignId?: Maybe<Scalars['Int']['output']>;
  campaignName?: Maybe<Scalars['String']['output']>;
  campaignType?: Maybe<Scalars['String']['output']>;
  device?: Maybe<DeviceType>;
  estimatePrice: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  licensePlateFront: Scalars['String']['output'];
  licensePlateRear: Scalars['String']['output'];
  photoPath: Scalars['String']['output'];
  totalDiscount: Scalars['Int']['output'];
  vehicleModel: VehicleModelType;
  weekdayRate: Scalars['Float']['output'];
  yearOfManufacture: Scalars['Int']['output'];
};

export type MatchedWithMinimumPriceStation = {
  __typename?: 'MatchedWithMinimumPriceStation';
  availableVehicleCount: Scalars['Int']['output'];
  minimumWeekdayPrice: Scalars['Int']['output'];
  minimumWeekendPrice: Scalars['Int']['output'];
  rentalCompanyPolicyIds: Array<Scalars['Int']['output']>;
  station: PublicStationViewDataType;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminBlockCustomer: ResponseSuccess;
  adminCancelBillingOther: ResponseSuccess;
  adminCancelNoShowOrder: ResponseSuccess;
  adminCancelOfflineOrder: ResponseSuccess;
  adminCancelOnlineOrder: ResponseSuccess;
  adminCheckGeneratePdf: CheckGeneratePdfSuccess;
  adminCreateBillingOther: ResponseSuccess;
  adminCreateBlockedInfo: ResponseSuccess;
  adminCreateCustomerServiceNote: ResponseSuccess;
  adminCreateDeviceInstallerAccount: ResponseSuccess;
  adminCreateOrder: ResponseSuccess;
  adminDeleteBlockedInfo: ResponseSuccess;
  adminDeleteDeviceInstallerAccount: ResponseSuccess;
  adminOnlineOrderPickUp: OrderPaidSuccess;
  adminOnlineOrderReturnVehicle: OrderPaidSuccess;
  adminOnlineOrderUpdateVehicle: ResponseSuccess;
  adminRefund: ResponseSuccess;
  adminSyncPaymentInfo: AdminBillingTransactionDataType;
  adminUnblockCustomer: ResponseSuccess;
  adminUpdateCustomer: ResponseSuccess;
  /** 更新管理者帳號, 企業後台管理者 (root_group_manager) 專用 */
  adminUpdateManagerAccount: ResponseSuccess;
  adminUpdateOrder: ResponseSuccess;
  bindCreditCard: P3dHtmlResult;
  campaignCouponCreate: CreateCouponResponse;
  campaignCouponDelete: ResponseSuccess;
  campaignCouponUpdate: ResponseSuccess;
  campaignPromotionCreate: CreatePromotionResponse;
  campaignPromotionDelete: ResponseSuccess;
  campaignPromotionUpdate: ResponseSuccess;
  changePassword: Result;
  createDevice: CreateDeviceResponse;
  customerCheckGeneratePdf: CheckGeneratePdfSuccess;
  customerClaimCoupon: CustomerClaimResponse;
  /** 此 API 用於登入，適用於 2024Q1 APP 舊版註冊/登入流程。 */
  customerLogin: CustomerLoginResult;
  deleteCustomer: Result;
  deleteCustomerFcmToken: Result;
  deleteDevice: DeleteDeviceResponse;
  deviceBind: ResponseSuccess;
  deviceUnbind: ResponseSuccess;
  fleetCreate: Result;
  fleetDelete: Result;
  fleetUpdate: Result;
  insuranceProductCreate: ResponseSuccess;
  insuranceProductDelete: ResponseSuccess;
  /** 批次更新保險合作方案車行設定。注意： 1.  disabled 與 enabled 不能同時為空 2. 若有重複項則 disabled 的優先權高於 enabled  */
  insuranceProductRentalCompaniesBatchUpdate: ResponseSuccess;
  insuranceProductUpdate: ResponseSuccess;
  managerActivateAccount: ManagerActivateResult;
  managerCancelBilling: ResponseSuccess;
  managerCreateBilling: ResponseSuccess;
  managerCreateCaAccount: Result;
  managerCreateCompanyAccount: Result;
  managerCreateFleetAccount: Result;
  managerDeleteCompanyAccount: Result;
  managerDeleteSelfAccount: Result;
  managerLogin: ManagerLoginResult;
  managerLogout: Result;
  managerMailVerificationForActivateAccount: Result;
  managerMailVerificationForResetPassword: ManagerVerifyResult;
  managerRemoveAccountFromCompany: Result;
  managerResetPassword: Result;
  managerUpdateCompanyAccount: Result;
  managerUpdateSelfAccount: Result;
  managerVerifyCodeForActivateAccount: VerifyResult;
  managerVerifyCodeForResetPassword: VerifyResult;
  orderCalculateEstimatePrice: OrderPriceResult;
  orderCancel: OrderRefundSuccess;
  orderCancelPreview: OrderRefundSuccess;
  orderCreate: OrderResult;
  orderDirtyReport: Result;
  orderPayBilling: ResponseSuccess;
  orderPickUpVehicle: OrderResult;
  orderReturnVehicle: OrderResult;
  orderUploadPhotos: ResponseSuccess;
  refreshCustomerToken: LoginTokenResult;
  refreshManagerToken: LoginTokenResult;
  rentalCompanyChangeCertifiedStatus: Result;
  rentalCompanyChangeChief: Result;
  rentalCompanyCreate: Result;
  rentalCompanyDelete: Result;
  rentalCompanyUpdate: Result;
  resetPassword: Result;
  reviewCustomerPhotos: Result;
  sendMailVerification: VerifyResult;
  /** 此 API 用於發送簡訊 OTP，適用於 2024Q1 APP 新版註冊/登入流程的第一步。成功獲取 Verify Token 後，請於驗證簡訊 OTP API verifyOtpVerification 中使用。 */
  sendOtp: VerifyToken;
  sendPhoneVerification: VerifyResult;
  signUp: LoginTokenResult;
  /** 此 API 用於 2024Q1 APP 新版註冊/登入流程的第三步 - 註冊。請攜帶驗證簡訊 OTP API verifyOtpVerification 中取得的 Sign Up Token。 */
  signUpV2: LoginSuccess;
  stationCreate: Result;
  stationDelete: Result;
  stationUpdate: Result;
  updateCustomer: Result;
  updateCustomerFcmToken: Result;
  uploadCustomerPhotos: Result;
  /** 新增車輛, 新增成功的 message 為 vehicle id (workaround for frontend) */
  vehicleCreate: Result;
  vehicleCreateUnavailableCalendar: Result;
  /** 新增車輛 V2 */
  vehicleCreateV2: ResponseSuccess;
  vehicleDelete: Result;
  vehicleDeleteUnavailableCalendar: Result;
  vehicleHoldingCompanyCreate: ResponseSuccess;
  vehicleHoldingCompanyDelete: ResponseSuccess;
  vehicleHoldingCompanyUpdate: ResponseSuccess;
  /** 編輯車輛 */
  vehicleUpdate: Result;
  vehicleUpdateRentalPlanType: Result;
  vehicleUpdateUnavailableCalendar: Result;
  /** 編輯車輛 V2 */
  vehicleUpdateV2: ResponseSuccess;
  verifyCodeForMailVerification: Result;
  verifyCodeForResetPassword: VerifyResult;
  verifyCodeForSignUp: VerifyResult;
  /** 此 API 用於驗證簡訊 OTP，適用於 2024Q1 APP 新版註冊/登入流程的第二步。請攜帶發送簡訊 OTP API sendOtpVerification 中取得的 Verify Token。 */
  verifyOtp: OtpVerificationResponse;
  wakeDeviceUp: ResponseSuccess;
  zudaoAdminCreateRootManagerAccount: ResponseSuccess;
  zudaoAdminDeleteRootManagerAccount: ResponseSuccess;
  /** 更新內部管理者 root_group_manager 帳號, Zudao Admin 專用 */
  zudaoAdminUpdateRootManagerAccount: ResponseSuccess;
};


export type MutationAdminBlockCustomerArgs = {
  customerId: Scalars['Int']['input'];
  note: Scalars['String']['input'];
};


export type MutationAdminCancelBillingOtherArgs = {
  billingId: Scalars['Int']['input'];
};


export type MutationAdminCancelNoShowOrderArgs = {
  orderId: Scalars['Int']['input'];
};


export type MutationAdminCancelOfflineOrderArgs = {
  orderId: Scalars['Int']['input'];
};


export type MutationAdminCancelOnlineOrderArgs = {
  orderId: Scalars['Int']['input'];
};


export type MutationAdminCheckGeneratePdfArgs = {
  orderId: Scalars['Int']['input'];
};


export type MutationAdminCreateBillingOtherArgs = {
  inputData: OrderBillingOtherInput;
};


export type MutationAdminCreateBlockedInfoArgs = {
  inputData: CreateBlockedInfoInput;
};


export type MutationAdminCreateCustomerServiceNoteArgs = {
  customerId: Scalars['Int']['input'];
  note: Scalars['String']['input'];
};


export type MutationAdminCreateDeviceInstallerAccountArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationAdminCreateOrderArgs = {
  inputData: AdminCreateOrderInput;
};


export type MutationAdminDeleteBlockedInfoArgs = {
  inputData: DeleteBlockedInfoInput;
};


export type MutationAdminDeleteDeviceInstallerAccountArgs = {
  managerId: Scalars['Int']['input'];
};


export type MutationAdminOnlineOrderPickUpArgs = {
  inputData: AdminOnlineOrderPickUpInput;
};


export type MutationAdminOnlineOrderReturnVehicleArgs = {
  inputData: AdminOnlineOrderReturnVehicleInput;
};


export type MutationAdminOnlineOrderUpdateVehicleArgs = {
  inputData: AdminUpdateOrderVehicleInput;
};


export type MutationAdminRefundArgs = {
  inputData: AdminRefundInput;
};


export type MutationAdminSyncPaymentInfoArgs = {
  billingTransactionId: Scalars['Int']['input'];
};


export type MutationAdminUnblockCustomerArgs = {
  customerId: Scalars['Int']['input'];
  note: Scalars['String']['input'];
};


export type MutationAdminUpdateCustomerArgs = {
  customerId: Scalars['Int']['input'];
  inputData: AdminUpdateCustomerInput;
};


export type MutationAdminUpdateManagerAccountArgs = {
  managerId: Scalars['Int']['input'];
  name: Scalars['ManagerName']['input'];
};


export type MutationAdminUpdateOrderArgs = {
  inputData: AdminUpdateOrderInput;
};


export type MutationBindCreditCardArgs = {
  inputData: BindCreditCardInput;
};


export type MutationCampaignCouponCreateArgs = {
  inputData: CreateCouponInput;
};


export type MutationCampaignCouponDeleteArgs = {
  couponId: Scalars['Int']['input'];
};


export type MutationCampaignCouponUpdateArgs = {
  couponId: Scalars['Int']['input'];
  inputData: UpdateCouponInput;
};


export type MutationCampaignPromotionCreateArgs = {
  inputData: CreatePromotionInput;
};


export type MutationCampaignPromotionDeleteArgs = {
  promotionId: Scalars['Int']['input'];
};


export type MutationCampaignPromotionUpdateArgs = {
  inputData: UpdatePromotionInput;
  promotionId: Scalars['Int']['input'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['CustomerPassword']['input'];
  oldPassword: Scalars['CustomerPassword']['input'];
};


export type MutationCreateDeviceArgs = {
  inputData: CreateDeviceInput;
};


export type MutationCustomerCheckGeneratePdfArgs = {
  orderId: Scalars['Int']['input'];
};


export type MutationCustomerClaimCouponArgs = {
  couponCode: Scalars['String']['input'];
};


export type MutationCustomerLoginArgs = {
  caId: Scalars['Int']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};


export type MutationDeleteCustomerFcmTokenArgs = {
  registrationToken: Scalars['String']['input'];
};


export type MutationDeleteDeviceArgs = {
  inputData: DeleteDeviceInput;
};


export type MutationDeviceBindArgs = {
  deviceId: Scalars['Int']['input'];
  vehicleId: Scalars['Int']['input'];
};


export type MutationDeviceUnbindArgs = {
  deviceId: Scalars['Int']['input'];
};


export type MutationFleetCreateArgs = {
  inputData: FleetDataInput;
  rentalCompanyId: Scalars['Int']['input'];
};


export type MutationFleetDeleteArgs = {
  fleetId: Scalars['Int']['input'];
};


export type MutationFleetUpdateArgs = {
  fleetId: Scalars['Int']['input'];
  inputData: FleetDataInput;
};


export type MutationInsuranceProductCreateArgs = {
  inputData: CreateInsuranceProductInput;
};


export type MutationInsuranceProductDeleteArgs = {
  insuranceProductId: Scalars['Int']['input'];
};


export type MutationInsuranceProductRentalCompaniesBatchUpdateArgs = {
  inputData: BatchUpdateInsuranceProductRentalCompaniesInput;
};


export type MutationInsuranceProductUpdateArgs = {
  inputData: UpdateInsuranceProductInput;
  insuranceProductId: Scalars['Int']['input'];
};


export type MutationManagerActivateAccountArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['ManagerPassword']['input'];
};


export type MutationManagerCancelBillingArgs = {
  billingId: Scalars['Int']['input'];
};


export type MutationManagerCreateBillingArgs = {
  inputData: ManagerOrderBillingInput;
};


export type MutationManagerCreateCaAccountArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['Int']['input'];
};


export type MutationManagerCreateCompanyAccountArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['Int']['input'];
};


export type MutationManagerCreateFleetAccountArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['Int']['input'];
};


export type MutationManagerDeleteCompanyAccountArgs = {
  managerId: Scalars['Int']['input'];
};


export type MutationManagerLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationManagerMailVerificationForActivateAccountArgs = {
  email: Scalars['String']['input'];
};


export type MutationManagerMailVerificationForResetPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationManagerRemoveAccountFromCompanyArgs = {
  managerId: Scalars['Int']['input'];
  rentalCompanyId: Scalars['Int']['input'];
};


export type MutationManagerResetPasswordArgs = {
  password: Scalars['ManagerPassword']['input'];
};


export type MutationManagerUpdateCompanyAccountArgs = {
  managerId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationManagerUpdateSelfAccountArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['ManagerPassword']['input']>;
  password: Scalars['ManagerPassword']['input'];
};


export type MutationManagerVerifyCodeForActivateAccountArgs = {
  encryptCode: Scalars['String']['input'];
};


export type MutationManagerVerifyCodeForResetPasswordArgs = {
  code: Scalars['String']['input'];
};


export type MutationOrderCalculateEstimatePriceArgs = {
  inputData: OrderCalculatePriceInput;
};


export type MutationOrderCancelArgs = {
  orderId: Scalars['Int']['input'];
};


export type MutationOrderCancelPreviewArgs = {
  orderId: Scalars['Int']['input'];
};


export type MutationOrderCreateArgs = {
  inputData: CreateOrderInput;
};


export type MutationOrderDirtyReportArgs = {
  orderId: Scalars['Int']['input'];
  photoInfo: UploadVehicleDirtyPhoto;
};


export type MutationOrderPayBillingArgs = {
  billingId: Scalars['Int']['input'];
  orderId: Scalars['Int']['input'];
};


export type MutationOrderPickUpVehicleArgs = {
  orderId: Scalars['Int']['input'];
  photos: UploadVehicleExteriorPhotos;
};


export type MutationOrderReturnVehicleArgs = {
  orderId: Scalars['Int']['input'];
  photos: UploadVehicleExteriorPhotos;
};


export type MutationOrderUploadPhotosArgs = {
  inputData: UploadOrderPhotos;
  orderId: Scalars['Int']['input'];
};


export type MutationRentalCompanyChangeCertifiedStatusArgs = {
  certifiedStatus: CertifiedStatus;
  rentalCompanyId: Scalars['Int']['input'];
};


export type MutationRentalCompanyChangeChiefArgs = {
  newChiefId: Scalars['Int']['input'];
  oldChiefId: Scalars['Int']['input'];
  rentalCompanyId: Scalars['Int']['input'];
};


export type MutationRentalCompanyCreateArgs = {
  inputData: CreateRentalCompanyInput;
};


export type MutationRentalCompanyDeleteArgs = {
  rentalCompanyId: Scalars['Int']['input'];
};


export type MutationRentalCompanyUpdateArgs = {
  inputData: UpdateRentalCompanyInput;
  rentalCompanyId: Scalars['Int']['input'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['CustomerPassword']['input'];
};


export type MutationReviewCustomerPhotosArgs = {
  customerId: Scalars['Int']['input'];
  inputData: ReviewCustomerPhotosInput;
};


export type MutationSendMailVerificationArgs = {
  email: Scalars['String']['input'];
};


export type MutationSendOtpArgs = {
  inputData: OtpVerificationInput;
};


export type MutationSendPhoneVerificationArgs = {
  inputData: PhoneVerificationInput;
};


export type MutationSignUpArgs = {
  inputData: SignUpInput;
};


export type MutationSignUpV2Args = {
  nickname: Scalars['CustomerNickname']['input'];
};


export type MutationStationCreateArgs = {
  inputData: CreateStationInput;
};


export type MutationStationDeleteArgs = {
  stationId: Scalars['Int']['input'];
};


export type MutationStationUpdateArgs = {
  inputData: UpdateStationInput;
  stationId: Scalars['Int']['input'];
};


export type MutationUpdateCustomerArgs = {
  inputData: UpdateCustomerInput;
};


export type MutationUpdateCustomerFcmTokenArgs = {
  inputData: FcmTokenInput;
};


export type MutationUploadCustomerPhotosArgs = {
  files: UploadCustomerPhotos;
};


export type MutationVehicleCreateArgs = {
  inputData: CreateVehicleInput;
};


export type MutationVehicleCreateUnavailableCalendarArgs = {
  comment: Scalars['String']['input'];
  fromAt: Scalars['DateTime']['input'];
  toAt: Scalars['DateTime']['input'];
  vehicleId: Scalars['Int']['input'];
};


export type MutationVehicleCreateV2Args = {
  inputData: CreateVehicleV2Input;
};


export type MutationVehicleDeleteArgs = {
  vehicleId: Scalars['Int']['input'];
};


export type MutationVehicleDeleteUnavailableCalendarArgs = {
  vehicleUnavailableCalendarId: Scalars['Int']['input'];
};


export type MutationVehicleHoldingCompanyCreateArgs = {
  inputData: CreateVehicleHoldingCompanyInput;
  rentalCompanyId: Scalars['Int']['input'];
};


export type MutationVehicleHoldingCompanyDeleteArgs = {
  vehicleHoldingCompanyId: Scalars['Int']['input'];
};


export type MutationVehicleHoldingCompanyUpdateArgs = {
  inputData: UpdateVehicleHoldingCompanyInput;
  vehicleHoldingCompanyId: Scalars['Int']['input'];
};


export type MutationVehicleUpdateArgs = {
  inputData: UpdateVehicleInput;
  vehicleId: Scalars['Int']['input'];
};


export type MutationVehicleUpdateRentalPlanTypeArgs = {
  rentalPlanType: VehicleRentalPlanType;
  vehicleId: Scalars['Int']['input'];
};


export type MutationVehicleUpdateUnavailableCalendarArgs = {
  comment: Scalars['String']['input'];
  fromAt: Scalars['DateTime']['input'];
  toAt: Scalars['DateTime']['input'];
  vehicleUnavailableCalendarId: Scalars['Int']['input'];
};


export type MutationVehicleUpdateV2Args = {
  inputData: UpdateVehicleV2Input;
  vehicleId: Scalars['Int']['input'];
};


export type MutationVerifyCodeForMailVerificationArgs = {
  code: Scalars['String']['input'];
};


export type MutationVerifyCodeForResetPasswordArgs = {
  code: Scalars['String']['input'];
};


export type MutationVerifyCodeForSignUpArgs = {
  code: Scalars['String']['input'];
};


export type MutationVerifyOtpArgs = {
  code: Scalars['String']['input'];
};


export type MutationWakeDeviceUpArgs = {
  deviceId: Scalars['Int']['input'];
};


export type MutationZudaoAdminCreateRootManagerAccountArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationZudaoAdminDeleteRootManagerAccountArgs = {
  managerId: Scalars['Int']['input'];
};


export type MutationZudaoAdminUpdateRootManagerAccountArgs = {
  managerId: Scalars['Int']['input'];
  name: Scalars['ManagerName']['input'];
};

export type OrderAmountInput = {
  /** 定金金額 */
  depositAmount: Scalars['Int']['input'];
  /** 總金額 */
  estimatedAmount: Scalars['Int']['input'];
};

export enum OrderBillingCategory {
  BusinessLoss = 'BUSINESS_LOSS',
  Cleaning = 'CLEANING',
  Deposit = 'DEPOSIT',
  Dispatch = 'DISPATCH',
  Etc = 'ETC',
  ExtraMileage = 'EXTRA_MILEAGE',
  Final = 'FINAL',
  Fine = 'FINE',
  Fuel = 'FUEL',
  KeyReplacement = 'KEY_REPLACEMENT',
  Other = 'OTHER',
  Overtime = 'OVERTIME',
  Parking = 'PARKING'
}

export type OrderBillingOtherInput = {
  /** 明細金額 */
  amount: Scalars['PositiveInteger']['input'];
  /** 明細備註 */
  comment: Scalars['String']['input'];
  /** 訂單 id */
  orderId: Scalars['Int']['input'];
};

export enum OrderBillingStatus {
  Canceled = 'CANCELED',
  Init = 'INIT',
  ManualDone = 'MANUAL_DONE',
  PaidFail = 'PAID_FAIL',
  PaidOk = 'PAID_OK',
  Preparing = 'PREPARING'
}

export type OrderCalculatePriceInput = {
  /** 欲使用的優惠券代碼 */
  couponCode?: InputMaybe<Scalars['String']['input']>;
  /** 預約用車結束時間 */
  endAt: Scalars['DateTime']['input'];
  /** 預約用車起始時間 */
  startAt: Scalars['DateTime']['input'];
  /** 車輛 id */
  vehicleId: Scalars['Int']['input'];
};

export type OrderDataType = {
  __typename?: 'OrderDataType';
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  orderNumber: Scalars['String']['output'];
  pickedUpAt?: Maybe<Scalars['DateTime']['output']>;
  returnedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderIntervalInput = {
  /** 預約用車結束時間 */
  endAt: Scalars['DateTime']['input'];
  /** 預約用車起始時間 */
  startAt: Scalars['DateTime']['input'];
};

export type OrderPaidSuccess = {
  __typename?: 'OrderPaidSuccess';
  discountAmount: Scalars['Int']['output'];
  orderId: Scalars['Int']['output'];
  orderNonPaidAmount: Scalars['Int']['output'];
  orderPaidAmount: Scalars['Int']['output'];
};

export type OrderPriceResult = OrderPriceSuccess | ResponseError;

export type OrderPriceSuccess = {
  __typename?: 'OrderPriceSuccess';
  campaignId?: Maybe<Scalars['Int']['output']>;
  campaignName?: Maybe<Scalars['String']['output']>;
  campaignType?: Maybe<Scalars['String']['output']>;
  estimatePrice: Scalars['Int']['output'];
  totalDiscount: Scalars['Int']['output'];
};

export type OrderRefundSuccess = {
  __typename?: 'OrderRefundSuccess';
  cancellationType: CancellationType;
  daysUntilStartAt: Scalars['Int']['output'];
  depositAmount: Scalars['Int']['output'];
  orderId: Scalars['Int']['output'];
  orderRefundAmount: Scalars['Int']['output'];
};

export type OrderResult = OrderPaidSuccess | ResponseError;

export type OtpVerificationInput = {
  /** The Certificate authority ID */
  caId?: InputMaybe<Scalars['Int']['input']>;
  /** Customer Phone Number */
  phoneNumber: Scalars['PhoneNumber']['input'];
};

export type OtpVerificationResponse = {
  __typename?: 'OtpVerificationResponse';
  /** 是否已註冊。If true, token is Login Token, else token is SignUp Token. */
  isSignedUp: Scalars['Boolean']['output'];
  token: Token;
};

export type P3dHtml = {
  __typename?: 'P3dHtml';
  /** p3d html snippet */
  html: Scalars['String']['output'];
};

export type P3dHtmlResult = P3dHtml | ResponseError;

export enum PhoneVerificationCodeType {
  PhoneResetPw = 'PHONE_RESET_PW',
  PhoneVerify = 'PHONE_VERIFY'
}

export type PhoneVerificationInput = {
  /** The Certificate authority ID */
  caId: Scalars['Int']['input'];
  /** Customer Phone Number */
  phoneNumber: Scalars['PhoneNumber']['input'];
  /** Verification Type */
  type: PhoneVerificationCodeType;
};

export type PublicStationViewDataType = {
  __typename?: 'PublicStationViewDataType';
  address: Scalars['String']['output'];
  area: Scalars['String']['output'];
  city: Scalars['String']['output'];
  close: Scalars['Time']['output'];
  createdAt: Scalars['DateTime']['output'];
  fleetDelayedPickupInterval: Scalars['Duration']['output'];
  fleetEarlyPickupInterval: Scalars['Duration']['output'];
  fleetId: Scalars['Int']['output'];
  fleetMaxOrderStartAtInterval: Scalars['Duration']['output'];
  fleetName: Scalars['String']['output'];
  fleetOrderLockInterval: Scalars['Duration']['output'];
  fleetRentalCompanyId: Scalars['Int']['output'];
  fleetReturnReservedInterval: Scalars['Duration']['output'];
  fleetSelfPickupEarliestOrderStartAtInterval: Scalars['Duration']['output'];
  fleetStorePickupEarliestOrderStartAtInterval: Scalars['Duration']['output'];
  fleetTelephone: Scalars['String']['output'];
  fleetVehiclePreparingInterval: Scalars['Duration']['output'];
  id: Scalars['Int']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  open: Scalars['Time']['output'];
  rentalCompanyName: Scalars['String']['output'];
  rentalCompanyTelephone: Scalars['String']['output'];
  stationType: StationType;
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  adminGetRefundableAmount: Scalars['Int']['output'];
  /** 顧客地圖尋車 (最低價格版) - 根據指定條件篩選出的站點列表，顯示每個站點的可用車輛狀況及最低租用價格。若無可用車輛 (has_available_vehicle=False)，則最低租用價格為 0。若未指定時間，則最低租用價格 minimum_price 為平日單日費率；反之，最低租用價格為指定時間的費率。 */
  customerFindMatchedStationsV2: MatchedStationV2Response;
  /** 顧客地圖尋車 (最低價格簡易版) - 根據指定條件篩選出的站點列表，包括每個站點的可用車輛數量和單日最低租金。 */
  customerFindMatchedStationsWithMinimumPriceSimple: CustomerFindMatchedStationsWithMinimumPriceResponse;
  /** 顧客地圖尋車 - 根據指定站點條件列出符合的車輛清單 (分頁) */
  customerFindMatchedVehicles: CustomerFindMatchedVehiclesResponse;
  customerGetBillings: CustomerGetBillingsResponse;
  getMgmStoreName: Result;
  /** 車行額外資訊 - 根據車行 ID 取得車行額外資訊，例如租賃條件、保險合作項目等 */
  getRentalCompanyExtraInfo: RentalCompanyExtraInfoResponse;
  managerGetRentalRateOfTheDay: RentalRateOfDayResponse;
};


export type QueryAdminGetRefundableAmountArgs = {
  billingTransactionId: Scalars['Int']['input'];
};


export type QueryCustomerFindMatchedStationsV2Args = {
  inputData: CustomerFindMatchedStationsInput;
};


export type QueryCustomerFindMatchedStationsWithMinimumPriceSimpleArgs = {
  inputData: CustomerFindMatchedStationsInput;
};


export type QueryCustomerFindMatchedVehiclesArgs = {
  inputData: CustomerFindMatchedVehiclesInput;
};


export type QueryGetMgmStoreNameArgs = {
  mgmCode: Scalars['String']['input'];
};


export type QueryGetRentalCompanyExtraInfoArgs = {
  rentalCompanyId: Scalars['Int']['input'];
};


export type QueryManagerGetRentalRateOfTheDayArgs = {
  inputData: RentalRateOfDayInput;
};

export type QueryStationInput = {
  /** 行政區 */
  area?: InputMaybe<Scalars['String']['input']>;
  /** 縣市 */
  city?: InputMaybe<Scalars['String']['input']>;
  /** 站點類型 (自助 / 門市) */
  stationType?: InputMaybe<StationType>;
};

export type RentalCompanyExtraInfoResponse = {
  __typename?: 'RentalCompanyExtraInfoResponse';
  rentalCompanyInsuranceProducts: Array<InsuranceProduct>;
  rentalCompanyPolicyIds: Array<Scalars['Int']['output']>;
};

export type RentalRateOfDayInput = {
  /** 目標日期，需設定時區 */
  targetDate: Scalars['DateTime']['input'];
  /** 車輛 id */
  vehicleId: Scalars['Int']['input'];
};

export type RentalRateOfDayResponse = {
  __typename?: 'RentalRateOfDayResponse';
  /** 指定日期的費率 */
  rate: Scalars['Int']['output'];
};

export type ResponseError = {
  __typename?: 'ResponseError';
  message: Scalars['String']['output'];
};

export type ResponseSuccess = {
  __typename?: 'ResponseSuccess';
  id?: Maybe<Scalars['Int']['output']>;
  message: Scalars['String']['output'];
};

export type Result = ResponseError | ResponseSuccess;

export type ReviewCustomerPhotosInput = {
  /** 駕照審核狀態 */
  drivingLicenseVerifiedStatus?: InputMaybe<ReviewCustomerPhotosStatus>;
  /** 身分證審核狀態 */
  identityCardVerifiedStatus?: InputMaybe<ReviewCustomerPhotosStatus>;
  /** 自拍照審核狀態 */
  selfieVerifiedStatus?: InputMaybe<ReviewCustomerPhotosStatus>;
  /** 電子簽名審核狀態 */
  signatureVerifiedStatus?: InputMaybe<ReviewCustomerPhotosStatus>;
};

export enum ReviewCustomerPhotosStatus {
  Approve = 'APPROVE',
  Reject = 'REJECT'
}

export type SignUpInput = {
  /** 出生年月日 YYYY-MM-DD */
  birthday: Scalars['Date']['input'];
  /** 身分證字號 */
  identityNumber: Scalars['IdentityNumber']['input'];
  /** 註冊推薦碼 MGM */
  mgm?: InputMaybe<Scalars['String']['input']>;
  /** 姓名 */
  name: Scalars['CustomerName']['input'];
  /** 密碼 */
  password: Scalars['CustomerPassword']['input'];
  /** 居住地址 */
  residentialAddress: Scalars['String']['input'];
  /** 居住行政區 */
  residentialArea: Scalars['String']['input'];
  /** 居住縣市 */
  residentialCity: Scalars['String']['input'];
  /** 電子簽名檔案格式 */
  signaturePhotoExtension: ImageFileExtension;
  /** 電子簽名 */
  signaturePhotoFile: Scalars['Upload']['input'];
};

export enum StationType {
  SelfService = 'SELF_SERVICE',
  Store = 'STORE'
}

export type Token = {
  __typename?: 'Token';
  accessToken: Scalars['String']['output'];
  tokenType: Scalars['String']['output'];
};

export type UnverifiedEmail = {
  __typename?: 'UnverifiedEmail';
  message: Scalars['String']['output'];
};

export type UnverifiedPhone = {
  __typename?: 'UnverifiedPhone';
  message: Scalars['String']['output'];
};

export type UpdateCampaignInput = {
  /** 行銷活動文案 */
  description?: InputMaybe<Scalars['NonEmptyLongString']['input']>;
  /** 行銷活動結束時間 */
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 行銷活動是否上架 */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** 行銷活動名稱 */
  name?: InputMaybe<Scalars['NonEmptyShortString']['input']>;
  /** 行銷活動開始時間 */
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateCouponInput = {
  campaign: UpdateCampaignInput;
  /** 行銷活動適用條件主表 ids */
  campaignConditionIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** 優惠券詳細規則文案 */
  detailedDescription?: InputMaybe<Scalars['NonEmptyLongString']['input']>;
  maxValue?: InputMaybe<Scalars['Decimal']['input']>;
  /** 折扣的計算方法 */
  method?: InputMaybe<DiscountMethod>;
  /** 要套用折扣的目標費用 */
  target?: InputMaybe<DiscountTarget>;
  value?: InputMaybe<Scalars['Decimal']['input']>;
};

export type UpdateCustomerInput = {
  /** 出生年月日 YYYY-MM-DD */
  birthday?: InputMaybe<Scalars['Date']['input']>;
  /** 身分證字號 */
  identityNumber?: InputMaybe<Scalars['IdentityNumber']['input']>;
  /** 姓名 */
  name?: InputMaybe<Scalars['CustomerName']['input']>;
  /** 暱稱 */
  nickname?: InputMaybe<Scalars['CustomerNickname']['input']>;
  /** 居住地址 */
  residentialAddress?: InputMaybe<Scalars['String']['input']>;
  /** 居住行政區 */
  residentialArea?: InputMaybe<Scalars['String']['input']>;
  /** 居住縣市 */
  residentialCity?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInsuranceProductInput = {
  /** 最低 X 元起 */
  basePrice?: InputMaybe<Scalars['Int']['input']>;
  /** 險種介紹 */
  description?: InputMaybe<Scalars['NonEmptyLongString']['input']>;
  /** 險種圖片 */
  imageFile?: InputMaybe<InsuranceProductImage>;
  /** 是否啟用 */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** 險種名稱 */
  name?: InputMaybe<Scalars['NonEmptyShortString']['input']>;
  /** 轉導連結前綴 */
  redirectPrefix?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePromotionInput = {
  campaign: UpdateCampaignInput;
  /** 行銷活動適用條件主表 ids */
  campaignConditionIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  maxValue?: InputMaybe<Scalars['Decimal']['input']>;
  /** 折扣的計算方法 */
  method?: InputMaybe<DiscountMethod>;
  /** 要套用折扣的目標費用 */
  target?: InputMaybe<DiscountTarget>;
  value?: InputMaybe<Scalars['Decimal']['input']>;
};

export type UpdateRentalCompanyInput = {
  /** 車行公司所在地址 */
  address?: InputMaybe<Scalars['String']['input']>;
  /** 車行公司所在行政區 */
  area?: InputMaybe<Scalars['String']['input']>;
  /** 認證狀態 */
  certifiedStatus?: InputMaybe<CertifiedStatus>;
  /** 車行公司所在縣市 */
  city?: InputMaybe<Scalars['String']['input']>;
  /** 平台分潤百分比 */
  commissionPercentage?: InputMaybe<Scalars['Int']['input']>;
  /** 車行公司名稱 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 店家政策 ID 清單。未變更時無需傳值。 */
  policyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** 車行公司統一編號 */
  taxIdNumber?: InputMaybe<Scalars['String']['input']>;
  /** 車行公司電話 */
  telephone?: InputMaybe<Scalars['ContactNumber']['input']>;
};

export type UpdateStationInput = {
  /** 站點所在地址 */
  address: Scalars['String']['input'];
  /** 站點所在行政區 */
  area: Scalars['String']['input'];
  /** 站點所在縣市 */
  city: Scalars['String']['input'];
  /** 結束營業時間 */
  close: Scalars['Time']['input'];
  /** 是否公開, 必填 */
  isPublic: Scalars['Boolean']['input'];
  /** 站點名稱 */
  name: Scalars['String']['input'];
  /** 開始營業時間 */
  open: Scalars['Time']['input'];
  /** 站點類型 (自助租還/門市租還) */
  type?: InputMaybe<StationType>;
};

export type UpdateVehicleHoldingCompanyInput = {
  /** 車輛所屬公司所在地址 */
  address?: InputMaybe<Scalars['String']['input']>;
  /** 車輛所屬公司所在行政區 */
  area?: InputMaybe<Scalars['String']['input']>;
  /** 車輛所屬公司所在縣市 */
  city?: InputMaybe<Scalars['String']['input']>;
  /** 車輛所屬公司代表人姓名 */
  companyChiefName?: InputMaybe<Scalars['String']['input']>;
  /** 公司負責人印章照片檔案格式 */
  companyChiefSealImageExtension?: InputMaybe<ImageFileExtension>;
  /** 公司負責人印章照片 */
  companyChiefSealImageFile?: InputMaybe<Scalars['Upload']['input']>;
  /** 公司印章照片檔案格式 */
  companySealImageExtension?: InputMaybe<ImageFileExtension>;
  /** 公司印章照片 */
  companySealImageFile?: InputMaybe<Scalars['Upload']['input']>;
  /** 車輛所屬公司名稱 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 車輛所屬公司統一編號 */
  taxIdNumber?: InputMaybe<Scalars['String']['input']>;
  /** 車輛所屬公司公司電話 */
  telephone?: InputMaybe<Scalars['ContactNumber']['input']>;
};

export type UpdateVehicleInput = {
  /** [即將棄用] 綁定車機的 sim_phone_number */
  deviceSimPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** 所屬車隊 id */
  fleetId?: InputMaybe<Scalars['Int']['input']>;
  /** 車型 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 車源 */
  origin?: InputMaybe<VehicleOrigin>;
  /** 車輛照片檔案格式 */
  photoExtension?: InputMaybe<ImageFileExtension>;
  /** 車輛照片 */
  photoFile?: InputMaybe<Scalars['Upload']['input']>;
  /** 所屬車行 id */
  rentalCompanyId?: InputMaybe<Scalars['Int']['input']>;
  /** 當日費率/日 (同天營業時間前還車) */
  rentalRate1?: InputMaybe<Scalars['Int']['input']>;
  /** 平日費率/日 */
  rentalRate2?: InputMaybe<Scalars['Int']['input']>;
  /** 假日費率/日 */
  rentalRate3?: InputMaybe<Scalars['Int']['input']>;
  /** 定價費率/日 */
  rentalRate4?: InputMaybe<Scalars['Int']['input']>;
  /** 週租費率/七日 */
  rentalRate5?: InputMaybe<Scalars['Int']['input']>;
  /** 月租費率/三十日 */
  rentalRate6?: InputMaybe<Scalars['Int']['input']>;
  /** 平日費率/時 */
  rentalRate7?: InputMaybe<Scalars['Int']['input']>;
  /** 假日費率/時 */
  rentalRate8?: InputMaybe<Scalars['Int']['input']>;
  /** 定價費率/時 */
  rentalRate9?: InputMaybe<Scalars['Int']['input']>;
  /** 座位數 */
  seats?: InputMaybe<Scalars['Int']['input']>;
  /** 所屬站點 id */
  stationId?: InputMaybe<Scalars['Int']['input']>;
  /** 車輛狀態 */
  status?: InputMaybe<VehicleStatus>;
  /** 車廠/車輛品牌 id */
  vehicleBrandId?: InputMaybe<Scalars['Int']['input']>;
  /** 所屬公司法人 id */
  vehicleHoldingCompanyId?: InputMaybe<Scalars['Int']['input']>;
  /** 車種/車型 id */
  vehicleTypeId?: InputMaybe<Scalars['Int']['input']>;
  /** 出廠年份，yyyy */
  yearOfManufacture?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateVehicleV2Input = {
  /** 車輛備註 (不會開放給顧客看到) */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** 車輛照片 */
  photo?: InputMaybe<VehiclePhotoInput>;
  /** 所屬站點 ID */
  stationId?: InputMaybe<Scalars['Int']['input']>;
  /** 車輛投放狀態 */
  status?: InputMaybe<VehicleStatus>;
  /** 所屬公司法人 ID */
  vehicleHoldingCompanyId?: InputMaybe<Scalars['Int']['input']>;
  /** 車型 ID (V2) */
  vehicleModelV2Id?: InputMaybe<Scalars['Int']['input']>;
  /** 車輛租金費率 */
  vehicleRentalRates?: InputMaybe<Array<VehicleRentalRateBaseInput>>;
  /** 出廠年份 (yyyy) */
  yearOfManufacture?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadBillingEtcFile = {
  /** ETC 檔案 */
  file: Scalars['Upload']['input'];
  /** 檔案名稱 */
  name: Scalars['String']['input'];
};

/** 需上傳第二張照片時，請使用 secondFile field */
export type UploadCustomerPhotos = {
  /** 照片檔案 */
  file: Scalars['Upload']['input'];
  /** 照片格式 */
  fileExtension: ImageFileExtension;
  /** 照片用途 */
  fileIntention: CustomerPhotoIntention;
  secondFile?: InputMaybe<Scalars['Upload']['input']>;
};

export type UploadOrderPhotos = {
  /** 類型 */
  category: AvailableOrderPhotoName;
  /** 照片格式 */
  fileExtension: ImageFileExtension;
  /** 照片檔案 */
  photos: Array<Scalars['Upload']['input']>;
};

export type UploadVehicleDirtyPhoto = {
  /** 照片格式 */
  fileExtension: ImageFileExtension;
  /** 髒污照片 */
  photo: Scalars['Upload']['input'];
};

export type UploadVehicleExteriorPhotos = {
  /** 照片格式 */
  fileExtension: ImageFileExtension;
  /** 左前照片 */
  leftFront: Scalars['Upload']['input'];
  /** 左後照片 */
  leftRear: Scalars['Upload']['input'];
  /** 右前照片 */
  rightFront: Scalars['Upload']['input'];
  /** 右後照片 */
  rightRear: Scalars['Upload']['input'];
};

export type UseVehicleTimeInput = {
  /** 預約用車結束時間 */
  endAt: Scalars['DateTime']['input'];
  /** 預約用車起始時間 */
  startAt: Scalars['DateTime']['input'];
};

export type VehicleBrandType = {
  __typename?: 'VehicleBrandType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type VehicleModelType = {
  __typename?: 'VehicleModelType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  origin: VehicleOrigin;
  seats: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  vehicleBrand: VehicleBrandType;
  vehicleBrandId: Scalars['Int']['output'];
  vehicleType: VehicleTypeType;
  vehicleTypeId: Scalars['Int']['output'];
};

export enum VehicleNumberOfSeatsOption {
  NineSeater = 'NINE_SEATER',
  SixOrMore = 'SIX_OR_MORE',
  SixToEight = 'SIX_TO_EIGHT',
  UnderFive = 'UNDER_FIVE'
}

export enum VehicleOrigin {
  Foreign = 'FOREIGN',
  Local = 'LOCAL'
}

export type VehiclePhotoInput = {
  /** 車輛照片檔案格式 */
  extension: ImageFileExtension;
  /** 車輛照片 */
  file: Scalars['Upload']['input'];
};

export enum VehicleRentalPlanType {
  Daily = 'DAILY',
  Hourly = 'HOURLY'
}

export type VehicleRentalRateBaseInput = {
  /** 費率 */
  rate: Scalars['Float']['input'];
  /** 對應 rental_plan 的車輛費率計畫 id, 限定 1 ~ 9 */
  rentalPlanId: Scalars['Int']['input'];
};

export enum VehicleStatus {
  Preparing = 'PREPARING',
  Ready = 'READY'
}

export type VehicleTypeType = {
  __typename?: 'VehicleTypeType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum VehicleYearOfManufactureOption {
  FiveOrMore = 'FIVE_OR_MORE',
  ThreeToFour = 'THREE_TO_FOUR',
  TwoOrLess = 'TWO_OR_LESS'
}

export type VerifyResult = ResponseError | VerifyToken;

export type VerifyToken = {
  __typename?: 'VerifyToken';
  token: Token;
};

export type CustomerLoginMutationVariables = Exact<{
  phoneNumber: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CustomerLoginMutation = { __typename?: 'Mutation', customerLogin: { __typename: 'LoginFail', message: string } | { __typename: 'LoginSuccess', token: { __typename?: 'Token', accessToken: string, tokenType: string } } | { __typename: 'UnverifiedPhone', message: string } };

export type SecondExampleQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type SecondExampleQuery = { __typename?: 'Query', getRentalCompanyExtraInfo: { __typename?: 'RentalCompanyExtraInfoResponse', rentalCompanyPolicyIds: Array<number>, rentalCompanyInsuranceProducts: Array<{ __typename?: 'InsuranceProduct', insuranceProductId: number, name: string, description: string, redirectLink: string, publicImageUrl?: string | null, basePrice?: number | null }> } };



export const CustomerLoginDocument = `
    mutation CustomerLogin($phoneNumber: String!, $password: String!) {
  customerLogin(caId: 2, phoneNumber: $phoneNumber, password: $password) {
    ... on LoginSuccess {
      __typename
      token {
        accessToken
        tokenType
      }
    }
    ... on LoginFail {
      __typename
      message
    }
    ... on UnverifiedPhone {
      __typename
      message
    }
  }
}
    `;

export const useCustomerLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CustomerLoginMutation, TError, CustomerLoginMutationVariables, TContext>) => {
    
    return useMutation<CustomerLoginMutation, TError, CustomerLoginMutationVariables, TContext>(
      {
    mutationKey: ['CustomerLogin'],
    mutationFn: (variables?: CustomerLoginMutationVariables) => fetcher<CustomerLoginMutation, CustomerLoginMutationVariables>(CustomerLoginDocument, variables)(),
    ...options
  }
    )};


useCustomerLoginMutation.fetcher = (variables: CustomerLoginMutationVariables, options?: RequestInit['headers']) => fetcher<CustomerLoginMutation, CustomerLoginMutationVariables>(CustomerLoginDocument, variables, options);

export const SecondExampleDocument = `
    query SecondExample($id: Int!) {
  getRentalCompanyExtraInfo(rentalCompanyId: $id) {
    rentalCompanyPolicyIds
    rentalCompanyInsuranceProducts {
      insuranceProductId
      name
      description
      redirectLink
      publicImageUrl
      basePrice
    }
  }
}
    `;

export const useSecondExampleQuery = <
      TData = SecondExampleQuery,
      TError = unknown
    >(
      variables: SecondExampleQueryVariables,
      options?: Omit<UseQueryOptions<SecondExampleQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<SecondExampleQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<SecondExampleQuery, TError, TData>(
      {
    queryKey: ['SecondExample', variables],
    queryFn: fetcher<SecondExampleQuery, SecondExampleQueryVariables>(SecondExampleDocument, variables),
    ...options
  }
    )};

useSecondExampleQuery.getKey = (variables: SecondExampleQueryVariables) => ['SecondExample', variables];


useSecondExampleQuery.fetcher = (variables: SecondExampleQueryVariables, options?: RequestInit['headers']) => fetcher<SecondExampleQuery, SecondExampleQueryVariables>(SecondExampleDocument, variables, options);
