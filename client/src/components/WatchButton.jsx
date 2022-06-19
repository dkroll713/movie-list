import React from 'react';

class WatchButton extends React.Component {
  constructor(props) {
    super(props)
  }

  onClick = (event) => {
    this.props.clicker(event)
  }

  render() {
    // console.log(this.props);
    return (
      <input type="radio" className="watched" id={this.props.movie.title} onClick={this.onClick}></input>
    )
  }


}

export default WatchButton