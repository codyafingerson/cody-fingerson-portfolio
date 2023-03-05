import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center py-4 fixed bottom-0 w-full">
      <p>&copy;&nbsp;Cody Fingerson, 2023</p>
      <p>Built using ReactJS and Vite. See my <Link to="https://github.com/codyafingerson/cody-fingerson-portfolio" target="_blank" rel="noopener noreferrer">
        GitHub repo</Link> for the code :) 
        </p>
    </footer>
  )
}

export default Footer