import CategoryMetricsPanel from "./CategoryMetricsPanel";
import SystemMetricsPanel from "./SystemMetricsPanel";


export default function BundledMetricsPanel() {
    return (
        <div className="flex flex-col gap-2 max-w-sm w-1/4 min-w-80">
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                <SystemMetricsPanel />
            </div>
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                <CategoryMetricsPanel />
            </div>
        </div>
    )

}