// src/api/hooks.ts
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./apiClient";

// Define a hook for fetching user data
export const useExampleData = () => {
  return useQuery({
    queryKey: ["exampleData"],
    queryFn: () => fetchData(`users`),
  });
};

// Define a hook for fetching user data
export const useUserData = (userId: string) => {
  return useQuery({
    queryKey: ["userData"],
    queryFn: () => fetchData(`users/${userId}`),
  });
};
