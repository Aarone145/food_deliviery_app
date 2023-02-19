import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem,removeItem,deleteItem } from '../../../Redux/Shopping-cart/cartSlice';


import '../../../Style/cart-item.css'


const CartItems = ({item}) => {


    const {id, title, price, image, quantity, totalPrice} = item;

    const dispatch = useDispatch()

    const incrementItem = () => {
        dispatch(addItem({
            id,
            title,
            price,
            image
        }))
    }

    const decreaseItem = () => {
        dispatch(removeItem(id))
    }

    const deleteItems = () => {
        dispatch(deleteItem(id))
    }


    return (
        <div>

            <li className='list-group-item border border-0'>
                <div className='cart_item-info d-flex gap-2'>
                    <img src={image} alt="product-img" />

                    <div className='cart_product-info w-100 d-flex align-items-center gap-5 justify-content-between'>
                        <div>
                            <h6 className='cart_product-title'>{title}</h6>
                            <p className='cart_product-price ms-0 d-flex align-items-center gap-5'>
                                {quantity}x <span>${totalPrice}</span>
                            </p>
                            <div className='increase_decrease-btns d-flex align-items-center justify-content-between'>
                                <span className='increase-btn' onClick={incrementItem} >
                                    <i class="fa-solid fa-plus"></i>
                                </span>
                                <span className='quantity'>{quantity}</span>
                                <span className='decrease-btn' onClick={decreaseItem} >
                                    <i class="fa-solid fa-minus"></i>
                                </span>
                            </div>
                        </div>

                        <span className='delete-btn' onClick={deleteItems}>
                            <i class="fa-solid fa-xmark"></i>
                        </span>
                    </div>
                </div>
            </li>

        </div>
    )
}

export default CartItems
