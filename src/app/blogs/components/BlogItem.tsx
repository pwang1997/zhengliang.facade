import TagChipList from 'components/chip/TagChipList';
import { Post } from 'models/post';
import Link from 'next/link';
import { estimateReadingDuration } from 'utils/mdConfig';
import { formatDate } from 'utils/misc-utils';

export default function BlogItem({ blog }: { blog: Post;}) {

  const readingDuration = estimateReadingDuration(blog.content);
  return (
    <div>
      <div className='flex min-w-0 gap-x-4 animated'>
        <div className='min-w-0 flex-auto'>
          <div className='flex items-center justify-between'>
            <p className='text-xl font-semibold leading-6 text-gray-900 dark:bg-medium dark:text-white'>
              <a href={`/blogs/${blog.id}`}>{blog.title} </a>
            </p>
            <Link className='text-sm font-semibold leading-6  text-gray-500 dark:bg-medium dark:text-white pr-2' href={`/blogs/${blog.id}`}>
              Learn More
            </Link>
          </div>
          <span className=' text-xs leading-5 text-gray-500 dark:bg-medium dark:text-white'>
            last updated at: {formatDate(blog?.updatedAt as string)}
          </span>
          <hr />
          <p className='line-clamp-3 text-sm font-semibold leading-6 text-gray-900 dark:bg-medium dark:text-white'>{blog.summary}</p>

          <div className='flex justify-between'>
            <div>
              <TagChipList tags={blog.tags ?? []} />
            </div>
            <div>
              {readingDuration && <p className='mt-1 truncate text-xs leading-5 text-gray-500 dark:bg-medium dark:text-white pr-2'>{readingDuration}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
