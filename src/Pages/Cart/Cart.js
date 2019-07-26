import React from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';

export default function Cart() {
    return (
        <div className='Cart'>
            <div className='CartWrap'>

                <div className='Cart-Header'>
                    <p className='Cart-HeaderTitle'>SHOPPING CART</p>
                    <Link to='/shop/bikes' className='Cart-HeaderShopLink'>Continue Shopping</Link>
                </div>

                <div className='Cart-DigitalCart'>

                    <p className='Cart-DigitalCart-Title'>Your Shopping Cart is Empty</p>

                    <p className='Cart-DigitalCart-Text'>Nothin' to see here.</p>

                    <p className='Cart-DigitalCart-Text'>Check out your wishlist items.</p>

                    <div className='Cart-DigitalCart-Button'>VIEW WISH LIST</div>

                    <Link to='/shop/bikes' className='Cart-DigitalCart-ShopLink'>Continue Shopping</Link>

                </div>

                <div className='Cart-InfoSectionRow'>
                    <div className='Cart-InfoSection'>
                        <p className='Cart-InfoSection-Title'>Contact Us</p>
                        <p className='Cart-InfoSection-Info'>8:00am - 6:00pm MST, Monday-Friday</p>
                        <p className='Cart-InfoSection-Info'>877-808-8154</p>
                        <p className='Cart-InfoSection-Info Underline'>ridercare@specialized.com</p>
                    </div>
                    <div className='Cart-InfoSection'>
                        <p className='Cart-InfoSection-Title'>Helpful Links</p>
                        <p className='Cart-InfoSection-Link'>Frequently Asked Questions</p>
                        <p className='Cart-InfoSection-Link'>Return Policy</p>
                        <p className='Cart-InfoSection-Link'>Warranty Policy</p>
                    </div>
                    <div className='Cart-InfoSection'>
                        <p className='Cart-InfoSection-Title'>We Accept</p>
                        <div className='Cart-InfoSection-PaymentMethodWrap'>
                            <div className='Cart-InfoSection-PaymentMethod PaymentIcon1'></div>
                            <div className='Cart-InfoSection-PaymentMethod PaymentIcon2'></div>
                            <div className='Cart-InfoSection-PaymentMethod PaymentIcon3'></div>
                            <div className='Cart-InfoSection-PaymentMethod PaymentIcon4'></div>
                            <div className='Cart-InfoSection-PaymentMethod PaymentIcon5'></div>
                        </div>
                        
                    </div>
                </div>

                

            </div>
        </div>
    )
}
