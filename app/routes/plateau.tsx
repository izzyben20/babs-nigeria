import type { Route } from './+types/home';
import PlateauStateInfo from '~/plateau/plateau';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'BABS Nigeria Trade Mission - Plateau State' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function LagosPage() {
  return <PlateauStateInfo />;
}
