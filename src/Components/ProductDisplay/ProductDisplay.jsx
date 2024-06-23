import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png'
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
        
    
    const {product}=props;
    let {addToCart,handleToggle,getSizeStyle,selectedSize}=useContext(ShopContext);

    
  return (
    <div className='productdisplay'>

        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productisplay-img">
                <img className='productisplay-main-img' src={product.image} alt="" />
            </div>
        </div>

        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
               {product.description}
            </div>

            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div className='size' style={getSizeStyle('S')} onClick={() => handleToggle('S')}>S</div>
                    <div className='size' style={getSizeStyle('M')} onClick={() => handleToggle('M')}>M</div>
                    <div className='size' style={getSizeStyle('L')} onClick={() => handleToggle('L')}>L</div>
                    <div className='size' style={getSizeStyle('XL')} onClick={() => handleToggle('XL')}>XL</div>
                    <div className='size' style={getSizeStyle('XXL')} onClick={() => handleToggle('XXL')}>XXL</div>
                </div>
                
            </div>


            
            <button onClick={()=>{addToCart(product.id,selectedSize)}}> ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt ,Crop Top</p>
            <p className="productdisplay-right-category"><span>Tag :</span>Modern , Latest</p>
            
        </div>

    </div>
  )
}
