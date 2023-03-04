import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import contactsPage from './Pages/contactsPage';
import aboutPage from './Pages/aboutPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
