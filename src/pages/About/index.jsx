import AboutCss from './About.module.css';
import { useState } from 'react';

const divs = [
  {
    title: 'Education',
    content: 'I earned my Bachelor of Science in Computer Science' +
    'from Bicol University, completing my academic journey from '+
    '2014 to 2018. Building on this foundation, I further honed ' +
    'my skills through a comprehensive Fullstack web development '+
    'course at Uplift Code Camp in the academic year 2023-2024. '+
    'This intensive bootcamp provided me with hands-on experience '+
    'and practical knowledge in the latest technologies, enhancing '+
    'my capabilities as a well-rounded web developer. My educational '+
    'background, coupled with the immersive learning experience at '+
    'Uplift Code Camp, has equipped me with a solid foundation to '+
    'navigate the dynamic and ever-evolving field of computer science'+
    'and web development.'
  },
  {
    title: 'Skills',
    content: 'I possess a diverse skill set that spans both the' +
    'realms of web development and IT infrastructure. Proficient' +
    'in HTML, CSS, and JavaScript, I excel in crafting engaging ' +
    'and responsive user interfaces. My expertise extends to the ' +
    'MERN (MongoDB, Express.js, React, Node.js) stack, showcasing ' +
    'my ability to create robust and scalable full-stack applications.' +
    'Additionally, I have a solid understanding of PHP and the Laravel' +
    'framework. My proficiency in MySQL allows me to design and manage' +
    'databases effectively. Beyond coding, my knowledge extends to ' +
    'computer hardware and networking, enabling me to navigate the ' +
    'intricacies of IT infrastructure.' +
    `I'm well-versed in utilizing cutting-edge technologies such as` +
    'ChatGPT and Google tools to enhance productivity and problem-solving.' +
    'Alongside technical prowess, I place a strong emphasis on ' +
    'communication skills, fostering effective collaboration and ' +
    'understanding. Furthermore, my adaptability and continuous '+
    'learning mindset position me as a dynamic professional in '+
    'the ever-evolving tech landscape.'
  },
  {
    title: 'Hobbies',
    content: `If you can't find me in front of my PC,` +
    `I may be doing things like driving my motorcycle and strolling,` +
    `hiking and exploring mountains or maybe watching movies and anime.`
  }
]
function About() {
  const [selectedDiv, setSelectedDiv] = useState(0);

  const handleDivClick = (index) => {
    setSelectedDiv(index === selectedDiv ? null : index);
  };
  return (
    <div className={AboutCss['container']}>
      {divs.map((div, index) => (
        <div
          key={index}
          className={`${AboutCss.myDiv} ${index === selectedDiv ? AboutCss[`selected${index}`] : ''}`}
          onClick={() => handleDivClick(index)}
        >
          <h2>{div.title}</h2>
          <p>{div.content}</p>
        </div>
      ))}
    </div>
  );
}

export default About;