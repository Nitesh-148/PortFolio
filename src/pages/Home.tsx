import { FaLinkedin,FaGithub , FaTwitter, FaDownload } from "react-icons/fa";

import { Photo } from "../configs/icons";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-700 text-white px-6 py-6 text-center h-full">
      {/* Avatar */}
      <div className="w-28 h-28 md:w-32 md:h-32 lg:w-34 lg:h-34 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 p-1 ring-2 ring-white mb-8">
        <img
          src={Photo}
          alt="photo"
          className="w-full h-full rounded-full object-cover object-top"
        />
      </div>

      {/* Name and Title */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-extrabold mb-4 drop-shadow-lg">
        Hi, I'm Shashank Srivastava
      </h1>
      <p className="text-[13px] md:text-base lg:text-lg text-gray-200 max-w-2xl">
        MERN Stack Developer | Building Scalable Web Apps with MongoDB, Express,
        React & Node.js | Passionate About UI/UX & Performance.
      </p>

      {/* CTA Button */}
      <a
        href="/Shashank_Resume.pdf"
        download="Shashank-Resume.pdf"
        className="mt-6 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-sm lg:text-base text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 group"
      >
        <span>Download CV</span>
        <FaDownload />
      </a>

      {/* Social Media Icons */}
      <div className="hidden md:flex space-x-6 mt-6 text-2xl">
        <a
          href="https://github.com/Nitesh-148"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-200 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shashank-shrivastava-39a392226"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#0A66C2] transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/NiteshShriv123/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#1DA1F2] transition"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Home;
