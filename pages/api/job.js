import image from "../../public/images/job/image.png";
export default function handler(req, res) {
  res.status(200).json({
    id: 1,
    job_title: "Senior Ambassador",
    job_description:
      "Responsible for managing ambassador programs and coordinating with various stakeholders.",
    responsibilities: [
      "Relationship Building: Cultivating strong connections with clients, partners, and stakeholders. Cultivating strong connections with clients, partners, and stakeholders.",
      "Networking: Representing the company at events, conferences, and industry gatherings.",
      "Advocacy: Promoting the organization's mission, values, and initiatives.",
      "Public Speaking: Delivering speeches and presentations on behalf of the company",
      "Strategic Engagement: Identifying opportunities for collaboration and growth."
    ],
    job_creation_date: "2024-08-20",
    recruitment_start_period: "2024-08-22",
    recruitment_end_period: "2024-09-22",
    recruitment_quota: "120",
    job_type: "Full Time",
    experiences: "5 Years+",
    location: "New York, USA",
    salary: 6000,
    hiring_manager: "Jane Doe",
    job_image: image
  });
}
