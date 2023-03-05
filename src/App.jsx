import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global components
import NavBar from './components/NavBar';

// Page importds
import IndexPage from "./pages/IndexPage";
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
