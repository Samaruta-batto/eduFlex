'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewEmployeePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    employeeCode: '',
    salary: '',
    bankAccount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would make an API call here.
    console.log('Form Submitted:', formData);
    alert('Employee added successfully! (Mock)');
    // Redirect back to the employees list after submission
    router.push('/payroll/employees');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Employee</h1>
      <p className="text-gray-600 mb-4">Fill in the details to create a new staff profile.</p>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
        <div className="space-y-6">
          {/* Employee Details Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Personal & Professional Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <span className="text-gray-700">Role</span>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Employee Code</span>
                <input
                  type="text"
                  name="employeeCode"
                  value={formData.employeeCode}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </label>
            </div>
          </div>

          {/* Financial Details Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Financial Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-gray-700">Base Salary (₹)</span>
                <input
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Bank Account Number (Encrypted)</span>
                <input
                  type="text"
                  name="bankAccount"
                  value={formData.bankAccount}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </label>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Create Employee Profile
          </button>
        </div>
      </form>
    </div>
  );
}