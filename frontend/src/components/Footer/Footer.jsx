import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    Made with 
                    <span className="heart-icon">💙</span>
                    by 
                    <a 
                        href="https://github.com/Rey004" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Revanshu
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
