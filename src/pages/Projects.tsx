
import { Project1, Project2, Project3 } from "../configs/icons";

const projects = [
  {
    title: "EssenceConnect Website",
    description:
      "Personal portfolio built with React and Tailwind, featuring SEO, multilingual support, and email subscription.",
    image: Project1,
    tags: ["React", "Tailwind", "SEO", "Multilingual"],
    link: "#",
  },
  {
    title: "DomainExchange Website",
    description:
      "Domain buying and transfer platform with secure authentication and ongoing API integration.",
    image: Project2,
    tags: ["React", "Auth", "API", "Routing"],
    link: "#",
  },
  {
    title: "Task Management Application",
    description:
      "Vue.js-based app for managing tasks with CRUD, filtering, and a user-friendly UI.",
    image: Project3,
    tags: ["Vue.js", "CRUD", "Filters", "UI/UX"],
    link: "https://planmytasks.netlify.app/#/",
  },
];

const Projects = () => {
  return (
    <section className="w-full px-4 py-12 bg-gray-700 flex-1 min-h-full">
        <h2 className="text-3xl xl:text-4xl mb-12 font-bold text-center text-slate-200">
          My Digital Toolbox
        </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-teal-600 text-sm lg:text-base hover:text-teal-800 font-medium transition"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
