import React from 'react';
import './SWorksContent.scss';
import SWorksProducts from '../SWorksProducts/SWorksProducts';
// import SWorksExtras from '../SWorksExtras/SWorksExtras';


export default function SWorksContent() {
    return (
        <div className='SWorksContent'>
            
            <SWorksProducts />
            {/* <SWorksExtras /> */}

        </div>
    )
}
