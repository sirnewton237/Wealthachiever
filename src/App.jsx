import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";

// Auth pages
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import ForgotPassword from "./pages/auth/ForgotPassword/ForgotPassword";

// Dashboard pages
import Overview from "./pages/dashboard/Overview/Overview";
import Investments from "./pages/dashboard/Investments/Investments";
import Deposit from "./pages/dashboard/Deposit/Deposit";
import Withdraw from "./pages/dashboard/Withdraw/Withdraw";
import Transactions from "./pages/dashboard/Transactions/Transactions";
import Profile from "./pages/dashboard/Profile/Profile";
import Settings from "./pages/dashboard/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* First page when the app opens */}
        <Route path="/" element={<Register />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Overview />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/investments"
          element={
            <DashboardLayout>
              <Investments />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/deposit"
          element={
            <DashboardLayout>
              <Deposit />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/withdraw"
          element={
            <DashboardLayout>
              <Withdraw />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/transactions"
          element={
            <DashboardLayout>
              <Transactions />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/profile"
          element={
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/settings"
          element={
            <DashboardLayout>
              <Settings />
            </DashboardLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;