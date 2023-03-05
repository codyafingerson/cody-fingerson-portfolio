import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global components
import NavBar from './components/NavBar';

// Page importds
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </Router>
  )
}

export default App
