import React from 'react';
import ButtonImage from '../assets/images/button.svg';
import ImageHd from '../assets/images/img-hd.png';
import Button2Image from '../assets/images/button-2.svg';
import Footer from './layout/Footer';
import Brands from './home/Brands';
import Contact from './home/Contact';
import News from './home/News';
import Trending from './home/Trending';
import DisitilleriesMerchant from './home/DisitilleriesMerchant';
import Header from './layout/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Header />
      <section className="hero-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="ps-5 ms-5">
                <h1>LOREM IPSUM</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link href="#" className="text-white button mt-2">
                  <img className="group" src={ButtonImage} alt=''/>
                  <span className="text-wrapper-28">Explore more</span>
                </Link>
                <div className="text-hd">1M + collections</div>
              </div>
            </div>
            <div className="col-md-7 p-0 text-end">
              <div className="hero-image">
                <img src={ImageHd} alt="Hero" className="w-100 img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-factor">
        <div className="container">
          <div className="tf-main">
            <div className="tf-content">
              <div className="tf-heavy">243242</div>
              <div className="tf-sub-cnt">WHISKIES</div>
            </div>
            <div className="tf-content">
              <div className="tf-heavy">842</div>
              <div className="tf-sub-cnt">DISTILLERIES</div>
            </div>
            <div className="tf-content">
              <div className="tf-heavy">6442</div>
              <div className="tf-sub-cnt">BRANDS</div>
            </div>
            <div className="tf-content">
              <div className="tf-heavy">3142</div>
              <div className="tf-sub-cnt">MEMBERS</div>
            </div>
            <div className="tf-content">
              <div className="tf-heavy">2442</div>
              <div className="tf-sub-cnt">COLLECTIONS</div>
            </div>
          </div>
        </div>
      </section>

      <section className="country">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-4 col-md-4 offset-md-2">
              <div className="main-hd">
                <h2>
                  <span className="number">8+ </span>
                  <span className="count">COUNTRIES</span>
                </h2>
              </div>
              <p className="pra">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="button">
                <img className="group" src={Button2Image} alt=''/>
                <span className="text-wrapper-28">View all countries</span>
              </div>
            </div>
            <div className="col-md-6"> </div>
          </div>
        </div>
      </section>

      <section className="collection">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-4 col-md-4 offset-md-2">
              <div className="main-hd">
                <h2>
                  {' '}
                  <span className="number">2M+ </span> <span className="count">Collections</span>
                </h2>
              </div>
              <p className="pra">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="button">
                <img className="group" src={Button2Image} alt=''/>
                <span className="text-wrapper-28">View all countries</span>
              </div>
            </div>
            <div className="col-md-6"> </div>
          </div>
        </div>
      </section>

      <Brands />
      <DisitilleriesMerchant />
      <Trending />
      <div className="sections_bg">
        <News />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
