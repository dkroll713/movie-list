import React from 'react';

class WatchButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      watched: false
    }
  }

  toggle = event => {
    console.log(this.state.watched)
    if (this.state.watched === false) {
      this.setState({
        watched: true
      })
    } else if (this.state.watched === true) {
      this.setState({
        watched: false
      })
    }
  }

  onClick = () => {
    this.toggle()
    this.props.clicker();
  }

  render() {
    console.log(this.props);
    return (
      <div className="col-4-5">
        <button className="watched" onClick={this.onClick}>Watched</button>
        {/* <button className="watched" onClick={this.props.onClick}>watched</button> */}
      </div>

    )
  }


}

export default WatchButton