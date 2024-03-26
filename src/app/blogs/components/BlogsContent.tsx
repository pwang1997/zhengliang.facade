"use client";

import CategoryPanel, { CategoryPanelDataProp } from "components/category-panel";
import { Post, Tag } from "models/post";
import { useCallback, useMemo, useState } from "react";
import BlogItem from "./BlogItem";


export default function BlogsContent({ blogs, postTagUsage }: { blogs: Post[], postTagUsage: CategoryPanelDataProp[] }) {

    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const simplePosts = useMemo(() =>
        blogs.reduce((acc: any, curPost: any) => {
            return [...acc, {
                id: curPost.id,
                tags: curPost.tags?.map((tag: Tag) => tag.name)
            }]
        }, []), [blogs]
    );

    const handleOnClick = useCallback((name: string) => {
        setSelectedTag(!!selectedTag ? null : name);
    }, [selectedTag]);

    const renderBlogItems = useCallback((pinned: boolean) => {

        const baseBlogs = blogs.filter((blog) => blog.pinned === pinned);

        const filteredSimplePosts = simplePosts.filter((item) => item?.tags.includes(selectedTag));

        const selectedPostIds = (!!selectedTag ? filteredSimplePosts : simplePosts).map((item) => item.id);

        const filteredPosts = baseBlogs.filter((item) => selectedPostIds.includes(item.id))

        return (
            <>
                {filteredPosts.map((blog: Post) => (
                    <li key={blog.title} className='block w-full justify-between gap-x-6 py-5'>
                        <BlogItem blog={blog} />
                    </li>
                ))}
            </>
        )
    }, [blogs, selectedTag, simplePosts])

    return (
        <>
            <div className="main-container w-full">
                <div className="min-w-full">
                    <CategoryPanel data={postTagUsage} handleOnClick={handleOnClick} />
                </div>

                <div className='list-container'>
                    <ul className='divide-y divide-gray-100'>
                        {renderBlogItems(true)}
                        {renderBlogItems(false)}
                    </ul>
                </div>
            </div>
        </>
    )
}