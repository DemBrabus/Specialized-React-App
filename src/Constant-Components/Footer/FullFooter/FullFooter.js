import React from 'react';
import './FullFooter.scss';
import { Link } from 'react-router-dom';

export default function FullFooter() {
    return (
        <div className='FullFooter'>
            <div className='FullFooterWrapper'>

                <div className='FullFooter-Left'>
                    <form className='FullFooter-Form'>
                        <input className='FullFooter-FormInput' type='email' name='email' placeholder='Join Our Newsletter'></input>
                        <button type='submit' className='FullFooter-FormSubmit'>JOIN</button>
                    </form>
                    <p className='FullFooter-Left-Text'>By submitting your email address you agree to the </p>
                    <p className='FullFooter-Left-Text FullFooter-Terms'>Terms & Conditions</p>
                </div>
                <div className='FullFooter-Center'>
                            <p className='FullFooter-CenterText'>Contact Us</p>
                            <p className='FullFooter-CenterText'>FAQ's</p>
                            <p className='FullFooter-CenterText'>Returns</p>
                            <p className='FullFooter-CenterText'>Warranty</p>
                            <p className='FullFooter-CenterText'>Test The Best</p>
                            <p className='FullFooter-CenterText'>Bicycle Registration</p>
                            <p className='FullFooter-CenterText'>Safety Notifications</p>
                            <p className='FullFooter-CenterText'>Terms of Use</p>
                            <p className='FullFooter-CenterText'>Counterfeit Awareness</p>
                            <p className='FullFooter-CenterText'>Careers</p>
                </div>
                <div className='FullFooter-Right'>
                    <Link to='/retailers' className='FullFooter-Right-RetailerButton'>FIND A RETAILER</Link>
                    <div className='FullFooter-SocialTags'>
                        <div className='FullFooter-SocialTag FullFooter-SocialTag1'></div>
                        <div className='FullFooter-SocialTag FullFooter-SocialTag2'></div>
                        <div className='FullFooter-SocialTag FullFooter-SocialTag3'></div>
                        <div className='FullFooter-SocialTag FullFooter-SocialTag4'></div>
                    </div>
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
