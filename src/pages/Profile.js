import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { profileToggle } from '../Redux/Toggle/ProfileToggle';
import '../Style/profile.css'

const Profile = () => {

    const dispatch = useDispatch();

    const toggleProfile = () => {
        dispatch(profileToggle())
    }

    const logout = () => {
        sessionStorage.removeItem("signUp")
        window.location.reload()
    }


    const name = sessionStorage.getItem('name')
    const address = sessionStorage.getItem('address')
    const phone = sessionStorage.getItem('phoneNumber')
    const pincode = sessionStorage.getItem('pincode')



    return (
        <div className='profile_container'>
            <div className='profile'>
                <div className='profile_close'>
                    <span onClick={toggleProfile}>
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                </div>
                <div className='profile_info'>
                    <h4>Name: {name}</h4>
                    <div className='d-flex flex-column'>
                        <p><span>Phone Number</span>: {phone} </p>
                        <p><span>Address</span>: {address} </p>
                        <p><span>Pincode</span>: {pincode} </p>
                        <span className='user d-flex align-item-center justify-content-between mt-2'>
                            <button className={(address === null) ? 'logout_btn' : 'btn_none'}>
                                <Link to='/checkout'>Add Address</Link>
                            </button>
                            <button onClick={logout} className='logout_btn'>
                                Logout <Link to='/login'><i class="fa-solid fa-right-from-bracket"></i></Link>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
