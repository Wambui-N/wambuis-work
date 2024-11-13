import projects from "@/data/projects.json"

const Projects = () => {

  return (
    <div>
      <table className="w-full border-collapse">
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
      </table>
    </div>
  );
};

export default Projects;
