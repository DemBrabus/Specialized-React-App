import React from 'react';
import './PreviewCard.scss';

export default function PreviewCard({ id, name, price, imageUrl, color }) {
    return (
        <div className='PreviewCard'>
            <div className='PreviewCard-Image' 
                    style={{backgroundImage: "url(" + imageUrl + ")"}} />
            <div className='PreviewCard-Info'>
                <p className='PreviewCard-Name'>{ name }</p>
                <p className='PreviewCard-Price'>{ price }</p>
                <div className='PreviewCard-ColorIcon' 
                        style={{backgroundImage: `url(${color})`}} />
            </div>
        </div>
    )
}
