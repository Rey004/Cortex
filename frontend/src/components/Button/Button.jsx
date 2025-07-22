import React from 'react'
import './button.css'

const Button = ({ 
  name = "Click Me", 
  onClick, 
  variant = "primary", 
  disabled = false, 
  link = null,
  target = "_blank",
  rel = "noopener noreferrer"
}) => {
  // If link prop is provided, render as anchor tag
  if (link) {
    return (
      <a 
        href={link}
        target={target}
        rel={rel}
        className={`custom-button ${variant} ${disabled ? 'disabled' : ''}`}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
      >
        {name}
      </a>
    )
  }

  // Otherwise render as button
  return (
    <button 
      className={`custom-button ${variant}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  )
}

export default Button