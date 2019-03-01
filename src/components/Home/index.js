import React from 'react';

import loadable from '../../utils/loadable';

import './index.css';

const LoadableHeroBanner = loadable('components/HeroBanner', 200);
const LoadableMenus = loadable('components/Menus', 200);
const LoadableAbout = loadable('components/About', 200);
const LoadableContact = loadable('components/Contact', 200);
const LoadableMainFooter = loadable('components/MainFooter', 200);

const Home = _ => (
    <div className="home flex-center flex-row">
        <LoadableHeroBanner />
        <LoadableMenus />
        <LoadableAbout />
        <LoadableContact />
        <LoadableMainFooter />
    </div>
);

export default Home;
