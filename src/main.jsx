import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import UserByIdPage from './pages/UserByIdPage.jsx'
import UserAboutPage from './pages/UserAboutPage.jsx'
import './index.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div><h2>Page not found, brudda.</h2></div>
  },
  {
    path: "/abc",
    element: <h1>Page ABC</h1>
  },
  {
    path: "/users/:userId",
    element: <UserByIdPage />
  },
  {
    path: "/users/:userId/about",
    element: <UserAboutPage />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
