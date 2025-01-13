import { Post } from '@/config/types';
import { MDXRemote } from 'next-mdx-remote/rsc';

import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import { MdxComponents } from '@/components/mdx/mdx-components';

const PostBody = ({ post }: { post: Post }) => {
  return (
    <MDXRemote
      source={post.content}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkBreaks],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: 'one-light',
                keepBackground: true,
              },
            ],
          ],
        },
      }}
      components={MdxComponents}
    />
  );
};

export default PostBody;
