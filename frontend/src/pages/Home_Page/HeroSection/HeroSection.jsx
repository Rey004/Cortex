import React from 'react'
import './heroSection.css'
import Button from '../../../components/Button/Button'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">🤖</span>
          <span className="badge-text">AI-Powered Image Generation</span>
        </div>
        
        <h1>
          Your <span className="highlight"> Imagination</span>, Instantly 
          <span className="highlight secondary">  Visualized</span> . 
        </h1>
        
        <p className="sub-headline">
          Cortex harnesses the power of advanced AI to transform your text prompts into stunning, 
          unique visuals in seconds. Experience the future of creative content generation.
        </p>
        
        <div className="cta-buttons">
          <Button name="Get Started" variant='primary' link='/generator' />
          <Button name="Explore Gallery" variant='secondary' link='/gallery' />
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Images Generated</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
