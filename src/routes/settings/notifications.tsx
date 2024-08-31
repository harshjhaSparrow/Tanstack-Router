import { createFileRoute } from "@tanstack/react-router";
import ChartNotification from "../../components/ChartNotification";

export const Route = createFileRoute("/settings/notifications")({
  component: () => (
    <div>
      <ChartNotification
        options={{
          chart: {
            id: "custom-bar",
          },
          xaxis: {
            categories: [2000, 2001, 2002, 2003, 2004],
          },
        }}
        series={[
          {
            name: "custom-series",
            data: [10, 20, 30, 40, 50],
          },
        ]}
        type="line"
        width="600"
        height="400"
        gradientColors={[
          { from: "#FF5733", to: "#FFC300" },
          { from: "#33FF57", to: "#3380FF" },
        ]}
      />
    </div>
  ),
});
