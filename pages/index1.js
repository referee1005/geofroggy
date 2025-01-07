import PagesMetaHead from "@/components/PagesMetaHead";
import Ofinterest from "@/components/home1/Ofinterest";
import Whoweare from "@/components/home1/Whoweare";
import Popular from "@/components/home1/Popular";
import Favourite from "@/components/home1/Favourite";
import RecentAdditions from "@/components/home1/RecentAdditions";
import Culture from "@/components/home1/Culture";
import Places from "@/components/home1/Places";

export default function Home() {
  return (
    <div className="mx-auto ">
      <PagesMetaHead title="Home" />
      <Places />
      <Ofinterest />
      <Whoweare />
      <Popular />
      <Favourite />
      <RecentAdditions />
      <Culture />
      {/* <Subscribe bgColor={"#245073"} opacity={0.5} /> */}
    </div>
  );
}
