import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterSortSearch from './FilterSortSearch';
import Distillerie from './Distillerie';
import Polls from './Polls';
import Notifications from './Notifications';
import FavoriteBrands from './FavoriteBrands';
import Header from '../layout/Header';
import MainNavigation from '../MainNavigation';
import { API_BASE_URL } from '../../constants/Api';
import { DISTILLERIES } from '../../constants/AppConstants';

const Distilleries = () => {
  const [distilleriesList, setDistilleriesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllDistilleries();
  }, []);

  const getAllDistilleries = async () => {
    try {
      const getDistilleriesList = await axios.get(API_BASE_URL + DISTILLERIES.GET_ALL_DISTILLERIES);
      if (getDistilleriesList.status === 200) {
        setDistilleriesList(getDistilleriesList.data.data);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <MainNavigation />
      <div className="container brands_sec distillerie_sec">
        <div className="row">
          <div className="col-12 col-md-8">
            <div class="release-tab">
              <div class="release-tab-header d-flex align-items-center">
                <ul class="nav nav-tabs mb-0 border-bottom-0" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active ps-4" id="releases-tab" data-bs-toggle="tab"
                      data-bs-target="#releases" type="button" role="tab" aria-controls="releases"
                      aria-selected="true">Distilleries</button>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="releases" role="tabpanel" aria-labelledby="releases-tab">
                  <FilterSortSearch />
                  <div className="release-listing">
                    {loading && <p>Loading...</p>}
                    {error && loading === false ? <p>Error: {error.message || 'Something went wrong!'}</p> : ''}
                    {error === false && loading === false && distilleriesList.length === 0 && <p>No record found </p>}
                    {distilleriesList.length > 0 && distilleriesList.map((distillery) => <Distillerie distillery={distillery} />)}
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

export default Distilleries;
