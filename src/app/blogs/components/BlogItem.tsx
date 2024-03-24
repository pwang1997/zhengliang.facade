import TagChipList from 'components/chip/TagChipList';
import SolidSparkIcon from 'icons/SolidSparkIcon';
import { Post } from 'models/post';
import { estimateReadingDuration } from 'utils/mdConfig';
import { formatDate } from 'utils/misc-utils';

export default function BlogItem({ blog }: { blog: Post }) {
  const readingDuration = estimateReadingDuration(blog.content);

  return (
      <div className='flex min-w-0 gap-x-4'>
        <div className='relative z-10 inline-block'>
          {blog.pinned ? (
            <SolidSparkIcon />
          ) : (
            <div className='opacity-0'>
              <SolidSparkIcon />
            </div>
          )}
        </div>
        <div className='min-w-0 flex-auto'>
          <div className='flex items-center justify-between'>
            <p className='text-xl font-semibold leading-6 text-gray-900'>
              <a href={`/blogs/${blog.id}`}>{blog.title} </a>
            </p>

            <a className='text-sm font-semibold leading-6  text-gray-500' href={`/blogs/${blog.id}`}>
              Learn More
            </a>
          </div>
          <span className=' text-xs leading-5 text-gray-500'>
            last updated at: {formatDate(blog?.updatedAt as string)}
          </span>
          <hr />
          <p className='line-clamp-3 text-sm font-semibold leading-6 text-gray-900'>{blog.summary}</p>

          <div className='flex justify-between'>
            <div>
              <TagChipList tags={blog.tags ?? []} />
            </div>
            <div>
              
              {readingDuration && <p className='mt-1 truncate text-xs leading-5 text-gray-500'>{readingDuration}</p>}
            </div>
          </div>
        </div>
      </div>
  );
}
