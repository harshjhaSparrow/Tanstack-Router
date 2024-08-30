import { createFileRoute } from "@tanstack/react-router";
import { useExampleData } from "../../../redux/services/ApiCallHooks";

export const Route = createFileRoute("/(user)/user/")({
  component: () => {
    const {
      data,
      dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount,
      failureReason,
      fetchStatus,
      isError,
      isFetched,
      isFetchedAfterMount,
      isFetching,
      isInitialLoading,
      isLoading,
      isLoadingError,
      isPaused,
      isPending,
      isPlaceholderData,
      isRefetchError,
      isRefetching,
      isStale,
      isSuccess,
      refetch,
      status,
    } = useExampleData();
    console.log("dadatata", data?.users);

    if (isLoading) {
      return <div>Loading...</div>; // Show a loading message or spinner while data is being fetched
    }

    if (error) {
      return <div>An error occurred: {error.message}</div>; // Show an error message if the request fails
    }

    if (!data) {
      return <div>No data available.</div>; // Optional: Handle case where data is null or undefined
    }

    return (
      <div>
        <h1>Hello /user/!</h1>
        {data?.users?.map((item: any, index: any) => {
          return (
            <div
              onClick={() => {
                refetch();
              }}
              className="cursor-pointer"
            >
              {item.firstName}
            </div>
          );
        })}
      </div>
    );
  },
});
