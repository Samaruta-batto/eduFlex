
'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative pt-16 pb-20 text-center lg:pt-24 lg:pb-28">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">The Future of School Management</span>
            <span className="block text-emerald-400">is Here.</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-lg text-blue-100 sm:max-w-3xl">
            EduFlex is the all-in-one platform that simplifies school administration, empowers educators, and engages students like never before.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <Link href="/dashboard" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-800 bg-white hover:bg-blue-50 sm:px-8">
                Go to Dashboard
              </Link>
              <Link href="#features" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-500 hover:bg-emerald-600 sm:px-8">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
