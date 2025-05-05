import RegistrationForm from '~/registration/registration';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Events | Registration' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function RegistrationPage() {
  return <RegistrationForm />;
}
