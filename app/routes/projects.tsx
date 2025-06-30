import type { Route } from "./+types/projects";
import ProjectsComponent from "../projects/projects";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Sean Weickel" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Projects() {
  return <ProjectsComponent />;
}
