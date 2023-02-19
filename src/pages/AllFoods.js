import React, { useState } from 'react'
import CommonSection from '../components/Extras/common-Section/CommonSection'

import '../Style/allFoods.css'

import AllProducts from '../assset/Data/AllProducts'
import ProductCard from '../components/Extras/product-card/ProductCard'

const AllFoods = () => {


  const [searchItem, setSearchItem] = useState('')


  return (
    <div>
      <CommonSection title='All Foods' />
      <section className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-6 mb-5'>
            <div className='search_widget'>
              <input type='text' placeholder="I'm looking for........"
                value={searchItem}
                onChange={e => setSearchItem(e.target.value)}
              />
              <span>
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6 '>
            
          </div>


          {
            AllProducts.filter(item => {

              if (searchItem.valueOf === " ") {
                return item
              }
              if (
                item.title
                  .toLowerCase()
                  .includes(searchItem.toLowerCase())
              ) 
                return item
            })
              .map((item) => (
                <div className='col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-4' key={item.id} >
                  <ProductCard item={item} />
                </div>

              ))
          }
        </div>
      </section>
    </div>

  )
}

export default AllFoods
