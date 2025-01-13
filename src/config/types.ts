export type PostSummary = {
  title: string;
  date: Date;
  coverImage: string;
};

export type Post = PostSummary & {
  category: string;
  slug: string;
  path: string;
  content: string;
};

export type HeadingItem = {
  text: string;
  link: string;
  indent: number;
};
