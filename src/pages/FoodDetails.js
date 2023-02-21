import React, { useEffect, useState } from 'react'

import AllProducts from '../assset/Data/AllProducts'

import '../Style/product-details.css'

import CommonSection from '../components/Extras/common-Section/CommonSection'
import { useLocation } from 'react-router-dom'
import ProductCard from '../components/Extras/product-card/ProductCard'

const FoodDetails = () => {


  const [details, setDetails] = useState({
    image: '',
    title: '',
    price: '',
    category: '',
    desc: ''
  })


  const suggestedProducts = AllProducts.filter((item) => details.category === item.category)

  const { search } = useLocation();

  const query = new URLSearchParams(search);

  useEffect(() => {
    const RequriedProducts = AllProducts.filter((elem) => elem.id === query.get('id'));
    setDetails(RequriedProducts[0]);
  }, [])


  return (
    <section>
      <CommonSection title={details.title} />
      <div className='container'>
        <div className='row'>

          <div className='col-lg-6 col-md-6'>
            <div className='product_main-img text-center'>
              <img src={details.image} className='w-50' alt='img' />
            </div>
          </div>

          <div className='col-lg-6 col-md-6'>
            <div className='product_content-single'>
              <h2 className='product_title mb-3'>{details.title}</h2>
              <p className='product_price m-0'>
                {" "}
                Price: <span>${details.price} </span>
              </p>
              <p className='category ms-0'>
                Category: <span>{details.category}</span>
              </p>
              <button className='addTOCart_btn'>Add to Cart</button>
            </div>
          </div>

          <div className='col-lg-12'>
            <div className='tab'>
              <h6>Description</h6>
            </div>
            <div className='tab_content'>
              <p className='ms-0'>
                {details.desc}
              </p>
            </div>
          </div>
        </div>

        <div className='related_products row'>
          <h2>Products Related to {details.category}</h2>
          {
            suggestedProducts.map((item) => (
              <div className='col-lg-3 col-md-4 mt-5' key={item.id}>

                <ProductCard item={item} />

              </div>
            ))
          }

        </div>


      </div>
    </section>
  )
}

export default FoodDetails
