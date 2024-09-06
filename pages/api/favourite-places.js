// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import place1 from "../../public/images/favourite1.png";
import place2 from "../../public/images/favourite2.png";
import place3 from "../../public/images/favourite3.png";
import place4 from "../../public/images/favourite4.png";
import place5 from "../../public/images/favourite5.png";
import place6 from "../../public/images/favourite6.png";

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Deserts",
      thumbnail: place1,
      place_url: "https://social.geofroggy.com/tag/glaciers"
    },
    {
      id: 2,
      name: "Beaches",
      thumbnail: place2,
      place_url: "https://social.geofroggy.com/tag/glaciers"
    },
    {
      id: 3,
      name: "Mountains",
      thumbnail: place3,
      place_url: "https://social.geofroggy.com/tag/glaciers"
    },
    {
      id: 4,
      name: "Glaciers",
      thumbnail: place4,
      place_url: "https://social.geofroggy.com/tag/glaciers"
    },
    {
      id: 5,
      name: "Volcanos",
      thumbnail: place5,
      place_url: "https://social.geofroggy.com/tag/glaciers"
    },
    {
      id: 6,
      name: "Wildlife",
      thumbnail: place6,
      place_url: "https://social.geofroggy.com/tag/glaciers"
    }
  ]);
}
