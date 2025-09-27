'use client';

import { AcademicCapIcon, BanknotesIcon, ChartBarIcon, DocumentTextIcon, UserGroupIcon, UsersIcon, PlusCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

// Mock data for dashboard stats
const stats = [
  { name: 'Total Students', stat: '1,200', icon: UsersIcon, color: 'blue' },
  { name: 'Total Staff', stat: '85', icon: UserGroupIcon, color: 'green' },
  { name: 'Total Classes', stat: '24', icon: AcademicCapIcon, color: 'orange' },
  { name: 'Revenue YTD', stat: '₹ 4,500,000', icon: BanknotesIcon, color: 'blue' },
  { name: 'Pending Invoices', stat: '32', icon: DocumentTextIcon, color: 'orange' },
];

// Mock data for recent activity
const recentActivity = [
  { id: 1, text: 'New student enrolled: <span class="font-semibold">John Doe</span>', time: '2 minutes ago', type: 'student' },
  { id: 2, text: 'Invoice paid: <span class="font-semibold">#INV-00123</span> for <span class="font-semibold">₹ 15,000</span>', time: '1 hour ago', type: 'finance' },
  { id: 3, text: 'Staff salary processed: <span class="font-semibold">Jane Smith</span>', time: '3 hours ago', type: 'payroll' },
  { id: 4, text: 'New class added: <span class="font-semibold">Class XA</span>', time: 'yesterday', type: 'class' },
];

export default function Dashboard() {
  const router = useRouter();

  const handleQuickAction = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to EduFlex!</h1>

      {/* Quick Actions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-5">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => handleQuickAction('/students/new')}
            className="flex items-center justify-center p-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            <PlusCircleIcon className="h-6 w-6 mr-2" />
            <span className="text-lg font-medium">Add New Student</span>
          </button>
          <button
            onClick={() => handleQuickAction('/staff/new')}
            className="flex items-center justify-center p-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors"
          >
            <PlusCircleIcon className="h-6 w-6 mr-2" />
            <span className="text-lg font-medium">Add New Staff</span>
          </button>
          <button
            onClick={() => handleQuickAction('/finance/invoices/new')}
            className="flex items-center justify-center p-4 bg-orange-700 text-white rounded-lg shadow-md hover:bg-orange-800 transition-colors"
          >
            <PlusCircleIcon className="h-6 w-6 mr-2" />
            <span className="text-lg font-medium">Create Invoice</span>
          </button>
          <button
            onClick={() => handleQuickAction('/payroll/employees/new')}
            className="flex items-center justify-center p-4 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors"
          >
            <PlusCircleIcon className="h-6 w-6 mr-2" />
            <span className="text-lg font-medium">New Employee</span>
          </button>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-10">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative bg-white overflow-hidden shadow-lg rounded-xl border border-gray-200
                       transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="p-6 flex items-start space-x-4">
              <div
                className={`flex-shrink-0 p-3 rounded-full bg-${item.color}-100 text-${item.color}-700
                           transform transition-transform duration-300 group-hover:scale-110`}
              >
                <item.icon className={`h-7 w-7 text-${item.color}-700`} aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 truncate">{item.name}</p>
                <p className="mt-1 text-3xl font-bold text-gray-900">{item.stat}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Fee Collection Overview */}
        <section className="lg:col-span-2 bg-white shadow-lg rounded-xl border border-gray-200 p-6 transform transition-all duration-300 hover:scale-[1.01]">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Fee Collection Overview</h2>
          <p className="text-gray-600 mb-6">Visual representation of fee collections over time.</p>
          <div className="mt-4 bg-gray-100 h-80 rounded-lg flex items-center justify-center border border-dashed border-gray-300">
            <ChartBarIcon className="h-16 w-16 text-gray-300" />
            <p className="text-gray-500 ml-4 text-lg">Interactive Chart Placeholder</p>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="lg:col-span-1 bg-white shadow-lg rounded-xl border border-gray-200 p-6 transform transition-all duration-300 hover:scale-[1.01]">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
          <ul className="divide-y divide-gray-200">
            {recentActivity.map((activity) => (
              <li key={activity.id} className="py-4 flex items-start hover:bg-gray-50 transition-colors duration-150 rounded-md -mx-2 px-2">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mr-3">
                  {activity.type === 'student' && <UsersIcon className="h-5 w-5" />}
                  {activity.type === 'finance' && <BanknotesIcon className="h-5 w-5" />}
                  {activity.type === 'payroll' && <DocumentTextIcon className="h-5 w-5" />}
                  {activity.type === 'class' && <AcademicCapIcon className="h-5 w-5" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800" dangerouslySetInnerHTML={{ __html: activity.text }}></p>
                  <p className="text-xs text-gray-600 mt-1">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
