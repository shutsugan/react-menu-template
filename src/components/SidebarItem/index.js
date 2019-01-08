import React from 'react';

import './index.css';

const SidebarItem = ({name, category, handleItem}) => (
  <div
    className={`sidebar-item ${(name === category) ? 'item-active': ''}`}
    onClick={handleItem}>
    {name}
  </div>
);

export default SidebarItem;
