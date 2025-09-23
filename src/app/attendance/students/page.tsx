'use client';

import { useState } from 'react';

// Mock data to simulate fetching students for a specific class
const mockStudents = [
  { id: 'S-101', name: 'Alia Khan', class: 'Grade 5A' },
  { id: 'S-102', name: 'Varun Singh', class: 'Grade 5A' },
  { id: 'S-103', name: 'Kavita Gupta', class: 'Grade 5A' },
  { id: 'S-104', name: 'Rahul Reddy', class: 'Grade 5A' },
  { id: 'S-105', name: 'Sania Das', class: 'Grade 5A' },
];

export default function StudentAttendancePage() {
  // Use state to track attendance status for each student
  const [attendance, setAttendance] = useState(
    mockStudents.reduce((acc, student) => {
      acc[student.id] = 'present'; // Default to present
      return acc;
    }, {} as Record<string, 'present' | 'absent' | 'late' | 'excused'>)
  );

  const handleAttendanceChange = (studentId: string, status: 'present' | 'absent' | 'late' | 'excused') => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  const handleSubmitAttendance = () => {
    console.log('Submitting attendance:', attendance);
    alert('Attendance marked successfully!');
    // In a real app, you would send this data to your backend API
    // for bulk attendance marking.
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Student Attendance</h1>
      <p className="text-gray-600 mb-4">Mark attendance for <span className="font-semibold">Grade 5A</span> for today.</p>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <table className="min-w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Student Name</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockStudents.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="flex items-center space-x-2">
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name={`status-${student.id}`}
                        value="present"
                        checked={attendance[student.id] === 'present'}
                        onChange={() => handleAttendanceChange(student.id, 'present')}
                        className="text-green-600 focus:ring-green-500"
                      />
                      <span>Present</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name={`status-${student.id}`}
                        value="absent"
                        checked={attendance[student.id] === 'absent'}
                        onChange={() => handleAttendanceChange(student.id, 'absent')}
                        className="text-red-600 focus:ring-red-500"
                      />
                      <span>Absent</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name={`status-${student.id}`}
                        value="late"
                        checked={attendance[student.id] === 'late'}
                        onChange={() => handleAttendanceChange(student.id, 'late')}
                        className="text-yellow-600 focus:ring-yellow-500"
                      />
                      <span>Late</span>
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmitAttendance}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Attendance
          </button>
        </div>
      </div>
    </div>
  );
}