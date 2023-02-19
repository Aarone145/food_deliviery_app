import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assset/images/hero.png'
import '../Style/home.css'

import products from '../assset/Data/Product.js'

import foodCategoryImg01 from '../assset/images/hamburger.png'
import foodCategoryImg02 from '../assset/images/pizza.png'
import foodCategoryImg03 from '../assset/images/bread.png'

import ProductCard from '../components/Extras/product-card/ProductCard'
import TestimonialSlider from '../components/Extras/Testimonial/TestimonialSlider'


const Home = () => {


  const [category, setCategory] = useState('ALL')
  const [allProducts, setAllProducts] = useState(products)


  useEffect(() => {

    if (category === 'ALL') {
      setAllProducts(products);
    }

    if (category === 'BURGER') {
      const filterProduct = products.filter((item) => item.category === "Burger");

      setAllProducts(filterProduct);
    }

    if (category === 'PIZZA') {
      const filterProduct = products.filter((item) => item.category === "Pizza");

      setAllProducts(filterProduct);
    }

    if (category === 'BREAD') {
      const filterProduct = products.filter((item) => item.category === "Bread");

      setAllProducts(filterProduct);
    }

  }, [category])

  return (
    <>
      <section className='mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <div className='hero_content'>

                <h1 className='hero_title'>
                  <span>HUNGRY?</span> Just wait <br />food at<span> your door</span>
                </h1>

                <p className='ms-0'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className='hero_btns d-flex align-items-center gap-5'>

                  <button className='order-btn d-flex align-items-center gap-2'>
                    Order now<i class="fa-solid fa-arrow-right"></i>
                  </button>

                  <button className='all_foods-btn'>
                    <Link to='/allfoods' >See all foods</Link>
                  </button>

                </div>

                <div className='hero_service d-flex align-items-center gap-5'>

                  <p className='ms-0 mt-5 d-flex align-items-center gap-2'>
                    <span className='shipping-icon'>
                      <i class="fa-solid fa-truck-fast"></i>
                    </span>
                    No Shipping Charge
                  </p>

                  <p className='ms-0 mt-5 d-flex align-items-center gap-2'>
                    <span className='shipping-icon'>
                      <i class="fa-solid fa-user-shield"></i>
                    </span>
                    100% Secure Checkout
                  </p>

                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-6'>
              <div className='hero_img'>

                <img
                  src={heroImg}
                  alt="hero-img"
                  className='w-100'
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container mt-5'>
        <div className='row'>
          <div className='col-lg-12 text-center'>

            <h2 className='popular_food_title'>Popular Foods</h2>

          </div>
          <div className='col-lg-12'>

            <div className='food_category gap-5'>
              <button className={`all_btn ${ category === 'ALL' ? 'foodBtnActive' : '' }`}
                onClick={() => setCategory('ALL')} >
                All
              </button>
              <button className={`${ category === 'BURGER' ? 'foodBtnActive' : '' }`} onClick={() => setCategory('BURGER')}>
                <img src={foodCategoryImg01} alt="food-category" />Burger
              </button>
              <button className={`${ category === 'PIZZA' ? 'foodBtnActive' : '' }`} onClick={() => setCategory('PIZZA')}>
                <img src={foodCategoryImg02} alt="food-category" />Pizza
              </button>
              <button className={`${ category === 'BREAD' ? 'foodBtnActive' : '' }`} onClick={() => setCategory('BREAD')}>
                <img src={foodCategoryImg03} alt="food-category" />Bread
              </button>
            </div>

          </div>

          {
            allProducts.map((item) => (
              <div className='col-lg-3 col-md-4 mt-5' key={item.id}>

                <ProductCard item={item} />

              </div>
            ))
          }

        </div>
      </section>

      <section className='container mt-5'>
        <div className='testimonial'>
          <h5>Testimonials</h5>
          <h2>What our <span>Customers</span> are saying</h2>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Distinctio quasi qui minus quos sit perspiciatis inventore
            quis provident placeat fugiat!</p>
        </div>
        <TestimonialSlider />
      </section>

    </>
  )
}

export default Home

