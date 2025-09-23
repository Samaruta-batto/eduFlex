import Link from 'next/link';

export default function UsersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar for User Management */}
      <aside className="w-64 bg-gray-100 p-6 space-y-4">
        <h2 className="text-xl font-bold">User Management</h2>
        <nav className="space-y-2">
          <Link href="/users" className="block text-gray-700 hover:text-blue-600">
            All Users
          </Link>
          <Link href="/users/roles" className="block text-gray-700 hover:text-blue-600">
            Roles & Permissions
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