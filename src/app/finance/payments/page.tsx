'use client';

import { useState } from 'react';
import { CreditCardIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface Payment {
  id: string;
  studentName: string;
  amount: number;
  date: string;
  method: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

const mockPayments: Payment[] = [
  { id: 'PAY-001', studentName: 'Rahul Sharma', amount: 25000, date: '2024-07-29', method: 'Online Transfer', status: 'Completed' },
  { id: 'PAY-002', studentName: 'Priya Singh', amount: 18000, date: '2024-07-28', method: 'Cash', status: 'Completed' },
  { id: 'PAY-003', studentName: 'Amit Kumar', amount: 30000, date: '2024-07-27', method: 'Credit Card', status: 'Pending' },
  { id: 'PAY-004', studentName: 'Sneha Patel', amount: 22000, date: '2024-07-26', method: 'UPI', status: 'Completed' },
  { id: 'PAY-005', studentName: 'Vikram Reddy', amount: 15000, date: '2024-07-25', method: 'Debit Card', status: 'Failed' },
];

export default function PaymentsPage() {
  const [payments, setPayments] = useState(mockPayments);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Payments</h1>
      <p className="text-gray-600 mb-4">Manage and track all incoming and outgoing payments.</p>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <table className="min-w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Payment ID</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Student Name</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Amount (₹)</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Date</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Method</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{payment.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{payment.studentName}</td>
                <td className="px-6 py-4 text-sm text-gray-900">₹ {payment.amount.toLocaleString('en-IN')}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{payment.date}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{payment.method}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    payment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {payment.status}
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
