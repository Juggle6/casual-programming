import './menu.css'
import { Link } from 'react-router-dom';
export default function Menu() {
    return (
    <div className="navContainer">
      <div className="navBar">
          <div className="hamburgerMenu">
            <img src="/images/hamburger.svg" alt="Burger" />
          </div>
              <div className="navItems">
                <Link to="/">Home</Link>
                <Link to="/Design">Design</Link>
                <Link to="/About">About</Link>
                <Link to="/Contacts">Contacts</Link>
                <Link to="/Creators">Creators</Link>         
              </div>
        </div>
    </div>
    )
}