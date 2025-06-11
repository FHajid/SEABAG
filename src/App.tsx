// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Projects from './pages/projects';

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/"></Link>
        <Link to="/About"></Link>
        <Link to="/contact"></Link>
        <Link to="/gallery"></Link>
        <Link to="/projects"></Link>

      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}