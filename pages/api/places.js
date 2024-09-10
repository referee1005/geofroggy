// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import place1 from "../../public/images/home/place1.jpg";
import place2 from "../../public/images/home/place2.jpg";
import place3 from "../../public/images/home/place3.jpg";
import place4 from "../../public/images/home/place4.jpg";
import place5 from "../../public/images/home/place5.jpg";
import place6 from "../../public/images/home/place6.jpg";
import place7 from "../../public/images/home/place7.jpg";
import place8 from "../../public/images/home/place8.jpg";
import thumbnail1 from "../../public/images/home/thumbnail1.jpg";
import thumbnail2 from "../../public/images/home/thumbnail2.jpg";
import thumbnail3 from "../../public/images/home/thumbnail3.jpg";
import thumbnail4 from "../../public/images/home/thumbnail4.jpg";
import thumbnail5 from "../../public/images/home/thumbnail5.jpg";
import thumbnail6 from "../../public/images/home/thumbnail6.jpg";
import thumbnail7 from "../../public/images/home/thumbnail7.jpg";
import thumbnail8 from "../../public/images/home/thumbnail8.jpg";
import avatar from "../../public/images/avatar.png";
import map from "../../public/images/map.png";
export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "Grand Canyon",
      description:
        "The Grand Canyon is a stunning natural wonder located in northern Arizona, USA",
      place_name: "Grand Canyon",
      country_info: { name: "United States", continent: "North America" },
      author: "John Doe",
      google_map_url: map,
      author_image: avatar,
      image: place1,
      lat: 36.1069,
      lang: -112.1129,
      thumbnail: thumbnail1
    },
    {
      id: 2,
      title: "Great Barrier Reef",
      description:
        "The Great Barrier Reef is the world's largest coral reef system.",
      place_name: "Great Barrier Reef",
      country_info: { name: "Nepal", continent: "Asia" },
      author: "Jane Smith",
      google_map_url: map,
      author_image: avatar,
      image: place2,
      lat: -18.2871,
      lang: 147.6992,
      thumbnail: thumbnail2
    },
    {
      id: 3,
      title: "Serengeti National Park",
      description:
        "Serengeti National Park is a vast wildlife reserve located in northern Tanzania.",
      place_name: "Serengeti National Park",
      country_info: { name: "Tanzania", continent: "Africa" },
      author: "John Doe",
      google_map_url: map,
      author_image: avatar,
      image: place3,
      lat: 2.3333,
      lang: 34.8333,
      thumbnail: thumbnail3
    },
    {
      id: 4,
      title: "Eiffel Tower",
      description:
        "The Eiffel Tower is an iconic iron lattice tower located in Paris, France",
      place_name: "Eiffel Tower",
      country_info: { name: "France", continent: "Europe" },
      author: "John Doe",
      google_map_url: map,
      author_image: avatar,
      image: place4,
      lat: 48.8584,
      lang: 2.2945,
      thumbnail: thumbnail4
    },
    {
      id: 5,
      title: "Mount Fuji",
      description:
        "Mount Fuji is Japan's highest peak and an iconic symbol of the country.",
      place_name: "Mount Fuji",
      country_info: { name: "Japan", continent: "Asia" },
      author: "Carlos Rivera",
      google_map_url: map,
      author_image: avatar,
      image: place5,
      lat: 35.3606,
      lang: 138.7274,
      thumbnail: thumbnail5
    },
    {
      id: 6,
      title: "Machu Picchu",
      description:
        "Machu Picchu is an ancient Incan city set high in the Andes Mountains of Peru.",
      place_name: "Machu Picchu",
      country_info: { name: "Zimbabwe/Zambia", continent: "Africa" },
      author: "Carlos Rivera",
      google_map_url: map,
      author_image: avatar,
      image: place6,
      lat: 17.9243,
      lang: 25.8567,
      thumbnail: thumbnail6
    },
    {
      id: 7,
      title: "Santorini",
      description:
        "Santorini is a stunning island located in the Aegean Sea, part of Greece's Cyclades group.",
      place_name: "Santorini",
      country_info: { name: "Greece", continent: "Europe" },
      author: "Carlos Rivera",
      google_map_url: map,
      author_image: avatar,
      image: place7,
      lat: 36.3932,
      lang: 25.4615,
      thumbnail: thumbnail7
    },
    {
      id: 8,
      title: "Banff National Park",
      description:
        "Banff National Park is located in the Canadian Rockies of Alberta, Canada",
      place_name: "Banff National Park",
      country_info: { name: "Canada", continent: "North America" },
      author: "John Doe",
      google_map_url: map,
      author_image: avatar,
      image: place8,
      lat: 51.4968,
      lang: -115.9281,
      thumbnail: thumbnail8
    },
    {
      id: 9,
      title: "Banff National Park",
      description:
        "Banff National Park is located in the Canadian Rockies of Alberta, Canada",
      place_name: "Banff National Park",
      country_info: { name: "Canada", continent: "North America" },
      author: "John Doe",
      google_map_url: map,
      author_image: avatar,
      image: place8,
      lat: 51.4968,
      lang: -115.9281,
      thumbnail: thumbnail8
    }
  ]);
}
