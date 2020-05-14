import React, { Component } from 'react';

class SearchBar extends Component {
  handleSearch = (event) => {
    this.props.searchFunction(event.currentTarget.value);
  }

  render () {
    return <input className="form-search form-control" type="text" placeholder="Search.." onChange={this.handleSearch} />;
  }
}


export default SearchBar;
