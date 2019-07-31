import React from 'react';
import './PrevCard-DemoEpicEVO.scss';
import { Link } from 'react-router-dom';

export default function PrevCardDemoEpicEVO() {
    return (
        <div className='PrevCard-DemoEpicEVO'>
            <Link to='/shop/s-works/s-works-epic-evo' className='DemoEpicEVO-Image'/>

            <div className='PreviewCard-Info'>

                <Link to='/shop/s-works/s-works-epic-evo' className='PreviewCard-Name'>S-Works Demo Epic EVO</Link>

                <p className='PreviewCard-Price'>$10,400.00</p>

                <div className='PreviewCard-ColorIcon DEE'></div>

            </div>
        </div>
    )
}
