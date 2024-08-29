import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "../../components/AboutPage";

export const Route = createFileRoute("/_about/about")({
  component: AboutPage,
});
