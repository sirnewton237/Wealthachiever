import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../store/auth/authstore";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const email = formData.email.trim().toLowerCase();
    const password = formData.password;

    const savedUser = localStorage.getItem(
      "wealthachiever247_registered_user"
    );

    if (!savedUser) {
      setError(
        "No account was found. Please create an account first."
      );
      setIsLoading(false);
      return;
    }

    let registeredUser;
    try {
      registeredUser = JSON.parse(savedUser);
    } catch (err) {
      setError("Account data is invalid. Please register again.");
      setIsLoading(false);
      return;
    }

    if (registeredUser.email !== email) {
      setError("No account exists with this email address.");
      setIsLoading(false);
      return;
    }

    if (registeredUser.password !== password) {
      setError("Incorrect password. Please try again.");
      setIsLoading(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 700));

    // Never put the password into the session
    const authenticatedUser = {
      firstName: registeredUser.firstName,
      lastName: registeredUser.lastName,
      email: registeredUser.email,
      phone: registeredUser.phone,
    };

    login(authenticatedUser);
    setIsLoading(false);
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left */}
        <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Wealthachiever247</h1>
            <p className="mt-1 text-sm text-slate-400">Wealth Management</p>
          </div>

          <div className="max-w-md">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <ShieldCheck size={28} />
            </div>
            <h2 className="mt-6 text-4xl font-bold leading-tight">
              Welcome back.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Sign in to manage your savings, investments, deposits,
              withdrawals, and account activity.
            </p>
          </div>

          <p className="text-xs text-slate-500">Secure account management</p>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center p-5 sm:p-8">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <h1 className="text-2xl font-bold text-slate-900">
                Wealthachiever247
              </h1>
              <p className="mt-1 text-sm text-slate-500">Wealth Management</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-8">
                <p className="text-sm text-blue-600">Welcome back</p>
                <h2 className="mt-1 text-3xl font-bold text-slate-900">
                  Sign In
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Enter your registered email and password.
                </p>
              </div>

              {error && (
                <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
                    <Mail size={18} className="text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full border-0 bg-transparent px-3 py-3 outline-none"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-semibold text-slate-700">
                      Password
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
                    <Lock size={18} className="text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                      className="w-full border-0 bg-transparent px-3 py-3 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-slate-400 hover:text-slate-700"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Signing In...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight size={19} />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 border-t border-slate-200 pt-6 text-center">
                <p className="text-sm text-slate-500">
                  Don't have an account?
                </p>
                <Link
                  to="/register"
                  className="mt-1 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;