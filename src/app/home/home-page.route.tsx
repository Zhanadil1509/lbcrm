import { createElement } from "react";
import { RouteObject } from "react-router-dom";
//import { sessionModel, sessionQueries } from "~entities/session";
//import { pathKeys } from "~shared/lib/react-router";
import { HomePage } from "./HomePage.tsx";
import { ROUTES_NAV } from "../../shared/constants/common.ts";

export const homePageRoute: RouteObject = {
  path: ROUTES_NAV.home,
  children: [
    {
      index: true,
      element: createElement(HomePage),
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
