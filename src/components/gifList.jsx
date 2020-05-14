import React, { Component } from 'react';

class GifList extends Component {
  constructor(props) {
    super(props)
  }

  listGifs = (array) => {
    let list = '';
    array.forEach((el) => {
      list += `<gif id=${el.id} />`;
    });
    return list;
  }

  render() {
    return (
      <div className="gif-list">
        listGifs(this.props.gifs);
      </div>
    );
  }
}

export default GifList;
