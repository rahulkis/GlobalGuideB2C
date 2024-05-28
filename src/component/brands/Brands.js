import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FilterSortSearch from './FilterSortSearch';
import Brand from './Brand';
import Polls from './Polls';
import Notifications from './Notifications';
import FavoriteBrands from './FavoriteBrands';
import Header from '../layout/Header';
import MainNavigation from '../MainNavigation';

const Brands = () => {
  const [brands, setBrands] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(process.env.REACT_APP_GLOBAL_SERVER_BRAND_API_URL) // Replace with your API endpoint
      .then(response => {
        setBrands(response.data.data);
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
      <div className="container brands_sec">
        <div className="row">
          <div className="col-12 col-md-8">
          <div class="release-tab">
            <div class="release-tab-header d-flex align-items-center">
                <ul class="nav nav-tabs mb-0 border-bottom-0" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                        <button class="nav-link active ps-4" id="releases-tab" data-bs-toggle="tab"
                            data-bs-target="#releases" type="button" role="tab" aria-controls="releases"
                            aria-selected="true">Brands</button>
                    </li>
                    </ul>
                    </div>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="releases" role="tabpanel" aria-labelledby="releases-tab">
              
                <FilterSortSearch />

                <div className="release-listing">
                {loading && <p>Loading...</p>}
                {error && loading === false ? <p>Error: {error.message || 'Something went wrong!'}</p>: ''}
                {error === false && loading === false && brands.length === 0  && <p>No record found </p>}
                {brands.length > 0 && brands.map((brand) => <Brand brand={brand} />) } 
                </div>

            </div>
            </div>
          </div>
          </div>
          <div className="col-12 col-md-4">
            <div className=''>
              <Polls />
              <Notifications />
              <FavoriteBrands />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
