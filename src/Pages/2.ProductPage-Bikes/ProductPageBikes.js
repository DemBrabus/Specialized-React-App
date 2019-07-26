import React, { Component } from 'react';
import './ProductPageBikes.scss';
import BikesHero from './Hero/BikesHero';
import BikesContent from './BikesMainContent/BikesContent';

export default class ProductPageBikes extends Component {

    render() {


        return (
            <div className='ProductPageBikes'>

                <div className='ProductPage-Header'>
                    <div className='ProductPage-HeaderInner'>
                        <p className='ProductPage-HeaderTitle'>SHOP/BIKES</p>
                    </div>
                </div>

                <div className='ProductPageBikes-Wrap'>

                    
                        <BikesHero />

                        <BikesContent />
                    

                </div>
            </div>
        )
    }
}
