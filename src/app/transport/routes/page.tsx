import Link from 'next/link';

// Mock data to be replaced with a real API call
const mockRoutes = [
  { id: 'RT-001', name: 'North City Route', busNumber: 'PB-10-AC-1234', stops: ['Stop A', 'Stop B', 'Stop C'] },
  { id: 'RT-002', name: 'South Village Route', busNumber: 'PB-10-BD-5678', stops: ['Stop X', 'Stop Y'] },
  { id: 'RT-003', name: 'Central Suburb Route', busNumber: 'PB-10-EE-9012', stops: ['Stop P', 'Stop Q', 'Stop R', 'Stop S'] },
];

export default function RoutesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Bus Routes</h1>
      <p className="text-gray-600 mb-4">View and manage all active bus routes and their assigned stops.</p>

      <div className="flex justify-end mb-4">
        <Link href="/transport/routes/new" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          + Add New Route
        </Link>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Route Name</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Bus Number</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Number of Stops</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockRoutes.map((route) => (
              <tr key={route.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{route.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{route.busNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{route.stops.length}</td>
                <td className="px-6 py-4 text-sm">
                  <Link href={`/transport/routes/${route.id}/edit`} className="text-blue-600 hover:text-blue-800">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}