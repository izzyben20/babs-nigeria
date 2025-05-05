import EbonyiStateInfo from "~/ebonyi/ebonyi";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BABS Nigeria Trade Mission - Ebonyi State" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function KwaraPage() {
  return <EbonyiStateInfo />;
}
