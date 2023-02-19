import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from '../../Routes/Routers'
import Cart from '../Extras/cart/Cart'
import { useSelector } from 'react-redux'

const Layout = () => {

  const showCart = useSelector(state => state.cartUi.cartVisibility)

  return (
    
    <div>
      <Header />
      {
        showCart && <Cart />
      }
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
