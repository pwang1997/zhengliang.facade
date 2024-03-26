import { SystemMetrics } from "models/base";
import { fetchSystemMetrics } from "services/systemMetricsServices";


export default async function SystemMetricsPanel() {
    const systemMetrics = (await fetchSystemMetrics(["blogs", "projects", "tags", "views"])).data as SystemMetrics;

    return (
        <>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">Blog | Zhengliang Wang</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center">厚德博学 求真求美</p>
            <p className="text-sm flex justify-center">Cultivate Virtue | Pursue Knowledge | Seek Truth and Beauty</p>

            <div className="flex  justify-between  gap-4">
                <div className="flex flex-col">
                    <span className=" flex justify-center">{systemMetrics?.blogs?.size ?? 0}</span>
                    <span>blogs</span>
                </div>

                <div className="flex flex-col">
                    <span className=" flex justify-center">{systemMetrics?.projects?.size ?? 0}</span>
                    <span>projects</span>
                </div>

                <div className="flex flex-col">
                    <span className=" flex justify-center">{systemMetrics?.tags?.size ?? 0}</span>
                    <span>tags</span>
                </div>

                <div className="flex flex-col">
                    <span className=" flex justify-center">{systemMetrics?.views?.size ?? 0}</span>
                    <span>views</span>
                </div>
            </div>
        </>
    )
}