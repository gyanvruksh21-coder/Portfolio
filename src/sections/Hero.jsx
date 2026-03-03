import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiArrowDown,
} from "react-icons/fi";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  const scrollToProjects = () => {
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden"
    >
      {/* Enhanced particle background with parallax */}
      <motion.div
        className="particle-bg"
        style={{ y: springY, opacity: springOpacity }}
      >
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </motion.div>

      {/* Interactive cursor follower */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none z-0 transition-opacity duration-300"
        style={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
          opacity: isHovered ? 0.8 : 0.4,
        }}
        animate={{
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      <motion.div
        className="container mx-auto px-4 py-20 md:py-32 relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-8 relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="inline-block p-8 bg-neutral-800/20 backdrop-blur-sm rounded-full shadow-2xl hover:shadow-primary-500/25 transition-all duration-500 animate-glow-pulse border border-primary-500/20">
              <motion.span
                className="text-6xl md:text-8xl text-heading text-primary-300"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.span>
            </div>
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-primary-400 rounded-full animate-pulse"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-heading font-bold mb-6 text-neutral-100 leading-tight"
            variants={item}
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05, color: "#a5b4fc" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Khushi
            </motion.span>{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Kalpesh
            </motion.span>{" "}
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05, color: "#a5b4fc" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Joshi
            </motion.span>
          </motion.h1>

          <motion.div className="mb-6" variants={item}>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-body text-neutral-300 mb-2 font-medium"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-primary-300 via-purple-300 to-primary-300 bg-clip-text text-transparent bg-[length:200%_auto]">
                Aspiring Data Scientist
              </span>
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-neutral-400"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Web Developer | Problem Solver | Innovator
            </motion.p>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-body text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            variants={item}
          >
            Passionate about transforming{" "}
            <motion.span
              className="text-primary-300 font-semibold"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              data into insights
            </motion.span>{" "}
            and creating{" "}
            <motion.span
              className="text-primary-300 font-semibold"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              beautiful digital experiences
            </motion.span>
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            variants={item}
          >
            {[
              {
                Icon: FiGithub,
                href: "https://github.com/Khush2803",
                label: "GitHub",
              },
              {
                Icon: FiLinkedin,
                href: "https://www.linkedin.com/in/khushi-kalpesh-joshi-895b822a4/",
                label: "LinkedIn",
              },
              {
                Icon: FiMail,
                href: "mailto:khushijoshi.amcec@gmail.com",
                label: "Email",
              },
            ].map(({ Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-neutral-800/20 backdrop-blur-sm rounded-full text-neutral-300 hover:text-primary-300 hover:bg-neutral-700/30 transition-all duration-300 hover:scale-110 hover:shadow-lg focus-ring animate-float"
                aria-label={label}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <Icon
                  size={24}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary-500/20 scale-0 group-hover:scale-150 transition-transform duration-300"
                  layoutId={`glow-${index}`}
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToProjects}
              className="btn btn-primary w-full sm:w-auto text-lg px-8 py-4 hover-lift focus-ring animate-slide-in-scale group relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="button-bg"
              />
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download
              className="btn btn-outline w-full sm:w-auto text-lg px-8 py-4 hover-lift focus-ring animate-slide-in-scale group"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <FiDownload className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.div
            className="animate-bounce inline-flex items-center justify-center w-16 h-16 border-2 border-primary-500 rounded-full text-primary-400 hover:bg-primary-900/20 transition-all duration-300 cursor-pointer hover:scale-110 focus-ring animate-pulse-gentle bg-gradient-to-br from-primary-900/20 to-transparent"
            whileHover={{
              scale: 1.2,
              borderColor: "#a5b4fc",
              boxShadow: "0 0 20px rgba(165, 180, 252, 0.3)",
            }}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            onClick={scrollToProjects}
          >
            <FiArrowDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
