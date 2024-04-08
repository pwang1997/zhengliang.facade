import Breadcrumb from "components/breadcrumb";
import TagChipList from "components/chip/TagChipList";
import MDRender from "components/MDRender";
import matter from "gray-matter";
import { Post } from "models/post";
import { getBlogById } from "services/blogServices";
import { estimateReadingDuration } from "utils/mdConfig";
import { formatDate } from "utils/misc-utils";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const blog = (await getBlogById(id))?.data as Post ?? null;

    const { content } = matter(blog?.content);

    const readingDuration = estimateReadingDuration(blog?.content);

    return (
        <>
            <Breadcrumb
                breadcrumbs={[
                    { href: '/blogs', name: 'Blogs' },
                    { href: `/blogs/${id}`, name: blog?.title as string },
                ]}
            />

            <p className='flex text-3xl'>{blog?.title}</p>
            <p className='flex items-center justify-center gap-2 text-xs leading-5 text-gray-500'>
                <span>last updated at: {formatDate(blog?.updatedAt ?? '0')}</span>
                {readingDuration && <span className='text-xs leading-5 text-gray-500'>{readingDuration}</span>}
            </p>
            <div className="container mx-auto py-8">
                <MDRender content={content as string} />
            </div >
            <hr />
            <TagChipList tags={blog?.tags ?? []} />
        </>
    );
}
