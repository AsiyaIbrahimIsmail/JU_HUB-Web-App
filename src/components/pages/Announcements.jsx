import React, { useState } from 'react'
import { MessageCircle, ThumbsUp, Trash2, Pencil, Filter } from 'lucide-react'
import CreateAnnouncement from '../announcements/CreateAnnouncement.jsx'
import EditAnnouncement from '../announcements/EditAnnouncement.jsx'
import DeleteAnnouncement from '../announcements/DeleteAnnouncement.jsx'
import { useAnnouncementsStore } from '../../app/announcementsStore.js'

export default function Announcements() {
  const { items, add, update, remove } = useAnnouncementsStore()
  const [editItem, setEditItem] = useState(null)
  const [deleteId, setDeleteId] = useState(null)
  const [showCreate, setShowCreate] = useState(false)

  return (
    <div className="p-4 sm:p-6 bg-[#f7f9fb] min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-blue-50 transition">
          <Filter className="text-blue-400 w-5 h-5" />
        </button>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700" onClick={() => setShowCreate(true)}>
          New Announcement
        </button>
      </div>

      <div className="space-y-6">
        {items.map((a) => (
          <div key={a.id} className="bg-white border border-blue-200 rounded-xl shadow hover:shadow-md transition-shadow duration-200 p-4 sm:p-6 relative">
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="hover:bg-blue-50 rounded-full p-1" aria-label="Edit" onClick={() => setEditItem(a)}>
                <Pencil className="text-blue-600 w-5 h-5" />
              </button>
              <button className="hover:bg-red-50 rounded-full p-1" aria-label="Delete" onClick={() => setDeleteId(a.id)}>
                <Trash2 className="text-red-500 w-5 h-5" />
              </button>
            </div>
            {/* author row */}
            <div className="flex items-center gap-3">
              <img src={a.avatarUrl} alt={a.authorName} className="w-11 h-11 rounded-full border border-gray-200 object-cover" />
              <div>
                <div className="font-medium text-gray-800 text-sm">{a.authorName || 'Faculty-Admin'}</div>
                <div className="text-xs text-gray-500">{new Date(a.createdAt || Date.now()).toLocaleDateString()}</div>
              </div>
            </div>
            <h2 className="mt-3 mb-2 font-bold text-[17px] text-gray-900">{a.title}</h2>
            <div className="text-gray-700 text-[15px] mb-3 whitespace-pre-line">{a.description}</div>
            <div className="text-xs text-gray-500">Audience: {a.audience?.faculty || 'All'} • {a.audience?.department || 'All'} • {a.audience?.batch || 'All'}</div>
            <div className="flex items-center gap-4 mt-4">
              <button className="flex items-center gap-1 rounded-full px-3 py-1 text-white bg-purple-500 hover:bg-purple-600 text-sm font-medium transition shadow-sm">
                <ThumbsUp className="w-4 h-4 mr-1" />
                0
              </button>
              <button className="flex items-center gap-1 rounded-full px-3 py-1 text-gray-500 bg-gray-100 hover:bg-gray-200 text-sm font-medium transition shadow-sm">
                <MessageCircle className="w-4 h-4 mr-1" />
                Comment
              </button>
            </div>
          </div>
        ))}
      </div>

      {showCreate && (
        <CreateAnnouncement onClose={() => setShowCreate(false)} onSubmit={(data) => { add(data); setShowCreate(false) }} />
      )}

      {editItem && (
        <EditAnnouncement onClose={() => setEditItem(null)} data={editItem} onSubmit={(data) => { update(editItem.id, data); setEditItem(null) }} />
      )}

      {deleteId && (
        <DeleteAnnouncement onCancel={() => setDeleteId(null)} onDelete={() => { remove(deleteId); setDeleteId(null) }} />
      )}
    </div>
  )
}