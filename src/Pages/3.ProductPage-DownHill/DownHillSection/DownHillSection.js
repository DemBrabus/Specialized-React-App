import React from 'react';
import './DownHillSection.scss';
import PreviewCard from '../../../Reusable-Components/PreviewCard/PreviewCard';

export default function DownHillSection({ title, items }) {
    return (
        <div className='DownHillSection'>
            <p className='DownHillProduct-SectionTitle'>{title.toUpperCase()}</p>
            <div className='DownHillProduct-ItemWrap'>

                {items.map(({ id, ...otherItemProps}) => (
                    <PreviewCard key={id} {...otherItemProps}/>
                ))}
                
            </div>
        </div>
    )
}



