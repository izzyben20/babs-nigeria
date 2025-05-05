import ContactUs from "~/contact/contact";
import type { Route } from "./+types/home";
import EdoStateInfo from "~/edo/edo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BABS Nigeria Trade Mission - Contact Us" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ContactPage() {
  return <ContactUs />;
}
