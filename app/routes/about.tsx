import type { Route } from "./+types/about";
import AboutComponent from "../about/about";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Sean Weickel" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function About() {
  return <AboutComponent />;
}
