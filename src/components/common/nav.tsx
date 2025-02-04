'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const pathName = usePathname();

  return (
    <Link href={to}>
      <ul
        className={
          pathName.startsWith(to) && to !== '/'
            ? 'underline underline-offset-4'
            : 'hover:underline hover:decoration-gray-500 hover:underline-offset-4'
        }
      >
        {children}
      </ul>
    </Link>
  );
};

const Nav = ({ isTransparent = false }: { isTransparent: boolean }) => {
  /**
   * 스크롤 위치에 따라서 네비게이션 바의 배경 색을 변경하는 로직
   * 메인 화면에서 위치에 따라서 투명 <-> 흰 배경으로 바뀌어야 해서 구현
   */
  const [navBg, setNavBg] = useState('bg-transparent');

  const scrollNavHandler = () => {
    if (!isTransparent) return;

    if (window.scrollY < 56) {
      // 뷰포트 높이
      setNavBg('bg-white');
    } else {
      setNavBg('bg-transparent backdrop-blur-md ');
    }
  };

  useEffect(() => {
    if (isTransparent) {
      window.addEventListener('scroll', scrollNavHandler);
    }

    return () => {
      if (isTransparent) {
        window.removeEventListener('scroll', scrollNavHandler);
      }
    };
  }, [isTransparent]);

  return (
    <li
      className={`fixed right-0 z-10 flex h-14 w-full flex-row items-end justify-center gap-5 border-b ${navBg} flex items-center py-2 text-[15px]`}
    >
      <NavItem to="/">Home</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      {/*<NavItem to="/resume">Resume</NavItem>*/}
      {/*<NavItem to="/portpolio">Portfolio</NavItem>*/}
    </li>
  );
};

export default Nav;
