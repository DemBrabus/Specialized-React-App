import React, { Component } from 'react';
import './Carousel-StumpJumperExpert27.scss';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class CarouselStumpJumperExpert27 extends Component {
    render() {
        return (
            <div className='Carousel-StumpJumperExpert27'>
                <CarouselProvider className='CarouselStyling'
                        naturalSlideWidth={100}
                        naturalSlideHeight={30}
                        totalSlides={6}>
                            <Slider>
                            <Slide className='STE-27-Slide1' index={0}></Slide>
                            <Slide className='STE-27-Slide2' index={1}></Slide>
                            <Slide className='STE-27-Slide3' index={2}></Slide>
                            <Slide className='STE-27-Slide4' index={3}></Slide>
                            <Slide className='STE-27-Slide5' index={4}></Slide>
                            <Slide className='STE-27-Slide6' index={5}></Slide>
                            </Slider>

                            <div className='DotWrap'>
                                <Dot slide={0} className='DOT1'/>
                                <Dot slide={1} className='DOT1'/>
                                <Dot slide={2} className='DOT1'/>
                                <Dot slide={3} className='DOT1'/>
                                <Dot slide={4} className='DOT1'/>
                                <Dot slide={5} className='DOT1'/>
                            </div>
                            

                            <ButtonBack className='Carousel-Button'></ButtonBack>
                            <ButtonNext className='Carousel-Button2'></ButtonNext>

                </CarouselProvider>
            </div>
        )
    }
}
