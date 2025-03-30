import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
// import About from './components/About/About';
import SearchCourses from './components/SearchCourse/SearchCourse'
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/search" element={<SearchCourses />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
