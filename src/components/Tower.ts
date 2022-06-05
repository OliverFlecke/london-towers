export interface Tower {
  name: string;
  image?: string;
  position: number;
  height: number;
  lineHeight: number;
  link: string;
}

export const towers: Tower[] = [
  {
    name: "The Shard",
    image: "the-shard.jpeg",
    position: 45,
    height: 51,
    lineHeight: 20,
    link: "https://en.wikipedia.org/wiki/The_Shard",
    // https://the-shard.com/
  },
  {
    name: "Walkie-Talkie",
    image: "the-walkie-talkie.jpeg",
    position: 60,
    height: 56,
    lineHeight: 80,
    link: "https://en.wikipedia.org/wiki/20_Fenchurch_Street",
  },
  {
    name: "The Gherkin",
    image: "the-gherkin.jpeg",
    position: 68.3,
    height: 55,
    lineHeight: 20,
    link: "https://thegherkin.com",
    // https://en.wikipedia.org/wiki/30_St_Mary_Axe
  },
];
