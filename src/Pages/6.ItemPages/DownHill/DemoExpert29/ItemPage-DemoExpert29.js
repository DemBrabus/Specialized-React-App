import React from 'react';
import './ItemPage-DemoExpert29.scss';
import ItemSpecs from '../../../../Reusable-Components/ItemSpecs/ItemSpecs';
import CarouselDemoExpert29 from './Carousel/Carousel-DemoExpert29';
import ItemCardDemoExpert29 from './ItemCard/ItemCard-DemoExpert29';
import DescriptionDemoExpert29 from './Description/Description-DemoExpert29';

export default function ItemPageDemoExpert29() {
    return (
        <div className='ItemPage-DemoExpert29'>
            <div className='ProductPage-Header'>
                <div className='ProductPage-HeaderInner'>
                    <p className='ProductPage-HeaderTitle'>SHOP / TRAIL / DEMO EXPERT 29</p>
                </div>
            </div>

            <div className='DemoRacer29Wrap'>

                <CarouselDemoExpert29 />
                <ItemCardDemoExpert29 />
                <DescriptionDemoExpert29 />
                <ItemSpecs />

            </div>
        </div>
    )
}
