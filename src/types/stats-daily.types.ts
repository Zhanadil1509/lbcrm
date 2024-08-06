type DailyItemType = {
  toLowerCase(): unknown;
  count: number;
  from: number;
  to: number;
};

export interface DailyRequestsType {
  [key: string]: DailyItemType;
}
