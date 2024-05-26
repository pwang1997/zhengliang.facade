import Breadcrumb from "components/breadcrumb";
import { Post } from "models/post";
import { listBlogs } from "services/blogServices";
import GraphRelation from "./components/Graph";


const Page = async () => {

    const blogs = (await listBlogs())?.data as Post[];

    return (
        <div className="container flex flex-col gap-4">
            <div>
                <Breadcrumb breadcrumbs={[{ href: '/graphics', name: 'Graphics' }]} />
            </div>
            <div>
                <GraphRelation blogs={blogs} />
            </div>
        </div>
    );
}

export default Page;