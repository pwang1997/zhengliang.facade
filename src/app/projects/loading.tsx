import Breadcrumb from "components/breadcrumb";
import ListSkeleton from "components/skeleton/ListSkeleton";
import PanelSkeleton from "components/skeleton/PanelSkeleton";

export default async function Loading() {
    return (
        <div className="container flex flex-col gap-4">
            <div>
                <Breadcrumb breadcrumbs={[{ href: '/projects', name: 'Projects' }]} />
            </div>
            <div className="flex min-w-full gap-4">
                <div className="main-container w-full">
                    <div className="min-w-full">
                        <PanelSkeleton />
                    </div>

                    <div className='list-container'>
                        <ListSkeleton />
                    </div>
                </div>
                <div className="side-panel">
                    <PanelSkeleton />
                </div>
            </div>
        </div>
    )
}