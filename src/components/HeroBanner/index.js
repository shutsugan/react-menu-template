import React from 'react';
import { connect } from 'react-redux';

import {
  getTitle,
  getSlug
} from '../../reducers/menus';

import './index.css';

const HeroBanner = ({title, slug}) => (
    <section className="hero-banner max-width flex-center flex-column">
      <h1 className="hero-banner__title">{title}</h1>
      <span className="hero-banner__slug">{slug}</span>
    </section>
);

const mapStateToProps = state => {
  return {
    title: getTitle(state),
    slug: getSlug(state)
  }
}

export default connect(mapStateToProps)(HeroBanner);
