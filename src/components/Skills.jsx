import '../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faCode, faBullhorn, faMobileScreenButton, faServer, faGear, faCloud, faInfinity } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <div className='ServicesContainer' id='services'>
      <h1 className='skillsHeader'>My <span style={{ color: '#FF004F' }}>Skills</span></h1>
      <div className='servicesMain'>
        <SkillsCards />
      </div>
    </div>
  );
};

export default Skills;

function SkillsCards() {
  const ServicesData = [
    {
      id: 1,
      title: 'Cross-Platform Mobile Application Development',
      icon: faMobileScreenButton,
      description:
        'Creating smooth, responsive mobile experiences that work flawlessly across all devices and operating systems.',
      tags: ['React Native', 'Zustand', 'Firebase', 'App Store & Play Store Deployment'],
      color: '#ff0000',
    },
    {
      id: 2,
      title: 'Frontend Development',
      icon: faCode,
      description:
        'Building responsive, accessible, and high-performance websites using React, HTML, CSS, and JavaScript.',
      tags: ['React Js', 'Angular Js', 'HTML/CSS', 'JavaScript / TypeScript',  'Sass', 'Material UI', 'Redux Toolkit' ],
      color: '#ff0000', 
    },
    {
      id: 3,
      title: 'Backend Development',
      icon: faServer,
      description:
        'Building scalable and secure backend systems with Node.js, Express, and PostgreSQL for high-performance APIs.',
      tags: ['Java', 'Node Js / Express Js', 'Rest API', 'Postgres & MySQL', 'Sequelize ORM'],
      color: '#ff0000',
    },
    {
      id: 4,
      title: 'Dev Tools',
      icon: faGear,
      description:
        'Streamlining development workflows using modern DevTools for efficient coding, testing, and deployment',
      tags: ['Eclipse', 'VS Code', 'GitHub / GitLab', 'Postman', 'Ngrok', 'Docker'],
      color: '#ff0000',
    },
    {
      id: 5,
      title: 'Cloud & Hosting',
      icon: faCloud,
      description:
        'Deploying and managing scalable web and mobile applications using modern cloud and hosting platforms.',
      tags: ['AWS - IAM, Lambda, EC2, S3, API Gateway, SQS, CloudFront','Firebase Hosting', 'Vercel', 'Hostinger', 'Google Cloud Platform'],
      color: '#ff0000',
    },
    {
      id: 6,
      title: 'DevOps',
      icon: faInfinity,
      description:
        'Automating, integrating, and optimizing the development lifecycle through modern DevOps tools and CI/CD practices.',
      tags: ['Automation & Scripting - Bash / Shell Script ', 'Gitlab CI/CD', 'Fastlane', 'Jest Testing'],
      color: '#ff0000',
    },
  ];

  return (
    <>
      {ServicesData.map((item, index) => (
        <div key={index} className='serviceCard'>
          <div className='serviceIconBox' style={{ border: `1px solid ${item.color}` }}>
            <FontAwesomeIcon icon={item.icon} style={{ color: item.color, fontSize: '22px' }} />
          </div>
          <h2 className='serviceTitle'>
            {item.title}
          </h2>
          <p className='serviceDescription'>{item.description}</p>
          <div className='serviceTags'>
            {item.tags.map((tag, i) => (
              <span key={i} className='serviceTag' style={{ border: `1px solid ${item.color}` }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
