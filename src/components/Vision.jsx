import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section id="vision" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Vision & Goals</h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4">5-Year Vision</h3>
            <p className="text-lg leading-relaxed">
              To become a leading innovator in the integration of engineering and software technologies,
              creating sustainable and intelligent systems that address global challenges in IoT, AI,
              and smart infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h4 className="text-xl font-semibold mb-3 text-blue-400">Engineering Excellence</h4>
              <p className="text-gray-300">
                Mastering advanced engineering principles and applying them to solve complex real-world problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h4 className="text-xl font-semibold mb-3 text-blue-400">Software Innovation</h4>
              <p className="text-gray-300">
                Developing cutting-edge software solutions that bridge hardware and digital systems seamlessly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h4 className="text-xl font-semibold mb-3 text-blue-400">AI Integration</h4>
              <p className="text-gray-300">
                Incorporating artificial intelligence and machine learning to create intelligent, adaptive systems.
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mt-8"
          >
            My innovation-focused mindset drives me to explore the intersection of mathematics, engineering,
            and technology, with the ultimate goal of creating systems that not only function efficiently
            but also contribute positively to society and the environment.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Vision;