
'use client';

import { TruckIcon, UserGroupIcon, MapIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const stats = [
    { name: 'Total Buses', stat: '25' },
    { name: 'Students Using Transport', stat: '850' },
    { name: 'Active Routes', stat: '15' },
    { name: 'Buses on the Move', stat: '12' },
];

const routeStatus = [
    { name: 'Route A', status: 'On Schedule', color: 'text-green-600' },
    { name: 'Route B', status: 'Delayed', color: 'text-yellow-600' },
    { name: 'Route C', status: 'On Schedule', color: 'text-green-600' },
];

export default function TransportDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Transport Management</h1>
          <p className="mt-1 text-gray-600">Monitor and manage the school's transportation network.</p>
        </div>
        <div>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <MapIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Manage Routes
          </button>
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
        {/* Left Column: Live Map */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Live Bus Tracking</h2>
          <div className="bg-white shadow rounded-lg p-5">
            <div className="bg-gray-200 h-96 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Live map will be displayed here</p>
            </div>
          </div>
        </div>

        {/* Right Column: Route Status */}
        <div className="lg:col-span-1">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Route Status</h2>
          <div className="bg-white shadow rounded-lg p-5 space-y-4">
            {routeStatus.map((route, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <TruckIcon className={`h-6 w-6 ${route.color}`} aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{route.name}</p>
                  <p className={`text-sm ${route.color}`}>{route.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
