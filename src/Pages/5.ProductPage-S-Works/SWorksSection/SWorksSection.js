import React from 'react';
import './SWorksSection.scss';
// import PreviewCard from '../../../Reusable-Components/PreviewCard/PreviewCard';
import PrevCardDemo8 from '../../../Cards/Preview/Demo8/PrevCard-Demo8';
import PrevCardDemoEpicEVO from '../../../Cards/Preview/DemoEpicEVO/PrevCard-DemoEpicEVO';
import PrevCardSWStumpJumper29 from '../../../Cards/Preview/SWStumpJumper29/PrevCard-SWStumpJumper29';
import PrevCardSWStumpJumper27 from '../../../Cards/Preview/SWStumpJumper27/PrevCard-SWStumpJumper27';
import PrevCardDemo8Frame from '../../../Cards/Preview/Demo8Frame/PrevCard-Demo8Frame';

export default function SWorksSection({ title, items }) {
    return (
        <div className='SWorksSection'>
            <p className='SWorksProduct-SectionTitle'>{title.toUpperCase()}</p>
            <div className='SWorksProduct-ItemWrap'>

                <PrevCardDemo8 />
                <PrevCardDemoEpicEVO />
                <PrevCardSWStumpJumper29 />
                <PrevCardSWStumpJumper27 />
                <PrevCardDemo8Frame />



                {/* 
                {items.map(({ id, ...otherItemProps}) => (
                    <PreviewCard key={id} {...otherItemProps}/>
                ))} */}
                
            </div>
        </div>
    )
}



