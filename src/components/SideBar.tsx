import { Link } from "@tanstack/react-router";
import { Activity } from "lucide-react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { toggle } from "../redux/slices/exampleSlice";
import { navItems } from "../utils/contants";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector((state: any) => state.example.collapsed);

  return (
    <div
      className={`sidebar  ${collapsed ? "w-20 px-2" : "px-3 w-64"} bg-[#111827]  text-white h-screen flex flex-col transition-all duration-300`}
    >
      <button
        className="collapse-toggle center py-3  p-2 text-center border-b border-gray-600"
        onClick={() => dispatch(toggle(!collapsed))}
      >
        {collapsed ? (
          <img
            width={40}
            height={40}
            src="https://www.sparrowrms.in/infinity/wp-content/uploads/2020/12/sparrow-rms-logo.png"
            alt=""
          />
        ) : (
          <img
            width={40}
            height={40}
            src="https://www.sparrowrms.in/infinity/wp-content/uploads/2020/12/sparrow-rms-logo.png"
            alt=""
          />
        )}
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
                    "bg-primaryBlue  active:bg-primaryBlue py-1 text-white font-extrabold",
                }}
                activeOptions={{
                  exact: true,
                }}
                to={item.to}
                className={`nav-link w-full hover:bg-[#949cb6] flex gap-4 items-center rounded-xl p-2 sm:p-3 lg:p-4 py-2 sm:py-3 ${
                  collapsed ? "justify-center" : "justify-start"
                } hover:text-white hover:font-extrabold text-xs sm:text-sm lg:text-base`}
              >
                {item.icon && (
                  <div
                    className={`text-xs sm:text-sm lg:text-base ${collapsed ? "flex justify-center items-center" : ""}`}
                  >
                    <item.icon size={20} />
                  </div>
                )}
                <div
                  className={`text-xs sm:text-sm lg:text-base ${collapsed ? "hidden" : ""}`}
                >
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
