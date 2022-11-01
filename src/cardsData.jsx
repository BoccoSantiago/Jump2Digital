import starter from "./images/starter.png";
import pro from "./images/pro.png";
import team from "./images/team.png";

const cardsData = [
  {
    id: 1,
    type: "starter",
    title: "Starter",
    img: starter,
    btn: "Get Started",
    price: "Free",
    mostPopular: false,
    data: [
      "Full courses library",
      "A new daily meditation",
      "Access to the meditation guru",
    ],
  },
  {
    id: 2,
    type: "pro",
    title: "Pro",
    img: pro,
    btn: "Become a Pro",
    price: "$49",
    mostPopular: true,
    data: [
      "Full courses library",
      "A new daily meditation",
      "Access to the meditation guru",
      "Sleep podcasts and exercises",
      "Mindfulness exercises",
    ],
  },
  {
    id: 3,
    type: "teams",
    title: "Teams",
    img: team,
    btn: "Get Teams",
    price: "$99",
    mostPopular: false,
    data: [
      "Full courses library",
      "A new daily meditation",
      "Access to the meditation guru",
      "Sleep podcasts and exercises",
      "Mindfulness exercises",
      "Guided meditations",
      "Cooking recipes",
    ],
  },
];

export default cardsData;
