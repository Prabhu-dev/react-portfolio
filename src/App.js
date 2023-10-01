import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import About  from "./components/about";
import Navigation from "./components/navigation";
import "./App.css";
import Home from "./components/home";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
        <Navigation/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </Router>
    
  );
}

export default App;
