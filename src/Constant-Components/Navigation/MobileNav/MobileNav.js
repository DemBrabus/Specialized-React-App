import React from 'react';
import './MobileNav.scss';
import { Link } from 'react-router-dom';

export default function MobileNav() {
    return (
        <div className='MobileNav'>
            <div className='MobileNav-TopRow'>
                <p className='MobileNav-ShippingOffer'>FREE SHIPPING ON ALL ORDERS OVER $150.
                </p>
            </div>
            <div className='MobileNav-BottomRow'>
                <div className='MobileNav-LeftIcons'>
                    <div className='MobileNav-LeftIcon MobileNav-MenuIcon'></div>
                    <div className='MobileNav-LeftIcon MobileNav-SearchIcon'></div>
                </div>

                <Link to='/' className='MobileNav-Logo'></Link>

                <div className='MobileNav-RightIcons'>
                    <Link to='/' className='MobileNav-RightIcon MobileNav-UserIcon'></Link>
                    <Link to='/' className='MobileNav-RightIcon MobileNav-CartIcon'></Link>
                </div>
            </div>
        </div>
    )
}
