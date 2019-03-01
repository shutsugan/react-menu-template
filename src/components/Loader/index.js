import React from 'react';
import { connect } from 'react-redux';

import { getLoader } from '../../reducers/menus';

import './index.css';

const Loader = ({loading}) => (
  // <div className={`loader ${!loading ? 'loader--desactive' : ''}`}>
  <div className={`loader`}>
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    loading: getLoader(state)
  };
}

export default connect(mapStateToProps)(Loader);
