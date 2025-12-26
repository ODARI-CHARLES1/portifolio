import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Charles Odari</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            "Innovation happens at the intersection of engineering precision and creative problem-solving."
          </p>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500">
              © {currentYear} Charles Odari. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;