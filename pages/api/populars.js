// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import colombia_flag from "../../public/images/colombia_flag.png";
import russia_flag from "../../public/images/russia_flag.png";
import egypt_flag from "../../public/images/egypt_flag.png";
import colombia_image from "../../public/images/colombia_image.png";
import russia_image from "../../public/images/russia_image.png";
import egypt_image from "../../public/images/egypt_image.png";
export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      country: "Russia",
      flag: russia_flag,
      image: russia_image,
      description:
        "We will offer various city related tours and surrounding areas along with information."
    },
    {
      id: 2,
      country: "Egypt",
      flag: egypt_flag,
      image: egypt_image,
      description:
        "We will offer various city related tours and surrounding areas along with information."
    },
    {
      id: 3,
      country: "Colombia",
      flag: colombia_flag,
      image: colombia_image,
      description:
        "We will offer various city related tours and surrounding areas along with information."
    }
  ]);
}
