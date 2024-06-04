export type ContentToShowType = "series" | "events" | "stories";

type HeroInfo = {
  items: {
    name: string;
  }[];
};

export type Hero = {
  id: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  name: string;
  series: HeroInfo;
  events: HeroInfo;
  stories: HeroInfo;
};
