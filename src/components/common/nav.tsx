'use client';

import React from 'react';
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

const Nav = () => {
  return (
    <li className="sticky flex h-16 flex-row items-end gap-5 border-b-2 border-amber-200 py-2">
      <NavItem to="/">Home</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      {/*<NavItem to="/resume">Resume</NavItem>*/}
      {/*<NavItem to="/portpolio">Portfolio</NavItem>*/}
    </li>
  );
};

export default Nav;
