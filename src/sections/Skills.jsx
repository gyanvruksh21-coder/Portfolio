import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPython, FaReact, FaDatabase, FaChartLine, FaGitAlt, FaCode, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiJavascript, SiTailwindcss, SiMongodb, SiPostgresql, SiDocker } from 'react-icons/si';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: <FaCode className="text-primary-400 text-2xl" />,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { name: 'Python', level: 90, icon: <FaPython className="text-blue-400" />, color: 'bg-blue-400' },
        { name: 'JavaScript', level: 80, icon: <SiJavascript className="text-yellow-400" />, color: 'bg-yellow-400' },
        { name: 'HTML/CSS', level: 90, icon: <FaHtml5 className="text-orange-500" />, color: 'bg-orange-500' },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      icon: <FaReact className="text-primary-400 text-2xl" />,
      color: 'from-cyan-500 to-blue-500',
      items: [
        { name: 'React', level: 85, icon: <FaReact className="text-cyan-400" />, color: 'bg-cyan-400' },
        { name: 'Node.js', level: 75, icon: <FaNodeJs className="text-green-500" />, color: 'bg-green-500' },
        { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss className="text-teal-400" />, color: 'bg-teal-400' },
      ],
    },
    {
      category: 'Data Science & ML',
      icon: <FaChartLine className="text-primary-400 text-2xl" />,
      color: 'from-purple-500 to-pink-500',
      items: [
        { name: 'Pandas', level: 85, icon: <FaPython className="text-blue-400" />, color: 'bg-blue-400' },
        { name: 'TensorFlow', level: 75, icon: <SiTensorflow className="text-orange-400" />, color: 'bg-orange-400' },
        { name: 'PyTorch', level: 70, icon: <SiPytorch className="text-red-400" />, color: 'bg-red-400' },
      ],
    },
    {
      category: 'Database & Tools',
      icon: <FaDatabase className="text-primary-400 text-2xl" />,
      color: 'from-green-500 to-emerald-500',
      items: [
        { name: 'MongoDB', level: 75, icon: <SiMongodb className="text-green-500" />, color: 'bg-green-500' },
        { name: 'PostgreSQL', level: 80, icon: <SiPostgresql className="text-blue-600" />, color: 'bg-blue-600' },
        { name: 'Git', level: 85, icon: <FaGitAlt className="text-red-500" />, color: 'bg-red-500' },
      ],
    },
  ];

  const technologies = [
    { name: 'Python', icon: <FaPython className="text-5xl text-blue-400" />, color: 'hover:text-blue-300' },
    { name: 'React', icon: <FaReact className="text-5xl text-cyan-400" />, color: 'hover:text-cyan-300' },
    { name: 'TensorFlow', icon: <SiTensorflow className="text-5xl text-orange-400" />, color: 'hover:text-orange-300' },
    { name: 'JavaScript', icon: <SiJavascript className="text-5xl text-yellow-400" />, color: 'hover:text-yellow-300' },
    { name: 'Node.js', icon: <FaNodeJs className="text-5xl text-green-500" />, color: 'hover:text-green-300' },
    { name: 'MongoDB', icon: <SiMongodb className="text-5xl text-green-500" />, color: 'hover:text-green-300' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-5xl text-teal-400" />, color: 'hover:text-teal-300' },
    { name: 'Docker', icon: <SiDocker className="text-5xl text-blue-500" />, color: 'hover:text-blue-300' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-padding bg-neutral-900 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            className="text-3xl md:text-4xl lg:text-5xl text-heading font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative inline-block">
              <span className="relative z-10 text-neutral-100">My Skills</span>
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
            className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Here are the technologies and tools I work with. I'm always eager to learn new technologies and expand my skill set.
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="glass-card p-6 group hover-lift hover:scale-105 relative overflow-hidden"
              whileHover={{
                y: -5,
                boxShadow: "0 15px 40px rgba(99, 102, 241, 0.15)"
              }}
            >
              {/* Background gradient overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="flex items-center mb-6 relative z-10">
                <motion.div
                  className="p-3 bg-primary-900/30 rounded-xl mr-4 group-hover:bg-primary-800/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {category.icon}
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-bold text-neutral-100 group-hover:text-primary-300 transition-colors">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4 relative z-10">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="flex justify-between items-center">
                      <motion.div
                        className="flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <span className="font-medium text-neutral-300 group-hover:text-neutral-200 transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                      <motion.span
                        className="text-sm font-semibold text-primary-400"
                        animate={{
                          opacity: hoveredSkill === skill.name ? [0.7, 1, 0.7] : 1,
                        }}
                        transition={{ duration: 2, repeat: hoveredSkill === skill.name ? Infinity : 0 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    <div className="relative">
                      <div className="w-full bg-neutral-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-3 rounded-full ${skill.color} relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3,
                            duration: 1.5,
                            ease: "easeOut"
                          }}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{
                              x: hoveredSkill === skill.name ? ["0%", "100%", "0%"] : "0%",
                            }}
                            transition={{
                              duration: 2,
                              repeat: hoveredSkill === skill.name ? Infinity : 0,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* Technologies Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl text-heading font-bold text-center mb-12 text-neutral-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Technologies I Use
          </motion.h3>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.7 + index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                className={`flex flex-col items-center p-4 glass-card group hover-lift hover:scale-110 cursor-pointer transition-all duration-300 ${tech.color}`}
                whileHover={{
                  y: -8,
                  boxShadow: "0 15px 40px rgba(99, 102, 241, 0.2)",
                  transition: { type: "spring", stiffness: 300 }
                }}
                onHoverStart={() => setHoveredSkill(tech.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <motion.div
                  animate={{
                    rotate: hoveredSkill === tech.name ? [0, 5, -5, 0] : 0,
                    scale: hoveredSkill === tech.name ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: hoveredSkill === tech.name ? 0.6 : 0.3,
                    ease: "easeInOut"
                  }}
                >
                  {tech.icon}
                </motion.div>
                <motion.span
                  className="text-sm font-medium text-neutral-300 group-hover:text-neutral-200 transition-colors mt-3 text-center"
                  animate={{
                    y: hoveredSkill === tech.name ? [0, -2, 0] : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {tech.name}
                </motion.span>

                {/* Pulsing effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: hoveredSkill === tech.name ? [1, 1.05, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: hoveredSkill === tech.name ? Infinity : 0 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 text-neutral-400"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <FaGitAlt className="text-primary-400" />
            </motion.div>
            <span className="text-lg">Always learning new technologies • Always growing</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <FaReact className="text-primary-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
