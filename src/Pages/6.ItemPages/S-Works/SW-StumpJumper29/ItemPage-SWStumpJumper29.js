import React from './node_modules/react';
import './ItemPage-SWStumpJumper29.scss';
import HeroSWStumpJumper29 from './Hero/Hero-SWStumpJumper29';
import ItemCardSWStumpJumper29 from './ItemCard/ItemCard-SWStumpJumper29';

export default function ItemPageSWStumpJumper29() {
    return (
        <div className='ItemPage-SWStumpJumper29'>
            <div className='ProductPage-Header'>
                <div className='ProductPage-HeaderInner'>
                    <p className='ProductPage-HeaderTitle'>SHOP / S-WORKS / S-WORKS STUMPJUMPER 29</p>
                </div>
            </div>

            <div className='SWStumpJumper29Wrap'>

                <HeroSWStumpJumper29 />
                <ItemCardSWStumpJumper29 />

            </div>
        </div>
    )
}
