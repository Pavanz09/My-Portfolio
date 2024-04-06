import NavigationBar from "./NavigationBar"
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import MainPage from './MainPage'
import About from './About'
import '../styles/Home.css';

export default function Home(){
  return (
    <>
          <NavigationBar/>
          <MainPage/>
          <About/>
          <Skills/> 
          <Projects/>
          <Contact/>
          <CopyRightFooter/>
    </>
  )
};

function CopyRightFooter(){
  return(
    <div className="copyright">
      <p className="copyRightText">&copy; Pavan Satyappanavar 2024 All Rights Reserved</p>
    </div>
  )
}