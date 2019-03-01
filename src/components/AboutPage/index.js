import React from 'react';

import loadable from '../../utils/loadable';

const LoadableAbout = loadable('components/About', 200);
const LoadableContact = loadable('components/Contact', 200);
const LoadableMainFooter = loadable('components/MainFooter', 200);

const AboutPage = _ => (
  <div className="about-page flex-center flex-column">
    <LoadableAbout />
    <LoadableContact />
    <LoadableMainFooter />
  </div>
);

export default AboutPage;
