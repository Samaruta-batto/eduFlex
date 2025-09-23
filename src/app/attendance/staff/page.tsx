'use client';

import { useState } from 'react';

// Mock data to simulate staff attendance from a biometric system and manual entry
const mockStaff = [
  { id: 'EMP-001', name: 'Jane Doe', role: 'Teacher', attendanceStatus: 'present', source: 'biometric' },
  { id: 'EMP-002', name: 'John Smith', role: 'Head of HR', attendanceStatus: 'absent', source: 'manual' },
  { id: 'EMP-003', name: 'Emily Clark', role: 'Accountant', attendanceStatus: 'present', source: 'biometric' },
  { id: 'EMP-004', name: 'David Lee', role: 'Security Guard', attendanceStatus: 'late', source: 'biometric' },
  { id: 'EMP-005', name: 'Sarah Jones', role: 'Librarian', attendanceStatus: 'not_marked', source: null },
];

export default function StaffAttendancePage() {
  const [staffData, setStaffData] = useState(mockStaff);

  const handleManualMarking = (staffId: string, status: 'present' | 'absent' | 'late') => {
    setStaffData((prevData) =>
      prevData.map((staff) =>
        staff.id === staffId
          ? { ...staff, attendanceStatus: status, source: 'manual' }
          : staff
      )
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Staff Attendance</h1>
      <p className="text-gray-600 mb-4">
        View and manage staff attendance records, including biometric and manual entries.
      </p>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <table className="min-w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Staff Name</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Role</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Status</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Source</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Manual Marking</th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff) => (
              <tr key={staff.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{staff.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{staff.role}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      staff.attendanceStatus === 'present'
                        ? 'bg-green-100 text-green-800'
                        : staff.attendanceStatus === 'absent'
                        ? 'bg-red-100 text-red-800'
                        : staff.attendanceStatus === 'late'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {staff.attendanceStatus === 'not_marked' ? 'Not Marked' : staff.attendanceStatus.charAt(0).toUpperCase() + staff.attendanceStatus.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {staff.source === 'biometric' ? 'Biometric Device' : staff.source === 'manual' ? 'Manual' : 'N/A'}
                </td>
                <td className="px-6 py-4 text-sm">
                  {staff.attendanceStatus !== 'present' && (
                    <div className="space-x-2">
                      <button
                        onClick={() => handleManualMarking(staff.id, 'present')}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Mark Present
                      </button>
                      <button
                        onClick={() => handleManualMarking(staff.id, 'absent')}
                        className="text-red-600 hover:text-red-800"
                      >
                        Mark Absent
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}