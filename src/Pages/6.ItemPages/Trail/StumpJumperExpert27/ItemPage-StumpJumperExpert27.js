import React from 'react';
import './ItemPage-StumpJumperExpert27.scss';
import CarouselStumpJumperExpert27 from './Carousel/Carousel-StumpJumperExpert27';
import ItemCardStumpJumper27 from './ItemCard/ItemCard-StumpJumper27';
import DescriptionStumpJumperExpert27 from './Description/Description-StumpJumperExpert27';
import ItemSpecs from '../../../../Reusable-Components/ItemSpecs/ItemSpecs';

export default function StumpJumperExpert27() {
    return (
        <div className='ItemPage-StumpJumperExpert27'>

            <div className='ProductPage-Header'>
                <div className='ProductPage-HeaderInner'>
                    <p className='ProductPage-HeaderTitle'>SHOP / TRAIL / STUMPJUMPER EXPERT 27.5</p>
                </div>
            </div>

            <div className='StumpJumperExpert29Wrap'>

                <CarouselStumpJumperExpert27 />
                <ItemCardStumpJumper27 />
                <DescriptionStumpJumperExpert27 />
                <ItemSpecs />


            </div>
        </div>
    )
}
