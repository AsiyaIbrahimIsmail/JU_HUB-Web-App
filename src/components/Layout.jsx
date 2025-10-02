import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { MAIN_LINKS } from '../app/nav.js'

const linkBase =
  'flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-gray-700 hover:bg-gray-100'

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden sm:flex w-64 shrink-0 flex-col border-r bg-white">
          <SidebarContent />
        </aside>

        {/* Mobile Sidebar */}
        {/* Overlay */}
        {mobileOpen ? (
          <div
            className="fixed inset-0 z-40 bg-black/30 sm:hidden"
            onClick={() => setMobileOpen(false)}
          />
        ) : null}
        {/* Drawer */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r bg-white shadow-lg transition-transform duration-200 sm:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <SidebarContent onNavigate={() => setMobileOpen(false)} />
        </aside>

        {/* Main */}
        <div className="flex min-h-screen flex-1 flex-col">
          {/* Topbar */}
          <div className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
            <div className="flex items-center gap-4 px-4 py-3">
              {/* Mobile menu button */}
              <button
                className="grid h-9 w-9 place-items-center rounded-full border bg-white sm:hidden"
                aria-label="Open navigation"
                onClick={() => setMobileOpen(true)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-gray-700">
                  <path strokeWidth="2" d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </button>
              <div className="ml-auto flex items-center gap-3 w-full sm:w-auto">
                <div className="relative hidden md:block">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-[420px] rounded-full border bg-gray-50 px-10 py-2 text-sm placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                      <path strokeWidth="2" d="M21 21l-4.3-4.3M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
                    </svg>
                  </span>
                </div>
                <button className="relative grid h-9 w-9 place-items-center rounded-full border bg-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-gray-700">
                    <path strokeWidth="2" d="M15 17h5l-1.4-2.3A2 2 0 0 1 18 14V9a6 6 0 1 0-12 0v5a2 2 0 0 1-.6 1.4L4 17h5" />
                  </svg>
                  <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-red-500 text-[10px] text-white">
                    3
                  </span>
                </button>
                <div className="h-9 w-9 rounded-full bg-gray-300" />
              </div>
            </div>
          </div>

          <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 py-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

function Icon({ name }) {
  switch (name) {
    case 'home':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
          <path strokeWidth="2" d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z" />
        </svg>
      )
    case 'hashtag':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
          <path strokeWidth="2" d="M5 9h14M5 15h14M9 3 7 21M17 3l-2 18" />
        </svg>
      )
    case 'users':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
          <path strokeWidth="2" d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M16 3.13a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM22 21v-2a4 4 0 0 0-3-3.87" />
        </svg>
      )
    case 'megaphone':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
          <path strokeWidth="2" d="M3 11l12-6v14L3 13v8M15 5v14" />
        </svg>
      )
    default:
      return null
  }
}

function SidebarContent({ onNavigate }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 px-4 py-4 border-b">
        <div className="h-9 w-9 rounded-full bg-blue-600 text-white grid place-items-center font-bold">
          JU
        </div>
        <div className="text-lg font-semibold">JU HUB</div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {MAIN_LINKS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            onClick={onNavigate}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-blue-50 text-blue-700 shadow-sm' : ''}`
            }
          >
            <span className="inline-grid h-5 w-5 place-items-center rounded-md bg-gray-600/10 text-gray-700">
              <Icon name={item.icon} />
            </span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto border-t p-3">
        <button className="w-full ${linkBase} justify-start">
          <span className="inline-grid h-5 w-5 place-items-center rounded-md bg-gray-200 text-gray-700">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
              <path strokeWidth="2" d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM19.4 15a7.97 7.97 0 0 0 .1-6l2.1-1.2-2-3.5-2.3 1.3a8.02 8.02 0 0 0-5.8-2.5V1h-4v2.1A8.02 8.02 0 0 0 4.7 4.6L2.4 3.3l-2 3.5 2.1 1.2a7.97 7.97 0 0 0 0 6L.4 15.2l2 3.5 2.3-1.3a8.02 8.02 0 0 0 5.8 2.5V23h4v-2.1a8.02 8.02 0 0 0 5.8-2.5l2.3 1.3 2-3.5L19.4 15Z" />
            </svg>
          </span>
          <span className="ml-3 text-sm text-gray-700">Settings</span>
        </button>
      </div>
    </div>
  )
}


