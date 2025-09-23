'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Mock function to simulate fetching employee data from an API
const fetchEmployeeById = (id: string) => {
  // In a real app, this would be an API call:
  // const response = await fetch(`/api/v1/employees/${id}`);
  // const employee = await response.json();
  // return employee;
  const mockEmployees = [
    { id: 'EMP-001', employeeCode: 'SC-101', name: 'Jane Doe', role: 'Teacher', email: 'jane.d@eduflex.edu', salary: '60000', bankAccount: '***-****-9876' },
    { id: 'EMP-002', employeeCode: 'SC-102', name: 'John Smith', role: 'Head of HR', email: 'john.s@eduflex.edu', salary: '75000', bankAccount: '***-****-5432' },
    { id: 'EMP-003', employeeCode: 'SC-103', name: 'Emily Clark', role: 'Accountant', email: 'emily.c@eduflex.edu', salary: '45000', bankAccount: '***-****-1234' },
  ];
  return mockEmployees.find((emp) => emp.id === id);
};

export default function EditEmployeePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    employeeCode: '',
    salary: '',
    bankAccount: '',
  });

  const [isLoading, setIsLoading] = useState(true);

  // Fetch employee data when the component loads
  useEffect(() => {
    const employeeData = fetchEmployeeById(params.id);
    if (employeeData) {
      setFormData(employeeData);
    }
    setIsLoading(false);
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would make an API call to update the employee.
    console.log('Updated Employee Data:', formData);
    alert('Employee updated successfully! (Mock)');
    // Redirect back to the employees list after submission
    router.push('/payroll/employees');
  };

  if (isLoading) {
    return <div>Loading employee data...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Employee Profile</h1>
      <p className="text-gray-600 mb-4">Editing profile for: <span className="font-semibold">{formData.name}</span></p>

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
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}