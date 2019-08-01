import React from 'react';
import './Retailer.scss';
import SearchRetailer from './Search/Search-Retailer';
import { GoogleMap, withScriptjs, withGoogleMap  } from 'react-google-maps';



function Map(){
    return( 
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 37.129269, lng: -121.656410}}
        />
    )
}

    const WrapperMap = withScriptjs(withGoogleMap(Map));



export default function Retailer() {
    return (
        <div className='Retailer'>
            <div className='RetailerWrap'>

                <div className='Retailer-Map'>
                    <div className='Dealer-Map'>
                       <WrapperMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCs0Ihg3HbUUw-Ub47aH9uqTPdwpPPHQGc`}
                       loadingElement={<div style={{height: "100%"}} />}
                       containerElement={<div style={{height: "100%"}} />}
                       mapElement={<div style={{height: "100%"}} />}
                       />
                    </div>
                </div>

                <SearchRetailer />

            </div>
        </div>
    )
}
