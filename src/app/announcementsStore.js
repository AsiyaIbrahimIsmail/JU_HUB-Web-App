import { create } from 'zustand'

const seed = [
  {
    id: 'a1',
    title: 'Faculty Orientation',
    description: 'Orientation for new faculty members next week.',
    highPriority: false,
    audience: { faculty: 'All', department: 'All', batch: 'All' },
    imageUrl: '',
    authorName: 'Faculty-Admin',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'a2',
    title: 'Research Symposium',
    description: 'Submit abstracts by Friday.',
    highPriority: true,
    audience: { faculty: 'Science', department: 'Computer Science', batch: '2023' },
    imageUrl: '',
    authorName: 'Faculty-Admin',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    createdAt: new Date().toISOString(),
  },
]

export const useAnnouncementsStore = create((set, get) => ({
  items: seed,
  currentUser: {
    name: 'Faculty-Admin',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  add: (item) =>
    set((s) => ({
      items: [
        ...s.items,
        {
          ...item,
          id: crypto.randomUUID(),
          authorName: item.authorName || s.currentUser.name,
          avatarUrl: item.avatarUrl || s.currentUser.avatarUrl,
          createdAt: item.createdAt || new Date().toISOString(),
        },
      ],
    })),
  update: (id, updates) =>
    set((s) => ({ items: s.items.map((it) => (it.id === id ? { ...it, ...updates } : it)) })),
  remove: (id) => set((s) => ({ items: s.items.filter((it) => it.id !== id) })),
  byId: (id) => get().items.find((it) => it.id === id),
}))


