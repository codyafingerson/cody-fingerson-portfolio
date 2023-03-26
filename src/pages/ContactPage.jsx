import Container from "../components/shared/Container";
import { Link } from "react-router-dom";

const linkedInUrl = "https://linkedin.com/in/codyfingerson";
const gitHubUrl = "https://github.com/codyafingerson";
const personalEmailUrl = "mailto:codyfingerson0428@gmail.com";
const accademicEmailUrl = "mailto:cody.fingerson@students.montana.edu";

function ContactPage() {
  return (
    <Container>
      <h1 className="text-4xl font-bold border-b-2 border-gray-700 mb-6">Contact</h1>
      <div>
        <div className="flex flex-col gap-2">
          <Link to={linkedInUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <i className="fab fa-linkedin-in"></i>
            LinkedIn
          </Link>
          <Link to={gitHubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <i className="fab fa-github"></i>
            GitHub
          </Link>
          <Link to={personalEmailUrl} className="flex items-center gap-2">
            <i className="fas fa-envelope"></i>
            Personal Email
          </Link>
          <Link to={accademicEmailUrl} className="flex items-center gap-2">
            <i className="fas fa-envelope"></i>
            Accademic Email
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default ContactPage;
