import React from 'react';

import dessert from '../../assets/dessert_1.png';
import ingredients from '../../assets/ingredients_1.png';
import './index.css';

const HeroBanner = _ => (
    <section className="hero-banner flex-center flex-column">
      <h1 className="hero-banner__title">
        an award winning modern American restaurant
      </h1>
      <span className="hero-banner__slug">
        socialize, talk business, celebrate and indulge
      </span>
      {/*
      <img
        className="hero-banner__image-dessert"
        src={dessert}
        alt="dessert"
      />
      <img
        className="hero-banner__image-ingredients"
        src={ingredients}
        alt="ingredients"
      />
      */}
    </section>
);

export default HeroBanner;
