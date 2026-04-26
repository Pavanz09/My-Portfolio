import '../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skillsData } from '../data/skills';
import SectionMarker from './SectionMarker';

const pad2 = (n) => String(n).padStart(2, '0');

const Skills = () => (
  <section className='skillsSection section' id='skills'>
    <div className='container'>
      <SectionMarker num='02' label='Toolkit'>
        Stack &amp; <em>capabilities</em>.
      </SectionMarker>

      <div className='skill-rows'>
        {skillsData.map((item, index) => (
          <article key={item.id} className='skill-row'>
            <div className='skill-row-num'>
              <span>{pad2(index + 1)}</span>
            </div>

            <div className='skill-row-head'>
              <div className='skill-row-icon'>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3 className='skill-row-title'>{item.title}</h3>
              <p className='skill-row-desc'>{item.description}</p>
            </div>

            <div className='skill-row-tags'>
              {item.tags.map((tag) => (
                <span key={tag} className='skill-row-tag'>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
