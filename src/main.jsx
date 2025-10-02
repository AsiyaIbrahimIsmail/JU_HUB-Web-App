import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import Dashboard from './components/pages/Dashboard.jsx'
import ManageClubs from './components/pages/ManageClubs.jsx'
import Announcements from './components/pages/Announcements.jsx'
import ManageChannels from './components/pages/ManageChannels.jsx'
import ChannelSettings from './components/channels/ChannelSettings.jsx'
import NewPost from './components/channels/NewPost.jsx'
import ChannelDetail from './components/channels/ChannelDetail.jsx'
import ChannelView from './components/channels/ChannelView.jsx'
import ApproveQueue from './components/clubs/ApproveQueue.jsx'
import AddNewClub from './components/clubs/AddNewClub.jsx'
import EditClub from './components/clubs/EditClub.jsx'
import DeleteClub from './components/clubs/DeleteClub.jsx'
import CreateAnnouncement from './components/announcements/CreateAnnouncement.jsx'
import EditAnnouncement from './components/announcements/EditAnnouncement.jsx'
import DeleteAnnouncement from './components/announcements/DeleteAnnouncement.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'clubs', element: <ManageClubs /> },
      { path: 'announcements', element: <Announcements /> },
      { path: 'channels', element: <ManageChannels /> },
      // Sub-pages (dynamic wiring)
      { path: 'channels/settings', element: <ChannelSettings /> },
      { path: 'channels/new', element: <NewPost /> },
      { path: 'channels/:id', element: <ChannelDetail /> },
      { path: 'channels/:id/view', element: <ChannelView /> },
      { path: 'clubs/approve-queue', element: <ApproveQueue /> },
      { path: 'clubs/new', element: <AddNewClub /> },
      { path: 'clubs/:id/edit', element: <EditClub /> },
      { path: 'clubs/:id/delete', element: <DeleteClub /> },
      { path: 'announcements/new', element: <CreateAnnouncement /> },
      { path: 'announcements/:id/edit', element: <EditAnnouncement /> },
      { path: 'announcements/:id/delete', element: <DeleteAnnouncement /> },
    ],
  },
])

const root = createRoot(document.getElementById('app'))
root.render(<RouterProvider router={router} />)
