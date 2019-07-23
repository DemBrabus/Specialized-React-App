import React from 'react';
import './Landing.scss';

export default function Landing() {
    return (
        <div className='Landing'>
            <div className='Landing-Hero'>

                <div className='Landing-Hero-Content'>
                    <div className='Landing-Hero-TitleWrap'>
                        <p className='Landing-Hero-Title'>WE HAVE</p>
                        <p className='Landing-Hero-Title'>THE WORKS</p>
                    </div>
                    <p className='Landing-Hero-Text'>ITS ALL FUN AND GAMES UNTIL YOU CATCH TO MUCH AIR</p>
                    <div className='Landing-Hero-Button'>DEMO 8 FSR</div>
                </div>

                <div className='Landing-Hero-BottomHookWrap'>
                    <p className='Landing-Hero-BottomHook'>TAKE A DEEPER LOOK AT THE</p>
                    <p className='Landing-Hero-BottomHook Bolder'>2019 S-WORKS LINE UP</p>
                </div>

            </div>
        </div>
    )
}
