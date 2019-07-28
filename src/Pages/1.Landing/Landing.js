import React from 'react';
import './Landing.scss';
import LandingHero from './Hero/LandingHero';
import HeroAddOn from './Hero-MobileAddOn/HeroAddOn';
import LandingCategories from './CategorySection/LandingCategories';
import LandingBigImage from './BigImage/LandingBigImage';
import LandingVideo from './Video/LandingVideo';
import LandingIG from './Instagram/LandingIG';
import LandingIntro from './Intro/LandingIntro';

export default function Landing() {
    return (
        <div className='Landing'>

            <LandingHero />
            <LandingIntro />
            <LandingCategories />
            <LandingBigImage />
            <LandingVideo />
            <LandingIG />

        </div>
    )
}
