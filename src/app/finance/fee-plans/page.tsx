'use client';

import { useState } from 'react';
import { PlusIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';

interface FeePlan {
  id: number;
  name: string;
  amount: number;
  academicYear: string;
  status: 'Active' | 'Inactive';
}

let mockFeePlans: FeePlan[] = [
  { id: 1, name: 'Nursery Annual Fee', amount: 50000, academicYear: '2024-2025', status: 'Active' },
  { id: 2, name: 'Primary Quarterly Fee', amount: 15000, academicYear: '2024-2025', status: 'Active' },
  { id: 3, name: 'Secondary Annual Fee', amount: 75000, academicYear: '2023-2024', status: 'Inactive' },
];

export default function FeePlansPage() {
  const [feePlans, setFeePlans] = useState<FeePlan[]>(mockFeePlans);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newAmount, setNewAmount] = useState<number | ''>('');
  const [newAcademicYear, setNewAcademicYear] = useState('2024-2025');
  const [newStatus, setNewStatus] = useState<'Active' | 'Inactive'>('Active');

  const handleAddFeePlan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newAmount || newAmount <= 0) {
      alert('Please enter a valid name and amount.');
      return;
    }

    const newPlan: FeePlan = {
      id: feePlans.length > 0 ? Math.max(...feePlans.map(p => p.id)) + 1 : 1,
      name: newName,
      amount: newAmount as number,
      academicYear: newAcademicYear,
      status: newStatus,
    };
    setFeePlans(prev => [...prev, newPlan]);
    setNewName('');
    setNewAmount('');
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Fee Plans</h1>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          {showAddForm ? 'Cancel' : 'Add New Fee Plan'}
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Add New Fee Plan</h2>
          <form onSubmit={handleAddFeePlan} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="planName" className="block text-sm font-medium text-gray-700">Plan Name</label>
              <input
                type="text"
                id="planName"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (₹)</label>
              <input
                type="number"
                id="amount"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={newAmount}
                onChange={(e) => setNewAmount(parseFloat(e.target.value) || '')}
                required
                min="1"
              />
            </div>
            <div>
              <label htmlFor="academicYear" className="block text-sm font-medium text-gray-700">Academic Year</label>
              <input
                type="text"
                id="academicYear"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={newAcademicYear}
                onChange={(e) => setNewAcademicYear(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
              <select
                id="status"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value as 'Active' | 'Inactive')}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                className="px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add Plan
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <table className="min-w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Plan Name</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Amount (₹)</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Academic Year</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {feePlans.map((plan) => (
              <tr key={plan.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{plan.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">₹ {plan.amount.toLocaleString('en-IN')}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{plan.academicYear}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    plan.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {plan.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
