import Breadcrumb from "components/breadcrumb";
import TagChipList from "components/chip/TagChipList";
import Comment from "components/comment";
import MDRender from "components/MDRender";
import matter from "gray-matter";
import EyeIcon from "icons/EyeIcon";
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
        <div className="lg:container min-h-screen lg:mx-auto flex flex-col gap-2 p-4 m-4 w-full max-w-2xl dark:bg-medium dark:text-white">
            <Breadcrumb />
            <p className='flex text-3xl'>{blog?.title}</p>
            <div className="flex gap-x-1">
                <div>Zhengliang Wang edited at {formatDate(blog.updatedAt as string)}</div>
                <div className="flex gap-x-1">
                    <EyeIcon />{blog.metrics?.views} views
                </div>
            </div>
            {readingDuration && <span className='text-dark dark:text-white'>{readingDuration}</span>}
            <div className="container mx-auto py-8">
                <MDRender content={content as string} />
            </div >
            <TagChipList tags={blog?.tags ?? []} />
            <hr />
            <Comment />
        </div>
    );
}
