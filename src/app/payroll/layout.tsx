import Link from 'next/link';

export default function PayrollLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar for Payroll Module */}
      <aside className="w-64 bg-gray-100 p-6 space-y-4">
        <h2 className="text-xl font-bold">Payroll</h2>
        <nav className="space-y-2">
          <Link href="/payroll" className="block text-gray-700 hover:text-blue-600">
            Dashboard
          </Link>
          <Link href="/payroll/payslips" className="block text-gray-700 hover:text-blue-600">
            Payslips
          </Link>
          <Link href="/payroll/employees" className="block text-gray-700 hover:text-blue-600">
            Employees
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