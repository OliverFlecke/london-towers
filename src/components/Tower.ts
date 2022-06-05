export interface Tower {
  name: string;
  position: number;
  height: number;
  lineHeight: number;
  link: string;
}

export const towers: Tower[] = [
  {
    name: "The Shard",
    position: 45,
    height: 51,
    lineHeight: 20,
    link: "https://en.wikipedia.org/wiki/The_Shard",
    // https://the-shard.com/
  },
  {
    name: "Walkie-Talkie",
    position: 60,
    height: 56,
    lineHeight: 80,
    link: "https://en.wikipedia.org/wiki/20_Fenchurch_Street",
  },
];
