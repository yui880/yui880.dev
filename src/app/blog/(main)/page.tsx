import { getAllPosts } from '@/lib/api';
import PostItem from '@/components/blog/post-item';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'yui880.dev',
  description: 'Archive',
};

const BlogPage = async () => {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto w-full max-w-[1100px] px-7">
      <div className="mt-2 grid flex-col gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <PostItem key={post.path} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
