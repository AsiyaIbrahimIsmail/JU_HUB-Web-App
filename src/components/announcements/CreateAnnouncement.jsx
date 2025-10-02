import { X, Image as ImageIcon } from "lucide-react";
import React, { useRef, useState } from "react";

export default function CreateAnnouncement({ onClose, onSubmit }) {
  const fileInput = useRef();
  const [image, setImage] = useState(null);
  const [highPriority, setHighPriority] = useState(false);

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl mx-auto my-6 border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-7 pb-2 border-b border-gray-100">
          <h2 className="text-xl font-semibold">Create Announcement</h2>
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Form */}
        <form
          className="px-7 py-6"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const payload = {
              title: form.title?.value || 'Untitled',
              description: form.description?.value || '',
              highPriority,
              audience: {
                faculty: form.faculty?.value || 'All',
                department: form.department?.value || 'All',
                batch: form.batch?.value || 'All',
              },
              imageUrl: image || '',
            };
            onSubmit?.(payload);
          }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left: Title, Description, Priority */}
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  name="title"
                  type="text"
                  placeholder="Enter Announcement title..."
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  placeholder="Enter Announcement details..."
                  rows={5}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <label className="text-sm font-medium">High Priority</label>
                <span className="text-xs text-gray-500">Mark as urgent announcement</span>
                <button
                  type="button"
                  onClick={() => setHighPriority((v) => !v)}
                  className={`ml-2 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    highPriority ? "bg-blue-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${highPriority ? "translate-x-5" : "translate-x-1"}`}
                  />
                </button>
              </div>
            </div>

            {/* Right: Image & Target Audience */}
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Image <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <div
                  className="border border-dashed border-gray-300 rounded-lg bg-gray-50 flex flex-col items-center justify-center text-gray-400 h-32 cursor-pointer"
                  onClick={() => fileInput.current.click()}
                >
                  {image ? (
                    <img
                      src={image}
                      alt="Announcement"
                      className="h-full object-contain rounded"
                    />
                  ) : (
                    <>
                      <ImageIcon className="w-8 h-8 mb-2" />
                      <div className="text-sm">Upload Image</div>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    ref={fileInput}
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Target Audience</label>
                <div className="flex flex-col gap-2">
                  <select name="faculty" className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-white text-gray-700 focus:outline-none">
                    <option>Select Faculty</option>
                    <option>Faculty of Science</option>
                    <option>Faculty of Engineering</option>
                  </select>
                  <select name="department" className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-white text-gray-700 focus:outline-none">
                    <option>Select Department</option>
                    <option>Computer Science</option>
                    <option>Electrical Engineering</option>
                  </select>
                  <select name="batch" className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-white text-gray-700 focus:outline-none">
                    <option>Select Batch</option>
                    <option>2022</option>
                    <option>2023</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 mt-8">
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Publish Announcement
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-700 font-medium px-6 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

