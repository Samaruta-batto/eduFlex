'use client';

import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          <Breadcrumbs />
          {children}
        </main>
      </div>
    </div>
  );
}
