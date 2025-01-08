import PagesMetaHead from "@/components/PagesMetaHead";
import AboutUs from "@/components/landing/About";
import Favourite from "@/components/landing/Favourite";
import Places from "@/components/landing/Places";
import SpotlightStories from "@/components/landing/SpotlightStories";

export const Home = () => {
  return (
    <div className="mx-auto " >
      <PagesMetaHead title="Home" />
      <Places />
      <AboutUs />
      <Favourite />
      <SpotlightStories />
    </div >
  );
}

export default Home;