'use client';

import { ChartBarIcon, DocumentChartBarIcon, AcademicCapIcon, BanknotesIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';

const financeReports = [
  {
    id: 'FR-001',
    title: 'Monthly Revenue Report',
    description: 'Overview of fee collections and other income for the current month.',
    icon: BanknotesIcon,
    link: '#',
  },
  {
    id: 'FR-002',
    title: 'Outstanding Balances',
    description: 'List of students with pending fee payments.',
    icon: DocumentChartBarIcon,
    link: '#',
  },
  {
    id: 'FR-003',
    title: 'Expense Analysis',
    description: 'Detailed breakdown of operational expenses.',
    icon: ChartBarIcon,
    link: '#',
  },
  {
    id: 'FR-004',
    title: 'Fee Plan Enrollment Summary',
    description: 'Summary of student enrollments in various fee plans.',
    icon: AcademicCapIcon,
    link: '#',
  },
];

export default function FinanceReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Financial Reports</h1>
      <p className="text-lg text-gray-600 mb-10">Access and generate various financial reports for in-depth analysis.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {financeReports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 flex flex-col justify-between
                       transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <report.icon className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{report.title}</h2>
            </div>
            <p className="text-gray-600 mb-6 flex-grow">{report.description}</p>
            <a
              href={report.link}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                         self-end"
            >
              View Report
              <ArrowRightCircleIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
