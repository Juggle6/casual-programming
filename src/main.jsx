import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ContactsPage from './Pages/contactsPage';
import AboutPage from './Pages/aboutPage';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/contacts",
        element: <ContactsPage />,
    },
    {
        path: "/about",
        element: <AboutPage />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
