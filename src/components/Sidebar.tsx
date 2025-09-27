'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  XMarkIcon,
  CreditCardIcon,
  TruckIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    {
      name: 'Finance',
      href: '/finance',
      icon: CreditCardIcon,
      children: [
        { name: 'Dashboard', href: '/finance' },
        { name: 'Invoices', href: '/finance/invoices' },
        { name: 'Payments', href: '/finance/payments' },
        { name: 'Fee Plans', href: '/finance/fee-plans' },
        { name: 'Reports', href: '/finance/reports' },
      ],
    },
    {
      name: 'Payroll',
      href: '/payroll',
      icon: UsersIcon,
      children: [
          { name: 'Dashboard', href: '/payroll' },
          { name: 'Employees', href: '/payroll/employees' },
          { name: 'Payslips', href: '/payroll/payslips' },
      ],
    },
    {
      name: 'Attendance',
      href: '/attendance',
      icon: ChartBarIcon,
      children: [
          { name: 'Dashboard', href: '/attendance' },
          { name: 'Students', href: '/attendance/students' },
          { name: 'Staff', href: '/attendance/staff' },
      ],
    },
    {
      name: 'Transport',
      href: '/transport',
      icon: TruckIcon,
      children: [
          { name: 'Dashboard', href: '/transport' },
          { name: 'Routes', href: '/transport/routes' },
          { name: 'Students', href: '/transport/students' },
          { name: 'Reports', href: '/transport/reports' },
      ],
    },
  ];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function NavItem({ item }: { item: any }) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(pathname.startsWith(item.href));

    const isParentActive = !item.children && pathname.startsWith(item.href);
  
    if (item.children) {
      return (
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center justify-between w-full px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-200"
          >
            <div className="flex items-center">
              {item.icon && <item.icon className="mr-3 h-6 w-6 text-gray-500" aria-hidden="true" />}
              {item.name}
            </div>
            <ChevronDownIcon
              className={classNames(
                isOpen ? 'transform rotate-180' : '',
                'ml-2 h-5 w-5 text-gray-500 transition-transform duration-150 ease-in-out'
              )}
            />
          </button>
          {isOpen && (
            <div className="ml-9 mt-1 space-y-1 bg-gray-100 p-2 rounded-md">
              {item.children.map((child: any) => {
                const isChildActive = pathname === child.href;
                return(
                <Link
                  key={child.name}
                  href={child.href}
                  className={classNames(
                    isChildActive ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-200',
                    'block px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  {child.name}
                </Link>
              )})}
            </div>
          )}
        </div>
      );
    }
  
    return (
      <Link
        href={item.href}
        className={classNames(
            isParentActive ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-200',
          'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
        )}
      >
        {item.icon && <item.icon
          className={classNames(
            pathname === item.href ? 'text-gray-600' : 'text-gray-500 group-hover:text-gray-600',
            'mr-3 flex-shrink-0 h-6 w-6'
          )}
          aria-hidden="true"
        />}
        {item.name}
      </Link>
    );
  }

export default function Sidebar({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-white">
              <Link href="/">
                <h1 className="text-2xl font-semibold text-gray-900">EduFlex</h1>
              </Link>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto bg-sky-50">
                <div className='bg-orange-500 p-4 flex items-center justify-between cursor-pointer'>
                    <div className='flex items-center'>
                        <HomeIcon className="h-8 w-8 text-white mr-3" />
                        <span className="text-white font-semibold text-lg">Dashboard</span>
                    </div>
                    <ChevronDownIcon className="h-6 w-6 text-white" />
                </div>
              <nav className="flex-1 px-2 py-4 space-y-1">
                {navigation.map((item) => <NavItem key={item.name} item={item} />)}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-sky-50">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                    <Link href="/">
                        <h1 className="text-2xl font-semibold text-gray-900">EduFlex</h1>
                    </Link>
                </div>
                <div className='bg-orange-500 p-4 flex items-center justify-between cursor-pointer mt-5'>
                    <div className='flex items-center'>
                        <HomeIcon className="h-8 w-8 text-white mr-3" />
                        <span className="text-white font-semibold text-lg">Dashboard</span>
                    </div>
                    <ChevronDownIcon className="h-6 w-6 text-white" />
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => <NavItem key={item.name} item={item} />)}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14"></div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
