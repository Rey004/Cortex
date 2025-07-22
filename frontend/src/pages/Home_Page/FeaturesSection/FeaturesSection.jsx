import React from 'react';
import './featuresSection.css';

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className="section-container">
                <div className="section-header">
                    <h2>Powerful <span className="highlight">Features</span></h2>
                    <p className="section-description">
                        Experience the next generation of AI image creation with advanced features 
                        designed for creators, artists, and visionaries.
                    </p>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" 
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 21L8.5 19L10 18.5L8.5 18L8 16L7.5 18L6 18.5L7.5 19L8 21Z" 
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M19 10L19.5 8.5L21 8L19.5 7.5L19 6L18.5 7.5L17 8L18.5 8.5L19 10Z" 
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="feature-content">
                            <h3>AI-Powered Generation</h3>
                            <p>
                                Leverage <span className="feature-highlight">state-of-the-art neural networks</span> 
                                to create stunning, photorealistic images from simple text descriptions.
                            </p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" 
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" 
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 7H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 11H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="feature-content">
                            <h3>Multiple Art Styles</h3>
                            <p>
                                Choose from <span className="feature-highlight">dozens of artistic styles</span> 
                                including photorealistic, oil painting, digital art, and abstract compositions.
                            </p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 9V5A3 3 0 0 0 11 2A3 3 0 0 0 8 5V9" 
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.5 9H6.5L7 19H15L15.5 9Z" 
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 13V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13 13V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="feature-content">
                            <h3>High Resolution Output</h3>
                            <p>
                                Generate images in <span className="feature-highlight">ultra-high resolution</span> 
                                up to 4K quality, perfect for professional use and large-scale printing.
                            </p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" 
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="feature-content">
                            <h3>Lightning Fast</h3>
                            <p>
                                Experience <span className="feature-highlight">blazing-fast generation speeds</span> 
                                with results in seconds, not minutes. Perfect for rapid prototyping and iteration.
                            </p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 4H18A2 2 0 0 1 20 6V18A2 2 0 0 1 18 20H6A2 2 0 0 1 4 18V6A2 2 0 0 1 6 4H8" 
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 2H9A1 1 0 0 0 8 3V5A1 1 0 0 0 9 6H15A1 1 0 0 0 16 5V3A1 1 0 0 0 15 2Z" 
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="feature-content">
                            <h3>Batch Processing</h3>
                            <p>
                                Generate <span className="feature-highlight">multiple variations simultaneously</span> 
                                to explore different creative directions and choose the perfect result.
                            </p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22S8 18 8 13A4 4 0 0 1 12 9A4 4 0 0 1 16 13C16 18 12 22 12 22Z" 
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 13A1 1 0 1 0 12 11A1 1 0 0 0 12 13Z" 
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3 7V5A2 2 0 0 1 5 3H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17 3H19A2 2 0 0 1 21 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 17V19A2 2 0 0 1 19 21H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7 21H5A2 2 0 0 1 3 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="feature-content">
                            <h3>Smart Composition</h3>
                            <p>
                                Benefit from <span className="feature-highlight">intelligent scene composition</span> 
                                that automatically optimizes lighting, perspective, and visual balance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
