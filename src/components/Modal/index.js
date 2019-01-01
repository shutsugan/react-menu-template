import React, { Component, Fragment } from 'react';

import './index.css';

class Modal extends Component {
  state = {
    open: true
  };

  closeModal = _ => {
    this.setState({open: !this.state.open})
  };

  cancelCloseModal = event => {
    event.stopPropagation();
  }

  render() {
    let modal = '';
    if (this.state.open) {
      modal = (<div
        className="modal__overlay flex-center flex-row"
        onClick={this.closeModal}>

        <div
          className="modal shadow"
          onClick={this.cancelCloseModal}>
          <div className="modal__left flex-column">
            <h1 className="modal__title section__title">Menu item name</h1>
            <div className="modal__image-wrapper">
              <img
                className="modal__image"
                src="https://www.vegetarisme.fr/wp-content/uploads/2015/03/food.5.10.lg_.jpg"
                alt="name"
              />
            </div>
          </div>
          <div className="modal__right">
            <div className="modal__description-header flex-row">
              <div className="Modal__price flex-column">
                <span className="text-label">price:</span>
                €120.20
              </div>
              <span className={
                `modal__label
                ${
                  true
                    ? 'modal__label--active'
                    : 'modal__label--enactive'
                }
                `
              }>Sold</span>
            </div>
            <div className="modal__description flex-column">
              <span className="text-label">description:</span>
              Le vignoble de Bordeaux est le vignoble regroupant toutes les
              vignes du département de la Gironde, dans le Sud-Ouest de la
              France
            </div>
          </div>
        </div>
      </div>);
    }

    return (
      <Fragment>{modal}</Fragment>
    );
  }
}

export default Modal;
