import projects from "@/data/projects.json";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-12 gap-y-6">
        {projects.map((project) => {
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
    </div>
  );
};

export default Projects;
