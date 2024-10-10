// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import item from "../../../public/images/news/item.png";
import character from "../../../public/images/character.png";
import thumb from "../../../public/images/events/event1_thumb.png";
import user1 from "../../../public/images/team-01.png";
import user2 from "../../../public/images/team-02.png";
import user3 from "../../../public/images/team-03.png";
import user4 from "../../../public/images/team-04.png";
import user5 from "../../../public/images/team-06.png";
const data = [
  {
    id: 1,
    title: "Here are some interesting facts about Geography",
    author: "John Devis",
    author_image: character,
    thumb: thumb,
    images: [item, item, item],
    description:
      "Here are some interesting facts about geography: The Earth is divided into 4 hemispheres. The highest and lowest points on Earth are Mount Everest and the Mariana Trench respectively. The Sahara Desert in North Africa is the largest desert in the world. The deepest lake in the U.S. is Oregon’s Crater Lake. Here are some interesting facts about geography: The Earth is divided into 4 hemispheres. The highest and lowest points on Earth are Mount Everest and the Mariana Trench respectively. The Sahara Desert in North Africa is the largest desert in the world. The deepest lake in the U.S. is Oregon’s Crater Lake.",
    email: "kylekeenan@gmail.com",
    phone: "+1  234  567  890",
    url: "independantday.com/event/2024/1",
    price: 4.99,
    place: "ABC Palace, New York, USA",
    likes: 42,
    comment_count: 6,
    comments: [
      {
        id: 1,
        author: "Olivia Harper",
        author_image: user1,
        content: "I hope you like the informations. Follow for more!",
        created_at: "2h",
        likes: 12,
        comments: [
          {
            id: 2,
            author: "John Devis",
            author_image: user2,
            content: "Absolutely! Loved it.",
            created_at: "30min",
            likes: 6
          },
          {
            id: 2,
            author: "Ethan Brooks",
            author_image: user3,
            content: "Me too",
            created_at: "33min",
            likes: 6
          }
        ]
      }
    ],
    day: "4 July 2024",
    time: "7:00 PM"
  },
  {
    id: 2,
    title: "Here are some interesting facts about Geography",
    author: "John Devis",
    author_image: character,
    thumb: thumb,
    images: [item, item, item],
    description:
      "Here are some interesting facts about geography: The Earth is divided into 4 hemispheres. The highest and lowest points on Earth are Mount Everest and the Mariana Trench respectively. The Sahara Desert in North Africa is the largest desert in the world. The deepest lake in the U.S. is Oregon’s Crater Lake. Here are some interesting facts about geography: The Earth is divided into 4 hemispheres. The highest and lowest points on Earth are Mount Everest and the Mariana Trench respectively. The Sahara Desert in North Africa is the largest desert in the world. The deepest lake in the U.S. is Oregon’s Crater Lake.",
    email: "kylekeenan@gmail.com",
    phone: "+1  234  567  890",
    url: "independantday.com/event/2024/1",
    price: 4.99,
    place: "ABC Palace, New York, USA",
    likes: 42,
    comment_count: 6,
    day: "4 July 2024",
    time: "7:00 PM"
  },
  {
    id: 3,
    title: "Here are some interesting facts about Geography",
    author: "John Devis",
    author_image: character,
    thumb: thumb,
    images: [item, item, item],
    description:
      "Here are some interesting facts about geography: The Earth is divided into 4 hemispheres. The highest and lowest points on Earth are Mount Everest and the Mariana Trench respectively. The Sahara Desert in North Africa is the largest desert in the world. The deepest lake in the U.S. is Oregon’s Crater Lake. Here are some interesting facts about geography: The Earth is divided into 4 hemispheres. The highest and lowest points on Earth are Mount Everest and the Mariana Trench respectively. The Sahara Desert in North Africa is the largest desert in the world. The deepest lake in the U.S. is Oregon’s Crater Lake.",
    email: "kylekeenan@gmail.com",
    phone: "+1  234  567  890",
    url: "independantday.com/event/2024/1",
    price: 4.99,
    place: "ABC Palace, New York, USA",
    likes: 42,
    comment_count: 6,
    day: "4 July 2024",
    time: "7:00 PM"
  }
];
export default function handler(req, res) {
  // Convert req.query.id to a number for comparison
  const id = Number(req.query.id);
  // Find the item by id
  const result = data.find((item) => item.id === 1);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ error: "News item not found" });
  }
}
