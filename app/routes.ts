import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('events', 'routes/events.tsx'),
  route('registration', 'routes/registration.tsx'),
  route('partners', 'routes/partners.tsx'),
  route('partners/lagos', 'routes/lagos.tsx'),
  route('partners/osun', 'routes/osun.tsx'),
  route('partners/kwara', 'routes/kwara.tsx'),
  route('partners/plateau', 'routes/plateau.tsx'),
  route('partners/edo', 'routes/edo.tsx'),
  route('partners/ebonyi', 'routes/ebonyi.tsx'),
  route('partners/ministry-women-affairs', 'routes/women.tsx'),
  route('partners/ministry-agriculture-food-security', 'routes/agriculture.tsx'),
  route('partners/ministry-livestock-development', 'routes/livestock.tsx'),
  route('partners/ministry-marine-blue-economy', 'routes/marine.tsx'),
  route('partners/ministry-budget-national-planning', 'routes/budget.tsx'),
  route('contact-us', 'routes/contact.tsx'),
  route('attendees', 'routes/attendees.tsx'),
] satisfies RouteConfig;
