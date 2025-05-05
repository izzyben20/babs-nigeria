import OsunStateInfo from '~/osun/osun';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'BABS Nigeria Trade Mission - Lagos State' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function LagosPage() {
  return <OsunStateInfo />;
}
