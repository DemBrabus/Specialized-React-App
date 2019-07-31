import React from 'react';
import './PrevCard-StumpJumperPro29.scss';
import { Link } from 'react-router-dom';

export default function PrevCardStumpJumperPro29() {
    return (
        <div className='PrevCard-StumpJumperPro29'>

            <Link to='/shop/trail/stumpjumper-pro-29' className='StumpJumperPro29-Image'/>

            <div className='PreviewCard-Info'>

                <Link to='/shop/trail/stumpjumper-pro-29' className='PreviewCard-Name'>StumpJumper Pro 29</Link>

                <p className='PreviewCard-Price'>$6,300.00</p>

                <div className='PreviewCard-ColorIcon SJP29'></div>

            </div>
        </div>
    )
}
