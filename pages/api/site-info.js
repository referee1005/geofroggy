// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Video from "../../public/images/our_video.png";
import Thumbnail1 from "../../public/images/about1.png";
import Thumbnail2 from "../../public/images/about2.png";
import Thumbnail3 from "../../public/images/about3.png";
import Thumbnail4 from "../../public/images/about4.png";
import path from "path";
export default function handler(req, res) {
  const video_path = path.join(process.cwd(), "public/videos/Recent.mp4");
  res.status(200).json({
    title: "Who we are",
    description:
      "We will offer various city related tours (and surrounding areas) along with information on Transportation, Accommodations, MedellinTravel Blog, Food, Safety. We will offer various city related tours (and surrounding areas) along with information on Transportation,  Accommodations, Medellin Travel Blog, Food, Safety. We will offer various city related tours (and surrounding areas) along with information on Transportation, Accommodations, Medellin Travel Blog, Food, Safety.",
    advert: [
      {
        title: "Country",
        description:
          "We will offer various city related tours and surrounding areas along with information. We will offer various city related tours.",
        image: Thumbnail1
      },
      {
        title: "Search",
        description:
          "We will offer various city related tours and surrounding areas along with information. We will offer various city related tours.",
        image: Thumbnail2
      },
      {
        title: "Situational",
        description:
          "We will offer various city related tours and surrounding areas along with information. We will offer various city related tours.",
        image: Thumbnail3
      },
      {
        title: "Travel",
        description:
          "We will offer various city related tours and surrounding areas along with information. We will offer various city related tours.",
        image: Thumbnail4
      }
    ],
    total_users: 12000,
    new_places: 2000000,
    customer_reviews: 2000000,
    awards_won: 400000,
    video: video_path,
    thumbnail: Video
  });
}
