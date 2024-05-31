import React from 'react';
import { Link } from 'react-router-dom';
import ArorwImage from '../../assets/images/Arrow 4.png';
import { IMAGE_BASE_URL } from '../../constants/Api';

const Merchant = ({ merchant }) => {

    return (
        <div className="container mt-4">
            <div className="row g-3">
                <div className="col-12">
                    <div className="product-box p-0">
                        <div className="row w-100 align-items-start trickPaddingRight ">
                            <div className="col-md-4 text-center text-md-start">
                                <img src={IMAGE_BASE_URL+merchant.logo} alt='img' className='w-100 product_img' />
                            </div>
                            <div className="col-md-8 d-flex flex-column justify-content-center">
                                <div className='h-100'>
                                    <h2>{merchant.name}</h2>
                                    <p className="mb-2">
                                        {merchant.story}
                                    </p>
                                    <div className='tranding-releases w-100'>
                                        <div className='tranding-releases-heading'>
                                            <div className="row w-100 align-items-start">
                                                <div className="col-md-12 text-right text-md-end pe-0">
                                                    <Link to="#" className=''>Explore more<img class="ms-1" src={ArorwImage} alt="img" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Merchant;
