import React from 'react';
import './LandingCategories.scss';
import { Link } from 'react-router-dom';

export default function LandingCategories() {
    return (
        <div className='LandingCategories'>
            <p className='LandingCategories-Title'>EXPLORE OUR BIKES</p>

            <div className='LandingCategories-WindowWrap'>
                <Link to='/shop/trail' className='LandingCategories-Window LandingCategories-Window1'>
                    <div className='LandingCategories-InnerWindow'></div>
                    <p className='LandingCategories-WindowText'>TRAIL</p>
                </Link>
                <Link to='/shop/downhill' className='LandingCategories-Window LandingCategories-Window2'>
                    <div className='LandingCategories-InnerWindow'></div>
                    <p className='LandingCategories-WindowText'>DOWNHILL</p>
                </Link>
                <Link to='shop/s-works' className='LandingCategories-Window LandingCategories-Window3'>
                    <div className='LandingCategories-InnerWindow'></div>
                    <p className='LandingCategories-WindowText'>S-WORKS</p>
                </Link>
            </div>
        </div>
    )
}
