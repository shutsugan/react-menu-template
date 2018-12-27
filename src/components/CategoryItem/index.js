import React from 'react';

import './index.css';

const CategoryItem = ({name, handleClick}) => (
    <li
      className="category-item"
      onClick={handleClick}>

      {name}
    </li>
);

export default CategoryItem;
