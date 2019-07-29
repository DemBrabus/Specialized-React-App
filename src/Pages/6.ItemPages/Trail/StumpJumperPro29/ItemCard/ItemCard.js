import React from 'react';
import './ItemCard.scss';
import { Link } from 'react-router-dom';

export default function ItemCard() {
    return (
        <div className='ItemCard'>
            <div className='ItemCardWrap'>
                <div className='ItemCard-Column'>
                    <p className='ItemCard-Name'>StumpJumper Pro 29</p>
                    <div className='ItemCard-PricePart'>
                        <p className='ItemCard-Price'>$6,500.00</p>
                        <p className='ItemCard-PartNumber'>Part No. 94519-0002</p>
                    </div>
                </div>
                <div className='ItemCard-Column ItemCard-Column2'>
                    <p className='ItemCard-Color'>Dark Blue / Black / Metallic Black</p>
                    <form className='ItemCard-Form'>
                        <select className='ItemCard-Select'>
                            <option className='ItemCard-Option' value='s2'>S2</option>
                            <option className='ItemCard-Option' value='s3'>S3</option>
                        </select>
                    </form>
                </div>
                <div className='ItemCard-Column'>
                    <div className='ItemCard-ButtonWrap'>
                        <button className='ItemCard-Button BG-Red'>ADD TO CART</button>
                        <Link to='/retailers' className='ItemCard-Button'>FIND NEAR BY</Link>
                    </div>
                    
                    <p className='ItemCard-WishList'>+ WISHLIST</p>
                </div>

            </div>
        </div>
    )
}
