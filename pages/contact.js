import Whoweare from "@/components/about/Whoweare";
import Thumbnails from "@/components/about/Thumbnails";
import OurVideo from "@/components/about/Ourvideo";
import Subscribe from "@/components/shared/Subscribe";
export default function Home() {
  return (
    <div className="mx-auto">
      <Whoweare />
      <Thumbnails />
      <OurVideo />
      <Subscribe bgColor={"#245073"} />
    </div>
  );
}
