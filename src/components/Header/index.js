import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false)
  return (
    <header style={{ width: '100%' }}>
      <nav className="navbar">
        <ul className="menu">
          <li className="logo">
            <Link
              to="/"
              style={{
                fontFamily: 'Pacifico,cursive',
                color: 'violet',
                fontSize: '25px',
              }}
            >
              Watch Movie
            </Link>
          </li>
          <NavLink to="/" className={`item ${displayMenu && 'display'}`}>
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/favourite"
            className={`item ${displayMenu && 'display'}`}
          >
            <li>Favourites</li>
          </NavLink>

          <li className="toggle" onClick={() => setDisplayMenu(!displayMenu)}>
            <span className="bars"></span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
