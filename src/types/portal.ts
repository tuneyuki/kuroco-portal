export type TutorialItem = {
  topics_id: number;
  subject: string;
  contents: string;
  ymd: string;
  ext_1?: { url: string; desc?: string };
};

export type BlogItem = {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category: { title: string; href: string };
  author: {
    name: string;
    role: string;
    href: string;
    imageUrl: string;
  };
};

export type NewsItem = {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
};
