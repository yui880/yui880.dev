import { Post } from '@/config/types';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const PostItem = ({ post }: { post: Post }) => {
  const { path, category, title, date, coverImage } = post;

  return (
    <Link href={path} className="inline-block w-full">
      <div className="flex w-full cursor-pointer flex-col gap-3 rounded-lg border bg-white px-5 py-4 hover:drop-shadow">
        <Image
          src={coverImage as string}
          alt="coverimage"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[170px] w-full max-w-full rounded-md"
          style={{ objectFit: 'cover' }}
        />
        <div className="flex flex-col justify-center gap-1">
          <p className="w-fit rounded-sm bg-gray-100 px-2 py-1 text-[13px] font-medium">{category}</p>
          <p className="text-[17px] font-medium">{title}</p>
          <p className="text-sm text-gray-500">{date.toString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
