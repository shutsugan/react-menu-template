import React from 'react';
import { connect } from 'react-redux';

import { getError } from '../../reducers/menus';

import './index.css';

const Error = ({message}) => (
  <div className="error flex-center flex-row">{message}</div>
);

const mapStateToProps = state => {
  return {
    message: getError(state)
  }
}

export default connect(mapStateToProps)(Error);
