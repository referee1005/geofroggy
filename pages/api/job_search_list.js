// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  res.status(200).json({
    id: 1,
    positions: ["Senior Ambassador", "Junior Ambassador", "Moderator"],
    salary: {
      min: 0,
      max: 10000
    },
    tags: [
      "Part Time",
      "Ambassador",
      "Moderator",
      "Senior Level",
      "Flexible Schedule",
      "Full Time",
      "Distant",
      "Junior Level"
    ]
  });
}
