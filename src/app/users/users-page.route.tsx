import { createElement } from "react";
import { RouteObject } from "react-router-dom";
//import { sessionModel, sessionQueries } from "~entities/session";
//import { pathKeys } from "~shared/lib/react-router";
import { UsersPage } from "./UsersPage.tsx";
import { ROUTES_NAV } from "../../shared/constants/common.ts";
import { UserDetailsPage } from "./UserDetailsPage.tsx";

export const usersPageRoute: RouteObject = {
  path: ROUTES_NAV.users,
  children: [
    {
      index: true,
      element: createElement(UsersPage),
    },
    {
      path: `${ROUTES_NAV.users}/:id`,
      element: createElement(UserDetailsPage),
      /*loader: async (args) => {
                            if (!sessionModel.hasToken()) {
                                return redirect(pathKeys.login());
                            }

                            sessionQueries.userService.prefetchQuery();
                            return args;
                        },*/
    },
  ],
};
