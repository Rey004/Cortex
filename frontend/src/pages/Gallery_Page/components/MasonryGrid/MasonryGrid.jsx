import React, { useState, useEffect, useRef } from 'react'
import './masonryGrid.css'

const MasonryGrid = ({ images, onImageClick, loading, onLoadMore }) => {
  const [hoveredImage, setHoveredImage] = useState(null)
  const gridRef = useRef(null)

  // Simplified Bento layout pattern - reliable and clean
  const getBentoClass = (index) => {
    // Simple 8-item pattern that repeats
    const patterns = [
      'bento-large',   // 0: 2x2 feature
      'bento-small',   // 1: 1x1 
      'bento-small',   // 2: 1x1
      'bento-medium',  // 3: 1x2 tall
      'bento-small',   // 4: 1x1
      'bento-small',   // 5: 1x1
      'bento-medium',  // 6: 1x2 tall  
      'bento-small'    // 7: 1x1
    ];
    
    return patterns[index % patterns.length];
  };

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (loading) return

      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      if (scrollTop + windowHeight >= docHeight - 1000) {
        onLoadMore()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading, onLoadMore])

  if (loading && images.length === 0) {
    return (
      <div className="masonry-loading">
        <div className="bento-grid">
          {[...Array(12)].map((_, index) => (
            <div key={index} className={`loading-card ${getBentoClass(index)}`}>
              <div className="loading-shimmer"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="masonry-section">
      <div className="bento-grid" ref={gridRef}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`masonry-item ${getBentoClass(index)} ${hoveredImage === image.id ? 'hovered' : ''}`}
            onClick={() => onImageClick(image)}
            onMouseEnter={() => setHoveredImage(image.id)}
            onMouseLeave={() => setHoveredImage(null)}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="image-container">
              <img
                src={image.imageUrl}
                alt={image.prompt}
                className="gallery-image"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="image-overlay">
                <div className="overlay-content">
                  <div className="prompt-snippet">
                    "{image.prompt.length > 80 ? `${image.prompt.substring(0, 80)}...` : image.prompt}"
                  </div>
                  <div className="creator-info">
                    <div className="creator-name">@{image.creator}</div>
                    <div className="image-stats">
                      <span className="likes">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
                        </svg>
                        {image.likes}
                      </span>
                      <span className="time">{image.createdAt}</span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Click Indicator - View Details Button */}
                <div className="click-indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
                  </svg>
                </div>
              </div>
              
              {/* Style Badge */}
              <div className="style-badge">
                {image.style}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Loading more indicator */}
      {loading && images.length > 0 && (
        <div className="load-more-indicator">
          <div className="loading-spinner"></div>
          <span>Loading more amazing artwork...</span>
        </div>
      )}
      
      {/* No results message */}
      {!loading && images.length === 0 && (
        <div className="no-results">
          <div className="no-results-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </div>
          <h3>No artwork found</h3>
          <p>Try adjusting your search terms or explore our popular tags.</p>
        </div>
      )}
    </div>
  )
}

export default MasonryGrid
