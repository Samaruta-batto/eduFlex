'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewUserPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would make an API call here.
    console.log('New user data:', formData);
    alert('User created successfully! (Mock)');
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

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New User</h1>
      <p className="text-gray-600 mb-4">Create a new staff or student account and assign a role.</p>

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
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}