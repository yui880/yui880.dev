import PostHeader from '@/components/blog/post-header';
import { getPostByPath, getPostPaths, parsePostMeta } from '@/lib/api';
import PostBody from '@/components/blog/post-body';
import { Metadata } from 'next';

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

  return (
    <div className="flex h-full w-full flex-col gap-10 bg-white px-7 py-8">
      <PostHeader post={post} />
      <div className="prose max-w-none">
        <PostBody post={post} />
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const postPaths: string[] = getPostPaths();
  const paramList = postPaths.map(path => parsePostMeta(path)).map(({ category, slug }) => ({ category, slug }));

  return paramList;
};

export default PostDetailPage;
