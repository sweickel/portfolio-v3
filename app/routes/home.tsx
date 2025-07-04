import type { Route } from "./+types/home";
import Dashboard from "../dashboard/dashboard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Sean Weickel" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Home() {
  return <Dashboard />;
}
