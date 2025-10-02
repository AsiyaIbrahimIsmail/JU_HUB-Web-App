export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-gray-600">Welcome. Select a feature from the sidebar to get started.</p>
    </div>
  )
}

function StatCard({ color = 'blue', icon = 'bell', label, value }) {
  const colorMap = {
    blue: ['bg-blue-50', 'text-blue-600', 'ring-blue-100', 'shadow-blue-100'],
    green: ['bg-green-50', 'text-green-600', 'ring-green-100', 'shadow-green-100'],
    purple: ['bg-purple-50', 'text-purple-600', 'ring-purple-100', 'shadow-purple-100'],
    cyan: ['bg-cyan-50', 'text-cyan-600', 'ring-cyan-100', 'shadow-cyan-100'],
  }
  const [bg, text, ring, shadow] = colorMap[color] || colorMap.blue
  return (
    <div className={`rounded-2xl border bg-white p-5 shadow-sm ring-1 ${ring} transition hover:shadow-md` }>
      <div className="flex flex-col items-center text-center">
        <div className={`grid h-11 w-11 place-items-center rounded-xl ${bg} ${text} shadow ${shadow}`}>
          <Icon name={icon} />
        </div>
        <div className="mt-2 text-[13px] text-gray-600">{label}</div>
        <div className="mt-1 text-3xl font-extrabold tracking-tight">{value}</div>
      </div>
    </div>
  )
}

function AnnouncementCard({ title, text, image = false, illustration = false }) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
      <div className="w-full bg-gray-100 aspect-[16/9]">
        {image && <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />}
        {illustration && (
          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-amber-50 to-amber-100">
            <svg viewBox="0 0 24 24" className="h-16 w-16 text-amber-400"><path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5Zm0 7L2 4v13l10 5 10-5V4l-10 5Z"/></svg>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="font-medium text-gray-900">{title}</div>
        <p className="mt-1 text-sm text-gray-600">{text}</p>
      </div>
    </div>
  )
}

function AnnouncementWide({ title, text }) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="grid grid-cols-[96px,1fr] items-center gap-4">
        <div className="h-24 w-24 rounded-lg bg-gray-100" />
        <div>
          <div className="font-medium text-gray-900">{title}</div>
          <p className="mt-1 text-sm text-gray-600">{text}</p>
        </div>
      </div>
    </div>
  )
}

function ChannelChip({ label, color = 'blue' }) {
  const map = {
    green: ['bg-green-50', 'text-green-700', 'ring-green-100'],
    blue: ['bg-blue-50', 'text-blue-700', 'ring-blue-100'],
    purple: ['bg-purple-50', 'text-purple-700', 'ring-purple-100'],
    orange: ['bg-orange-50', 'text-orange-700', 'ring-orange-100'],
  }
  const [bg, text, ring] = map[color] || map.blue
  return (
    <div className={`flex flex-col items-center justify-center gap-2 rounded-2xl ${bg} ${text} p-4 ring-1 ${ring} shadow-sm transition hover:shadow-md`}>
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/70">
        <Icon name="users" />
      </div>
      <div className="text-[13px] font-medium">{label}</div>
    </div>
  )
}

function ClubTile({ label, status, color = 'blue', icon = 'camera' }) {
  const map = {
    blue: ['from-blue-500 to-indigo-500'],
    green: ['from-emerald-500 to-teal-500'],
    purple: ['from-violet-500 to-fuchsia-500'],
  }
  const [grad] = map[color] || map.blue
  const statusMap = {
    Member: 'bg-emerald-100 text-emerald-800',
    Pending: 'bg-amber-100 text-amber-800',
    Denied: 'bg-gray-200 text-gray-700',
  }
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${grad} text-white shadow` }>
        <Icon name={icon} filled />
      </div>
      <div className="mt-3 font-medium text-gray-900">{label}</div>
      <div className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs ${statusMap[status]}`}>{status}</div>
    </div>
  )
}

function Icon({ name = 'bell', filled = false }) {
  const common = 'h-5 w-5'
  switch (name) {
    case 'bell':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
          <path strokeWidth="2" d="M15 17h5l-1.4-2.3A2 2 0 0 1 18 14V9a6 6 0 1 0-12 0v5a2 2 0 0 1-.6 1.4L4 17h5" />
        </svg>
      )
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
          <path strokeWidth="2" d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10Z" />
        </svg>
      )
    case 'users':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
          <path strokeWidth="2" d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M16 3.13a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM22 21v-2a4 4 0 0 0-3-3.87" />
        </svg>
      )
    case 'file':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
          <path strokeWidth="2" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
        </svg>
      )
    case 'camera':
      return (
        <svg viewBox="0 0 24 24" className={common} fill={filled ? 'currentColor' : 'none'} stroke="currentColor">
          <path strokeWidth="2" d="M3 7h4l2-3h6l2 3h4v12H3V7Z" />
        </svg>
      )
    case 'phone':
      return (
        <svg viewBox="0 0 24 24" className={common} fill={filled ? 'currentColor' : 'none'} stroke="currentColor">
          <path strokeWidth="2" d="M6 2h12v20H6z" />
        </svg>
      )
    case 'video':
      return (
        <svg viewBox="0 0 24 24" className={common} fill={filled ? 'currentColor' : 'none'} stroke="currentColor">
          <path strokeWidth="2" d="M3 5h14v14H3z M17 10l4-3v10l-4-3z" />
        </svg>
      )
    case 'chip':
      return (
        <svg viewBox="0 0 24 24" className={common} fill={filled ? 'currentColor' : 'none'} stroke="currentColor">
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M4 10h3M4 14h3M17 10h3M17 14h3M10 4v3M14 4v3M10 17v3M14 17v3" />
        </svg>
      )
    default:
      return null
  }
}



