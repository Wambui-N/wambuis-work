import React from "react";
import { Metadata } from "next";
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

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.id.toString() === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
    keywords: [project.category, project.industry, 'web development', 'case study', 'portfolio'],
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.description,
      type: 'article',
      url: `https://wambuiswork.vercel.app/work/${project.id}`,
      images: [
        {
          url: project.showcase || project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} showcase image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Case Study`,
      description: project.description,
      images: [project.showcase || project.image],
    },
    alternates: {
      canonical: `/work/${project.id}`,
    },
  };
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
        <meta name="keywords" content={`${project.category}, ${project.industry}, web development, case study, portfolio`} />
        <meta property="og:title" content={`${project.title} | Case Study`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://wambuiswork.vercel.app/work/${project.id}`} />
        <meta property="og:image" content={project.showcase || project.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} | Case Study`} />
        <meta name="twitter:description" content={project.description} />
        <meta name="twitter:image" content={project.showcase || project.image} />
        <link rel="canonical" href={`https://wambuiswork.vercel.app/work/${project.id}`} />
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
            <section className="mb-16 flex h-auto items-center justify-center bg-gray-50 rounded-xl overflow-hidden shadow-sm">
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
            <section className="mb-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-50 rounded-xl"></div>
              <div className="relative p-8 rounded-xl">
                <h2 className="mb-6 text-3xl font-semibold">Project Overview</h2>
                <div className="grid gap-8 md:grid-cols-2">
                  {project.projectOverview.projectGoal && (
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="mb-4 text-xl font-medium">Project Goal</h3>
                      <p className="">{project.projectOverview.projectGoal}</p>
                    </div>
                  )}
                  {project.projectOverview.challenges && (
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="mb-4 text-xl font-medium">Challenges</h3>
                      <p className="">{project.projectOverview.challenges}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Process */}
          {project.process && (
            <section className="mb-16">
              <div className="border-t border-gray-200 pt-16">
                <h2 className="mb-6 text-3xl font-semibold">
                  Design & Development Process
                </h2>
                <div className="space-y-8">
                  {project.process.designApproach && (
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="mb-4 text-xl font-medium">Design Approach</h3>
                      <p className="">{project.process.designApproach}</p>
                    </div>
                  )}
                  {project.process.seoStrategy && (
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="mb-4 text-xl font-medium">SEO Strategy</h3>
                      <p className="">{project.process.seoStrategy}</p>
                    </div>
                  )}
                  {project.process.collaboration && (
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="mb-4 text-xl font-medium">Collaboration</h3>
                      <p className="">{project.process.collaboration}</p>
                    </div>
                  )}
                  {project.process.challenges && (
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="mb-4 text-xl font-medium">
                        Development Challenges
                      </h3>
                      <p className="">{project.process.challenges}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Integration Image */}
          {project.displayIntergration && (
            <section className="mb-16 flex h-auto items-center justify-center bg-gray-50 rounded-xl overflow-hidden shadow-sm">
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
            <section className="mb-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-50 rounded-xl"></div>
              <div className="relative p-8 rounded-xl">
                <h2 className="mb-6 text-3xl font-semibold">Key Functionalities</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {project.functionalitiesAndAutomationsAdded.leadCapture && (
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="mb-4 text-xl font-medium">Lead Capture</h3>
                      <p>{project.functionalitiesAndAutomationsAdded.leadCapture}</p>
                    </div>
                  )}
                  {project.functionalitiesAndAutomationsAdded.responsiveDesign && (
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="mb-4 text-xl font-medium">Responsive Design</h3>
                      <p>
                        {project.functionalitiesAndAutomationsAdded.responsiveDesign}
                      </p>
                    </div>
                  )}
                  {project.functionalitiesAndAutomationsAdded.technologyStack && (
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="mb-4 text-xl font-medium">Tech Stack</h3>
                      <p>
                        {project.functionalitiesAndAutomationsAdded.technologyStack}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Outcome & Results */}
          {project.outcomeAndResults && (
            <section className="mb-16">
              <div className="border-t border-gray-200 pt-16">
                <h2 className="mb-6 text-3xl font-semibold">Outcome & Results</h2>
                <div className="space-y-8">
                  {project.outcomeAndResults.successMetrics && (
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="mb-4 text-xl font-medium">Success Metrics</h3>
                      <p className="">{project.outcomeAndResults.successMetrics}</p>
                    </div>
                  )}
                  {project.outcomeAndResults.analytics && (
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="mb-4 text-xl font-medium">
                        Analytics & Future Potential
                      </h3>
                      <p className="">{project.outcomeAndResults.analytics}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Project Details */}
          <section className="rounded-xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Project Details</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {project.category && (
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="mb-4 text-xl font-medium">Category</h3>
                  <p className="text-gray-700">{project.category}</p>
                </div>
              )}
              {project.industry && (
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="mb-4 text-xl font-medium">Industry</h3>
                  <p className="text-gray-700">{project.industry}</p>
                </div>
              )}
              {project.link && (
                <div className="bg-white p-6 rounded-lg shadow-sm">
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
