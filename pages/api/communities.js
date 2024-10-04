// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import community1 from "../../public/images/events/community1.png";
import community2 from "../../public/images/events/community2.png";
import community3 from "../../public/images/events/community3.png";
import community4 from "../../public/images/events/community4.png";

export default function handler(req, res) {
  res.status(200).json([
    {
      title: "United States of America",
      image: community1,
      member: "25.6k"
    },
    {
      title: "United Kingdom",
      image: community2,
      member: "25.6k"
    },
    {
      title: "Russia",
      image: community3,
      member: "25.6k"
    },
    {
      title: "Saudi Arab",
      image: community4,
      member: "25.6k"
    }
  ]);
}
