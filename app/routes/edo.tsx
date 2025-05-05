import type { Route } from "./+types/home";
import EdoStateInfo from "~/edo/edo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BABS Nigeria Trade Mission - Edo State" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function KwaraPage() {
  return <EdoStateInfo />;
}
