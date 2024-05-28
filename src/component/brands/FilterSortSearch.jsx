import React from 'react';
import './FilterSortSearch.css'; // Ensure this path is correct\
import SearchImage from '../../assets/images/search.svg';
import { Link } from 'react-router-dom';

const FilterSortSearch = () => {

  return (

    <div class="tab-filters">
      <div className="d-flex flex-wrap align-items-center mb-3">
        <span className="release-label me-3 mb-1 active">All</span>
        <span className="release-label me-3 mb-1 active ">Top Brands</span>
        <span className="release-label me-3 mb-1 ">New Brands</span>
        <span className="release-label me-3 mb-1 ">Recommended Brands</span>
      </div>
      <div class="filter-selects d-flex align-items-center">
        <select class="w-auto form-select me-3">
          <option>Filter</option>
          <option>Sort by</option>
        </select>
        <div class="d-flex align-items-center">
          <label class="text-white">Sort by:</label>
          <select class="w-auto form-select">
            <option>Newest/ Recent / Top Appreciatedlter</option>
            <option>Recent</option>
            <option>Newest</option>
            <option>Top Appreciatedlter</option>
          </select>
        </div>
        <Link href="#" class="ms-auto">
          <img class="search" src={SearchImage} alt='lll' />
        </Link>
      </div>
    </div>
  );
};

export default FilterSortSearch;