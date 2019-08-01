import React, { Component } from 'react';
import './Search-Retailer.scss';

export default class SearchRetailer extends Component {

    render() {

        const handleSubmit = (event) => {
            event.preventDefault()
        }

        return (
            <div className='Search-Retailer'>
                <form className='Retailer-SearchForm'>

                    <div className='SearchForm-SearchSide'>

                        <p className='Retailer-SearchTitle'>FIND A RETAILER</p>
                        <div className='SearchForm-InputWrap'>
                            <input type='text' 
                                name='address' 
                                className='Retailer-SearchInput'
                                placeholder='Enter Address or Zip'>
                            </input>

                            <div className='SearchForm-MilageWrap'>
                                <select className='Retailer-SearchSelect'>
                                    <option value='25'>25</option>
                                    <option value='50'>50</option>
                                    <option value='100'>100</option>
                                    <option value='200'>200</option>
                                </select>
                                <p className='Retailer-SearchForm-Measurement'>MILES</p>
                            </div>
                        </div> 

                        <button type='submit'
                        onSubmit={handleSubmit} className='SearchForm-Button'>SEARCH</button>
                        
                    </div>



                    <div className='SearchForm-FilterSide'>
                        <p className='SearchForm-FilterTitle'>FILTER STORES BY</p>
                        <div className='SearchForm-FilterWrap'>
                            <div className='SearchForm-FilterColumn'>
                                <label className='SearchForm-Filter'>
                                    <input type='checkbox' name='conceptStore' value='conceptStore'/>Concept Store
                                </label>
                                <label className='SearchForm-Filter'>
                                    <input type='checkbox' name='s-worksRetailer' value='s-worksRetailer'/>S-Works Retailer
                                </label>
                                <label className='SearchForm-Filter'>
                                    <input type='checkbox' name='eliteShop' value='eliteShop'/>Elite Shop
                                </label>
                                <label className='SearchForm-Filter'>
                                    <input type='checkbox' name='rovalWheelRetailer' value='rovalWheelRetailer'/>Roval Wheel Retailer
                                </label>
                                <label className='SearchForm-Filter'>
                                    <input type='checkbox' name='specializedTestCenter' value='specializedTestCenter'/>Specialized Test Center
                                </label>
                            </div>

                            <div className='SearchForm-FilterColumn'>
                                <label className='SearchForm-Filter'>
                                    <input type='checkbox' name='e-mountainBikeRetailer' value='e-mountainBikeRetailer'/>E-Mountain Bike Retailer
                                </label>
                                <label className='SearchForm-Filter'>
                                    <input type='checkbox' name='urbanE-bikeRetailer' value='urbanE-bikeRetailer'/>Urban
                                </label>
                                <label className='SearchForm-Filter'>
                                    <input type='checkbox' name='retülFit' value='retülFit'/>Retül Fit
                                </label>
                                <label className='SearchForm-Filter'>
                                    <input type='checkbox' name='retülMatch' value='retülMatch'/>Retül Match
                                </label>
                                
                                
                                
                                
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}
