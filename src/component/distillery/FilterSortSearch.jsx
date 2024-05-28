import React from 'react';
import './FilterSortSearch.css'; // Ensure this path is correct\
import SearchImage from '../../assets/images/search.svg';
import { Link } from 'react-router-dom';

const FilterSortSearch = () => {

    return (

        <div class="tab-filters">
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