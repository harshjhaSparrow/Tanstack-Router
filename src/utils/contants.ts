import {
  HomeIcon,
  InfoIcon,
  SettingsIcon,
  UserIcon
} from "lucide-react";

export const navItems = [
  { to: "/", label: "Home", icon: InfoIcon },
  { to: "/about", label: "About", icon: InfoIcon },
  { to: "/posts", label: "Posts", icon: InfoIcon },
  { to: "/status", label: "Status", icon: UserIcon },
  { to: "/user", label: "User", icon: UserIcon },
  { to: "/user/123", label: "User/123", icon: UserIcon },
  { to: "/user/123/edit", label: "User/123/edit", icon: UserIcon },
  { to: "/ChildOfLayout", label: "ChildOfLayout", icon: HomeIcon },
  { to: "/ChildOfLayout2", label: "ChildOfLayout2", icon: HomeIcon },
  { to: "/ChildOfLayout3", label: "ChildOfLayout3", icon: HomeIcon },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
  {
    to: "/settings/notifications",
    label: "Notifications",
    icon: SettingsIcon,
  },
  { to: "/settings/profile", label: "Profile", icon: SettingsIcon },
];
