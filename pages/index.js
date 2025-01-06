import PagesMetaHead from "@/components/PagesMetaHead";
import AboutUs from "@/components/landing/About";
import Favourite from "@/components/landing/Favourite";
import Places from "@/components/landing/Places";
export default function Home() {
  return (
    <div className="mx-auto ">
      <PagesMetaHead title="Home" />
      <Places />
      <AboutUs />
      <Favourite />
    </div>
  );
}
