import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from '../../Routes/Routers'
import Cart from '../Extras/cart/Cart'
import { useSelector } from 'react-redux'

import { toggleProfileState } from '../../Redux/Toggle/ProfileToggle'
import Profile from '../../pages/Profile'

const Layout = () => {

  const showCart = useSelector(state => state.cartUi.cartVisibility)
  const showProfile = useSelector(toggleProfileState)

  return (
    
    <div>
      <Header />
      {
        showCart && <Cart />
      }
      {
        showProfile && <Profile />
      }
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
