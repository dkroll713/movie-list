import React from 'react';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import WatchButton from './WatchButton.jsx';
import ListItem from './ListItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // unwatchedMovies: [],
      unwatchedMovies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      watchedMovies: [],
      showWatched: true,
    };
    // this.flipArrays = this.flipArrays.bind(this);
    this.toggleWatch = this.toggleWatch.bind(this);
    this.toggleUnwatch = this.toggleUnwatch.bind(this);
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

  showUnwatched = (event) => {
    var moviesToShow = this.state.unwatchedMovies;
    console.log(moviesToShow)
    console.log('this:', this.state)
    if (!this.state.showWatched) {
      this.setState({
        showWatched: !this.state.showWatched,
      })
    } else {
      console.log('state not changed')
    }
    console.log('state:', this.state.showWatched);
  }

  showWatched = (event) => {
    var moviesToShow = this.state.watchedMovies;
    console.log('show watched movies:', moviesToShow);
    if (this.state.showWatched) {
      this.setState({
        showWatched: !this.state.showWatched,
      })
    } else {
      console.log('state not changed')
    }
    console.log('state:', this.state.showWatched);
  }

  toggleWatch = event => {
    console.log(this.state.unwatchedMovies)
    console.log(event.target);
    var newUnwatchedMovies = JSON.parse(JSON.stringify(this.state.unwatchedMovies))
    var newWatchedMovies = JSON.parse(JSON.stringify(this.state.watchedMovies))
    for (var x = 0; x < newUnwatchedMovies.length; x++) {
      if (event.target.id === this.state.unwatchedMovies[x].title && !this.state.unwatchedMovies[x].watched) {
        var spliced = newUnwatchedMovies.splice(x, 1)
        spliced[0].watched = !spliced[0].watched
        newWatchedMovies.concat(spliced)
        console.log('new watched movies array:', newWatchedMovies)
        console.log('new unwatched movies array:', newUnwatchedMovies)
        this.setState({
          unwatchedMovies: newUnwatchedMovies,
          watchedMovies: this.state.watchedMovies.concat(spliced)
        })
      }
    }
    // console.log(this.state.unwatchedMovies)
  }

  toggleUnwatch = event => {
    console.log(this.state.watchedMovies)
    console.log(event.target);
    var newUnwatchedMovies = JSON.parse(JSON.stringify(this.state.unwatchedMovies))
    var newWatchedMovies = JSON.parse(JSON.stringify(this.state.watchedMovies))
    for (var x = 0; x < newWatchedMovies.length; x++) {
      if (event.target.id === this.state.watchedMovies[x].title && this.state.watchedMovies[x].watched) {
        var spliced = newWatchedMovies.splice(x, 1)
        spliced[0].watched = !spliced[0].watched
        console.log('spliced:', spliced)
        newUnwatchedMovies.concat(spliced)
        console.log('new watched movies array:', newWatchedMovies)
        console.log('new unwatched movies array:', newUnwatchedMovies)
        this.setState({
          unwatchedMovies: this.state.unwatchedMovies.concat(spliced),
          watchedMovies: newWatchedMovies
        })
      }
    }
    // console.log(this.state.unwatchedMovies)
  }

  render() {
    // console.log(this.state.movies)
    if (this.state.showWatched) {
      return (
        <div id="container">
          <Search onSubmit={this.movieSearch}/>
          <AddMovie onSubmit={this.addToList}/>
          <button onClick={this.showUnwatched}>Need to watch</button>
          <button onClick={this.showWatched}>Already Seen</button>
          <ul id="list">
            {this.state.unwatchedMovies.map(movie => {
              return <ListItem id={movie.title} key={movie.title} movie={movie}
              thing={this.toggleWatch}/>
            })}
          </ul>
        </div>
      )
    } else if (this.state.showWatched === false) {
      return (
        <div id="container">
          <Search onSubmit={this.movieSearch}/>
          <AddMovie onSubmit={this.addToList}/>
          <button onClick={this.showUnwatched}>Need to watch</button>
          <button onClick={this.showWatched}>Already Seen</button>
          <ul id="list">
            {this.state.watchedMovies.map(movie => {
              return <ListItem id={movie.title} key={movie.title} movie={movie} thing={this.toggleUnwatch}/>
            })}
          </ul>
        </div>
      )
    }
  }
}

export default App;