
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  TrendingUp,
  Wallet,
  ArrowRight,
  Lock,
} from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Wealthachiever247
            </h1>
            <p className="text-xs text-slate-500">Wealth Management</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Smart Wealth Management
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Grow and manage your wealth with confidence
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Deposit, invest, track your progress, and withdraw securely — all
              from one simple and powerful dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Create Free Account
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/login"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                <Wallet size={22} className="text-blue-600" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">Easy Deposits</h3>
              <p className="mt-2 text-sm text-slate-500">
                Fund your account quickly and securely.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                <TrendingUp size={22} className="text-blue-600" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">Smart Investing</h3>
              <p className="mt-2 text-sm text-slate-500">
                Grow your money with clear investment options.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                <ShieldCheck size={22} className="text-blue-600" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">Secure Platform</h3>
              <p className="mt-2 text-sm text-slate-500">
                Your funds and data are protected at every step.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                <Lock size={22} className="text-blue-600" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">Full Control</h3>
              <p className="mt-2 text-sm text-slate-500">
                Track balances, transactions, and withdrawals easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center md:px-6">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Ready to take control of your finances?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Join Wealthachiever247 today and start managing your money with
            clarity and confidence.
          </p>
          <Link
            to="/register"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;