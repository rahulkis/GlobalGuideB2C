import React, { useState } from 'react'
import productImg from "./../../../assets/images/Rose of Tastes.png"
const Flavours = () => {


  return (
    <div className='release_box boxes-bg my-4 flavours_sec'>
      <div className="row align-items-center">
        <div className="col-12 col-md-7">
          <div class="release-tab bg-transparent m-0">
            <div class="release-tab-header d-flex align-items-center ms-2 pe-0">
              <ul class="nav nav-tabs mb-0 border-bottom-0  " id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active px-2 ms-0" id="releases-tab" data-bs-toggle="tab"
                    data-bs-target="#releases" type="button" role="tab" aria-controls="releases"
                    aria-selected="true">Flavours</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link px-2" id="releases-tab1" data-bs-toggle="tab"
                    data-bs-target="#releases1" type="button" role="tab" aria-controls="releases1"
                    aria-selected="true">Aromas</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link px-2" id="releases-tab2" data-bs-toggle="tab"
                    data-bs-target="#releases2" type="button" role="tab" aria-controls="releases2"
                    aria-selected="true">Aftertaste</button>
                </li>
              </ul>
            </div>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="releases" role="tabpanel" aria-labelledby="releases-tab">
                <div className='row text-left m-8 falvours_tab_content'>
                  <div className='col-6 md-col-12  border'>
                    <h2>Color</h2> <p>Full gold</p>
                  </div>

                  <div className='col-6 md-col-12  border'>
                    <h2>Nose</h2> <p>The fragrance of sweet oak notes</p>
                  </div>

                  <div className='col-6 md-col-12  border'>
                    <h2>Palate</h2> <p>Even after 50 years the cask remains active offering seasonal spices of clove and cinnamon with remarkable freshness</p>


                  </div>

                  <div className='col-6 md-col-12  border'>
                    <h2>Finish</h2>
                    <p>It’s a beautifully structured whisky , with the cask and distillate in perfect harmony</p>
                  </div>

                </div>
              </div>
              <div class="tab-pane fade show" id="releases1" role="tabpanel" aria-labelledby="releases-tab1">
                <div className='row text-left m-8 falvours_tab_content'>
                  <div className='col-6 md-col-12  border'>
                    <h2>Color</h2> <p>Full gold</p>
                  </div>

                  <div className='col-6 md-col-12  border'>
                    <h2>Nose</h2> <p>The fragrance of sweet oak notes</p>
                  </div>

                  <div className='col-6 md-col-12  border'>
                    <h2>Palate</h2> <p>Even after 50 years the cask remains active offering seasonal spices of clove and cinnamon with remarkable freshness</p>


                  </div>

                  <div className='col-6 md-col-12  border'>
                    <h2>Finish</h2>
                    <p>It’s a beautifully structured whisky , with the cask and distillate in perfect harmony</p>
                  </div>

                </div>
              </div>
              <div class="tab-pane fade show" id="releases2" role="tabpanel" aria-labelledby="releases-tab2">
                <div className='row text-left m-8 falvours_tab_content'>
                  <div className='col-6 md-col-12  border'>
                    <h2>Color</h2> <p>Full gold</p>
                  </div>

                  <div className='col-6 md-col-12  border'>
                    <h2>Nose</h2> <p>The fragrance of sweet oak notes</p>
                  </div>

                  <div className='col-6 md-col-12  border'>
                    <h2>Palate</h2> <p>Even after 50 years the cask remains active offering seasonal spices of clove and cinnamon with remarkable freshness</p>


                  </div>

                  <div className='col-6 md-col-12  border'>
                    <h2>Finish</h2>
                    <p>It’s a beautifully structured whisky , with the cask and distillate in perfect harmony</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <img src={productImg} alt='' className='img-fluid' />
        </div>
      </div>


    </div>
  )
}

export default Flavours
