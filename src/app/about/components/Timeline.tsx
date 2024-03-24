export default function Timeline() {
  return (
    <ol className='relative border-s border-gray-200 dark:border-gray-700'>
      <li className='mb-10 ms-4'>
        <div className='absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700' />
        <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
          January 2023 - December 2023
        </time>
        <h3 className='flex justify-between text-lg font-semibold text-gray-900 dark:text-white'>
          <span>Full-Stack Software Engineer Intern</span>
          <span>Solace Systems Inc.</span>
        </h3>
        <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
          Participated in multiple-team development for the implementation of Solace Cloud Platform for Solace and
          Apache Kafka message queues.
        </p>
        <ul className=' list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400'>
          <li>
            Designed and implemented the visualization of the messaging queue configuration relation in Java and MySQL.{' '}
          </li>
          <li>Resolved multiple system racing conditions by introducing Outbox Pattern.</li>
          <li>Automated log analysis on error level logs, which significantly reduced the cost on DataDog. </li>
          <li>Optimized the level of SQL execution of 10,000+ rows to millisecond.</li>
          <li>
            Reduced the micro-frontend rendering overhead by 20% by applying Recoil state management and React Query.
          </li>
          <li>Conducted MySQL update and migrations for multiple microservices </li>
        </ul>
      </li>
      <li className='mb-10 ms-4'>
        <div className='absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700' />
        <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
          April 2023 - June 2023
        </time>
        <h3 className='flex justify-between text-lg font-semibold text-gray-900 dark:text-white'>
          <span>Web Developer</span>
          <span>Univeristy of Ottawa</span>
        </h3>
        <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
          Implemented and deployed fully customized admin dashboard and questionnaire-based client web app with Node JS,
          React and Docker
        </p>
        <ul className=' list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400'>
          <li>Built token bucket rate limiting mechanism and IP block list with Node.js and Redis. </li>
          <li>Designed and implemented custom API gateways along with nginx reverse poxy.</li>
          <li>Automated integration tests and CI/CD pipelines with Circle CI and GitHub Actions.</li>
        </ul>
      </li>
      <li className='mb-10 ms-4'>
        <div className='absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700' />
        <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
          {' '}
          September 2021 - June 2023
        </time>
        <h3 className='flex justify-between text-lg font-semibold text-gray-900 dark:text-white'>
          <span>Master of Data Science</span>
          <span>University of Ottawa</span>
        </h3>
      </li>
      <li className='ms-4'>
        <div className='absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700' />
        <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
          {' '}
          September 2018 - June 2020
        </time>
        <h3 className='flex justify-between text-lg font-semibold text-gray-900 dark:text-white'>
          <span>Bachelor of Science, Honours Program</span>
          <span>UBC, Kelowna Campus</span>
        </h3>
        <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
          Thesis on engineering an audience response system for student labs and class activities.
        </p>
      </li>
    </ol>
  );
}
