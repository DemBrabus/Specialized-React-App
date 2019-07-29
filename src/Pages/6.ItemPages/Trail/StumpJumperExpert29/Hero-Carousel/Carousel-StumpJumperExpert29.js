import React, { Component } from 'react';
import './Carousel-StumpJumperExpert29.scss';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class CarouselStumpJumperExpert29 extends Component {
    render() {
        return (
            <div className='Carousel-StumpJumperExpert29'>
                <CarouselProvider className='CarouselStyling'
                        naturalSlideWidth={100}
                        naturalSlideHeight={30}
                        totalSlides={3}>
                            <Slider>
                            <Slide className='STE-29-Slide1' index={0}>I am the first Slide.</Slide>
                            <Slide className='STE-29-Slide2' index={1}>I am the second Slide.</Slide>
                            <Slide className='STE-29-Slide3' index={2}>I am the third Slide.</Slide>
                            </Slider>

                            <ButtonBack>Back</ButtonBack>
                            <ButtonNext>Next</ButtonNext>

                </CarouselProvider>
            </div>
        )
    }
}
