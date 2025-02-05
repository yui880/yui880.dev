'use client';

import Image from 'next/image';
import React from 'react';

const MDXImage = ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <span className="flex w-full items-center justify-center">
      <Image
        src={src as string}
        alt={alt as string}
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-auto max-w-full" // width를 auto로 변경하고 max-width 제한
        style={{ objectFit: 'contain' }}
      />
    </span>
  );
};

export default MDXImage;
