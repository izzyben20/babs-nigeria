import KwaraStateInfo from "~/kwara/kwara";
import type { Route } from "./+types/home";
import LagosStateInfo from "~/lagos/lagos";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BABS Nigeria Trade Mission - Kwara State" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function KwaraPage() {
  return <KwaraStateInfo />;
}
