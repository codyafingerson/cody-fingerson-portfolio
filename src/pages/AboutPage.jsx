import { Link } from "react-router-dom"
import Container from "../components/shared/Container";

function AboutePage() {
    return (
        <Container>
            <h1 className="text-4xl font-bold border-b-2 border-gray-700">
                About Me
            </h1>
            <div className="mt-6">
                <p>
                    I am a dedicated and highly motivated undergraduate student pursuing a degree in computer science at Montana State University. As a former certified pharmacy technician,
                    I honed my skills in managing automated medication dispensing cabinets, specifically the Omnicell
                    dispensing machine. This experience sparked my interest in the complex interconnectivity of
                    computer systems, and I became increasingly curious about the software driving their functionality. This curiosity blossomed into a deep passion for computer science, which continues to drive me to pursue excellence in the field.
                    Through my academic career, I have acquired extensive expertise in various programming
                    languages, including <b>Python, Java, JavaScript/TypeScript, C/C++/C#</b>, and more.
                    I have also gained knowledge in web development, object-oriented programming, software engineering, computer ethics, data structures, and algorithms. Additionally, I have independently taught myself various technologies, such as Git, MongoDB, NodeJS, ReactJS, and ASP.NET, among others, which has allowed me to further enhance my skill set.
                    My commitment to academic excellence is evident in my outstanding academic record,
                    and I am always eager to take on new challenges and opportunities to expand
                    my knowledge and expertise. With my strong technical skills, coupled with my passion
                    for computer science, I am confident that I will be able to make a significant contribution to any
                    organization or team.

                </p>
            </div>
            <div className="mt-6">
                <p>For more, please see my <Link to="/resume">resume</Link></p>
            </div>
        </Container>

    )
}

export default AboutePage