import React from 'react';
import FooterS5Image from '../../assets/images/s5.png';
import FooterS4Image from '../../assets/images/s4.png';
import FooterS3Image from '../../assets/images/s3.png';
import FooterS2Image from '../../assets/images/s2.png';
import FooterS1Image from '../../assets/images/s1.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div class="footer-content">
        <h2>Global Guide</h2>
        <div class="socal">
          <Link href="">
            <img src={FooterS5Image} alt="" />
          </Link>
          <Link href="">
            <img src={FooterS4Image} alt="" />
          </Link>
          <Link href="">
            <img src={FooterS3Image} alt="" />
          </Link>
          <Link href="">
            <img src={FooterS2Image} alt="" />
          </Link>
          <Link href="">
            <img src={FooterS1Image} alt="" />
          </Link>
        </div>
        <div class="quick-links">
          <p>
            <Link href="#"> Blog</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Sitemap</Link>
            <Link href="#">Terms & condition</Link>
          </p>

          <p class="text-center">
            <span class="span">Copyright © 2023. All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
