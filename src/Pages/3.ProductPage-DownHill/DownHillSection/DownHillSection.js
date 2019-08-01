import React from 'react';
import './DownHillSection.scss';
import PrevCardDemoRacer29 from '../../../Cards/Preview/DemoRacer29/PrevCard-DemoRacer29';
import PrevCardDemoExpert29 from '../../../Cards/Preview/DemoExpert29/PrevCard-DemoExpert29';
import PrevCardDemoAlloy27 from '../../../Cards/Preview/DemoAlloy27/PrevCard-DemoAlloy27';

export default function DownHillSection({ title, items }) {
    return (
        <div className='DownHillSection'>
            <p className='DownHillProduct-SectionTitle'>{title.toUpperCase()}</p>
            <div className='DownHillProduct-ItemWrap'>


                <PrevCardDemoRacer29 />
                <PrevCardDemoExpert29 />
                <PrevCardDemoAlloy27 />




                {/* {items.map(({ id, ...otherItemProps}) => (
                    <PreviewCard key={id} {...otherItemProps}/>
                ))} */}
                
            </div>
        </div>
    )
}



