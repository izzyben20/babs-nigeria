import type { Route } from "./+types/home";
import { Events } from "../events/events";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Events | BABS Nigeria Trade Mission" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function EventPage() {
  return <Events />;
}
