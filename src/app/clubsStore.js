import { create } from 'zustand'

const initialClubs = [
  { id: 'ai', name: 'AI Club', members: 20, leader: 'Ahmed', about: '', imageUrl: '' },
  { id: 'mobile', name: 'Mobile App Club', members: 30, leader: 'Cali', about: '', imageUrl: '' },
  { id: 'web', name: 'Web Dev Club', members: 45, leader: 'Sophia', about: '', imageUrl: '' },
]

const initialQueue = [
  { id: 'film', name: 'Film Club', leader: 'Amal' },
]

export const useClubsStore = create((set, get) => ({
  clubs: initialClubs,
  approveQueue: initialQueue,
  selectedClub: null,

  setSelectedClub: (club) => set({ selectedClub: club }),

  addClub: (club) =>
    set((state) => ({
      clubs: [
        ...state.clubs,
        {
          ...club,
          id: crypto.randomUUID(),
          members: Number(club.members) || 0,
          about: club.about || '',
          imageUrl: club.imageUrl || '',
        },
      ],
    })),

  updateClub: (id, updates) =>
    set((state) => ({ clubs: state.clubs.map((c) => (c.id === id ? { ...c, ...updates } : c)) })),

  deleteClub: (id) => set((state) => ({ clubs: state.clubs.filter((c) => c.id !== id) })),

  approveClub: (id) =>
    set((state) => {
      const item = state.approveQueue.find((q) => q.id === id)
      if (!item) return {}
      return {
        approveQueue: state.approveQueue.filter((q) => q.id !== id),
        clubs: [
          ...state.clubs,
          { id: item.id, name: item.name, leader: item.leader, members: 0, about: '', imageUrl: '' },
        ],
      }
    }),

  rejectClub: (id) => set((state) => ({ approveQueue: state.approveQueue.filter((q) => q.id !== id) })),
}))


