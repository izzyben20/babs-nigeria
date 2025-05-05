import type { Route } from './+types/home';
import PartnerShowcasePage from '~/partners/partners';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Partners | BABS Nigeria Trade Mission' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function PartnersPage() {
  return <PartnerShowcasePage />;
}
