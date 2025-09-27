
import { CheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const benefits = [
  'Centralized data management',
  'Improved communication',
  'Increased efficiency',
  'Data-driven decision making',
  'Enhanced parent-teacher collaboration',
  'Secure and reliable',
];

export default function Benefits() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div className="bg-white py-20">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="lg:text-center">
          <motion.h2 variants={itemVariants} className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Benefits</motion.h2>
          <motion.p variants={itemVariants} className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to manage your school
          </motion.p>
          <motion.p variants={itemVariants} className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            EduFlex is designed to help you save time and money, while improving the quality of education.
          </motion.p>
        </div>

        <motion.div className="mt-12" variants={containerVariants}>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div key={benefit} variants={itemVariants} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                    <CheckIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">{benefit}</dt>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
