import React from 'react';
import './PrevCard-DemoRacer29.scss';
import { Link } from 'react-router-dom';

export default function PrevCardDemoRacer29() {
    return (
        <div className='PrevCard-DemoRacer29'>
            <Link to='/shop/downhill/demo-racer-29' className='DemoRacer29-Image'/>

            <div className='PreviewCard-Info'>

                <Link to='/shop/downhill/demo-racer-29' className='PreviewCard-Name'>Demo Racer 29</Link>

                <p className='PreviewCard-Price'>$6,500.00</p>

                <div className='PreviewCard-ColorIcon DR29'></div>

            </div>
        </div>
    )
}
