import React, { Component } from 'react';
import './Retailer.scss';
import SearchRetailer from './Search/Search-Retailer';
import { GoogleMap, withScriptjs, withGoogleMap  } from 'react-google-maps';
import LocationCard from './Card/LocationCard';
import STORE_DATA from '../../DataFiles/StoresData';


function Map(){
    return( 
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 37.129269, lng: -121.656410}}
        />
    )
}

    const WrapperMap = withScriptjs(withGoogleMap(Map));



export default class Retailer extends Component {
    constructor(){
        super();

        this.state = { 
            StoreData: STORE_DATA
        }
    }
    render() {

        const {StoreData} = this.state;

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

                    {
                        StoreData.map(({ id, ...otherStoreDataProps}) => (
                            <LocationCard key={id} {...otherStoreDataProps} />
                        ))
                    }


                    {/* <LocationCard /> */}



                </div>
            </div>
        )
    }
}




