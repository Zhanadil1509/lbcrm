export type GetApplicationsType = {
  dealLink: string;
};

export type GetDealDetailsType = {
  id: string | undefined;
};

export type StatusHistoryType = {
  status: string;
  updateTime: number;
  updatedBy: string;
};

export type DealDetailsType = {
  [key: string]:
    | string
    | string[]
    | number
    | { [key: string]: string | number }
    | StatusHistoryType[];
  requestData: { wallet_payment: string };
  user: { id: string | number };
  statusHistory: StatusHistoryType[];
};

export type GetFilteredApplicationsType = {
  queries: string;
};

export type EnabledApplicationsType = {
  enabled: boolean;
};

type DealItemType = {
  completed_requests: string[];
  _id: string;
  id: number;
  RUBBTCRequests: string[];
  username: string;
  invitedBy: string;
  activities: string[];
};

export interface DealsItemType {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  items: DealItemType[];
}
