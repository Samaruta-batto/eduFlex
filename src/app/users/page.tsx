
'use client';

import { UsersIcon, UserPlusIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import RBAC from '@/components/RBAC';

const stats = [
    { name: 'Total Users', stat: '1,285' },
    { name: 'Administrators', stat: '5' },
    { name: 'Teachers', stat: '75' },
    { name: 'Students', stat: '1,200' },
];

const recentActivity = [
    { user: 'John Doe', action: 'New student account created.' },
    { user: 'Jane Smith', action: 'Teacher role assigned.' },
    { user: 'Admin', action: 'Password reset for a parent account.' },
];

export default function UsersDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">User & Role Management</h1>
          <p className="mt-1 text-gray-600">Manage user accounts and system permissions.</p>
        </div>
        <div>
          <RBAC allowedRoles={['admin']}>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-blue hover:bg-brand-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
            >
              <UserPlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              New User
            </button>
          </RBAC>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <p className="text-sm font-medium text-gray-500 truncate">{item.name}</p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: User List */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-medium text-gray-900 mb-4">All Users</h2>
          <div className="bg-white shadow rounded-lg p-5">
             <div className="bg-gray-200 h-96 rounded-md flex items-center justify-center">
                <p className="text-gray-500">A searchable and sortable user table will be here.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Recent Activity */}
        <div className="lg:col-span-1">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="bg-white shadow rounded-lg p-5 space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <ShieldCheckIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                  <p className="text-sm text-gray-500">{activity.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
