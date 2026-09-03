import React, { useState } from "react";
import { Wallet, ShieldCheck, ArrowRight } from "lucide-react";
import { useAuth } from "../../../store/auth/authstore";

const Deposit = () => {
  const { user } = useAuth();
  const [amount, setAmount] = useState("");

  const quickAmounts = [3000, 7000, 15000, 50000, 100000];

  const handleContinue = () => {
    if (!amount || Number(amount) <= 0) return;

    const email = user?.email || "unknown@email.com";
    const message = `Hi Wealthachiever247, I am registered with the email ${email} and I am willing to make a deposit of R${Number(amount).toLocaleString()} into the Wealthachiever247 platform.`;

    const whatsappUrl = `https://wa.me/8053773486?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="p-4 md:p-6">
      {/* Page Header */}
      <div className="mb-8">
        <p className="text-sm text-slate-500">Add money to your account</p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900">Deposit</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Deposit Form */}
        <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <Wallet size={22} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Deposit Money
              </h2>
              <p className="text-sm text-slate-500">
                Enter the amount you want to deposit.
              </p>
            </div>
          </div>

          {/* Amount */}
          <div className="mt-8">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Deposit Amount
            </label>
            <div className="flex items-center rounded-xl border border-slate-300 bg-white px-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
              <span className="text-lg font-semibold text-slate-500">R</span>
              <input
                type="number"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full border-0 bg-transparent px-3 py-4 text-lg font-semibold text-slate-900 outline-none"
              />
            </div>
          </div>

          {/* Quick Amounts */}
          <div className="mt-5">
            <p className="mb-3 text-sm font-semibold text-slate-700">
              Quick Amount
            </p>
            <div className="flex flex-wrap gap-3">
              {quickAmounts.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setAmount(String(value))}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                    Number(amount) === value
                      ? "border-blue-600 bg-blue-50 text-blue-600"
                      : "border-slate-300 text-slate-700 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  R{value.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* Continue Button */}
          <button
            type="button"
            onClick={handleContinue}
            disabled={!amount || Number(amount) <= 0}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Continue to Payment
            <ArrowRight size={19} />
          </button>
        </div>

        {/* Security Information */}
        <div className="h-fit rounded-2xl bg-slate-900 p-6 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
            <ShieldCheck size={23} />
          </div>

          <h2 className="mt-5 text-xl font-bold">Secure Deposits</h2>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Your payment will be processed through a secure payment provider.
            Your account balance will only be updated after the payment has
            been successfully verified.
          </p>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Important
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              A payment attempt does not automatically mean your wallet has
              been credited. The transaction must be verified before funds are
              added.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;