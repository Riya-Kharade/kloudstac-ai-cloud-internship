import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import LlmsDisplay from "./LlmsDisplay";  // Import new component
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/llms">llms.txt</Link></li>  {/* New link */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/llms" element={<LlmsDisplay />} />  {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;
