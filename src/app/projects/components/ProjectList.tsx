import TagChipList from "components/chip/TagChipList";
import { Project } from "models/project";
import Link from "next/link";

export default function ProjectList({ projects }: { projects: Project[] }) {
    return (
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-between animate-fadeIn">
            {
                projects.map((project, idx) => {
                    return (
                        <li key={idx}
                            className={`w-full rounded-lg flex flex-col gap-3 px-4 overflow-hidden 
                        shadow-inner 
                         hover:bg-white-hover dark:bg-dark dark:text-white dark:hover:bg-dark-hover dark:border-slate-300/75 border-1
                         animate-fadeIn`}
                            style={{ animationDelay: `${(idx + 1) * 200}ms`}} >
                            <div className="font-bold text-xl my-2 line-clamp-1 dark:bg-medium dark:text-white">
                                <Link href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'pwang1997'}/${project?.sourceCodeUrl}`} className="underline">
                                    {project.title}
                                </Link>
                            </div>
                            <p className="text-gray-900 text-base line-clamp-2 dark:bg-dark-second dark:text-white">{project.summary}</p>
                            <TagChipList tags={project.tags ?? []} />
                        </li>
                    )
                })
            }
        </ul>
    )
}