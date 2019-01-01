import React from 'react';

import About from '../About';
import Contact from '../Contact';
import MainFooter from '../MainFooter';

const AboutPage = _ => (
  <div className="about-page flex-center flex-column">
    <About />
    <Contact />
    <MainFooter />
  </div>
);

export default AboutPage;
