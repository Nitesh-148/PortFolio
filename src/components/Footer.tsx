  const Footer = () => {
    return (
      <footer className="bg-gray-950 text-gray-400 py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-center md:text-left text-xs md:text-sm">
            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Portfolio</span>. All rights reserved.
          </p>
          <p className="text-center md:text-right text-xs md:text-sm mt-2 md:mt-0 text-gray-500 italic">
            Crafted with ❤️ by Shashank Srivastava
          </p>
        </div>
      </footer>
    );
  };

  export default Footer;
