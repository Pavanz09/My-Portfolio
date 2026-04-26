import '../styles/Resume.css';
import { resumeData } from '../data/resume';
import SectionMarker from './SectionMarker';

const TimelineBlock = ({ label, items, showAboutCompany = false }) => (
  <div className='timeline-block'>
    <div className='timeline-rail-label'>{label}</div>
    <div className='timeline'>
      <div className='timeline-spine' />
      {items.map((item, idx) => (
        <article key={`${item.company}-${item.date}`} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
          <div className='timeline-node' />
          <div className='timeline-card'>
            <span className='timeline-date'>{item.date}</span>
            <h3 className='timeline-title'>{item.title}</h3>
            <p className='timeline-company'>
              {item.company} <span>{item.location}</span>
            </p>
            {showAboutCompany && item.aboutCompany && (
              <p className='timeline-about'>{item.aboutCompany}</p>
            )}
            <ul className='timeline-bullets'>
              {item.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const Resume = () => (
  <section className='resumeSection section' id='resume'>
    <div className='container'>
      <SectionMarker num='03' label='Journey'>
        Experience &amp; <em>education</em>.
      </SectionMarker>

      <TimelineBlock label='EXPERIENCE' items={resumeData.experience} showAboutCompany />
      <TimelineBlock label='EDUCATION' items={resumeData.education} />
    </div>
  </section>
);

export default Resume;
