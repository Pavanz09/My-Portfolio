import MainPage from './components/MainPage';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import NavigationBar from './components/NavigationBar';
import BottomNavBar from './components/BottomNavbar';
import './App.css';

const App = () => (
  <>
    <NavigationBar />
    <BottomNavBar />
    <main>
      <MainPage />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </main>
    <CopyRightFooter />
  </>
);

export default App;

function CopyRightFooter() {
  return (
    <footer className="copyright">
      <div className="container">
        <p className="copyRightText">&copy; Pavan Satyappanavar {new Date().getFullYear()} <span>·</span> All Rights Reserved</p>
        <p className="copyMeta">Built with React + Vite</p>
      </div>
    </footer>
  );
}
