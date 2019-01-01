import React from 'react';

import HeroBanner from '../HeroBanner';
import NavCategories from '../NavCategories';
import Menus from '../Menus';
import About from '../About';
import Contact from '../Contact';
import MainFooter from '../MainFooter';
import './index.css';

const Home = _ => (
    <div className="home flex-center flex-row">
        <HeroBanner />
        <NavCategories />
        <Menus />
        <About />
        <Contact />
        <MainFooter />
    </div>
);

export default Home;
