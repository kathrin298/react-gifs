import React, { Component } from 'react';
import giphy from 'giphy-api';
import GifList from './gifList';
import Gif from './gif';
import SearchBar from './searchBar';

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGif: 'nSkE9L7Y3V7Ec/200.webp',
      gifs: ['nSkE9L7Y3V7Ec/200.webp']
    };
  }

  search = (query) => {
    giphy({apiKey: GIPHY_API_KEY})
      .search({
        api_key: GIPHY_API_KEY,
        q: query,
        rating: 'g',
        limit: 10
      }, (err, res) => {
        console.log(res);
        this.setState({ gifs: res.data });
      });
  }

  gifClick = (id) => {
    this.setState({ selectedGif: id });
  }


  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <Gif className="selected-gif" id={this.state.selectedGif} key={this.state.selectedGif} />
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} gifClick={this.gifClick} />
        </div>
      </div>
    );
  }
}

export default App;
