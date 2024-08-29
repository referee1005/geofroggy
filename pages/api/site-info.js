// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Video from "../../public/images/our_video.png";
import path from "path";
export default function handler(req, res) {
  const video_path = path.join(process.cwd(), "public/videos/Recent.mp4");
  res.status(200).json({
    total_users: 12000,
    new_places: 2000000,
    customer_reviews: 2000000,
    awards_won: 400000,
    video: video_path,
    thumbnail: Video
  });
}
