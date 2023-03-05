import './App.css';
import Home from './Pages/home/home.jsx';
import Menu from './components/NavBar/menu';
import Timeline from './components/timeline/timeline.jsx';
import ContactsPage from './Pages/contactsPage/contactsPage.jsx';
import AboutPage from './Pages/aboutPage/aboutPage.jsx';
import FancyPage from './Pages/fancyPage/fancy.jsx';
import ErrorPage from './Pages/notFound/notFound.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/contacts",
        element: <ContactsPage />,
    },
    {
        path: "/fancy",
        element: <FancyPage />,
    }
]);

function App() {
    return (
        <>
            <Menu />
            <RouterProvider router={router} />
        </>
    )
}

export default App
