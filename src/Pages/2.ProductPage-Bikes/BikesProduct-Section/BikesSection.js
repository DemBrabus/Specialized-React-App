import React from 'react';
import './BikesSection.scss';
import PreviewCard from '../../../Reusable-Components/PreviewCard/PreviewCard';

export default function BikesSection({ title, items }) {
    return (
        <div className='BikesSection'>
            <p className='BikesProduct-SectionTitle'>{title.toUpperCase()}</p>
            <div className='BikesProduct-ItemWrap'>
















                {/* 
                {items.map(({ id, ...otherItemProps}) => (
                    <PreviewCard key={id} {...otherItemProps}/>
                ))} */}

                
            </div>
        </div>
    )
}



