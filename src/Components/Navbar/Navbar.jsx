import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
        <Link style={{textDecoration: 'none'}} to="/">
        <div className='nav-logo'>
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
        </div>
        </Link>
       
        <ul className='nav-menu'>
            <li onClick={()=> {setMenu("shop")}}> <Link className='nav-menu-link' style={{textDecoration: 'none',}} to='/'>Главная</Link>{menu === 'shop'?  <hr/> : <></>}</li>
            <li onClick={()=> {setMenu("mens")}}> <Link className='nav-menu-link'  style={{textDecoration: 'none'}} to='/mens'>Мужчинам </Link> {menu === 'mens'?  <hr/> : <></>}</li>
            <li onClick={()=> {setMenu("womens")}}> <Link className='nav-menu-link' style={{textDecoration: 'none'}} to='/womens'>Женщинам</Link> {menu === 'womens'?  <hr/> : <></>}</li>
            <li onClick={()=> {setMenu("kids")}}> <Link className='nav-menu-link' style={{textDecoration: 'none'}} to='/kids'>Детям</Link> {menu === 'kids'?  <hr/> : <></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
            <div className="nav-cart-count">{ getTotalCartItems()}</div>
        </div>
    </div>
  )
}
 