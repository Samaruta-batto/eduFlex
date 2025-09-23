import Link from 'next/link';

// Mock API data for employee profiles
const mockEmployees = [
  { id: 'EMP-001', employeeCode: 'SC-101', name: 'Jane Doe', role: 'Teacher', email: 'jane.d@eduflex.edu', bankDetails: '***-****-9876' },
  { id: 'EMP-002', employeeCode: 'SC-102', name: 'John Smith', role: 'Head of HR', email: 'john.s@eduflex.edu', bankDetails: '***-****-5432' },
  { id: 'EMP-003', employeeCode: 'SC-103', name: 'Emily Clark', role: 'Accountant', email: 'emily.c@eduflex.edu', bankDetails: '***-****-1234' },
];

export default function EmployeesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Employee Profiles</h1>
      <p className="text-gray-600 mb-4">Manage staff details, salary structures, and bank information.</p>

      {/* Button to add a new employee */}
      <div className="flex justify-end mb-4">
        <Link href="/payroll/employees/new" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          + Add New Employee
        </Link>
      </div>
      
      {/* Table to display employee data */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Employee Code</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Name</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Role</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Email</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Bank Details</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockEmployees.map((employee) => (
              <tr key={employee.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{employee.employeeCode}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{employee.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{employee.role}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{employee.email}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{employee.bankDetails}</td>
                <td className="px-6 py-4 text-sm">
                  <Link href={`/payroll/employees/${employee.id}/edit`} className="text-blue-600 hover:text-blue-800">
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