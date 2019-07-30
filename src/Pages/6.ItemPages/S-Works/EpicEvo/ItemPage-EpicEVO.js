import React from 'react';
import './ItemPage-EpicEVO.scss';
import CarouselEpicEVO from './Carousel/Carousel-EpicEVO';
import ItemCardEpicEVO from './ItemCard/ItemCard-EpicEVO';
import DescriptionEpicEVO from './Description/Description-EpicEVO';
import ItemSpecs from '../../../../Reusable-Components/ItemSpecs/ItemSpecs';

export default function ItemPageEpicEVO() {
    return (
        <div className='ItemPage-EpicEVO'>
            <div className='ProductPage-Header'>
                <div className='ProductPage-HeaderInner'>
                    <p className='ProductPage-HeaderTitle'>SHOP / S-WORKS / EPIC EVO</p>
                </div>
            </div>

            <div className='EPICEVOWrap'>

                <CarouselEpicEVO />
                <ItemCardEpicEVO />
                <DescriptionEpicEVO />
                <ItemSpecs />

            </div>
        </div>
    )
}
