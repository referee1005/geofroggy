// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import user1 from "../../public/images/team-01.png";
import user2 from "../../public/images/team-02.png";
import user3 from "../../public/images/team-03.png";
import user4 from "../../public/images/team-04.png";

export default function handler(req, res) {
  res.status(200).json([
    {
      name: "Kseniia Garant",
      avatar: user1,
      follower: 256,
      followed: true
    },
    {
      name: "Daniel Olmo",
      avatar: user2,
      follower: 256,
      followed: true
    },
    {
      name: "De Bruine",
      avatar: user3,
      follower: 256,
      followed: true
    },
    {
      name: "Lautaro Martinez",
      avatar: user4,
      follower: 256,
      followed: false
    }
  ]);
}
