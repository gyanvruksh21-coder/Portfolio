import { motion, useScroll, useTransform } from 'framer-motion';
import { FiAward, FiBookOpen, FiCode, FiUsers, FiMapPin, FiMail, FiCalendar, FiStar, FiHeart, FiZap } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <FiCode className="text-primary-400 text-2xl" />,
      title: "Full Stack Development",
      description: "Building modern web applications with React, Node.js, and cutting-edge technologies",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: <FiBookOpen className="text-primary-400 text-2xl" />,
      title: "Data Science & Analytics",
      description: "Transforming complex data into actionable insights using Python, ML, and statistical analysis",
      color: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: <FiUsers className="text-primary-400 text-2xl" />,
      title: "Leadership & Communication",
      description: "Leading teams and organizing events, fostering collaboration and innovation",
      color: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      icon: <FiAward className="text-primary-400 text-2xl" />,
      title: "Problem Solving",
      description: "Approaching challenges with analytical thinking and creative solutions",
      color: "from-yellow-500 to-orange-500",
      delay: 0.4
    }
  ];

  const stats = [
    { label: "Location", value: "Bengaluru, India", icon: <FiMapPin className="text-primary-400" />, delay: 0.5 },
    { label: "Education", value: "B.E. Computer Science", icon: <FiBookOpen className="text-primary-400" />, delay: 0.6 },
    { label: "Experience", value: "3+ Years Learning", icon: <FiCalendar className="text-primary-400" />, delay: 0.7 },
    { label: "Focus", value: "Full Stack & Data Science", icon: <FiCode className="text-primary-400" />, delay: 0.8 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-neutral-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-heading font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative inline-block">
              <span className="relative z-10 text-neutral-100">About Me</span>
              <motion.span
                className="absolute bottom-2 left-0 w-full h-4 bg-primary-900/50 -z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              ></motion.span>
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-body text-neutral-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Passionate Computer Science student with a drive to innovate and solve real-world problems through technology
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-900/30 to-primary-800/30 rounded-full overflow-hidden border-8 border-neutral-800 shadow-2xl animate-float relative"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(99, 102, 241, 0.4)",
                    "0 0 0 20px rgba(99, 102, 241, 0)",
                    "0 0 0 0 rgba(99, 102, 241, 0.4)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-800/50 to-primary-700/50 flex items-center justify-center relative">
                  <motion.span
                    className="text-6xl text-primary-300 font-bold"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    KJ
                  </motion.span>

                  {/* Floating elements around the avatar */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-primary-400 rounded-full animate-pulse"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                    animate={{
                      y: [0, 10, 0],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg border-2 border-primary-400/30"
                whileHover={{ scale: 1.05, y: -2 }}
                animate={{
                  boxShadow: [
                    "0 4px 15px rgba(99, 102, 241, 0.3)",
                    "0 8px 25px rgba(99, 102, 241, 0.5)",
                    "0 4px 15px rgba(99, 102, 241, 0.3)"
                  ]
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FiZap className="inline mr-1" />
                Data Scientist
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-16 h-16 border-2 border-primary-400/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-2 h-2 bg-primary-400 rounded-full absolute top-2 right-2"></div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <motion.h3
                className="text-2xl md:text-3xl text-heading font-bold mb-6 text-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Hello! I'm{" "}
                <motion.span
                  className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Khushi
                </motion.span>
              </motion.h3>
              <motion.div
                className="space-y-4 text-neutral-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <motion.p
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  I'm a passionate Computer Science student currently pursuing my B.E. at AMC Engineering College in Bengaluru, India. With a strong foundation in both theoretical concepts and practical applications, I'm constantly exploring the intersection of technology and problem-solving.
                </motion.p>
                <motion.p
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  My journey in tech has been driven by curiosity and a desire to make a meaningful impact. Whether it's developing web applications, analyzing complex datasets, or leading team projects, I bring enthusiasm and attention to detail to everything I do.
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-4 hover-lift group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(99, 102, 241, 0.2)"
                  }}
                >
                  <motion.div
                    className="flex items-center mb-2"
                    whileHover={{ x: 3 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <span className="ml-2 text-sm font-medium text-neutral-400 group-hover:text-primary-300 transition-colors">
                      {stat.label}
                    </span>
                  </motion.div>
                  <p className="text-neutral-200 font-medium group-hover:text-primary-300 transition-colors">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {[
                { text: "View My Work", sectionId: "projects", icon: FiStar },
                { text: "Get In Touch", sectionId: "contact", icon: FiHeart }
              ].map((button, index) => (
                <motion.button
                  key={button.text}
                  onClick={() => {
                    const element = document.getElementById(button.sectionId);
                    if (element) {
                      element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                      });
                    }
                  }}
                  className="btn btn-primary hover-lift focus-ring group relative overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10 flex items-center">
                    <button.icon className="mr-2 group-hover:animate-bounce" />
                    {button.text}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl text-heading font-bold text-center mb-12 text-neutral-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            What I Bring to the Table
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + index * 0.1 }}
                className="glass-card p-6 text-center group hover-lift hover:scale-105 relative overflow-hidden"
                whileHover={{
                  y: -8,
                  boxShadow: "0 15px 40px rgba(99, 102, 241, 0.15)"
                }}
              >
                {/* Background gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary-900/30 rounded-full mb-4 group-hover:bg-primary-800/50 transition-all duration-300 relative z-10"
                  whileHover={{
                    scale: 1.15,
                    rotate: 10,
                    boxShadow: "0 8px 25px rgba(99, 102, 241, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {highlight.icon}
                  </motion.div>
                </motion.div>

                <motion.h4
                  className="text-heading font-semibold mb-2 text-neutral-200 group-hover:text-primary-300 transition-colors relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  {highlight.title}
                </motion.h4>
                <motion.p
                  className="text-body text-sm text-neutral-400 leading-relaxed relative z-10"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {highlight.description}
                </motion.p>

                {/* Decorative corner element */}
                <motion.div
                  className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ rotate: 45 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
