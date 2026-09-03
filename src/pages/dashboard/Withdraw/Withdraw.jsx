import React, { useState } from "react";
import {
  ArrowUpFromLine,
  ShieldCheck,
  ArrowRight,
  Landmark,
} from "lucide-react";

const Withdraw = () => {
  const [amount, setAmount] = useState("");

  const availableBalance = 0;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      {/* Page Header */}
      <div className="mb-8">
        <p className="text-sm text-slate-500">
          Withdraw money from your account
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Withdraw
        </h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Withdrawal Form */}
        <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <ArrowUpFromLine
                size={22}
                className="text-blue-600"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Withdraw Money
              </h2>

              <p className="text-sm text-slate-500">
                Enter the amount you want to withdraw.
              </p>
            </div>
          </div>

          {/* Available Balance */}
          <div className="mt-8 rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">
              Available Balance
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              R{availableBalance.toLocaleString()}
            </p>
          </div>

          {/* Amount */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Withdrawal Amount
            </label>

            <div className="flex items-center rounded-xl border border-slate-300 bg-white px-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
              <span className="text-lg font-semibold text-slate-500">
                R
              </span>

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

          {/* Bank Account */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Withdrawal Account
            </label>

            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  <Landmark
                    size={20}
                    className="text-slate-500"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    No bank account added
                  </p>

                  <p className="text-xs text-slate-500">
                    Add a bank account before withdrawing.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Add Account
              </button>
            </div>
          </div>

          {/* Withdraw Button */}
          <button
            type="button"
            disabled={
              !amount ||
              Number(amount) <= 0 ||
              Number(amount) > availableBalance
            }
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Continue
            <ArrowRight size={19} />
          </button>
        </div>

        {/* Security Information */}
        <div className="h-fit rounded-2xl bg-slate-900 p-6 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
            <ShieldCheck size={23} />
          </div>

          <h2 className="mt-5 text-xl font-bold">
            Secure Withdrawals
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Withdrawals will only be processed against funds
            that have been successfully verified and recorded
            in your account ledger.
          </p>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Important
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Your available balance must be sufficient before
              a withdrawal request can be submitted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;