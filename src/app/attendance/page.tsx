
'use client';

import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

// Mock data - in a real app, you'd fetch this from your API
const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

const mockStudentAttendance = {
  total: 1200,
  present: 1140,
  absent: 60,
};

const mockStaffAttendance = {
  total: 80,
  present: 78,
  absent: 2,
};

const mockRecentAbsentees = [
    { name: 'John Doe', class: 'Grade 5A' },
    { name: 'Jane Smith', class: 'Grade 9B' },
    { name: 'Sam Wilson', class: 'Grade 2A' },
];

export default function AttendanceDashboard() {
  const [studentStats, setStudentStats] = useState({ present: '0%', absent: '0%' });
  const [staffStats, setStaffStats] = useState({ present: '0%', absent: '0%' });

  useEffect(() => {
    // Calculate percentages
    const studentPresentPercent = ((mockStudentAttendance.present / mockStudentAttendance.total) * 100).toFixed(1);
    const studentAbsentPercent = ((mockStudentAttendance.absent / mockStudentAttendance.total) * 100).toFixed(1);
    setStudentStats({ present: `${studentPresentPercent}%`, absent: `${studentAbsentPercent}%` });

    const staffPresentPercent = ((mockStaffAttendance.present / mockStaffAttendance.total) * 100).toFixed(1);
    const staffAbsentPercent = ((mockStaffAttendance.absent / mockStaffAttendance.total) * 100).toFixed(1);
    setStaffStats({ present: `${staffPresentPercent}%`, absent: `${staffAbsentPercent}%` });
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Attendance Dashboard</h1>
          <p className="mt-1 text-gray-600">Overview of student and staff attendance for <span className="font-semibold">{today}</span>.</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Student Attendance */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Student Attendance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex items-center">
              <CheckCircleIcon className="h-8 w-8 text-green-500" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Present</p>
                <p className="text-2xl font-semibold text-gray-900">{studentStats.present}</p>
              </div>
            </div>
            <div className="flex items-center">
              <XCircleIcon className="h-8 w-8 text-red-500" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Absent</p>
                <p className="text-2xl font-semibold text-gray-900">{studentStats.absent}</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Recent Absentees</h3>
            <ul className="mt-2 divide-y divide-gray-200">
              {mockRecentAbsentees.map(student => (
                <li key={student.name} className="py-2 flex justify-between">
                  <span className="text-sm text-gray-600">{student.name}</span>
                  <span className="text-sm text-gray-500">{student.class}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Staff Attendance */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Staff Attendance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex items-center">
              <CheckCircleIcon className="h-8 w-8 text-green-500" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Present</p>
                <p className="text-2xl font-semibold text-gray-900">{staffStats.present}</p>
              </div>
            </div>
            <div className="flex items-center">
              <XCircleIcon className="h-8 w-8 text-red-500" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Absent</p>
                <p className="text-2xl font-semibold text-gray-900">{staffStats.absent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
