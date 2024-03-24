import TagChipList from "components/chip/TagChipList";
import matter from "gray-matter";
import { Post } from "models/post";
import ReactMarkdown from "react-markdown";
import { getBlogById } from "services/blogServices";
import { estimateReadingDuration } from "utils/mdConfig";
import { formatDate } from "utils/misc-utils";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const blog = (await getBlogById(id)).data as Post;

  const { content } = matter(blog.content);

  const readingDuration = estimateReadingDuration(blog.content);

    return (
        <div>
            <p className='flex justify-center text-3xl'>{blog?.title}</p>
            <p className='flex items-center justify-center gap-2 text-xs leading-5 text-gray-500'>
                <span>last updated at: {formatDate(blog?.updatedAt ?? '0')}</span>
                {readingDuration && <span className='text-xs leading-5 text-gray-500'>{readingDuration}</span>}
            </p>

            <TagChipList tags={blog?.tags ?? []} />
            <hr />
            <div className='flex justify-center px-4 py-8 md:container md:mx-auto '>
                <div className='prose'>
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}
