import TagChipList from "components/chip/TagChipList";
import CloudArrowIcon from "icons/CloudArrowIcon";
import GitHubIcon from "icons/GitHubIcon";
import { Project } from "models/project";
import Link from "next/link";

export const demoUrl = (url: string) => {
  return (
    <div className="flex">
      <div>
        <CloudArrowIcon />
      </div>
      <a href={`https://${url}`}>Demo</a>
    </div>
  );
};

export const sourceCodeUrl = (url: string) => {
  return (
    <div className="flex">
      <div>
        <GitHubIcon />
      </div>
      <a href={`https://${url}`}>Source Code</a>
    </div>
  );
};

export const projectCard = (project: Project) => {
  return (
    <div className="max-w-xs rounded flex flex-col gap-3 px-4 overflow-hidden shadow-lg bg-white">
      <div>
        <div className="font-bold text-xl mb-2 line-clamp-1">{project.title}</div>
        <p className="text-gray-700 text-base line-clamp-3">{project.summary}</p>
      </div>
      <div className="container flex flex-col gap-2  link-set">
        {!!project.sourceCodeUrl && sourceCodeUrl(`github.com/${project.sourceCodeUrl}`)}

        {!!project.demoUrl && demoUrl(project.demoUrl)}
      </div>

      <div>
        <TagChipList tags={project.tags ?? []} />
      </div>
      <div className="flex justify-end float-right">
        <Link
          className="bg-grey-500   text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          href={`/projects/${project.id}`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};
