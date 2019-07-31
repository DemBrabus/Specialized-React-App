import React from 'react';
import './PrevCard-Demo8.scss';
import { Link } from 'react-router-dom';

export default function PrevCardDemo8() {
    return (
        <div className='PrevCard-Demo8'>
            <Link to='/shop/s-works/s-works-demo-8' className='Demo8-Image'/>

            <div className='PreviewCard-Info'>

                <Link to='/shop/s-works/s-works-demo-8' className='PreviewCard-Name'>S-Works Demo 8</Link>

                <p className='PreviewCard-Price'>$9,500.00</p>

                <div className='PreviewCard-ColorIcon D8'></div>

            </div>
        </div>
    )
}
