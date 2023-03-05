import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global components
import NavBar from './components/NavBar';

// Page importds
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
