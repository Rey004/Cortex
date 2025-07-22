import React from 'react';
import './home.css';
import HeroSection from './HeroSection/HeroSection';
import HowItWorksSection from './HowItWorksSection/HowItWorksSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import ShowcaseSection from './ShowcaseSection/ShowcaseSection';
import FinalCTASection from './FinalCTASection/FinalCTASection';

const Home = () => {
    return (
        <div className="home-container">
            <HeroSection />
            <HowItWorksSection />
            <FeaturesSection />
            <ShowcaseSection />
            <FinalCTASection />
        </div>
    );
};

export default Home;
