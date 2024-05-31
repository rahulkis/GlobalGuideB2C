import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import BrandImg from '../../../assets/images/brand-info.png'
import TrandImg from '../../../assets/images/tranding-1.png'
import { IMAGE_BASE_URL } from '../../../constants/Api';
const BrandInfo = () => {
    const products = [
        {
          id: 1,
          image: '../../../assets/images/brand-info.png',
          caption: 'Product 1'
        },
        {
          id: 2,
          image: '../../../assets/images/brand-info.png',
          caption: 'Product 2'
        },
        {
          id: 3,
          image: '../../../assets/images/brand-info.png ',
          caption: 'Product 3'
        }
      ];

    return (
    <div className="release_box boxes-bg mt-5">
      <p className='text-uppercase'>Brand Introduction</p>
      <div className="my-3">
         <img src={BrandImg} alt='img'/>
      </div>
      <div class="col-12 col-md-12 mb-4 mb-md-0 mt-2"><h3>About Us</h3>
      <p>Found in 1911, lorem ipsum this cognac has a very pleasant golden tint and the aromatics show classic scents of baked, white grapes, hard lemon candy, and opulent French oak. </p>
      </div>

      <h3 className="mt-4 mb-2">Trending Products</h3>
      <Carousel className="tranding-slider">
        {products.map((product) => (
          <Carousel.Item key={product.id}>
            <img
              className="d-block w-100"
              src={TrandImg}
              alt={product.caption}
            />
            {/* <Carousel.Caption className="carousel-caption-custom">
              <h5>{product.caption}</h5>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="text-center mt-2">
        <button className="btn explore-btn">
          Explore the brand <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  )
}

export default BrandInfo
