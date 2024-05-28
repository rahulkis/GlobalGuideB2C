import React, { useState, useEffect } from 'react';
import Button3Image from '../../assets/images/button-3.svg';
import ArrowImage from '../../assets/images/Arrow 4.png';
import axios from 'axios';
import { API_BASE_URL, IMAGE_BASE_URL } from '../../constants/Api';
import { RELEASE } from '../../constants/AppConstants';
import { Link } from 'react-router-dom';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

/* Trending slider */
const options = {
  margin: 30,
  responsiveClass: true,
  nav: false,
  dots: false,
  items: 3,
  autoplay: true,
  smartSpeed: 1000,
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

const Trending = () => {

  const [trendingReleaseList, setTrendingReleaseList] = useState([]);

  useEffect(() => {
    getTrendingRelease();
  }, []);

  const getTrendingRelease = async () => {
    try {
      const getTrendingReleaseList = await axios.get(API_BASE_URL + RELEASE.GET_ALL_TRENDING_RELEASE);
      if (getTrendingReleaseList.status === 200) {
        setTrendingReleaseList(getTrendingReleaseList.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log({ trendingReleaseList });

  return (
    <>
      <section className="trending-sec sec-pad carousel-card">
        <div className="container">
          <h2 className="heading text-center text-white">Trending releases</h2>
          <OwlCarousel className="trending-slider owl-carousel" {...options}>
          {trendingReleaseList &&
            trendingReleaseList.length > 0 &&
            trendingReleaseList.map((product, index) => (
            <div className="item">
              <div className="cards-wrapper trending-item">
                <div className="card h-100">
                  {/* <img src={T1Image} className="card-img-top" alt="" /> */}
                  <img src={IMAGE_BASE_URL + product.release_logo} className="card-img-top" alt="" />
                  <div className="card-body">
                    <span className="more_text">More floral</span>
                    <p className="card-text">{product.release_story}</p>
                    {/* <p className="card-text">BONOLLO GRAPPA OF AMARO NEBARRIQUE</p> */}
                    <div className="d-flex justify-content-end">
                      <Link href="#" className="btn">
                        <span>Explore more</span> <img src={ArrowImage} className="ms-auto w-auto" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            // <div className="item">
            //   <div className="cards-wrapper trending-item">
            //     <div className="card h-100">
            //       <img src={TabImage2} className="card-img-top" alt="" />
            //       <div className="card-body">
            //         <span className="more_text">More floral</span>
            //         <p className="card-text">CALVADOS ADRIEN CAMUT 6 YEAR</p>
            //         <div className="d-flex justify-content-end">
            //           <Link href="#" className="btn">
            //             <span>Explore more</span> <img src={ArrowImage} className="ms-auto w-auto" alt="" />
            //           </Link>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
            // <div className="item">
            //   <div className="cards-wrapper trending-item">
            //     <div className="card h-100">
            //       <img src={TabImage3} className="card-img-top" alt="" />
            //       <div className="card-body">
            //         <span className="more_text">More floral</span>
            //         <p className="card-text">PÈRE MAGLOIRE CALVADOS VSOP LESS FLORAL</p>
            //         <div className="d-flex justify-content-end">
            //           <Link href="#" className="btn">
            //             <span>Explore more</span> <img src={ArrowImage} className="ms-auto w-auto" alt="" />
            //           </Link>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
            // <div className="item">
            //   <div className="cards-wrapper trending-item">
            //     <div className="card h-100">
            //       <img src={T1Image} className="card-img-top" alt="" />
            //       <div className="card-body">
            //         <span className="more_text">More floral</span>
            //         <p className="card-text">BONOLLO GRAPPA OF AMARO NEBARRIQUE</p>
            //         <div className="d-flex justify-content-end">
            //           <Link href="#" className="btn">
            //             <span>Explore more</span> <img src={ArrowImage} className="ms-auto w-auto" alt="" />
            //           </Link>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
                      ))} 
          </OwlCarousel>

          <div className="trnd_buttons">
            <Link href="#" className="button">
              <img className="group" src={Button3Image} alt=''/>
              <Link to="/products"><span className="text-wrapper-28">View Product Catalogue</span></Link>
            </Link>
            <span className="line"></span>
            <Link href="#" className="button">
              <img className="group" src={Button3Image} alt=''/>
              <span className="text-wrapper-28">To Distilleries & Merchants</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trending;
