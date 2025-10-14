import { motion } from 'framer-motion';
import { FaPython, FaReact, FaDatabase, FaChartLine, FaGitAlt } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiJavascript, SiTailwindcss } from 'react-icons/si';

const skills = [
  {
    category: 'Data Science',
    icon: <FaChartLine className="text-primary-400 text-2xl" />,
    items: [
      { name: 'Python', level: 90 },
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 80 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'TensorFlow', level: 75 },
      { name: 'PyTorch', level: 70 },
    ],
  },
  {
    category: 'Web Development',
    icon: <FaReact className="text-primary-400 text-2xl" />,
    items: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 70 },
      { name: 'RESTful APIs', level: 80 },
    ],
  },
  {
    category: 'Database',
    icon: <FaDatabase className="text-primary-400 text-2xl" />,
    items: [
      { name: 'SQL', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Firebase', level: 70 },
    ],
  },
  {
    category: 'Tools & Others',
    icon: <FaGitAlt className="text-primary-400 text-2xl" />,
    items: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Tableau', level: 75 },
      { name: 'Jupyter Notebooks', level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl text-heading font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative inline-block">
              <span className="relative z-10 text-neutral-100">My Skills</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-primary-900/50 -z-0"></span>
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

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group hover-lift hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-900/30 rounded-lg mr-3 group-hover:bg-primary-800/50 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-100 group-hover:text-primary-300 transition-colors">
                    {skill.category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {skill.items.map((item) => (
                    <div key={item.name} className="space-y-1">
                      <div className="flex justify-between text-sm text-neutral-400">
                        <span>{item.name}</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="w-full bg-neutral-700 rounded-full h-2">
                        <div
                          className="bg-primary-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.h3
              className="text-2xl md:text-3xl text-heading font-bold text-center mb-8 text-neutral-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Technologies I Use
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div
                className="flex flex-col items-center p-4 glass-card w-24 group hover-lift hover:scale-105"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaPython className="text-4xl text-blue-400 mb-2 group-hover:text-blue-300 transition-colors" />
                <span className="text-sm font-medium text-neutral-300 group-hover:text-neutral-200 transition-colors">Python</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center p-4 glass-card w-24 group hover-lift hover:scale-105"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <SiTensorflow className="text-4xl text-orange-400 mb-2 group-hover:text-orange-300 transition-colors" />
                <span className="text-sm font-medium text-neutral-300 group-hover:text-neutral-200 transition-colors">TensorFlow</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center p-4 glass-card w-24 group hover-lift hover:scale-105"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <SiPytorch className="text-4xl text-red-400 mb-2 group-hover:text-red-300 transition-colors" />
                <span className="text-sm font-medium text-neutral-300 group-hover:text-neutral-200 transition-colors">PyTorch</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center p-4 glass-card w-24 group hover-lift hover:scale-105"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <SiJavascript className="text-4xl text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors" />
                <span className="text-sm font-medium text-neutral-300 group-hover:text-neutral-200 transition-colors">JavaScript</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center p-4 glass-card w-24 group hover-lift hover:scale-105"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaReact className="text-4xl text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors" />
                <span className="text-sm font-medium text-neutral-300 group-hover:text-neutral-200 transition-colors">React</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center p-4 glass-card w-24 group hover-lift hover:scale-105"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <SiTailwindcss className="text-4xl text-teal-400 mb-2 group-hover:text-teal-300 transition-colors" />
                <span className="text-sm font-medium text-neutral-300 group-hover:text-neutral-200 transition-colors">Tailwind</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
