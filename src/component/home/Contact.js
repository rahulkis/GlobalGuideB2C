import React from 'react';
import Button2Image from '../../assets/images/button-2.svg';
import EmailIconImage from '../../assets/images/email-icon.png';
import ContactImage from '../../assets/images/contact.png';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      <section id="contact_us" className="contact_sec sec-pad">
        <div className="container">
          <div className="contact_inner">
            <div className="row">
              <div className="col-md-5">
                <div className="contact_form">
                  <h2 className="heading mb-3">Contact Us</h2>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" className="name form-control" placeholder="John Smith |" />
                      </div>
                      <div className="col-md-6">
                        <select className="form-select custom_select form-control">
                          <option selected>I am</option>
                          <option>I am</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-12">
                        <input type="email" className=" form-control" placeholder="Email" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Company" />
                      </div>
                      <div className="col-md-6">
                        <select className="form-select custom_select">
                          <option selected>Topic</option>
                          <option>Topic A</option>
                          <option>Topic B</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-12">
                        <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="trnd_buttons">
                    <Link href="#">
                      <img className="group" src={EmailIconImage} alt=''/> <span className="ms-2 text-color">info@globalguide.com</span>
                    </Link>
                    <Link href="#" className="button">
                      <img className="group" src={Button2Image} alt=''/>
                      <span className="text-wrapper-28">Submit</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="contact_img">
                  <img src={ContactImage} className="w-100 img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
