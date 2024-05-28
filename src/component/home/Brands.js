import React, { useState, useEffect } from 'react';
import Button2Image from '../../assets/images/button-2.svg';
import Button3Image from '../../assets/images/button-3.svg';
import BrandImage from '../../assets/images/brand-imag.png';
import ItemImage6 from '../../assets/images/item(6).png';

import axios from 'axios';
import { API_BASE_URL, IMAGE_BASE_URL } from '../../constants/Api';
import { BRANDS } from '../../constants/AppConstants';
import { Link } from 'react-router-dom';

const Brands = () => {
  const [getBrandsList, setBrandsList] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    getAllBrands();
  }, []);

  const getAllBrands = async () => {
    try {
      const getBrands = await axios.get(API_BASE_URL + BRANDS.GET_ALL_BRANDS);
      if (getBrands.status === 200) {
        setBrandsList(getBrands.data.data);
        setSelectedBrand(getBrands.data.data[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="brands-tabs sec-pad">
        <div className="container-fluid">
          <div className="col-11 m-auto">
            <h2 className="heading text-center">Brands</h2>
            <ul className="nav nav-underline justify-content-between align-items-end brand-logos" id="myTab" role="tablist">
              {getBrandsList &&
                getBrandsList.length > 0 &&
                getBrandsList.map((brand, index) => (
                  <li className="nav-item" role="presentation" key={index}>
                    <button
                      className="nav-link"
                      id={`tab${index}`}
                      data-bs-toggle="tab"
                      data-bs-target={`#tab${index}-pane`}
                      type="button"
                      role="tab"
                      aria-controls={`tab${index}-pane`}
                      aria-selected={selectedBrand && selectedBrand.id === brand.id}
                      onClick={() => setSelectedBrand(brand)}
                    >
                      <img src={IMAGE_BASE_URL + brand.logo} alt="" />
                    </button>
                  </li>
                ))}
            </ul>
            
            <div className="tab-content" id="myTabContent">
              {getBrandsList.length > 0 && selectedBrand && (
                <div className="tab-pane fade show active" id={`tab${selectedBrand.id}-pane`} role="tabpanel" aria-labelledby={`tab${selectedBrand.id}`}>
                  <div className="row">
                    <div className="col-md-6">
                      <div id="brand-img" className="carousel slide vertical" data-bs-touch="false">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src={BrandImage} className="d-block w-100" alt="Slide 1" />
                          </div>
                          <div className="carousel-item">
                            <img src={BrandImage} className="d-block w-100" alt="Slide 1" />
                          </div>
                          <div className="carousel-item">
                            <img src={BrandImage} className="d-block w-100" alt="Slide 1" />
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#brand-img" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#brand-img" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-1 right_sec">
                      <h4 className="mb-3">Lorem ipsum</h4>
                      <p className="pra">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="cards-wrapper">
                            <div className="card h-100 ms-0">
                              <img src={ItemImage6} className="card-img-top" alt="..." />
                              <div className="card-body">
                                <p className="card-text">SHERRY OAK 25 YEARS OLD, 2018 RELEASE</p>
                                <Link href="">Glenmorangie</Link>
                              </div>
                            </div>
                            <div className="card h-100">
                              <img src={ItemImage6} className="card-img-top" alt="..." />
                              <div className="card-body">
                                <p className="card-text">SHERRY OAK 25 YEARS OLD, 2018 RELEASE</p>
                                <Link href="">Glenmorangie</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="trnd_buttons">
                        <span className="line"></span>
                        <Link href="#" className="button">
                          <img className="group" src={Button3Image} alt="" />
                          <Link to="brands"><span className="text-wrapper-28">View all Brands</span></Link>
                        </Link>
                        <Link href="#" className="button ms-3">
                          <img className="group" src={Button2Image} alt="" />
                          <span className="text-wrapper-28">Explore this Brand</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
