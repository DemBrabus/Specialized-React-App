import React from 'react';
import './InsideSpecialized.scss';
import InsideFamily from './1.Family/Inside-Family';
import FamilyMobile from './2.Family-Mobile/Family-Mobile';
import InsidePoster1 from './3.Poster-1/Inside-Poster1';
import InsideGrey1 from './4.GreySection1/Inside-Grey1';
import InsidePoster2 from './5.Poster-2/Inside-Poster2';
import InsidePoster3 from './6.Poster3/Inside-Poster3';
import InsideGrey2 from './8.GreySection2/Inside-Grey2';
import InsidePoster3Mobile from './7.Poster3-Mobile/Inside-Poster3-Mobile';
import InsideVideo from './9.Video/Inside-Video';
import InsideCareer from './10.Career/Inside-Career';

export default function InsideSpecialized() {
    return (
        <div className='InsideSpecialized'>
            <div className='InsideWrap'>

                
                <InsideFamily />
                    <FamilyMobile />

                <InsidePoster1 />

                <InsideGrey1 />

                <InsidePoster2 />

                <InsidePoster3 />
                    <InsidePoster3Mobile />

                <InsideGrey2 />

                <InsideVideo />

                <InsideCareer />


            </div>
        </div>
    )
}
