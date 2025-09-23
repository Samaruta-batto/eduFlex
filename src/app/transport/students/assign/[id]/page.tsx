'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Mock function to simulate fetching student data and available routes
const fetchStudentAndRoutes = (studentId: string) => {
  const mockStudents = [
    { id: 'S-101', name: 'Alia Khan', class: 'Grade 5', currentRoute: 'RT-001' },
    { id: 'S-102', name: 'Varun Singh', class: 'Grade 6', currentRoute: 'RT-002' },
    { id: 'S-103', name: 'Kavita Gupta', class: 'Grade 5', currentRoute: null },
    { id: 'S-104', name: 'Rahul Reddy', class: 'Grade 7', currentRoute: null },
    { id: 'S-105', name: 'Sania Das', class: 'Grade 6', currentRoute: 'RT-001' },
  ];
  const mockRoutes = [
    { id: 'RT-001', name: 'North City Route' },
    { id: 'RT-002', name: 'South Village Route' },
    { id: 'RT-003', name: 'Central Suburb Route' },
  ];
  return {
    student: mockStudents.find((s) => s.id === studentId),
    routes: mockRoutes,
  };
};

export default function AssignRoutePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [student, setStudent] = useState<any>(null);
  const [routes, setRoutes] = useState<any[]>([]);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { student, routes } = fetchStudentAndRoutes(params.id);
    if (student) {
      setStudent(student);
      setRoutes(routes);
      setSelectedRoute(student.currentRoute || '');
    }
    setIsLoading(false);
  }, [params.id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, this is where you'd send an API call to update the student's route
    console.log(`Assigning student ${student?.name} to route ${selectedRoute}`);
    alert(`Student assigned to route successfully! (Mock)`);
    // Redirect back to the students page
    router.push('/transport/students');
  };

  if (isLoading) {
    return <div>Loading student details...</div>;
  }

  if (!student) {
    return <div>Student not found.</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Assign Bus Route</h1>
      <p className="text-gray-600 mb-4">
        Assign a bus route to <span className="font-semibold text-blue-600">{student.name}</span>.
      </p>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <p className="font-medium text-gray-700">Current Class:</p>
          <p className="text-gray-900">{student.class}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="route-select" className="block text-gray-700 font-medium mb-2">
              Select Bus Route
            </label>
            <select
              id="route-select"
              name="route-select"
              value={selectedRoute}
              onChange={(e) => setSelectedRoute(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            >
              <option value="">-- Choose a Route --</option>
              {routes.map((route) => (
                <option key={route.id} value={route.id}>
                  {route.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            {student.currentRoute ? 'Update Assignment' : 'Assign Route'}
          </button>
        </form>
      </div>
    </div>
  );
}