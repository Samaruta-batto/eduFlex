import Link from 'next/link';

export default function TransportLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar for Transport Module */}
      <aside className="w-64 bg-gray-100 p-6 space-y-4">
        <h2 className="text-xl font-bold">Transport</h2>
        <nav className="space-y-2">
          <Link href="/transport" className="block text-gray-700 hover:text-blue-600">
            Dashboard
          </Link>
          <Link href="/transport/routes" className="block text-gray-700 hover:text-blue-600">
            Routes
          </Link>
          <Link href="/transport/students" className="block text-gray-700 hover:text-blue-600">
            Student Assignments
          </Link>
          <Link href="/transport/reports" className="block text-gray-700 hover:text-blue-600">
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