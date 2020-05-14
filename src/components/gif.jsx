import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.clickGif(this.props.id);
  }

  render() {
    const url = "https://media2.giphy.com/media/";
    return (
      <img className="gif" src={url + this.props.id} alt="gif" onClick={this.handleClick}/>
    );
  }
}


// const Gif = () => {
//   return <img className="gif" src="https://media2.giphy.com/media/nSkE9L7Y3V7Ec/200.webp?cid=ecf05e473b332f0ccc2948130166b8268c2316666c98be61&amp;rid=200.webp" alt="gif" />;
// };

export default Gif;
