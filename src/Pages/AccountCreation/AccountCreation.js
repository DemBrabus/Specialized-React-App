import React, { Component } from 'react';
import './AccountCreation.scss';

export default class AccountCreation extends Component {
    render() {
        return (
            <div className='AccountCreation'>
                <div className='AccountCreationWrap'>

                    <p className='AccountCreation-Title'>Create an Account</p>

                    <p className='AccountCreationText'>This will allow you to:</p>

                        <ul className='AccountCreation-List'>
                            <li className='AccountCreationText'>Save billing and shipping details for faster checkout.</li>
                            <li className='AccountCreationText'>Complete your rider profile to receive Specialized news and product updates.</li>
                            <li className='AccountCreationText'>Archive purchases and order history.</li>
                            <li className='AccountCreationText'>Register purchased bikes and warranties.</li>
                        </ul>

                    <p className='AccountCreationText'>All fields are required unless otherwise noted</p>

                    <form action='/' className='AccountCreation-Form'>

                        <label className='AccountCreation-FormLabel'>FIRST NAME</label>
                        <input type='name' name='firstName' className='AccountCreation-FormInput'></input>

                        <label className='AccountCreation-FormLabel'>LAST NAME</label>
                        <input type='name' name='lastName' className='AccountCreation-FormInput'></input>

                        <label className='AccountCreation-FormLabel'>EMAIL</label>
                        <input type='email' name='email' placeholder='Used For Sign In *' className='AccountCreation-FormInput'></input>

                        <label className='AccountCreation-FormLabel'>PASSWORD</label>
                        <input type='password' name='password' className='AccountCreation-FormInput'></input>

                        <label className='AccountCreation-FormLabel'>CONFIRM PASSWORD</label>
                        <input type='password' name='password confirmation' className='AccountCreation-FormInput'></input>

                        <label className='SignIn-Form-Terms'>
                            <input type='checkbox' name='remember me' value='true' className='AccountCreation-Form-TermsBox'/>Sign me up to receive email offers and updates
                        </label>

                        <label className='SignIn-Form-Terms'>
                            <input type='checkbox' name='remember me' value='true' className='AccountCreation-Form-TermsBox'/>I accept the Specialized Terms & Conditions
                        </label>

                        <label className='SignIn-Form-Terms'>
                            <input type='checkbox' name='remember me' value='true' className='AccountCreation-Form-TermsBox'/>I accept the Specialized Terms Of Use
                        </label>

                        <button type='submit' className='AccountCreation-FormSubmit'>SUBMIT</button>

                    </form>

                </div>
            </div>
        )
    }
}
