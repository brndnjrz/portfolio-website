// work experience
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    appleLogo,
    arEdu,
    shopify,
    carrent,
    portfolioWebsite,
    jobit,
    techDashboard,
    vsCodeExt,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Developer",
      icon: web,
    },
    {
      title: "IT Support",
      icon: mobile,
    },
    {
      title: "Computer Technician",
      icon: backend,
    },
    // {
    //   title: "Car Enthusiast",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Technical Support Advisor (iOS/MacOS/MSS)",
      company_name: "Apple",
      icon: appleLogo,
      iconBg: "#ffffff",
      date: "June 2022 - Present",
      points: [
        "Delivering exceptional customer service by resolving complex technical issues, including device configuration, data backup, and macOS installation.",
        "Collaborating with cross-functional teams and third-party vendors to implement effective solutions ensuring confidentiality and timely issue resolution in a fast-paced environment.",
        "Demonstrating the ability to manage and priorities multiple tasks.",
        "Adapting quickly with the latest Apple products, technologies, and trends to provide the best possible support to customers.",
      ],
    },
    {
      title: "Tools Software Engineer",
      company_name: "Apple",
      icon: appleLogo,
      iconBg: "#ffffff",
      date: "January 2024 - June 2024",
      points: [
        "Designed and implemented responsive, secure, and scalable client-server API for internal web application, enhancing usability and functionality.",
        "Contributed to the development of an internal application serving as a documentation resource and training data for a large language model, benefiting both internal users and external partners.",
        "Collaborated with cross-functional teams and senior stakeholders (USA, Germany, India) to integrate a secure internal video platform, improving accessibility and security while addressing stakeholder feedback.",
        "Delivered high-quality code through debugging, peer reviews, and testing, while managing multiple projects and providing regular progress updates in a fast-paced environment.",
      ],
    },
    {
      title: "Computer Configuration Technician",
      company_name: "Arey Jones Educational Solutions ",
      icon: arEdu,
      iconBg: "#ffffff",
      date: "February 2022 - June 2022",
      points: [
        "Configured PC’s as specified by client, including installation of various operating systems, installation of software and related drivers.",
        "Communicated with team members and supervisors to ensure alignment on deadlines and progress.",
        "Supervised and led a team to improve efficiency in computer laser etching, managing deadlines to ensure timely project completion.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "Personal portfolio showcasing my skills, experience and projects. Deployed using netlify.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      // image: carrent,
      image: portfolioWebsite,    // added my portfolio website
      source_code_link: "https://github.com/brndnjrz/portfolio-website",
    },
    {
      name: "Technical Stock Analysis ",
      description:
        "Technical Stock Analysis Dashboard that provides recommendations to buy, hold, or sell based on chart patterns. ",
      tags: [
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "ollama",
          color: "pink-text-gradient",
        },
        {
          name: "streamlit",
          color: "blue-text-gradient",
        },
      ],
      image: techDashboard,
      source_code_link: "https://github.com/brndnjrz/technical-analysis-ollama",
    },
    {
      name: "VS Code Extension",
      description:
        "Chatbot extension for Visual Studio Code using DeepSeek model. Currently testing and adjusting it.",
      tags: [
        {
          name: "ollama",
          color: "pink-text-gradient",
        },
        {
          name: "deepseek",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
      ],
      image: vsCodeExt,
      source_code_link: "https://github.com/brndnjrz/DeepSeek-VS-Extension",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };