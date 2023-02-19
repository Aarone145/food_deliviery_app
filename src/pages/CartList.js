import React from 'react'
import CommonSection from '../components/Extras/common-Section/CommonSection'
import '../Style/cart-page.css'
import {cartItem, totalAmount} from '../Redux/Shopping-cart/cartSlice'
import { useSelector } from 'react-redux'
import Tr from '../components/Extras/cart/Tr'
import { Link } from 'react-router-dom'

const CartList = () => {


  const cartitems = useSelector(cartItem);
  const total = useSelector(totalAmount)

  return (
    <section className='mb-5'>
      <CommonSection title="Your cart" />
      <div className='container'>
        <table className='table table-bordered'>
          {
            cartitems.length === 0 ? (<h5 className='text-center'>Your cart is empty</h5>) : (
              <thead>
                <tr>
                  <th>Images</th>
                  <th>Product Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
            )
          }
          <tbody>
            {
              cartitems.map((item) => (
                <Tr item={item} key={item.id} />
              ))
            }
          </tbody>
        </table>

        <div>
            <h5 className='cart_total'>SubTotal: $
              <span>{total}</span>
            </h5>
            <h6 className='mb-3'>
              Taxes and Delivery charges will be updated at checkout
            </h6>
            <div className='cart_items-btn'>
              <button className='addTOCart_btn me-4'><Link to='/allfoods' >Order More</Link></button>
              <button className='addTOCart_btn'><Link to='/checkout' >Proceed to checkout</Link></button>
            </div>
        </div>
      </div>
    </section>

  )
}

export default CartList
