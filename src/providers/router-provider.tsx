import { Suspense } from "react";
// import { ErrorPage } from "@/pages/error-page/error-page"; to be created
import {
  createHashRouter,
  RouterProvider as RRProvider,
} from "react-router-dom";
import { AuthOutlet } from "../components/auth-wrapper";

// https://github.com/daltonmenezes/electron-router-dom
// need to use hashRouter in product we got 404 error

// https://reactrouter.com/en/main/route/lazy
const router = createHashRouter([
  {
    path: "/",
    async lazy() {
      //const { LoginPage } = await import("../pages/login");
      const { LoginPage2 } = await import("../pages/login2");
      return {
        Component: LoginPage2,
      };
    },
  },

  {
    path: "/home",
    element: (
      <div>
        <Suspense fallback={<div className="fixed inset-0">Loading</div>}>
          <AuthOutlet />
        </Suspense>
      </div>
    ),
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        async lazy() {
          const { Home } = await import("../pages/home");

          return {
            Component: Home,
          };
        },
      },
      //   {
      //     path: "profile",
      //     async lazy() {
      //       const { ProfilePage } = await import(
      //         "@/pages/profile-page.tsx"
      //       );
      //       return {
      //         Component: ProfilePage,
      //       };
      //     },
      //   },
    ],
  },
]);

export function RouterProvider() {
  return <RRProvider router={router} />;
}
