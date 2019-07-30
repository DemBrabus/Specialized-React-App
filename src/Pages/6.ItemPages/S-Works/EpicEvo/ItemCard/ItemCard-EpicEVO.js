import React from 'react';
import './ItemCard-EpicEVO.scss';
import { Link } from 'react-router-dom';

export default function ItemCardEpicEVO() {
    return (
        <div className='ItemCard-EpicEVO'>
            <div className='ItemCardWrap'>
                <div className='ItemCard-Column'>
                    <p className='ItemCard-Name'>S-Works Epic EVO</p>
                    <div className='ItemCard-PricePart'>
                        <p className='ItemCard-Price'>$10,500.00</p>
                        <p className='ItemCard-PartNumber'>Part No. 94519-00011</p>
                    </div>
                </div>
                <div className='ItemCard-Column ItemCard-Column2'>
                    <p className='ItemCard-Color'>White / Black / Metallic Black</p>
                    <form className='ItemCard-Form'>
                        <select className='ItemCard-Select'>
                            <option className='ItemCard-Option' value='S'>S</option>
                            <option className='ItemCard-Option' value='M'>M - Out of Stock</option>
                            <option className='ItemCard-Option' value='L'>L</option>
                            <option className='ItemCard-Option' value='XL'>XL - Out of Stock</option>
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
