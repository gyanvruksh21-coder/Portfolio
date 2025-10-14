import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-primary relative">
      {/* Subtle particle background */}
      <div className="particle-bg">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 py-20 md:py-32 relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <div className="inline-block p-6 bg-neutral-800/20 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-glow-pulse">
              <span className="text-6xl md:text-8xl text-heading text-primary-300 animate-bounce-gentle">👋</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-heading font-bold mb-6 text-neutral-100 leading-tight"
            variants={item}
          >
            Khushi Kalpesh Joshi
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-body text-neutral-300 mb-8 font-medium"
            variants={item}
          >
            Aspiring Data Scientist | Web Developer | Problem Solver
          </motion.p>

          <motion.p className="text-lg md:text-xl text-body text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" variants={item}>
            Passionate about transforming data into insights and creating beautiful digital experiences
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            variants={item}
          >
            <motion.a
              href="https://github.com/khushijoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-neutral-800/20 backdrop-blur-sm rounded-full text-neutral-300 hover:text-primary-300 hover:bg-neutral-700/30 transition-all duration-300 hover:scale-110 hover:shadow-lg group focus-ring animate-float"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/khushi-kalpesh-joshi-895b822a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-neutral-800/20 backdrop-blur-sm rounded-full text-neutral-300 hover:text-primary-300 hover:bg-neutral-700/30 transition-all duration-300 hover:scale-110 hover:shadow-lg group focus-ring animate-float"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </motion.a>
            <motion.a
              href="mailto:khushijoshi.amcec@gmail.com"
              className="p-4 bg-neutral-800/20 backdrop-blur-sm rounded-full text-neutral-300 hover:text-primary-300 hover:bg-neutral-700/30 transition-all duration-300 hover:scale-110 hover:shadow-lg group focus-ring animate-float"
              aria-label="Email"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMail size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#projects"
              className="btn btn-primary w-full sm:w-auto text-lg px-8 py-4 hover-lift focus-ring animate-slide-in-scale"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="btn btn-outline w-full sm:w-auto text-lg px-8 py-4 hover-lift focus-ring animate-slide-in-scale"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="mr-2" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="animate-bounce inline-flex items-center justify-center w-14 h-14 border-2 border-primary-500 rounded-full text-primary-400 hover:bg-primary-900/20 transition-all duration-300 cursor-pointer hover:scale-110 focus-ring animate-pulse-gentle">
            <FiArrowDown size={20} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
