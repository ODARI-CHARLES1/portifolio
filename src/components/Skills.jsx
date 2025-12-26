import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  const categories = [
    { key: 'programming', title: '💻 Programming & Software', data: skills.programming },
    { key: 'webDevelopment', title: '🌐 Web Development', data: skills.webDevelopment },
    { key: 'electronics', title: '⚡ Electronics & Engineering', data: skills.electronics },
    { key: 'mathematics', title: '📐 Mathematics & Science', data: skills.mathematics }
  ];

  return (
    <section id="skills" className="section bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
              <ul className="space-y-2">
                {category.data.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;