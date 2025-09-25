
import Link from 'next/link';
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
      href: '/finance'
    },
    {
      name: 'Payroll',
      description: 'Automate salary processing, manage employee records, and ensure timely and accurate payroll with our comprehensive payroll system.',
      icon: UsersIcon,
      href: '/payroll'
    },
    {
      name: 'Attendance',
      description: 'Track student and staff attendance effortlessly. Get real-time data, generate reports, and integrate with biometric systems.',
      icon: ChartBarIcon,
      href: '/attendance'
    },
    {
      name: 'Transport',
      description: 'Optimize bus routes, manage vehicle details, and ensure student safety with our integrated transport management system.',
      icon: TruckIcon,
      href: '/transport'
    },
    {
        name: 'Users & Roles',
        description: 'Manage user accounts, define roles, and control access to different modules and features of the application.',
        icon: ClipboardDocumentCheckIcon,
        href: '/users'
    }
  ];
  
  export default function Features() {
    return (
      <div id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need to run your school
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              EduFlex is a modular platform, which means you only pay for what you need.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Link key={feature.name} href={feature.href}>
                  <div className="pt-6">
                    <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg h-full">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-brand-emerald rounded-md shadow-lg">
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
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
