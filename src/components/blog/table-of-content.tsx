'use client';
import { HeadingItem } from '@/config/types';
import Link from 'next/link';
import useHeadingsObserver from '@/hooks/useHeadingObserver';
import { cn } from '@/lib/utils';

const TableOfContent = ({ headingList }: { headingList: HeadingItem[] }) => {
  const activeIdList = useHeadingsObserver('h2, h3');

  return (
    <aside className="absolute left-full ml-[70px] hidden h-[calc(100%+150px)] min-w-[250px] md:block">
      <div className="sticky bottom-0 top-[200px] mt-[220px] overflow-y-auto">
        <div className="mb-4 border-l px-4">
          <div className="mb-1 text-[17px] font-bold">On this page</div>
          <ul className="text-[13px]">
            {headingList.map(item => {
              const isH3 = item.indent === 1;
              const isIntersecting = activeIdList.includes(item.link);

              return (
                <li
                  key={item.link}
                  className={cn(isH3 && 'ml-4', isIntersecting && 'font-medium text-code', 'py-1 transition')}
                >
                  <Link href={item.link}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default TableOfContent;
