import React from 'react';
import { createPortal } from 'react-dom';
import './lightbox.css';

const Lightbox = ({ isOpen, onClose, image }) => {
    // Prevent body scroll when lightbox is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !image) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleCopyPrompt = () => {
        navigator.clipboard.writeText(image.prompt).then(() => {
            // TODO: Add toast notification for copy success
            console.log('Prompt copied to clipboard');
        });
    };

    const handleDownload = () => {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = image.imageUrl;
        link.download = `ai-art-${image.id}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const lightboxContent = (
        <div className="lightbox-overlay" onClick={handleBackdropClick}>
            <div className="lightbox-container">
                {/* Close Button */}
                <button className="lightbox-close" onClick={onClose} title="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Image Section */}
                <div className="lightbox-image-section">
                    <div className="lightbox-image-container">
                        <img 
                            src={image.imageUrl} 
                            alt={image.prompt}
                            className="lightbox-image"
                        />
                        
                        {/* Style Badge */}
                        <div className="lightbox-style-badge">
                            {image.style}
                        </div>
                        
                        {/* Download Button */}
                        <button 
                            className="lightbox-download"
                            onClick={handleDownload}
                            title="Download Image"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7,10 12,15 17,10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Details Section */}
                <div className="lightbox-details">
                    <div className="lightbox-header">
                        <h2 className="lightbox-title">AI Generated Art</h2>
                        <div className="lightbox-stats">
                            <div className="stat-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="m9 12 2 2 4-4"/>
                                    <circle cx="12" cy="12" r="9"/>
                                </svg>
                                <span>{image.likes} likes</span>
                            </div>
                            <div className="stat-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                                <span>{image.createdAt}</span>
                            </div>
                        </div>
                    </div>

                    {/* Prompt Section */}
                    <div className="prompt-section">
                        <div className="prompt-header">
                            <h3>Prompt</h3>
                            <button 
                                className="copy-prompt-btn"
                                onClick={handleCopyPrompt}
                                title="Copy to clipboard"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                                    <path d="m5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                                </svg>
                                Copy
                            </button>
                        </div>
                        <div className="prompt-text">
                            {image.prompt}
                        </div>
                    </div>

                    {/* Creator Section */}
                    <div className="creator-section">
                        <div className="creator-avatar">
                            <div className="avatar-placeholder">
                                {image.creator.charAt(0).toUpperCase()}
                            </div>
                        </div>
                        <div className="creator-info">
                            <h4 className="creator-name">{image.creator}</h4>
                            <p className="creator-role">AI Artist</p>
                        </div>
                    </div>

                    {/* Generation Details */}
                    <div className="generation-details">
                        <h3>Generation Details</h3>
                        <div className="details-grid">
                            <div className="detail-item">
                                <span className="detail-label">Style</span>
                                <span className="detail-value">{image.style}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Model</span>
                                <span className="detail-value">DALL-E 3</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Resolution</span>
                                <span className="detail-value">1024x1024</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Created</span>
                                <span className="detail-value">{image.createdAt}</span>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="lightbox-actions">
                        <button className="action-btn primary" onClick={handleDownload}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7,10 12,15 17,10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                            Download
                        </button>
                        <button className="action-btn secondary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                                <polyline points="16,6 12,2 8,6"/>
                                <line x1="12" y1="2" x2="12" y2="15"/>
                            </svg>
                            Share
                        </button>
                        <button className="action-btn secondary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                            </svg>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    // Use createPortal to render the lightbox at the body level, avoiding any container overflow issues
    return createPortal(lightboxContent, document.body);
};

export default Lightbox;
