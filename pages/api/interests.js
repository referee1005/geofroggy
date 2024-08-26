// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import interest1 from "../../public/images/interest1.png";
import interest2 from "../../public/images/interest1.png";
import interest3 from "../../public/images/interest1.png";
import interest4 from "../../public/images/interest1.png";
import interest5 from "../../public/images/interest1.png";
export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      country: "China",
      url: interest1
    },
    {
      id: 2,
      country: "Thailand",
      url: interest2
    },
    {
      id: 3,
      country: "Russia",
      url: interest3
    },
    {
      id: 4,
      country: "Egypt",
      url: interest4
    },
    {
      id: 5,
      country: "Colombia",
      url: interest5
    },
    {
      id: 1,
      country: "China",
      url: interest1
    },
    {
      id: 2,
      country: "Thailand",
      url: interest2
    },
    {
      id: 3,
      country: "Russia",
      url: interest3
    },
    {
      id: 4,
      country: "Egypt",
      url: interest4
    },
    {
      id: 5,
      country: "Colombia",
      url: interest5
    }
  ]);
}
