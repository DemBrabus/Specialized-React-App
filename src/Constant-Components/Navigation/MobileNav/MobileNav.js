import React from 'react';
import './MobileNav.scss';
import { Link } from 'react-router-dom';

export default function MobileNav({ ToggleDrawer, ToggleSearch, CloseSearch, SearchStatus }) {


    let MobileSearchFieldClasses = 'MobileNav-SearchDrawer';
    if(SearchStatus){
        MobileSearchFieldClasses = 'MobileNav-SearchDrawer ActiveMobileSearch';
    }


        const handleSubmit = (e) => {
            e.preventDefault();
        }

    return (
        <div className='MobileNav'>
            <div className='MobileNavWrap'>

                <div className='MobileNav-TopRow'>
                    <p className='MobileNav-ShippingOffer'>FREE SHIPPING ON ALL ORDERS OVER $150.
                    </p>
                </div>

                <div className='MobileNav-BottomRow'>
                    <div className='MobileNav-LeftIcons'>
                        <div className='MobileNav-LeftIcon MobileNav-MenuIcon' onClick={ToggleDrawer}></div>
                        <div className='MobileNav-LeftIcon MobileNav-SearchIcon' onClick={ToggleSearch}></div>
                    </div>

                    <Link to='/' className='MobileNav-Logo'></Link>

                    <div className='MobileNav-RightIcons'>
                        <Link to='/user-sign-in' className='MobileNav-RightIcon MobileNav-UserIcon'></Link>
                        <Link to='/user-cart' className='MobileNav-RightIcon MobileNav-CartIcon'></Link>
                    </div>
                </div>


                <div className={MobileSearchFieldClasses}>
                    <div className='MobileNav-SearchDrawerWrap'>
                        <form onSubmit={handleSubmit} action='/' className='MobileNav-SearchForm'>
                            <div className='MobileNav-SearchField'>
                                <input type='search' name='Nav Search' className='MobileNav-SearchFieldInput'></input>
                            </div>
                            <button type='submit' className='MobileNav-SearchButton' onClick={CloseSearch} >SEARCH</button>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    )
}
