import { SystemMetrics } from "models/base";
import Link from "next/link";
import { fetchSystemMetrics } from "services/systemMetricsServices";


export default async function SystemMetricsPanel() {

    const systemMetrics = (await fetchSystemMetrics(["posts:COUNT_UNIQUE", "projects:COUNT_UNIQUE", "tags:COUNT_UNIQUE", "views:COUNT_UNIQUE"])).data as SystemMetrics;

    const postCount = systemMetrics?.['posts:COUNT_UNIQUE'];
    const projectCount = systemMetrics?.["projects:COUNT_UNIQUE"];
    const tagCount = systemMetrics?.["tags:COUNT_UNIQUE"];
    const viewsCount = systemMetrics?.["views:COUNT_UNIQUE"];

    return (
        <>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">Blog | Zhengliang Wang</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center">厚德博学 求真求美</p>
            <p className="text-sm flex justify-center">Cultivate Virtue | Pursue Knowledge | Seek Truth and Beauty</p>

            <div className="flex  justify-between  gap-4">
                <div className="flex flex-col">
                    <Link href="/blogs" className="underline">
                        <span className=" flex justify-center">{postCount?.count ?? 0}</span>
                    </Link>
                    <span>blogs</span>
                </div>

                <div className="flex flex-col">
                    <Link href="/projects" className=" underline">
                        <span className=" flex justify-center">{projectCount?.count ?? 0}</span>
                    </Link>
                    <span>projects</span>
                </div>

                <div className="flex flex-col">
                    <span className=" flex justify-center">{tagCount?.count ?? 0}</span>
                    <span>tags</span>
                </div>

                <div className="flex flex-col">
                    <span className=" flex justify-center">{viewsCount?.count ?? 0}</span>
                    <span>views</span>
                </div>
            </div>
        </>
    )
}