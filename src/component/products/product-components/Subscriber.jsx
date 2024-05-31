import React from 'react'
import { Link } from 'react-router-dom';
import ArrowImage from '../../../assets/images/Arrow 4.png';

const Subscriber = () => {
  return (
    <div class="box my-4 subscriber-background-image subscribe-sec">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-9">  <h1 className='mb-2'>Subscribe for our newsletter</h1>
        <p>Keep updated about new products lorem ipsum</p>

        <form class="newsletter-subscription mt-5">
          <div class="input-container">
            <input type="text" placeholder="Full Name" required class="full-name" />
            <input type="email" placeholder="Email Address" required class="email mx-2" />
          </div>

          <div class="text-end"><button class="px-3 w-auto btn explore-btn">Subscribe for newsletter <img src={ArrowImage} className="ms-2 w-auto" alt="" /></button></div>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default Subscriber
