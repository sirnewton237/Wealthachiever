import React, { useState } from "react";
import { Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Password reset request:", email);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Section */}
        <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Wealthachiever247
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Wealth Management
            </p>
          </div>

          <div className="max-w-md">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <ShieldCheck size={28} />
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight">
              Keep your account secure.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              If you have forgotten your password, you can
              request a secure password reset.
            </p>
          </div>

          <p className="text-xs text-slate-500">
            Secure account management
          </p>
        </div>

        {/* Form Section */}
        <div className="flex items-center justify-center p-5 sm:p-8">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <h1 className="text-2xl font-bold text-slate-900">
                Wealthachiever247
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Wealth Management
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-8">
                <p className="text-sm text-blue-600">
                  Account recovery
                </p>

                <h2 className="mt-1 text-3xl font-bold text-slate-900">
                  Forgot Password?
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Enter the email address associated with your
                  account and we'll help you reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
                  <Mail size={18} className="text-slate-400" />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    required
                    className="w-full border-0 bg-transparent px-3 py-3 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Continue
                  <ArrowRight size={19} />
                </button>
              </form>

              <div className="mt-6 border-t border-slate-200 pt-6 text-center">
                <Link
                  to="/login"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Back to Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;