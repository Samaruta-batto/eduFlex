'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-br from-[#0a2a6c] to-[#01204e] text-white overflow-hidden min-h-screen">
      
      {/* Background geometric shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-[2%] left-[2%] w-1 h-1 bg-white/10 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute top-[15%] right-[2%] w-2 h-2 bg-white/10 rotate-12"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-[5%] left-[5%] w-1.5 h-1.5 bg-white/10"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-[12%] right-[5%] w-1 h-1 bg-white/10 rounded-full"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>

      {/* Floating Shapes */}
      <motion.div className="absolute top-[15%] right-[25%] w-4 h-4 border-2 border-purple-400" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} animate={{ y: [0, 10, 0], rotate: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute top-[20%] right-[22%] w-3 h-3 border border-white" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} animate={{ y: [0, -5, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[20%] right-[20%] w-4 h-4 border border-white transform rotate-45" animate={{ y: [0, 8, 0], x: [0, -8, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[10%] right-[28%] w-3 h-3 border border-white" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', transform: 'rotate(180deg)' }} animate={{ y: [0, -12, 0], rotate: [180, 165, 180] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[30%] left-[22%] w-4 h-4 border border-white rounded-full" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[40%] left-[18%] w-3 h-3 border-2 border-purple-400" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', transform: 'rotate(220deg)' }} animate={{ y: [0, 5, 0], rotate: [220, 235, 220] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />

      <motion.h1 
        className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Streamline Your School with EduFlex
      </motion.h1>
      <motion.p 
        className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A modern, flexible school management system designed to streamline administrative tasks and enhance communication between educators, students, and parents.
      </motion.p>
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a href="/dashboard" className="bg-white text-[#01204e] font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors text-lg">
          Get Started
        </a>
        <a href="#features" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-lg">
          Learn More
        </a>
      </motion.div>

      {/* Main Hero Image */}
      <motion.div 
        className="mt-16 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <img src="/studentreport-min.png" alt="EduFlex Dashboard on a laptop and mobile" className="max-w-4xl mx-auto"/>
        <motion.img src="/a6.png" alt="Floating icon" className="absolute -top-8 -left-8 w-24" animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}/>
        <motion.img src="/a4.png" alt="Floating icon" className="absolute -bottom-8 -right-8 w-24" animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}/>
      </motion.div>

    </section>
  );
}
