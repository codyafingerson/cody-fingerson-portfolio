import Container from "../components/shared/Container";

import headshot from "../assets/headshot.png"

function IndexPage() {
  return (
    <Container>
      <div className="bg-gray-800 text-whit z-10">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold">Welcome to my portfolio!</h1>
          <hr className="border-gray-700 my-8" />
          <div className="mt-4 flex items-center animate__animated animate__zoomIn">
            <img
              src={headshot}
              alt="Headshot"
              className="rounded-full h-16 w-16 mr-4"
            />
            <div className="p-4 rounded-lg bg-gray-700">
              <h2 className="text-lg font-semibold">Cody A. Fingerson</h2>
              <p>Bachelor of Computer Science Candidate at Montana State University</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-4xl font-bold border-b-2 border-gray-700">Summary</p>
            <p className="mt-4">
              Thank you for visiting my portfolio website. Please feel free to explore the site to learn more about my background and expertise. Before we get started, allow me to introduce myself. My name is Cody Fingerson, and my journey to computer science has been unique. As a non-traditional student, I initially pursued a major in Nursing right after high school in 2017. However, after encountering some personal challenges, I decided to withdraw from school at that time. Later, I found myself working as a pharmacy technician where I gained valuable experience and insights into the healthcare industry. I was responsible for administering an automated dispensing machine (Omnicell) in a hospital pharmacy, which ignited my curiosity about the interaction and operation of computers. I returned to school in 2020 and embarked on my passion for computer science. Looking back, I wish I had pursued this field from the start. I am currently enjoying my studies and eager to see where this journey takes me.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default IndexPage