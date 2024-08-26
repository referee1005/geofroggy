import Subscribe from "@/components/shared/subscribe";
import PagesMetaHead from "@/components/PagesMetaHead";
import Ofinterest from "@/components/home/Ofinterest";
import Whoweare from "@/components/home/Whoweare";
import Popular from "@/components/home/Popular";
import Favourite from "@/components/home/Favourite";
import RecentAdditions from "@/components/home/RecentAdditions";
export default function Home() {
  return (
    <div className="mx-auto">
      <PagesMetaHead title="Home" />
      <Ofinterest />
      <Whoweare />
      <Popular />
      <Favourite />
      <RecentAdditions />
      <Subscribe bgColor={"#245073"} opacity={0.5} />
    </div>
  );
}
