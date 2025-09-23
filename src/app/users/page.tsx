import Link from 'next/link';

// Mock data for a combined list of staff and students
const mockUsers = [
  { id: 'U-101', name: 'Jane Doe', email: 'jane.d@eduflex.edu', role: 'Teacher', type: 'Staff' },
  { id: 'U-102', name: 'Alia Khan', email: 'alia.k@example.com', role: 'Student', type: 'Student' },
  { id: 'U-103', name: 'John Smith', email: 'john.s@eduflex.edu', role: 'Head of HR', type: 'Staff' },
  { id: 'U-104', name: 'Varun Singh', email: 'varun.s@example.com', role: 'Student', type: 'Student' },
  { id: 'U-105', name: 'Emily Clark', email: 'emily.c@eduflex.edu', role: 'Accountant', type: 'Staff' },
];

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Users</h1>
      <p className="text-gray-600 mb-4">View and manage all user accounts within the system.</p>

      {/* Button to add a new user */}
      <div className="flex justify-end mb-4">
        <Link href="/users/new" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          + Add New User
        </Link>
      </div>
      
      {/* Table to display user data */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Name</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Email</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Role</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Type</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.role}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.type === 'Staff' ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {user.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <Link href={`/users/${user.id}/edit`} className="text-blue-600 hover:text-blue-800">
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