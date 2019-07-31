import React from 'react';
import './TrailContent.scss';
import TrailProducts from '../TrailProducts/TrailProducts';
// import TrailExtras from '../TrailExtras/TrailExtras';

export default function TrailContent() {
    return (
        <div className='TrailContent'>
            
             <TrailProducts />
            {/* <TrailExtras />  */}

        </div>
    )
}
