import React, { Component } from 'react';
import './SWorksProducts.scss';
import SWorksSection from '../SWorksSection/SWorksSection';
import SWORKS_DATA from '../../../DataFiles/SWorks';

export default class SWorksProducts extends Component {
    constructor(){
        super();

        this.state = {
            SWorksData: SWORKS_DATA
        }
    }
    render() {

        const {SWorksData} = this.state;

        return (
            <div  className='SWorksProducts'>
            <div className='SWorksProductsWrap'>

                {

                SWorksData.map(({ id, ...otherSWorksDataProps }) =>(
                    <SWorksSection key={id} {...otherSWorksDataProps} />
                ))

                }


            </div>
        </div>
        )
    }
}
