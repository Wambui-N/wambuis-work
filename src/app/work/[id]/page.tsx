import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import projects from "@/data/projects.json";
import Hero from "@/components/ui/Hero";
import ProjectCard from "@/components/ui/ProjectCard";

interface CaseStudyPageProps {
  params: Promise<{
    id: string;
  }>;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = async ({ params }) => {
  // Resolve the params promise
  const { id } = await params; // Extract id after resolving the promise

  // Filter the project based on the provided id
  const project = projects.find((p) => p.id.toString() === id); // Use the resolved id

  // Check if the project exists
  if (!project) {
    return <div>Project not found</div>; // Handle case where project is not found
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>{project.title} | Case Study</title>
        <meta name="description" content={project.description} />
      </Head>

      <main className="">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* Hero Section */}
          <Hero
            children={
              <section className="flex h-auto w-4/5 flex-col justify-center gap-4">
                <h4 className="">{project.title}</h4>
                <div className="mb-4 flex items-center space-x-4">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    {project.category}
                  </span>
                  {/* Project Link */}
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-800"
                  >
                    View Live Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                  {/* <span className="text-sm text-gray-600">
              {project.industry} Industry
            </span> */}
                </div>
                <p className="mb-6 text-gray-600">{project.description}</p>
              </section>
            }
          />

          {/* Image/Video Placeholder 1 */}
          <section className="mb-16 flex h-96 items-center justify-center bg-gray-100">
            <p className="text-gray-500">Website Design & Layout Screenshot</p>
          </section>

          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-semibold">Project Overview</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-medium">Project Goal</h3>
                <p className="">{project.projectOverview.projectGoal}</p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium">Challenges</h3>
                <p className="">{project.projectOverview.challenges}</p>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-semibold">
              Design & Development Process
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-xl font-medium">Design Approach</h3>
                <p className="">{project.process.designApproach}</p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium">SEO Strategy</h3>
                <p className="">{project.process.seoStrategy}</p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium">Collaboration</h3>
                <p className="">{project.process.collaboration}</p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium">
                  Development Challenges
                </h3>
                <p className="">{project.process.challenges}</p>
              </div>
            </div>
          </section>

          {/* Image/Video Placeholder 2 */}
          <section className="mb-16 flex h-96 items-center justify-center bg-gray-100">
            <p className="text-gray-500">Development & Integration Process</p>
          </section>

          {/* Functionalities & Automations */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-semibold">Key Functionalities</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="">
                <h3 className="mb-4 text-xl font-medium">Lead Capture</h3>
                <p>{project.functionalitiesAndAutomationsAdded.leadCapture}</p>
              </div>
              <div className="">
                <h3 className="mb-4 text-xl font-medium">Responsive Design</h3>
                <p>
                  {project.functionalitiesAndAutomationsAdded.responsiveDesign}
                </p>
              </div>
              <div className="">
                <h3 className="mb-4 text-xl font-medium">Tech Stack</h3>
                <p>
                  {project.functionalitiesAndAutomationsAdded.technologyStack}
                </p>
              </div>
            </div>
          </section>

          {/* Image/Video Placeholder 3 */}
          <section className="mb-16 flex h-96 items-center justify-center bg-gray-100">
            <p className="text-gray-500">WhatsApp Integration & Features</p>
          </section>

          {/* Outcome & Results */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-semibold">Outcome & Results</h2>
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-xl font-medium">Success Metrics</h3>
                <p className="">{project.outcomeAndResults.successMetrics}</p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium">
                  Analytics & Future Potential
                </h3>
                <p className="">{project.outcomeAndResults.analytics}</p>
              </div>
            </div>
          </section>

          {/* Project Details */}
          <section className="rounded-lg bg-black/5 p-8">
            <h2 className="mb-6 text-2xl font-semibold">Project Details</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="mb-4 text-xl font-medium">Category</h3>
                <p className="text-gray-700">{project.category}</p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium">Industry</h3>
                <p className="text-gray-700">{project.industry}</p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-medium">Project Link</h3>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate text-blue-600 transition-colors hover:text-blue-800"
                >
                  {project.link}
                </Link>
              </div>
            </div>
          </section>
        </div>
        {/* <div className="grid grid-cols-2 gap-x-12 gap-y-6">
          {projects.slice(project.id + 1, project.id + 3).map((project) => {
            const tags = project.category.split(",").join(" —");
            return (
              <ProjectCard
                href={`/work/${project.id}`}
                key={project.id}
                company={project.title}
                tags={tags}
                image={project.image}
              />
            );
          })}
        </div> */}
      </main>
    </div>
  );
};

export default CaseStudyPage;
