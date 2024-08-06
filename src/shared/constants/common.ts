export const ROUTES_NAV = {
  home: "/",
  users: "/users",
  rubBtc: "/rubBtc",
  crRub: "/cryptoRub",
  crFixed: "/cryptoCrypto",
  crQuick: "/cr-quick",
  affRubBtc: "/partnerRequests",

  auth: "/auth",
};

export const sidebarMenu = [
  { link: ROUTES_NAV.home, _id: 1, label: "Главная" },
  { link: ROUTES_NAV.users, _id: 2, label: "Пользователи" },
  { link: ROUTES_NAV.rubBtc, _id: 3, label: "Заявки RUB-BTC" },
  { link: ROUTES_NAV.crRub, _id: 4, label: "Заявки Crypto-RUB" },
  { link: ROUTES_NAV.crFixed, _id: 5, label: "Заявки Cr-Cr" },
  // { link: ROUTES_NAV.crQuick, _id: 6, label: "Заявки Cr-Cr Quickex" },
  { link: ROUTES_NAV.affRubBtc, _id: 7, label: "Партнерский RUB-BTC" },
];

export const OBJECT_STATS = {
  users: "users",
  cryptoRub: "cryptoRub",
  cryptoCrypto: "cryptoCrypto",
  rubBtc: "rubBtc",
  partnerPayments: "partnerPayments",
};

export const statsHomePage = [
  { stats: OBJECT_STATS.users, label: "Пользователи", _id: 1 },
  { stats: OBJECT_STATS.cryptoRub, label: "Заявки Crypto-RUB", _id: 2 },
  { stats: OBJECT_STATS.cryptoCrypto, label: "Заявки Cr-Cr", _id: 3 },
  { stats: OBJECT_STATS.rubBtc, label: "Заявки RUB-BTC", _id: 3 },
  { stats: OBJECT_STATS.partnerPayments, label: "Заявки Cr-Cr", _id: 3 },
];
