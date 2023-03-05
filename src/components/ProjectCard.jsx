import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProjectCard({ projectTitle, projectDescription, projectUrl }) {
    return (
        <div class="mt-4 rounded-lg overflow-hidden shadow-lg">
            <div class="p-4">
                <h2 class="text-lg font-bold mb-2">{projectTitle}</h2>
                <p class="text-base">{projectDescription}</p>
                <Link to={projectUrl} target="_blank" rel="noopener noreferrer" class="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">View Project</Link>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    projectTitle: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
