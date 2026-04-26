import '../styles/Resume.css';
import { resumeData } from '../data/resume';

const Resume = () => {
  return (
    <div className="resumeContainer" id="resume">
      <h1 className='resumeHeader'>My <span style={{ color: '#FF004F' }}>Resume</span></h1>
      <div className="resumeSections">
        <div className="resumeColumn">
          <h2 className="resumeSectionTitle">EXPERIENCE</h2>
          {resumeData.experience.map((exp, index) => (
            <ResumeCard
              key={index}
              date={exp.date}
              title={exp.title}
              company={exp.company}
              aboutCompany={exp.aboutCompany}
              location={exp.location}
              bullets={exp.bullets}
            />
          ))}
        </div>

        <div className="resumeColumn">
          <h2 className="resumeSectionTitle">EDUCATION</h2>
          {resumeData.education.map((edu, index) => (
            <ResumeCard
              key={index}
              date={edu.date}
              title={edu.title}
              company={edu.company}
              location={edu.location}
              bullets={edu.bullets}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;

// ✅ Reusable Card Component
function ResumeCard({ date, title, company, aboutCompany, location, bullets }) {
  return (
    <div className="resumeCard">
      <p className="resumeDate">{date}</p>
      <h3 className="resumeTitle">{title}</h3>
      <p className="resumeCompany">{company}</p>
      {aboutCompany && <p className="resumeAboutCompany">{aboutCompany}</p>}
      <p className="resumeLocation">{location}</p>
      <ul className="resumeBullets">
        {bullets.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
