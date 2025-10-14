import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 border-t border-neutral-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-neutral-400">
              &copy; {currentYear} Khushi Kalpesh Joshi. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/khushijoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-primary-400 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/khushi-kalpesh-joshi-895b822a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-primary-400 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/khushijoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-primary-400 transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="mailto:khushijoshi.amcec@gmail.com"
              className="text-neutral-500 hover:text-primary-400 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-neutral-700 text-center md:text-left">
          <p className="text-sm text-neutral-500">
            Built by Khushi Kalpesh Joshi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
