// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import group1 from "../../public/images/events/group1.png";
import group2 from "../../public/images/events/group2.png";
import group3 from "../../public/images/events/group3.png";
import group4 from "../../public/images/events/group4.png";

export default function handler(req, res) {
  res.status(200).json([
    {
      title: "River Geeks",
      image: group1,
      member: "25.6k"
    },
    {
      title: "Forest Knight",
      image: group2,
      member: "25.6k"
    },
    {
      title: "Mountain Lovers",
      image: group3,
      member: "25.6k"
    },
    {
      title: "Beach Ball",
      image: group4,
      member: "25.6k"
    }
  ]);
}
