import Link from 'next/link';

// Mock data for students and routes to simulate API data
const mockStudents = [
  { id: 'S-101', name: 'Alia Khan', class: 'Grade 5', currentRoute: 'North City Route' },
  { id: 'S-102', name: 'Varun Singh', class: 'Grade 6', currentRoute: 'South Village Route' },
  { id: 'S-103', name: 'Kavita Gupta', class: 'Grade 5', currentRoute: null },
  { id: 'S-104', name: 'Rahul Reddy', class: 'Grade 7', currentRoute: null },
  { id: 'S-105', name: 'Sania Das', class: 'Grade 6', currentRoute: 'North City Route' },
];

export default function StudentAssignmentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Student Transport Assignments</h1>
      <p className="text-gray-600 mb-4">Assign students to a bus route and view their current transport status.</p>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Student Name</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Class</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Current Route</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockStudents.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{student.class}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {student.currentRoute ? student.currentRoute : <span className="text-red-500">Not Assigned</span>}
                </td>
                <td className="px-6 py-4 text-sm">
                  <Link href={`/transport/students/assign/${student.id}`} className="text-blue-600 hover:text-blue-800">
                    {student.currentRoute ? 'Change Route' : 'Assign Route'}
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