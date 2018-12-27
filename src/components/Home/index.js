import React from 'react';

import HeroBanner from '../HeroBanner';
import NavCategories from '../NavCategories';
import './index.css';

const Home = _ => (
    <div className="home flex-center flex-row">
        <HeroBanner />
        <NavCategories />
    </div>
);

export default Home;
