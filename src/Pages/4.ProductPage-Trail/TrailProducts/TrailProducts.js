import React, { Component } from 'react';
import './TrailProducts.scss';
import TrailSection from '../TrailSection/TrailSection';
import TRAIL_DATA from '.././../../DataFiles/TrailData';

export default class TrailProducts extends Component {
    constructor(){
        super();

        this.state = {
            TrailData: TRAIL_DATA
        }
    }
    render() {

        const {TrailData} = this.state;

        return (
            <div  className='TrailProducts'>
            <div className='TrailProductsWrap'>

                {

                TrailData.map(({ id, ...otherTrailDataProps }) =>(
                    <TrailSection key={id} {...otherTrailDataProps} />
                ))

                } 


            </div>
        </div>
        )
    }
}
