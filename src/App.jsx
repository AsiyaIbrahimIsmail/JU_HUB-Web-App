import { Outlet, NavLink } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 flex gap-4">
          <nav className="flex gap-4 text-sm">
            <NavLink to="/" className="hover:underline">
              Dashboard
            </NavLink>
            <NavLink to="/clubs" className="hover:underline">
              Clubs
            </NavLink>
            <NavLink to="/announcements" className="hover:underline">
              Announcements
            </NavLink>
            <NavLink to="/channels" className="hover:underline">
              Channels
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}


