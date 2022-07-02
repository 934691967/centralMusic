import React from 'react'
import Products1 from '../../img/products1.png'
import Products2 from '../../img/products2.png'
import Products3 from '../../img/products3.png'
import Products4 from '../../img/products4.png'
const Products = () => {


  const element = [
    {
      id: 1,
      img: Products1,
      brendName: 'Brand Name',
      price: '$2.995',
      product: 'Product description here',
      colors: '0 colors available'
    },
    {
      id: 2,
      img: Products2,
      brendName: 'Brand Name',
      price: '$2.995',
      product: 'Product description here',
      colors: '0 colors available'
    },
    {
      id: 3,
      img: Products3,
      brendName: 'Brand Name',
      price: '$2.995',
      product: 'Product description here',
      colors: '0 colors available'
    },
    {
      id: 4,
      img: Products4,
      brendName: 'Brand Name',
      price: '$2.995',
      product: 'Product description here',
      colors: '0 colors available'
    },
  ]

  return (
    <div className='container'>
      <div className="products">
        <div className="products__titles">
          <div className="products__titles_text titels">
            <h1 className='products__titles_text-col titels__text'>
              New Products
            </h1>
          </div>
        </div>  
        <div className="products__cards">
            {
              element.map(elm => (
                <div className='products__cards_card'>
                  <div className="products__cards_card-head">
                    <img src={elm.img} alt={elm.img} />
                  </div>
                  <div className="products__cards_card-main">
                    <div className="brendname flexs">
                      <h3 className='brendname__title'>{elm.brendName}</h3>
                      <h3 className='brendname__text'>{elm.price}</h3>
                    </div>
                    <div className="product">
                      <p className="product__desc">
                        {elm.product}
                      </p>
                    </div>
                    <div className="colors">
                      <p className='colors__desc'>{elm.colors}</p>
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

export default Products
