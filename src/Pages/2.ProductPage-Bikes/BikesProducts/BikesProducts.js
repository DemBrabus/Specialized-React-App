import React, { Component } from 'react';
import './BikesProducts.scss';
import BIKE_DATA from '../../../DataFiles/BikeData';
import BikesSection from '../BikesProduct-Section/BikesSection';

export default class BikesProducts extends Component {
    constructor(){
        super();

        this.state = {
            BikeData: BIKE_DATA
        }
    }
    render() {

        const {BikeData} = this.state;

        return (
            <div  className='BikesProducts'>
            <div className='BikesProductsWrap'>

                {

                BikeData.map(({ id, ...otherBikesDataProps }) =>(
                    <BikesSection key={id} {...otherBikesDataProps} />
                ))

                }


            </div>
        </div>
        )
    }
}

