import movie from "../assets/movie.png";
import kanban from "../assets/kanban.png";
import DevOps from "../assets/devops.png";
import cms from "../assets/cms.jpg";
import { motion } from "framer-motion";
import { CiGlobe } from "react-icons/ci";
import { VscGithubInverted } from "react-icons/vsc";

const projectsData = [
  {
    img: DevOps,
    title: "React Web Application",
    description:
      "Single informational page. It has features, Pricing and Testimonials. Tailwind css is used for designing it. React Js is used for reusabillity and performance. Responsive on all screens",
    technologies: ["React", "Tailwind css", "Mobile Responsive"],
    links: [
      {
        icon: <CiGlobe size={32} />,
        link: "https://kismayotechfirm.netlify.app/",
      },
      {
        icon: <VscGithubInverted size={28} />,
        link: "https://github.com/FartunAbdisalam/devops",
      },
    ],
  },
  {
    img: movie,
    title: "Movie Hub",
    description:
      "With just the title of the film or series, a user can search MovieHub for information about the film or series, including its poster and year of release. React.js, Tailwind CSS, and the OMDb API were used in its creation.",
    technologies: ["React", "CSS", "HTML", "OMDb API", "Mobile Responsive"],
    links: [
      {
        icon: <CiGlobe size={32} />,
        link: "https://moviehub-app01.netlify.app/",
      },
      {
        icon: <VscGithubInverted size={28} />,
        link: "https://github.com/FartunAbdisalam/react-movie-app",
      },
    ],
  },
  {
    img: cms,
    title: "Contact Management System",
    description:
      "Production-ready contact management system designed to manage contacts with secure user authentication and JWT-based authorization, the project implements clean architecture, modular design, centralized error-handling middleware, hashed credentials, secure protected routes. Each user has access to it’s own DB of contacts and can perform the CRUD operation successfully.",
    technologies: ["NodeJs", "Expressjs", "MongoDB", "RESTful API", "JWT Authentication",],
    links: [
      {
        icon: <VscGithubInverted size={28} />,
        link: "https://github.com/FartunAbdisalam/Contact-Management-System/tree/main/mycontacts-backend",
      },
    ],
  },
  {
    img: kanban,
    title: "Kanban Board",
    description:
      "A website for tracking your ongoing tasks where data is not lost after user closes the page or refreshes it, Local Storage was used to handle that. Drag and drop tasks to columns",
    technologies: ["HTML", "CSS", "JavaScript", "Mobile Responsive"],
    links: [
      {
        icon: <CiGlobe size={32} />,
        link: "https://fartunabdisalam.github.io/Drag-and-Drop/",
      },
      {
        icon: <VscGithubInverted size={28} />,
        link: "https://github.com/FartunAbdisalam/Drag-and-Drop",
      },
    ],
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div
        id="projects"
        className="flex flex-col items-center gap-8 lg:flex-row lg:gap-24"
      >
        <img
          src={project.img}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 lg:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="flex flex-wrap rounded-lg text-blue-400 p-3"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-5">
            {project.links.map((item, i) => (
              <a key={i} href={item.link}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col min-h-screen w-full items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl text-white font-light md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>
      <div className="flex flex-col w-full max-w-[1000px] gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
