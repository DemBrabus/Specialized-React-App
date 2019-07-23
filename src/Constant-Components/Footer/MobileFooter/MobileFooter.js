import React from 'react'
import './MobileFooter.scss';
import { Link } from 'react-router-dom';

export default function MobileFooter() {


    const HandleSubmit = (event) => {
        event.preventDefault();
    }



    return (
        <div className='MobileFooter'>
            <div className='MobileFooterWrapper'>




            <div className='MobileFooter-Top'>
                <form className='MobileFooter-Form' onSubmit={HandleSubmit}>
                    <input className='MobileFooter-FormInput' type='email' name='email' placeholder='Join Our Newsletter'></input>
                    <button type='submit' className='MobileFooter-FormSubmit'>JOIN</button>
                </form>
                <p className='MobileFooter-Left-Text'>By submitting your email address you agree to the </p>
                <p className='MobileFooter-Left-Text MobileFooter-Terms'>Terms & Conditions</p>
            </div>

            <div className='MobileFooter-Middle'>
                <Link to='/retailers' className='MobileFooter-Right-RetailerButton'>FIND A RETAILER</Link>
                <div className='MobileFooter-SocialTags'>
                    <div className='FullFooter-SocialTag FullFooter-SocialTag1'></div>
                        <div className='FullFooter-SocialTag FullFooter-SocialTag2'></div>
                        <div className='FullFooter-SocialTag FullFooter-SocialTag3'></div>
                        <div className='FullFooter-SocialTag FullFooter-SocialTag4'></div>
                </div>
            </div>

            <div className='MobileFooter-Bottom'>
                <p className='MobileFooter-CenterText'>Contact Us</p>
                <p className='MobileFooter-CenterText'>FAQ's</p>
                <p className='MobileFooter-CenterText'>Returns</p>
                <p className='MobileFooter-CenterText'>Warranty</p>
                <p className='MobileFooter-CenterText'>Test The Best</p>
                <p className='MobileFooter-CenterText'>Bicycle Registration</p>
                <p className='MobileFooter-CenterText'>Safety Notifications</p>
                <p className='MobileFooter-CenterText'>Terms of Use</p>
                <p className='MobileFooter-CenterText'>Counterfeit Awareness</p>
                <p className='MobileFooter-CenterText'>Careers</p>
            </div>

            <div className='FullFooter-CopyRightsWrap'>
                <div className='FullFooter-CopyRightsTop'>
                    <p className='FullFooter-CopyRights-Text'>Privacy Policy</p>
                    <p className='FullFooter-CopyRights-Text'>California Transparency Act</p>
                </div>
                <p className='FullFooter-CopyRights-Bottom'>© 2019. Specialized Bicycle Components. All Rights Reserved</p>
            </div>




            </div>
        </div>
    )
}
