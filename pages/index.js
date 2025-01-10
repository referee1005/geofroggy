import PagesMetaHead from "@/components/PagesMetaHead";
import AboutUs from "@/components/landing/About";
import Favourite from "@/components/landing/Favourite";
import Places from "@/components/landing/Places";
import SpotlightStories from "@/components/landing/SpotlightStories";
import CulturalHeritage from "@/components/landing/CulturalHeritage";
import JoinAdventure from "@/components/landing/JoinAdventure";
import CommunityVibes from "@/components/landing/CommunityVibes";
import Testimonial from "@/components/landing/Testimonial";
import InspireConnection from "@/components/landing/InspireConnection";
import Subscription from "@/components/landing/Subscription";

export const Home = () => {
  return (
    <div className="mx-auto " >
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