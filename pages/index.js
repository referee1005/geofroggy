import dynamic from 'next/dynamic';
const PagesMetaHead = dynamic(() => import('@/components/PagesMetaHead'), { ssr: true });
const AboutUs = dynamic(() => import('@/components/landing/About'));
const Favourite = dynamic(() => import('@/components/landing/Favourite'));
const Places = dynamic(() => import('@/components/landing/Places'));
const SpotlightStories = dynamic(() => import('@/components/landing/SpotlightStories'));
const CulturalHeritage = dynamic(() => import('@/components/landing/CulturalHeritage'));
const JoinAdventure = dynamic(() => import('@/components/landing/JoinAdventure'));
const CommunityVibes = dynamic(() => import('@/components/landing/CommunityVibes'));
const Testimonial = dynamic(() => import('@/components/landing/Testimonial'));
const InspireConnection = dynamic(() => import('@/components/landing/InspireConnection'));
const Subscription = dynamic(() => import('@/components/landing/Subscription'));

export const Home = () => {
  return (
    <div className="mx-auto pt-20" >
      <PagesMetaHead title="Home" />
      <Places />
      <AboutUs />
      <Favourite />
      <SpotlightStories />
      <CulturalHeritage />
      <JoinAdventure />
      <CommunityVibes />
      <Testimonial />
      <InspireConnection />
      <Subscription />
    </div >
  );
}

export default Home;