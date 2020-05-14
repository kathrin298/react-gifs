import React, { Component } from 'react';
import GifList from './gifList';
import SearchBar from './searchBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGif: 1,
      gifs: []
    };
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
