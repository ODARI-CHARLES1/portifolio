import { motion } from 'framer-motion';

const Education = () => {
  const experiences = [
    {
      title: 'Electrical & Electronic Engineering',
      institution: 'University Level',
      period: 'Current',
      description: 'Pursuing comprehensive studies in electrical and electronic engineering, focusing on circuit design, power systems, and embedded technologies.'
    },
    {
      title: 'Industrial Training / Attachment',
      institution: 'Engineering Firm',
      period: 'Completed',
      description: 'Hands-on experience in practical engineering applications, working with real-world systems and industry-standard tools.'
    },
    {
      title: 'Hackathons & Competitions',
      institution: 'Various Events',
      period: 'Ongoing',
      description: 'Participated in multiple hackathons and engineering competitions, developing innovative solutions and collaborating with diverse teams.'
    },
    {
      title: 'Self-Learning & Research',
      institution: 'Personal Projects',
      period: 'Ongoing',
      description: 'Continuous learning through personal projects, online courses, and research in emerging technologies including IoT, AI, and advanced electronics.'
    }
  ];

  return (
    <section id="education" className="section bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-12">Education & Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8 bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>
              <p className="text-gray-300 mb-2">{exp.institution}</p>
              <p className="text-gray-400">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;