import React, { useState, useEffect } from 'react'
import axios from 'axios';
import BrandImg from './BrandImg';
import { Link } from 'react-router-dom';
import { FaBookmark, FaArrowRight } from 'react-icons/fa';
import TagImage from '../../assets/images/tag.svg'
import ArorwImage from '../../assets/images/rightarrow.png'
import LoginRightArrowImage from '../../assets/images/lognrightarrow.png.png';
import CardImage1 from '../../assets/images/img-1.png';
import CardImage2 from '../../assets/images/img-2.png';
import CardImage3 from '../../assets/images/img-3.png';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

/* Distilleries slider */
const options = {
    margin: 16,
    responsiveClass: true,
    nav: true,
    loop: true,
    dots: false,
    items: 3,
    autoplay: false,
    smartSpeed: 1000,
    stagePadding:0,
    
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
const Brand = ({brand}) => {
    const [brandImages, setBrandImages] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_GLOBAL_SERVER_RELEASE_BRAND_API_URL}${brand.id}`) // Replace with your API endpoint
        .then(response => {
            setBrandImages(response.data.data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, []);

  return (
    <div className="container mt-4">
    <div className="row g-3">
        <div className="col-12">
            <div className="product-box">
                <div className="row w-100 align-items-start trickPaddingRight ">
                    <div className="col-md-3 text-center text-md-start">
                        <img src={`${process.env.REACT_APP_GLOBAL_SERVER_IMAGE_URL}/${brand.logo}`} alt="Description" className="product-img img-fluid mb-2 mt-2 w-75" />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center">
                        <p className="mb-2">
                            {brand.story}
                        </p>
                    </div>
                    <div className="col-md-1 text-right text-md-end">
                        <img src={TagImage} alt=''/>
                    </div>
                </div>
               
               <div className='tranding-releases w-100'>
                    <div className='tranding-releases-heading'>
                        <div className="row w-100 align-items-start">
                        <div className="col-md-6 text-center text-md-start">
                            <h4>Trending Releases</h4>
                        </div>
                        <div className="col-md-6 text-right text-md-end">
                            <Link to="/#" className='text-color d-flex align-items-center justify-content-end'>Explore the brand <img class="ms-1" src={ArorwImage} alt="img" /></Link>
                        </div>
                        </div>
                    </div>
               </div>
               

                <div className="row justify-content-between text-center text-md-start">
                    
                    {loading && <p>Loading...</p>}
                    {/* {error && loading === false ? <p>Error: {error.message || 'Something went wrong!'}</p>: ''} */}
                    {/* {error && loading === false ? <p>Error: {error.message || 'Something went wrong!'}</p>: ''}
                    {error === false && loading === false && brandImages.length === 0  && <p>No record found </p>} */}
                    {/* {brandImages.length > 0 && brandImages.map((item) => <BrandImg item={item} />) }  */}
                   <div className='brands-slider-main'>
                        <OwlCarousel className="brands-slider owl-carousel" {...options}>
                        <div className="item">
                            <div className="cards-wrapper">
                            <div className="card h-100">
                                <img src={CardImage3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                <p className="card-text">Brand’s trending product name</p>
                            </div>
                            </div>
                            </div>
                            </div>
                            <div className="item">
                            <div className="cards-wrapper">
                            <div className="card h-100">
                                <img src={CardImage2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                <p className="card-text">Brand’s trending product name</p>
                            </div>
                            </div>
                            </div>
                            </div>
                            <div className="item">
                            <div className="cards-wrapper">
                            <div className="card h-100">
                                <img src={CardImage1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                <p className="card-text">Brand’s trending product name</p>
                            </div>
                            </div>
                            </div>
                            </div>
                            <div className="item">
                            <div className="cards-wrapper">
                            <div className="card h-100">
                                <img src={CardImage1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                <p className="card-text">Brand’s trending product name</p>
                            </div>
                            </div>
                            </div>
                            </div>
                    </OwlCarousel>
                   </div>
                </div>
            </div>
        </div>
    </div>
</div>
            
  )
}

export default Brand
