import React from 'react';
import useCollapse from 'react-collapse';

import apiKey from '../../../config.js';

import WatchButton from './WatchButton.jsx';
import Expanse from './Info.jsx'

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.text = React.createRef();
    this.state = {
      expanded: false,
    }
    this.info = null
  }

  expand = (event) => {
    console.log(event.target);
    if (this.state.expanded === false) {
      this.setState({
        expanded: true
      })
      this.infoTag = (
        <div>
          <p>Year: 1995</p>
          <p>Runtime: 107 min</p>
          <p>Metascore: 46</p>
          <p>imdbRating: 6.2</p>
          <p>Watched: <WatchButton movie={this.props.movie} clicker={this.props.thing}/></p>
        </div>
      )
    } else if (this.state.expanded === true) {
      this.setState({
        expanded: false,
      })
      this.infoTag = null
    }
  }

  makeRequest = movieName => {
    console.log(this.props.movie.title)
  }

  onClick = () => {
    this.expand(event)
    this.makeRequest()
  }

  render() {
    // console.log(this.props);
    // console.log(apiKey)
    return (
      <div>
        <li key={this.props.movie.title} onClick={this.onClick}>
          <div>{this.props.movie.title}<p>img</p></div>
          {this.infoTag}
        </li>
      </div>
    )
  }
}

export default ListItem