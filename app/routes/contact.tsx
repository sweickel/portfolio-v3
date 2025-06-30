import type { Route } from "./+types/contact";
import ContactComponent from "../contact/contact";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Sean Weickel" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Contact() {
  return <ContactComponent />;
}
