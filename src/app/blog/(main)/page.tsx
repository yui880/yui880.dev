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
    <div className="mt-2 flex flex-col gap-2">
      {posts.map(post => (
        <PostItem key={post.path} {...post} />
      ))}
    </div>
  );
};

export default BlogPage;
