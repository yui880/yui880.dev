import { Post } from '@/config/types';
import Link from 'next/link';

const PostItem = ({ category, title, path, coverImage, date }: Post) => {
  return (
    <Link href={path}>
      <div className="flex h-32 w-full cursor-pointer flex-row rounded-lg border bg-white px-5 py-4 hover:drop-shadow">
        <div className="flex flex-col justify-center gap-1">
          <p className="w-fit rounded-sm bg-gray-100 px-2 py-1 text-[13px] font-medium">{category}</p>
          <p className="text-lg font-medium">{title}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      ]
    </Link>
  );
};

export default PostItem;
