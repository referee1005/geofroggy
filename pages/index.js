import PagesMetaHead from "@/components/PagesMetaHead";
import AboutUs from "@/components/landing/About";
import Favourite from "@/components/landing/Favourite";
import Places from "@/components/landing/Places";
import SpotlightStories from "@/components/landing/SpotlightStories";
import CulturalHeritage from "@/components/landing/CulturalHeritage";
import JoinAdventure from "@/components/landing/JoinAdventure";
import CommunityVibes from "@/components/landing/CommunityVibes";

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
    </div >
  );
}

export default Home;