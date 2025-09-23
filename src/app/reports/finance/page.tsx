import Link from 'next/link';

// List of available pre-built reports
const financeReports = [
  { id: '1', name: 'Annual Fee Collection Summary', description: 'Detailed summary of all fees collected in the academic year.' },
  { id: '2', name: 'Outstanding Fees Report', description: 'Lists all students with pending or overdue fee payments.' },
  { id: '3', name: 'Monthly Fee Remittance Report', description: 'Report showing all payments received on a monthly basis.' },
  { id: '4', name: 'Concession & Scholarship Report', description: 'Summary of all financial concessions and scholarships granted.' },
];

export default function FinanceReportsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Finance Reports</h1>
      <p className="text-gray-600 mb-4">Access and download pre-built financial reports.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {financeReports.map((report) => (
          <div key={report.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">{report.name}</h3>
            <p className="text-gray-500 mt-2 text-sm">{report.description}</p>
            <div className="mt-4">
              <Link href={`#report-${report.id}`} className="text-blue-600 hover:underline">
                View & Export
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}