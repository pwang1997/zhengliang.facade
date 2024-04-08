import Breadcrumb from 'components/breadcrumb';
import CloudArrowIcon from 'icons/CloudArrowIcon';
import GitHubIcon from 'icons/GitHubIcon';
import { GmailIcon } from 'icons/GmailIcon';
import GraduationIcon from 'icons/GraduationIcon';
import MapPinIcon from 'icons/MapPinIcon';
import MediumIcon from 'icons/MediumIcon';
import UserIcon from 'icons/UserIcon';
import Link from 'next/link';
import DownloadableFileItem from './components/DownloadableFileItem';
import Timeline from './components/Timeline';

export default function AboutPage() {
  return (
    <div>
      <Breadcrumb
        breadcrumbs={[
          { href: '/about', name: 'About' }
        ]}
      />
      <div className='mt-6 border-t border-gray-100'>
        <dl className='divide-y divide-gray-100'>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='flex gap-1 text-sm font-medium leading-6 text-dark dark:bg-medium dark:text-white'>
              <UserIcon />
              <div id="myself">
                <a href="#myself">About Myself</a>
              </div>
            </dt>
            <dd className='mt-1 text-sm font-normal leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:bg-medium dark:text-white'>
              I am a software engineer who loves to build and experience novel technologies. My tech stack mainly falls
              under the Java & Spring domain. My work and projects primarily involve Spring Boot, Docker, Redis, MySQL,
              and Message Queues (Kafka / RabbitMQ). Instead of being a pure backend engineer, I find being a full-stack
              engineer brings me more excitement and vitality. <br />I am currently based in Ottawa, Canada. Before
              moving to Ottawa, I acquired an Honours Bachelor of Computer Science at the University of British
              Columbia, Kelowna Campus. My thesis focused on engineering an audience response system for student labs
              and class activities.
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='flex gap-1 text-sm font-medium leading-6 text-gray-900 dark:bg-medium dark:text-white'>
              <GraduationIcon />
              <div id="experience">
                <a href="#experience">Education & Career Path</a>
              </div>
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              <Timeline />
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='flex gap-1 text-sm font-medium leading-6 text-gray-900 dark:bg-medium dark:text-white'>
              <MapPinIcon />
              <div id="contact">
                <a href="#contact">Find Me</a>
              </div>
            </dt>
            <dd className='flex gap-4'>
              <Link className="hover:bg-white-hover dark:bg-dark dark:text-white dark:hover:bg-dark-hover rounded-lg p-2" href="https://github.com/pwang1997">
                <GitHubIcon />
              </Link>
              <Link className="hover:bg-white-hover dark:bg-dark dark:text-white dark:hover:bg-dark-hover rounded-lg p-2" href="mailto:wzlpuck@gmail.com">
                <GmailIcon />
              </Link>
              <Link className="hover:bg-white-hover dark:bg-dark dark:text-white dark:hover:bg-dark-hover rounded-lg p-2" href="https://medium.com/@zhengliang_puck_wang">
                <MediumIcon />
              </Link>
            </dd>
          </div>

          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='flex gap-1 text-sm font-medium leading-6 text-gray-900 dark:bg-medium dark:text-white'>
              <CloudArrowIcon />
              <div id="resume">
                <a href="#resume">Attachments</a>
              </div>
            </dt>
            <dd className='mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
              <ul className='divide-y divide-gray-100 rounded-md border border-gray-200'>
                <DownloadableFileItem
                  name='ZhengliangWang-SDE-Resume.pdf'
                  href='/resume/ZhengliangWang-SDE-Resume.pdf'
                  size='174KB'
                />
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
