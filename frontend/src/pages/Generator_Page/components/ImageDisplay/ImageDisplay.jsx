import React from 'react'
import './imageDisplay.css'

const ImageDisplay = ({ images, onDownload }) => {
  const handleDownload = (imageId, imageUrl) => {
    onDownload && onDownload(imageId, imageUrl)
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="image-display-section">
      <div className="images-header">
        <h3>Generated Images</h3>
        <p>Your AI-generated artwork</p>
      </div>
      
      <div className="images-grid">
        {images.map((image, index) => (
          <div 
            key={image.id || index}
            className="image-card"
          >
            <div className="image-wrapper">
              <img 
                src={image.url} 
                alt={`Generated image ${index + 1}`}
                className="generated-image"
                loading="lazy"
              />
              
              {/* Download Button */}
              <button 
                className="download-icon"
                onClick={() => handleDownload(image.id || index, image.url)}
                title="Download Image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </button>
              
              {/* Image Quality Badge */}
              {image.quality && (
                <div className="quality-badge">
                  {image.quality}
                </div>
              )}
            </div>
            
            {/* Image Info */}
            <div className="image-info">
              <p className="image-prompt">{image.prompt || 'Generated Image'}</p>
              <div className="image-meta">
                <span className="image-size">{image.dimensions || '1024×1024'}</span>
                <span className="image-time">{image.createdAt || 'Just now'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageDisplay
