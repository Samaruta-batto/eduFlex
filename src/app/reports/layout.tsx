import Link from 'next/link';

export default function ReportsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar for Reports Module */}
      <aside className="w-64 bg-gray-100 p-6 space-y-4">
        <h2 className="text-xl font-bold">Reports</h2>
        <nav className="space-y-2">
          <Link href="/reports" className="block text-gray-700 hover:text-blue-600">
            Dashboard
          </Link>
          <Link href="/reports/finance" className="block text-gray-700 hover:text-blue-600">
            Finance Reports
          </Link>
          <Link href="/reports/attendance" className="block text-gray-700 hover:text-blue-600">
            Attendance Reports
          </Link>
          <Link href="/reports/payroll" className="block text-gray-700 hover:text-blue-600">
            Payroll Reports
          </Link>
        </nav>
      </aside>
      {/* Main content area */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}