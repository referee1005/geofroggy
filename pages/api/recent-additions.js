// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Recent1 from "../../public/images/recent1.png";
import Recent2 from "../../public/images/recent2.png";
import Recent3 from "../../public/images/recent3.png";
import Recent4 from "../../public/images/recent4.png";
import path from "path";
export default function handler(req, res) {
  const video_path = path.join(process.cwd(), "public/videos/Recent.mp4");
  res.status(200).json([
    {
      id: 1,
      category: "Category",
      name: "Amsterdam Fun",
      video: video_path,
      thumbnail: Recent1
    },
    {
      id: 2,
      category: "Category",
      name: "Water Falls Enjoyment",
      video: video_path,
      thumbnail: Recent2
    },
    {
      id: 3,
      category: "Category",
      name: "The Pyramid Trip",
      video: video_path,
      thumbnail: Recent3
    },
    {
      id: 4,
      category: "Category",
      name: "Italian Coastline View",
      video: video_path,
      thumbnail: Recent4
    }
  ]);
}
