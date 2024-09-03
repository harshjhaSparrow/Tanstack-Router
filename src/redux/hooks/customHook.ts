import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { toggle } from "../slices/exampleSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

export const usePageTitle = () => {
  const { pathname } = useLocation();
  const getTitle = () => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/about":
        return "About Us";
      case "/posts":
        return "Posts";
      case "/status":
        return "Status";
      case "/user":
        return "User Profile";
      case "/settings":
        return "Settings";
      case "/settings/notifications":
        return "Notifications";
      case "/settings/profile":
        return "Profile";
      default:
        return "My Application";
    }
  };
  return getTitle();
};

export const useToggleOnResize = () => {
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector((state: any) => state.example.collapsed);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1300 && !collapsed) {
        dispatch(toggle(true));
      } else if (window.innerWidth >= 1300 && collapsed) {
        dispatch(toggle(false));
      }
    };

    // Initial check
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch, collapsed]);
};
