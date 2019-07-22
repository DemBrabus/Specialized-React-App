import React, { Component } from 'react';
import './FullNav.scss';
import { Link } from 'react-router-dom';

export default class FullNav extends Component {
    constructor() {
        super();
        this.state = {
            TempState: ''
        }
    }





    render() {
        return (
            <div className='FullNav'>
                <div className='FullNav-TopRow'>
                    <div className='FullNav-RowWrap FullNav-RowWrap-Top'>
                        <p className='FullNav-ShippingOffer'>FREE SHIPPING ON ALL ORDERS OVER $150.
                        </p>
                        <div className='FullNav-TopUserToolsWrap'>
                            <Link to='/' className='FullNav-RetailerLink'>
                                <div className='FullNav-RetailerIcon'></div>
                                <p className='FullNav-RetailerText'>FIND A RETAILER</p>
                            </Link>

                            <div className='FullNav-EnglishWrap'>
                                <div className='FullNav-FlagIcon'></div>
                                <p className='FullNav-EnglishText'>EN</p>
                            </div>

                            <Link to='/' className='FullNav-SignInButton'>SIGN IN</Link>

                        </div>
                    </div>
                </div>
                <div className='FullNav-BottomRow'>
                    <div className='FullNav-RowWrap FullNav-RowWrap-Bottom'>
                        
                        <Link to='/' className='FullNav-Logo'></Link>


                        <div className='FullNav-LinkWrapper'>
                            <ul className='FullNav-LinkList'>
                                <li className='FullNav-LinkItem'>
                                    <Link to='/'className='FullNav-Link'>BIKES</Link>
                                </li>
                                <li className='FullNav-LinkItem'>
                                    <Link to='/'className='FullNav-Link'>TRAIL</Link>
                                </li>
                                <li className='FullNav-LinkItem'>
                                    <Link to='/'className='FullNav-Link'>DOWNHILL</Link>
                                </li>
                                <li className='FullNav-LinkItem'>
                                    <Link to='/'className='FullNav-Link'>S-WORKS</Link>
                                </li>
                                <li className='FullNav-LinkItem'>
                                    <Link to='/'className='FullNav-Link'>INSIDE SPECIALIZED</Link>
                                </li>
                            </ul>
                        </div>

                        <div className='FullNav-BottomUserToolsWrap'>
                            <Link to='/' className='FullNav-Search FullNav-Icon'></Link>
                            <Link to='/' className='FullNav-Cart FullNav-Icon'></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
