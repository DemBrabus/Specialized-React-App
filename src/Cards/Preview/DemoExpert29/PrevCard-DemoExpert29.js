import React from 'react';
import './PrevCard-DemoExpert29.scss';
import { Link } from 'react-router-dom';

export default function PrevCardDemoExpert29() {
    return (
        <div className='PrevCard-DemoExpert29'>
            <Link to='/shop/downhill/demo-expert-29' className='DemoExpert29-Image'/>

            <div className='PreviewCard-Info'>

                <Link to='/shop/downhill/demo-expert-29' className='PreviewCard-Name'>Demo Expert 29</Link>

                <p className='PreviewCard-Price'>$5,000.00</p>

                <div className='PreviewCard-ColorIcon DE29'></div>

            </div>
        </div>
    )
}
