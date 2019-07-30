import React from 'react';
import './ItemCard-DemoAlloy27.scss';
import { Link } from 'react-router-dom';

export default function ItemCardDemoAlloy27() {
    return (
        <div className='ItemCard-DemoAlloy27'>
            <div className='ItemCardWrap'>
                <div className='ItemCard-Column'>
                    <p className='ItemCard-Name'>Demo Alloy 27.5</p>
                    <div className='ItemCard-PricePart'>
                        <p className='ItemCard-Price'>$3,400.00</p>
                        <p className='ItemCard-PartNumber'>Part No. 94519-0008</p>
                    </div>
                </div>
                <div className='ItemCard-Column ItemCard-Column2'>
                    <p className='ItemCard-Color'>Grey / Black / Metallic Black</p>
                    <form className='ItemCard-Form'>
                        <select className='ItemCard-Select'>
                            <option className='ItemCard-Option' value='S'>S - Out of Stock</option>
                            <option className='ItemCard-Option' value='M'>M - Out of Stock</option>
                            <option className='ItemCard-Option' value='L'>L - Out of Stock</option>
                            
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
