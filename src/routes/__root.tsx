import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 fixed flex gap-2">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
        >
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/posts" className="[&.active]:font-bold">
          Posts
        </Link>
        <Link to="/status" className="[&.active]:font-bold">
          Status
        </Link>
        <Link
          to="/user"
          activeOptions={{ exact: true }}
          className="[&.active]:font-bold"
        >
          User
        </Link>
        <Link
          to="/user/123"
          activeOptions={{ exact: true }}
          className="[&.active]:font-bold"
        >
          User/12
        </Link>
        <Link
          to="/user/123/edit"
          activeOptions={{ exact: true }}
          className="[&.active]:font-bold"
        >
          User/123/edit
        </Link>
        <Link to="/ChildOfLayout" className="[&.active]:font-bold">
          ChildOfLayout
        </Link>
        <Link to="/ChildOfLayout2" className="[&.active]:font-bold">
          ChildOfLayout2
        </Link>
        <Link to="/ChildOfLayout3" className="[&.active]:font-bold">
          ChildOfLayout3
        </Link>
        <Link
          to="/settings"
          activeOptions={{ exact: true }}
          className="[&.active]:font-bold"
        >
          Settings
        </Link>
        <Link
          to="/settings/notifications"
          activeOptions={{ exact: true }}
          className="[&.active]:font-bold"
        >
          notifications
        </Link>
        <Link
          to="/settings/profile"
          activeOptions={{ exact: true }}
          className="[&.active]:font-bold"
        >
          profile
        </Link>
      </div>
      <hr />
      <div className="h-screen w-full flex justify-center items-center">
        <Outlet />
      </div>

      <TanStackRouterDevtools />
    </>
  ),
});
