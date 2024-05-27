"use client";

import { Post } from "models/post";
import { useCallback, useMemo } from "react";
import ForceGraph3D from 'react-force-graph-3d';

export default function NetworkGraph({ blogs }: { blogs: Post[] }) {

    const graphData = useCallback(() => {
        let masterNodes: any[] = blogs.map(blog => {
            return { id: blog.id, name: blog.title, val: (blog.metrics?.views ?? 0) / 10 + 1 }
        });

        let tagNodes: any[] = [];
        blogs.forEach(blog => {
            const nodes = blog.tags?.map(tag => {
                return { id: tag.id, name: tag.name, val: 1 }
            });
            tagNodes = tagNodes.concat(nodes);
        });

        let blogTagLinks: any[] = [];
        blogs.forEach(blog => {
            const nodes = blog.tags?.map(tag => {
                return { target: tag.id, source: blog.id }
            });
            blogTagLinks = blogTagLinks.concat(nodes);
        })

        const nodes = masterNodes.concat(tagNodes);
        return {
            nodes: nodes,
            links: blogTagLinks
        }
    }, [blogs]);

    const dGraph = useMemo(() => graphData(), [graphData]);

    return (
        <>
            <div>
                A bit of description here. This is a 3D network graph of the relation between blog posts and associated tags. 
            </div>
            <div>
                <ForceGraph3D
                    width={800}
                    height={800}
                    graphData={dGraph}
                    nodeLabel={node => `${node.name}`}
                    nodeAutoColorBy="id"
                    linkDirectionalParticles={1}
                />
            </div>
        </>
    )
}