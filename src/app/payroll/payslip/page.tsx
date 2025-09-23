// Mock API data to be replaced with a real API call later
const mockPayslips = [
  { id: 'PS-001', staffName: 'Jane Doe', month: 'September 2025', grossSalary: 60000, netSalary: 55000, status: 'Generated' },
  { id: 'PS-002', staffName: 'John Smith', month: 'September 2025', grossSalary: 75000, netSalary: 68000, status: 'Generated' },
  { id: 'PS-003', staffName: 'Emily Clark', month: 'September 2025', grossSalary: 45000, netSalary: 42000, status: 'Generated' },
];

export default function PayslipsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Staff Payslips</h1>
      <p className="text-gray-600 mb-4">View and manage monthly payslips for staff members.</p>
      
      {/* Table to display payslips */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Payslip ID</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Staff Name</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Month</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Gross Salary</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Net Salary</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockPayslips.map((payslip) => (
              <tr key={payslip.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{payslip.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{payslip.staffName}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{payslip.month}</td>
                <td className="px-6 py-4 text-sm text-gray-900">₹{payslip.grossSalary}</td>
                <td className="px-6 py-4 text-sm text-gray-900">₹{payslip.netSalary}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800`}
                  >
                    {payslip.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}