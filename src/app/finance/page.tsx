'use client';

import { PlusIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const stats = [
    { name: 'Total Revenue', stat: '₹ 4,500,000' },
    { name: 'Invoices Paid', stat: '1,150' },
    { name: 'Pending Invoices', stat: '32' },
    { name: 'Expenses YTD', stat: '₹ 1,200,000' },
];

const recentTransactions = [
    { id: 'TXN-001', student: 'John Doe', amount: '₹ 15,000', status: 'Paid', date: '2024-07-28' },
    { id: 'TXN-002', student: 'Jane Smith', amount: '₹ 12,500', status: 'Paid', date: '2024-07-28' },
    { id: 'TXN-003', student: 'Peter Jones', amount: '₹ 15,000', status: 'Pending', date: '2024-07-27' },
    { id: 'TXN-004', student: 'Maryanne Njeri', amount: '₹ 10,000', status: 'Paid', date: '2024-07-26' },
];

const overdueInvoices = [
    { student: 'David Miller', amount: '₹ 15,000', days: 15 },
    { student: 'Susan Wanjiru', amount: '₹ 12,000', days: 8 },
    { student: 'Michael Brown', amount: '₹ 18,000', days: 3 },
];

export default function FinanceDashboard() {
  const router = useRouter();

  const handleNewInvoiceClick = () => {
    router.push('/finance/invoices/new');
  };

  return (
    <div className="bg-gray-50/50">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 pt-4">
        <div>
          <h1 className="text-3xl font-bold text-brand-blue">Financial Overview</h1>
          <p className="mt-1 text-gray-600">Track and manage your school's finances.</p>
        </div>
        <div>
          <button
            type="button"
            onClick={handleNewInvoiceClick}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            New Invoice
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.name} className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200/60">
            <div className="p-5">
              <p className="text-sm font-medium text-gray-500 truncate">{item.name}</p>
              <p className="mt-1 text-3xl font-semibold text-brand-blue-dark">{item.stat}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Recent Transactions */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-medium text-brand-blue mb-4">Recent Transactions</h2>
          <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200/60">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentTransactions.map((tx) => (
                  <tr key={tx.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{tx.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{tx.student}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{tx.amount}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          tx.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Overdue Invoices */}
        <div className="lg:col-span-1">
          <h2 className="text-lg font-medium text-brand-blue mb-4">Overdue Invoices</h2>
          <div className="bg-white shadow-sm rounded-lg p-5 space-y-4 border border-gray-200/60">
            {overdueInvoices.map((invoice, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <ExclamationTriangleIcon className="h-6 w-6 text-brand-orange" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{invoice.student}</p>
                  <p className="text-sm text-gray-500">{invoice.amount} - {invoice.days} days overdue</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
