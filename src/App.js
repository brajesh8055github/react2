import './App.css';
import Home from './components/Home';
import Project from './components/Project';
import Navbar from './Page/Navbar';
import Contact from './components/Contact'
import React from "react";
function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Project />
      <Contact />
    </div>
  );
}

export default App;

