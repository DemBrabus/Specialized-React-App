import React from 'react';
import './Section-Trail.scss';
import PrevCardStumpJumperPro29 from '../../../../Cards/Preview/StumpJumperPro29/PrevCard-StumpJumperPro29';
import PrevCardStumpJumperExpert29 from '../../../../Cards/Preview/StumpJumperExpert29/PrevCard-StumpJumperExpert29';
import PrevCardStumpJumperExpert27 from '../../../../Cards/Preview/StumpJumperExpert27/PrevCard-StumpJumperExpert27';
import PrevCardFuseExpert29 from '../../../../Cards/Preview/FuseExpert29/PrevCard-FuseExpert29';
import PrevCardFuseExpert27 from '../../../../Cards/Preview/FuseExpert27/PrevCard-FuseExpert27';

export default function SectionTrail() {
    return (
        <div className='Section-Trail'>
            <p className='Section-Title'>TRAIL</p>

            <div className='Section-CardWrap'>

                <PrevCardStumpJumperPro29 />
                <PrevCardStumpJumperExpert29 />
                <PrevCardStumpJumperExpert27 />
                <PrevCardFuseExpert29 />
                <PrevCardFuseExpert27 />


            </div>  
        </div>
    )
}
