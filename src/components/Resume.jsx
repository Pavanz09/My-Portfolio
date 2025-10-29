import '../styles/Resume.css';

const Resume = () => {
  return (
    <div className="resumeContainer" id="resume">
      <h1 className='resumeHeader'>My <span style={{ color: '#FF004F' }}>Resume</span></h1>
      <div className="resumeSections">
        <div className="resumeColumn">
          <h2 className="resumeSectionTitle">EXPERIENCE</h2>

          <ResumeCard
            date="Jan 2025 – Present"
            title="Software Development Engineer I"
            company="Atom8 Robotic Labs PVT LTD"
            aboutCompany="focuses on building reliable and innovative home automation products."
            location="- Jayanagar Bengaluru"
            bullets={[
              "Led version migration of legacy Angular applications, improving performance and compatibility with modern frameworks.",
              "Revamped UI components and made application layouts fully mobile responsive to enhance user experience across devices.",
              "Developed a Node.js API to integrate BorderPass with Seneca systems, fetching spreadsheet data and converting it to CSV format.",
              "Collaborated with cross-functional teams to gather requirements and deliver solutions aligning with institutional goals.",
              "Maintained technical documentation for newly built APIs and user interface components."
            ]}
          />

          <ResumeCard
            date="Mar 2024 – Dec 2024"
            title="Software Developer"
            company="Digi Solvent InfoTech PVT LTD"
            aboutCompany="is an IT company specializing in custom Web and WordPress development solutions for businesses."
            location="- Bengaluru"
            bullets={[
              "Developed and implemented key HRMS modules including User Authentication, Dashboard, Employee Timesheet, and Leave Management using React Js and Node.js.",
              "Collaborated with backend and design teams to ensure secure data handling, responsive UI, and smooth API integrations across modules.",
              "Enhanced overall system usability and workflow efficiency through optimized state management using Redux Toolkit"
            ]}
          />

          <ResumeCard
            date="May 2023 – Feb 2024"
            title="Junior Software Engineer"
            company="Intelligrow Consultancy Services PVT LTD"
            aboutCompany="provides innovative SaaS banking platforms that streamline financial operations and digital banking services."
            location="- Gokul Road, Hubli"
            bullets={[
              "Design and ensure smooth front-end and back-end integration through cross-functional collaboration that led to reducing bugs from five to one during the test phases.",
              "Joined daily stand-ups of cross-functional teams, resolved critical bugs that were affecting the responsiveness of the website and slowing it down at a high-traffic time.",
              "Implemented OTP-based authentication systems for secure login"
            ]}
          />
        </div>

        <div className="resumeColumn">
          <h2 className="resumeSectionTitle">EDUCATION</h2>

          <ResumeCard
            date="Sep 2019 – Aug 2022"
            title="Bachelor of Engineering in Electronics & Communication"
            company="Jain College Of Engineering"
            location="- Sainagar, Hubli"
            bullets={[
              "Cumulative GPA: 7.25/10",
              "Specialization: Embedded Systems, IOT, Network Analysis, and Software Development",
              "Focus Areas: Digital & Analog Electronics, Internet of Things (IoT), Java, JavaScript."
            ]}
          />

          <ResumeCard
            date="June 2016 – May 2019"
            title="Diploma in Electronics & Communication"
            company="Nalanda Polytechnic"
            location="- Gadag Road, Hubli"
            bullets={[
                "Cumulative Percentage: 60%",
                "Specialization: Analog Electronics Circuits, MicroControllers & Arm Controllers, Data Communication & Networks",
                "Focus Areas: PCB Design & Fabrication, MAT Lab, C Programming, IOT."

            ]}
          />
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
      <p className="resumeAboutCompany">{aboutCompany}</p>
      <p className="resumeLocation">{location}</p>
      <ul className="resumeBullets">
        {bullets.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
