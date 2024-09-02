import { useLocation } from "@tanstack/react-router";

const usePageTitle = () => {
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

export default usePageTitle;
