import React, { Component } from 'react';
import './ItemPage-StumpJumperExpert29.scss';
import CarouselStumpJumperExpert29 from './Hero-Carousel/Carousel-StumpJumperExpert29';
import ItemCardStumpJumperExpert29 from './ItemCard/ItemCard-StumpJumperExpert29';
import DescriptionStumpJumperExpert29 from './Description/Description-StumpJumperExpert29';
import ItemSpecs from '../../../../Reusable-Components/ItemSpecs/ItemSpecs';

export default class StumpJumperExpert29 extends Component {
    render() {
        return (
            <div className='ItemPage-StumpJumperExpert29'>

            <div className='ProductPage-Header'>
                <div className='ProductPage-HeaderInner'>
                    <p className='ProductPage-HeaderTitle'>SHOP / TRAIL / STUMPJUMPER EXPERT 29</p>
                </div>
            </div>

            <div className='StumpJumperExpert29Wrap'>

                <CarouselStumpJumperExpert29 />
                <ItemCardStumpJumperExpert29 />
                <DescriptionStumpJumperExpert29 />
                <ItemSpecs />

            </div>
        </div>
        )
    }
}






