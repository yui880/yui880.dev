export type PostSummary = {
  title: string;
  date: Date;
  coverImage: string;
};

export type Post = {
  category: string;
  slug: string;
  title: string;
  date: Date;
  coverImage: string;
  path: string;
  content: string;
};
