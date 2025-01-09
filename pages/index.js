import PagesMetaHead from "@/components/PagesMetaHead";
import AboutUs from "@/components/landing/About";
import Favourite from "@/components/landing/Favourite";
import Places from "@/components/landing/Places";
import SpotlightStories from "@/components/landing/SpotlightStories";
import CuturalHeritage from "@/components/landing/CuturalHeritage";

export const Home = () => {
  return (
    <div className="mx-auto " >
      <PagesMetaHead title="Home" />
      <Places />
      <AboutUs />
      <Favourite />
      <SpotlightStories />
      <CuturalHeritage />

    </div >
  );
}

export default Home;