import React from 'react';
import './NavDrawer.scss';
import { Link } from 'react-router-dom';

export default function NavDrawer({ CloseDrawer, DrawerStatus }) {

    let NavDrawerClasses = 'NavDrawer';
    if(DrawerStatus){
        NavDrawerClasses = 'NavDrawer ActiveNavDrawer';
    }


    return (
        <div className={NavDrawerClasses}>
            <div className='NavDrawerWrap'>
                <div className='NavDrawer-Categories'>
                    <div className='NavDrawer-Exit' onClick={CloseDrawer}>
                        <div className='NavDrawer-Bar NavDrawer-Bar1'></div>
                        <div className='NavDrawer-Bar NavDrawer-Bar2'></div>
                    </div>

                    <div className='NavDrawerTabs'>

                    <div className='NavDrawer-Shop'>
                        <p className='NavDrawer-ShopText'>SHOP</p>
                    </div>
                    <div className='NavDrawer-InsideSpecialized' onClick={CloseDrawer}>
                        <Link to='/inside-specialized' className='NavDrawer-InsideSpecializedText'>INSIDE SPECIALIZED</Link>
                    </div>

                    </div>
                </div>

            
                <div className='NavDrawer-Menu'>
                    <ul className='NavDrawer-MenuList'>
                        <li className='NavDrawer-MenuItem' >
                            <Link to='/shop/bikes' className='NavDrawer-MenuLink' onClick={CloseDrawer}>BIKES</Link>
                        </li>
                        <li className='NavDrawer-MenuItem'>
                            <Link to='/shop/trail' className='NavDrawer-MenuLink' onClick={CloseDrawer}>TRAIL</Link>
                        </li>
                        <li className='NavDrawer-MenuItem' >
                            <Link to='/shop/downhill' className='NavDrawer-MenuLink' onClick={CloseDrawer}>DOWNHILL</Link>
                        </li>
                        <li className='NavDrawer-MenuItem' >
                            <Link to='/shop/s-works' className='NavDrawer-MenuLink' onClick={CloseDrawer}>S-WORKS</Link>
                        </li>
                        <li className='NavDrawer-MenuItem' >
                            <Link to='/retailers' className='NavDrawer-MenuLink' onClick={CloseDrawer}>FIND A RETAILER</Link>
                        </li>
                    </ul>
                </div>

               
            
            </div>
             <p className='NavDrawer-Footer'>Made For Riders, By Riders</p>
        </div>
    )
}
