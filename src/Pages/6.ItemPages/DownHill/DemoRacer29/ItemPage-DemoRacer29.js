import React from 'react';
import './ItemPage-DemoRacer29.scss';
import ItemSpecs from '../../../../Reusable-Components/ItemSpecs/ItemSpecs';
import CarouselDemoRacer29 from './Carousel/Carousel-DemoRacer29';
import ItemCardDemoRacer29 from './ItemCard/ItemCard-DemoRacer29';
import DescriptionDemoRacer29 from './Description/Description-DemoRacer29';

export default function ItemPageDemoRacer29() {
    return (
        <div className='ItemPage-DemoRacer29'>
            <div className='ProductPage-Header'>
                <div className='ProductPage-HeaderInner'>
                    <p className='ProductPage-HeaderTitle'>SHOP / TRAIL / DEMO RACER 29</p>
                </div>
            </div>

            <div className='DemoRacer29Wrap'>

                <CarouselDemoRacer29 />
                <ItemCardDemoRacer29 />
                <DescriptionDemoRacer29 />
                <ItemSpecs />

            </div>
        </div>
    )
}
