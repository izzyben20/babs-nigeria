import ThemeCard from '~/welcome/components/ThemeCard';
import EventHeroSection from './components/EventHeroSection';
import ProposedItinerary from './components/ProposedItinery';
import EventObjectives from './components/EventObjectives';
import ParticipationDetails from './components/ParticipationDetails';

export function Events() {
  return (
    <>
      <EventHeroSection />
      {/* <ThemeCard /> */}
      <EventObjectives />
      <ParticipationDetails />
      <ProposedItinerary />
    </>
  );
}
