import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiBarChart,
  FiShoppingCart,
  FiHeart,
  FiTrendingUp,
  FiStar,
  FiEye,
  FiLayers,
  FiCloud,
  FiPenTool,
  FiFilm,
  FiShield,
  FiGitBranch,
} from "react-icons/fi";
import { useState } from "react";
import ProjectModal from "../components/ProjectModal";

const projects = [
  {
    id: 1,
    title: "CarbonDrop",
    description:
      "A full-stack web application that calculates carbon footprints from real-world documents such as receipts and utility bills using OCR. Contributed to FastAPI backend services and SQL databases to process, store, and analyze emissions data with interactive dashboards.",
    technologies: [
      "FastAPI",
      "React",
      "OCR (Tesseract)",
      "SQL",
      "Chart.js",
      "Data Analysis",
    ],
    icon: <FiCloud className="text-primary-400 text-3xl" />,
    github: "https://github.com/Khush2803/CarbonDrop.git",
    demo: null,
    featured: true,
    category: "Open Source - Carbon Footprint",
    highlights: [
      "OCR-powered document processing",
      "FastAPI backend with SQL database",
      "Interactive emission dashboards",
      "Real-world utility bill analysis",
    ],
  },
  {
    id: 2,
    title: "Krochet Freelance Store",
    description:
      "A responsive e-commerce website designed and developed for a local crochet fashion brand. Features product displays, cart functionality, and mobile-friendly navigation aligned with brand identity.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "E-commerce"],
    icon: <FiShoppingCart className="text-primary-400 text-3xl" />,
    github: "https://github.com/Khush2803",
    demo: null,
    featured: true,
    category: "E-commerce & Web Development",
    highlights: [
      "Responsive design for all devices",
      "Product cart functionality",
      "Mobile-friendly navigation",
      "Client-aligned brand identity",
    ],
  },
  {
    id: 3,
    title: "Health Checkup Web Application",
    description:
      "A web-based tool to assess emotional and mental health using structured user inputs. Implements backend sentiment and scoring logic using Python with Matplotlib visualizations.",
    technologies: [
      "Python",
      "HTML",
      "CSS",
      "Data Analysis",
      "Matplotlib",
      "Sentiment Analysis",
    ],
    icon: <FiHeart className="text-primary-400 text-3xl" />,
    github: "https://github.com/Khush2803",
    demo: null,
    featured: true,
    category: "Healthcare & Data Science",
    highlights: [
      "Mental health assessment tool",
      "Python sentiment scoring logic",
      "Matplotlib health trend visualizations",
      "User-friendly interface design",
    ],
  },
  {
    id: 4,
    title: "Skribble",
    description:
      "A browser-based interactive drawing and word-guessing game with canvas-based drawing functionality and real-time user interaction. Features responsive UI components for enhanced gameplay.",
    technologies: ["HTML", "CSS", "JavaScript", "Canvas API", "Real-time"],
    icon: <FiPenTool className="text-primary-400 text-3xl" />,
    github: "https://github.com/Khush2803/skribble-",
    demo: null,
    featured: false,
    category: "Interactive Web Game",
    highlights: [
      "Canvas-based drawing functionality",
      "Real-time user interaction",
      "Responsive UI components",
      "Interactive gameplay experience",
    ],
  },
  {
    id: 5,
    title: "Movie Recommendation System",
    description:
      "A content-based recommendation engine using TF-IDF vectorization and cosine similarity. Built an interactive Streamlit UI for personalized movie suggestions based on user preferences.",
    technologies: ["Python", "TF-IDF", "Streamlit", "NLP", "scikit-learn"],
    icon: <FiFilm className="text-primary-400 text-3xl" />,
    github: "https://github.com/Khush2803",
    demo: null,
    featured: false,
    category: "Machine Learning & NLP",
    highlights: [
      "TF-IDF content-based filtering",
      "Interactive Streamlit UI",
      "Personalized movie suggestions",
      "Cosine similarity matching",
    ],
  },
  {
    id: 6,
    title: "Email Phishing Detection System",
    description:
      "A machine learning model to classify and detect phishing emails. Performed data preprocessing, feature engineering, and model evaluation with Seaborn visualizations.",
    technologies: [
      "Python",
      "Pandas",
      "scikit-learn",
      "Seaborn",
      "NLP",
      "Classification",
    ],
    icon: <FiShield className="text-primary-400 text-3xl" />,
    github: "https://github.com/Khush2803",
    demo: null,
    featured: false,
    category: "Cybersecurity & ML",
    highlights: [
      "Phishing email classification",
      "Feature engineering pipeline",
      "Seaborn performance visualization",
      "Model evaluation metrics",
    ],
  },
  {
    id: 7,
    title: "Iris Flower Classification",
    description:
      "A supervised machine learning model to classify iris flower species. Applied data preprocessing, train-test splitting, and model evaluation techniques using scikit-learn.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Classification",
    ],
    icon: <FiGitBranch className="text-primary-400 text-3xl" />,
    github: "https://github.com/Khush2803",
    demo: null,
    featured: false,
    category: "Machine Learning",
    highlights: [
      "Supervised classification model",
      "Iris species prediction",
      "Train-test validation",
      "Scikit-learn implementation",
    ],
  },
  {
    id: 8,
    title: "Unemployment Rate Analysis",
    description:
      "Analyzed unemployment rate datasets to identify trends across regions and time periods. Performed data cleaning and exploratory data analysis using Pandas, Matplotlib, and Seaborn.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    icon: <FiTrendingUp className="text-primary-400 text-3xl" />,
    github: "https://github.com/Khush2803/Unemployment-analysis.git",
    demo: null,
    featured: false,
    category: "Data Analysis",
    highlights: [
      "Regional trend identification",
      "Time series analysis",
      "Data cleaning & preprocessing",
      "Statistical visualizations",
    ],
  },
  {
    id: 9,
    title: "Sales Data Analysis",
    description:
      "Conducted exploratory data analysis on sales datasets to uncover purchasing patterns and revenue trends. Created visual reports using Matplotlib to support data-driven decision making.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "EDA"],
    icon: <FiBarChart className="text-primary-400 text-3xl" />,
    github: "https://github.com/Khush2803",
    demo: null,
    featured: false,
    category: "Business Intelligence",
    highlights: [
      "Purchasing pattern analysis",
      "Revenue trend visualization",
      "Data-driven insights",
      "Business reporting",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

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
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "unset";
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
                  <span className="relative z-10 text-neutral-100">
                    Featured Projects
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-primary-900/50 -z-0"></span>
                </span>
              </motion.h2>
              <motion.p className="text-lg md:text-xl text-body text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                Here are some of my recent projects that showcase my skills in
                data science, web development, and problem-solving. Click on any
                project to learn more!
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
                        <span className="text-sm font-medium">
                          View Details
                        </span>
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
                href="https://github.com/Khush2803"
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
