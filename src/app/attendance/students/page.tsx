
'use client';

import { useState } from 'react';

// Mock data to simulate fetching students for a specific class
const mockStudents: Record<string, { id: string; name: string }[]> = {
  'IA': [
    { id: 'S-101', name: 'Alia Khan' },
    { id: 'S-102', name: 'Varun Singh' },
  ],
  'IB': [
    { id: 'S-201', name: 'Kavita Gupta' },
    { id: 'S-202', name: 'Rahul Reddy' },
  ],
  'IIA': [
    { id: 'S-301', name: 'Sania Das' },
    { id: 'S-302', name: 'Amit Kumar' },
  ],
  'XIIA': [
    { id: 'S-1201', name: 'Priya Sharma' },
    { id: 'S-1202', name: 'Rohan Mehta' },
  ],
  'XIIB': [
    { id: 'S-1211', name: 'Anjali Verma' },
    { id: 'S-1212', name: 'Vikram Singh' },
  ],
};

const classes = ['IA', 'IB', 'IIA', 'IIB', 'IIIA', 'IIIB', 'IVA', 'IVB', 'VA', 'VB', 'VIA', 'VIB', 'VIIA', 'VIIB', 'VIIIA', 'VIIIB', 'IXA', 'IXB', 'XA', 'XB', 'XIA', 'XIB', 'XIIA', 'XIIB'];

export default function StudentAttendancePage() {
  const [selectedClass, setSelectedClass] = useState('IA');
  
  const getInitialAttendance = (className: string) => {
    const studentsInClass = mockStudents[className] || [];
    return studentsInClass.reduce((acc, student) => {
      acc[student.id] = 'present'; // Default to present
      return acc;
    }, {} as Record<string, 'present' | 'absent' | 'late' | 'excused'>);
  };

  const [attendance, setAttendance] = useState(getInitialAttendance(selectedClass));

  const handleClassChange = (className: string) => {
    setSelectedClass(className);
    setAttendance(getInitialAttendance(className));
  };

  const handleAttendanceChange = (studentId: string, status: 'present' | 'absent' | 'late' | 'excused') => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  const handleSubmitAttendance = () => {
    console.log(`Submitting attendance for ${selectedClass}:`, attendance);
    alert(`Attendance for ${selectedClass} marked successfully!`);
    // In a real app, you would send this data to your backend API
    // for bulk attendance marking.
  };

  const students = mockStudents[selectedClass] || [];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Student Attendance</h1>
      <p className="text-gray-600 mb-4">Mark attendance for <span className="font-semibold">{selectedClass}</span> for today.</p>

      <div className="mb-4">
        <label htmlFor="class-selector" className="block text-sm font-medium text-gray-700">
          Select Class
        </label>
        <select
          id="class-selector"
          name="class-selector"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={selectedClass}
          onChange={(e) => handleClassChange(e.target.value)}
        >
          {classes.map((className) => (
            <option key={className} value={className}>
              {className}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        {students.length > 0 ? (
          <table className="min-w-full text-left">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-sm font-medium text-gray-700">Student Name</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
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
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No students found for this class.</p>
          </div>
        )}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmitAttendance}
            disabled={students.length === 0}
            className={`px-6 py-3 text-white font-semibold rounded-md ${
              students.length > 0
                ? 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Submit Attendance
          </button>
        </div>
      </div>
    </div>
  );
}
