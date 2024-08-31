import { createFileRoute } from "@tanstack/react-router";
import Donut from "../../components/Donut";

export const Route = createFileRoute("/settings/profile")({
  component: () => (
    <div>
      Hello /settings/profile!
      <Donut />
    </div>
  ),
});
