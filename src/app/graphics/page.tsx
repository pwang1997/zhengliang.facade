import Breadcrumb from "components/breadcrumb";
import Link from "next/link";


const Page = async () => {
    const graphicsItem = (summary: string, link: string) => {
        return (
            <li className="animate-fade-up animate-ease-in-out shadow-lg">
                <Link className="flex flex-col justify-between h-full text-primary px-6 py-4 transition-colors rounded-lg bg-transparent hover:bg-primary-foreground"
                    href={link}>
                    <p className="line-clamp-2 text-sm text-muted-foreground mb-3">
                        {summary}
                    </p>
                </Link>
            </li>
        )
    }
    return (
        <div className="container flex flex-col gap-4 h-[calc(100vh-64px)] max-w-5xl flex-grow pt-4 mx-auto animate-fadeIn">
            <Breadcrumb />

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {graphicsItem(
                    "Network Graph for post tag association",
                    '/graphics/network-graph'
                )}

                {graphicsItem(
                    "Word Cloud for tags",
                    '/graphics/word-cloud'
                )}
            </ul>
        </div>
    );
}

export default Page;