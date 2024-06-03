import Breadcrumb from "components/breadcrumb";
import { Post } from "models/post";
import { listBlogs } from "services/blogServices";
import NetworkGraph from "../components/NetworkGraph";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const blogs = (await listBlogs())?.data as Post[];

    const pageContent = () => {
        if (id === 'network-graph') {
            return (
                <NetworkGraph blogs={blogs} />
            )
        }
    }
    return (
        <div>
            <Breadcrumb />
            <div>
                {pageContent()}
            </div>


        </div>
    )

}