import '../styles/Projects.css';
import { projectsData } from '../data/projects';
import SectionMarker from './SectionMarker';

const pad2 = (n) => String(n).padStart(2, '0');

const Projects = () => {
  const featured = projectsData[0];
  const rest = projectsData.slice(1);

  return (
    <section className='projectsSection section' id='projects'>
      <div className='container'>
        <SectionMarker num='04' label='Selected Work'>
          Things I've <em>shipped</em>.
        </SectionMarker>

        <article className='featured-project'>
          <div className='featured-content'>
            <div className='featured-meta'>
              <span className='featured-num'>FEATURED · 01</span>
              <span className='featured-company'>{featured.company}</span>
            </div>
            <h3 className='featured-title'>{featured.title}</h3>
            <p className='featured-desc'>{featured.desc}</p>
            <div className='featured-tech'>
              {featured.tech.map((t) => (
                <span key={t} className='featured-tech-tag'>{t}</span>
              ))}
            </div>
          </div>
          <div className='featured-side'>
            <div className='featured-num-display'>01</div>
            <div className='featured-side-meta'>
              <span>Production</span>
              <span>Multi-OEM</span>
              <span>React Native</span>
            </div>
          </div>
        </article>

        <div className='project-list'>
          {rest.map((project, i) => (
            <article key={project.title} className='project-list-row'>
              <span className='plr-num'>{pad2(i + 2)}</span>
              <div className='plr-body'>
                <div className='plr-head'>
                  <h3 className='plr-title'>{project.title}</h3>
                  <span className='plr-company'>{project.company}</span>
                </div>
                <p className='plr-desc'>{project.desc}</p>
                <div className='plr-tech'>
                  {project.tech.map((t) => (
                    <span key={t} className='plr-tech-tag'>{t}</span>
                  ))}
                </div>
              </div>
              <span className='plr-arrow'>→</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
