import React, { useState, useEffect } from 'react';
import Button2Image from '../../assets/images/button-2.svg';
import LoginRightArrowImage from '../../assets/images/lognrightarrow.png.png';
import axios from 'axios';
import { API_BASE_URL, IMAGE_BASE_URL } from '../../constants/Api';
import { DISTILLERIES } from '../../constants/AppConstants';
import { Link } from 'react-router-dom';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

/* Distilleries slider */
const options = {
  margin: 30,
  responsiveClass: true,
  nav: false,
  loop: true,
  dots: false,
  items: 3,
  autoplay: true,
  smartSpeed: 1000,
  stagePadding: 100,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
  },
};

const DisitilleriesMerchant = () => {

  const [getDistilleryMerchantList, setDistilleryMerchantList] = useState([]);

  useEffect(() => {
    getDistilleryMerchant();
  }, []);

  const getDistilleryMerchant = async () => {
    try {
      const getDistilleryMerchant = await axios.get(API_BASE_URL + DISTILLERIES.GET_ALL_MERCHANT_DISTILLERIES);
      if (getDistilleryMerchant.status === 200) {
        setDistilleryMerchantList(getDistilleryMerchant.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <section className="distilleries-sec carousel-card sec-pad">
        <div className="container">
          <h2 className="heading text-center">Distilleries & Merchants</h2>
          <OwlCarousel className="distilleries-slider owl-carousel" {...options}>
            {getDistilleryMerchantList &&
              getDistilleryMerchantList.length > 0 &&
              getDistilleryMerchantList.map((distillery, index) => (
                <div className="item">
                  <div className="cards-wrapper">
                    <div className="card h-100">
                      <img src={IMAGE_BASE_URL + distillery.logo} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">{distillery.name}</p>
                        <Link href="#" className="d-flex align-items-center justify-content-end">
                          Explore more <img className="w-auto ms-2" src={LoginRightArrowImage} alt='' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </OwlCarousel>
          <div className="trnd_buttons">
            <span className="line"></span>
            <Link href="#" className="button ms-3">
              <img className="group" src={Button2Image} alt='' />
              <Link to="/distilleries"><span className="text-wrapper-28">View all Distilleries</span></Link>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DisitilleriesMerchant;
