import PostHeader from '@/components/blog/post-header';
import { getPostByPath, getPostPaths, parseMDXTags, parsePostMeta } from '@/lib/api';
import PostBody from '@/components/blog/post-body';
import { Metadata } from 'next';
import TableOfContent from '@/components/blog/table-of-content';

type PostDetailPageProps = {
  params: {
    category: string;
    slug: string;
  };
};

export const metadata: Metadata = {
  title: 'yui880.dev',
  description: 'Archive',
};

const PostDetailPage = async ({ params: { category, slug } }: PostDetailPageProps) => {
  const post = await getPostByPath(category, slug);
  const headingList = parseMDXTags(post.content);

  return (
    <div className="relative flex h-full">
      <div className="flex h-full w-full flex-1 flex-col gap-10 bg-white px-7 py-8">
        <PostHeader post={post} />
        <div className="prose max-w-none">
          <PostBody post={post} />
        </div>
      </div>
      <TableOfContent headingList={headingList} />
    </div>
  );
};

export const generateStaticParams = async () => {
  const postPaths: string[] = getPostPaths();
  const paramList = postPaths.map(path => parsePostMeta(path)).map(({ category, slug }) => ({ category, slug }));

  return paramList;
};

export default PostDetailPage;
