import React from 'react'
import './Gallery.css'
import galleryImg1 from './../../../assets/images/macallan.png'
import galleryImg2 from './../../../assets/images/macallan-rare.png'
import galleryImg3 from './../../../assets/images/macallan-12.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

/* Distilleries slider */
const options = {
  margin: 100,
  responsiveClass: true,
  nav: true,
  loop: true,
  center: true,
  dots: false,
  items: 3,
  autoplay: false,
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

const Gallery = () => {

  return (
    <div className="container">
      <h2 className="heading text-center text-white">Gallery</h2>
    <div className='gallery_main_sec'>
      <OwlCarousel className="gallery-slider owl-carousel" {...options}>
            <div className="item">
              <div className="cards-wrapper">
                <div className="card h-100">
                  <img src={galleryImg1} className="card-img-top" alt="img" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="cards-wrapper">
                <div className="card h-100">
                  <img src={galleryImg2} className="card-img-top" alt="img" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="cards-wrapper">
                <div className="card h-100">
                  <img src={galleryImg3} className="card-img-top" alt="img" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="cards-wrapper">
                <div className="card h-100">
                  <img src={galleryImg1} className="card-img-top" alt="img" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="cards-wrapper">
                <div className="card h-100">
                  <img src={galleryImg1} className="card-img-top" alt="img" />
                </div>
              </div>
            </div>
      </OwlCarousel>
      </div> 
    </div>
  )
}

export default Gallery
