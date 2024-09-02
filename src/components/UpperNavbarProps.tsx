import { Outlet } from "@tanstack/react-router";
import React from "react";

interface UpperNavbarProps {
  pageTitle: string;
}

const UpperNavbar: React.FC<UpperNavbarProps> = ({ pageTitle }) => {
  return (
    <div className="flex-1 flex flex-col w-full h-[100vh] justify-between items-center p-4 bg-gray-100">
      <div className="mb-2 py-2 flex justify-between font-bold text-2xl w-full">
        <div className="center">{pageTitle}</div>
        <div className="center">
          <p >
            {" "}
            <img
              className="w-10 cursor-pointer h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="https://picsum.photos/20"
              alt="Bordered avatar"
            />
          </p>
        </div>
      </div>
      <div className="h-[90vh] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default UpperNavbar;
