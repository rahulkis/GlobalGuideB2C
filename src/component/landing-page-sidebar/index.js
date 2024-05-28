import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Brands from "../brands/Brands";
import Distilleries from "../distillery/Distilleries";
import ReleasesCatalogue from "../products/ReleasesCatalogue";
import Merchants from "../merchants/Merchants";

const SideBarRouting = () => {
  return (
    <>
      <Routes>
          <Route path='/' element = { <Home /> } />
          <Route  path='/brands' element = { <Brands /> } />
          <Route  path='/products' element = { <ReleasesCatalogue  /> } />
          <Route  path='/distilleries' element = { <Distilleries  /> } />
          <Route  path='/merchants' element = { <Merchants  /> } />
      </Routes> 
    </>
  );
}

export default SideBarRouting;