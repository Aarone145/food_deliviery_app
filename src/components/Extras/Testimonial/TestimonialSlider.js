import React from 'react'

import '../../../Style/Slider.css'

import person01 from '../../../assset/images/ava-1.jpg'
import person02 from '../../../assset/images/ava-2.jpg'
import person03 from '../../../assset/images/ava-3.jpg'
import person04 from '../../../assset/images/ava-4.jpg'


const TestimonialSlider = () => {
    return (
        <div className='container mb-5'>
            <div id="carouselExampleIndicators_2" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators_2" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators_2" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators_2" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators_2" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>

                </div>
                <div class="carousel-inner d-flex text-center ">
                    <div class="carousel-item active" data-interval="100">
                        <div class="container">
                            <div class="testimonial-info">
                                <img src={person01} alt="" />
                                <h2>Saul Goodman</h2>
                                <h5>Ceo & Founder</h5>
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half"></i>
                                </div>
                                <p><i class="fa-sharp fa-solid fa-quote-left"></i>
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                                    suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.
                                    Maecen aliquam, risus at semper.<i class="fa-solid fa-quote-right"></i></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-interval="100">
                        <div class="container">
                            <div class="testimonial-info">
                                <img src={person02} alt="" />
                                <h2>Sara Wilsson</h2>
                                <h5>Designer</h5>
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half"></i>
                                </div>
                                <p><i class="fa-sharp fa-solid fa-quote-left"></i>
                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid
                                    cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet
                                    legam anim culpa.
                                    <i class="fa-solid fa-quote-right"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-interval="100">
                        <div class="container">
                            <div class="testimonial-info">
                                <img src={person03} alt="" />
                                <h2>Jena Karlis</h2>
                                <h5>Store Owner</h5>
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p><i class="fa-sharp fa-solid fa-quote-left"></i>
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem
                                    veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint
                                    minim.
                                    <i class="fa-solid fa-quote-right"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-interval="100">
                        <div class="container">
                            <div class="testimonial-info">
                                <img src={person04} alt="" />
                                <h2>Matt Brandon</h2>
                                <h5>Freelancer</h5>
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    
                                </div>
                                <p><i class="fa-sharp fa-solid fa-quote-left"></i>
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem
                                    veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint
                                    minim.
                                    <i class="fa-solid fa-quote-right"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TestimonialSlider
