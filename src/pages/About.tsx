import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaCircle,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiVuedotjs,
  SiJira,
  SiPostman,
  SiCypress,
} from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { DiResponsive } from "react-icons/di";
import {
  Work as WorkIcon,
  School as SchoolIcon,
  EmojiEvents as EmojiEventsIcon,
} from "@mui/icons-material";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Vue", icon: <SiVuedotjs />, color: "#4FC08D" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Jira", icon: <SiJira />, color: "#0052CC" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  { name: "Cypress", icon: <SiCypress />, color: "#17202C" },
  { name: "SEO", icon: <TbSeo />, color: "#0F9D58" },
  { name: "Responsive", icon: <DiResponsive />, color: "#4285F4" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
];

const experiences = [
  {
    title: "Junior Web Developer",
    company: "Innovative Tech Solutions",
    duration: "Aug 2024 - Mar 2025",
    location: "Noida, Uttar Pradesh",
    points: [
      "Built responsive websites using React and Tailwind CSS.",
      "Enhanced SEO with improved site structure, meta tags, and route management.",
      "Implemented multilingual support and email subscription functionality.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "JM Technex",
    duration: "Nov 2023 - May 2024",
    points: [
      "Cloned TalentPro website using HTML, CSS, and Tailwind CSS with Animate.css.",
      "Developed e-commerce app with secure JWT login and category filters.",
      "Built web apps like a weather app using external API and a calculator app.",
    ],
  },
];

const education = [
  {
    degree: "MCA – Vellore Institute of Technology",
    duration: "Aug 2022 – June 2024",
    score: "CGPA: 7.8",
  },
  {
    degree: "BCA – School of Management Sciences",
    duration: "June 2019 – May 2022",
    score: "Percentage: 66.7%",
  },
];

const achievements = [
  "Completed Meta Front-End Developer course on Coursera, increasing productivity by 40%.",
  "Attended 8-day hands-on web dev workshop during BCA for real-world learning.",
];

const About = () => {
  return (
    <div className=" bg-gray-700 min-h-screen text-white">
      <div className="container mx-auto py-16 px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-200">
            About Me
          </h2>
          <p className="mt-4 text-sm lg:text-base text-gray-200 max-w-5xl mx-auto">
            With 1.2 years of experience in responsive web app
            development—including internships and full-time work—I specialize in
            clean, user-focused front-end development. I enjoy working in
            collaborative teams and thrive on solving real-world UI challenges
            with modern frameworks and design systems.
          </p>
        </div>

        {/* Stepper Overview */}
        <div className="mb-16">
          <div className="flex justify-between items-center relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600 -z-10"></div>
            <div className="flex flex-col items-center">
              <div className="size-10 lg:size-12 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                <WorkIcon className="text-white" />
              </div>
              <span className="text-sm lg:text-base text-gray-200">
                Experience
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="size-10 lg:size-12 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                <SchoolIcon className="text-white" />
              </div>
              <span className=" text-sm lg:text-base text-gray-200">
                Education
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="size-10 lg:size-12 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                <EmojiEventsIcon className="text-white" />
              </div>
              <span className=" text-sm lg:text-base text-gray-200">
                Achievements
              </span>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-slate-200">
            My Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <button
                key={i}
                className="px-4 py-2 rounded-sm font-bold text-white flex items-center gap-2 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: skill.color,
                  transform: "skew(-15deg)",
                }}
              >
                <div
                  style={{ transform: "skew(15deg)" }}
                  className="flex items-center"
                >
                  <span className="mr-1 text-base lg:text-lg text-gray-200">
                    {skill.icon}
                  </span>
                  <span className="text-sm lg:text-base">{skill.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="my-12 h-px bg-gray-600"></div>

        {/* Work Experience */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-slate-200">
            Work Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-5 p-6 rounded-lg border-l-4 border-blue-600"
              >
                <div className="flex items-center mb-4">
                  <div className="size-10 xl:size-12 p-2 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                    <WorkIcon className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-600">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-800">
                      {exp.company} • {exp.duration}{" "}
                      {exp.location && `• ${exp.location}`}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-center justify-start">
                      <FaCircle className="text-green-500 mr-2 size-2" />
                      <p className="text-sm text-gray-800">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="my-12 h-px bg-gray-600"></div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-slate-200">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-5 p-6 rounded-lg border-l-4 border-purple-500 h-full"
              >
                <div className="flex items-center mb-4">
                  <div className="size-10 xl:size-12 p-2 rounded-full bg-purple-800 flex items-center justify-center mr-4">
                    <SchoolIcon className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-700">
                      {edu.degree.split(" – ")[0]}
                    </h3>
                    <p className="text-gray-800 text-sm lg:text-base">
                      {edu.degree.split(" – ")[1]}
                    </p>
                  </div>
                </div>
                <p className=" text-sm lg:text-base text-gray-800 mb-2">
                  {edu.duration}
                </p>
                <p className="text-sm lg:text-base text-purple-600 font-bold">
                  {edu.score}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-12 h-px bg-gray-600"></div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-200">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-5 p-6 rounded-lg border-l-4 border-yellow-500"
              >
                <div className="flex">
                  <div className="size-8 p-5 rounded-full bg-yellow-500 bg-opacity-20 flex items-center justify-center mr-4 mt-1">
                    <EmojiEventsIcon className="text-white" />
                  </div>
                  <p className="text-sm lg:text-base text-gray-800">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-sm lg:text-base text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Explore My Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
