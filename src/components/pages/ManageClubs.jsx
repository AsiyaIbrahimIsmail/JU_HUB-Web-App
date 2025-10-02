import { useState } from 'react'
import { useClubsStore } from '../../app/clubsStore.js'

export default function ManageClubs() {
  const { clubs, approveQueue, addClub, updateClub, deleteClub, approveClub, rejectClub } = useClubsStore()
  const [tab, setTab] = useState('manage')
  const [showAdd, setShowAdd] = useState(false)
  const [editClub, setEditClub] = useState(null)
  const [deleteId, setDeleteId] = useState(null)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Manage clubs</h1>
        <button
          className="grid h-10 w-10 place-items-center rounded-full bg-emerald-600 text-white shadow hover:bg-emerald-700"
          onClick={() => setShowAdd(true)}
          aria-label="Add club"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
            <path strokeWidth="2" d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-3">
        <button
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm ring-1 ${
            tab === 'manage'
              ? 'bg-blue-600 text-white ring-blue-400 shadow'
              : 'bg-white text-gray-700 ring-gray-200 hover:bg-gray-50'
          }`}
          onClick={() => setTab('manage')}
        >
          <span className="grid h-5 w-5 place-items-center rounded-md bg-white/20 text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
              <path strokeWidth="2" d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </span>
          Manage clubs
        </button>
        <button
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm ring-1 ${
            tab === 'queue'
              ? 'bg-blue-50 text-blue-700 ring-blue-200'
              : 'bg-white text-gray-700 ring-gray-200 hover:bg-gray-50'
          }`}
          onClick={() => setTab('queue')}
        >
          <span className="grid h-5 w-5 place-items-center rounded-md bg-blue-600/10 text-blue-700">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
              <path strokeWidth="2" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM2 22a10 10 0 1 1 20 0Z" />
            </svg>
          </span>
          Approve Queue
        </button>
      </div>

      {tab === 'manage' ? (
        <ClubsTable
          rows={clubs}
          onView={(row) => alert(`${row.name} details`)}
          onEdit={(row) => setEditClub(row)}
          onDelete={(row) => setDeleteId(row.id)}
        />
      ) : (
        <ApproveTable
          rows={approveQueue}
          onApprove={(row) => approveClub(row.id)}
          onReject={(row) => rejectClub(row.id)}
        />
      )}

      {showAdd && (
        <ClubModal
          title="Add New Club"
          onClose={() => setShowAdd(false)}
          onSubmit={(data) => {
            addClub(data)
            setShowAdd(false)
          }}
        />
      )}

      {editClub && (
        <ClubModal
          title="Edit Club"
          initial={{ name: editClub.name, leader: editClub.leader, members: editClub.members, about: editClub.about, imageUrl: editClub.imageUrl }}
          onClose={() => setEditClub(null)}
          onSubmit={(data) => {
            updateClub(editClub.id, data)
            setEditClub(null)
          }}
        />
      )}

      {deleteId && (
        <DeleteModal
          title="Delete Club?"
          message="Are you sure you want to delete this? This action cannot be undone."
          onCancel={() => setDeleteId(null)}
          onConfirm={() => {
            deleteClub(deleteId)
            setDeleteId(null)
          }}
        />
      )}
    </div>
  )
}

function ClubsTable({ rows, onView, onEdit, onDelete }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 font-medium">Club Name</th>
            <th className="px-4 py-3 font-medium">Members</th>
            <th className="px-4 py-3 font-medium">Club Leader</th>
            <th className="px-4 py-3 font-medium">Image</th>
            <th className="px-4 py-3 font-medium text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="px-4 py-4">{row.name}</td>
              <td className="px-4 py-4 text-gray-600">{row.members}</td>
              <td className="px-4 py-4 text-blue-700">{row.leader}</td>
              <td className="px-4 py-4">
                {row.imageUrl ? (
                  <img src={row.imageUrl} alt="club" className="h-9 w-9 rounded-md object-cover ring-1 ring-gray-200" />
                ) : (
                  <div className="grid h-9 w-9 place-items-center rounded-md bg-gray-100 text-gray-400 ring-1 ring-gray-200">N/A</div>
                )}
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center justify-end gap-3">
                  <IconBtn title="View" color="text-blue-600" onClick={() => onView(row)}>
                    <path strokeWidth="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Zm11 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </IconBtn>
                  <IconBtn title="Edit" color="text-purple-600" onClick={() => onEdit(row)}>
                    <path strokeWidth="2" d="M4 13.5V20h6.5l9-9-6.5-6.5-9 9Z" />
                  </IconBtn>
                  <IconBtn title="Delete" color="text-red-600" onClick={() => onDelete(row)}>
                    <path strokeWidth="2" d="M3 6h18M9 6v12m6-12v12M5 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14M9 6l1-2h4l1 2" />
                  </IconBtn>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ApproveTable({ rows, onApprove, onReject }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 font-medium">Club Name</th>
            <th className="px-4 py-3 font-medium">Club Leader</th>
            <th className="px-4 py-3 font-medium text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="px-4 py-4">{row.name}</td>
              <td className="px-4 py-4 text-blue-700">{row.leader}</td>
              <td className="px-4 py-4">
                <div className="flex items-center justify-end gap-3">
                  <button
                    className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white shadow hover:bg-emerald-700"
                    onClick={() => onApprove(row)}
                  >
                    Approve
                  </button>
                  <button
                    className="rounded-lg bg-red-500 px-3 py-1.5 text-xs font-medium text-white shadow hover:bg-red-600"
                    onClick={() => onReject(row)}
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function IconBtn({ title, color, onClick, children }) {
  return (
    <button
      className={`grid h-8 w-8 place-items-center rounded-full bg-white ring-1 ring-gray-200 shadow-sm hover:bg-gray-50 ${color}`}
      title={title}
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
        {children}
      </svg>
    </button>
  )
}

function Field({ label, children }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-gray-700">{label}</span>
      {children}
    </label>
  )
}

function ClubModal({ title, initial = { name: '', leader: '', members: '', about: '', imageUrl: '' }, onClose, onSubmit }) {
  const [form, setForm] = useState(initial)
  const [preview, setPreview] = useState(initial.imageUrl || '')

  function onFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const url = String(reader.result || '')
      setPreview(url)
      setForm({ ...form, imageUrl: url })
    }
    reader.readAsDataURL(file)
  }
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative w-full max-w-3xl rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100">
        <h2 className="mb-6 text-2xl font-semibold">{title}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Field label="Club Name">
              <input
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter club name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </Field>
            <Field label="Club Leader">
              <input
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter club leader's name"
                value={form.leader}
                onChange={(e) => setForm({ ...form, leader: e.target.value })}
              />
            </Field>
            <Field label="Members">
              <input
                type="number"
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
                value={form.members}
                onChange={(e) => setForm({ ...form, members: e.target.value })}
              />
            </Field>
          </div>

          <div className="space-y-3">
            <div className="grid h-48 place-items-center rounded-xl border-2 border-dashed border-blue-300 bg-blue-50/30 p-3">
              {preview ? (
                <img src={preview} alt="preview" className="h-full w-full rounded-lg object-cover" />
              ) : (
                <div className="text-center">
                  <div className="font-medium">Upload Club Image</div>
                  <div className="mt-1 text-xs text-gray-500">Click or drag and drop to upload an image</div>
                  <label className="mt-4 inline-block cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700">
                    <input type="file" accept="image/*" className="hidden" onChange={onFile} />
                    Upload Image
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Field label="About">
            <textarea
              rows={5}
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="About the club"
              value={form.about}
              onChange={(e) => setForm({ ...form, about: e.target.value })}
            />
          </Field>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200" onClick={onClose}>
            Cancel
          </button>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700" onClick={() => onSubmit(form)}>
            {title.includes('Edit') ? 'Save' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  )
}

function DeleteModal({ title, message, onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onCancel} />
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
        <div className="mb-6 grid place-items-center">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-red-100 text-red-500 shadow">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
              <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 4v13l10 5 10-5V4l-10 5Z" />
            </svg>
          </div>
        </div>
        <h3 className="text-center text-2xl font-semibold text-red-600">{title}</h3>
        <p className="mt-2 text-center text-gray-600">{message}</p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-lg bg-red-50 px-6 py-2 text-sm font-semibold text-gray-800 shadow hover:bg-red-100" onClick={onCancel}>
            Cancel
          </button>
          <button className="rounded-lg bg-red-600 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-red-700" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}



