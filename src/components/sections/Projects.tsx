import projects from "@/data/projects.json";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <div>
      {/* <table className="w-full border-collapse">
        <thead className="border-b border-black">
          <tr className="">
            <th>Project</th>
            <th>Category</th>
            <th>Industry</th>
          </tr>
        </thead>
        <tbody className="">{projects.map((project) => (
          <tr className="border-b border-black" key={project.id}>
            <td>{project.title}</td>
            <td>{project.category}</td>
            <td>{project.industy}</td>
            </tr>
        ))}</tbody>
      </table> */}

      <div className="grid grid-cols-2 gap-x-12 gap-y-6">
        {projects.map((project) => {
          const tags = project.category.split(',').join(' —')
          return <ProjectCard key={project.id} company={project.title} tags={tags} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
