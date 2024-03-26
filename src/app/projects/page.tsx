import { Project } from "models/project";
import { listProjects } from "services/projectServices";
import { projectCard } from "./components/ProjectCard";

const Page = async () => {
  const projectsResponse = await listProjects();
  const projects = projectsResponse.data as Project[];

  return (
      <div className=" container flex gap-2 m-2 grow flex-wrap gap-x-6 gap-y-2">
        {projects?.map((project: Project) => {
          return (
            <div className="project-card-container" key={project.id}>
              {projectCard(project)}
            </div>
          );
        })}
      </div>
  );
};

export default Page;
