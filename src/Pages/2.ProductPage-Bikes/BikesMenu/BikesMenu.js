import React, { Component } from 'react';
import './BikesMenu.scss';
import { Link } from 'react-router-dom';

export default class BikesMenu extends Component {
    constructor(){
        super();
        this.state = {
            Trail: false,
            DownHill: false,
            SWorks: false
        }
    }
            
        handleTrail = () => {
            this.setState((prevState) => {
            return {Trail: !prevState.Trail}
          });
        }

        handleDownHill = () => {
            this.setState((prevState) => {
            return {DownHill: !prevState.DownHill}
          });
        }

        handleSWorks = () => {
            this.setState((prevState) => {
            return {SWorks: !prevState.SWorks}
          });
        }



    render() {


            let TrailClasses = 'BikesMenu-SecondLevel';
            let TrailAddIconClasses = 'BikesMenu-AddIcon ActiveLevel';
            let TrailSubIconClasses = 'BikesMenu-SubIcon';
            if(this.state.Trail){
                TrailClasses = 'BikesMenu-SecondLevel ActiveLevel';
                TrailAddIconClasses = 'BikesMenu-AddIcon';
                TrailSubIconClasses = 'BikesMenu-SubIcon ActiveLevel'
            }

            let DownHillClasses = 'BikesMenu-SecondLevel';
            let DownHillAddIconClasses = 'BikesMenu-AddIcon ActiveLevel';
            let DownHillSubIconClasses = 'BikesMenu-SubIcon';
            if(this.state.DownHill){
                DownHillClasses = 'BikesMenu-SecondLevel ActiveLevel';
                DownHillAddIconClasses = 'BikesMenu-AddIcon';
                DownHillSubIconClasses = 'BikesMenu-SubIcon ActiveLevel'
            }

            let SWorksClasses = 'BikesMenu-SecondLevel';
            let SWorksAddIconClasses = 'BikesMenu-AddIcon ActiveLevel';
            let SWorksSubIconClasses = 'BikesMenu-SubIcon';
            if(this.state.SWorks){
                SWorksClasses = 'BikesMenu-SecondLevel ActiveLevel';
                SWorksAddIconClasses = 'BikesMenu-AddIcon';
                SWorksSubIconClasses = 'BikesMenu-SubIcon ActiveLevel'
            }
                



        return (
        <div className='BikesMenu'>
            <div className='BikesMenu-Wrap'>
                <p className='BikesMenu-Title'>SHORT CUTS</p>

                
                <div className='BikesMenu-Group'>
                    <p className='BikesMenu-SubTitle'>CATEGORY</p>
                    <div className='BikesMenu-ItemWrap'>
                        <div className='BikesMenu-PrimaryTextBox' onClick={this.handleTrail}>
                            <p className={TrailAddIconClasses}>+</p>
                            <p className={TrailSubIconClasses}>-</p>
                            <p className='BikesMenu-Text'>Trail</p>
                        </div>
                        <div className={TrailClasses}>
                            <Link to='/shop/trail/stumpjumper-pro-29' className='BikesMenu-SecondaryText'>StumpJumper Pro 29</Link>
                            <Link to='/shop/trail/stumpjumper-expert-29' className='BikesMenu-SecondaryText'>StumpJumper Expert 29</Link>
                            <Link to='/shop/trail/stumpjumper-expert-27' className='BikesMenu-SecondaryText'>StumpJumper Expert 27.5</Link>
                            <Link className='BikesMenu-SecondaryText'>Fuse Expert 29</Link>
                            <Link className='BikesMenu-SecondaryText'>Fuse Expert 27.5</Link>
                        </div>
                    </div>

                    <div className='BikesMenu-ItemWrap'>
                        <div className='BikesMenu-PrimaryTextBox' onClick={this.handleDownHill}>
                            <p className={DownHillAddIconClasses}>+</p>
                            <p className={DownHillSubIconClasses}>-</p>
                            <p className='BikesMenu-Text'>DownHill</p>
                        </div>
                        <div className={DownHillClasses}>
                            <Link to='/shop/downhill/demo-racer-29' className='BikesMenu-SecondaryText'>Demo Racer 29</Link>
                            <Link to='/shop/downhill/demo-expert-29' className='BikesMenu-SecondaryText'>Demo Expert 29</Link>
                            <Link to='/shop/downhill/demo-alloy-27' className='BikesMenu-SecondaryText'>Demo Alloy 27.5</Link>
                        </div>
                    </div>

                    <div className='BikesMenu-ItemWrap'>
                        <div className='BikesMenu-PrimaryTextBox' onClick={this.handleSWorks}>
                            <p className={SWorksAddIconClasses}>+</p>
                            <p className={SWorksSubIconClasses}>-</p>
                            <p className='BikesMenu-Text'>S-Works</p>
                        </div>
                        <div className={SWorksClasses}>
                            <Link to='/shop/s-works/s-works-demo-8' className='BikesMenu-SecondaryText'>S-Works Demo 8</Link>
                            <Link to='/shop/s-works/s-works-epic-evo' className='BikesMenu-SecondaryText'>S-Works Epic EVO</Link>
                            <Link to='/shop/s-works/s-works-stumpjumper-29' className='BikesMenu-SecondaryText'>S-Works StumpJumper 29</Link>
                            <Link className='BikesMenu-SecondaryText'>S-Works StumpJumper 27.5</Link>
                            <Link className='BikesMenu-SecondaryText'>S-Works Demo 8 Frame</Link>
                        </div>
                    </div>
                </div>  

                

                    <p className='BikesMenu-Note'>Bikes manufactured and sold by Specialized are guaranteed for quality and performance. We stand by our bikes and aim to produce the highest quality products.
                    Our bikes are made for riders, by riders.</p>

                          
            </div>
        </div>
        )
    }
}

