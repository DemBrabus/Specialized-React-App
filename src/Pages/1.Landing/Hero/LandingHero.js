import React from 'react';
import './LandingHero.scss';
import { Link } from 'react-router-dom';

export default function LandingHero() {
    return (
        <div className='Landing-Hero'>
            

                <div className='Landing-Hero-Content'>

                    <div className='Landing-Hero-TitleWrap'>
                        <p className='Landing-Hero-Title'>WE HAVE</p>
                        <p className='Landing-Hero-Title'>THE WORKS</p>
                    </div>

                    <p className='Landing-Hero-Text'>ITS ALL FUN AND GAMES UNTIL YOU CATCH TOO MUCH AIR</p>

                    <Link to='/shop/s-works/s-works-demo-8' className='Landing-Hero-Button'>DEMO 8 FSR</Link>

                </div>

                <Link to='/shop/s-works' className='Landing-Hero-BottomHookWrap'>
                    <p className='Landing-Hero-BottomHook'>TAKE A DEEPER LOOK AT THE</p>
                    <p className='Landing-Hero-BottomHook Bolder'>2019 S-WORKS LINE UP</p>
                </Link>

            
        </div>
    )
}
