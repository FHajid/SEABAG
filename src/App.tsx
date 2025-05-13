// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/"></Link>
        <Link to="/About"></Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}