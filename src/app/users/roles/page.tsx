import Link from 'next/link';

// Mock data for roles and their descriptions
const mockRoles = [
  { id: 'R-001', name: 'Tenant Admin', description: 'Full access to a single school branch.', permissions: 35 },
  { id: 'R-002', name: 'Accountant', description: 'Manages fees, payments, and financial reports.', permissions: 12 },
  { id: 'R-003', name: 'Teacher', description: 'Marks attendance and manages student records for their class.', permissions: 8 },
  { id: 'R-004', name: 'Transport Manager', description: 'Manages bus routes and student transport assignments.', permissions: 5 },
  { id: 'R-005', name: 'Parent', description: 'Views student details, attendance, and payslip.', permissions: 4 },
];

export default function RolesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Roles & Permissions</h1>
      <p className="text-gray-600 mb-4">Define and manage granular permissions for each user role.</p>

      {/* Button to create a new role */}
      <div className="flex justify-end mb-4">
        <Link href="/users/roles/new" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          + Create New Role
        </Link>
      </div>
      
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Role Name</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Description</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Number of Permissions</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockRoles.map((role) => (
              <tr key={role.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{role.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{role.description}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{role.permissions}</td>
                <td className="px-6 py-4 text-sm">
                  <Link href={`/users/roles/${role.id}/edit`} className="text-blue-600 hover:text-blue-800">
                    Edit Permissions
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