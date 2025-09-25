'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Class {
  id: number;
  name: string;
}

const mockClasses: Class[] = [
  { id: 1, name: 'Class IA' },
  { id: 2, name: 'Class IB' },
  { id: 3, name: 'Class IIA' },
  { id: 4, name: 'Class IIB' },
];

export default function AddStudentPage() {
  const [studentName, setStudentName] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [loading, setLoading] = useState(false); // Set to false since we're using mock data
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Initialize selectedClass with the first mock class if available
    if (mockClasses.length > 0) {
      setSelectedClass(mockClasses[0].id.toString());
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !selectedClass) {
      alert('Please enter student name and select a class.');
      return;
    }

    console.log('Mocking student addition:', { name: studentName, classId: selectedClass });
    alert(`Student ${studentName} added to Class ID ${selectedClass} successfully (mock)!`);
    setStudentName('');
    // Optionally, redirect after mock submission
    // router.push('/attendance/students');
  };

  if (loading) return <div className="text-center py-10">Loading classes...</div>;
  if (error) return <div className="text-center py-10 text-red-600">Error: {error}</div>;

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Add New Student</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">Student Name</label>
          <input
            type="text"
            id="studentName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="classSelect" className="block text-sm font-medium text-gray-700">Select Class</label>
          <select
            id="classSelect"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            required
          >
            {mockClasses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}
