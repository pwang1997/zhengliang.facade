import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Fragment } from 'react';

interface SubMenuItemProp {
  href: string;
  name: string;
  description?: string;
}

interface NavBarItemProps {
  name?: string;
  children?: React.ReactNode;
  href?: string;
  subMenuItems?: SubMenuItemProp[];
}

export default function NavBarItem({ name, children, href, subMenuItems = [] }: NavBarItemProps) {
  const renderNavItem = () => {
    return (
      <Link href={href as string} className='text-sm flex items-center font-semibold rounded-lg p-2 hover:bg-white-hover dark:bg-dark dark:text-white dark:hover:bg-dark-hover'>
        <button>
          {children ?? name}
        </button>
      </Link>
    );
  };

  const renderPopoverNavItem = () => {
    return (
      <Popover className='relative'>
        <Popover.Button className='flex items-center text-sm font-semibold leading-6 rounded-lg hover:bg-white-hover dark:bg-dark dark:text-white dark:hover:bg-dark-hover'>
          {name}
          <ChevronDownIcon className='h-5 w-5 flex-none text-gray-400' aria-hidden='true' />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-200'
          enterFrom='opacity-0 translate-y-1'
          enterTo='opacity-100 translate-y-0'
          leave='transition ease-in duration-150'
          leaveFrom='opacity-100 translate-y-0'
          leaveTo='opacity-0 translate-y-1'
        >
          <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-dark dark:text-white'>
            <div className='p-4'>
              {subMenuItems?.map((item: SubMenuItemProp) => (
                <div
                  key={item.name}
                  className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white-hover dark:bg-dark dark:text-white dark:hover:bg-dark-hover'
                >
                  <div className='flex-auto'>
                    <Link href={item.href as string} className='block font-semibold hover:bg-white-hover dark:bg-dark dark:text-white dark:hover:bg-dark-hover'>
                      {item.name}
                      <span className='absolute inset-0' />
                    </Link>
                    <p className='mt-1 text-gray-600  dark:text-white'>{item?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    );
  }

  return <div>{subMenuItems.length > 0 ? renderPopoverNavItem() : renderNavItem()}</div>;
}
