import Breadcrumb from "components/breadcrumb";
import notes from "./site-notes";

export default function Page() {
  return (
    <div className="dark:bg-medium dark:text-white">
      <Breadcrumb
        breadcrumbs={[
          { href: '/site-notes', name: 'Site Notes | Developer Notes' }
        ]}
      />

      <div className='max-w-md divide-y divide-gray-200 text-gray-900 dark:divide-gray-700 dark:text-white  min-w-full'>
        {
          notes.map((item: { date: string, text: string }) => {
            return (
              <div key={item.date} className='flex flex-col pb-3'>
                <dt className='mb-1 text-gray-500 md:text-lg dark:text-gray-400'>{item.date}</dt>
                <dd className='text-lg font-semibold'>{item.text}</dd>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
