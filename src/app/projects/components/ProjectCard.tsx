'use client';

import TagChipList from "components/chip/TagChipList";
import { Project } from "models/project";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectCard({ project, timeout }: { project: Project, timeout: number }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), timeout)
  }, [timeout])

  return (
    <div>
      {
        show && (
          <div className={`max-w-xs w-72 rounded flex flex-col gap-3 px-4 overflow-hidden shadow-lg hover:bg-white-hover dark:bg-dark dark:text-white dark:hover:bg-dark-hover 
        dark:border-slate-300/75 border-1 animated`}>
            <div>
              <div className="font-bold text-xl my-2 line-clamp-1 dark:bg-medium dark:text-white">
                <Link href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'pwang1997'}/${project?.sourceCodeUrl}`} className="underline">
                  {project.title}
                </Link>
              </div>
              <p className="text-gray-900 text-base line-clamp-3 dark:bg-medium dark:text-white">{project.summary}</p>
            </div>
            <div>
              <TagChipList tags={project.tags ?? []} />
            </div>
          </div>
        )
      }
    </div>
  );
};
