// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import item from "../../public/images/news/trending.png";
export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "Beautiful Nature of Bali Sea Beach",
      image: item,
      created_at: "2024-10-02T12:00:00Z"
    },
    {
      id: 2,
      title: "Beautiful Nature of Bali Sea Beach",
      image: item,
      created_at: "2024-10-02T12:00:00Z"
    },
    {
      id: 3,
      title: "Beautiful Nature of Bali Sea Beach",
      image: item,
      created_at: "2024-10-02T12:00:00Z"
    },
    {
      id: 4,
      title: "Beautiful Nature of Bali Sea Beach",
      image: item,
      created_at: "2024-10-02T12:00:00Z"
    },
    {
      id: 5,
      title: "Beautiful Nature of Bali Sea Beach",
      image: item,
      created_at: "2024-10-02T12:00:00Z"
    },
    {
      id: 6,
      title: "Beautiful Nature of Bali Sea Beach",
      image: item,
      created_at: "2024-10-02T12:00:00Z"
    }
  ]);
}
