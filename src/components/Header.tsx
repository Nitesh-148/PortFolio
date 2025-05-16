import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaPhoneAlt ,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import MobileSidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navLinks = [
    { to: "/", label: "Home", icon: <FaHome className="mr-2 inline" /> },
    { to: "/about", label: "About", icon: <FaUser className="mr-2 inline" /> },
    {
      to: "/projects",
      label: "Projects",
      icon: <FaProjectDiagram className="mr-2 inline" />,
    },
    {
      to: "/contact",
      label: "Contact",
      icon: <FaPhoneAlt  className="mr-2 inline" />,
    },
  ];

  return (
    <header className="bg-gray-900 text-white p-6 shadow-indigo-500/10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <h1 className="text-xl lg:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text cursor-pointer transition-all duration-300">
          My Digital Diary 
        </h1>

        <button
          onClick={toggleSidebar}
          className="md:hidden text-white focus:outline-none"
        >
          {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        <nav className="hidden md:flex space-x-8 font-semibold">
          <ul className="flex space-x-8">
            {navLinks.map(({ to, label, icon }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-base lg:text-lg text-indigo-400 hover:text-pink-400 transition duration-200 ease-in-out flex items-center"
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Component for Mobile */}
        <MobileSidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          links={navLinks}
        />
      </div>
    </header>
  );
};

export default Header;
