import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./apiClient";


export const useExampleData = () => {
  return useQuery({
    queryKey: ["exampleData"],
    queryFn: () => fetchData(`users`),
    staleTime: 60000 // Keep data fresh for 60 seconds
  });
};



export const useUserData = (userId: string) => {
  return useQuery({
    queryKey: ["userData"],
    queryFn: () => fetchData(`users/${userId}`),
  });
};
