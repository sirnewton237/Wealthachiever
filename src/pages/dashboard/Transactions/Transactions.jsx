
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  TrendingUp,
  Receipt,
} from "lucide-react";

const Transactions = () => {
  const transactions = [];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      {/* Page Header */}
      <div className="mb-8">
        <p className="text-sm text-slate-500">
          View your account activity
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Transactions
        </h1>
      </div>

      {/* Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Total Deposits
          </p>

          <p className="mt-3 text-2xl font-bold text-slate-900">
            R0.00
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Total Investments
          </p>

          <p className="mt-3 text-2xl font-bold text-slate-900">
            R0.00
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Total Withdrawals
          </p>

          <p className="mt-3 text-2xl font-bold text-slate-900">
            R0.00
          </p>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="border-b border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <Receipt size={22} className="text-blue-600" />

            <h2 className="text-xl font-bold text-slate-900">
              Transaction History
            </h2>
          </div>
        </div>

        {transactions.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              <Receipt size={28} className="text-slate-400" />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              No transactions yet
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              Your deposits, investments, withdrawals,
              and other verified account activities will
              appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Transaction
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Status
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b border-slate-100"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-slate-100 p-2">
                          {transaction.type === "deposit" && (
                            <ArrowDownToLine size={18} />
                          )}

                          {transaction.type === "withdrawal" && (
                            <ArrowUpFromLine size={18} />
                          )}

                          {transaction.type === "investment" && (
                            <TrendingUp size={18} />
                          )}
                        </div>

                        <span className="font-medium text-slate-900">
                          {transaction.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 font-semibold text-slate-900">
                      ₦{transaction.amount.toLocaleString()}
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                        {transaction.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-500">
                      {transaction.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;