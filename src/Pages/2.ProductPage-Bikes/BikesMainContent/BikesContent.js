import React from 'react';
import './BikesContent.scss';
import BikesMenu from '../BikesMenu/BikesMenu';
import BikesProducts from '../BikesProducts/BikesProducts';

export default function BikesContent({ BikesData }) {
    

    return (

        <div className='BikesContent'>


            <BikesMenu />
            <BikesProducts />

            
        </div>
    )
}
