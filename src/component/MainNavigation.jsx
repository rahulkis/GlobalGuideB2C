import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <>
      <nav class="navigation navbar navbar-expand-md">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/brands" className="nav-link" >
                  Brands
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link" >
                  Releases
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/distilleries" className="nav-link" >
                  Distelleries
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/merchants" className="nav-link" >
                  Merchants
                </NavLink>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" >
                  Newsfeeds
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" >
                  History
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" >
                  Collections
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
