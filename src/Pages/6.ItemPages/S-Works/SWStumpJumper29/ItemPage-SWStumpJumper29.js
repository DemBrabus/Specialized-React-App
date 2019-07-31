import React from 'react';
import './ItemPage-SWStumpJumper29.scss';
import HeroSWStumpJumper29 from './Hero/Hero-SWStumpJumper29';
import ItemCardSWStumpJumper29 from './ItemCard/ItemCard-SWStumpJumper29';
import DescriptionSWStumpJumper29 from './Description/Description-SWStumpJumper29';
import ItemSpecs from '../../../../Reusable-Components/ItemSpecs/ItemSpecs';

export default function ItemPageSWStumpJumper29() {
    return (
        <div className='ItemPage-SWStumpJumper29'>
            <div className='ProductPage-Header'>
                <div className='ProductPage-HeaderInner'>
                    <p className='ProductPage-HeaderTitle'>SHOP / TRAIL / S-WORKS STUMPJUMPER 29</p>
                </div>
            </div>

            <div className='SWStumpJumper29Wrap'>

                <HeroSWStumpJumper29 />
                <ItemCardSWStumpJumper29 />
                <DescriptionSWStumpJumper29 />
                <ItemSpecs />


            </div>
        </div>
    )
}
