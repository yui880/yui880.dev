import { getAllPosts } from '@/lib/api';
import PostItem from '@/components/blog/post-item';

const BlogPage = async () => {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col gap-2 mt-2">
      {posts.map(post => (
        <PostItem key={post.path} {...post} />
      ))}
    </div>
  );
};

export default BlogPage;
