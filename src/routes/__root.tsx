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
            <div className="h-[10vh] font-semibold text-2xl w-full">
              <div className="w-full">{pageTitle}</div>
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
