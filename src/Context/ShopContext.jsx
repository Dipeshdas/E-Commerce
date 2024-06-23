import React, { createContext, useState } from 'react'
import all_product from '../Components/Assests/All_Data';


export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
        
    }
    return cart;
}

const ShopContextProvider=(props)=>{
    
    
    const [cartItems,setCartItems]=useState(getDefaultCart())


    const [selectedSize, setSelectedSize] = useState('M');

    const handleToggle = (size) => {
        setSelectedSize(size); 
    };

    const getSizeStyle = (size) => {
        return {
        cursor: 'pointer', 
        color: selectedSize === size ? 'black' : '',
        backgroundColor: selectedSize === size ? 'yellow' : '', 
        };
    };
    

    // console.log(cartItems);
    
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({
            ...prev,[itemId]:prev[itemId]+1         
        }))
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const itemIndx in cartItems){
            if(cartItems[itemIndx]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(itemIndx))
                totalAmount+=itemInfo.new_price*cartItems[itemIndx];
                // console.log(itemIndx);
            }
            // console.log(all_product[itemIndx]);
        }
        return totalAmount;
    }

    const getTotalCartItems=()=>{
        let totalItems=0;
        for(const itemIndx in cartItems){
            if(cartItems[itemIndx]>0){
                totalItems+=cartItems[itemIndx];
            }
        }
        return totalItems;
    }

   

    const contextValue={all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems,handleToggle,getSizeStyle,selectedSize}

    

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;