import React from 'react';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import WatchButton from './WatchButton.jsx';
import ListItem from './ListItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unwatchedMovies: [],
      watchedMovies: [],
    };
    this.flipArrays = this.flipArrays.bind(this);
  }

  movieSearch = (movieToBeSearched) => {
    var newMovies = []
    var movies = this.state.unwatchedMovies
    for (var x = 0; x < movies.length; x++) {
      var movie = movies[x]
      console.log(movie);
      if (movie.title.includes(movieToBeSearched)) {
        newMovies.push(movie)
      }
    }
    console.log('app level item:', movieToBeSearched);
    if (newMovies.length === 0) {
      newMovies.push({
        title: 'Sorry, no matches.'
      });
    }
    this.setState({
      unwatchedMovies: newMovies
    });
  }

  addToList = (movieToAdd) => {
    var newMovies = this.state.unwatchedMovies.slice()
    var movies = this.state.unwatchedMovies;
    newMovies.push({title: movieToAdd, watched: false})
    this.setState({
      unwatchedMovies: newMovies
    })
  }

  flipArrays = (event) => {
    console.log('flipped');
    // this.setState({
    //   watched: true
    // })
  }

  render() {
    // console.log(this.state.movies)
    return (
      <div id="container">
        <Search onSubmit={this.movieSearch}/>
        <AddMovie onSubmit={this.addToList}/>
        <button>Need to watch</button>
        <button>Already Seen</button>
        <ul id="list">
          {this.state.unwatchedMovies.map(movie => {
            return <ListItem movie={movie} thing={this.flipArrays}/>
          })}
        </ul>
      </div>
    )
  }
}

export default App;