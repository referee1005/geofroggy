// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    phone_number: "+1 654 456 7899",
    email: "contact@geofroggy.com",
    address: "2164 Shingleton Road. Kentwood, MI, USA",
    map_url: " https://maps.googleapis.com/maps/api/...",
    lat: 32.4,
    lng: 124.5
  });
}
