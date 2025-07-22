import React from 'react';
import './showcaseSection.css';

const ShowcaseSection = () => {
    return (
        <section className="showcase-section">
            <div className="section-container">
                <div className="section-header">
                    <h2>Showcase <span className="highlight">Preview</span></h2>
                    <p className="section-description">
                        Discover the limitless possibilities of AI-generated art. From photorealistic portraits 
                        to abstract masterpieces, see what our community creates every day.
                    </p>
                </div>

                <div className="showcase-grid">
                    <div className="showcase-item item-1">
                        <div className="image-placeholder">
                            <div className="placeholder-content">
                                <span>AI Portrait</span>
                                <p>Photorealistic human portrait with dramatic lighting</p>
                            </div>
                        </div>
                        <div className="item-overlay">
                            <div className="overlay-content">
                                <h4>Ethereal Portrait</h4>
                                <p>"A serene woman with flowing hair, bathed in golden light"</p>
                            </div>
                        </div>
                    </div>

                    <div className="showcase-item item-2">
                        <div className="image-placeholder">
                            <div className="placeholder-content">
                                <span>Digital Art</span>
                                <p>Futuristic cityscape with neon lights</p>
                            </div>
                        </div>
                        <div className="item-overlay">
                            <div className="overlay-content">
                                <h4>Neon Metropolis</h4>
                                <p>"Cyberpunk city at night with glowing skyscrapers"</p>
                            </div>
                        </div>
                    </div>

                    <div className="showcase-item item-3">
                        <div className="image-placeholder">
                            <div className="placeholder-content">
                                <span>Nature Scene</span>
                                <p>Mystical forest with ethereal atmosphere</p>
                            </div>
                        </div>
                        <div className="item-overlay">
                            <div className="overlay-content">
                                <h4>Enchanted Forest</h4>
                                <p>"Ancient trees with magical glowing particles"</p>
                            </div>
                        </div>
                    </div>

                    <div className="showcase-item item-4">
                        <div className="image-placeholder">
                            <div className="placeholder-content">
                                <span>Abstract Art</span>
                                <p>Colorful geometric patterns and shapes</p>
                            </div>
                        </div>
                        <div className="item-overlay">
                            <div className="overlay-content">
                                <h4>Geometric Dreams</h4>
                                <p>"Abstract composition with vibrant colors"</p>
                            </div>
                        </div>
                    </div>

                    <div className="showcase-item item-5">
                        <div className="image-placeholder">
                            <div className="placeholder-content">
                                <span>Fantasy Art</span>
                                <p>Mythical creature in magical setting</p>
                            </div>
                        </div>
                        <div className="item-overlay">
                            <div className="overlay-content">
                                <h4>Dragon's Realm</h4>
                                <p>"Majestic dragon soaring through cloudy skies"</p>
                            </div>
                        </div>
                    </div>

                    <div className="showcase-item item-6">
                        <div className="image-placeholder">
                            <div className="placeholder-content">
                                <span>Architecture</span>
                                <p>Modern building with unique design</p>
                            </div>
                        </div>
                        <div className="item-overlay">
                            <div className="overlay-content">
                                <h4>Future Architecture</h4>
                                <p>"Minimalist building with glass and steel"</p>
                            </div>
                        </div>
                    </div>

                    <div className="showcase-item item-7">
                        <div className="image-placeholder">
                            <div className="placeholder-content">
                                <span>Space Art</span>
                                <p>Cosmic scene with stars and nebula</p>
                            </div>
                        </div>
                        <div className="item-overlay">
                            <div className="overlay-content">
                                <h4>Cosmic Wonder</h4>
                                <p>"Spiral galaxy with brilliant star formation"</p>
                            </div>
                        </div>
                    </div>

                    <div className="showcase-item item-8">
                        <div className="image-placeholder">
                            <div className="placeholder-content">
                                <span>Steampunk</span>
                                <p>Victorian-era mechanical contraption</p>
                            </div>
                        </div>
                        <div className="item-overlay">
                            <div className="overlay-content">
                                <h4>Steam Machinery</h4>
                                <p>"Intricate clockwork device with brass gears"</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="showcase-footer">
                    <p>Join thousands of creators and start generating your masterpiece today</p>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
