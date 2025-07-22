import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import Button from '../Button/Button'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav>
        <img src="../../assets/logo.webp" alt="Logo" className="navbar-logo" />

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Menu */}
        <ul className={isMenuOpen ? 'active' : ''}>
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/generator" onClick={closeMenu}>Generator</NavLink></li>
          <li><NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink></li>
          <li className="nav-button-item">
            <Button 
              name='Visit Creator' 
              variant="primary"
              link="https://github.com/Rey004" 
              onClick={closeMenu}
            />
          </li>
        </ul>
        
        {/* Desktop Button - Hidden on mobile */}
        <div className="desktop-button">
          <Button 
            name='Visit Creator' 
            variant="tertiary"
            link="https://github.com/Rey004" 
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>
    </>
  )
}

export default Navbar
