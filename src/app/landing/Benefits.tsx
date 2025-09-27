
import { DollarSign, Zap, Users, Shield } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const benefits = [
  {
    name: 'Cost-Effective',
    description: 'Reduce administrative overhead and save money on printing, communication, and other operational expenses.',
    icon: DollarSign,
    color: 'bg-green-500'
  },
  {
    name: 'Time-Saving',
    description: 'Automate repetitive tasks, from attendance tracking to report card generation, freeing up valuable time for educators.',
    icon: Zap,
    color: 'bg-blue-500'
  },
  {
    name: 'Improved Communication',
    description: 'Foster a stronger school community with seamless communication between teachers, parents, and students.',
    icon: Users,
    color: 'bg-yellow-500'
  },
  {
    name: 'Enhanced Security',
    description: 'Keep student data safe and secure with our robust, cloud-based platform and granular access controls.',
    icon: Shield,
    color: 'bg-red-500'
  }
];

export default function Benefits() {
    const containerVariants: Variants = {
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
  
      const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, y: 50, transition: { duration: 0.3, ease: "easeIn" } },
      };

    return (
        <div className="bg-gray-200 py-20 relative overflow-hidden">
          <motion.img src="/studentreport-min.png" alt="Student Report" className="absolute top-1/4 -right-40 w-[30rem] opacity-20" animate={{ y: [0, -10, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
          <motion.img src="/21-min.png" alt="21 Min" className="absolute -bottom-16 -left-16 w-56 opacity-30" animate={{ y: [0, 15, 0], x: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
          <motion.img src="/smsgateway.png" alt="SMS Gateway" className="absolute top-2/3 md:top-1/2 left-1/4 md:left-1/3 transform -translate-y-1/2 w-48 opacity-15" animate={{ y: [0, -15, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
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

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {benefits.map((benefit) => (
                  <motion.div key={benefit.name} className="relative" variants={itemVariants}>
                    <dt>
                      <div className={`absolute flex items-center justify-center h-12 w-12 rounded-md ${benefit.color} text-white`}>
                        <benefit.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{benefit.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{benefit.description}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      );
  }
