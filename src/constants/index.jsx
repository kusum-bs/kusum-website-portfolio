import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";


import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
", GitHub, NPM, JSON, Adobe Experience Manager (AEM), WordPress, Sitecore, HTML, CSS, JavaScript (ES6+), React, Next.js, Tailwind ";

  export const PROJECTS = [
    {
      id: 5,
      imgSrc: project5,
      link: "https://react-form-five-psi.vercel.app/",
      videoSrc: video5,  // Add video source here
    },
    {
      id: 3,
      imgSrc: project3,
      link: "https://currency-converter-seven-snowy.vercel.app/",
      videoSrc: video3,
    },
    {
      id: 2,
      imgSrc: project2,
      link: "https://rock-paper-scissor-game-lemon.vercel.app/",
      videoSrc: video2,
    },
    
    {
      id: 4,
      imgSrc: project4,
      link: "https://tic-tac-toe-game-rose-beta.vercel.app/",
      videoSrc: video4,
    },
    {
      id: 1,
      imgSrc: project1,
      link: "https://color-picker-using-react-delta.vercel.app/",
      videoSrc: video1,
    },
  ];

export const ABOUT =
  "A dedicated Junior Front-End Developer with expertise in HTML, CSS, JavaScript, and modern JavaScript frameworks such as React.js. I have successfully applied my skills to build responsive, user-centric web applications, focusing on performance and design optimization. With over 4 years of experience in global website content management using platforms like Adobe Experience Manager (AEM), WordPress, and Sitecore, I bring a unique blend of technical development and content management expertise. Passionate about continuous learning and staying updated with the latest industry trends, I strive to incorporate modern tools and practices to deliver high-quality, innovative digital experiences.";

export const EXPERIENCES = [
  {
    company: "Merkle",
    role: "Web Content Manager & Front-End Developer",
    year: "April 2023 - March 2024",
    description:
      "I built and maintained responsive websites using HTML, CSS, and JavaScript, ensuring optimal performance and a seamless user experience. Collaborating closely with designers and back-end developers, I implemented UI/UX improvements that increased site engagement by 15%, while using Git for version control to manage code across multiple projects and facilitate team collaboration. Additionally, I developed and integrated dynamic features with React.js to enhance client-side functionality, boosting user interactivity by 25%. By optimizing websites for SEO and performance, I reduced page load times by 20%, which also led to improved search engine rankings. Throughout these projects, I adhered to Agile development practices, attending daily standups, participating in sprints, and consistently meeting project deadlines."
    },
  {
    company: "Tech Mahindra",
    role: "Website Content Specialist",
    year: "October 2021 - March 2023",
    description:
      "I worked with front-end technologies such as HTML, CSS, and JavaScript to make layout adjustments and UI enhancements based on user feedback. I am proficient in creating detailed monthly reports for websites and assets, contributing to data-driven decision-making. Additionally, I utilized the Akamai tool to configure URL redirects and manage vanity URLs, improving site navigation and overall user experience by streamlining traffic flow and enhancing link management. I also handled support tickets and conducted quality assurance with a 97% accuracy rate, ensuring the reliable resolution of all issues.",
  },
  {
    company: "Mindtree",
    role: "Junior Engineer",
    year: "June 2019 - September 2021",
    description:
      "I demonstrated expertise in coordinating international operations and collaborating effectively with clients across the globe. By partnering with marketing and design teams, I helped create engaging website content that enhanced the overall user experience. Additionally, I assisted in migrating website content from legacy systems to modern CMS platforms, streamlining content management processes by 30%. I also tested and debugged cross-browser compatibility issues to ensure smooth performance across major browsers and devices. Furthermore, I implemented web performance best practices, which improved site speed and significantly reduced bounce rates.",
  },
];

export const SOCIAL_MEDIA_LINKS = [

  {
    href: "https://www.instagram.com/kusum_bs/",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/kusum-bs",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/kusum-bs/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },

];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "kusumbs24@gmail.com",
  phone: "+49-15510770056 / +91-7406292656",
};
