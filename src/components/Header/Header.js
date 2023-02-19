import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assset/images/res-logo.png'
import '../../Style/header.css'

import { totalQuantity } from '../../Redux/Shopping-cart/cartSlice'

import { cartToggle } from '../../Redux/Shopping-cart/CartUISlice'


const nav_link = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Foods',
    path: '/allfoods'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Checkout',
    path: '/checkout'
  }
]

const Header = () => {
  
  const logout = () => {
    sessionStorage.removeItem("signUp")
    window.location.reload()
  }


  const menuRef = useRef(null)

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show_menu')
  }

  const totalquantity = useSelector(totalQuantity)

  const dispatch = useDispatch()

  const toggleCart = () => {
    dispatch(cartToggle())
  }

  return (
    <header className='header header_shrink mb-2'>
      <div className='container'>
        <div className='nav_wrapper d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <img src={logo} alt="logo" />
            <h5>Fork & Spoons</h5>
          </div>

          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <div className='menu d-flex align-items-center gap-5'>
               
              {
                
                nav_link.map((items, index) => (
                  <Link
                    to={items.path}
                    key={index}
                    className={navClass => navClass.isActive ? 'active_menu' : ''}
                  >
                    {items.display}
                  </Link>
                ))
              }
            </div>
          </div>

          <div className='nav_right d-flex align-items-center gap-4'>
            <span className='cart_icon' onClick={toggleCart}>
              <i class="fa-solid fa-cart-shopping"></i>
              <span className='cart_badge'>{totalquantity}</span>
            </span>

            <span className='user'>
              <Link to='/login'><i class="fa-solid fa-user"></i></Link>
            </span>

            <span className='user'>
              <button onClick={logout} className='logout_btn'><Link to='/login'><i class="fa-solid fa-right-from-bracket"></i></Link></button>
            </span>

            <span className='mobile_menu' onClick={toggleMenu}>
              <i class="fa-solid fa-bars"></i>
            </span>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
