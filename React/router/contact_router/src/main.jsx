import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Root, { loader as rootLoader } from './routes/root'
import ErrorPage from './error-page'
import Contact from './routes/contact'

/**
 * Creating a browser router and configure the first route
 * This will enble client side routing.The createBrowseRouter uses the
 * DOM History API to update the URL and manage history stack.
 * 
 * The first route is what we often call the 'root route' since the rest
 * of our routes will render inside of it. It will serve as the root layout of
 * the UI.
 */
// An array of routes objects with nested routes in the children property.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
