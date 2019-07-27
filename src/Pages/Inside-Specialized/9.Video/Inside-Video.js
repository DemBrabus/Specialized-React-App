import React from 'react';
import './Inside-Video.scss';

export default function InsideVideo() {
    return (
        <div className='Inside-Video'>
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/5emg5HORbaY" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    )
}
