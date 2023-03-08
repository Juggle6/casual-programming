import './App.css'
import Home from './Pages/home/home.jsx'
import DesignPage from './Pages/designPage/design'
import Menu from './components/NavBar/menu'
import Timeline from './components/timeline/timeline.jsx'
import ContactsPage from './Pages/contactsPage/contactsPage.jsx';
import AboutPage from './Pages/aboutPage/aboutPage.jsx';
import ErrorPage from './Pages/notFound/notFound.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Design" element={<DesignPage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Contacts" element={<ContactsPage />} />
          </Routes>
        </BrowserRouter>
    )
}

export default App