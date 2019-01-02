import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import './index.css';

class Contact extends Component {
  state = {
    mail: '',
    phone: ''
  };

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = event => {};

  render() {
    return (
      <div className="contact max-width flex-column">
        <ScrollableAnchor id={'subscribe'}>
          <h3 className="section__title mr-bt-none">Subscribe</h3>
        </ScrollableAnchor>
        <span className="contact__sub-title">
          subscribe to our newsletter to get your latest update
        </span>
        <div className="contact__wrapper flex-row">
          <form
            className="contact__form flex-row"
            onSubmit={this.handleSubmit}>

            <input
              className="contact__input"
              name="mail"
              type="mail"
              placeholder="Your email"
              value={this.state.mail}
              onChange={this.handleChange}
            />
            <input
              className="contact__input"
              name="phone"
              type="phone"
              placeholder="Your phone number"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <button
              className="contact__button"
              type="submit">

              Subscribe
            </button>
          </form>
          <div className="contact__circles">
            <div className="circle big-center"></div>
            <div className="circle mid-top"></div>
            <div className="circle mid-right"></div>
            <div className="circle small-center"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
