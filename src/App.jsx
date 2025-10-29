import React from 'react';
import MainPage from './components/MainPage';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import NavigationBar from './components/NavigationBar';
import BottomNavBar from './components/BottomNavbar';
import '../src/App.css';


const App = () => {
  return (
    <>
    <NavigationBar/>
    <BottomNavBar/>
    <MainPage/>
    <About/>
    <Skills/> 
    <Resume/>
    <Projects/>
    <Contact/>
    <CopyRightFooter/>
    </>
  );
};

export default App;

function CopyRightFooter(){
  return(
    <div className="copyright">
      <p className="copyRightText">&copy; Pavan Satyappanavar 2024 All Rights Reserved</p>
    </div>
  )
}
