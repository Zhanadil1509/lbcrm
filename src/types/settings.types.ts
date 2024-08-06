export interface BotConfigParamsTypes {
  currency: string;
  network: string;
  address: string;
  activeRequests: string[];
  isEnabled: boolean;
}

export interface WalletsUpdateParamsTypes {
  toCreate: WalletsConfigParamsTypes[] | undefined;
  toUpdate: WalletsConfigParamsTypes[] | undefined;
  toDelete: WalletsConfigParamsTypes[] | undefined;
}

export interface WalletsConfigParamsTypes {
  currency: string;
  network: string;
  address: string;
  completedRequests: string[];
  activeRequests: number;
  isEnabled: boolean;
}

export interface DefaultConfigParamsTypes {
  scope?: string;
  exchangeRate: number | string;
  wallet?: string;
  availableApiList?: string[];
  minFiatAmount: number | string;
  avaliableCryptoCurrencies: string[];
  maxFiatAmount: number | string;
  activeApiName?: string;
  options?: {
    option1?: boolean;
    option2?: string;
  };
}
