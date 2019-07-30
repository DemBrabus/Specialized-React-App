import React from 'react';
import './ItemCard-StumpJumper27.scss';
import { Link } from 'react-router-dom';

export default function ItemCardStumpJumper27() {
    return (
        <div className='ItemCard-StumpJumper27'>
            <div className='ItemCardWrap'>
                <div className='ItemCard-Column'>
                    <p className='ItemCard-Name'>StumpJumper Expert 29</p>
                    <div className='ItemCard-PricePart'>
                        <p className='ItemCard-Price'>$5,000.00</p>
                        <p className='ItemCard-PartNumber'>Part No. 94519-0003</p>
                    </div>
                </div>
                <div className='ItemCard-Column ItemCard-Column2'>
                    <p className='ItemCard-Color'>Light Blue / Black / Metallic Black</p>
                    <form className='ItemCard-Form'>
                        <select className='ItemCard-Select'>
                            <option className='ItemCard-Option' value='S'>S</option>
                            <option className='ItemCard-Option' value='M'>M</option>
                            <option className='ItemCard-Option' value='L'>L</option>
                            <option className='ItemCard-Option' value='XL'>XL</option>
                        </select>
                    </form>
                </div>
                <div className='ItemCard-Column'>
                    <div className='ItemCard-ButtonWrap'>
                        <button className='ItemCard-Button BG-Red'>ADD TO CART</button>
                        <Link to='/retailers' className='ItemCard-Button'>FIND NEAR BY</Link>
                    </div>
                    
                    <p className='ItemCard-WishList'>+ WISHLIST</p>
                    <p className='ItemCard-Stock' style={{color: '#38b555'}}>IN STOCK</p>
                </div>

            </div>
        </div>
    )
}
