import React from 'react';
import { Link } from 'react-router-dom';
import ArorwImage from '../../assets/images/rightarrow.png';
import CircleImage from '../../assets/images/circle.svg';
import InfoImage from '../../assets/images/info.png';
import InfoImage2 from '../../assets/images/d-3.png';
import InfoImage3 from '../../assets/images/d-2.png';
import InfoImage4 from '../../assets/images/reload.png';

const Notifications = () => {
  return (
    <>
      <div className="release_box">
        <div className='d-flex flex-wrap align-items-center mb-2'>
          <div className='w-100 row m-0 mb-2'>
            <div className='p-0 col-8 col-md-8'>
              <h2>3 Notifications</h2>
            </div>
            <div className='p-0 col-4 col-md-4 text-end'>
              <Link to="#">View all  <img src={ArorwImage} alt='img' className='ms-2' /></Link>
            </div>
          </div>
          <div className='col-12 col-md-12'>
            <p>Subscription renewal required</p>
          </div>

          <div className='row w-100 m-0 mt-4'>
            <div className='p-0 col-8 col-md-8'>
              <span><img src={InfoImage} alt='img' className='me-2' /> <img src={InfoImage2} alt='img' className='me-2' /></span>
            </div>
            <div className='p-0 col-4 col-md-4 text-end'>
              <img src={InfoImage4} alt='img' className='me-2' /> <Link to="#">Renew </Link>
            </div>
          </div>
          <div className='row w-100 m-0 mt-3'>
            <div className='p-0 col-8 col-md-8'>
              <span><img src={InfoImage} alt='img' className='me-2' /> <img src={InfoImage3} alt='img' className='me-2' /></span>
            </div>
            <div className='p-0 col-4 col-md-4 text-end'>
              <img src={InfoImage4} alt='img' className='me-2' /> <Link to="#">Renew </Link>
            </div>
          </div>

          <div className='row w-100 m-0 mt-3'>
            <div className='p-0 col-8 col-md-8'>
              <span><img src={CircleImage} alt='img' className='me-2' /> Your review was published</span>
            </div>
            <div className='p-0 col-4 col-md-4 text-end'>
              <Link to="#">View posting </Link>
            </div>
          </div>


        </div>
      </div>
    </>

  )
}

export default Notifications
