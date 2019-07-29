import React from 'react';
import './LandingVideo.scss';
import { Link } from 'react-router-dom';

export default function LandingVideo() {
    return (
        <div className='LandingVideo'>
            
            <Link to='/' className='LandingVideo-Title'>THE ALL NEW STUMPJUMPER</Link>

            <div className='LandingVideo-VideoWrap'>
                <iframe width="80%" height="90%" src="https://www.youtube.com/embed/yiNyUvYb7AM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>



        </div>
    )
}
