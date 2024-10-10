// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import item from "../../../public/images/news/item.png";
import thumb from "../../../public/images/events/event1_thumb.png";
import character from "../../../public/images/character.png";
export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "Here are some interesting facts about Geography",
      author: "John Devis",
      author_image: character,
      thumb: thumb,
      image: item,
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
      id: 2,
      title: "Here are some interesting facts about Geography",
      author: "John Devis",
      author_image: character,
      thumb: thumb,
      image: item,
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
      image: item,
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
  ]);
}
