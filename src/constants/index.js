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
    {
      title: "Car Enthusiast",
      icon: creator,
    },
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
      title: "iOS/MacOS Technical Supoort Advisor",
      company_name: "Apple",
      icon: appleLogo,
      iconBg: "#ffffff",
      date: "June 2022 - Present",
      points: [
        "Delivering exceptional customer serevice by resolving complex techical issues, including device configuration, data backup, and iOS/macOS installation.",
        "Documenting and maintaining accurate records of customer interactions, technical issues, and resolutions.",
        "Collaborating with various teams an third-party vendors to provide quick and effective solutionsm while maintating confidentiality",
        "Demonstrating the ability to manage mutiple tasks and priorities in a fast paced enviornment, ensuring timely resolution of issues",
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
        "Assisted in the development of an internal application serving as a documentation resource and training data for a large language model, benefiting both internal users and external partners.",
        "Collaborated cross-functionally and built relationships with senior management and global stakeholders (USA, Germany, India) to integrate a secure internal video platform.",
        "Managed multiple projects, delivering progress updates and making improvements based on stakeholder feedback, demonstrating strong organizational and communication skills.",
        "Designed and implemented a client-server API, exercising independent judgment and adapting quickly to a dynamic, fast-paced environment.",
      ],
    },
    {
      title: "Computer Configuration Technician",
      company_name: "Arey Jones Educational Solutions ",
      icon: arEdu,
      iconBg: "#ffffff",
      date: "February 2022 - June 2022",
      points: [
        "Configured computer hardware and software systems for educational clients, demonstrating exception attention to detail.",
        "Communicated with team members and supervisors to ensure alignment on deadlines and progress.",
        "Led a team to improve efficiency in computer laser etching, managing competing deadlines to ensure timely project completion.",
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
        "Personal portfolio showcasing my skills, experience and projects.",
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
    // {
    //   name: "Job IT",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };