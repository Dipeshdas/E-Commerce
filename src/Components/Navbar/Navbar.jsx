import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo  from '../Assests/logo.png'
import cart  from '../Assests/cart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


function Navbar() {
    const[menu,setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext)

  return (
    <>
    <div className='navbar' style={{"background": "#2ecc71; color: rgba(0, 0, 0, 0.5)"}}>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>D-MART</p>
        </div>
        <nav className="fill">
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop" ? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}> <Link style={{textDecoration:'none'}} to='/mens'>Men</Link>  {menu==="men" ? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link> {menu==="women" ? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu==="kids" ? <hr/>:<></>}</li>
            </ul>
        </nav>

        <div className="nav-login-cart">
            
            <div className="container">
                
                
                <Link to='/login'><button>Login</button></Link>
                
                <Link to='/cart'><img src={cart} alt="" /></Link>
            </div>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            
        </div>
    
    </div>
  
    </>
  )
}

export default Navbar