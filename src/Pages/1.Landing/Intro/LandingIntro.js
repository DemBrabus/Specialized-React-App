import React from 'react';
import './LandingIntro.scss';
import { Link } from 'react-router-dom';

export default function LandingIntro() {
    return (
        <div className='LandingIntro'>
            <p className='LandingIntro-Title'>SPECIALIZED MTB</p>
            <p className='LandingIntro-Text'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='LandingIntro-Button'>
                <Link to='/inside-specialized' className='LandingIntro-ButtonLink'>
                    OUR STORY
                </Link> 
            </div>
        </div>
    )
}
