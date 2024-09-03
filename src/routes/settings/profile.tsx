import { createFileRoute } from "@tanstack/react-router";
import BoxPlotChart from "../../components/BoxPlotChart";
import ChartNotification from "../../components/ChartNotification";
import Donut from "../../components/Donut";
import HeatmapChart from "../../components/HeatMapChart";

export const Route = createFileRoute("/settings/profile")({
  component: () => (
    <div className="flex scroll-container gap-0 overflow-scroll h-[95%] flex-wrap p-4">
      <div className="w-full mb-2 p-4  hover:z-10 rounded-lg border border-gray-300 shadow-lg bg-white transition-transform duration-300">
        <HeatmapChart />
      </div>
      {/* Each item will take up one-half of the width on medium screens and above */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-4  hover:z-10 rounded-lg border border-gray-300 shadow-lg bg-white transition-transform duration-300">
        <Donut />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4  hover:z-10 rounded-lg border border-gray-300 shadow-lg bg-white transition-transform duration-300">
        <BoxPlotChart />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4  hover:z-10 rounded-lg border border-gray-300 shadow-lg bg-white transition-transform duration-300">
        <ChartNotification />
      </div>
    </div>
  ),
});
