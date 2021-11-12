import React, { useState } from 'react'
import './header.css'

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false)
  return (
    <header style={{ width: '100%' }}>
      <nav>
        <ul className="menu">
          <li className="logo">
            <a
              href="#"
              style={{
                fontFamily: 'Pacifico,cursive',
                color: 'violet',
                fontSize: '25px',
              }}
            >
              {/* <img src="../../assets/logo.jpg" alt="logo" /> */}
              Watch Movie
            </a>
          </li>
          <li className={`item ${displayMenu && 'active'}`}>
            <a href="#">Home</a>
          </li>
          <li className={`item ${displayMenu && 'active'}`}>
            <a href="#">Favourites</a>
          </li>

          <li className="toggle" onClick={() => setDisplayMenu(!displayMenu)}>
            <span className="bars"></span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
