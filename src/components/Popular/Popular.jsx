import React from 'react'
import Popular1 from '../../img/popular1.png'
import Popular2 from '../../img/popular2.png'
import Popular3 from '../../img/popular3.png'
import Popular4 from '../../img/popular4.png'

const Popular = () => {

  const box = [
    {
      id: 1,
      img: Popular1,
      brendName: 'Brand Name',
      price: '$2.995',
      product: 'Product description here',
      colors: '0 colors available'
    },
    {
      id: 1,
      img: Popular2,
      brendName: 'Brand Name',
      price: '$2.995',
      product: 'Product description here',
      colors: '0 colors available'
    },
    {
      id: 1,
      img: Popular3,
      brendName: 'Brand Name',
      price: '$2.995',
      product: 'Product description here',
      colors: '0 colors available'
    },
    {
      id: 1,
      img: Popular4,
      brendName: 'Brand Name',
      price: '$2.995',
      product: 'Product description here',
      colors: '0 colors available'
    },
  ]
  
  return (
    <div className='popular'>
      <div className="container">
        <div className="popular__head">
          <div className="popular__head_titels titels">
            <h1 className='popular__head_text titels__text'>
              Popular Finds
            </h1>
          </div>
        </div>
        <div className="popular__cards">
          {
            box.map((boxs) => (
              <div className='popular__cards_card'>
                <div className="popular__cards_card-head">
                  <img src={boxs.img} alt="" />
                </div>
                <div className="popular__cards_card-main">
                  <div className="popularbrend flexs">
                    <h3 className="popularbrend__title">
                      {boxs.brendName}
                    </h3>
                    <h3 className="popularbrend__text">
                      {boxs.price}
                    </h3>
                  </div>
                  <div className="popularproduct">
                    <p className='popularproduct__desc'>
                      {boxs.product}
                    </p>
                  </div>
                  <div className="popularcolors">
                    <p className="popularcolors__desc">
                        {boxs.colors}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div> 
    </div>
  )
}

export default Popular
