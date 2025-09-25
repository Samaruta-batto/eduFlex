'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewInvoicePage() {
  const [studentName, setStudentName] = useState('');
  const [amount, setAmount] = useState<number | string>('');
  const [dueDate, setDueDate] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend API
    console.log({
      studentName,
      amount,
      dueDate,
    });
    alert(`New Invoice for ${studentName} with amount ₹ ${amount} due on ${dueDate} created!`);
    // Redirect back to the finance dashboard or invoice list
    router.push('/finance'); 
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Create New Invoice</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">Student Name</label>
          <input
            type="text"
            id="studentName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-emerald focus:border-brand-emerald sm:text-sm"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (₹)</label>
          <input
            type="number"
            id="amount"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-emerald focus:border-brand-emerald sm:text-sm"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="0"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
          <input
            type="date"
            id="dueDate"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-emerald focus:border-brand-emerald sm:text-sm"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-emerald hover:bg-brand-emerald-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-emerald"
        >
          Create Invoice
        </button>
      </form>
    </div>
  );
}
