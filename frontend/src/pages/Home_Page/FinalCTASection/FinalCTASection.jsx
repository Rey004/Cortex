import React from 'react';
import './finalCTASection.css';
import Button from '../../../components/Button/Button';

const FinalCTASection = () => {
    return (
        <section className="final-cta-section">
            <div className="section-container">
                <div className="cta-content">
                    <div className="cta-badge">
                        <span className="badge-icon">⚡</span>
                        <span className="badge-text">Start Creating Today</span>
                    </div>
                    
                    <div className="cta-horizontal-layout">
                        <div className="cta-left-content">
                            <h2>Ready to <span className="highlight">Create</span> Amazing Images?</h2>
                            
                            <p className="cta-description">
                                Join <span className="highlight-text">10,000+</span> creators who are already turning their ideas into stunning visuals. 
                                <strong>No credit card required</strong> to get started.
                            </p>
                        </div>
                        
                        <div className="cta-center-content">
                            <div className="cta-features">
                                <div className="feature-item">
                                    <span className="feature-icon">🎨</span>
                                    <span className="feature-text">AI-Powered</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">⚡</span>
                                    <span className="feature-text">Instant Results</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">🔥</span>
                                    <span className="feature-text">High Quality</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="cta-right-content">
                            <div className="cta-button-container">
                                <Button
                                    name='Get 10 Free Credits'
                                    variant="primary"
                                    link="/generator"
                                />
                                <p className="cta-note">
                                    <span className="note-icon">🎁</span>
                                    Free credits • No signup required
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cta-decoration">
                    <div className="decoration-circle"></div>
                    <div className="decoration-square"></div>
                    <div className="decoration-triangle"></div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTASection;
