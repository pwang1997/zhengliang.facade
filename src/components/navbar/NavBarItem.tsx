import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useCallback } from 'react';

interface SubMenuItemProp {
  href: string;
  name: string;
  description?: string;
}

interface NavBarItemProps {
  name: string;
  href?: string;
  subMenuItems?: SubMenuItemProp[];
}

export default function NavBarItem({ name, href, subMenuItems = [] }: NavBarItemProps) {
  const renderNavItem = useCallback(() => {
    return (
      <a href={href} className='text-sm font-semibold leading-6 text-gray-900'>
        {name}
      </a>
    );
  }, [href, name]);

  const renderPopoverNavItem = useCallback(() => {
    return (
      <Popover className='relative'>
        <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
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
          <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
            <div className='p-4'>
              {subMenuItems?.map((item: SubMenuItemProp) => (
                <div
                  key={item.name}
                  className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                >
                  <div className='flex-auto'>
                    <a href={item.href} className='block font-semibold text-gray-900'>
                      {item.name}
                      <span className='absolute inset-0' />
                    </a>
                    <p className='mt-1 text-gray-600'>{item?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    );
  }, [name, subMenuItems]);

  return <div>{subMenuItems.length > 0 ? renderPopoverNavItem() : renderNavItem()}</div>;
}
