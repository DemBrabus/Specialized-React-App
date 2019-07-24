import React from 'react';
import './Landing.scss';
import LandingHero from './Hero/LandingHero';
import HeroAddOn from './Hero-MobileAddOn/HeroAddOn';
import LandingCategories from './CategorySection/LandingCategories';
import LandingBigImage from './BigImage/LandingBigImage';

export default function Landing() {
    return (
        <div className='Landing'>

            <LandingHero />
            <LandingCategories />
            <LandingBigImage />

        </div>
    )
}
