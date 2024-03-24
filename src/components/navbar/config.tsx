import { ChartPieIcon, CursorArrowRaysIcon } from '@heroicons/react/20/solid';

export const config = [
  {
    title: 'Projects',
    link: '/projects',
  },
  {
    title: 'Blogs',
    link: '/blogs',
  },
  {
    title: 'About',
    link: '/about',
    menuItems: [
      {
        title: 'About Me',
        link: '/about',
      },
      {
        title: 'Site Notes',
        link: '/site-notes',
      },
      {
        title: 'Contact',
        link: '/contact',
      },
    ],
  },
];

export const aboutConfig = [
  { name: 'About me', description: 'Get a better understanding of your traffic', href: '/about', icon: ChartPieIcon },
  {
    name: 'Site notes',
    description: 'Speak directly to your customers',
    href: '/site-notes',
    icon: CursorArrowRaysIcon,
  },
  // {
  //   name: 'Contact',
  //   description: 'Your customers’ data will be safe and secure',
  //   href: '/contact',
  //   icon: FingerPrintIcon,
  // },
];
