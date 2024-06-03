import Breadcrumb from "components/breadcrumb";
import BundledMetricsPanel from "components/side-panel/BundledMetricsPanel";
import { Project } from "models/project";
import { listProjects } from "services/projectServices";
import ProjectsContent from "./components/ProjectsContent";

const Page = async () => {
  const projects = (await listProjects())?.data as Project[] ?? [];

  return (
    <div className='content container min-h-screen max-w-5xl flex-grow pt-4 lg:mx-auto'>
      <div className="container flex flex-col gap-4">
        <Breadcrumb />
        <div className="flex min-w-full gap-4">
          <ProjectsContent projects={projects} />
          <div className="side-panel">
            <BundledMetricsPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
