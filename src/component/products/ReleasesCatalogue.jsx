import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductFilter from './ProductFilter';

import Product from './Product';
import Header from '../layout/Header';
import MainNavigation from '../MainNavigation';

const ReleasesCatalogue = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(process.env.REACT_APP_GLOBAL_SERVER_RELEASES_API_URL) // Replace with your API endpoint
      .then(response => {
        setProducts(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <MainNavigation />
      <div className="container mt-4">
        <div className="row g-3">
          <div className="col-12 col-md-9">
            <div className="box">
              <h3 className="text-uppercase">Releases Catalogue</h3>

              <div className="d-flex flex-wrap align-items-center mb-2">
                <span className="release-label me-3 mb-1 active">Top Releases</span>
                <span className="release-label me-3 mb-1">Recommended Releases</span>
                <span className="release-label me-3 mb-1">Premium Releases</span>
                <div className="ms-auto">
                  <select className="custom-selectbox ms-auto" id="sort-by">
                    <option value="">Sort By</option>
                    <option value="Name">Name</option>
                    <option value="Date">Date</option>
                    <option value="Relevance">Relevance</option>
                  </select>
                </div>
              </div>
              {loading && <p>Loading...</p>}
              {error && loading === false ? <p>Error: {error.message || 'Something went wrong!'}</p> : ''}
              {error === false && loading === false && products.length === 0 && <p>No record found </p>}
              {products.length > 0 && products.map((product) => <Product product={product} />)}
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="box">
              <ProductFilter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReleasesCatalogue;
