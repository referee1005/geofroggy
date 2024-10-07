// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import item from "../../../public/images/news/item.png";
import item1 from "../../../public/images/news/item1.png";
import item2 from "../../../public/images/news/item2.png";
import item3 from "../../../public/images/news/item3.png";
import item4 from "../../../public/images/news/item4.png";
import item5 from "../../../public/images/news/item5.png";
import character from "../../../public/images/character.png";
import user1 from "../../../public/images/team-01.png";
import user2 from "../../../public/images/team-02.png";
import user3 from "../../../public/images/team-03.png";
import user4 from "../../../public/images/team-04.png";
import user5 from "../../../public/images/team-06.png";

const data = [
  {
    id: 1,
    title: "Here are some interesting facts about Geography",
    author: "Olivia Harper",
    author_image: user1,
    image: item,
    description:
      "Here are some interesting facts about geography: The Earth is divided into 4 hemispheres. The highest and lowest points on Earth are Mount Everest and the Mariana Trench respectively. The Sahara Desert in North Africa is the largest desert in the world. The deepest lake in the U.S. is Oregon’s Crater Lake.",
    created_at: "Sept 12, 10:30 PM"
  },
  {
    id: 2,
    title: "Rising Sea Levels Threaten Coastal Cities Worldwide",
    author: "John Devis",
    author_image: character,
    image: item1,
    description:
      "A new report highlights the increasing risks posed by rising sea levels due to climate change. Coastal cities are being urged to implement mitigation strategies to protect their populations and infrastructure.",
    created_at: "Sept 12, 10:30 PM"
  },
  {
    id: 3,
    title: "New National Park Established to Protect Amazon Rainforest",
    author: "Ethan Brooks",
    author_image: user2,
    image: item2,
    description:
      "In a significant move for conservation, a new national park has been created in the Amazon rainforest to safeguard biodiversity and indigenous lands. The park aims to curb deforestation and protect endangered species.",
    created_at: "Sept 12, 10:30 PM"
  },
  {
    id: 4,
    title: "Largest Glacier in Antarctica Showing Signs of Rapid Melting",
    author: "Noah Parker",
    author_image: user3,
    image: item3,
    description:
      "Scientists have observed accelerated melting in Antarctica's largest glacier, raising concerns about rising sea levels and global climate impact. The study calls for urgent action to address climate change.",
    created_at: "Sept 12, 10:30 PM"
  },
  {
    id: 5,
    title: "World’s Most Remote Island Faces Environmental Challenges",
    author: "Lucas Adams",
    author_image: user4,
    image: item4,
    description:
      "Tristan da Cunha, the world’s most isolated inhabited island, is grappling with environmental challenges, including marine pollution and invasive species, threatening its unique ecosystem and wildlife.",
    created_at: "Sept 12, 10:30 PM"
  },
  {
    id: 6,
    title: "Severe Drought Affects River Systems in Southern Africa",
    author: "Isabella Murphy",
    author_image: user5,
    image: item5,
    description:
      "A severe drought has led to dangerously low water levels in several major rivers in southern Africa, impacting local agriculture, wildlife, and communities dependent on the rivers for water and food security.",
    created_at: "Sept 12, 10:30 PM"
  }
];

export default function handler(req, res) {
  // Convert req.query.id to a number for comparison
  const id = Number(req.query.id);
  // Find the item by id
  const result = data.find((item) => item.id === id);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ error: "News item not found" });
  }
}
