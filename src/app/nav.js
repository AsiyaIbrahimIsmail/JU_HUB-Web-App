// Navigation metadata used by sidebar and topbar
// Keep only path/label/icon here (no component imports) to avoid circular deps

export const MAIN_LINKS = [
  { path: '/', label: 'Dashboard', icon: 'home' },
  { path: '/channels', label: 'Manage Channels', icon: 'hashtag' },
  { path: '/clubs', label: 'Manage Clubs', icon: 'users' },
  { path: '/announcements', label: 'Announcements', icon: 'megaphone' },
]

export const SECTION_LINKS = {
  Channels: [
    { path: '/channels/settings', label: 'Channel Settings' },
    { path: '/channels/new', label: 'New Post' },
    { path: '/channels/:id', label: 'Channel Detail' },
    { path: '/channels/:id/view', label: 'Channel View' },
  ],
  Clubs: [
    { path: '/clubs/approve-queue', label: 'Approve Queue' },
    { path: '/clubs/new', label: 'Add New Club' },
    { path: '/clubs/:id/edit', label: 'Edit Club' },
    { path: '/clubs/:id/delete', label: 'Delete Club' },
  ],
  Announcements: [
    { path: '/announcements/new', label: 'Create Announcement' },
    { path: '/announcements/:id/edit', label: 'Edit Announcement' },
    { path: '/announcements/:id/delete', label: 'Delete Announcement' },
  ],
}


