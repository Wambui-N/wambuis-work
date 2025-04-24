import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import projects from "@/data/projects.json";
import Hero from "@/components/ui/Hero";
import ProjectCard from "@/components/ui/ProjectCard";
import Image from "next/image";

interface CaseStudyPageProps {
  params: Promise<{
    id: string;
  }>;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = async ({ params }) => {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>{project.title} | Case Study</title>
        <meta name="description" content={project.description} />
      </Head>

      <main className="">
        <div className="container mx-auto px-0 py-12 md:max-w-4xl md:px-4">
          {/* Hero Section */}
          <Hero
            children={
              <section className="flex h-auto w-full flex-col justify-center gap-4 lg:w-4/5">
                <h4 className="">{project.title}</h4>
                <div className="mb-4 flex flex-row items-center space-x-4">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    {project.category}
                  </span>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-800"
                    >
                      View Live Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  )}
                </div>
                <p className="mb-6 text-gray-600">{project.description}</p>
              </section>
            }
          />

          {/* Showcase Image */}
          {project.showcase && (
            <section className="mb-16 flex h-auto items-center justify-center bg-gray-100">
              <Image
                className="h-full w-full object-contain"
                src={project.showcase}
                alt={`${project.title} Showcase`}
                width={1280}
                height={800}
                quality={100}
              />
            </section>
          )}

          {/* Project Overview */}
          {project.projectOverview && (
            <section className="mb-16">
              <h2 className="mb-6 text-3xl font-semibold">Project Overview</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {project.projectOverview.projectGoal && (
                  <div>
                    <h3 className="mb-4 text-xl font-medium">Project Goal</h3>
                    <p className="">{project.projectOverview.projectGoal}</p>
                  </div>
                )}
                {project.projectOverview.challenges && (
                  <div>
                    <h3 className="mb-4 text-xl font-medium">Challenges</h3>
                    <p className="">{project.projectOverview.challenges}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Process */}
          {project.process && (
            <section className="mb-16">
              <h2 className="mb-6 text-3xl font-semibold">
                Design & Development Process
              </h2>
              <div className="space-y-8">
                {project.process.designApproach && (
                  <div>
                    <h3 className="mb-4 text-xl font-medium">Design Approach</h3>
                    <p className="">{project.process.designApproach}</p>
                  </div>
                )}
                {project.process.seoStrategy && (
                  <div>
                    <h3 className="mb-4 text-xl font-medium">SEO Strategy</h3>
                    <p className="">{project.process.seoStrategy}</p>
                  </div>
                )}
                {project.process.collaboration && (
                  <div>
                    <h3 className="mb-4 text-xl font-medium">Collaboration</h3>
                    <p className="">{project.process.collaboration}</p>
                  </div>
                )}
                {project.process.challenges && (
                  <div>
                    <h3 className="mb-4 text-xl font-medium">
                      Development Challenges
                    </h3>
                    <p className="">{project.process.challenges}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Integration Image */}
          {project.displayIntergration && (
            <section className="mb-16 flex h-auto items-center justify-center bg-gray-100">
              <Image
                className="h-full w-full object-contain"
                src={project.displayIntergration}
                alt={`${project.title} Integration`}
                width={1280}
                height={800}
                quality={100}
              />
            </section>
          )}

          {/* Functionalities & Automations */}
          {project.functionalitiesAndAutomationsAdded && (
            <section className="mb-16">
              <h2 className="mb-6 text-3xl font-semibold">Key Functionalities</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {project.functionalitiesAndAutomationsAdded.leadCapture && (
                  <div className="">
                    <h3 className="mb-4 text-xl font-medium">Lead Capture</h3>
                    <p>{project.functionalitiesAndAutomationsAdded.leadCapture}</p>
                  </div>
                )}
                {project.functionalitiesAndAutomationsAdded.responsiveDesign && (
                  <div className="">
                    <h3 className="mb-4 text-xl font-medium">Responsive Design</h3>
                    <p>
                      {project.functionalitiesAndAutomationsAdded.responsiveDesign}
                    </p>
                  </div>
                )}
                {project.functionalitiesAndAutomationsAdded.technologyStack && (
                  <div className="">
                    <h3 className="mb-4 text-xl font-medium">Tech Stack</h3>
                    <p>
                      {project.functionalitiesAndAutomationsAdded.technologyStack}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Outcome & Results */}
          {project.outcomeAndResults && (
            <section className="mb-16">
              <h2 className="mb-6 text-3xl font-semibold">Outcome & Results</h2>
              <div className="space-y-8">
                {project.outcomeAndResults.successMetrics && (
                  <div>
                    <h3 className="mb-4 text-xl font-medium">Success Metrics</h3>
                    <p className="">{project.outcomeAndResults.successMetrics}</p>
                  </div>
                )}
                {project.outcomeAndResults.analytics && (
                  <div>
                    <h3 className="mb-4 text-xl font-medium">
                      Analytics & Future Potential
                    </h3>
                    <p className="">{project.outcomeAndResults.analytics}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Project Details */}
          <section className="rounded-lg bg-black/5 p-8">
            <h2 className="mb-6 text-2xl font-semibold">Project Details</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {project.category && (
                <div>
                  <h3 className="mb-4 text-xl font-medium">Category</h3>
                  <p className="text-gray-700">{project.category}</p>
                </div>
              )}
              {project.industry && (
                <div>
                  <h3 className="mb-4 text-xl font-medium">Industry</h3>
                  <p className="text-gray-700">{project.industry}</p>
                </div>
              )}
              {project.link && (
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
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CaseStudyPage;
