import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! I will get back to you soon.');
    reset();
  };

  return (
    <section id="contact" className="section-padding bg-neutral-900">
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
              <span className="relative z-10 text-neutral-100">Get In Touch</span>
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
            Have a question or want to work together? Feel free to reach out to me. I'll get back to you as soon as possible!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-neutral-100 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start group hover-lift">
                  <div className="bg-primary-900/30 p-3 rounded-full text-primary-400 mr-4 group-hover:bg-primary-800/50 transition-all duration-300">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-200 mb-1">Email Me</h4>
                    <a
                      href="mailto:khushijoshi.amcec@gmail.com"
                      className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      khushijoshi.amcec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start group hover-lift">
                  <div className="bg-primary-900/30 p-3 rounded-full text-primary-400 mr-4 group-hover:bg-primary-800/50 transition-all duration-300">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-200 mb-1">Location</h4>
                    <p className="text-neutral-400">Bengaluru, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex items-start group hover-lift">
                  <div className="bg-primary-900/30 p-3 rounded-full text-primary-400 mr-4 group-hover:bg-primary-800/50 transition-all duration-300">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-200 mb-1">Phone</h4>
                    <p className="text-neutral-400">+91 XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-medium text-neutral-200 mb-3">Connect with me</h4>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://linkedin.com/in/khushijoshi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-3 text-neutral-300 hover:text-primary-300 hover:bg-primary-900/30 transition-all duration-300"
                      aria-label="LinkedIn"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin size={20} />
                    </motion.a>
                    <motion.a
                      href="https://github.com/khushijoshi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-3 text-neutral-300 hover:text-primary-300 hover:bg-primary-900/30 transition-all duration-300"
                      aria-label="GitHub"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-neutral-100 mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300 bg-neutral-800 text-neutral-200 ${
                      errors.name ? 'border-red-400' : 'border-neutral-600'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300 bg-neutral-800 text-neutral-200 ${
                      errors.email ? 'border-red-400' : 'border-neutral-600'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject')}
                    className="w-full px-4 py-3 border border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300 bg-neutral-800 text-neutral-200"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    {...register('message', { required: 'Message is required' })}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300 bg-neutral-800 text-neutral-200 ${
                      errors.message ? 'border-red-400' : 'border-neutral-600'
                    }`}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn btn-primary hover-lift focus-ring"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
