'use client';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import {
    CreditCardIcon,
    UsersIcon,
    ChartBarIcon,
    TruckIcon,
    ClipboardDocumentCheckIcon,
  } from '@heroicons/react/24/outline';
  
  const features = [
    {
      name: 'Finance',
      description: 'Streamline fee collection, manage expenses, and generate insightful financial reports with our intuitive finance module.',
      icon: CreditCardIcon,
      href: '/finance',
      color: 'bg-blue-500'
    },
    {
      name: 'Payroll',
      description: 'Automate salary processing, manage employee records, and ensure timely and accurate payroll with our comprehensive payroll system.',
      icon: UsersIcon,
      href: '/payroll',
      color: 'bg-green-500'
    },
    {
      name: 'Attendance',
      description: 'Track student and staff attendance effortlessly. Get real-time data, generate reports, and integrate with biometric systems.',
      icon: ChartBarIcon,
      href: '/attendance',
      color: 'bg-red-500'
    },
    {
      name: 'Transport',
      description: 'Optimize bus routes, manage vehicle details, and ensure student safety with our integrated transport management system.',
      icon: TruckIcon,
      href: '/transport',
      color: 'bg-yellow-500'
    },
    {
        name: 'Users & Roles',
        description: 'Manage user accounts, define roles, and control access to different modules and features of the application.',
        icon: ClipboardDocumentCheckIcon,
        href: '/users',
        color: 'bg-indigo-500'
    }
  ];
  
  export default function Features() {
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
      <div id="features" className="py-20 bg-gray-50 relative overflow-hidden">
        <motion.img src="/support-team.png" alt="Support Team" className="absolute -bottom-20 -left-20 w-80 opacity-20" animate={{ y: [0, 20, 0], x: [0, -10, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="text-center">
            <motion.h2 variants={itemVariants} className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need to run your school
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              EduFlex is a modular platform, which means you only pay for what you need.
            </motion.p>
          </div>
          <motion.div className="mt-16" variants={containerVariants}>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  variants={itemVariants}
                  className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex"
                >
                  <Link href={feature.href} className="block w-full">
                    <div className="pt-6 h-full">
                      <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg h-full ring-1 ring-slate-900/5 hover:ring-2 hover:ring-offset-2 hover:ring-indigo-500">
                        <div className="-mt-6">
                          <div>
                            <span className={`inline-flex items-center justify-center p-3 ${feature.color} rounded-md shadow-lg`}>
                              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                          <p className="mt-5 text-base text-gray-500">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }
