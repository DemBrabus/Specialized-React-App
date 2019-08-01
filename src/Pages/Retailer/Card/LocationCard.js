import React from 'react';
import './LocationCard.scss';

export default function LocationCard({ number, name, address1, address2, address3, storeUrl, backgroundColor }) {
    return (
        <div className='LocationCard'>
            <div className='LocationCard-Wrap'>
                <div className='LocationCard-NumberColumn'>
                    <p className='LocationCard-Number'>{ number }</p>
                </div>
                <div className='LocationCard-StoreColumn'>
                    <p className='LocationCard-StoreName'>{ name }</p>
                    <p className='LocationCard-Address'>{ address1 }</p>
                    <p className='LocationCard-Address'>{ address2 }</p>
                    <p className='LocationCard-Address'>{ address3 }</p>
                    <p className='LocationCard-Links'>Get Directions</p>
                    <p className='LocationCard-Links'>{ storeUrl }</p>
                </div>
                <div className='LocationCard-HoursColumn'>
                    <p className='LocationCard-HoursTitle'>STORE HOURS</p>
                    <p className='LocationCard-Hours'>Sunday: 12:00 PM - 5:00 PM</p>
                    <p className='LocationCard-Hours'>Monday: 11:00 AM - 7:00 PM</p>
                    <p className='LocationCard-Hours'>Tuesday: 11:00 AM - 7:00 PM</p>
                    <p className='LocationCard-Hours'>Wednesday: 11:00 AM - 7:00 PM</p>
                    <p className='LocationCard-Hours'>Thursday: 11:00 AM - 7:00 PM</p>
                    <p className='LocationCard-Hours'>Friday: 11:00 AM - 7:00 PM</p>
                    <p className='LocationCard-Hours'>Saturday: 10:00 AM - 6:00 PM</p>
                </div>
            </div>
        </div>
    )
}

