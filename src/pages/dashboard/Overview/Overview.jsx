import {
  Wallet,
  TrendingUp,
  ArrowDownToLine,
  ArrowUpFromLine,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-6">
      {/* Page Header */}
      <div className="mb-8">
        <p className="text-sm text-slate-500">Welcome back</p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900">Dashboard</h1>
      </div>

      {/* Available Balance Card */}
      <div className="mb-6 rounded-2xl bg-slate-900 p-6 text-white shadow-lg">
        <div className="flex items-center gap-3">
          <Wallet size={24} />
          <p className="text-sm text-slate-300">Available Balance</p>
        </div>

        <h2 className="mt-4 text-4xl font-bold">R0.00</h2>

        <p className="mt-2 text-sm text-slate-400">Verified account balance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3 text-slate-500">
            <TrendingUp size={20} />
            <span>Total Investment</span>
          </div>
          <p className="mt-4 text-2xl font-bold text-slate-900">R0.00</p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3 text-slate-500">
            <ArrowDownToLine size={20} />
            <span>Total Deposits</span>
          </div>
          <p className="mt-4 text-2xl font-bold text-slate-900">R0.00</p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3 text-slate-500">
            <ArrowUpFromLine size={20} />
            <span>Total Withdrawals</span>
          </div>
          <p className="mt-4 text-2xl font-bold text-slate-900">R0.00</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Quick Actions</h2>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => navigate("/dashboard/deposit")}
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Deposit
          </button>

          <button
            type="button"
            onClick={() => navigate("/dashboard/investments")}
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Invest
          </button>

          <button
            type="button"
            onClick={() => navigate("/dashboard/withdraw")}
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;