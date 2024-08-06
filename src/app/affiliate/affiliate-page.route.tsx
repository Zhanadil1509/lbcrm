import { createElement } from "react";
import { RouteObject } from "react-router-dom";
//import { sessionModel, sessionQueries } from "~entities/session";
//import { pathKeys } from "~shared/lib/react-router";
import { AffiliatePage } from "./AffiliatePage.tsx";
import { ROUTES_NAV } from "../../shared/constants/common.ts";
import { AffiliatePageDetails } from "./AffilatePageDetails.tsx";

export const affiliatePageRoute: RouteObject = {
  path: ROUTES_NAV.affRubBtc,
  children: [
    {
      index: true,
      element: createElement(AffiliatePage),
    },
    {
      path: `${ROUTES_NAV.affRubBtc}/:id`,
      element: createElement(AffiliatePageDetails),
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
