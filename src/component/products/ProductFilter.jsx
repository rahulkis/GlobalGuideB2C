import React from 'react'

const ProductFilter = () => {
  return (
    <>
        <h3>Setup the filters</h3>
        <div className="form-group mb-3">
            <label htmlFor="country">Country</label>
            <select className="form-control custom-selectbox" id="country" style={{ width: '100%' }}>
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            </select>
        </div>
        

        <div className="form-group mb-3">
            <label htmlFor="distillery_merchant">Distillery/Merchant</label>
            <select className="form-control custom-selectbox" id="Distillery/Merchant" style={{ width: '100%' }}>
            <option value="">Select Distillery/Merchant</option>
            
            </select>
        </div>

        <div className="form-group mb-3">
            <label htmlFor="brand">Brand</label>
            <select className="form-control custom-selectbox" id="brand" style={{ width: '100%' }}>
            <option value="">Select Brand</option>
            
            </select>
        </div>

        <div className="form-group mb-3">
            <label htmlFor="release">Release/SKU</label>
            <select className="form-control custom-selectbox" id="release" style={{ width: '100%' }}>
            <option value="">Select Release/SKU</option>
            
            </select>
        </div>

        <div className="form-group mb-3">
            <label htmlFor="collections">Collections</label>
            <select className="form-control custom-selectbox" id="brand" style={{ width: '100%' }}>
            <option value="">Select Collections</option>
            
            </select>
        </div>
    </>
  )
}

export default ProductFilter
