import { Tag } from 'models/post';
import { dynamicSort } from 'utils/misc-utils';
import { TagChip } from './chip';

export default function TagChipList({ tags = [] }: { tags: Tag[] }) {
  return (
    <div>
      {tags.sort(dynamicSort('-name')).map((tag: Tag) => (
        <div key={tag.id} className='inline-block p-1'>
          <TagChip tagName={tag.name} />
        </div>
      ))}
    </div>
  );
}
