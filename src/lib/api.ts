import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, PostSummary } from '@/config/types';
import { sync } from 'glob';

// 현재 post의 절대 경로를 추출
const BASE_PATH = 'src/_posts';
const POST_PATH = path.join(process.cwd(), BASE_PATH);

/**
 * 경로에 대한 메타데이터를 파싱하는 함수
 * /essay/page1.mdx -> essay, page1, blog/essay/page1
 */
export const parsePostMeta = (postPath: string) => {
  const relativePath = path.relative(BASE_PATH, postPath).replace('.mdx', '');

  const [category, slug] = relativePath.split('/');
  const blogPath = `blog/${relativePath}`;

  return { category, slug, path: blogPath };
};

/**
 * MDX 파일을 가져와 summary / detail 파싱하는 함수
 * summary : MDX 파일 상단 ---으로 구분된 부분, detail : 실제 내용
 */
const parsePostDetail = (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);

  const postSummary = data as PostSummary;
  return { ...postSummary, content };
};

/**
 * MDX 파일을 파싱한 정보 전체를 반환하는 함수
 */
const parsePost = (postPath: string): Post => {
  const meta = parsePostMeta(postPath);
  const detail = parsePostDetail(postPath);

  return { ...meta, ...detail };
};

/**
 * 카테고리에 해당하는 글의 경로들을 반환하는 함수
 * POSTPATH로 가져온 절대 경로에서 현재 카테고리 폴더에 있는 글 추출
 */
export const getPostPaths = (category?: string) => {
  const folder = category || '**';

  return sync(`${POST_PATH}/${folder}/*.mdx`);
};

/**
 * 카테고리에 해당하는 글들을 반환하는 함수
 * 해당 경로에서 데이터를 가져온 뒤 파싱한 데이터를 반환함
 */
export const getAllPosts = (category?: string) => {
  const paths = getPostPaths(category);
  const posts = paths.map(p => parsePost(p));

  return posts;
};

export const getPostByPath = (category: string, slug: string) => {
  const filePath = `${POST_PATH}/${category}/${slug}.mdx`;
  console.log(filePath);
  const post = parsePost(filePath);

  return post;
};
