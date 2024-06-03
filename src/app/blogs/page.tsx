import Breadcrumb from "components/breadcrumb";
import BundledMetricsPanel from "components/side-panel/BundledMetricsPanel";
import { Post } from "models/post";
import { listBlogs } from "services/blogServices";
import BlogsContent from "./components/BlogsContent";

export default async function Page() {
    const blogs = (await listBlogs())?.data as Post[]

    return (
        <div className='content container h-[calc(100vh-64px)] max-w-5xl flex-grow pt-4 lg:mx-auto'>
            <div className="container flex flex-col gap-4">
                <Breadcrumb />
                <div className="flex min-w-full gap-4">
                    <BlogsContent blogs={blogs} />
                    <div className="side-panel">
                        <BundledMetricsPanel />
                    </div>
                </div>
            </div>
        </div>
    );
}
