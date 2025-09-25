'use client';

import { useState } from 'react';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

interface Payslip {
  id: string;
  employeeName: string;
  month: string;
  year: number;
  netPay: number;
  status: 'Generated' | 'Sent' | 'Paid';
}

const mockPayslips: Payslip[] = [
  { id: 'PS-001', employeeName: 'Jane Smith', month: 'July', year: 2024, netPay: 75000, status: 'Paid' },
  { id: 'PS-002', employeeName: 'John Doe', month: 'July', year: 2024, netPay: 80000, status: 'Sent' },
  { id: 'PS-003', employeeName: 'Emily White', month: 'July', year: 2024, netPay: 60000, status: 'Generated' },
  { id: 'PS-004', employeeName: 'David Green', month: 'June', year: 2024, netPay: 72000, status: 'Paid' },
];

export default function PayslipsPage() {
  const [payslips, setPayslips] = useState(mockPayslips);

  const handleDownload = (payslipId: string) => {
    alert(`Downloading payslip ${payslipId}`);
    // In a real application, this would trigger an API call to download the actual payslip file
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Payslips</h1>
      <p className="text-gray-600 mb-4">Manage and download employee payslips.</p>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <table className="min-w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Payslip ID</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Employee Name</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Month/Year</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Net Pay (₹)</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Status</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payslips.map((payslip) => (
              <tr key={payslip.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{payslip.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{payslip.employeeName}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{payslip.month} {payslip.year}</td>
                <td className="px-6 py-4 text-sm text-gray-900">₹ {payslip.netPay.toLocaleString('en-IN')}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    payslip.status === 'Paid' ? 'bg-green-100 text-green-800' :
                    payslip.status === 'Sent' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {payslip.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => handleDownload(payslip.id)}
                    className="text-indigo-600 hover:text-indigo-900 flex items-center"
                  >
                    <DocumentArrowDownIcon className="h-4 w-4 mr-1" /> Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
