import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
import Header from '../layout/Header'
import MainNavigation from '../MainNavigation'
import './ProductDetails.css'
// import productImg from "./../../assets/images/dowmore25.png"
import Gallery from './product-components/Gallery';
import Detailing from './product-components/Detailing';
import Notes from './product-components/Notes';
import Flavours from './product-components/Flavours';
import Subscriber from './product-components/Subscriber';
import Footer from '../layout/Footer';
import Likes from './product-components/Likes';
import BrandInfo from './product-components/BrandInfo';
import { useLocation } from 'react-router-dom';
import ProductDescription from './product-components/ProductDescription';
import ReviewImg from '../../assets/images/icons/review-white.svg'
import TagImg from '../../assets/images/icons/tag-white.svg'

const ProductDetails = () => {

  const location = useLocation();
  const { product } = location.state || {}; // Get the product data from state

  const sections = [
    { number: '01', text: 'Introduction' },
    { number: '02', text: 'Gallery' },
    { number: '03', text: 'Product Details' },
    { number: '04', text: 'Nearest Store' },
  ];

  //const { productId } = useParams()

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <Header />
      <MainNavigation />
      <ProductDescription product={product} />

      {/* Gallery */}
      <div className='container-fluid gallery-background-image'>
        <div className="container mt-4">
          <div className="row">
            <Gallery />
            <div className="col-12 col-md-8">
              <div className="container-fluid p-0">
                <div className="row no-gutters">
                  <div className="col-12 border-right ">
                    <Detailing />
                    <Notes />
                    <Flavours />
                    <Subscriber />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="box-grey px-0">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-3 border-bottom border-white ps-2 pb-3">
                    <span className="ml-2 text-uppercase"><img src={ReviewImg} alt="img" className='me-1' /> Review This</span>
                  </li>
                  <li className="d-flex align-items-center ps-2 pb-0">
                    <span className="ml-2 text-uppercase"><img src={TagImg} alt="img" className='me-1' /> Add to My List</span>
                  </li>
                </ul>
              </div>
              <BrandInfo />
              <Likes />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ProductDetails
