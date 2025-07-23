import React from 'react'
import './loadingAnimation.css'

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="gradient-orb"></div>
        <div className="loading-text">
          <h3>Creating your masterpiece...</h3>
          <p>This usually takes 30-60 seconds</p>
        </div>
        <div className="loading-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="floating-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
    </div>
  )
}

export default LoadingAnimation
