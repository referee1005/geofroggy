// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import character from "../../public/images/character.png";
export default function handler(req, res) {
  res.status(200).json({
    id: 1,
    name: "Kyle Keenan",
    avatar: character,
    email: "@kmkeenan",
    posts: 201,
    follwers: "120k",
    following: 536
  });
}
