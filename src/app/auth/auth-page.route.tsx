import { createElement } from "react";
import { RouteObject } from "react-router-dom";
//import { sessionModel, sessionQueries } from "~entities/session";
//import { pathKeys } from "~shared/lib/react-router";
import { AuthPage } from "./AuthPage.tsx";
import { ROUTES_NAV } from "../../shared/constants/common.ts";

export const authPageRoute: RouteObject = {
  path: ROUTES_NAV.auth,
  children: [
    {
      index: true,
      element: createElement(AuthPage),
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
