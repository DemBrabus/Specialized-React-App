import React from 'react';
import './PrevCard-DemoAlloy27.scss';
import { Link } from 'react-router-dom';

export default function PrevCardDemoAlloy27() {
    return (
        <div className='PrevCard-DemoAlloy27'>
            <Link to='/shop/downhill/demo-alloy-27' className='DemoAlloy27-Image'/>

            <div className='PreviewCard-Info'>

                <Link to='/shop/downhill/demo-alloy-27' className='PreviewCard-Name'>Demo Alloy 27.5</Link>

                <p className='PreviewCard-Price'>$3,400.00</p>

                <div className='PreviewCard-ColorIcon DA27'></div>

            </div>
        </div>
    )
}
