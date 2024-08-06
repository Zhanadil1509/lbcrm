/*export const columnsTableApps: ColumnTableType[] = [
  {
    title: "Details",
    srOnly: true,
    link: "#",
  },
  {
    title: "User ID",
  },
  {
    title: "Chat ID",
  },
  {
    title: "Info",
  },
];

export const columnsTableDetailsUsers: ColumnTableType[] = [
  {
    title: "Details",
    srOnly: true,
    link: "#",
  },
  {
    title: "Дата обмена",
  },
  {
    title: "ID обмена",
  },
  {
    title: "Тип обмена",
  },
  {
    title: "Статус",
  },
];*/

export const columnsDataApps: { [key: string]: string } = {
  link: "_id",
  user_id: "id",
  chat_id: "user.id",
  amount_payable: "amount_payable",
  provider: "apiProvider",
  requisites: "requestData.wallet_payment",
  status: "indeed",
};

export const columnsDataStatus: { [key: string]: string } = {
  canceledByUser: "canceled by user",
  canceledByOperator: "canceled by operator",
  error: "error",
  completed: "completed",
  expired: "expired",
  created: "created",
};

export const columnsDataUserDetails = {
  //link: "id",
  date_change: "createdAt",
  id_change: "requestData",
  type_change: "direction", // requestType
  status: "indeed",
};

export const columnsDataDeals = {
  link: "id",
  user_id: "id",
  chat_id: "botId",
  info: "completed_requests",
};

export const columnsDataUsers: { [key: string]: string } = {
  link: "id",
  user_id: "id",
  chat_id: "botId",
  created_at: "createdAt",
  invited_by: "invitedBy",
  invite_code: "refLink",
  ref_balance: "refBalance",
  total_deals: "completed_requests",
};
