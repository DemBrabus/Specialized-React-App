import React, { Component } from 'react';
import './DownHillProducts.scss';
import DownHillSection from '../DownHillSection/DownHillSection';
import DOWNHILL_DATA from '../../../DataFiles/DownHillData';

export default class DownHillProducts extends Component {
    constructor(){
        super();

        this.state = {
            DownHillData: DOWNHILL_DATA
        }
    }
    render() {

        const {DownHillData} = this.state;

        return (
            <div  className='DownHillProducts'>
            <div className='DownHillProductsWrap'>

                {

                DownHillData.map(({ id, ...otherDownHillDataProps }) =>(
                    <DownHillSection key={id} {...otherDownHillDataProps} />
                ))

                }


            </div>
        </div>
        )
    }
}
