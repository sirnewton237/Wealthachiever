
import {
  TrendingUp,
  Plus,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

const Investments = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      {/* Page Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm text-slate-500">
            Manage your investments
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            My Investments
          </h1>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
          <Plus size={19} />
          New Investment
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Total Invested
          </p>

          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            R0.00
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Total Returns
          </p>

          <h2 className="mt-3 text-2xl font-bold text-green-600">
            R0.00
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Active Investments
          </p>

          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            0
          </h2>
        </div>
      </div>

      {/* Investments List */}
      <div className="mt-8 rounded-2xl bg-white shadow-sm">
        <div className="border-b border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <TrendingUp size={22} className="text-blue-600" />

            <h2 className="text-xl font-bold text-slate-900">
              Your Investments
            </h2>
          </div>
        </div>

        {/* Empty State */}
        <div className="px-6 py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
            <TrendingUp size={28} className="text-slate-400" />
          </div>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">
            No investments yet
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            You don't have any active investments yet.
            Choose an investment plan to get started.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
            Explore Investment Plans
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      {/* Information */}
      <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-5">
        <CalendarDays
          size={20}
          className="mt-0.5 shrink-0 text-blue-600"
        />

        <div>
          <h3 className="font-semibold text-blue-900">
            Investment tracking
          </h3>

          <p className="mt-1 text-sm text-blue-700">
            Once you make a verified investment, your
            investment amount, progress, maturity date, and
            returns will appear here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Investments;