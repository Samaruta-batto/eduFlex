import Link from 'next/link';

export default function AttendanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar for Attendance Module */}
      <aside className="w-64 bg-gray-100 p-6 space-y-4">
        <h2 className="text-xl font-bold">Attendance</h2>
        <nav className="space-y-2">
          <Link href="/attendance" className="block text-gray-700 hover:text-blue-600">
            Dashboard
          </Link>
          <Link href="/attendance/students" className="block text-gray-700 hover:text-blue-600">
            Student Attendance
          </Link>
          <Link href="/attendance/staff" className="block text-gray-700 hover:text-blue-600">
            Staff Attendance
          </Link>
          <Link href="/attendance/reports" className="block text-gray-700 hover:text-blue-600">
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