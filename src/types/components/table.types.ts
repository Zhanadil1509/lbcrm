import { UserDetailsObjectType, UserItemType } from "../users.types.ts";

export type ColumnTableType = {
  [key: string]: string;
};

export type ColumnsDataType = {
  [key: string]: string | string[];
};

export type IColumnsTable = {
  dealLink: string;
  className?: string;
  hasFilter?: boolean;
  isUser?: boolean | undefined;
  columns: ColumnTableType;
  columnsData: UserItemType[] | UserDetailsObjectType[] | undefined;
  totalPages: number | undefined;
};
