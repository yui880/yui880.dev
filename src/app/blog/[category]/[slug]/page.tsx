import PostHeader from '@/components/blog/post-header';
import { getPostByPath, getPostPaths, parsePostMeta } from '@/lib/api';

type PostDetailPageProps = {
  category: string;
  slug: string;
};

const PostDetailPage = ({ params: { category, slug } }: PostDetailPageProps) => {
  const post = getPostByPath(category, slug);

  return (
    <div className="flex flex-col bg-white">
      <PostHeader {...post} />
    </div>
  );
};

export const generateStaticParams = () => {
  const postPaths: string[] = getPostPaths();
  const paramList = postPaths.map(path => parsePostMeta(path)).map(({ category, slug }) => ({ category, slug }));
  
  return paramList;
};

export default PostDetailPage;
