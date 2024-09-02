import { createFileRoute } from "@tanstack/react-router";
import BoxPlotChart from "../../components/BoxPlotChart";

export const Route = createFileRoute("/_layout2/ChildOfLayout3")({
  component: () => (
    <div>
      I am child of Layout 2<BoxPlotChart />
    </div>
  ),
});
