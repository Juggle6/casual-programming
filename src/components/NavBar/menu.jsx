import './menu.css'

export default function Menu() {
    return (
    <div className="navContainer">
      <div className="navBar">
          <div className="hamburgerMenu">
            <img src="/images/hamburger.svg" alt="Burger" />
          </div>
              <div className="navItems">
                <a href="/">Home</a>
                <a href="/Design">Design</a>
                <a href="/about">about</a>
                <a href="/contacts">contacts</a>
              </div>
        </div>
    </div>
    )
}