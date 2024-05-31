import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaHeart, FaArrowCircleRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import '../ProductDetails.css';
import productImg from "../../../assets/images/dowmore25.png";
import { Link } from 'react-router-dom';
import Twintter from '../../../assets/images/icons/twitter.svg'
import Fb from '../../../assets/images/icons/fb.svg'
import Insta from '../../../assets/images/icons/insta.svg'
import Tag from '../../../assets/images/icons/tag.svg'
import Arrow from '../../../assets/images/icons/left-arrow.svg'
import { IMAGE_BASE_URL } from '../../../constants/Api';

const ProductDescription = ({ product }) => {

    const sections = [
        { number: '01', text: 'Introduction' },
        { number: '02', text: 'Gallery' },
        { number: '03', text: 'Product Details' },
        { number: '04', text: 'Nearest Store' },
    ];

    return (
        <>
            <div className="container-fluid">
                <div className="row bg-white align-items-center" >
                    <div className="col-12 col-md-4  background-image">
                        <div className="container-fluid">
                            <div className="row breadcrumb-row custom_breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Brands</a></li>
                                        <li className="breadcrumb-item"><a href="#">Bowmore</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Islay single</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="row back-row">
                                <div className="col">
                                    <FaArrowLeft /> <span className="back-text">Back</span>
                                </div>
                            </div>
                            <div className="row content-row">

                                <div className="col-md-8 content-column">
                                    {sections.map((section, index) => (
                                        <div className="numbered-section" key={index}>
                                            <div className="number-box">
                                                <span>{section.number}</span>
                                            </div>
                                            <div className="number-text">{section.text}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-md-4 image-column">
                                    <div className="overlapping-image">
                                        {/* <img src={productImg} alt="Overlapping" className="responsive-image" /> */}
                                        <img src={IMAGE_BASE_URL + product.release_logo} alt="Overlapping" className="responsive-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 ">

                        <div className="container bg-white d-flex align-items-center vh-98">
                            <div className="row" style={{ marginLeft: '100px' }}>
                                <div className="col-md-4 brandinfo_right">
                                    <div className="mb-4">
                                        <h5>Price Band</h5>
                                        <p>$$</p>
                                    </div>

                                    <div className="mb-4">
                                        <h5>ABV</h5>
                                        <p>40.3%</p>
                                    </div>
                                    <div className="mb-4">
                                        <h5>Production type</h5>
                                        <p>Single malt whisky</p>
                                    </div>
                                    <div className="mb-4">
                                        <h5>Region</h5>
                                        <p>Islay</p>
                                    </div>
                                    <div className='mb-4'>
                                        <h5>Flavour camp</h5>
                                        <p>Fruity & Spicy</p>
                                    </div>
                                    <div className="md-4">
                                        <h5>Media</h5>
                                        <div className='details_social'>
                                            <Link><img src={Twintter} alt='icon' /><span>@release1</span></Link>
                                            <Link><img src={Fb} alt='icon' /><span>@release1</span></Link>
                                            <Link><img src={Insta} alt='icon' /><span>@release1</span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 p-4 product_description text-center">
                                    {/* <h2>BACHE-GABRIELSEN VSOP NATUR & ELEGANSE</h2> */}
                                    <h2>{product.release_name}</h2>
                                    <p className=" text-color"><span className='text-secondary'>Whiskey</span> <span className='mx-2'>|</span> <img src={Tag} className='me-2' alt='icon' /> <span>Favorite</span></p>
                                    <p className=" text-uppercase text-color mt-1 mb-2">Bache-Gabrielsen // Whisky, France</p>
                                    {/* <p>
                                    Bache-Gabrielsen is a revered cognac house started in 1905. The “Natur & Eleganse” line is supposed to be a break from their classical line signified with an non-traditional, short, squat bottle and a flavor profile that highlights “no-nonsense," “frank and fruity characters.” The four-plus year old brandy is all ugni blanc sourced from vines in mostly the Fins Bois, but also the Petite Champagne and Grande Champagne crus.
                                     </p> */}
                                    <p>{product.release_story}</p>
                                    <div className="mt-4">
                                        <div class="button">
                                            <img src={Arrow} alt='icon' />
                                            <span class="text-wrapper-28"> Find stores nearby</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ProductDescription;