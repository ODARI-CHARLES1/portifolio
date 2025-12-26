import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="max-w-4xl mx-auto text-lg leading-relaxed">
          <p className="mb-6">
            As an Electrical & Electronic Engineering student with a passion for software development,
            I bridge the gap between hardware and software through innovative IoT solutions and
            engineering-focused applications.
          </p>
          <p className="mb-6">
            My engineering mindset drives me to approach problems systematically, combining
            mathematical precision with creative problem-solving. I'm particularly interested in
            electronics & PCB design, backend development, IoT systems, mathematics & physics,
            AI & future technologies.
          </p>
          <p>
            I believe in creating impactful systems that solve real-world problems, whether it's
            through embedded systems, web applications, or the integration of emerging technologies.
            My goal is to contribute to the advancement of technology that benefits society.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;