import { createFileRoute } from "@tanstack/react-router";
import Donut from "../../components/Donut";
import BoxPlotChart from "../../components/BoxPlotChart";
import ChartNotification from "../../components/ChartNotification";
import HeatmapChart from "../../components/HeatMapChart";

export const Route = createFileRoute("/settings/profile")({
  component: () => (
<div className="flex flex-wrap gap-1 overflow-auto p-4">
  {/* Each item will adjust its width based on screen size */}
  <div className="w-full sm:w-1/2 lg:w-1/3 p-2 flex flex-col rounded-lg border shadow-md">
    <div className="text-lg font-semibold mb-2">Heading here</div>
    <Donut />
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 p-2 flex flex-col rounded-lg border shadow-md">
    <BoxPlotChart />
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 p-2 flex flex-col rounded-lg border shadow-md">
    <ChartNotification />
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 p-2 flex flex-col rounded-lg border shadow-md">
    <HeatmapChart />
  </div>
</div>

  ),
});
