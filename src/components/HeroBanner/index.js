import React from 'react';
import { connect } from 'react-redux';

import {
  getTitle,
  getSlug
} from '../../reducers/menus';

// import dessert from '../../assets/dessert_1.png';
// import ingredients from '../../assets/ingredients_1.png';
import './index.css';

const HeroBanner = ({title, slug}) => (
    <section className="hero-banner max-width flex-center flex-column">
      <h1 className="hero-banner__title">{title}</h1>
      <span className="hero-banner__slug">{slug}</span>
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

const mapStateToProps = state => {
  return {
    title: getTitle(state),
    slug: getSlug(state)
  }
}

export default connect(mapStateToProps)(HeroBanner);
