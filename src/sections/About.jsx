import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiCode, FiUsers, FiMapPin, FiMail, FiCalendar } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: <FiCode className="text-primary-400 text-2xl" />,
      title: "Full Stack Development",
      description: "Building modern web applications with React, Node.js, and cutting-edge technologies"
    },
    {
      icon: <FiBookOpen className="text-primary-400 text-2xl" />,
      title: "Data Science & Analytics",
      description: "Transforming complex data into actionable insights using Python, ML, and statistical analysis"
    },
    {
      icon: <FiUsers className="text-primary-400 text-2xl" />,
      title: "Leadership & Communication",
      description: "Leading teams and organizing events, fostering collaboration and innovation"
    },
    {
      icon: <FiAward className="text-primary-400 text-2xl" />,
      title: "Problem Solving",
      description: "Approaching challenges with analytical thinking and creative solutions"
    }
  ];

  const stats = [
    { label: "Location", value: "Bengaluru, India", icon: <FiMapPin className="text-primary-400" /> },
    { label: "Education", value: "B.E. Computer Science", icon: <FiBookOpen className="text-primary-400" /> },
    { label: "Experience", value: "3+ Years Learning", icon: <FiCalendar className="text-primary-400" /> },
    { label: "Focus", value: "Full Stack & Data Science", icon: <FiCode className="text-primary-400" /> }
  ];

  return (
    <section id="about" className="section-padding bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl text-heading font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative inline-block">
                <span className="relative z-10 text-neutral-100">About Me</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-primary-900/50 -z-0"></span>
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
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-900/30 to-primary-800/30 rounded-full overflow-hidden border-8 border-neutral-800 shadow-2xl animate-float">
                  <div className="w-full h-full bg-gradient-to-br from-primary-800/50 to-primary-700/50 flex items-center justify-center">
                    <span className="text-6xl text-primary-300 font-bold animate-pulse-gentle">KJ</span>
                  </div>
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Data Scientist
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <motion.h3
                  className="text-2xl md:text-3xl text-heading font-bold mb-6 text-neutral-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Hello! I'm Khushi
                </motion.h3>
                <motion.div
                  className="space-y-4 text-neutral-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <p>
                    I'm a passionate Computer Science student currently pursuing my B.E. at AMC Engineering College in Bengaluru, India. With a strong foundation in both theoretical concepts and practical applications, I'm constantly exploring the intersection of technology and problem-solving.
                  </p>
                  <p>
                    My journey in tech has been driven by curiosity and a desire to make a meaningful impact. Whether it's developing web applications, analyzing complex datasets, or leading team projects, I bring enthusiasm and attention to detail to everything I do.
                  </p>
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
                    className="glass-card p-4 hover-lift"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="flex items-center mb-2">
                      {stat.icon}
                      <span className="ml-2 text-sm font-medium text-neutral-400">{stat.label}</span>
                    </div>
                    <p className="text-neutral-200 font-medium">{stat.value}</p>
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
                <a
                  href="/#projects"
                  className="btn btn-primary hover-lift focus-ring"
                >
                  View My Work
                </a>
                <a
                  href="/#contact"
                  className="btn btn-outline hover-lift focus-ring"
                >
                  Get In Touch
                </a>
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
                  className="glass-card p-6 text-center group hover-lift hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary-900/30 rounded-full mb-4 group-hover:bg-primary-800/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {highlight.icon}
                  </motion.div>
                  <h4 className="text-heading font-semibold mb-2 text-neutral-200">{highlight.title}</h4>
                  <p className="text-body text-sm text-neutral-400 leading-relaxed">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
