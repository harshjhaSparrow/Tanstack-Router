import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Sidebar from "../components/SideBar";
import UpperNavbar from "../components/UpperNavbarProps";
import usePageTitle from "../redux/hooks/customHook";

export const Route = createRootRoute({
  component: () => {
    const pageTitle = usePageTitle();
    return (
      <>
        <div className="flex ">
          <Sidebar />
          <UpperNavbar pageTitle={pageTitle} />
        </div>
        <TanStackRouterDevtools />
      </>
    );
  },
});
