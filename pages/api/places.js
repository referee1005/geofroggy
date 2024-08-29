// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import place1 from "../../public/images/place1.png";
import place2 from "../../public/images/favourite1.png";
import place3 from "../../public/images/favourite2.png";
import place4 from "../../public/images/favourite3.png";
import place5 from "../../public/images/favourite4.png";
import place6 from "../../public/images/favourite5.png";
import avatar from "../../public/images/avatar.png";
import map from "../../public/images/map.png";
export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "Beautiful Beach",
      description: "A serene beach with clear blue waters and white sand.",
      place_name: "Maya Bay",
      country_info: { name: "Thailand", continent: "Asia" },
      author: "John Doe",
      google_map_url: map,
      author_image: avatar,
      image: place1,
      thumbnail: place1
    },
    {
      id: 2,
      title: "Mountain Retreat",
      description: "A peaceful mountain retreat with stunning views.",
      place_name: "Himalayas",
      country_info: { name: "Nepal", continent: "Asia" },
      author: "Jane Smith",
      google_map_url: map,
      author_image: avatar,
      image: place2,
      thumbnail: place1
    },
    {
      id: 3,
      title: "The Great Wall of China",
      description:
        "The Great Wall of China is a series of fortifications built to protect China from invasions.",
      place_name: "Great Wall of China",
      country_info: { name: "China", continent: "Asia" },
      author: "John Doe",
      google_map_url: map,
      author_image: avatar,
      image: place3,
      thumbnail: place1
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
      thumbnail: place1
    },
    {
      id: 5,
      title: "Machu Picchu",
      description:
        "Machu Picchu is an ancient Incan city set high in the Andes Mountains of Peru.",
      place_name: "Machu Picchu",
      country_info: { name: "Peru", continent: "South America" },
      author: "Carlos Rivera",
      google_map_url: map,
      author_image: avatar,
      image: place5,
      thumbnail: place1
    },
    {
      id: 6,
      title: "Machu Picchu",
      description:
        "Machu Picchu is an ancient Incan city set high in the Andes Mountains of Peru.",
      place_name: "Machu Picchu",
      country_info: { name: "Peru", continent: "South America" },
      author: "Carlos Rivera",
      google_map_url: map,
      author_image: avatar,
      image: place6,
      thumbnail: place6
    },
    {
      id: 7,
      title: "Machu Picchu",
      description:
        "Machu Picchu is an ancient Incan city set high in the Andes Mountains of Peru.",
      place_name: "Machu Picchu",
      country_info: { name: "Peru", continent: "South America" },
      author: "Carlos Rivera",
      google_map_url: map,
      author_image: avatar,
      image: place5,
      thumbnail: place6
    },
    {
      id: 8,
      title: "Eiffel Tower",
      description:
        "The Eiffel Tower is an iconic iron lattice tower located in Paris, France",
      place_name: "Eiffel Tower",
      country_info: { name: "France", continent: "Europe" },
      author: "John Doe",
      google_map_url: map,
      author_image: avatar,
      image: place4,
      thumbnail: place1
    }
  ]);
}
