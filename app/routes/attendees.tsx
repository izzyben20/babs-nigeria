import type { Route } from './+types/home';
import SummitCompanies from '~/attendees/attendees';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'BABS Nigeria Trade Mission - Attendees' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function AttendeesPage() {
  return <SummitCompanies />;
}
