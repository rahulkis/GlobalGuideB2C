import React from 'react';
import logoImage from '../../assets/images/logo.png';
import SearchImage from '../../assets/images/search.svg';
import SaveImage from '../../assets/images/save.svg';
import { Link } from 'react-router-dom';

import LandingSidebar from '../landing-page-sidebar/Sidebar';

const Header = () => {
  return (
    <>
      <div className='header sticky-top'>
        <nav className="navbar navbar-dark bg-dark p-3">
          <div className="container-fluid">
            <div className="row w-100 align-items-center justify-content-betwee">
              <div className="col-2 col-md-4">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasDarkNavbar"
                  aria-controls="offcanvasDarkNavbar"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="col-8 col-md-4 text-center">
                <Link className="navbar-brand" to="/">
                  <img src={logoImage} alt="" />
                </Link>
              </div>

              <div className="col-2 col-md-4">
                <div className="d-md-flex align-items-center other-nav justify-content-end">
                  <Link href="#" className="text-dark me-md-3">
                    <img className="search" src={SearchImage} alt=''/>
                  </Link>
                  <Link href="#" className="text-dark me-md-3">
                    <img className="img-2" src={SaveImage} alt=''/>
                  </Link>
                  <Link href="#" className="link m-hide">
                    Sign In
                  </Link>
                  <Link href="#" className="link  m-hide">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <LandingSidebar />
          </div>
        </nav>
       </div>
    </>
  );
};

export default Header;
