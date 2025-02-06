import { Post } from '@/config/types';
import Image from 'next/image';
import React from 'react';

const PostHeader = ({ post }: { post: Post }) => {
  const { category, title, date } = post;

  return (
    <div className="flex flex-col gap-2">
      <p className="mb-1 w-fit rounded-full bg-black px-3 py-1 text-[15px] font-medium text-white">{category}</p>
      <p className="text-[40px] font-semibold leading-[1.4]">{title}</p>
      <p></p>
      <div className="mt-2 border-t pt-3">
        <p className="text-[15px] text-gray-500">{date.toString()}</p>
      </div>
      {post.coverImage !== '' && (
        <div className="pb-8 pt-5">
          <Image
            src={post.coverImage as string}
            alt="coverimage"
            width={0}
            height={0}
            sizes="100vw"
            className="h-[400px] w-full max-w-full rounded-md"
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
    </div>
  );
};

export default PostHeader;
