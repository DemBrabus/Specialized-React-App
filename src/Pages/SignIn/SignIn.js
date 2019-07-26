import React, { Component } from 'react';
import './SignIn.scss';
import { Link } from 'react-router-dom';

export default class SignIn extends Component {
    render() {
        return (
            <div className='SignIn'>
                <div className='SignInWrap'>
                    <div className='SignIn-SignIn'>

                        <p className='SignIn-Title'>SIGN IN TO YOUR ACCOUNT</p>

                        <p className='SignInText'>Welcome to the new Specialized.com. If you had an existing account with us, you will need to reset your password to use it. Simply select 'Forgot Your Password?' below to do so.
                        </p>

                        <form className='SignIn-Form'>

                            <label className='SignIn-FormLabel'>EMAIL</label>
                            <input className='SignIn-FormInput' type='email' name='email'></input>

                            <label className='SignIn-FormLabel'>PASSWORD</label>
                            <input className='SignIn-FormInput' type='password' name='password'></input>

                            <Link to='' className='SignIn-FormForgetPassword'>FORGOT YOUR PASSWORD?</Link>

                            <label className='SignIn-Form-RememberMe'>
                                <input type='checkbox' name='remember me' value='true' className='SignIn-Form-RememberMeBox'/>Remember Me
                            </label>

                            <button type='submit' className='SignIn-FormSubmit'>SIGN IN</button>

                        </form>

                    </div>
                    <div className='SignIn-SignUp'>

                        <p className='SignIn-Title'>CREATE AN ACCOUNT</p>

                        <p className='SignInText'>This will allow you to:</p>

                        <ul className='SignIn-List'>
                            <li className='SignInText'>Save billing and shipping details for faster checkout.</li>
                            <li className='SignInText'>Complete your rider profile to receive Specialized news and product updates.</li>
                            <li className='SignInText'>Archive purchases and order history.</li>
                            <li className='SignInText'>Register purchased bikes and warranties.</li>
                        </ul>

                    <Link to='/account-creation' className='SignUp-Button'>CREATE ACCOUNT</Link>

                    </div>
                </div>
            </div>          
        )
    }
}
