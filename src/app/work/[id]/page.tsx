import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import projects from "@/data/projects.json";
import Hero from "@/components/ui/Hero";
import ProjectCard from "@/components/ui/ProjectCard";

const CaseStudyPage = ({ params }: { params: any }) => {
  return projects.map((project) => (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>{project.title} | Case Study</title>
        <meta name="description" content={project.description} />
      </Head>

      <main className="">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Hero Section */}
          <Hero
            children={
              <section className="flex flex-col justify-center gap-4 w-4/5 h-auto">
                <h4 className="">{project.title}</h4>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  {/* Project Link */}
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Live Project <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                  {/* <span className="text-sm text-gray-600">
              {project.industry} Industry
            </span> */}
                </div>
                <p className="text-gray-600 mb-6">{project.description}</p>
              </section>
            }
          />

          {/* Image/Video Placeholder 1 */}
          <section className="mb-16 bg-gray-100 h-96 flex items-center justify-center">
            <p className="text-gray-500">Website Design & Layout Screenshot</p>
          </section>

          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Project Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Project Goal</h3>
                <p className="">{project.projectOverview.projectGoal}</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Challenges</h3>
                <p className="">{project.projectOverview.challenges}</p>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">
              Design & Development Process
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Design Approach</h3>
                <p className="">{project.process.designApproach}</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">SEO Strategy</h3>
                <p className="">{project.process.seoStrategy}</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Collaboration</h3>
                <p className="">{project.process.collaboration}</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">
                  Development Challenges
                </h3>
                <p className="">{project.process.challenges}</p>
              </div>
            </div>
          </section>

          {/* Image/Video Placeholder 2 */}
          <section className="mb-16 bg-gray-100 h-96 flex items-center justify-center">
            <p className="text-gray-500">Development & Integration Process</p>
          </section>

          {/* Functionalities & Automations */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Key Functionalities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="">
                <h3 className="text-xl font-medium mb-4">Lead Capture</h3>
                <p>{project.functionalitiesAndAutomationsAdded.leadCapture}</p>
              </div>
              <div className="">
                <h3 className="text-xl font-medium mb-4">Responsive Design</h3>
                <p>
                  {project.functionalitiesAndAutomationsAdded.responsiveDesign}
                </p>
              </div>
              <div className="">
                <h3 className="text-xl font-medium mb-4">Tech Stack</h3>
                <p>
                  {project.functionalitiesAndAutomationsAdded.technologyStack}
                </p>
              </div>
            </div>
          </section>

          {/* Image/Video Placeholder 3 */}
          <section className="mb-16 bg-gray-100 h-96 flex items-center justify-center">
            <p className="text-gray-500">WhatsApp Integration & Features</p>
          </section>

          {/* Outcome & Results */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Outcome & Results</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Success Metrics</h3>
                <p className="">{project.outcomeAndResults.successMetrics}</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Client Feedback</h3>
                <p className="">{project.outcomeAndResults.clientFeedback}</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">
                  Analytics & Future Potential
                </h3>
                <p className="">{project.outcomeAndResults.analytics}</p>
              </div>
            </div>
          </section>

          {/* Project Details */}
          <section className="bg-black/5 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Project Details</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-medium mb-4">Category</h3>
                <p className="text-gray-700">{project.category}</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Industry</h3>
                <p className="text-gray-700">{project.industry}</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Project Link</h3>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors truncate"
                >
                  {project.link}
                </Link>
              </div>
            </div>
          </section>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
          {/* {projects.map((project, index) => {
            const tags = project.category.split(",").join(" —");
            return (
              <ProjectCard
                href={`/work/${project.id}`}
                key={project.id}
                company={project.title}
                tags={tags}
              />
            );
          })} */}
          {/* List the next 2 projects */}
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
        </div>
      </main>
    </div>
  ));
};

export default CaseStudyPage;
