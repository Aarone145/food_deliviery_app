import React from 'react'
import logo from '../../assset/images/res-logo.png'
import '../../Style/footer.css'


const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-6'>

            <div className='logo footer_logo text-start'>
              <img src={logo} alt="logo" />
              <h5>Fork & Spoons</h5>
              <p className='m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, velit sed laoreet maximus, urna justo posuere nunc, in rutrum purus dui non enim.</p>
            </div>

          </div>

          <div className='col-lg-4 col-md-4 col-sm-6'>

            <h5 className='footer_title'> Contact</h5>
            <ul className='delivery_time-list list-group'>
              <li className='Contact-item list-group-item border-0 ps-0'>
                <span>Location : T-nagar, Chennai-6000002, India</span>

              </li>

              <li className='Contact-item list-group-item border-0 ps-0'>
                <span>phone : 0123654789</span>

              </li>

              <li className='Contact-item list-group-item border-0 ps-0'>
                <span>Email : fork&spoons@gmail.com</span>

              </li>
            </ul>

          </div>

          <div className='col-lg-4 col-md-4 col-sm-6'>

            <h5 className='footer_title'> Newsletter</h5>
            <p className='ms-0'>Subscribe our Newsletter</p>
            <div className='newsletter'>
              <input type='email' placeholder='Enter Your Email' />
              <span>
                <i class="fa-solid fa-paper-plane"></i>
              </span>
            </div>

          </div>
        </div>

        <div className='copyright'>
          <div className='social-links d-flex align-item-center gap-4'>
            <span><i class="fa-brands fa-facebook"></i></span>
            <span><i class="fa-brands fa-github"></i></span>
            <span><i class="fa-brands fa-youtube"></i></span>
            <span><i class="fa-brands fa-linkedin"></i></span>
          </div>
          <p className='copyright_text'>Copyright. All Rights Reserved.</p>
        </div>


      </div>
    </footer>
  )
}

export default Footer
