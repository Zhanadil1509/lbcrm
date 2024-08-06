export type UserItemType = {
  [key: string]: string[] | number | string;
  completed_requests: string[];
};

export interface UsersItemType {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  items: UserItemType[];
}

export type UserDetailsObjectType = {
  [key: string]: string | number | string[] | boolean;
  completed_requests: string[];
};

export interface UserDetailsType {
  [key: string]: UsersItemType;
}

export type UpdateUserRefType = {
  id: string;
  newBalance: number;
};
