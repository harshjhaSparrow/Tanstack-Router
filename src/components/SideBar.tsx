import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { navItems } from "../utils/contants";
import { Activity } from "lucide-react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`sidebar  ${collapsed ? "w-20 px-2" : "px-3 w-64"} bg-[#111827]  text-white h-screen flex flex-col transition-all duration-300`}
    >
      <button
        className="collapse-toggle center py-3 bg-[#111827] p-2 text-center border-b border-gray-600"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <Activity /> : <Activity />}
      </button>
      <nav className="flex-1 mt-4">
        {navItems?.map((item: any) => (
          <div
            className={`flex gap-1 items-center ${collapsed ? "center" : ""} `}
          >
            <div className="py-1 w-full">
              <Link
                key={item.to}
                activeProps={{
                  className:
                    "bg-[#3e6fff] hover:bg-[#949cb6] active:bg-[#3e6fff] py-1 text-white font-extrabold",
                }}
                activeOptions={{
                  exact: true, // Match the exact path
                }}
                to={item.to}
                className={`nav-link w-full flex gap-4  sm rounded-xl  hover:text-white hover:font-extrabold items-center p-3 py-4 ${collapsed ? "justify-center" : "justify-start"}`}
              >
                {item.icon && (
                  <div className={`text-sm ${collapsed ? "center" : ""}`}>
                    <item.icon size={20} />
                  </div>
                )}
                <div className={`text-sm ${collapsed ? "hidden" : ""}`}>
                  {item.label}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
