import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData, postData } from "./apiClient";

export const useExampleData = () => {
  return useQuery({
    queryKey: ["exampleData"],
    queryFn: () => fetchData(`users`),
    staleTime: 60000, 
  });
};

export const useUserData = (userId: string) => {
  return useQuery({
    queryKey: ["userData"],
    queryFn: () => fetchData(`users/${userId}`),
  });
};

export const usePostUserData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newUserData: any) => postData("users", newUserData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userData"] });
    },
  });
};
