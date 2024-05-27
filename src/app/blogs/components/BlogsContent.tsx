import { Post } from "models/post";
import BlogItem from "./BlogItem";

export default function BlogsContent({ blogs }: { blogs: Post[] }) {
    return (
        <div className="main-container w-full">
            <div className='list-container'>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-between divide-gray-100">
                    {blogs.map((blog: Post) => (
                        <li key={blog.title} className=' px-4 block w-full justify-between gap-x-6 py-5 rounded hover:bg-bright-second dark:hover:bg-dark-second'>
                            <BlogItem blog={blog} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}