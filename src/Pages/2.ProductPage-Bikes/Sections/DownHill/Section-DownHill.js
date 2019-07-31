import React from 'react';
import './Section-DownHill.scss';
import PrevCardDemoRacer29 from '../../../../Cards/Preview/DemoRacer29/PrevCard-DemoRacer29';
import PrevCardDemoExpert29 from '../../../../Cards/Preview/DemoExpert29/PrevCard-DemoExpert29';
import PrevCardDemoAlloy27 from '../../../../Cards/Preview/DemoAlloy27/PrevCard-DemoAlloy27';

export default function SectionDownHill() {
    return (
        <div className='Section-DownHill'>
            <p className='Section-Title'>DOWNHILL</p>

            <div className='Section-CardWrap'>

                <PrevCardDemoRacer29 />
                <PrevCardDemoExpert29 />
                <PrevCardDemoAlloy27 />

                
            </div> 
        </div>
    )
}
