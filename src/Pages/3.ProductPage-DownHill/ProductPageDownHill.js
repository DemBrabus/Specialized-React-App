import React, { Component } from 'react';
import './ProductPageDownHill.scss';
import DownHillHero from './Hero/DownHillHero';
import DownHillContent from './DownHillContent/DownHillContent';

export default class ProductPageDownHill extends Component {
    render() {
        return (
            <div className='ProductPageDownHill'>
                
                    <div className='ProductPage-Header'>
                        <div className='ProductPage-HeaderInner'>
                            <p className='ProductPage-HeaderTitle'>SHOP/DOWNHILL</p>
                        </div>
                    </div>

                     <div className='ProductPageDownHill-Wrap'>

                        <DownHillHero />
                        <DownHillContent />

                     </div>
            </div>
        )
    }
}
