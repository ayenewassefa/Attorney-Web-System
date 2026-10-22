export default function Dashboard() {
  return (
    <div className="space-y-6 max-w-6xl">
      
      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-sm font-medium text-gray-500">Total Clients</h2>
          <p className="text-3xl font-bold mt-2 text-slate-800">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-sm font-medium text-gray-500">Active Matters</h2>
          <p className="text-3xl font-bold mt-2 text-slate-800">8</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-sm font-medium text-gray-500">Pending Tasks</h2>
          <p className="text-3xl font-bold mt-2 text-slate-800">5</p>
        </div>
      </div>

      {/* PLACEHOLDER FOR RECENT ACTIVITY */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-64 flex flex-col">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h2>
        <div className="flex-1 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-100 rounded-lg">
          No recent activity to show yet.
        </div>
      </div>

    </div>
  );
}