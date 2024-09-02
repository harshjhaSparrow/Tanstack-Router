import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Sidebar from "../components/SideBar";
import usePageTitle from "../redux/hooks/customHook";

export const Route = createRootRoute({
  component: () => {
    const pageTitle = usePageTitle();
    return (
      <>
        <div className="flex ">
          <Sidebar />
          <div className="flex-1 flex flex-col w-full h-[100vh] justify-between items-center p-4 bg-gray-100">
            <div className="mb-2 py-2 flex justify-between font-bold text-2xl w-full">
              <div className="center">{pageTitle}</div>
              <div className="center">
                <img
                  className="w-10 cursor-pointer h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src="https://picsum.photos/20"
                  alt="Bordered avatar"
                />
              </div>
            </div>
            <div className="h-[90vh] w-full">
              <Outlet />
            </div>
          </div>
        </div>
        <TanStackRouterDevtools />
      </>
    );
  },
});
