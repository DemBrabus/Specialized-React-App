import React from 'react';
import './TrailSection.scss';
// import PreviewCard from '../../../Reusable-Components/PreviewCard/PreviewCard';
import PrevCardStumpJumperPro29 from '../../../Cards/Preview/StumpJumperPro29/PrevCard-StumpJumperPro29';
import PrevCardStumpJumperExpert29 from '../../../Cards/Preview/StumpJumperExpert29/PrevCard-StumpJumperExpert29';
import PrevCardStumpJumperExpert27 from '../../../Cards/Preview/StumpJumperExpert27/PrevCard-StumpJumperExpert27';
import PrevCardFuseExpert29 from '../../../Cards/Preview/FuseExpert29/PrevCard-FuseExpert29';
import PrevCardFuseExpert27 from '../../../Cards/Preview/FuseExpert27/PrevCard-FuseExpert27';

export default function TrailSection({ title, items }) {
    return (
        <div className='TrailSection'>
            <p className='TrailProduct-SectionTitle'>{title.toUpperCase()}</p>
            <div className='TrailProduct-ItemWrap'>

                <PrevCardStumpJumperPro29 />
                <PrevCardStumpJumperExpert29 />
                <PrevCardStumpJumperExpert27 />
                <PrevCardFuseExpert29 />
                <PrevCardFuseExpert27 />

                {/* {items.map(({ id, ...otherItemProps}) => (
                    <PreviewCard key={id} {...otherItemProps}/>
                ))} */}
                
            </div>
        </div>
    )
}



