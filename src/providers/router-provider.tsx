import { Suspense } from "react";
// import { ErrorPage } from "@/pages/error-page/error-page"; to be created
import {
  createBrowserRouter,
  RouterProvider as RRProvider,
} from "react-router-dom";
import { AuthOutlet } from "../components/auth-wrapper";

// https://reactrouter.com/en/main/route/lazy
const router = createBrowserRouter([
  {
    path: "login",
    async lazy() {
      const { LoginPage } = await import("../pages/login");
      return {
        Component: LoginPage,
      };
    },
  },

  {
    path: "main_window",
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
