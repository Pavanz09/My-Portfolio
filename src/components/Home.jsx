import NavigationBar from "./NavigationBar"
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import MainPage from './MainPage'
export default function Home(){
  return (
    <>
          <NavigationBar/>
          <MainPage/>
          <Skills/> 
          <Projects/>
          <Contact/>
    </>
  )
};
