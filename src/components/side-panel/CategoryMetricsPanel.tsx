import RectangleGroupIcon from "icons/RectangleGroupIcon";
import { SystemMetrics } from "models/base";
import { fetchSystemMetrics } from "services/systemMetricsServices";
import { mergeLists } from "utils/misc-utils";

export default async function CategoryMetricsPanel() {
    const categoryMetrics = (await fetchSystemMetrics(["tags:COUNT_USAGE"])).data as SystemMetrics;
    const countUsage = categoryMetrics?.[`tags:COUNT_USAGE`] as SystemMetrics;
    const { projects, posts } = countUsage;
    const merged = mergeLists(projects as SystemMetrics[], posts as SystemMetrics[])

    return (
        <div>
            <div className="flex gap-1">
                <RectangleGroupIcon /> Categories
            </div>

            {merged.map((item: { name: string; count: number }) => {
                return (
                    <div key={item.name} className="flex justify-between">
                        <p className={"flex justify-between hover:bg-gray-300 dark:hover:bg-slate-500  rounded py-1 px-1.5 transition-all w-full uppercase"}>
                            <span>{item.name}</span>
                            <span>{item.count}</span>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}