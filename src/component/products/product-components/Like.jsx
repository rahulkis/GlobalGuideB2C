import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import image from './../../../assets/images/t-1.png'
const Like = ({title}) => {
  return (
    <div className='release_box boxes-bg my-4 p-0'>
    <div className="custom-card ">
      <div className="image-container">
        <img src={image} alt={title} className="img-fluid rounded-0 rounded-top" />
        <div className="overlay">
          <span className="more-flavor">More floral</span>
        </div>
      </div>
      <div className='p-3'>
      <h4 className="title text-start  ">{title}</h4>
      <div className='text-end'>
      <button className="w-auto btn explore-btn">
        Explore More <FaArrowRight className="ml-2" />
      </button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Like
