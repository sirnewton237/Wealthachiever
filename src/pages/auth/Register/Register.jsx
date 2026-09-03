import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

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

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    const registeredUser = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      // Development only — never store plain passwords in production
      password: formData.password,
    };

    const existingUser = localStorage.getItem(
      "wealthachiever247_registered_user"
    );

    if (existingUser) {
      try {
        const parsed = JSON.parse(existingUser);
        if (parsed.email === registeredUser.email) {
          setError(
            "An account with this email already exists. Please sign in."
          );
          setIsLoading(false);
          return;
        }
      } catch (err) {
        console.error("Invalid stored user", err);
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 600));

    localStorage.setItem(
      "wealthachiever247_registered_user",
      JSON.stringify(registeredUser)
    );

    setIsLoading(false);
    navigate("/login");
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
              Start building your financial future.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Create your account to manage savings, investments, deposits,
              withdrawals, and account activity from one secure dashboard.
            </p>
          </div>

          <p className="text-xs text-slate-500">Secure account management</p>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center p-5 sm:p-8">
          <div className="w-full max-w-lg">
            <div className="mb-8 lg:hidden">
              <h1 className="text-2xl font-bold text-slate-900">
                Wealthachiever247
              </h1>
              <p className="mt-1 text-sm text-slate-500">Wealth Management</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-8">
                <p className="text-sm text-blue-600">Create your account</p>
                <h2 className="mt-1 text-3xl font-bold text-slate-900">
                  Register
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Enter your details to create your account.
                </p>
              </div>

              {error && (
                <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      First Name
                    </label>
                    <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
                      <User size={18} className="text-slate-400" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        required
                        className="w-full border-0 bg-transparent px-3 py-3 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="mt-5">
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
                      placeholder="Enter email address"
                      required
                      className="w-full border-0 bg-transparent px-3 py-3 outline-none"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
                    <Phone size={18} className="text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      required
                      className="w-full border-0 bg-transparent px-3 py-3 outline-none"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Password
                  </label>
                  <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
                    <Lock size={18} className="text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create password"
                      required
                      minLength={8}
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
                  <p className="mt-2 text-xs text-slate-500">
                    Must be at least 8 characters.
                  </p>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Confirm Password
                  </label>
                  <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
                    <Lock size={18} className="text-slate-400" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm password"
                      required
                      className="w-full border-0 bg-transparent px-3 py-3 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="text-slate-400 hover:text-slate-700"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
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
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight size={19} />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 border-t border-slate-200 pt-6 text-center">
                <p className="text-sm text-slate-500">
                  Already have an account?
                </p>
                <Link
                  to="/login"
                  className="mt-1 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;