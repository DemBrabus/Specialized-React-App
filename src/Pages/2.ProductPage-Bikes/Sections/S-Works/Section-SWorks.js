import React from 'react';
import './Section-SWorks.scss';
import PrevCardDemo8 from '../../../../Cards/Preview/Demo8/PrevCard-Demo8';
import PrevCardDemoEpicEVO from '../../../../Cards/Preview/DemoEpicEVO/PrevCard-DemoEpicEVO';
import PrevCardSWStumpJumper29 from '../../../../Cards/Preview/SWStumpJumper29/PrevCard-SWStumpJumper29';
import PrevCardSWStumpJumper27 from '../../../../Cards/Preview/SWStumpJumper27/PrevCard-SWStumpJumper27';
import PrevCardDemo8Frame from '../../../../Cards/Preview/Demo8Frame/PrevCard-Demo8Frame';

export default function SectionSWorks() {
    return (
        <div className='Section-SWorks'>
            <p className='Section-Title'>S-WORKS</p>

            <div className='Section-CardWrap'>

                <PrevCardDemo8 />
                <PrevCardDemoEpicEVO />
                <PrevCardSWStumpJumper29 />
                <PrevCardSWStumpJumper27 />
                <PrevCardDemo8Frame />
                
            </div>
        </div>
    )
}
