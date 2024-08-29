import { createLazyFileRoute } from "@tanstack/react-router";
import IndexPage from "../components/IndexPage"; // Importing the new component

export const Route = createLazyFileRoute("/")({
  component: IndexPage, // Using the new component here
});
