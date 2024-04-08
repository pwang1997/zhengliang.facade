import Breadcrumb from "components/breadcrumb";
import TagChipList from "components/chip/TagChipList";
import MDRender from "components/MDRender";
import { Project } from "models/project";
import { fetchReadMe } from "services/githubServices";
import { getProjectById } from "services/projectServices";
import { demoUrl, sourceCodeUrl } from "../components/ProjectCard";

const Page = async ({ params }: { params: { id: string } }) => {
  const project = (await getProjectById(params?.id))?.data as Project ?? [];

  const readMe = project?.sourceCodeUrl ? await fetchReadMe(project?.sourceCodeUrl) : '';

  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { href: '/projects', name: 'Projects' },
          { href: `/projects/${params.id}`, name: project?.title as string },
        ]}
      />
      <div className="flex content-center ">
        <span className="text-5xl font-extrabold dark:text-white">
          {project?.title}
        </span>
      </div>
      <div className="md:container md:mx-auto px-4 py-8">
        <span>{project?.summary}</span>
      </div>

      <div className="container mx-auto py-8">
        <MDRender content={readMe as string} />
      </div >
      < div className="container flex flex-col gap-2 px-6 py-4 link-set" >
        {!!project?.sourceCodeUrl &&
          sourceCodeUrl(`github.com/${project?.sourceCodeUrl}`)
        }

        {!!project?.demoUrl && demoUrl(project?.demoUrl)}
      </div >
      <hr />
      <TagChipList tags={project?.tags ?? []} />
    </>
  );
};

export default Page;
