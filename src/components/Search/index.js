import React, { Component } from 'react';
import { connect } from 'react-redux';
import FaSearch from 'react-icons/lib/fa/search';

import { getSearch } from '../../reducers/menus';
import { startSearch } from '../../actions/menus';

import './index.css';

class Search extends Component {
    state = {
        enable: false,
    };

    search: search;

    enableSearch = _ => {
        this.setState({
            enable: !this.state.enable
        }, _ => this.search.focus());
    };

    handleSearch = ({target}) => {
      this.props.dispatch(startSearch(target.value));
    }

    render() {
        return (
            <div
                className="search shadow search--mr-lf"
                onClick={this.enableSearch}>

                <input
                    ref={node => this.search = node}
                    className={
                        `search__input
                        ${
                            this.state.enable
                                ? 'search__input--grow'
                                : 'search__input--srink'
                        }`
                    }
                    name="search"
                    placeholder="Search here"
                    onChange={this.handleSearch}
                />
                <div className={
                        `search__icon
                        ${
                            this.state.enable
                                ? 'search__icon--hide'
                                : 'search__icon--show'
                        }`
                    }>

                    <FaSearch />
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
  return {
    search: getSearch(state)
  }
}

export default connect(mapStateToProps)(Search);
