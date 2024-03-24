
export default function Page() {
  return (
    <div>
      <p className='flex text-3xl font-semibold leading-7 text-gray-900'>Site Notes | Developer Notes</p>
      <dl className='max-w-md divide-y divide-gray-200 text-gray-900 dark:divide-gray-700 dark:text-white'>
        <div className='flex flex-col pb-3'>
          <dt className='mb-1 text-gray-500 md:text-lg dark:text-gray-400'>March 15th, 2024</dt>
          <dd className='text-lg font-semibold'>Initiate development of the blog project</dd>
        </div>
      </dl>
    </div>
  );
}
