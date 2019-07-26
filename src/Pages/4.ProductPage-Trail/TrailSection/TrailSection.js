import React from 'react';
import './TrailSection.scss';
import PreviewCard from '../../../Reusable-Components/PreviewCard/PreviewCard';

export default function TrailSection({ title, items }) {
    return (
        <div className='TrailSection'>
            <p className='TrailProduct-SectionTitle'>{title.toUpperCase()}</p>
            <div className='TrailProduct-ItemWrap'>

                {items.map(({ id, ...otherItemProps}) => (
                    <PreviewCard key={id} {...otherItemProps}/>
                ))}
                
            </div>
        </div>
    )
}



