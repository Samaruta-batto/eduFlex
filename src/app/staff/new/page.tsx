'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface StaffRole {
  id: number;
  name: string;
}

const mockStaffRoles: StaffRole[] = [
  { id: 101, name: 'Teacher' },
  { id: 102, name: 'Management' },
  { id: 103, name: 'Admin' },
];

export default function AddStaffPage() {
  const [staffName, setStaffName] = useState('');
  const [staffEmail, setStaffEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [loading, setLoading] = useState(false); // Set to false since we're using mock data
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Initialize selectedRole with the first mock role if available
    if (mockStaffRoles.length > 0) {
      setSelectedRole(mockStaffRoles[0].id.toString());
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!staffName || !staffEmail || !selectedRole) {
      alert('Please enter staff name, email, and select a role.');
      return;
    }

    console.log('Mocking staff addition:', { name: staffName, email: staffEmail, roleId: selectedRole });
    alert(`Staff member ${staffName} (Role ID: ${selectedRole}) added successfully (mock)!`);
    setStaffName('');
    setStaffEmail('');
    setSelectedRole(mockStaffRoles.length > 0 ? mockStaffRoles[0].id.toString() : '');
    // Optionally, redirect after mock submission
    // router.push('/payroll/employees');
  };

  if (loading) return <div className="text-center py-10">Loading roles...</div>;
  if (error) return <div className="text-center py-10 text-red-600">Error: {error}</div>;

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Add New Staff Member</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="staffName" className="block text-sm font-medium text-gray-700">Staff Name</label>
          <input
            type="text"
            id="staffName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={staffName}
            onChange={(e) => setStaffName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="staffEmail" className="block text-sm font-medium text-gray-700">Staff Email</label>
          <input
            type="email"
            id="staffEmail"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={staffEmail}
            onChange={(e) => setStaffEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="roleSelect" className="block text-sm font-medium text-gray-700">Select Role</label>
          <select
            id="roleSelect"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            required
          >
            {mockStaffRoles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Staff Member
        </button>
      </form>
    </div>
  );
}
