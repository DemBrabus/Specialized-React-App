import React from 'react';
import './SWorksSection.scss';
import PreviewCard from '../../../Reusable-Components/PreviewCard/PreviewCard';

export default function SWorksSection({ title, items }) {
    return (
        <div className='SWorksSection'>
            <p className='SWorksProduct-SectionTitle'>{title.toUpperCase()}</p>
            <div className='SWorksProduct-ItemWrap'>

                {items.map(({ id, ...otherItemProps}) => (
                    <PreviewCard key={id} {...otherItemProps}/>
                ))}
                
            </div>
        </div>
    )
}



