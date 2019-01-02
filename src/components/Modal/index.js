import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { getMenu } from '../../reducers/menus';
import { setMenu } from '../../actions/menus';

import './index.css';

class Modal extends Component {
  closeModal = _ => this.props.dispatch(setMenu(null));
  cancelCloseModal = event =>   event.stopPropagation();

  render() {
    let modal = '';
    if (this.props.menu) {
      modal = (<div
        className="modal__overlay flex-center flex-row"
        onClick={this.closeModal}>

        <div
          className="modal shadow"
          onClick={this.cancelCloseModal}>
          <div className="modal__left flex-column">
            <h1 className="modal__title section__title">
              {this.props.menu.name}
            </h1>
            <div className="modal__image-wrapper">
              <img
                className="modal__image"
                src={this.props.menu.image_url}
                alt={this.props.menu.name}
              />
            </div>
          </div>
          <div className="modal__right">
            <div className="modal__description-header flex-row">
              <div className="Modal__price flex-column">
                <span className="text-label">price:</span>
                €{this.props.menu.price}
              </div>
              <span className={
                `modal__label
                ${
                  this.props.menu.reduction
                    ? 'modal__label--active'
                    : 'modal__label--enactive'
                }
                `
              }>Sold {this.props.menu.reduction}</span>
            </div>
            <div className="modal__description flex-column">
              <span className="text-label">description:</span>
              {this.props.menu.description}
            </div>
          </div>
        </div>
      </div>);
    }

    return (
      <Fragment>
        <ReactCSSTransitionGroup
          transitionName="modal"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>

          {modal}
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: getMenu(state)
  };
};

export default connect(mapStateToProps)(Modal);
