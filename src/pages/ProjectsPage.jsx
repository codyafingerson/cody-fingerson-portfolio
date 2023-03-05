import Container from "../components/shared/Container";
import ProjectCard from "../components/ProjectCard";
import myProjects from "../assets/myProjects";

function ProjectsPage() {
  return (
    <Container>
      <div className="bg-gray-800 text-white z-10">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold border-b-2 border-gray-700">
            Projects
          </h1>
          <div className="mt-8">
            <div>
              {myProjects.map((project, index) => (
                <div className="mt-4" key={index}>
                    <ProjectCard projectTitle={project.title} 
                        projectDescription={project.description}
                        projectUrl={project.url}
                    />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProjectsPage;
