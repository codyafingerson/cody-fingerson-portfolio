import Container from "../components/shared/Container";
import ProjectCard from "../components/ProjectCard";
import myProjects from "../assets/myProjects";

function ProjectsPage() {
  return (
    <Container>

      <h1 className="text-4xl font-bold border-b-2 border-gray-700">
        Projects
      </h1>
      <div className="mt-8">
        <div>
          {myProjects.map((project, index) => (
            <div className="mt-4" key={index}>
              <ProjectCard projectTitle={project.title}
                projectDescription={project.description}
                projectUrl={project.url ? project.url : null}
              />
            </div>
          ))}
        </div>
      </div>

    </Container>
  );
}

export default ProjectsPage;
