// import { Link } from "react-router-dom";
// import { ReactNode } from "react";

// interface NavLink {
//   to: string;
//   label: string;
//   icon: ReactNode;
// }

// interface MobileSidebarProps {
//   isOpen: boolean;
//   toggleSidebar: () => void;
//   links: NavLink[];
// }

// const MobileSidebar = ({
//   isOpen,
//   toggleSidebar,
//   links,
// }: MobileSidebarProps) => {
//   return (
//     <div
//       className={`fixed inset-0 bg-gray-900 bg-opacity-75 w-80 top-0 md:hidden transform transition-transform duration-300 z-50 ${
//         isOpen ? "translate-x-0" : "-translate-x-full"
//       }`}
//     >
//       <div className=" border-b-1 border-gray-600 mx-6 ">
//         <h2 className="text-left text-2xl font-semibold mx-auto my-6.5">
//           Shashank <span className="text-[#B4121B]">Srivastava</span>
//         </h2>
//       </div>

//       <div className="flex flex-col items-left px-6 justify-left cursor-pointer mt-8">
//         {links.map(({ to, label, icon }) => (
//           <Link
//             key={label}
//             to={to}
//             onClick={toggleSidebar}
//             className="text-xl mb-3 py-3 border-b-1 border-gray-600 hover:text-blue-300 transition duration-200"
//           >
//             <span className="text-[#B4121B]">{icon}</span>
//             <span className="text-white hover:text-gray-200">{label}</span>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MobileSidebar;

import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

interface NavLink {
  to: string;
  label: string;
  icon: ReactNode;
}

interface MobileSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  links: NavLink[];
}

const MobileSidebar = ({
  isOpen,
  toggleSidebar,
  links,
}: MobileSidebarProps) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-95 w-68 top-0 md:hidden transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="border-b border-gray-600 mx-6">
        <h2 className="text-left text-xl font-semibold my-6 text-white">
          Shashank <span className="text-[#B4121B]">Srivastava</span>
        </h2>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col px-6 mt-8">
        {links.map(({ to, label, icon }) => (
          <Link
            key={label}
            to={to}
            onClick={toggleSidebar}
            className="flex items-center gap-3 text-lg mb-4 py-2 border-b border-gray-700 text-white hover:text-gray-200 transition"
          >
            <span className="text-[#B4121B] text-lg">{icon}</span>
            <span>{label}</span>
          </Link>
        ))}
      </div>

      {/* Social Icons */}
      <div className="mt-12 mx-6 py-6 flex items-center justify-center gap-8 border-t border-gray-700">
      <a
          href="https://github.com/Nitesh-148"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-400 text-2xl transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/shashank-shrivastava-39a392226"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#0077B5] text-2xl transition"
        >
          <FaLinkedin />
        </a>
      
        <a
          href="https://x.com/NiteshShriv123/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#1DA1F2] text-2xl transition"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default MobileSidebar;

