import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostSummary } from '@/config/types';
import { sync } from 'glob';

// 현재 post의 절대 경로를 추출
const BASE_PATH = 'src/_posts';
const POST_PATH = path.join(process.cwd(), BASE_PATH);

const parsePostMeta = (postPath: string) => {
  console.log(postPath);
  const relativePath = path.relative(BASE_PATH, postPath);

  const [category, slug] = relativePath.split('/');

  return { category, slug };
};

const parsePostDetail = (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);

  const postSummary = data as PostSummary;
  return { ...postSummary, content };
};

const parsePost = (postPath: string) => {
  const meta = parsePostMeta(postPath);
  const detail = parsePostDetail(postPath);

  return { ...meta, ...detail };
};

const getPostsPath = (category?: string) => {
  const folder = category || '**';
  console.log(`${POST_PATH}/${folder}/*.mdx`);

  return sync(`${POST_PATH}/${folder}/*.mdx`);
};

export const getPosts = (category?: string) => {
  const paths = getPostsPath(category);
  const posts = paths.map(p => parsePost(p));

  return posts;
};
