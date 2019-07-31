import React from 'react';
import './DownHillContent.scss';
import DownHillProducts from '../DownHillProducts/DownHillProducts';
import DownHillExtras from '../DownHillExtras/DownHillExtras';

export default function DownHillContent() {
    return (
        <div className='DownHillContent'>
            
            <DownHillProducts />
            {/* <DownHillExtras /> */}

        </div>
    )
}
