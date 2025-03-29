import { useState } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import TopCourses from './components/TopCourses/TopCourses'
import './App.css'

const App = () => {

  return (
      <div className="app-container">
        <Navbar />
        <Home />
        <About />
        <Router>
          <Routes>
            <Route path="/top" component={TopCourses} />
          </Routes>
        </Router>
      </div>
  );
};

export default App;
