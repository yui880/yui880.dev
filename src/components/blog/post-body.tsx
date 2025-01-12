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
        mdxOptions: {
          remarkPlugins: [
            // 깃허브 Flavored 마크다운 지원 추가 (version downgrade)
            remarkGfm,
            // mdx 1줄 개행 지원
            remarkBreaks,
          ],
          rehypePlugins: [
            // pretty code block
            [
              rehypePrettyCode,
              {
                theme: { dark: 'github-dark-dimmed', light: 'github-light' },
              },
            ],
            // toc id를 추가하고 제목을 연결
            rehypeSlug,
          ],
        },
      }}
      components={MdxComponents}
    />
  );
};

export default PostBody;
