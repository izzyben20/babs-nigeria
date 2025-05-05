import type { Route } from './+types/home';
import MinistryBudgetPlanning from '~/partners/states/budget';

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        'BABS Nigeria Trade Mission - Ministry of Budget & National Planning',
    },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function BudgetPage() {
  return <MinistryBudgetPlanning />;
}
