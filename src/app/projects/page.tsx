import Breadcrumb from "components/breadcrumb";
import { CategoryPanelDataProp } from "components/category-panel";
import BundledMetricsPanel from "components/side-panel/BundledMetricsPanel";
import { SystemMetrics } from "models/base";
import { Project } from "models/project";
import { listProjects } from "services/projectServices";
import { fetchSystemMetrics } from "services/systemMetricsServices";
import ProjectsContent from "./components/ProjectsContent";

const Page = async () => {
  const projects = (await listProjects())?.data as Project[] ?? [];

  const categoryMetrics = (await fetchSystemMetrics(["tags:COUNT_USAGE"]))?.data as SystemMetrics;
  const countUsage = categoryMetrics?.[`tags:COUNT_USAGE`] as SystemMetrics;
  const projectTagUsage = countUsage?.projects as CategoryPanelDataProp[];

  return (
    <div className='content container min-h-screen max-w-7xl flex-grow pt-4 lg:mx-auto'>
      <div className="container flex flex-col gap-4">
        <div>
          <Breadcrumb />
        </div>
        <div className="flex min-w-full gap-4">
          <ProjectsContent projects={projects} projectTagUsage={projectTagUsage} />
          <div className="side-panel">
            <BundledMetricsPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
