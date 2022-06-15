import React from 'react';
import WatchButton from './WatchButton.jsx';

class ListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <li key={this.props.movie.title}>
        {this.props.movie.title}
        <WatchButton clicker={this.props.thing}/>
        </li>
    )
  }
}

export default ListItem