import { Post } from '@/config/types';

const PostHeader = ({ post }: { post: Post }) => {
  const { category, title, date } = post;
  
  return (
    <div className="flex flex-col gap-2">
      <p className="mb-1 w-fit rounded-md border px-2 py-0.5 text-[15px] font-medium text-code">{category}</p>
      <p className="text-3xl font-semibold">{title}</p>
      <p className="text-sm text-gray-500">{date.toString()}</p>
    </div>
  );
};

export default PostHeader;
