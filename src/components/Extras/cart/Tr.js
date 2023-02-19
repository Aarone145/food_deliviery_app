import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../../Redux/Shopping-cart/cartSlice'

const Tr = (props) => {

    const dispatch = useDispatch();

    const DeleteItem = () => {
        dispatch(deleteItem(id))
    }

    const {id, image, title, price, quantity } = props.item;
    return (
        <tr>
            <td className='text-center cart__img-box'>
                <img src={image} alt="cart-img" />
            </td>
            <td className='text-center'>{title}</td>
            <td className='text-center'>${price}</td>
            <td className='text-center'>{quantity} Nos</td>
            <td className='text-center cart__item-del'>
                <i class="fa-solid fa-trash" onClick={DeleteItem} ></i>
            </td>
        </tr>
    )
}

export default Tr
