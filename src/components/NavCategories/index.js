import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getCategories,
  getCategory
} from '../../reducers/menus';
import { setCategory} from '../../actions/menus';

import CategoryItem from '../CategoryItem';
import './index.css';

class NavCategories extends Component {
  handleClick = ({target}) => {
    this.props.dispatch(setCategory(target.textContent));
  };

  render() {
    const categories = this.props.categories.map((name, index) => (
      <CategoryItem
        key={index}
        name={name}
        category={this.props.category}
        handleClick={this.handleClick}
      />
    ));

    return (
      <div className="nav-categories max-width flex-center flex-column">
        <ul className="nav-categories__list flex-center flex-row">
          {categories}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: getCategories(state),
    category: getCategory(state)
  }
}

export default connect(mapStateToProps)(NavCategories);
