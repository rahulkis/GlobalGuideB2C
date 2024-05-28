import React from 'react'

const BrandImg = ({item}) => {

  return (
    <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center">
        <img src={`${process.env.REACT_APP_GLOBAL_SERVER_IMAGE_URL}/${item.logo}`} alt="Description" className="img-fluid mb-2 mt-2 w-100" />
        <p>{item.name}</p>
    </div>
  )
}

export default BrandImg
