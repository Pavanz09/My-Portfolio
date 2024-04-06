import React from 'react';
import { BrowserRouter, Routes, Route } from '../node_modules/react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/projects" Component={Projects}></Route>
        <Route path="/skills" Component={Skills}></Route>
        <Route path="/contact" Component={Contact}></Route>
    </Routes>
 </BrowserRouter>
  );
};

export default App;


