import MinistryLivestock from '~/partners/states/livestock';
import type { Route } from './+types/home';
import MinistryWomenAffairs from '~/partners/states/women';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'BABS Nigeria Trade Mission - Ministry of Livestock Development' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function LivestockPage() {
  return <MinistryLivestock />;
}
