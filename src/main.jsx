import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import contactsPage from './Pages/contactsPage';
import aboutPage from './Pages/aboutPage';
import ErrorPage from './Pages/notFound.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "contacts",
    element: <contactsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
