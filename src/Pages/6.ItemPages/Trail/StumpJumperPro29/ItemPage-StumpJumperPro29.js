import React, { Component } from 'react';
import './ItemPage-StumpJumperPro29.scss';
import HeroStumpJumperPro29 from './Hero/Hero-StumpJumperPro29';
import ItemCard from './ItemCard/ItemCard';

export default class StumpJumperPro29 extends Component {
    render() {
        return (
            <div className='ItemPage-StumpJumperPro29'>

                <div className='ProductPage-Header'>
                    <div className='ProductPage-HeaderInner'>
                        <p className='ProductPage-HeaderTitle'>SHOP/TRAIL/STUMPJUMPER PRO 29</p>
                    </div>
                </div>


                <div className='StumpJumperPro29Wrap'>


                    <HeroStumpJumperPro29 />
                    <ItemCard />


                </div>
            </div>
        )
    }
}
