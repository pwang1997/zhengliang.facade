import PageIntro from "components/page-intro";
import { Post } from "models/post";
import { listBlogs } from "services/blogServices";
import BlogItem from "./components/BlogItem";

export default async function Page() {

    const blogsResponse = await listBlogs();

    const blogs = blogsResponse?.data as Post[]

    return (
        <div>
            <PageIntro name="Blogs" />
            <div className='container flex justify-between gap-x-24'>
                <div className='main-container grow'>
                    <ul className='divide-y divide-gray-100'>
                        {blogs.filter((blog) => blog.pinned).map((blog: Post) => (
                            <li key={blog.title} className='block w-full justify-between gap-x-6 py-5'>
                                <BlogItem blog={blog} />
                            </li>
                        ))}

                        {blogs.filter((blog) => !blog.pinned).map((blog: Post) => (
                            <li key={blog.title} className='block w-full justify-between gap-x-6 py-5'>
                                <BlogItem blog={blog} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
