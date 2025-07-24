import React from 'react'
import { useNavigate } from 'react-router-dom'
import './error.css'

const Error = ({ errorCode = '404', errorMessage = 'Page Not Found' }) => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className="error-page">
      {/* Background Effects */}
      <div className="error-background-effects">
        <div className="glitch-line glitch-line-1"></div>
        <div className="glitch-line glitch-line-2"></div>
        <div className="glitch-line glitch-line-3"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Corner Decorations */}
      <div className="corner-decoration corner-top-left"></div>
      <div className="corner-decoration corner-top-right"></div>

      {/* Scan Line Effect */}
      <div className="scan-line"></div>

      {/* Main Error Content */}
      <div className="error-container">
        <div className="error-content">
          {/* Error Code Display */}
          <div className="error-code-section">
            <div className="error-code-wrapper">
              <span className="error-code">{errorCode}</span>
              <div className="error-code-glitch" data-text={errorCode}>{errorCode}</div>
            </div>
            <div className="error-pulse"></div>
          </div>

          {/* Error Message */}
          <div className="error-message-section">
            <h1 className="error-title">
              <span className="highlight">System</span> Error
            </h1>
            <p className="error-subtitle">{errorMessage}</p>
            <div className="error-description">
              <p>
                It seems like you've ventured into <span className="accent">uncharted digital territory</span>. 
                Our AI couldn't locate the page you're looking for.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="error-actions">
            <button 
              className="error-btn primary-btn"
              onClick={handleGoHome}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
              Return Home
            </button>
            <button 
              className="error-btn secondary-btn"
              onClick={handleGoBack}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5"/>
                <path d="M12 19l-7-7 7-7"/>
              </svg>
              Go Back
            </button>
          </div>

          {/* Additional Info */}
          <div className="error-info">
            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Error Type</span>
                  <span className="info-value">Page Not Found</span>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Timestamp</span>
                  <span className="info-value">{new Date().toLocaleTimeString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error
