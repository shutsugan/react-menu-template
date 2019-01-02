import React from 'react';

import Logo from '../Logo';
import './index.css';

const MainFooter = _ => (
  <div className="main-footer flex-center flex-row">
    <div className="footer__wrapper max-width flex-row">
      <Logo logo="oceanprime" label="Bar" reverse="true" />
      <p className="footer__text footer__label mr-rt">To contact us: </p>
      <p className="footer__text">ocean.prime@example.com</p>
      <p className="footer__divider"> | </p>
      <p className="footer__text">www.example.com</p>
      <p className="footer__divider"> | </p>
      <p className="footer__text">06-44-77-88-42</p>
    </div>
  </div>
);

export default MainFooter;
