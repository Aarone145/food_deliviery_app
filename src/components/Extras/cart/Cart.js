

import React from 'react'
import { Link } from 'react-router-dom'
import CartItems from './CartItems'


import '../../../Style/shopping-cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartToggle } from '../../../Redux/Shopping-cart/CartUISlice'

import { cartItem,totalAmount } from '../../../Redux/Shopping-cart/cartSlice'


const Cart = () => {


debugger


    const dispatch = useDispatch()
    const cartProduct = useSelector(cartItem)
    const total = useSelector(totalAmount)

    const toggleCart = () => {
        dispatch(cartToggle())
    }

    return (
        <div className='cart_container'>
            <ul className='list-group cart'>
                <div className='cart_close'>
                    <span onClick={toggleCart}>
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                </div>
                <div className='cart_item-list'>
                    

                    {
                        cartProduct.length === 0 ? (<h6 className='text-center mt-5'>No item added to the cart</h6>) : 
                        (
                            cartProduct.map((item, index) => (
                                <CartItems item={item} key={index} />
                            ))
                        )
                        

                    }

                </div>
                <div className='cart_bottom d-flex align-items-center justify-content-between'>
                    <h6>Subtotal : <span>${total}</span></h6>
                    <button onClick={toggleCart}><Link to='/checkout'>Checkout</Link></button>
                </div>
            </ul>
        </div>
    )
}

export default Cart
