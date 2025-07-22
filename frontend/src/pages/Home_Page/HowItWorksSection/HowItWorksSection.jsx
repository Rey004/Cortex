import React from 'react';
import './howItWorksSection.css';

const HowItWorksSection = () => {
    return (
        <section className="how-it-works-section">
            <div className="section-container">
                <div className="section-header">
                    <h2>How <span className="highlight">It Works</span></h2>
                    <p className="section-description">
                        Transform your ideas into stunning visuals with our advanced AI technology.
                        Simple, fast, and extraordinarily powerful.
                    </p>
                </div>

                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-icon">
                            <div className="step-number">1</div>
                        </div>
                        <div className="step-content">
                            <h3>Describe Your Vision</h3>
                            <p>
                                <span className="text-highlight">Input your creative ideas</span> using natural language. 
                                Our AI understands context, style, and artistic nuances to bring your vision to life.
                            </p>
                        </div>
                        <div className="step-decoration"></div>
                    </div>

                    <div className="step-card">
                        <div className="step-icon">
                            <div className="step-number">2</div>
                        </div>
                        <div className="step-content">
                            <h3>AI Processing Magic</h3>
                            <p>
                                Our <span className="text-highlight">advanced neural networks</span> analyze your prompt 
                                and generate multiple high-quality variations for you to choose from.
                            </p>
                        </div>
                        <div className="step-decoration"></div>
                    </div>

                    <div className="step-card">
                        <div className="step-icon">
                            <div className="step-number">3</div>
                        </div>
                        <div className="step-content">
                            <h3>Download & Share</h3>
                            <p>
                                <span className="text-highlight">Get your masterpiece</span> in high resolution. 
                                Download, share, or continue refining until it's exactly what you envisioned.
                            </p>
                        </div>
                        <div className="step-decoration"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
