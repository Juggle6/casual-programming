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
                <Link to="/about">about</Link>
                <Link to="/contacts">contacts</Link>         
              </div>
        </div>
    </div>
    )
}