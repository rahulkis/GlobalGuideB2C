import React from 'react'
import { FaStar, FaCommentAlt, FaArrowRight, FaBookmark, FaCopy } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Product = ({ product }) => {
  return (
    <div className="container mt-4">
      <div className="row g-3">
        <div className="col-12">
          <div className="product-box row">
            <div className="product-image-container col-12 col-md-5">
              <img src={`${process.env.REACT_APP_GLOBAL_SERVER_IMAGE_URL}/${product.release_logo}`} alt="Product" className="product-image" />
            </div>
            <div className="product-details col-12 col-md-7 flex-grow-1">
              <h3>{product.release_story}</h3>
              <p className="author">{product.release_name}</p>
              <div className="d-flex flex-wrap align-items-center mb-2">
                <span className="radius_10 me-3 mb-1"><span className='fw-simibold'>ABV</span> 40%</span>
                <span className="radius_10 me-3 mb-1"><span className='fw-simibold'>VOL</span> 750ml</span>
                <span className="radius_10 d-flex align-items-center me-3 mb-1">
                  <FaStar className="rating-icon me-1 fw-simibold" />
                  <span>5.0</span>
                </span>
                <span className="radius_10 d-flex align-items-center me-3 mb-1">
                  <FaCommentAlt className="comment-icon me-1 fw-simibold" />
                  <span>10</span>
                </span>
              </div>
              <div className="d-flex flex-wrap align-items-center mb-2">
                <FaCopy Heart className="icon me-1" />
                <span className="me-3">180 Collections</span>
                <FaStar className="icon me-1" />
                Recommended
              </div>
              <div className="d-flex flex-wrap align-items-center mt-4">
                <FaBookmark Heart className="icon me-1" />
                <NavLink
                  // to={`/products/${product.release_id}`} 
                  to={`/products/${product.release_id}`}
                  state={{ product }} // Directly passing state
                  className="btn btnColor ms-auto">Explore more <FaArrowRight className="comment-icon me-1" /></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
