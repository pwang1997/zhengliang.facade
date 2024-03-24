import PageIntro from "components/page-intro";
import { Project } from "models/project";
import { listProjects } from "services/projectServices";
import { projectCard } from "./components";

const Page = async () => {
  const projectsResponse = await listProjects();
  const projects = projectsResponse.data as Project[];

  return (
    <div>
      <PageIntro name="Projects"/>
      <div className="project-cards-container container flex flex-col gap-2 p-4 m-4">
        {projects?.map((project: Project) => {
          return (
            <div className="project-card-container" key={project.id}>
              {projectCard(project)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
