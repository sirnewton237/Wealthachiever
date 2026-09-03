import React from "react";
import { Bell, Menu, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth/authstore";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const userInitial = user?.email?.charAt(0).toUpperCase() || "U";

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6">
      {/* Mobile Menu Button */}
      <button
        type="button"
        className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 md:hidden"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      {/* Right Section */}
      <div className="ml-auto flex items-center gap-3 sm:gap-4">
        {/* Notifications */}
        <button
          type="button"
          className="relative rounded-lg p-2 text-slate-600 transition hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell size={21} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-blue-600" />
        </button>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold uppercase text-white">
            {userInitial}
          </div>

          <div className="hidden sm:block">
            <p className="max-w-[180px] truncate text-sm font-semibold text-slate-900">
              {user?.email || "User"}
            </p>
            <p className="text-xs text-slate-500">Account</p>
          </div>
        </div>

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={18} />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;