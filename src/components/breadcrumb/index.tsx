import RightArrowIcon from 'icons/RightArrowIcon';
import Link from 'next/link';

function BreadcrumbItem({ href, name, isLastItem }: { href: string; name: string; isLastItem: boolean }) {
  return (
    <li className='inline-flex items-center'>
      {isLastItem ? (
        <span className='inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400'>
          <RightArrowIcon />
          {name}
        </span>
      ) : (
        <a
          href={href}
          className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
        >
          <RightArrowIcon />
          {name}
        </a>
      )}
    </li>
  );
}
export default function Breadcrumb({ breadcrumbs }: { breadcrumbs: { href: string; name: string }[] }) {
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
        {breadcrumbs.map((item: { href: string; name: string }, idx, arr) => {
          return (
            <BreadcrumbItem key={item.href} href={item.href} name={item.name} isLastItem={arr.length - 1 === idx} />
          );
        })}
      </ol>
    </nav>
  );
}
