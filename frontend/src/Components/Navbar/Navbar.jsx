import React, {  useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart from '../Assets/cart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
 import nav_dropdown from '../Assets/nav_dropdown.png'

function Navbar() {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle=(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open');

    }
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='' />
            </div>
            <img className='dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=''/>
            <ul ref={menuRef} className="nav-menu">

                <li onClick={() => { setMenu("Shop") }}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu === "Shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Men") }}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu === "Men" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Women") }}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu === "Women" ? <hr /> : <></>}</li>
                <li onClick={() => { (setMenu("Kids")) }}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu === "Kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            : <Link to='/login'><button>Login</button></Link>}
                <Link to='/cart'><img src={cart} alt='' /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar
