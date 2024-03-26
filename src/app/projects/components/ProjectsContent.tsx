"use client";

import CategoryPanel, { CategoryPanelDataProp } from "components/category-panel";
import { Tag } from "models/post";
import { Project } from "models/project";
import { useCallback, useMemo, useState } from "react";
import { projectCard } from "./ProjectCard";



export default function ProjectsContent({ projects, projectTagUsage }: { projects: Project[], projectTagUsage: CategoryPanelDataProp[] }) {

    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const simpleProjects = useMemo(() =>
        projects.reduce((acc: any, curProject: any) => {
            return [...acc, {
                id: curProject.id,
                tags: curProject.tags?.map((tag: Tag) => tag.name)
            }]
        }, []), [projects]
    );

    const handleOnClick = useCallback((name: string) => {
        setSelectedTag(!!selectedTag ? null : name);
    }, [selectedTag])

    const renderProjectCards = useCallback(() => {
        const filteredSimpleProjects = simpleProjects.filter((project) => project?.tags.includes(selectedTag));

        const selectedProjectIds = (!!selectedTag ? filteredSimpleProjects : simpleProjects).map((item) => item.id);

        const filteredProjects = projects.filter((project) => selectedProjectIds.includes(project.id))
        return (
            <>
                {filteredProjects?.map((project: Project) => {
                    return (
                        <div className="project-card-container" key={project.id}>
                            {projectCard(project)}
                        </div>
                    );
                })}
            </>
        )
    }, [projects, selectedTag, simpleProjects])

    return (
        <>
            <div className="main-container w-full">
                <div className="min-w-full">
                    <CategoryPanel data={projectTagUsage} handleOnClick={handleOnClick} />
                </div>

                <div className="card-container container flex gap-2 m-2 grow flex-wrap gap-x-6 gap-y-2">
                    {renderProjectCards()}
                </div>
            </div>
        </>
    )
}