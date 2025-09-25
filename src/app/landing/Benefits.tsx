
import { CheckIcon } from '@heroicons/react/24/outline';

const benefits = [
  'Centralized data management',
  'Improved communication',
  'Increased efficiency',
  'Data-driven decision making',
  'Enhanced parent-teacher collaboration',
  'Secure and reliable',
];

export default function Benefits() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Benefits</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to manage your school
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            EduFlex is designed to help you save time and money, while improving the quality of education.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                    <CheckIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">{benefit}</dt>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
