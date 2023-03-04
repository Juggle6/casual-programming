import './App.css'
import Home from './components/home/home.jsx'
import Menu from './components/NavBar/menu'
import Timeline from './components/timeline/timeline.jsx'

function App() {
    return (
        <>
            <header>
                <Menu />
            </header>
            <Home />
            <Timeline />
        </>
    )
}

export default App
