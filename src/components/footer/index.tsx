import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GitHubIcon from "icons/GitHubIcon";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-dark">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="/projects" className="hover:underline me-4 md:me-6">Projects</Link>
                    </li>
                    <li>
                        <Link href="/blogs" className="hover:underline me-4 md:me-6">Blogs</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
                    </li>
                    <li>
                        <Link href="/about#contact" className="hover:underline">Contact</Link>
                    </li>
                    <li>
                        <Link className='flex justify-center items-center pl-4 text-sm font-semibold leading-6 text-gray-900 dark:text-white' href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'pwang1997'}`}>
                            <GitHubIcon />
                        </Link>
                    </li>
                </ul>
            </div>
            <Analytics />
            <SpeedInsights />
        </footer>

    )
}