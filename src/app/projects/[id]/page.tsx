import TagChipList from "components/chip/TagChipList";
import { Project } from "models/project";
import ReactMarkdown from "react-markdown";
import { fetchReadMe } from "services/githubServices";
import { getProjectById } from "services/projectServices";
import { demoUrl, sourceCodeUrl } from "../components/ProjectCard";

const Page = async ({ params }: { params: { id: string } }) => {
  const projectResponse = await getProjectById(params.id);
  const project: Project = projectResponse.data;

  const readMe = await fetchReadMe(project.sourceCodeUrl);

  return (
    <>
      <div className="flex justify-center content-center ">
        <span className="text-5xl font-extrabold dark:text-white">
          {project?.title}
        </span>
      </div>
      <div className="flex gap-2 m-2">
        <TagChipList tags={project.tags ?? []} />
      </div>
      <div className="md:container md:mx-auto px-4 py-8">
        <span>{project.summary}</span>
      </div>

      <div className="md:container md:mx-auto px-4 py-8">
        <div className="prose">
          <ReactMarkdown>{readMe}</ReactMarkdown>
        </div>
      </div>
      <div className="container flex flex-col gap-2 px-6 py-4 link-set">
        {!!project.sourceCodeUrl &&
          sourceCodeUrl(`github.com/${project.sourceCodeUrl}`)}

        {!!project.demoUrl && demoUrl(project.demoUrl)}
      </div>
    </>
  );
};

export default Page;
