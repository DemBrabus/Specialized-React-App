import React from 'react';
import './ItemPage-DemoAlloy27.scss';
import HeroDemoAlloy27 from './Hero/Hero-DemoAlloy27';
import ItemCardDemoAlloy27 from './ItemCard/ItemCard-DemoAlloy27';
import DescriptionDemoAlloy27 from './Description/Description-DemoAlloy27';
import ItemSpecs from '../../../../Reusable-Components/ItemSpecs/ItemSpecs';

export default function ItemPageDemoAlloy27() {
    return (
        <div className='ItemPage-DemoAlloy27'>
            <div className='ProductPage-Header'>
                <div className='ProductPage-HeaderInner'>
                    <p className='ProductPage-HeaderTitle'>SHOP / TRAIL / DEMO ALLOY 27</p>
                </div>
            </div>

            <div className='DemoRacer29Wrap'>

                <HeroDemoAlloy27 />
                <ItemCardDemoAlloy27 />
                <DescriptionDemoAlloy27 />
                <ItemSpecs />

            </div>
        </div>
    )
}
