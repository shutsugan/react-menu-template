import React from 'react';

import './index.css';

const CategoryItem = ({name, category, handleClick}) => (
    <li
      className={`category-item ${category === name ? 'selected' : ''}`}
      onClick={handleClick}>

      {name}
    </li>
);

export default CategoryItem;
