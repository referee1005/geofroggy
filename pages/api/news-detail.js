// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import item from "../../public/images/news/item.png";
import character from "../../public/images/character.png";
export default function handler(req, res) {
  res.status(200).json({
    id: 1,
    title: "Here are some interesting facts about Geography",
    author: "John Devis",
    author_image: character,
    image: item,
    description:
      "Here are some interesting facts about geography: The Earth is divided into 4 hemispheres. The highest and lowest points on Earth are Mount Everest and the Mariana Trench respectively. The Sahara Desert in North Africa is the largest desert in the world. The deepest lake in the U.S. is Oregon’s Crater Lake. Here are some interesting facts about geography: The Earth is divided into 4 hemispheres. The highest and lowest points on Earth are Mount Everest and the Mariana Trench respectively. The Sahara Desert in North Africa is the largest desert in the world. The deepest lake in the U.S. is Oregon’s Crater Lake.",
    created_at: "Sept 12, 10:30 PM"
  });
}
