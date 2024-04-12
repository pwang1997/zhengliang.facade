import Breadcrumb from "components/breadcrumb";
import { CategoryPanelDataProp } from "components/category-panel";
import BundledMetricsPanel from "components/side-panel/BundledMetricsPanel";
import { SystemMetrics } from "models/base";
import { Post } from "models/post";
import { listBlogs } from "services/blogServices";
import { fetchSystemMetrics } from "services/systemMetricsServices";
import BlogsContent from "./components/BlogsContent";

export default async function Page() {    
    const blogs = (await listBlogs())?.data as Post[]
    
    const categoryMetrics = (await fetchSystemMetrics(["tags:COUNT_USAGE"]))?.data as SystemMetrics;
    const countUsage = categoryMetrics?.[`tags:COUNT_USAGE`] as SystemMetrics;
    const postTagUsage = countUsage?.posts as CategoryPanelDataProp[];

    return (
        <div className="container flex flex-col gap-4">
            <div>
                <Breadcrumb breadcrumbs={[{ href: '/blogs', name: 'Blogs' }]} />
            </div>
            <div className="flex min-w-full gap-4">
                <BlogsContent blogs={blogs} postTagUsage={postTagUsage} />
                <div className="side-panel">
                    <BundledMetricsPanel />
                </div>
            </div>
        </div>
    );
}
