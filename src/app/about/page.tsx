import PageIntro from 'components/page-intro';
import CloudArrowIcon from 'icons/CloudArrowIcon';
import GitHubIcon from 'icons/GitHubIcon';
import GraduationIcon from 'icons/GraduationIcon';
import InboxIcon from 'icons/InboxIcon';
import MapPinIcon from 'icons/MapPinIcon';
import UserIcon from 'icons/UserIcon';
import DownloadableFileItem from './components/DownloadableFileItem';
import Timeline from './components/Timeline';

export default function AboutPage() {
  return (
    <div>
      <PageIntro name='About' description='Interesting and boring things about Zhengliang Wang' />
      <div className='mt-6 border-t border-gray-100'>
        <dl className='divide-y divide-gray-100'>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='flex gap-1 text-sm font-medium leading-6 text-gray-900 dark:bg-medium dark:text-white'>
              <UserIcon />
              <div id="myself">
                <a href="#myself">About Myself</a>
              </div>
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:bg-medium dark:text-white'>
              I am a software engineer who loves to build and experience novel technologies. My tech stack mainly falls
              under the Java & Spring domain. My work and projects primarily involve Spring Boot, Docker, Redis, MySQL,
              and Message Queues (Kafka / RabbitMQ). Instead of being a pure backend engineer, I find being a full-stack
              engineer brings me more excitement and vitality. <br />I am currently based in Ottawa, Canada. Before
              moving to Ottawa, I acquired an Honours Bachelor of Computer Science at the University of British
              Columbia, Kelowna Campus. My thesis focused on engineering an audience response system for student labs
              and class activities.
              <a href='https://github.com/pwang1997'>
                <img
                  alt='github-activities'
                  src='https://github-readme-stats.yezihaohao.vercel.app/api?username=pwang1997&count_private=true&show_icons=true&icon_color=805AD5&text_color=718096&hide_title=true&bg_color=FFFFFF'
                />
              </a>
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
            <dd className='mt-1 flex flex-col gap-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              <div>
                <a className='flex gap-1 dark:bg-medium dark:text-white' href='https://github.com/pwang1997'>
                  <div>
                    <GitHubIcon />
                  </div>
                  <div>pwang1997</div>
                </a>
              </div>

              <div>
                <a className='flex gap-1 dark:bg-medium dark:text-white' href='mailto:wzlpuck+blog@gmail.com'>
                  <div>
                    <InboxIcon />
                  </div>
                  <div>Email</div>
                </a>
              </div>
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
                  href='/public/ZhengliangWang-SDE-Resume.pdf'
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
