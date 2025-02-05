import { MDXComponents } from 'mdx/types';
import React from 'react';
import MDXImage from '@/components/mdx/mdx-image';

export const MdxComponents: MDXComponents = {
  pre: ({ children, ...props }: any) => {
    return (
      <pre className="overflow-x-auto rounded-lg border border-gray-200 p-4 dark:border-gray-700" {...props}>
        {children}
      </pre>
    );
  },
  img: MDXImage,
} as MDXComponents;
