'use client';

import { Popover } from '@headlessui/react';
import DarkModeSwitcher from 'components/button/DarkModeSwitcher';
import GitHubIcon from 'icons/GitHubIcon';
import Link from 'next/link';
import { aboutConfig } from './config';
import NavBarItem from './NavBarItem';

export default function NavBar() {
  return (
    <header className=' bg-neutral-100 dark:bg-dark dark:text-white'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Welcome to Zhengliang Wang Blog</span>
            Blog | Zhengliang Wang
          </Link>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <NavBarItem name='Projects' href='/projects' />
          <NavBarItem name='Blogs' href='/blogs' />
          <NavBarItem name='About' subMenuItems={aboutConfig} />
          <NavBarItem href='https://github.com/pwang1997'>
            <div className='flex  justify-center items-center text-sm font-semibold leading-6 text-gray-900  dark:text-white'>
              <GitHubIcon /> GitHub
            </div>
          </NavBarItem>
        </Popover.Group>
        <div className='pl-10'>
          <DarkModeSwitcher />
        </div>
      </nav>
    </header>
  );
}
