import MinistryAgriculture from '~/partners/states/agriculture';
import type { Route } from './+types/home';
import MinistryWomenAffairs from '~/partners/states/women';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'BABS Nigeria Trade Mission - Ministry of Agriculture & Food Security' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function AgriculturePage() {
  return <MinistryAgriculture />;
}
