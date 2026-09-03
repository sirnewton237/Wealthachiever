import React, { useState } from "react";
import {
  Settings as SettingsIcon,
  Bell,
  Mail,
  ShieldCheck,
  LogOut,
  Save,
  Lock,
  Megaphone,
  Check,
  Eye,
  EyeOff,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../store/auth/authstore";

const Settings = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [settings, setSettings] = useState({
    emailNotifications: true,
    transactionAlerts: true,
    investmentUpdates: true,
    marketingEmails: false,
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // Password modal
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const handleToggle = (name) => {
    setSettings((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaved(false);

    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Settings saved:", settings);

    setIsSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleSignOut = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
    setPasswordError("");
    setPasswordSuccess(false);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess(false);

    const { currentPassword, newPassword, confirmPassword } = passwordData;

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("Please fill in all password fields.");
      return;
    }

    if (newPassword.length < 8) {
      setPasswordError("New password must contain at least 8 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }

    if (currentPassword === newPassword) {
      setPasswordError(
        "Your new password must be different from your current password."
      );
      return;
    }

    setIsChangingPassword(true);

    const savedUser = localStorage.getItem(
      "wealthachiever247_registered_user"
    );

    if (!savedUser) {
      setPasswordError("Account could not be found.");
      setIsChangingPassword(false);
      return;
    }

    let registeredUser;
    try {
      registeredUser = JSON.parse(savedUser);
    } catch (err) {
      setPasswordError("Account data is invalid. Please register again.");
      setIsChangingPassword(false);
      return;
    }

    if (registeredUser.password !== currentPassword) {
      setPasswordError("Current password is incorrect.");
      setIsChangingPassword(false);
      return;
    }

    // Update the password in the same object Login uses
    registeredUser.password = newPassword;
    localStorage.setItem(
      "wealthachiever247_registered_user",
      JSON.stringify(registeredUser)
    );

    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsChangingPassword(false);
    setPasswordSuccess(true);
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    setTimeout(() => {
      setPasswordSuccess(false);
      setShowPasswordModal(false);
    }, 1800);
  };

  const closePasswordModal = () => {
    if (isChangingPassword) return;
    setShowPasswordModal(false);
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setPasswordError("");
    setPasswordSuccess(false);
  };

  return (
    <div className="p-4 md:p-6">
      <div className="mb-8">
        <p className="text-sm text-slate-500">
          Manage your account preferences
        </p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900">Settings</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {/* Preferences */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                <SettingsIcon size={22} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Account Preferences
                </h2>
                <p className="text-sm text-slate-500">
                  Control how you receive account updates.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="space-y-5">
                {/* Email Notifications */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Bell size={20} className="mt-1 text-slate-500" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        Email Notifications
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Receive important updates about your account.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={settings.emailNotifications}
                    onClick={() => handleToggle("emailNotifications")}
                    className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                      settings.emailNotifications
                        ? "bg-blue-600"
                        : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                        settings.emailNotifications ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Transaction Alerts */}
                <div className="border-t border-slate-100 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <ShieldCheck size={20} className="mt-1 text-slate-500" />
                      <div>
                        <p className="font-semibold text-slate-900">
                          Transaction Alerts
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Get notified when deposits or withdrawals are
                          processed.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={settings.transactionAlerts}
                      onClick={() => handleToggle("transactionAlerts")}
                      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                        settings.transactionAlerts
                          ? "bg-blue-600"
                          : "bg-slate-300"
                      }`}
                    >
                      <span
                        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                          settings.transactionAlerts ? "left-6" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Investment Updates */}
                <div className="border-t border-slate-100 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <Mail size={20} className="mt-1 text-slate-500" />
                      <div>
                        <p className="font-semibold text-slate-900">
                          Investment Updates
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Receive updates about your investments.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={settings.investmentUpdates}
                      onClick={() => handleToggle("investmentUpdates")}
                      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                        settings.investmentUpdates
                          ? "bg-blue-600"
                          : "bg-slate-300"
                      }`}
                    >
                      <span
                        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                          settings.investmentUpdates ? "left-6" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Marketing Emails */}
                <div className="border-t border-slate-100 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <Megaphone size={20} className="mt-1 text-slate-500" />
                      <div>
                        <p className="font-semibold text-slate-900">
                          Marketing Emails
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Receive promotional messages and offers.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={settings.marketingEmails}
                      onClick={() => handleToggle("marketingEmails")}
                      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                        settings.marketingEmails
                          ? "bg-blue-600"
                          : "bg-slate-300"
                      }`}
                    >
                      <span
                        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                          settings.marketingEmails ? "left-6" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
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

          {/* Security */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                <Lock size={21} className="text-slate-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Security</h2>
                <p className="text-sm text-slate-500">
                  Manage your account security.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setShowPasswordModal(true)}
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Change Password
              </button>
              <button
                type="button"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Two-Factor Authentication
              </button>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <div className="h-fit rounded-2xl bg-slate-900 p-6 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <ShieldCheck size={23} />
            </div>
            <h2 className="mt-5 text-xl font-bold">Account Security</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Keep your account protected by using a strong password and
              enabling additional security features.
            </p>
            <div className="mt-6 rounded-xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Security Status
              </p>
              <p className="mt-2 font-semibold">Basic Protection</p>
            </div>
          </div>

          <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <LogOut size={21} className="text-red-500" />
              <h2 className="text-lg font-bold text-slate-900">Sign Out</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Sign out of your Wealthachiever247 account on this device.
            </p>
            <button
              type="button"
              onClick={handleSignOut}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 p-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Change Password
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Create a new password for your account.
                </p>
              </div>
              <button
                type="button"
                onClick={closePasswordModal}
                disabled={isChangingPassword}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 disabled:opacity-50"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleChangePassword} className="p-6">
              {passwordError && (
                <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {passwordError}
                </div>
              )}

              {passwordSuccess && (
                <div className="mb-5 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-600">
                  <Check size={17} />
                  Password changed successfully.
                </div>
              )}

              {/* Current Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Current Password
                </label>
                <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
                  <Lock size={18} className="text-slate-400" />
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    placeholder="Enter current password"
                    disabled={isChangingPassword}
                    className="w-full border-0 bg-transparent px-3 py-3 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowCurrentPassword(!showCurrentPassword)
                    }
                    className="text-slate-400 hover:text-slate-700"
                  >
                    {showCurrentPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  New Password
                </label>
                <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
                  <Lock size={18} className="text-slate-400" />
                  <input
                    type={showNewPassword ? "text" : "password"}
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    placeholder="Enter new password"
                    minLength={8}
                    disabled={isChangingPassword}
                    className="w-full border-0 bg-transparent px-3 py-3 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="text-slate-400 hover:text-slate-700"
                  >
                    {showNewPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Use at least 8 characters.
                </p>
              </div>

              {/* Confirm Password */}
              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Confirm New Password
                </label>
                <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
                  <Lock size={18} className="text-slate-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    placeholder="Confirm new password"
                    disabled={isChangingPassword}
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

              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closePasswordModal}
                  disabled={isChangingPassword}
                  className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isChangingPassword}
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isChangingPassword ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <Lock size={17} />
                      Change Password
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;