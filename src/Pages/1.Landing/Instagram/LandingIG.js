import React from 'react';
import './LandingIG.scss';
import { Link } from 'react-router-dom';

export default function LandingIG() {
    return (
        <div className='LandingIG'>

            <p className='LandingIG-Title'>FOLLOW US ON INSTAGRAM</p>

            <div className='LandingIG-IGInfoWrap'>
                <div className='LandingIG-InfoImage'></div>
                <a href='https://www.instagram.com/iamspecialized_mtb/' target='_blank' className='LandingIG-IGInfo'>iamspecialized_mtb</a>
                <span className='Verified'></span>
            </div>

            <div className='LandingIG-ImagesWrap'>
                <div className='LandingIG-ImagesRow'>
                    <div className='LandingIG-Image LandingIG-Image1'></div>
                    <div className='LandingIG-Image LandingIG-Image2'></div>
                    <div className='LandingIG-Image LandingIG-Image3'></div>
                </div>
                <div className='LandingIG-ImagesRow'>
                    <div className='LandingIG-Image LandingIG-Image4'></div>
                    <div className='LandingIG-Image LandingIG-Image5'></div>
                    <div className='LandingIG-Image LandingIG-Image6'></div>
                </div>
            </div>

            
            
        </div>
    )
}
