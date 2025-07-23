import React, { useState } from 'react'
import './searchBar.css'

const SearchBar = ({ onSearch, placeholder, value }) => {
  const [searchValue, setSearchValue] = useState(value || '')

  const handleInputChange = (e) => {
    const newValue = e.target.value
    setSearchValue(newValue)
    onSearch(newValue)
  }

  const handleClear = () => {
    setSearchValue('')
    onSearch('')
  }

  return (
    <div className="search-bar-section">
      <div className="search-container">
        <div className="search-input-wrapper">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          
          <input
            type="text"
            className="search-input"
            placeholder={placeholder}
            value={searchValue}
            onChange={handleInputChange}
          />
          
          {searchValue && (
            <button 
              className="clear-button"
              onClick={handleClear}
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          )}
        </div>
        
        {/* Search suggestions could be added here */}
        <div className="search-suggestions">
          <span className="suggestion-label">Popular:</span>
          <button className="suggestion-tag" onClick={() => {setSearchValue('cyberpunk'); onSearch('cyberpunk')}}>
            cyberpunk
          </button>
          <button className="suggestion-tag" onClick={() => {setSearchValue('fantasy'); onSearch('fantasy')}}>
            fantasy
          </button>
          <button className="suggestion-tag" onClick={() => {setSearchValue('portrait'); onSearch('portrait')}}>
            portrait
          </button>
          <button className="suggestion-tag" onClick={() => {setSearchValue('abstract'); onSearch('abstract')}}>
            abstract
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
