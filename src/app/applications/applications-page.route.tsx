import { createElement } from "react";
import { RouteObject } from "react-router-dom";
//import { sessionModel, sessionQueries } from "~entities/session";
//import { pathKeys } from "~shared/lib/react-router";
import { ApplicationPage } from "./ApplicationPage.tsx";
import { ROUTES_NAV } from "../../shared/constants/common.ts";
import { ApplicationPageDetails } from "./ApplicationPageDetails.tsx";

export const applicationsPageRoute: RouteObject = {
  children: [
    {
      path: ROUTES_NAV.rubBtc,
      element: createElement(ApplicationPage),
    },
    {
      path: `${ROUTES_NAV.rubBtc}/:id`,
      element: createElement(ApplicationPageDetails),
      /*loader: async (args) => {
                            if (!sessionModel.hasToken()) {
                                return redirect(pathKeys.login());
                            }

                            sessionQueries.userService.prefetchQuery();
                            return args;
                        },*/
    },
    {
      path: ROUTES_NAV.crRub,
      element: createElement(ApplicationPage),
    },
    {
      path: `${ROUTES_NAV.crRub}/:id`,
      element: createElement(ApplicationPageDetails),
      /*loader: async (args) => {
                            if (!sessionModel.hasToken()) {
                                return redirect(pathKeys.login());
                            }

                            sessionQueries.userService.prefetchQuery();
                            return args;
                        },*/
    },
    {
      path: ROUTES_NAV.crFixed,
      element: createElement(ApplicationPage),
    },
    {
      path: `${ROUTES_NAV.crFixed}/:id`,
      element: createElement(ApplicationPageDetails),
      /*loader: async (args) => {
                            if (!sessionModel.hasToken()) {
                                return redirect(pathKeys.login());
                            }

                            sessionQueries.userService.prefetchQuery();
                            return args;
                        },*/
    },
    {
      path: ROUTES_NAV.crQuick,
      element: createElement(ApplicationPage),
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
