// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  res.status(200).json({
    advice_answers: [
      {
        question: "What is the best time to visit?",
        answer: "The best time to visit is during the spring."
      },
      {
        question: "How can I get travel insurance?",
        answer: "You can get travel insurance online or through a travel agent."
      },
      {
        question: "What should I pack?",
        answer: "Pack light clothing and a jacket for cooler evenings."
      },
      {
        question: "Is the water safe to drink?",
        answer: "Tap water is generally safe, but bottled water is recommended."
      },
      {
        question: "How do I get around the city?",
        answer: "The city has a reliable public transportation system."
      },
      {
        question: "What is the local language?",
        answer: "The local language is Spanish, but English is widely spoken."
      },
      {
        question: "Are there any cultural customs I should know?",
        answer:
          "It's customary to greet people with a handshake or a kiss on the cheek."
      },
      {
        question: "Can I use my credit card?",
        answer:
          "Credit cards are widely accepted, but it's good to carry some cash."
      }
    ],
    general_faqs: [
      {
        question: "What currency is used?",
        answer: "The local currency is the Euro."
      },
      {
        question: "Do I need a visa?",
        answer: "Visa requirements depend on your nationality."
      },
      {
        question: "What is the time zone?",
        answer: "The country is in the Central European Time Zone."
      },
      {
        question: "Is it safe to travel alone?",
        answer: "The city is generally safe, but take usual precautions."
      },
      {
        question: "What is the emergency number?",
        answer: "The emergency number is 112."
      },
      {
        question: "Can I use my mobile phone?",
        answer: "Yes, but check with your provider for international rates."
      },
      {
        question: "What are the business hours?",
        answer: "Most businesses are open from 9 AM to 6 PM, Monday to Friday."
      },
      {
        question: "Is tipping customary?",
        answer:
          "Tipping is appreciated but not required. 10% is common in restaurants."
      }
    ],
    geography_faqs: [
      {
        question: "What is the highest mountain?",
        answer: "The highest mountain is Mount Everest."
      },
      {
        question: "Which rivers flow through the city?",
        answer: "The Danube and Rhine rivers flow through the city."
      },
      {
        question: "What is the climate like?",
        answer:
          "The climate is Mediterranean with hot summers and mild winters."
      },
      {
        question: "Are there any national parks?",
        answer:
          "Yes, there are several national parks nearby, including Park A and Park B."
      },
      {
        question: "What is the local wildlife?",
        answer:
          "You can find a variety of wildlife including deer, birds, and foxes."
      },
      {
        question: "What are the main geographical features?",
        answer: "The region is known for its mountains, rivers, and forests."
      },
      {
        question: "Is the area prone to natural disasters?",
        answer:
          "The area is not prone to natural disasters, but minor earthquakes can occur."
      }
    ]
  });
}
