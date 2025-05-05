import type { Route } from "./+types/home";
import LagosStateInfo from "~/lagos/lagos";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BABS Nigeria Trade Mission - Lagos State" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function LagosPage() {
  return <LagosStateInfo />;
}
