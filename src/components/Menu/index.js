import React from 'react';

import './index.css';

const Menu = ({menu, handleClick}) => {
  const truncatName = name => {
    return name.length > 25
      ? name.substring(0, 25)
      : name;
  };

  return (
    <div
      className="menu flex-center flex-column"
      onClick={_ => handleClick(menu)}>
      <img
        className="menu__image"
        src={menu.image_url}
        alt={menu.name}
      />
      <div className="menu__name">{truncatName(menu.name)}</div>
      <div className="flex-center flex-row">
        <p className="menu__price price__text">{menu.price}€</p>
        <p className="menu__unit price__text">/portion</p>
      </div>
      <div
        className={
          `menu__sold
          ${
            menu.reduction
              ? 'menu__sold--active'
              : 'menu__sold--enactive'
          }
          `
        }>

        Sold {menu.reduction}
      </div>
    </div>
  );
}

export default Menu;
