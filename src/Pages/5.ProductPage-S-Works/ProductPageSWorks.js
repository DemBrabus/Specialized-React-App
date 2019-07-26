import React, { Component } from 'react';
import './ProductPageSWorks.scss';
import SWorksHero from './Hero/SWorksHero';
import SWorksContent from './SWorksContent/SWorksContent';

export default class ProductPageSWorks extends Component {
    render() {
        return (
            <div className='ProductPageSWorks'>
                
                    <div className='ProductPage-Header'>
                        <div className='ProductPage-HeaderInner'>
                            <p className='ProductPage-HeaderTitle'>SHOP/S-WORKS</p>
                        </div>
                    </div>

                     <div className='ProductPageSWorks-Wrap'>

                        <SWorksHero />
                        <SWorksContent />

                     </div>
            </div>
        )
    }
}
