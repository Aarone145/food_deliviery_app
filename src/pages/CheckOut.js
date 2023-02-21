import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CommonSection from '../components/Extras/common-Section/CommonSection'

import { totalAmount } from '../Redux/Shopping-cart/cartSlice'

import '../Style/checkout.css'

const CheckOut = () => {

    const [formdata, setFormdata] = useState({
        address: '',
        phoneNumber: '',
        pincode: ''
    })

    const cartTotal = useSelector(totalAmount)
    let DeliveryCharge = 0;

    if (cartTotal > 0) {
        DeliveryCharge = 30;
    }

    const Total = cartTotal + DeliveryCharge;

    const name = sessionStorage.getItem('name')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    }

    const handleSubmit = () => {
        if (formdata.address && formdata.phoneNumber && formdata.pincode) {
            sessionStorage.setItem("address", formdata.address)
            sessionStorage.setItem("phoneNumber", formdata.phoneNumber)
            sessionStorage.setItem("pincode", formdata.pincode)
            alert("Address Added Successfully")
        }
    }

    return (
        <section>
            <CommonSection title='CheckOut' />
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-lg-8 col-md-6 col-sm-6'>
                        <h5>Delivery Details</h5>
                        <form className='checkout_form mb-4' onSubmit={handleSubmit} >
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Enter your Name'
                                    value={name}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    name='phoneNumber'
                                    value={formdata.phoneNumber}
                                    type='number'
                                    placeholder='Phone Number'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    name='address'
                                    value={formdata.address}
                                    type='text'
                                    placeholder='Address'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    name='pincode'
                                    value={formdata.pincode}
                                    type='number'
                                    placeholder='Pincode'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-btn d-flex mt-4'>
                                <button
                                    className='addTOCart_btn payment_btn'
                                    type='submit'
                                >
                                    Add Address
                                </button>
                                <button
                                    className={cartTotal === 0 ? 'disable_btn payment_btn' : 'addTOCart_btn payment_btn'}
                                >
                                    Payment
                                </button>
                            </div>
                        </form>

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
