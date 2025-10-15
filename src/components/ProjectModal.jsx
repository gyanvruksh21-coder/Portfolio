import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiCalendar, FiUsers, FiTag } from 'react-icons/fi';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-4 md:inset-8 bg-neutral-900/95 backdrop-blur-xl rounded-2xl shadow-2xl z-50 overflow-hidden border border-neutral-700/50"
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-neutral-800/50 hover:bg-neutral-700/50 rounded-full text-neutral-400 hover:text-white transition-all duration-200 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiX size={20} />
            </motion.button>

            <div className="h-full overflow-y-auto p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-8"
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="p-4 bg-primary-900/30 rounded-2xl mr-4"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {project.icon}
                    </motion.div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-2">
                        {project.title}
                      </h2>
                      <p className="text-primary-400 font-medium">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Project meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                    <div className="flex items-center">
                      <FiCalendar className="mr-2" />
                      <span>Created: 2024</span>
                    </div>
                    <div className="flex items-center">
                      <FiUsers className="mr-2" />
                      <span>Personal Project</span>
                    </div>
                    <div className="flex items-center">
                      <FiTag className="mr-2" />
                      <span>{project.featured ? 'Featured' : 'Project'}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold text-neutral-100 mb-4">About This Project</h3>
                  <p className="text-neutral-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold text-neutral-100 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        className="px-4 py-2 bg-primary-900/30 text-primary-300 rounded-full border border-primary-700/30 hover:bg-primary-800/50 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Features/Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold text-neutral-100 mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.description.split('. ').slice(0, 4).map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start p-3 bg-neutral-800/30 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-neutral-300">{feature}.</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex-1 text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiGithub className="mr-2" />
                    View Source Code
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline flex-1 text-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiExternalLink className="mr-2" />
                      Live Demo
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
