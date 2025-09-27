'use client';
import Link from 'next/link';
import { Parallax } from 'react-scroll-parallax';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 min-h-screen flex items-center justify-center">
      {/* Background Elements - positioned absolutely */}
      <Parallax speed={-10}>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full opacity-30 animate-float-one"></div>
      </Parallax>
      <Parallax speed={-15}>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-emerald-300 transform rotate-45 opacity-20 animate-float-two"></div>
      </Parallax>
      <Parallax speed={-5}>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-300 rounded-lg opacity-40 animate-float-three"></div>
      </Parallax>
      <Parallax speed={10}>
        <div className="absolute top-5 left-1/3 w-20 h-20 bg-rose-400 rounded-full opacity-25 animate-float-two"></div>
      </Parallax>
      <Parallax speed={5}>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-indigo-400 rounded-xl opacity-35 animate-float-one"></div>
      </Parallax>
      <Parallax speed={15}>
        <div className="absolute top-1/3 right-5 w-28 h-28 bg-teal-300 rounded-full opacity-28 animate-float-three"></div>
      </Parallax>

      {/* Floating Objects: Original Images */}
      <Parallax speed={-20}>
        <div className="absolute top-[10%] left-[10%] w-24 h-24 animate-float-one z-0">
          <img src="/book.svg" alt="Floating Book" className="w-full h-full object-contain" />
        </div>
      </Parallax>
      <Parallax speed={-25}>
        <div className="absolute top-[20%] right-[15%] w-32 h-32 animate-float-two z-0">
          <img src="/laptop.svg" alt="Floating Laptop" className="w-full h-full object-contain" />
        </div>
      </Parallax>
      <Parallax speed={-12}>
        <div className="absolute bottom-[20%] left-[15%] w-28 h-28 animate-float-three z-0">
          <img src="/srs1.jpg" alt="Floating Student" className="w-full h-full object-contain" />
        </div>
      </Parallax>
      <Parallax speed={-8}>
        <div className="absolute bottom-[10%] right-[20%] w-20 h-20 animate-float-one z-0">
          <img src="/children.svg" alt="Floating Children" className="w-full h-full object-contain" />
        </div>
      </Parallax>
      <Parallax speed={12}>
        <div className="absolute top-[30%] left-[45%] w-20 h-20 animate-float-two z-0">
          <img src="/football.svg" alt="Floating Football" className="w-full h-full object-contain" />
        </div>
      </Parallax>
      <Parallax speed={20}>
        <div className="absolute top-[60%] left-[20%] w-36 h-36 animate-float-one z-0">
          <img src="/srs1.jpg" alt="Floating Children Studying" className="w-full h-full object-contain rounded-lg" />
        </div>
      </Parallax>
      <Parallax speed={-18}>
        <div className="absolute bottom-[35%] right-[10%] w-28 h-28 animate-float-three z-0">
          <img src="/communicate.png" alt="Floating Communication" className="w-full h-full object-contain" />
        </div>
      </Parallax>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative pt-16 pb-20 text-center lg:pt-24 lg:pb-28">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">The Future of School Management</span>
            <span className="block text-emerald-400">is Here.</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-lg text-blue-100 sm:max-w-3xl">
            EduFlex is the all-in-one platform that simplifies school
            administration, empowers educators, and engages students like never
            before.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <Link
                href="/dashboard"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-800 bg-white hover:bg-blue-50 sm:px-8"
              >
                Go to Dashboard
              </Link>
              <Link
                href="#features"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-500 hover:bg-emerald-600 sm:px-8"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
