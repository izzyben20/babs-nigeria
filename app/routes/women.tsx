import type { Route } from './+types/home';
import MinistryWomenAffairs from '~/partners/states/women';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'BABS Nigeria Trade Mission - Ministry of Women Affairs' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function WomenAffairsPage() {
  return <MinistryWomenAffairs />;
}
