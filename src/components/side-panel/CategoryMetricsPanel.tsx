import RectangleGroupIcon from "icons/RectangleGroupIcon";
import { SystemMetrics } from "models/base";
import { fetchSystemMetrics } from "services/systemMetricsServices";

export default async function CategoryMetricsPanel() {
    const categoryMetrics = (await fetchSystemMetrics(["tags"])).data as SystemMetrics;

    console.log(categoryMetrics);
    return (
        <div>
            <div className="flex gap-1">
                <RectangleGroupIcon /> Categories
            </div>

            {/* {categoryMetrics?.tags?.items?.map((categoryName : string) => {
                return (
                    <div key={categoryMetrics[categoryName].name} className="flex justify-between">
                        <dd>{categoryMetrics[categoryName].name}</dd>
                        <dd>{categoryMetrics[categoryName].size}</dd>
                    </div>
                )
            })} */}
        </div>
    )
}