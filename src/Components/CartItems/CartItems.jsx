import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assests/remove_icon.png'

export const CartItems = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount}=useContext(ShopContext);
    
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {
            all_product.map((e,i)=>{
                if(cartItems[e.id]>0){
                    return(
                        <div key={i}>
                            <div  className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon'/>
                                <p key={e.id}>{e.name}</p>
                                {/* {e.size=selectedSize} */}
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img onClick={()=>{removeFromCart(e.id)}} src={remove_icon} alt="" className='carticon-remove-icon'/>
                            </div>
                            <hr />
                        </div>
                    )
                }else{
                    return null;
                }
            })
        }
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-totalitems">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-totalitems">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-totalitems">
                        <h3>
                            Total
                        </h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>BUY NOW</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code ,Enter it here</p>
                <div className="cartitem-promobox">
                    <input type="text" placeholder='Promo Code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>

    </div>
  )
}
