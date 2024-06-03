'use client';

import { Popover } from '@headlessui/react';
import DarkModeSwitcher from 'components/button/DarkModeSwitcher';
import SearchModal from 'components/searchbar/SearchModal';
import CommandLineIcon from 'icons/CommandLineIcon';
import GitHubIcon from 'icons/GitHubIcon';
import Link from 'next/link';
import { useState } from 'react';
import NavBarItem from './NavBarItem';

export default function NavBar() {

  const [show, setShow] = useState(false);

  return (
    <header className='w-full sticky top-0 backdrop-blur transition-[background-color,border-width] border-x-0 flex justify-center z-10 pt-4'>
      <nav className='mx-auto flex max-w-4xl items-center justify-between  rounded-[24px] pl-4 pr-4 pt-2 pb-2
      bg-neutral-100 dark:bg-dark dark:text-white
      ' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Welcome to Zhengliang Wang Blog</span>
            <button className='text-sm flex items-center font-semibold rounded-lg p-2 hover:bg-white-hover dark:bg-dark dark:text-white dark:hover:bg-dark-hover'>Home</button>
          </Link>
        </div>

        {
          show &&
          <SearchModal setShow={setShow} />
        }

        <Popover.Group className='hidden lg:flex lg:gap-x-4 items-center justify-end ml-4'>
          <NavBarItem name='Projects' href='/projects' />
          <NavBarItem name='Blogs' href='/blogs' />
          <NavBarItem name='Graphics' href='/graphics' />
          <NavBarItem name='About' href='/about' />
          <NavBarItem name='Site Notes' href='/site-notes' />
          <NavBarItem href='https://github.com/pwang1997'>
            <GitHubIcon />
          </NavBarItem>
        </Popover.Group>
        <div className='flex flex-row'>
          <button className='relative w-8 h-8 flex item-center hover:bg-white-hover dark:bg-dark dark:text-white dark:hover:bg-dark-hover cursor-pointer rounded-full p-1'
            onClick={() => setShow(!show)} disabled={show}>
            <CommandLineIcon />
          </button>
          <DarkModeSwitcher />
        </div>
      </nav>
    </header>
  );
}
