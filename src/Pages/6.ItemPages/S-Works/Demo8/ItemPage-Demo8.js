import React from 'react';
import './ItemPage-Demo8.scss';
import CarouselDemo8 from './Carousel/Carousel-Demo8';
import ItemCardDemo8 from './ItemCard/ItemCard-Demo8';
import DescriptionDemo8 from './Description/Description-Demo8';
import ItemSpecs from '../../../../Reusable-Components/ItemSpecs/ItemSpecs';

export default function ItemPageDemo8() {
    return (
        <div className='ItemPage-Demo8'>
            <div className='ProductPage-Header'>
                <div className='ProductPage-HeaderInner'>
                    <p className='ProductPage-HeaderTitle'>SHOP / S-WORKS / DEMO 8</p>
                </div>
            </div>

            <div className='Demo8Wrap'>

                <CarouselDemo8 />
                <ItemCardDemo8 />
                <DescriptionDemo8 />
                <ItemSpecs />

            </div>
        </div>
    )
}
