import { Project } from "models/project";
import ProjectList from "./ProjectList";

export default function ProjectsContent({ projects }: { projects: Project[]}) {

    return (
        <div className="main-container w-full">
            <div className="card-container container flex gap-2 m-2 grow flex-wrap gap-x-6 gap-y-2 content-center">
                <ProjectList projects={projects} />
            </div>
        </div>
    )
}