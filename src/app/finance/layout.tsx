import Link from 'next/link';

export default function FinanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar for Finance Module */}
      <aside className="w-64 bg-gray-100 p-6 space-y-4">
        <h2 className="text-xl font-bold">Finance</h2>
        <nav className="space-y-2">
          <Link href="/finance" className="block text-gray-700 hover:text-blue-600">
            Dashboard
          </Link>
          <Link href="/finance/invoices" className="block text-gray-700 hover:text-blue-600">
            Invoices
          </Link>
          <Link href="/finance/payments" className="block text-gray-700 hover:text-blue-600">
            Payments
          </Link>
          <Link href="/finance/fee-plans" className="block text-gray-700 hover:text-blue-600">
            Fee Plans
          </Link>
          <Link href="/finance/reports" className="block text-gray-700 hover:text-blue-600">
            Reports
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