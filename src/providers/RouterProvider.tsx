import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import { MainLayoutUi, GuestLayoutUi } from "components/layouts";
import { homePageRoute } from "app/home";
import { authPageRoute } from "../app/auth";
import { usersPageRoute } from "../app/users";
import { applicationsPageRoute } from "../app/applications";
import { affiliatePageRoute } from "../app/affiliate";

function BubbleError() {
  const error = useRouteError();
  if (error) throw error;
  return null;
}

const router = createBrowserRouter([
  {
    errorElement: <BubbleError />,
    children: [
      {
        element: <MainLayoutUi />,
        children: [
          homePageRoute,
          usersPageRoute,
          applicationsPageRoute,
          affiliatePageRoute,
        ],
      },
      {
        element: <GuestLayoutUi />,
        children: [authPageRoute],
      },
      /*{
              loader: async () => redirect(pathKeys.page404()),
              path: "*",
            },*/
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
