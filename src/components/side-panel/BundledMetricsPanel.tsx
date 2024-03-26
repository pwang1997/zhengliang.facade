import CategoryMetricsPanel from "./CategoryMetricsPanel";
import SystemMetricsPanel from "./SystemMetricsPanel";


export default function BundledMetricsPanel() {
    return (
        <div className="flex flex-col gap-6 max-w-sm w-1/4">

            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <SystemMetricsPanel />
            </div>
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <CategoryMetricsPanel />
            </div>

        </div>
    )

}