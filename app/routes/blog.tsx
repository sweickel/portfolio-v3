import type { Route } from "./+types/about";
import BlogComponent from "../blog/blog";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Sean Weickel" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Blog() {
  return <BlogComponent />;
}
