import { AlertTriangle } from 'lucide-react'

export default function DeleteAnnouncement({ onDelete, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
        <div className="mb-6 grid place-items-center">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-red-100 text-red-500 shadow">
            <AlertTriangle className="h-7 w-7" />
          </div>
        </div>
        <h3 className="text-center text-2xl font-semibold text-gray-900">Delete Announcement</h3>
        <p className="mt-3 text-center text-gray-700">Are you sure you want to delete this announcement?</p>
        <p className="text-center text-gray-500">This action cannot be undone.</p>
        <div className="mt-8 flex justify-center gap-6">
          <button className="rounded-lg bg-red-600 px-8 py-2 text-sm font-semibold text-white shadow hover:bg-red-700" onClick={onDelete}>
            Delete
          </button>
          <button className="rounded-lg bg-gray-200 px-8 py-2 text-sm font-semibold text-gray-800 shadow hover:bg-gray-300" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}