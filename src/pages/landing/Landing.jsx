import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  TrendingUp,
  Wallet,
  ArrowRight,
  Lock,
  Star,
} from "lucide-react";

const initialTestimonials = [
  {
    name: "Thabo Molefe",
    role: "Young Professional",
    amount: "R15,000",
    text: "I successfully withdrew R15,000 after my first investment cycle. The process was smooth and transparent.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    secondsAgo: 7, // 7 seconds ago
  },
  {
    name: "Naledi Khumalo",
    role: "Entrepreneur",
    amount: "R150,000",
    text: "Withdrew R150,000 from my portfolio. Wealthachiever247 has completely changed how I manage my money.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    secondsAgo: 120, // 2 mins ago
  },
  {
    name: "Johan van der Berg",
    role: "Business Owner",
    amount: "R200,000",
    text: "Just received my R200,000 withdrawal. Reliable platform with real results.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    secondsAgo: 5, // just now / few seconds
  },
  {
    name: "Ayanda Dlamini",
    role: "University Student",
    amount: "R7,000",
    text: "As a student I started small and already withdrew R7,000. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    secondsAgo: 300, // 5 mins ago
  },
  {
    name: "Lerato Mokoena",
    role: "Young Lady",
    amount: "R10,000",
    text: "Successful withdrawal of R10,000. The dashboard is easy to use and very clear.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    secondsAgo: 45,
  },
  {
    name: "Sipho Nkosi",
    role: "Young Guy",
    amount: "R170,000",
    text: "Withdrew R170,000 without any issues. This platform delivers on its promises.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    secondsAgo: 180,
  },
  {
    name: "Fatima Abrahams",
    role: "Working Mom",
    amount: "R1,800",
    text: "Even my first small withdrawal of R1,800 came through quickly. Trustworthy service.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    secondsAgo: 20,
  },
  {
    name: "Pieter Botha",
    role: "Investor",
    amount: "R50,000",
    text: "Another successful withdrawal of R50,000. Consistent and professional.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    secondsAgo: 90,
  },
];

// Convert seconds into readable time
const formatTimeAgo = (seconds) => {
  if (seconds < 10) return "just now";
  if (seconds < 60) return `${seconds} sec ago`;
  if (seconds < 3600) {
    const mins = Math.floor(seconds / 60);
    return mins === 1 ? "1 min ago" : `${mins} mins ago`;
  }
  const hours = Math.floor(seconds / 3600);
  return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
};

const Landing = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  // Update the times every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonials((prev) =>
        prev.map((item) => ({
          ...item,
          secondsAgo: item.secondsAgo + 1,
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

      {/* About Section */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-justify">
            <p className="text-sm font-semibold text-blue-600">About Us</p>
            <h2 className="mt-3 text-3xl text-center font-bold text-slate-900 md:text-4xl">
              About Wealthachiever247
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Wealthachiever247 is a modern wealth management platform designed
              to help everyday people grow and control their finances with
              clarity. We provide a secure environment for deposits,
              investments, and withdrawals, backed by transparent processes and
              real-time account tracking.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Whether you are just starting your financial journey or looking to
              scale your portfolio, our goal is to give you the tools and
              confidence to achieve lasting financial progress.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials - Infinite Scroll */}
      <section className="overflow-hidden text-justify py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold text-blue-600">
              Success Stories
            </p>
            <h2 className="text-center mt-3 text-3xl font-bold text-slate-900">
              Real people. Real withdrawals.
            </h2>
            <p className="mt-3 text-slate-500">
              Join thousands of users who are already growing with us.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex animate-scroll gap-5">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[320px] shrink-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    {formatTimeAgo(item.secondsAgo)}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  “{item.text}”
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-500">{item.role}</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-600">
                    {item.amount}
                  </div>
                </div>
              </div>
            ))}
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

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Landing;