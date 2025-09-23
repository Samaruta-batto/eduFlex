// Mock data for KPIs
const kpiData = [
  { title: 'Total Fees Collected (Q3)', value: '₹5,500,000', change: '+12% vs last quarter', color: 'bg-green-100 text-green-800' },
  { title: 'Students Present Today', value: '98%', change: '-2% vs last week', color: 'bg-yellow-100 text-yellow-800' },
  { title: 'Upcoming Payroll', value: '₹1,200,000', change: 'Next run on Oct 1', color: 'bg-blue-100 text-blue-800' },
  { title: 'Overdue Invoices', value: '15', change: '+3 since yesterday', color: 'bg-red-100 text-red-800' },
];

const KPICard = ({ title, value, change, color }: { title: string; value: string; change: string; color: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-gray-500 font-medium">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
      <p className={`text-sm mt-1 ${color}`}>
        {change}
      </p>
    </div>
  );
};

export default function ReportsDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Reporting Dashboard</h1>
      <p className="text-gray-600 mb-6">A summary of key metrics and business intelligence.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>

      {/* Placeholder for future charts and graphs */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Financial Trends</h2>
        <div className="bg-gray-100 p-8 rounded-lg min-h-[300px] flex items-center justify-center text-gray-500">
          Chart Placeholder (e.g., Line graph of fee collection over time)
        </div>
      </div>
    </div>
  );
}