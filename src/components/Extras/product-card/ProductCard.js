import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../../Redux/Shopping-cart/cartSlice';

import { useHistory } from 'react-router-dom';

import '../../../Style/productCard.css'


const ProductCard = (props) => {

    const history = useHistory();

    const addDesc = (id) => {
       history.push(`/FoodDetails?id=${id}`)
    }

    const {id, title, image, price} = props.item;

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addItem({
            id,
            title,
            image,
            price
        }))
    }

    return (
        <div className='product_item'>
            <div className='product_img'>
                <img src={image} alt="Product-img" className='w-50' onClick={() => addDesc(id) } />
            </div>

            <div className='product_content'>
                <h5>{title}</h5>
                <div className='d-flex align-items-cnter justify-content-between'>
                    <span className='product_price'>${price}</span>
                    <button className='addTOCart_btn' onClick={addToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
