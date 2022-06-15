import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      entry: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // console.log('entry:', this.state.entry);
    // console.log('this:', this)
    // console.log(this.props.onSubmit);
    this.props.onSubmit(this.state.entry)
  }

  render() {
    // console.log(this.props);
    return (
      <form id="searchMovie" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter a movie"
          value={this.state.entry}
          onChange={this.handleChange}
        />
        <button type="submit">Search list</button>
      </form>
    )
  }
}

export default Search