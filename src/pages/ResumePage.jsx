import Container from "../components/shared/Container";
import pdf from "../assets/fingerson_cody_resume.pdf";

function ResumePage() {
  return (
    <Container>
      <h1 className="text-4xl font-bold border-b-2 border-gray-700">Resume</h1>
      <div className="flex flex-col items-center justify-center">
        <iframe src={pdf} frameborder="0" 
          className="w-full h-screen"
        ></iframe>
      </div>
      
    </Container>
  );
}

export default ResumePage;
