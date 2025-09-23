'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Mock function to simulate fetching user data
const fetchUserById = (id: string) => {
  const mockUsers = [
    { id: 'U-101', name: 'Jane Doe', email: 'jane.d@eduflex.edu', role: 'Teacher' },
    { id: 'U-102', name: 'Alia Khan', email: 'alia.k@example.com', role: 'Student' },
    { id: 'U-103', name: 'John Smith', email: 'john.s@eduflex.edu', role: 'Head of HR' },
    { id: 'U-104', name: 'Varun Singh', email: 'varun.s@example.com', role: 'Student' },
    { id: 'U-105', name: 'Emily Clark', email: 'emily.c@eduflex.edu', role: 'Accountant' },
  ];
  return mockUsers.find((user) => user.id === id);
};

export default function EditUserPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = fetchUserById(params.id);
    if (userData) {
      setFormData(userData);
    }
    setIsLoading(false);
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would make an API call here.
    console.log('Updated user data:', formData);
    alert('User updated successfully! (Mock)');
    // Redirect back to the user list
    router.push('/users');
  };
  
  const mockRoles = [
    { id: 'R-001', name: 'Tenant Admin' },
    { id: 'R-002', name: 'Accountant' },
    { id: 'R-003', name: 'Teacher' },
    { id: 'R-004', name: 'Student' },
    { id: 'R-005', name: 'Parent' },
  ];

  if (isLoading) {
    return <div>Loading user data...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit User Profile</h1>
      <p className="text-gray-600 mb-4">Editing profile for: <span className="font-semibold">{formData.name}</span></p>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
        <div className="space-y-6">
          <label className="block">
            <span className="text-gray-700">Full Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email Address</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Assign Role</span>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            >
              <option value="">-- Select a Role --</option>
              {mockRoles.map((role) => (
                <option key={role.id} value={role.name}>{role.name}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
}