import Breadcrumb from "components/breadcrumb";
import TextAreaSkeleton from "components/skeleton/TextAreaSkeleton";

export default async function Loading({ params }: { params: { id: string } }) {
    return (
        <>
            <Breadcrumb
                breadcrumbs={[
                    { href: '/about', name: 'About' }
                ]}
            />
            <TextAreaSkeleton />
        </>
    )
}