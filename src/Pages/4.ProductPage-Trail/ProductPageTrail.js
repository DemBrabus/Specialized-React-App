import React, { Component } from 'react';
import './ProductPageTrail.scss';
import TrailHero from './Hero/TrailHero';
import TrailContent from './TrailContent/TrailContent';

export default class ProductPageTrail extends Component {
    render() {
        return (
            <div className='ProductPageTrail'>

                 <div className='ProductPage-Header'>
                        <div className='ProductPage-HeaderInner'>
                            <p className='ProductPage-HeaderTitle'>SHOP/TRAIL</p>
                        </div>
                    </div>

                     <div className='ProductPageDownHill-Wrap'>

                         <TrailHero />
                         <TrailContent />

                     </div>
            </div>
        )
    }
}
