export interface Tower {
  name: string;
  image?: string;
  position: number;
  height: number;
  lineHeight?: number;
  links: string[];
}

export const towers: Tower[] = [
  {
    name: "The Shard",
    image: "the-shard.jpeg",
    position: 19.8,
    height: 40,
    lineHeight: 22,
    links: ["https://en.wikipedia.org/wiki/The_Shard"],
    // https://the-shard.com/
  },
  {
    name: "Walkie-Talkie",
    image: "the-walkie-talkie.jpeg",
    position: 62,
    height: 58,
    lineHeight: 90,
    links: ["https://en.wikipedia.org/wiki/20_Fenchurch_Street"],
  },
  {
    name: "The Gherkin",
    image: "the-gherkin.jpeg",
    position: 84.8,
    height: 55,
    lineHeight: 80,
    links: [
      "https://thegherkin.com",
      "https://en.wikipedia.org/wiki/30_St_Mary_Axe",
    ],
  },
  {
    name: "London Eye",
    image: "london-eye.jpeg",
    position: 3.5,
    height: 67,
    lineHeight: 40,
    links: [
      "https://www.londoneye.com",
      "https://en.wikipedia.org/wiki/London_EyeF",
    ],
  },
  {
    name: "London Bridge",
    image: "london-bridge.jpeg",
    position: 35,
    height: 72,
    lineHeight: 50,
    links: [
      "https://www.towerbridge.org.uk",
      "https://en.wikipedia.org/wiki/Tower_Bridge",
    ],
  },
  {
    name: "The Cheese-grater",
    image: "cheesegrater.jpeg",
    position: 79,
    height: 51,
    lineHeight: 70,
    links: ["https://en.wikipedia.org/wiki/122_Leadenhall_Street"],
  },
  {
    name: "St Paul's Cathedral",
    image: "st-pauls-cathedral.jpeg",
    position: 59.3,
    height: 67,
    lineHeight: 30,
    links: [
      "https://www.stpauls.co.uk",
      "https://en.wikipedia.org/wiki/St_Paul%27s_Cathedral",
    ],
  },
  {
    name: "One Blackfriars",
    image: "one-blackfriars.jpeg",
    position: 28,
    height: 63,
    lineHeight: 115,
    links: ["https://en.wikipedia.org/wiki/One_Blackfriars"],
  },
];
