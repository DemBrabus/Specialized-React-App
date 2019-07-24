import React from 'react';
import './BikesMenu.scss';

export default function BikesMenu() {
    return (
        <div className='BikesMenu'>
            <div className='BikesMenu-Wrap'>
                <p className='BikesMenu-Title'>Filters</p>

                <div className='BikesMenu-Group BikesMenu-Group1'>
                    <p className='BikesMenu-SubTitle'>GROUPS</p>
                    <div className='BikesMenu-FilterWrap'>
                        <div className='BikesMenu-FilterBox'></div>
                        <p className='BikesMenu-FilterText'>Bikes</p>
                    </div>
                    <div className='BikesMenu-FilterWrap'>
                        <div className='BikesMenu-FilterBox'></div>
                        <p className='BikesMenu-FilterText'>Frame</p>
                    </div>
                </div>
                <div className='BikesMenu-Group BikesMenu-Group2'>
                    <p className='BikesMenu-SubTitle'>TYPE</p>
                    <div className='BikesMenu-FilterWrap'>
                        <div className='BikesMenu-FilterBox'></div>
                        <p className='BikesMenu-FilterText'>Trail</p>
                    </div>
                    <div className='BikesMenu-FilterWrap'>
                        <div className='BikesMenu-FilterBox'></div>
                        <p className='BikesMenu-FilterText'>DownHill</p>
                    </div>
                    <div className='BikesMenu-FilterWrap'>
                        <div className='BikesMenu-FilterBox'></div>
                        <p className='BikesMenu-FilterText'>S-Works</p>
                    </div>
                </div>
                <div className='BikesMenu-Group BikesMenu-Group3'>
                    <p className='BikesMenu-SubTitle'>MODEL</p>
                    <div className='BikesMenu-FilterWrap'>
                        <div className='BikesMenu-FilterBox'></div>
                        <p className='BikesMenu-FilterText'>StumpJumper</p>
                    </div>
                    <div className='BikesMenu-FilterWrap'>
                        <div className='BikesMenu-FilterBox'></div>
                        <p className='BikesMenu-FilterText'>Fuse</p>
                    </div>
                    <div className='BikesMenu-FilterWrap'>
                        <div className='BikesMenu-FilterBox'></div>
                        <p className='BikesMenu-FilterText'>Demo</p>
                    </div>
                    <div className='BikesMenu-FilterWrap'>
                        <div className='BikesMenu-FilterBox'></div>
                        <p className='BikesMenu-FilterText'>Epic</p>
                    </div>
                </div>

                <p className='BikesMenu-Note'>Bikes manufactured and sold by Specialized are guaranteed for quality and functionality. We stand by our bikes and aim to produce the highest quality products.
                Our bikes are made for riders, by riders.</p>
            </div>            
        </div>
    )
}
