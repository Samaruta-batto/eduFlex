'use client';

import Link from 'next/link';

// Inline SVG Icons for features
const IconInvoice = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const IconPayroll = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h4m-4 0h4m-4 0a2 2 0 01-2-2v-6a2 2 0 012-2h4a2 2 0 012 2v6a2 2 0 01-2 2h-4zm-2 0a2 2 0 002 2h4m-4 0a2 2 0 002 2h4m0-4h.01" />
  </svg>
);

const IconAttendance = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconTransport = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h.01M12 11h.01M15 11h.01M9 21h6m-3-4v4m-5 0h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-800">
            The Smarter Way to Manage Your School
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            EduFlex is a modular SaaS platform designed for modern school management. Start with what you need, and add more features as you grow.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#" className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200">
              Start Your 30-Day Free Trial
            </Link>
            <Link href="#features" className="w-full sm:w-auto px-8 py-3 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200">
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">Comprehensive, Yet Simple</h2>
            <p className="mt-4 text-gray-600">
              Pay only for the modules you need. EduFlex provides a powerful, all-in-one solution for every aspect of your school&apos;s operations.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1: Finance */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105">
              <div className="flex justify-center mb-4"><IconInvoice /></div>
              <h3 className="text-xl font-bold">Finance & Fees</h3>
              <p className="mt-2 text-gray-500 text-sm">Automated invoicing, reminders, and payment gateway integrations.</p>
            </div>
            {/* Feature 2: Payroll */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105">
              <div className="flex justify-center mb-4"><IconPayroll /></div>
              <h3 className="text-xl font-bold">Staff Payroll</h3>
              <p className="mt-2 text-gray-500 text-sm">Efficient payroll processing with automated payslip generation.</p>
            </div>
            {/* Feature 3: Attendance */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105">
              <div className="flex justify-center mb-4"><IconAttendance /></div>
              <h3 className="text-xl font-bold">Attendance</h3>
              <p className="mt-2 text-gray-500 text-sm">Digital student registers and biometric integration for staff.</p>
            </div>
            {/* Feature 4: Transport */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105">
              <div className="flex justify-center mb-4"><IconTransport /></div>
              <h3 className="text-xl font-bold">Transport</h3>
              <p className="mt-2 text-gray-500 text-sm">Route management, bus assignments, and integrated fee collection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold">Ready to Simplify School Management?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Join hundreds of schools that are streamlining their operations with EduFlex. Start your risk-free trial today.
          </p>
          <div className="mt-8">
            <Link href="#" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>&copy; 2025 EduFlex. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
