import { notFound } from 'next/navigation';
import { projects } from '@/constants/constants';
import ProjectHero from '@/components/ProjectHero';
import ProjectDetails from '@/components/ProjectDetails';
import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("@/components/canvas/Stars"));

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found | Yash Lagare Portfolio'
    };
  }

  return {
    title: `${project.name} | Yash Lagare Portfolio`,
    description: project.tagline || project.description,
  };
}

export default function ProjectPage({ params }) {
  const projectIndex = projects.findIndex((p) => p.slug === params.slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="bg-primary relative z-[1] min-h-screen">
      <div className="relative z-[1] max-w-7xl mx-auto sm:px-16 px-6 py-16 pt-24 lg:pt-32">
        <ProjectHero project={project} />
        <ProjectDetails 
          project={project} 
          previousProject={previousProject} 
          nextProject={nextProject} 
        />
      </div>
      <StarsCanvas />
    </div>
  );
}
