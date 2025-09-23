// For a real app, this data would come from an API call
const mockInvoices = [
  { id: 'INV-001', studentName: 'Rajesh Sharma', amount: 5000, status: 'Paid', dueDate: '2025-09-20' },
  { id: 'INV-002', studentName: 'Priya Singh', amount: 7500, status: 'Pending', dueDate: '2025-09-25' },
  { id: 'INV-003', studentName: 'Amit Kumar', amount: 5000, status: 'Overdue', dueDate: '2025-09-15' },
];

export default function InvoicesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Invoices</h1>
      <p className="text-gray-600 mb-4">Manage and view all student invoices.</p>
      
      {/* Table to display invoices */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Invoice ID</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Student Name</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Amount</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Status</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {mockInvoices.map((invoice) => (
              <tr key={invoice.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{invoice.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{invoice.studentName}</td>
                <td className="px-6 py-4 text-sm text-gray-900">₹{invoice.amount}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      invoice.status === 'Paid'
                        ? 'bg-green-100 text-green-800'
                        : invoice.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{invoice.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}