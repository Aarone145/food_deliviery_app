import React from 'react'
import { useSelector } from 'react-redux'
import CommonSection from '../components/Extras/common-Section/CommonSection'

import { totalAmount } from '../Redux/Shopping-cart/cartSlice'

import '../Style/checkout.css'

const CheckOut = () => {

    const cartTotal = useSelector(totalAmount)
    let DeliveryCharge = 0 ;

    if(cartTotal > 0) {
        DeliveryCharge = 30;
    }

    const Total = cartTotal + DeliveryCharge;

    return (
        <section>
            <CommonSection title='CheckOut' />
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-lg-8 col-md-6 col-sm-6'>
                        <h5>Delivery Details</h5>
                        <form className='checkout_form mb-4'>
                            <div className='form-group'>
                                <input type='text' placeholder='Enter your Name' />
                            </div>
                            <div className='form-group'>
                                <input type='email' placeholder='Enter your email' />
                            </div>
                            <div className='form-group'>
                                <input type='number' placeholder='Phone Number' />
                            </div>
                            <div className='form-group'>
                                <input type='text' placeholder='Address' />
                            </div>
                            <div className='form-group'>
                                <input type='number' placeholder='Pincode' />
                            </div>
                        </form>
                        <button className='addTOCart_btn payment_btn'>Payment</button>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='checkout_bill'>
                            <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal: <span>${cartTotal}</span></h6>
                            <h6 className='d-flex align-items-center justify-content-between mb-3'>Delivery Charges: <span>${DeliveryCharge}</span> </h6>
                            <div className='checkout_total'>
                                <h5 className='d-flex align-items-center justify-content-between'>Total: <span>${Total}</span> </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckOut
