
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AttendanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Dashboard', href: '/attendance' },
    { name: 'Students', href: '/attendance/students' },
    { name: 'Staff', href: '/attendance/staff' },
  ];

  return (
    <div>
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  ${
                    pathname === link.href
                      ? 'border-brand-blue text-brand-blue'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                `}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {children}
    </div>
  );
}
