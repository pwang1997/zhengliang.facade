'use client';

import { Popover } from '@headlessui/react';
import DarkModeSwitcher from 'components/button/DarkModeSwitcher';
import GitHubIcon from 'icons/GitHubIcon';
import Link from 'next/link';
import { aboutConfig } from './config';
import NavBarItem from './NavBarItem';

export default function NavBar() {
  return (
    <header className='bg-neutral-100 dark:bg-dark dark:text-white p-4'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Welcome to Zhengliang Wang Blog</span>
            <b>
              Facade
            </b>
          </Link>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12 items-center'>
          <NavBarItem name='About' subMenuItems={aboutConfig} />
          <NavBarItem href='https://github.com/pwang1997'>
            <GitHubIcon />
          </NavBarItem>
        </Popover.Group>
        <div className='pl-10'>
          <DarkModeSwitcher />
        </div>
      </nav>
    </header>
  );
}
