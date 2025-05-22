const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#0f172a] text-white py-4 border-t border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 text-center sm:text-left">
          © {new Date().getFullYear()} Peravali Keerthana. All rights reserved.
        </p>

        <div className="mt-2 sm:mt-0 flex gap-4 text-gray-400 text-sm sm:text-base">
          <a
            href="https://github.com/keerthanaperavali"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/peravali-keerthana-85a30525a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:keerthanaperavali9@gmail.com"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
