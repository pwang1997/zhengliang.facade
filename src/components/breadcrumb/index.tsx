"use client";

import RightArrowIcon from 'icons/RightArrowIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function BreadcrumbItem({ href, name, isLastItem }: { href: string; name: string; isLastItem: boolean }) {
  return (
    <>
      {!isLastItem && (
        <li className='inline-flex items-center'>
          <a
            href={`/${href}`}
            className=' capitalize inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
          >
            <RightArrowIcon />
            {name}
          </a>
        </li>
      )}
    </>

  );
}
export default function Breadcrumb() {

  const pathName = usePathname();
  const paths = pathName.split("/").slice(1);

  const breadcrumHref = (idx: number) => paths.slice(0, idx - 1).join("/");
  return (
    <nav className='flex' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
        <li className='inline-flex items-center'>
          <Link
            href='/'
            className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
          >
            Home
          </Link>
        </li>
        {
          paths.map((path, idx) => {
            return (
              <BreadcrumbItem key={path} href={breadcrumHref(idx)} name={path} isLastItem={paths.length - 1 === idx} />
            )
          })
        }
      </ol>
    </nav>
  );
}
