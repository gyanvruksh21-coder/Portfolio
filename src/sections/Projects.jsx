import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiBarChart, FiShoppingCart, FiHeart, FiTrendingUp, FiStar, FiEye, FiLayers } from 'react-icons/fi';
import { useState } from 'react';
import ProjectModal from '../components/ProjectModal';

const projects = [
  {
    id: 1,
    title: "Health Checkup Web App",
    description: "A comprehensive health monitoring application that tracks vital signs, provides personalized health recommendations, and generates detailed health reports using data analysis and visualization. Built with modern web technologies, this application helps users monitor their health metrics over time and provides actionable insights for better wellness decisions.",
    technologies: ["Python", "Data Analysis", "Matplotlib", "Pandas", "Streamlit", "Machine Learning", "Data Visualization"],
    icon: <FiHeart className="text-primary-400 text-3xl" />,
    github: "https://github.com/khushijoshi/health-checkup-app",
    demo: "https://health-checkup-demo.example.com",
    featured: true,
    category: "Healthcare & Data Science",
    highlights: [
      "Real-time health data visualization",
      "Personalized health recommendations",
      "Machine learning-powered insights",
      "Interactive dashboard interface"
    ]
  },
  {
    id: 2,
    title: "Krochet Freelance Store",
    description: "An e-commerce platform for handmade crochet products featuring a modern design, secure payment integration, and an intuitive shopping experience. This platform showcases unique handmade items and provides a seamless shopping experience for customers looking for artisanal products.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL", "Payment Gateway"],
    icon: <FiShoppingCart className="text-primary-400 text-3xl" />,
    github: "https://github.com/khushijoshi/krochet-store",
    demo: "https://krochet-store-demo.example.com",
    featured: true,
    category: "E-commerce & Web Development",
    highlights: [
      "Responsive design for all devices",
      "Secure payment processing",
      "Inventory management system",
      "Customer review system"
    ]
  },
  {
    id: 3,
    title: "Stock Market Sentiment Analyzer",
    description: "A machine learning application that analyzes social media sentiment and news articles to predict stock market trends and provide investment insights. This tool uses natural language processing and sentiment analysis to help investors make more informed decisions based on market sentiment.",
    technologies: ["Python", "NLP", "Scikit-learn", "Twitter API", "React", "TensorFlow", "Financial APIs"],
    icon: <FiTrendingUp className="text-primary-400 text-3xl" />,
    github: "https://github.com/khushijoshi/stock-sentiment",
    demo: "https://stock-sentiment-demo.example.com",
    featured: false,
    category: "Machine Learning & Finance",
    highlights: [
      "Real-time sentiment analysis",
      "Market trend prediction",
      "Social media integration",
      "Interactive visualization dashboard"
    ]
  },
  {
    id: 4,
    title: "Customer Analytics Dashboard",
    description: "An interactive dashboard for businesses to analyze customer behavior, purchase patterns, and market trends using advanced data visualization techniques. This comprehensive analytics tool helps businesses understand their customer base and make data-driven decisions.",
    technologies: ["Python", "Tableau", "SQL", "Pandas", "Seaborn", "Power BI", "Business Intelligence"],
    icon: <FiBarChart className="text-primary-400 text-3xl" />,
    github: "https://github.com/khushijoshi/customer-analytics",
    demo: "https://analytics-dashboard-demo.example.com",
    featured: false,
    category: "Business Intelligence",
    highlights: [
      "Customer segmentation analysis",
      "Purchase behavior insights",
      "Market trend identification",
      "Interactive data visualizations"
    ]
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="projects" className="section-padding bg-gradient-accent">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.h2 className="text-4xl md:text-5xl lg:text-6xl text-heading font-bold mb-6">
                <span className="relative inline-block">
                  <span className="relative z-10 text-neutral-100">Featured Projects</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-primary-900/50 -z-0"></span>
                </span>
              </motion.h2>
              <motion.p className="text-lg md:text-xl text-body text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                Here are some of my recent projects that showcase my skills in data science, web development, and problem-solving. Click on any project to learn more!
              </motion.p>
            </motion.div>

            {/* Featured Projects */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="glass-card p-8 group hover-lift hover:scale-105 relative overflow-hidden cursor-pointer"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={() => openModal(project)}
                  >
                    <div className="absolute top-4 right-4">
                      <FiStar className="text-yellow-400 w-5 h-5 animate-pulse-gentle" />
                    </div>

                    <div className="flex items-start mb-6">
                      <motion.div
                        className="p-3 bg-primary-900/30 rounded-full mr-4 group-hover:bg-primary-800/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {project.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl text-heading font-bold text-neutral-100 mb-2 group-hover:text-primary-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-neutral-400 mb-4 font-medium">
                          {project.category}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-xs bg-primary-900/50 text-primary-300 px-3 py-1 rounded-full hover:bg-primary-800/70 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs bg-primary-900/50 text-primary-300 px-3 py-1 rounded-full">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-body text-neutral-300 mb-6 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost flex items-center text-sm hover-lift focus-ring"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.05 }}
                        >
                          <FiGithub className="mr-1" size={16} /> Code
                        </motion.a>
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost flex items-center text-sm hover-lift focus-ring"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.05 }}
                          >
                            <FiExternalLink className="mr-1" size={16} /> Demo
                          </motion.a>
                        )}
                      </div>
                      <motion.button
                        className="flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(project);
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <FiEye className="mr-2" size={16} />
                        <span className="text-sm font-medium">View Details</span>
                      </motion.button>
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      initial={false}
                      animate={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Other Projects */}
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-2xl md:text-3xl text-heading font-bold text-center mb-8 text-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Other Projects
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-6">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 group hover-lift hover:scale-105 cursor-pointer"
                    whileHover={{ y: -4 }}
                    onClick={() => openModal(project)}
                  >
                    <div className="flex items-start mb-4">
                      <motion.div
                        className="p-2 bg-primary-900/30 rounded-full mr-3 group-hover:bg-primary-800/50 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        {project.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-lg text-heading font-semibold text-neutral-100 mb-1 group-hover:text-primary-300 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-xs text-neutral-400 mb-3 font-medium">
                          {project.category}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-xs bg-primary-900/30 text-primary-300 px-2 py-1 rounded hover:bg-primary-800/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs bg-primary-900/30 text-primary-300 px-2 py-1 rounded">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-body text-neutral-400 text-sm mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost flex items-center text-sm hover-lift focus-ring"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.05 }}
                        >
                          <FiGithub className="mr-1" size={16} /> Code
                        </motion.a>
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost flex items-center text-sm hover-lift focus-ring"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.05 }}
                          >
                            <FiExternalLink className="mr-1" size={16} /> Demo
                          </motion.a>
                        )}
                      </div>
                      <motion.button
                        className="flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(project);
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <FiEye className="mr-2" size={16} />
                        <span className="text-sm font-medium">Details</span>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center mt-12"
            >
              <motion.a
                href="https://github.com/khushijoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline hover-lift focus-ring"
                whileHover={{ scale: 1.05 }}
              >
                <FiGithub className="mr-2" />
                View All Projects on GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Projects;
