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
    height: 84,
    lineHeight: 22,
    links: ["https://en.wikipedia.org/wiki/The_Shard"],
    // https://the-shard.com/
  },
  {
    name: "Walkie-Talkie",
    image: "the-walkie-talkie.jpeg",
    position: 62,
    height: 102,
    lineHeight: 80,
    links: ["https://en.wikipedia.org/wiki/20_Fenchurch_Street"],
  },
  {
    name: "The Gherkin",
    image: "the-gherkin.jpeg",
    position: 84.8,
    height: 100,
    lineHeight: 180,
    links: [
      "https://thegherkin.com",
      "https://en.wikipedia.org/wiki/30_St_Mary_Axe",
    ],
  },
  {
    name: "London Eye",
    image: "london-eye.jpeg",
    position: 3.5,
    height: 111,
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
    height: 117,
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
    height: 94,
    lineHeight: 70,
    links: ["https://en.wikipedia.org/wiki/122_Leadenhall_Street"],
  },
];
