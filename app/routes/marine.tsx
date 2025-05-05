import MinistryMarine from '~/partners/states/marine';
import type { Route } from './+types/home';
import MinistryWomenAffairs from '~/partners/states/women';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'BABS Nigeria Trade Mission - Ministry of Marine & Blue Economy' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function MarinePage() {
  return <MinistryMarine />;
}
