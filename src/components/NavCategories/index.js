import React, { Component } from 'react';

import CategoryItem from '../CategoryItem';
import './index.css';

class NavCategories extends Component {
  state = {
    category: null
  };

  handleClick = ({target}) => {
    this.setState({
      category: target.textContent
    });
  };

  render() {
    const mock_categories = [
      {name: 'Red wine'},
      {name: 'Entrées'},
      {name: 'Planches charcuterie'},
      {name: 'Desserts'}
    ];

    const categories = mock_categories.map(({name}, index) => (
      <CategoryItem
        key={index}
        name={name}
        handleClick={this.handleClick} />
    ));

    return (
      <div className="nav-categories flex-center flex-column">
        <ul className="nav-categories__list flex-center flex-row">
          {categories}
        </ul>
      </div>
    );
  }
}

export default NavCategories;
