import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Save,
  Check,
} from "lucide-react";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaved(false);

    // Simulate API call – replace with your real endpoint
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("Profile data:", formData);
    setIsSaving(false);
    setSaved(true);

    // Hide success message after 2 seconds
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-4 md:p-6">
      {/* Page Header */}
      <div className="mb-8">
        <p className="text-sm text-slate-500">
          Manage your personal information
        </p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Profile
        </h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Form */}
        <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <User size={22} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Personal Information
              </h2>
              <p className="text-sm text-slate-500">
                Update your account information.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6">
            {/* Name */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
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
                  placeholder="Enter last name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-5">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Mail size={16} />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Phone */}
            <div className="mt-5">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Phone size={16} />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Address */}
            <div className="mt-5">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <MapPin size={16} />
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="4"
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Save Button + Feedback */}
            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                disabled={isSaving}
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSaving ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    Save Changes
                  </>
                )}
              </button>

              {saved && (
                <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                  <Check size={16} />
                  Changes saved
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Account Status */}
        <div className="h-fit rounded-2xl bg-slate-900 p-6 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
            <ShieldCheck size={23} />
          </div>

          <h2 className="mt-5 text-xl font-bold">Account Status</h2>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Your account information and verification status will be
            displayed here.
          </p>

          <div className="mt-6 rounded-xl bg-white/10 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Verification
            </p>
            <p className="mt-2 font-semibold">Not Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;