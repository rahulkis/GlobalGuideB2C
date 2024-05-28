import React from 'react';
import { Link } from 'react-router-dom';
import LoginRightArrowImage from '../../assets/images/lognrightarrow.png.png';
import SidebarImg from '../../assets/images/sidebar-img.png';
import Twitter from '../../assets/images/s5.png'
import Facebook from '../../assets/images/s4.png'
import Insta from '../../assets/images/s3.png'

const Sidebar = () => {
    return (
        <>
            <header className="header landing-header">
                <div className="offcanvas offcanvas-start text-bg-dark landingpage-sidebar" tabindex="-1" id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-body">
                        <div className='row m-0'>
                            <div className='col-md-10'>
                                <ul className="navbar-nav flex-row flex-wrap landing-sidebar-menu">
                                    <li className="nav-item">
                                        <Link className="d-flex justify-content-between align-items-center nav-link active" aria-current="page" to="/products">Releases <img src={LoginRightArrowImage} alt='img' /></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="d-flex justify-content-between align-items-center nav-link" to="/merchants">Merchants <img src={LoginRightArrowImage} alt='img' /></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="d-flex justify-content-between align-items-center nav-link" to="#">Collections <img src={LoginRightArrowImage} alt='img' /></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="d-flex justify-content-between align-items-center nav-link" to="/brands">Brands <img src={LoginRightArrowImage} alt='img' /></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="d-flex justify-content-between align-items-center nav-link" to="#">Newsfeed <img src={LoginRightArrowImage} alt='img' /></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="d-flex justify-content-between align-items-center nav-link" to="#">Countries <img src={LoginRightArrowImage} alt='img' /></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="d-flex justify-content-between align-items-center nav-link" to="/distilleries">Distilleries <img src={LoginRightArrowImage} alt='img' /></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="d-flex justify-content-between align-items-center nav-link" to="#">History <img src={LoginRightArrowImage} alt='img' /></Link>
                                    </li>
                                </ul>

                                <div class="header_contactus d-flex align-items-center pt-5">
                                    <h2>Contact Us</h2>
                                    <div class="socal">
                                        <Link href="">
                                            <img src={Twitter} alt="img" />
                                        </Link>
                                        <Link href="">
                                            <img src={Facebook} alt="img" />
                                        </Link>
                                        <Link href="">
                                            <img src={Insta} alt="img" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-2'>
                                <img src={SidebarImg} alt='img' className='img-fiuld' />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Sidebar;
