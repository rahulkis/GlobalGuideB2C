import React from 'react'

const Polls = () => {
  return (
    <div className="mb-4 polls_sec release_box">
            <h2>Polls</h2>
            <p>Which of proposed products you would prefers?</p>
            <div className='d-flex flex-wrap align-items-center mb-2 polls_product'>
              <div className='col-6 col-md-6'>
                <input type="radio" name="product" checked/> <label for="product">(Product 1)</label> 
              </div>
              <div className='col-6 col-md-6'>
                <input type="radio" name="product" /> <label for="product">(Product 2)</label>  
              </div>
              <div className='col-6 col-md-6'>
                <input type="radio" name="product" /> <label for="product">(Product 3)</label>  
              </div>
              <div className='col-6 col-md-6'>
                <input type="radio" name="product" /> <label for="product">(Product 4)</label> 
              </div>

              <div className='col-12 col-md-12 mt-6'>
                <button className='btn btnColor ms-auto w-100 mt-4 h-25'>Vote</button>
              </div>

            </div>
               
          </div>
  )
}

export default Polls
