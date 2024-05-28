import React from 'react'
import { FaArrowRight} from 'react-icons/fa'
import t1Image from './../../assets/images/t-1.png'
import t2Image from './../../assets/images/b.png'

const FavoriteBrands = () => {
  return (
    <div className="release_box">
            <h2>Favorite</h2>
              
              <div className="row text-center text-md-start justify-content-between">
                  <div className="col-12 col-md-6 mb-4 mb-md-0">
                  <img src={t2Image} alt="Description" className="img-fluid mb-2 mt-2 w-100" />
                  </div>
                  <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <button className="btn btnColor py-3 px-0 w-100 mb-2 mt-2">Explore the brand <FaArrowRight className="comment-icon me-1" /></button>
                  </div>
                  <div className="col-12 col-md-12 mb-4 mb-md-0 mt-2">
                    <h3>About Us</h3>
                    <p>Found in 1911, lorem ipsum this cognac has a very pleasant golden tint and the aromatics show classic scents of baked, white grapes, hard lemon candy, and opulent French oak. </p>
                  </div>

                  
              </div>
          </div>
  )
}

export default FavoriteBrands
