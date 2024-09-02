import { createFileRoute } from "@tanstack/react-router";
import Donut from "../../components/Donut";
import BoxPlotChart from "../../components/BoxPlotChart";
import ChartNotification from "../../components/ChartNotification";
import HeatmapChart from "../../components/HeatMapChart";

export const Route = createFileRoute("/settings/profile")({
  component: () => (
    <div className="flex scroll-container gap-2 overflow-scroll h-[90vh] flex-wrap">
      {/* Each item will take up one-third of the width on medium screens and above */}
      <div className="w-full hover:scale-105 rounded-lg border shadow-md center md:w-1/3 p-2">
        <Donut />
      </div>
      <div className="w-full hover:scale-105 hover:z-5 rounded-lg border shadow-md center md:w-1/3 p-2">
        <BoxPlotChart />
      </div>
      <div className="w-full hover:scale-105 rounded-lg border shadow-md center md:w-1/3 p-2">
        <ChartNotification />
      </div>
      <div className="w-full hover:scale-105 rounded-lg border shadow-md center md:w-1/3 p-2">
        <HeatmapChart />
      </div>
    </div>
  ),
});
