import React from 'react';
import Button2Image from '../../assets/images/button-2.svg';
import MapPinImage from '../../assets/images/map-pin.png';
import RectangleImage from '../../assets/images/rectangle-80.png';

const News = () => {
  return (
    <>
      <section id="news" className="sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h2 className="heading">News</h2>
            </div>
            <div className="col-8">
              <div className="rt-hd top-m">
                <div className="button btn-right">
                  <img className="group" src={Button2Image} alt='ddd'/>
                  <span className="text-wrapper-28">Explore more</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="d-md-flex align-items-start">
              <div className="col-md-4">
                <div className="nav flex-column nav-pills me-md-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <button
                    className="ps-0 nav-link active"
                    id="news1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#news1"
                    type="button"
                    role="tab"
                    aria-controls="news1"
                    aria-selected="true"
                  >
                    <div className="news-tab">
                      <h6 className="announcement">ANNOUNCEMENT</h6>
                      <div className="date-place">
                        <div className="date">22 Dec</div>
                        <div className="gap">|</div>
                        <div className="place">
                          <img src={MapPinImage} alt="" />
                          <div className="text-wrapper-4">London</div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button
                    className="ps-0 nav-link"
                    id="news2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#news2"
                    type="button"
                    role="tab"
                    aria-controls="news2"
                    aria-selected="false"
                  >
                    <div className="news-tab">
                      <h6 className="announcement">ANNOUNCEMENT</h6>
                      <div className="date-place">
                        <div className="date">22 Dec</div>
                        <div className="gap">|</div>
                        <div className="place">
                          <img src={MapPinImage} alt="" />
                          <div className="text-wrapper-4">London</div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button
                    className="ps-0 nav-link"
                    id="news3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#news3"
                    type="button"
                    role="tab"
                    aria-controls="news3"
                    aria-selected="false"
                  >
                    <div className="news-tab">
                      <h6 className="announcement">ANNOUNCEMENT</h6>
                      <div className="date-place">
                        <div className="date">22 Dec</div>
                        <div className="gap">|</div>
                        <div className="place">
                          <img src={MapPinImage} alt="" />
                          <div className="text-wrapper-4">London</div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button
                    className="ps-0 nav-link"
                    id="news4-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#news4"
                    type="button"
                    role="tab"
                    aria-controls="news4"
                    aria-selected="false"
                  >
                    <div className="news-tab">
                      <h6 className="announcement">ANNOUNCEMENT</h6>
                      <div className="date-place">
                        <div className="date">22 Dec</div>
                        <div className="gap">|</div>
                        <div className="place">
                          <img src={MapPinImage} alt="" />
                          <div className="text-wrapper-4">London</div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button
                    className="ps-0 nav-link"
                    id="news5-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#news5"
                    type="button"
                    role="tab"
                    aria-controls="news5"
                    aria-selected="false"
                  >
                    <div className="news-tab">
                      <h6 className="announcement">ANNOUNCEMENT</h6>
                      <div className="date-place">
                        <div className="date">22 Dec</div>
                        <div className="gap">|</div>
                        <div className="place">
                          <img src={MapPinImage} alt="" />
                          <div className="text-wrapper-4">London</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="col-md-8 m-hide">
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="news1" role="tabpanel" aria-labelledby="news1-tab" tabindex="0">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-4">
                        <img src={RectangleImage} className="w-100" alt=''/>
                        <div className="date-place">
                          <div className="date">22 Dec</div>
                          <div className="gap">|</div>
                          <div className="place">
                            <img src={MapPinImage} alt="" />
                            <div className="text-wrapper-4">London</div>
                          </div>
                        </div>
                        <p className="p">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="news2" role="tabpanel" aria-labelledby="news2-tab" tabindex="0">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-4">
                        <img src={RectangleImage} className="w-100" alt=''/>
                        <div className="date-place">
                          <div className="date">22 Dec</div>
                          <div className="gap">|</div>
                          <div className="place">
                            <img src={MapPinImage} alt="" />
                            <div className="text-wrapper-4">London</div>
                          </div>
                        </div>
                        <p className="p">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="news3" role="tabpanel" aria-labelledby="news3-tab" tabindex="0">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-4">
                        <img src={RectangleImage} className="w-100" alt=''/>
                        <div className="date-place">
                          <div className="date">22 Dec</div>
                          <div className="gap">|</div>
                          <div className="place">
                            <img src={MapPinImage} alt="" />
                            <div className="text-wrapper-4">London</div>
                          </div>
                        </div>
                        <p className="p">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="news4" role="tabpanel" aria-labelledby="news4-tab" tabindex="0">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-4">
                        <img src={RectangleImage} className="w-100" alt=''/>
                        <div className="date-place">
                          <div className="date">22 Dec</div>
                          <div className="gap">|</div>
                          <div className="place">
                            <img src={MapPinImage} alt="" />
                            <div className="text-wrapper-4">London</div>
                          </div>
                        </div>
                        <p className="p">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="news5" role="tabpanel" aria-labelledby="news5-tab" tabindex="0">
                    .
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-4">
                        <img src={RectangleImage} className="w-100" alt=''/>
                        <div className="date-place">
                          <div className="date">22 Dec</div>
                          <div className="gap">|</div>
                          <div className="place">
                            <img src={MapPinImage} alt="" />
                            <div className="text-wrapper-4">London</div>
                          </div>
                        </div>
                        <p className="p">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
