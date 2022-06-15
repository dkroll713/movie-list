import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entry: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    // console.log(this);
    this.setState({
      entry: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.entry)
  }

  render() {
    return (
      <form id="addMovie" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a movie to the list"
          value={this.state.entry}
          onChange={this.handleChange}
        />
        <button>Add movie to list</button>
      </form>
    )
  }
}

export default AddMovie