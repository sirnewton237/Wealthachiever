import {
  LayoutDashboard,
  TrendingUp,
  ArrowDownToLine,
  ArrowUpFromLine,
  Receipt,
  User,
  Settings,
} from 'lucide-react'

import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  const menuItems = [
    {
      name: 'Overview',
      icon: LayoutDashboard,
      path: '/dashboard',
    },
    {
      name: 'My Investments',
      icon: TrendingUp,
      path: '/dashboard/investments',
    },
    {
      name: 'Deposit',
      icon: ArrowDownToLine,
      path: '/dashboard/deposit',
    },
    {
      name: 'Withdraw',
      icon: ArrowUpFromLine,
      path: '/dashboard/withdraw',
    },
    {
      name: 'Transactions',
      icon: Receipt,
      path: '/dashboard/transactions',
    },
    {
      name: 'Profile',
      icon: User,
      path: '/dashboard/profile',
    },
    {
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/settings',
    },
  ]

  return (
    <aside className="hidden min-h-screen w-64 border-r border-slate-200 bg-white md:block">

      <div className="border-b border-slate-200 p-6">

        <h1 className="text-xl font-bold text-slate-900">
          Wealthachiever247
        </h1>

        <p className="mt-1 text-xs text-slate-500">
          Wealth Management
        </p>

      </div>

      <nav className="p-4">

        {menuItems.map((item) => {

          const Icon = item.icon

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `mb-1 flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              <Icon size={19} />
              {item.name}
            </NavLink>
          )

        })}

      </nav>

    </aside>
  )
}

export default Sidebar